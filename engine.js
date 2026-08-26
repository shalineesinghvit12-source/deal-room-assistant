/**
 * engine.js
 * ---------------------------------------------------------------
 * GENERIC INTERPRETER — deliberately thin and topic-agnostic.
 *
 * This file matches user input against TOPICS (topics.js) and
 * looks up document data from DOCUMENTS (documents.js). It has no
 * knowledge of legal concepts, document names, or firm-specific
 * language — that all lives in the two config files above. This
 * separation is the actual point of the demo: the engine is the
 * reusable "platform" piece; the config files are what a business
 * analyst (not a developer) would author and maintain in a real
 * low-code tool like Copilot Studio.
 * ---------------------------------------------------------------
 */

function findDocument(text) {
  const lower = text.toLowerCase();
  return DOCUMENTS.find((doc) => doc.keywords.some((kw) => lower.includes(kw)));
}

function matchTopic(text) {
  const lower = text.toLowerCase();
  return TOPICS.find((topic) => topic.triggers.some((t) => lower.includes(t)));
}

function severityWord(sev) {
  return sev === "High" ? "🔴 High" : sev === "Medium" ? "🟡 Medium" : "🟢 Low";
}

function respondSummarize(doc) {
  if (!doc) {
    return {
      text: "Which document would you like summarized?",
      quickReplies: DOCUMENTS.map((d) => d.name),
    };
  }
  return {
    text: `**${doc.name}** (${doc.counterparty})\n\n${doc.summary}\n\n**Key terms**\n${doc.keyTerms
      .map((k) => "• " + k)
      .join("\n")}`,
    quickReplies: ["Explain the risk flag on this", "Check review status", "Escalate for approval"],
  };
}

function respondStatus(doc) {
  if (doc) {
    return {
      text: `**${doc.name}** is currently **${doc.status}** (risk: ${severityWord(doc.risk)}).`,
      quickReplies: ["Summarize this document", "Explain the risk flag on this"],
    };
  }
  const lines = DOCUMENTS.map((d) => `• ${d.name} — ${d.status} (${severityWord(d.risk)})`).join("\n");
  return {
    text: `Here's the current status across Project Falcon:\n\n${lines}`,
    quickReplies: DOCUMENTS.filter((d) => d.status !== "Approved").map((d) => `Summarize ${d.name}`),
  };
}

function respondExplainFlag(doc) {
  if (!doc) {
    return {
      text: "Which document's risk flag do you want explained?",
      quickReplies: DOCUMENTS.filter((d) => d.flags.length).map((d) => d.name),
    };
  }
  const lines = doc.flags
    .map((f) => `**${severityWord(f.severity)} — ${f.title}**\n${f.detail}`)
    .join("\n\n");
  return {
    text: lines,
    quickReplies: ["Escalate for approval", "Check review status"],
  };
}

function respondEscalate(doc) {
  if (!doc) {
    return {
      text: "Which document should I route for attorney approval?",
      quickReplies: DOCUMENTS.filter((d) => d.status !== "Approved").map((d) => d.name),
    };
  }
  doc.status = "Pending attorney review";
  return {
    text: `Done — **${doc.name}** has been routed for attorney approval. In production this posts a Teams approval card and logs the request to the audit table.`,
    quickReplies: ["Check review status"],
  };
}

/**
 * Minimal conversation memory: when a response asks "which
 * document did you mean?", we remember which topic was in
 * progress so that the user's next message — typically just a
 * document name, clicked from a quick-reply button — is
 * interpreted as the answer to that question rather than matched
 * as a brand-new topic from scratch. This is the one piece of
 * "state" a real Copilot Studio topic (using slot-filling) would
 * also need to track.
 */
let pendingAction = null;
let lastDocument = null;

/**
 * The only "routing" logic in the whole engine — a simple switch
 * over the four possible actions declared in topics.js. Adding a
 * fifth topic means adding one case here and its response
 * function above; the matching logic itself never changes.
 */
function respond(userText) {
  let doc = findDocument(userText);
  let topic = matchTopic(userText);

  // Fall back to the in-progress topic if this message looks like
  // a document-name answer rather than a new request.
  if (!topic && pendingAction && doc) {
    topic = { action: pendingAction };
  }

  // Pronoun continuity: "explain the risk flag on THIS" should
  // resolve to whatever document was last discussed, if the
  // message doesn't name a different document explicitly.
  if (!doc && lastDocument && /\b(this|it|that)\b/i.test(userText)) {
    doc = lastDocument;
  }

  if (!topic) {
    pendingAction = null;
    return {
      text:
        "I can help with: summarizing a document, checking review status, explaining a risk flag, or escalating for approval. Which would you like?",
      quickReplies: TOPICS.map((t) => t.label),
    };
  }

  let result;
  switch (topic.action) {
    case "SUMMARIZE":
      result = respondSummarize(doc);
      break;
    case "STATUS":
      result = respondStatus(doc);
      break;
    case "EXPLAIN_FLAG":
      result = respondExplainFlag(doc);
      break;
    case "ESCALATE":
      result = respondEscalate(doc);
      break;
    default:
      result = { text: "I'm not sure how to help with that yet.", quickReplies: [] };
  }

  // Still no document resolved? Keep waiting on this same topic.
  // Otherwise the topic is complete — clear the pending state and
  // remember this document for pronoun continuity on the next turn.
  pendingAction = doc ? null : topic.action;
  if (doc) lastDocument = doc;
  return result;
}
