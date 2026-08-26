# Portfolio Evidence and Interview Guide

## What I implemented

I designed and built the working browser-based Deal Room Assistant, including:

- The conversational interface and quick-reply experience.
- Declarative conversation topics and trigger phrases.
- A fictional matter-document data model with summaries, terms, status and risk flags.
- Intent and document matching.
- Clarification and safe fallback behavior.
- Context retention for follow-up references such as “this” and “it.”
- A simulated attorney-review routing action.
- GitHub Pages deployment.
- Business analysis, traceability, testing, governance and delivery documentation.

## What I designed for a production implementation

I documented the target architecture for:

- Copilot Studio in Microsoft Teams.
- SharePoint or Dataverse as governed matter sources.
- Power Automate approval and notification flows.
- Entra ID authentication and matter permissions.
- Audit, retention, monitoring and support controls.

These target components are design evidence, not a claim that this public repository is connected to a production Microsoft tenant.

## Two-minute explanation

> I began with a transaction-review problem rather than with a technology choice: attorneys need faster access to summaries, status and material risk information, but AI output cannot bypass matter permissions or legal judgment. I translated that problem into a scoped set of use cases and requirements, then built a working chatbot prototype using fictional data.
>
> I separated conversation topics, matter records and the execution engine so the solution behaves like a configurable low-code product. The assistant can summarize documents, report review status, explain configured risk flags, maintain conversational context and route an item into a simulated attorney-review state. Unsupported requests fail safely.
>
> I then completed the delivery lifecycle with a charter, stakeholder model, user stories, RTM, UAT evidence, governance controls, adoption plan and production architecture. The public demo is intentionally deterministic and client-side. For production, I would move the experience to Copilot Studio in Teams, use permission-scoped SharePoint or Dataverse data and Power Automate for approval and audit. That distinction lets me demonstrate implementation judgment without overstating production experience.

## Likely interview questions

### Why did you not use a live language model?

The public prototype prioritizes transparency, repeatability and confidentiality. Deterministic matching makes every behavior reviewable. A tenant pilot would introduce grounded generative answers only after source, authorization and evaluation controls were approved.

### How did you prioritize the scope?

I selected four capabilities that combine visible user value with manageable risk: summary, status, risk explanation and human escalation. Live integrations and broader matter coverage belong after the core journey is validated.

### How is this more than a UI prototype?

The repository includes business objectives, requirements, use cases, acceptance criteria, RTM, architecture, exception handling, UAT, governance, operating model and adoption planning. The working UI is one evidence layer within the full delivery lifecycle.

### What is the most important production control?

Permission-aware grounding. A useful response is still unacceptable if a user can retrieve information from a matter they are not authorized to access. Human review, audit and source freshness are also release gates.

### How would you measure success?

I would baseline retrieval time and then measure grounded-answer rate, unsupported-answer rate, escalation completion, task completion, weekly adoption and user satisfaction during a controlled pilot.

## Resume-ready project statement

**Deal Room Assistant | Legal AI, Business Analysis, Copilot Studio and Power Automate Design**

Designed and implemented a governed M&A due-diligence chatbot prototype covering document summaries, review status, risk explanations and human escalation; produced the supporting business case, requirements, use cases, RTM, UAT, governance controls and Microsoft 365 target architecture.
