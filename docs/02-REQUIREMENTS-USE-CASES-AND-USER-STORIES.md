# Requirements, Use Cases and User Stories

## Personas

- **Deal team attorney:** needs a rapid overview before reviewing source documents.
- **Matter partner:** needs visibility into unresolved high-risk items.
- **Legal operations analyst:** needs consistent status and routing behavior.
- **Knowledge or technology administrator:** maintains source records, topics and controls.

## Functional requirements

| ID | Requirement | Priority |
| --- | --- | --- |
| FR-01 | The assistant shall accept free-text questions and quick-reply selections. | Must |
| FR-02 | The assistant shall identify requests to summarize a matter document. | Must |
| FR-03 | The assistant shall return the review status and risk level for a named document. | Must |
| FR-04 | The assistant shall explain configured risk flags for a named document. | Must |
| FR-05 | The assistant shall list outstanding document reviews for the matter. | Must |
| FR-06 | The assistant shall request document clarification when the document is ambiguous or missing. | Must |
| FR-07 | The assistant shall retain the last referenced document for contextual follow-up questions. | Should |
| FR-08 | The assistant shall route a selected document to the attorney-review state. | Must |
| FR-09 | The assistant shall present a safe fallback when it cannot match the request. | Must |
| FR-10 | The assistant shall display a clear attorney-review disclaimer. | Must |
| FR-11 | Conversation topics and document content shall be maintained separately from the generic engine. | Should |
| FR-12 | The target design shall support approved Microsoft 365 data and workflow connectors. | Could |

## Nonfunctional requirements

| ID | Requirement |
| --- | --- |
| NFR-01 | The public prototype shall contain only fictional data. |
| NFR-02 | A user shall be able to complete an in-scope task without training. |
| NFR-03 | The prototype shall load in a modern browser without a build process. |
| NFR-04 | The interface shall support keyboard submission and readable contrast. |
| NFR-05 | Production design shall enforce identity, matter access and least privilege. |
| NFR-06 | Production responses and approval events shall be auditable. |
| NFR-07 | The solution shall fail safely when a source, connector or workflow is unavailable. |
| NFR-08 | AI output shall be advisory and shall not represent final legal advice. |

## Use cases

### UC-01: Summarize a document

**Actor:** Deal team attorney  
**Precondition:** The document exists in the controlled matter dataset.  
**Trigger:** The user asks for a summary.  
**Main flow:**

1. The assistant matches the summarize intent.
2. It resolves the named document.
3. It returns the configured summary and key terms.
4. It offers relevant follow-up options.

**Alternate flow:** If no document is resolved, the assistant asks the user to choose one.  
**Outcome:** The user receives a concise, grounded orientation before source review.

### UC-02: Check review status

**Actor:** Attorney or legal operations analyst  
**Trigger:** The user asks what is pending or requests a document status.  
**Main flow:** The assistant returns either the selected document status or the matter-wide status list.  
**Outcome:** The user can identify outstanding review work.

### UC-03: Explain a risk flag

**Actor:** Deal team attorney  
**Trigger:** The user asks why a document or clause was flagged.  
**Main flow:** The assistant resolves the document, displays severity, title and configured explanation, then offers escalation.  
**Outcome:** The user understands the reason for attention without treating it as final legal advice.

### UC-04: Route for attorney review

**Actor:** Attorney or legal operations analyst  
**Trigger:** The user asks to escalate or send a document for approval.  
**Main flow:** The assistant resolves the document, changes the demo status to pending attorney review and confirms the routing simulation.  
**Production variation:** Power Automate creates an approval request, Teams card and audit event.  
**Outcome:** Material items enter a controlled human-review path.

### UC-05: Recover from an unsupported request

**Actor:** Any authorized user  
**Trigger:** The assistant cannot match an intent.  
**Main flow:** It provides the supported task menu without inventing an answer.  
**Outcome:** The user is safely redirected.

## User stories and acceptance criteria

### US-01: Document summary

As a transaction attorney, I want a concise document summary so that I can orient myself before reviewing the source.

- Given a known document and a summary request, when I submit the message, then the configured summary and key terms are displayed.
- Given no document name, when I request a summary, then the assistant asks me to select a document.
- The response does not state that the summary replaces legal review.

### US-02: Contextual follow-up

As a user, I want follow-up questions such as “explain the risk on this” to retain context so that the conversation feels natural.

- Given that a document was previously resolved, when I use “this,” “it” or “that,” then the same document is used.
- Given no prior document context, the assistant asks for clarification.

### US-03: Matter status

As a legal operations analyst, I want a matter-level view of pending reviews so that I can identify bottlenecks.

- A general status request lists every configured document and its status.
- A named status request returns only the requested document.
- Risk severity is visibly differentiated.

### US-04: Human escalation

As a matter team member, I want a material item routed for attorney review so that AI assistance does not bypass accountable judgment.

- The action requires a resolvable document.
- The prototype confirms that routing is simulated.
- The target design creates an approval and audit record.
