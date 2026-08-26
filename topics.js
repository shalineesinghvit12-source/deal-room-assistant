/**
 * topics.js
 * ---------------------------------------------------------------
 * CONVERSATION LOGIC LAYER — declarative, no branching code here.
 *
 * This mirrors how Microsoft Copilot Studio structures a real
 * agent: each "topic" has trigger phrases and an action, and the
 * underlying engine (engine.js) is a thin, generic interpreter
 * that almost never needs to change. In production, this file
 * would not exist — these four topics would be authored directly
 * in Copilot Studio's topic canvas, with the SharePoint/Dataverse
 * connector replacing the DOCUMENTS lookup below.
 *
 * To add a new conversational capability to this demo, you edit
 * this file only — that's the point of a low-code design.
 * ---------------------------------------------------------------
 */

const TOPICS = [
  {
    id: "summarize",
    label: "Summarize a document",
    triggers: ["summarize", "summary", "what does", "tell me about"],
    action: "SUMMARIZE",
  },
  {
    id: "status",
    label: "Check review status",
    triggers: ["status", "pending", "what's outstanding", "still pending", "review status"],
    action: "STATUS",
  },
  {
    id: "explain_flag",
    label: "Explain a risk flag",
    triggers: ["why was", "risk flag", "explain the risk", "flagged", "why is this flagged"],
    action: "EXPLAIN_FLAG",
  },
  {
    id: "escalate",
    label: "Escalate for approval",
    triggers: [
      "send for approval",
      "for approval",
      "escalate",
      "needs a human",
      "route to attorney",
      "approve this",
    ],
    action: "ESCALATE",
  },
];

const GREETING =
  "Hi, I'm the Deal Room Assistant for Project Falcon. I can summarize a document, check review status, explain a risk flag, or escalate something for attorney approval. What do you need?";

const GOVERNANCE_NOTE =
  "Reminder: everything I generate is AI-assisted and requires attorney review before it's treated as final.";
