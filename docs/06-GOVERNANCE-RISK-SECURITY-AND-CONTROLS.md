# Governance, Risk, Security and Controls

## Responsible-use position

The assistant supports navigation and triage. It does not provide final legal advice, make approval decisions or release content without accountable human review.

## Risk register

| ID | Risk | Impact | Control | Owner |
| --- | --- | --- | --- | --- |
| R-01 | Confidential matter data exposed to an unauthorized user | Critical | Entra ID, matter-level permissions, least privilege and access reviews | Information Security |
| R-02 | AI produces an unsupported or misleading answer | High | Approved sources, grounding evaluation, visible disclaimer and human review | Product Owner / KM |
| R-03 | User relies on a summary instead of reviewing the source | High | Source links, limitation language and attorney accountability | Matter Partner |
| R-04 | Approval request is lost or duplicated | High | Durable status, idempotency key, retry policy and monitoring | Technology Owner |
| R-05 | Stale document metadata produces an incorrect status | High | Source ownership, timestamps, reconciliation and data-quality checks | Legal Operations |
| R-06 | Prompt injection attempts to override controls | High | Instruction hierarchy, input evaluation, restricted tools and red-team testing | AI Governance |
| R-07 | Matter data is retained longer than permitted | High | Retention label, disposal policy and documented data lifecycle | Records / Privacy |
| R-08 | Low adoption prevents expected value | Medium | Co-design, champion network, training and feedback loop | Change Lead |
| R-09 | Model, connector or platform outage interrupts service | Medium | Fail-safe message, support alert, fallback process and runbook | Service Owner |
| R-10 | Portfolio evidence is interpreted as production deployment | Medium | Explicit implementation boundary in README and documentation | Author |

## Control gates

### Before pilot

- Approved use case, owner and success measures.
- Security, privacy and records assessment.
- Approved knowledge sources and data classification.
- Role and permission testing.
- Documented human-review thresholds.
- Prompt and response evaluation.
- Support, incident and rollback procedures.
- Named data, product and service owners.

### Before wider release

- Pilot KPI evidence and user feedback.
- Resolved critical defects.
- Completed model and connector risk review.
- Monitoring and alert thresholds.
- Periodic access and content review schedule.
- Training and acceptable-use acknowledgement.

## RACI

| Activity | Product owner | Matter partner | Legal operations | Technology | Security / Privacy | Knowledge management |
| --- | --- | --- | --- | --- | --- | --- |
| Prioritize use cases | A/R | C | C | C | C | C |
| Approve legal workflow | C | A/R | C | I | I | C |
| Maintain source content | C | A | R | I | C | R |
| Configure and release solution | A | C | C | R | C | C |
| Approve security controls | I | C | I | C | A/R | I |
| Monitor adoption and value | A | C | R | C | I | C |
| Manage incidents | A | C | C | R | R | C |

A = Accountable, R = Responsible, C = Consulted, I = Informed.

## Audit events for production

- User and matter context.
- Input classification and selected knowledge records.
- Generated response identifier and source references.
- Escalation reason and approval request identifier.
- Reviewer decision, comments and timestamp.
- Connector or model failure.
- Configuration and knowledge-source version.
- Final disposition and retention status.

Sensitive content should be minimized in operational logs and protected according to matter, privacy and records requirements.
