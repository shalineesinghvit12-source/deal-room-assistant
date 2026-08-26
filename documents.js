/**
 * documents.js
 * ---------------------------------------------------------------
 * DATA LAYER — fictional sample data for demo purposes only.
 *
 * In production this data would not live in a JS file at all —
 * it would come live from the AI Review Tracking list in SharePoint
 * (populated by the Power Automate flows) via Copilot Studio's
 * native SharePoint / Dataverse connector. This file stands in for
 * that data source so the chatbot demo runs entirely client-side
 * with no backend, which is what makes it possible to host for
 * free on GitHub Pages.
 * ---------------------------------------------------------------
 */

const DOCUMENTS = [
  {
    id: "msa",
    keywords: ["msa", "master supply", "supply agreement", "atlas"],
    name: "Master Supply & Services Agreement",
    counterparty: "Atlas Industrial Corp.",
    matter: "Project Falcon",
    status: "Pending attorney review",
    risk: "High",
    summary:
      "A five-year exclusive supply arrangement covering precision actuator components. Contains a broad change-of-control clause giving Atlas a unilateral termination right upon any acquisition of the target company.",
    keyTerms: [
      "Term: 5 years, auto-renewing 1-year terms",
      "Exclusivity: North America",
      "Annual contract value: $8.4M (2025 run-rate)",
      "Governing law: Delaware",
    ],
    flags: [
      {
        severity: "High",
        title: "Deal-blocking termination right (§14.2)",
        detail:
          "Triggered by the proposed acquisition. Atlas represents ~19% of the target's 2025 revenue. Recommend confirming whether a consent or waiver has been sought.",
      },
      {
        severity: "Medium",
        title: "Affiliate assignment carve-out (§22.1)",
        detail:
          "Standard carve-out, but worth confirming the post-closing entity qualifies as an 'Affiliate' under §1.4's definition.",
      },
    ],
  },
  {
    id: "credit",
    keywords: ["credit", "loan", "term loan", "first meridian bank"],
    name: "Senior Secured Term Loan — Credit Agreement",
    counterparty: "First Meridian Bank, N.A.",
    matter: "Project Falcon",
    status: "Approved",
    risk: "High",
    summary:
      "A $22M senior secured term facility with customary covenants and a cross-default clause tied to termination of any material contract exceeding $2M in annual value.",
    keyTerms: [
      "Facility amount: $22,000,000",
      "Maturity: November 1, 2027",
      "Interest rate: SOFR + 3.25%",
      "Cross-default threshold: $2,000,000 annual contract value",
    ],
    flags: [
      {
        severity: "High",
        title: "Cross-default risk linked to the Atlas MSA (§8.1(d))",
        detail:
          "If Atlas terminates under §14.2 of the supply agreement, this could independently trigger a default here. Recommend a combined read-out covering both documents.",
      },
    ],
  },
  {
    id: "cto",
    keywords: ["cto", "employment", "okafor", "non-compete", "executive"],
    name: "Employment Agreement — Chief Technology Officer",
    counterparty: "S. Okafor (CTO)",
    matter: "Project Falcon",
    status: "Pending attorney review",
    risk: "Medium",
    summary:
      "Standard executive employment terms with a 12-month post-termination non-compete. Enforceability is uncertain given recent state-level changes to non-compete law.",
    keyTerms: [
      "Base salary: $385,000",
      "Change-of-control acceleration: 50% unvested equity",
      "Non-compete term: 12 months",
    ],
    flags: [
      {
        severity: "Medium",
        title: "Non-compete enforceability uncertain (§9)",
        detail:
          "Several states have narrowed or banned non-competes since this was signed. Recommend confirming current enforceability in the executive's state of residence.",
      },
    ],
  },
  {
    id: "ip",
    keywords: ["ip", "patent", "intellectual property", "core robotics"],
    name: "IP Assignment & Licensing Agreement",
    counterparty: "Core Robotics Patents Ltd.",
    matter: "Project Falcon",
    status: "Approved",
    risk: "Low",
    summary:
      "Clean, fully-paid assignment of the core patent family with no ongoing royalties or field-of-use restrictions. No issues identified.",
    keyTerms: [
      "Patents assigned: 14 issued, 3 pending",
      "Consideration: paid in full at signing",
      "Ongoing royalties: none",
    ],
    flags: [
      {
        severity: "Low",
        title: "Clean assignment (§2.1)",
        detail:
          "No royalty stack or licensing-back obligation survives the transaction. No further diligence needed.",
      },
    ],
  },
  {
    id: "dpa",
    keywords: ["dpa", "data processing", "gdpr", "nordkern"],
    name: "Data Processing Agreement — EU Customers",
    counterparty: "Nordkern Automation GmbH",
    matter: "Project Falcon",
    status: "Pending attorney review",
    risk: "Medium",
    summary:
      "GDPR-standard terms for EU customer telemetry data, with a breach-notification window tighter than the target's internal escalation SLA.",
    keyTerms: [
      "Transfer mechanism: EU Standard Contractual Clauses",
      "Breach notification window: 24 hours",
      "Audit rights: annual, 10 business days' notice",
    ],
    flags: [
      {
        severity: "Medium",
        title: "Breach notification tighter than internal SLA (§6.3)",
        detail:
          "The internal standard breach escalation SLA is 48 hours. Post-close, this will need a faster process or an amendment.",
      },
    ],
  },
];
