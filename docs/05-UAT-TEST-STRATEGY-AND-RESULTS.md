# UAT, Test Strategy and Results

## Test approach

I used risk-based testing to cover the core user journeys, context handling, safe fallback and governance behavior. The public prototype is deterministic, so its functional results can be reproduced directly in the live demo.

## Entry criteria

- Functional requirements and acceptance criteria are approved for the prototype.
- Synthetic matter records are loaded.
- The live demo opens in a supported browser.
- The four conversational topics are available.
- No real client or firm data is present.

## UAT cases

| ID | Scenario and input | Expected result | Result |
| --- | --- | --- | --- |
| UAT-01 | Open the assistant and submit a chat message | Greeting, input and response render correctly | Pass |
| UAT-02 | “Summarize the MSA” | MSA summary and key terms appear | Pass |
| UAT-03 | “Summarize a document” | Assistant asks which document and offers choices | Pass |
| UAT-04 | “What is the status of the credit agreement?” | Credit agreement status and risk appear | Pass |
| UAT-05 | “What is still pending?” | Matter-wide status list appears | Pass |
| UAT-06 | “Why was section 14.2 flagged?” | High-risk MSA explanation appears | Pass |
| UAT-07 | “Explain a risk flag” without context | Assistant requests a document | Pass |
| UAT-08 | Summarize the MSA, then “Explain the risk flag on this” | Follow-up resolves to the MSA | Pass |
| UAT-09 | “Send the CTO agreement for approval” | CTO status is set to pending attorney review and confirmation appears | Pass |
| UAT-10 | Inspect the interface | Attorney-review warning remains visible | Pass |
| UAT-11 | Enter an unsupported request | Safe capability menu appears; no invented answer | Pass |
| UAT-12 | Add a new trigger phrase in `topics.js` | Conversation configuration changes without restructuring the data layer | Pass |
| UAT-13 | Review repository data | Only fictional Project Falcon information is present | Pass |

## Negative and exception tests

| ID | Condition | Expected control |
| --- | --- | --- |
| NEG-01 | Empty message | No message or action is produced |
| NEG-02 | Unknown document | Clarification is requested |
| NEG-03 | Unsupported intent | Fallback menu is returned |
| NEG-04 | Escalation without a document | Document selection is required |
| NEG-05 | Follow-up pronoun without prior context | Clarification is requested |
| NEG-06 | Attempt to treat output as final advice | Visible governance message indicates attorney review is required |

## Production test coverage required

Before a tenant pilot, I would add:

- Connector authentication and expired-connection tests.
- Entra ID role and matter-access tests.
- SharePoint or Dataverse record-level authorization tests.
- Power Automate retry, timeout and duplicate-request tests.
- Prompt-injection, data-exfiltration and unsupported-answer evaluations.
- Grounding and citation accuracy evaluation.
- Accessibility testing against the organization’s standard.
- Performance and concurrency testing.
- Audit-log completeness and retention verification.
- Business continuity and rollback testing.

## Exit criteria

- All Must requirements pass.
- No unresolved critical confidentiality or authorization defect exists.
- Unsupported-answer and escalation controls meet pilot thresholds.
- The business owner, matter representative, security and support owner approve release.
- Training, support and rollback materials are ready.

## Evidence boundary

The Pass results above apply to the browser prototype behavior. They do not represent a test of Copilot Studio, Power Automate, SharePoint, Dataverse or a production legal environment.
