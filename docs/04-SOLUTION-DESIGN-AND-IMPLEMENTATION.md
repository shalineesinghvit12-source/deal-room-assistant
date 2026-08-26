# Solution Design and Implementation Record

## Design approach

I separated conversation configuration, matter data and execution logic to model the way a business analyst works with a low-code agent platform. This keeps the prototype easy to review and makes the production mapping explicit.

| Layer | Implemented component | Responsibility |
| --- | --- | --- |
| Experience | `index.html`, `style.css` | Chat interface, disclaimer, quick replies and accessible interaction |
| Conversation configuration | `topics.js` | Supported intents, trigger phrases and user-facing labels |
| Matter data | `documents.js` | Fictional documents, summaries, terms, statuses and risk flags |
| Orchestration | `engine.js` | Intent matching, document resolution, context and response routing |
| Hosting | GitHub Pages | Portable demonstration outside a Microsoft tenant |

## Implemented workflow

1. The user enters a question or selects a quick reply.
2. `matchTopic` resolves the configured intent.
3. `findDocument` identifies the matter document from controlled keywords.
4. The engine runs the corresponding response function.
5. The response is rendered with the next appropriate actions.
6. When the user refers to “this” or “it,” the assistant uses the last resolved document.
7. Unsupported requests return the task menu instead of an invented answer.
8. Escalation changes the prototype record to pending attorney review and clearly describes the production equivalent.

## Microsoft 365 target architecture

| Capability | Target component |
| --- | --- |
| Teams conversational experience | Copilot Studio agent published to Microsoft Teams |
| Natural-language orchestration | Copilot Studio topics and generative orchestration |
| Matter knowledge | Permission-scoped SharePoint libraries and metadata |
| Transaction tracking | Dataverse or governed SharePoint list |
| Approval and notification | Power Automate and Teams Adaptive Cards |
| Authentication | Microsoft Entra ID |
| Audit and monitoring | Dataverse, Power Platform administration and approved reporting |
| Retention and information protection | Microsoft Purview and firm retention policy |

## Exception-handling design

| Failure | User behavior | Operational behavior |
| --- | --- | --- |
| Intent not recognized | Show supported actions | Record unmatched utterance for topic improvement |
| Document not resolved | Ask for document selection | No action is performed |
| Knowledge source unavailable | State that the source is unavailable | Log failure and stop response generation |
| Approval connector fails | Confirm that routing was not completed | Retry within policy, then alert support |
| User lacks matter access | Do not reveal matter content | Deny access and record authorization event |
| AI confidence or grounding is insufficient | Require human review | Mark output as unverified and prevent automated release |
| Duplicate escalation | Inform user that review is already pending | Use an idempotency key to avoid duplicate requests |

## Key design decisions

| ID | Decision | Reason |
| --- | --- | --- |
| ADR-01 | Use synthetic, client-side data for the public demonstration | Protect confidentiality and allow unrestricted review |
| ADR-02 | Separate declarative topic and document configuration from the engine | Demonstrate low-code maintainability |
| ADR-03 | Keep escalation human-controlled | Preserve legal accountability |
| ADR-04 | Use deterministic matching in the public prototype | Make behavior transparent and reproducible |
| ADR-05 | Map rather than claim Microsoft integrations | Distinguish implemented evidence from production design |
| ADR-06 | Keep the existing technical workflow intact | Preserve the working demonstration and its reviewability |

## Definition of done

A feature is complete when its requirement, acceptance criteria, implementation, test evidence, exception behavior and documentation are updated and reviewed.
