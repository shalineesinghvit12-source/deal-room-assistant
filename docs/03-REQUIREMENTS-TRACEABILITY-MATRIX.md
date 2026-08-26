# Requirements Traceability Matrix

This matrix connects business objectives to requirements, implemented components and UAT evidence. “Implemented” refers to the browser prototype. “Target design” identifies production capabilities documented but not claimed as deployed.

| Objective | Requirement | Implementation evidence | Test case | Status |
| --- | --- | --- | --- | --- |
| O-01 Faster information access | FR-01 | `index.html` chat input and quick replies | UAT-01 | Implemented |
| O-01 Faster information access | FR-02 | `topics.js` SUMMARIZE topic; `respondSummarize` | UAT-02, UAT-03 | Implemented |
| O-01 Faster information access | FR-03 | `respondStatus` and `documents.js` status fields | UAT-04, UAT-05 | Implemented |
| O-02 Ground responses in controlled records | FR-04 | `documents.js` flags; `respondExplainFlag` | UAT-06 | Implemented |
| O-02 Ground responses in controlled records | FR-06 | Missing-document clarification and quick replies | UAT-03, UAT-07 | Implemented |
| O-03 Improve conversational usability | FR-07 | `lastDocument` and pronoun-resolution logic | UAT-08 | Implemented |
| O-04 Preserve human accountability | FR-08 | `respondEscalate` simulated routing state | UAT-09 | Implemented |
| O-04 Preserve human accountability | FR-10 | Governance strip in `index.html` | UAT-10 | Implemented |
| O-05 Avoid unsupported answers | FR-09 | Default safe fallback in `respond` | UAT-11 | Implemented |
| O-06 Enable low-code maintainability | FR-11 | Separation of `topics.js`, `documents.js` and `engine.js` | UAT-12 | Implemented |
| O-07 Support enterprise deployment | FR-12 | Microsoft 365 mapping in `docs/ARCHITECTURE.md` | DES-01 | Target design |
| O-07 Support enterprise deployment | NFR-05 | Entra ID and permission model | SEC-01 | Target design |
| O-07 Support enterprise deployment | NFR-06 | Power Automate and audit-store design | SEC-02 | Target design |
| O-08 Protect confidentiality | NFR-01 | Fictional Project Falcon dataset | UAT-13 | Implemented |
| O-08 Protect confidentiality | NFR-07 | Safe fallback and production exception design | UAT-11, RES-01 | Partial / target design |
| O-04 Preserve human accountability | NFR-08 | Governance notice and escalation pattern | UAT-09, UAT-10 | Implemented |

## Traceability rules

- Every Must requirement requires at least one acceptance criterion and test case.
- A failed Must requirement blocks pilot release.
- Target-design items require platform configuration evidence before they can be marked implemented.
- Changes to a requirement must update its linked design, test and risk entries.
