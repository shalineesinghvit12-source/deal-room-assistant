# Architecture — Demo vs. Production

This document maps every piece of the GitHub Pages demo to what it would actually be built on inside a Microsoft 365 tenant. It's meant to be read alongside the demo by a technical reviewer who wants to know "okay, but how would this really work."

## Component mapping

| Demo (this repo) | Production equivalent | Notes |
|---|---|---|
| `documents.js` (static array) | SharePoint list / Dataverse table, populated by a Power Automate flow | See the tracking list schema in the companion setup guide |
| `topics.js` (trigger phrases + labels) | Copilot Studio topic canvas | Each entry here is close to a 1:1 mapping to a Copilot Studio topic's trigger phrases |
| `engine.js` (`matchTopic`, `findDocument`) | Copilot Studio's built-in NLU / topic matching | Production matching is semantic, not substring-based, and far more tolerant of phrasing |
| Pronoun continuity (`lastDocument`) | Copilot Studio's entity and slot-filling memory within a conversation | Same concept, native platform support instead of a hand-rolled variable |
| "Escalate for approval" action | A Power Automate flow call from within the Copilot Studio topic (`Call an action` → cloud flow) | This is exactly Flow 3 (Approval & Write-back) from the implementation guide |
| Static hosting (GitHub Pages) | Microsoft Teams channel (Copilot Studio → Channels → Microsoft Teams) | The demo exists on GitHub purely so it's shareable outside a tenant; the real agent lives inside Teams |
| No authentication | Entra ID (Azure AD) identity, inherited by Copilot Studio and the SharePoint/Dataverse connector | Permission scoping — a user only sees data they already have access to — happens automatically because the connector authenticates as the signed-in user |

## Why a static demo instead of a real Copilot Studio export

Copilot Studio agents are tenant-bound — they can't be exported as a runnable artifact, opened in a browser, or hosted for public viewing. A recorded video or a set of screenshots is the usual way people share a Copilot Studio build outside its tenant. This repo takes a different approach: rebuild the *same conversational design* — topics, trigger phrases, document grounding, human-in-the-loop escalation — using only static HTML/CSS/JS, so it can be:

- Opened by anyone with a browser, no license or tenant access required.
- Read top-to-bottom as source code in about five minutes.
- Hosted for free and linked directly in an interview or on a resume.

The tradeoff is explicit: this demo's "AI" is deterministic trigger-phrase matching, not a language model. That's a fair trade for portability, as long as it's stated plainly — which is why this file exists.

## What would change first in a real build

1. **Matching** — swap `matchTopic`/`findDocument` for Copilot Studio's generative answers grounded on a SharePoint/Dataverse knowledge source, so phrasing variation and genuinely open-ended questions are handled instead of fixed trigger phrases.
2. **Data** — swap the static `DOCUMENTS` array for a live SharePoint list connector, populated by the intake and AI-analysis flows described in the implementation guide.
3. **Actions** — swap the in-memory `doc.status = ...` mutation in `respondEscalate` for an actual Power Automate flow call, so escalation produces a real Teams approval card and a real audit log entry.
4. **Identity** — add Entra ID authentication so permission scoping is enforced by the platform, not assumed by the demo.

Everything else — the four-topic structure, the document-grounded responses, the human-in-the-loop escalation pattern — carries over directly.
