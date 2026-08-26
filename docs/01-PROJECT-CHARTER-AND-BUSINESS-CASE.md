# Project Charter and Business Case

## Purpose

I designed the Deal Room Assistant to explore how a governed conversational experience could reduce the time legal teams spend locating due-diligence information, interpreting review status and routing material risks for attorney attention.

The implemented browser prototype uses fictional Project Falcon data. It demonstrates the user journey and decision logic without exposing client information or claiming to be a production legal system.

## Problem statement

During a transaction, reviewers may need to move between document repositories, trackers, email and chat to answer basic questions. This creates avoidable search time, inconsistent status information and a risk that an AI-generated observation could be mistaken for an approved legal conclusion.

## Objectives

- Provide one conversational entry point for document summaries, status and risk explanations.
- Ground every response in a controlled matter-document record.
- Preserve conversational context for follow-up questions.
- Keep attorney judgment in the approval path.
- Make the prototype portable while defining a credible Microsoft 365 production architecture.
- Produce traceable requirements, design decisions and test evidence.

## Scope

### In scope

- Fictional M&A due-diligence matter and document records.
- Four conversational capabilities: summarize, status, explain risk and escalate.
- Context continuity for document follow-ups.
- Quick-reply navigation and fallback behavior.
- Visible attorney-review notice.
- Target-state mapping to Copilot Studio, Teams, SharePoint or Dataverse and Power Automate.
- Requirements, RTM, UAT, governance and adoption artifacts.

### Out of scope

- Legal advice or autonomous legal decisions.
- Real client or firm data.
- Authentication, matter-level ethical walls or production authorization.
- Live Microsoft 365 connectors.
- A production language model, vector store or audit platform.
- Automated approval or external communication.

## Stakeholders

| Stakeholder | Need | Engagement |
| --- | --- | --- |
| Transaction attorneys | Fast, reliable matter answers with source context | Discovery, prototype reviews and UAT |
| Matter partner | Oversight of risk, approval and accountability | Governance and go-live decisions |
| Legal operations | Consistent intake, tracking and measurable adoption | Process design and KPI ownership |
| Knowledge management | Approved content structure and taxonomy | Data and knowledge design |
| Information security and privacy | Access control, retention and safe AI use | Risk review and control approval |
| Technology team | Supportable integration and operating model | Architecture and implementation planning |
| Business analyst / product owner | Prioritization, requirements and value tracking | End-to-end delivery ownership |

## Value hypothesis and measures

The prototype does not claim production savings. A controlled pilot would establish a baseline and test these targets:

| Measure | Definition | Pilot target |
| --- | --- | --- |
| Information retrieval time | Median time to locate an answer for an in-scope question | 30% reduction from baseline |
| Grounded-answer rate | Responses supported by an approved matter record | At least 95% |
| Escalation completion | Material-risk requests routed to an attorney | 100% |
| Unsupported-answer rate | Responses containing information outside approved sources | Below 2% |
| User adoption | Pilot users completing at least one meaningful task weekly | At least 70% |
| User satisfaction | Post-task rating from pilot participants | At least 4 of 5 |

## Assumptions and constraints

- All portfolio data is synthetic.
- Attorney approval remains mandatory for substantive reliance.
- A production implementation depends on tenant licensing, connector policy, security review and matter permissions.
- Targets require validation with pilot telemetry and user feedback.
