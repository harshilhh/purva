/*
  PLACEHOLDER POSTS for layout / pagination design only.
  Titles mirror the "Latest Insights" teasers on the home page.
  Replace with approved copy (or remove) before going live.
*/

const author = {
  name: 'Purva Buch',
  credentials: 'LLB, CAMS',
  role: 'Founder · Compliancenomics LLP',
  photo: '/leadership.jpg',
  email: 'purva@compliancenomics.com',
  linkedin: 'https://www.linkedin.com/in/purvabuch',
  bio: 'Purva is a legal consultant, CAMS-certified specialist, and a cross-border compliance advisor focused on where AML obligations, Data Privacy laws, and AI Governance protocols overlap.',
};

const PLACEHOLDER_CTA = {
  type: 'cta',
  heading: 'Facing This Conflict in Your Organisation?',
  subheading: 'Discuss how your current framework handles overlapping regulatory obligations.',
  button: 'Get in touch',
};

function dummyPost({ slug, title, topic, jurisdiction, publishedOn, heroImage, dek, description, sections, faq }) {
  return {
    slug,
    isPlaceholder: true,
    metaTitle: title,
    metaDescription: description,
    title,
    dek,
    topic,
    jurisdiction,
    publishedOn,
    updatedOn: publishedOn,
    heroImage,
    author,
    keyTakeaways: {
      id: 'key-takeaways',
      title: 'Key Takeaways',
      points: sections.map((s) => s.takeaway),
      pillarsIntro: 'This briefing looks at the conflict through three lenses:',
      pillars: [
        { label: 'Obligation', body: 'What each regime requires, and when.' },
        { label: 'Collision', body: 'Where the two requirements pull in opposite directions.' },
        { label: 'Control', body: 'How to document a defensible position that satisfies both.' },
      ],
      closing: 'The aim is a documented protocol, not a case-by-case judgement call made under time pressure.',
    },
    sections: [
      ...sections.map((s, i) => ({
        id: s.id,
        title: s.title,
        blocks: [
          ...s.paragraphs.map((text) => ({ type: 'p', text })),
          ...(i === 0 ? [PLACEHOLDER_CTA] : []),
        ],
      })),
      { id: 'faq', title: 'Frequently Asked Questions', blocks: [{ type: 'faq', items: faq }] },
    ],
  };
}

const dummyPosts = [
  dummyPost({
    slug: 'sar-vs-dsar-aml-reporting-data-access-rights',
    title: 'SAR vs DSAR: The Structural Conflict Between AML Reporting and Data Access Rights',
    topic: 'AML × Privacy',
    jurisdiction: 'UK · EU · UAE',
    publishedOn: '2026-09-18',
    heroImage: '/about-hero.jpeg',
    dek: 'When the obligation to report meets the right to access, compliance teams face a conflict that no single framework resolves.',
    description:
      'When the obligation to report meets the right to access, compliance teams face a conflict that no single framework resolves.',
    sections: [
      {
        id: 'the-conflict',
        title: 'Where the Obligation to Report Meets the Right to Access',
        takeaway: 'A data subject access request can reach the very records that document a suspicious activity report.',
        paragraphs: [
          'AML law requires firms to report suspicion confidentially and prohibits tipping off. Data protection law gives individuals a right to access the personal data held about them, including internal notes and assessments.',
          'When a customer who is the subject of a SAR submits a DSAR, both obligations are triggered at once, and the response deadline keeps running while the firm works out what it can lawfully disclose.',
        ],
      },
      {
        id: 'exemptions',
        title: 'How Exemptions Apply in Practice',
        takeaway: 'Exemptions exist, but they must be applied record by record and documented.',
        paragraphs: [
          'Most privacy regimes contain an exemption for the prevention or detection of crime. It does not permit a blanket refusal: each withheld item needs a reason, and the reasoning must be recorded.',
          'A documented DSAR-SAR protocol, agreed between the MLRO and the DPO before a request arrives, is what turns a high-risk judgement call into a repeatable process.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can a firm refuse a DSAR because a SAR has been filed?',
        a: 'Not outright. The firm may withhold specific information where disclosure would prejudice the prevention or detection of crime, but must still respond to the request.',
      },
    ],
  }),
  dummyPost({
    slug: 'dora-gdpr-overlapping-incident-timelines',
    title: 'DORA, GDPR, and the Problem of Overlapping Incident Timelines',
    topic: 'Digital Resilience × Privacy',
    jurisdiction: 'EU',
    publishedOn: '2026-08-21',
    heroImage: '/hero-bg.jpg',
    dek: 'Two regulatory clocks running simultaneously on the same incident. One framework demands speed. The other demands accuracy.',
    description:
      'Two regulatory clocks running simultaneously on the same incident. One framework demands speed. The other demands accuracy.',
    sections: [
      {
        id: 'two-clocks',
        title: 'Two Clocks, One Incident',
        takeaway: 'A single ICT incident involving personal data can start DORA and GDPR reporting clocks at the same time.',
        paragraphs: [
          'DORA requires financial entities to classify and report major ICT-related incidents on a staged timeline. GDPR requires notification of personal data breaches to the supervisory authority within 72 hours of awareness.',
          'The two regimes define the trigger, the content and the recipient differently, so the same facts must be reported twice, in two formats, to two authorities.',
        ],
      },
      {
        id: 'single-playbook',
        title: 'Building a Single Incident Playbook',
        takeaway: 'One classification step should feed both reporting tracks.',
        paragraphs: [
          'Firms that run separate ICT and privacy incident processes tend to produce inconsistent reports. A combined playbook classifies the incident once and routes it to both tracks with shared facts.',
          'The playbook should define who owns each notification, which facts are confirmed versus provisional, and how follow-up reports reconcile any differences.',
        ],
      },
    ],
    faq: [
      {
        q: 'Does a DORA incident report satisfy GDPR breach notification?',
        a: 'No. They are separate obligations to separate authorities, with different content requirements, even where the underlying incident is the same.',
      },
    ],
  }),
  dummyPost({
    slug: 'automated-risk-scoring-gdpr-article-22-aml',
    title: 'Automated Risk Scoring Under GDPR Article 22: Where AML Meets Algorithmic Accountability',
    topic: 'AI × Financial Regulation',
    jurisdiction: 'EU · UK',
    publishedOn: '2026-07-24',
    heroImage: '/cta-bg.jpg',
    dek: 'AML requires automated risk assessment. GDPR restricts solely automated decision-making. The operational question is how to satisfy both.',
    description:
      'AML requires automated risk assessment. GDPR restricts solely automated decision-making. The operational question is how to satisfy both.',
    sections: [
      {
        id: 'article-22',
        title: 'What Article 22 Restricts',
        takeaway: 'Article 22 targets decisions based solely on automated processing that have legal or similarly significant effects.',
        paragraphs: [
          'Customer risk scoring that leads directly to onboarding refusal or account closure can fall within Article 22 if no meaningful human review takes place.',
          'Authorisation by law is one of the available grounds, but it must be paired with suitable safeguards for the individual.',
        ],
      },
      {
        id: 'meaningful-review',
        title: 'Designing Meaningful Human Review',
        takeaway: 'A human who rubber-stamps the score is not meaningful review.',
        paragraphs: [
          'Reviewers need authority to override the score, access to the inputs behind it, and enough time to exercise judgement. Override rates should be monitored as evidence that review is real.',
          'Documenting the review step protects both the AML decision and the privacy position when either regulator asks how the outcome was reached.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is all AML risk scoring caught by Article 22?',
        a: 'No. Scoring that only informs a human decision-maker, without itself producing a significant effect, generally falls outside it.',
      },
    ],
  }),
];

/* Compact placeholders: two short sections + one FAQ each. */
const compact = [
  {
    slug: 'travel-rule-vs-data-minimisation-vasps',
    title: 'The Travel Rule vs Data Minimisation: A VASP Compliance Dilemma',
    topic: 'Crypto × Privacy',
    jurisdiction: 'UAE · EU',
    publishedOn: '2026-06-26',
    heroImage: '/world-map.png',
    dek: 'Every transfer must carry originator and beneficiary data. Every privacy regime asks why you are sharing so much.',
    context: 'The FATF Travel Rule requires VASPs to collect and transmit originator and beneficiary information with qualifying transfers, often to counterparties in other jurisdictions.',
    approach: 'A defensible position maps exactly which fields each corridor requires, transmits only those, and records the legal basis for every cross-border transfer.',
  },
  {
    slug: 'india-dpdpa-cross-border-aml-record-retention',
    title: 'India’s DPDPA and Cross-Border AML Record Retention',
    topic: 'AML × Privacy',
    jurisdiction: 'India',
    publishedOn: '2026-05-29',
    heroImage: '/corporate-law.jpg',
    dek: 'PMLA says keep it. DPDPA says delete it once the purpose is served. Group-wide systems have to do both.',
    context: 'Indian reporting entities must retain KYC and transaction records under the PMLA, while the DPDPA requires erasure once the specified purpose is no longer served.',
    approach: 'Retention schedules should tie each record class to its statutory basis, so erasure requests can be answered with a documented legal hold rather than a refusal.',
  },
  {
    slug: 'eu-ai-act-high-risk-financial-crime-compliance',
    title: 'The EU AI Act and High-Risk Systems in Financial Crime Compliance',
    topic: 'AI × Financial Regulation',
    jurisdiction: 'EU',
    publishedOn: '2026-04-30',
    heroImage: '/hero-bg.jpg',
    dek: 'Which AML tools fall into the high-risk category, and what the classification means for deployers.',
    context: 'Credit scoring is expressly high-risk under the AI Act; many AML tools sit close to that line, and deployers carry their own obligations regardless of the vendor.',
    approach: 'Start with an inventory, classify each system against Annex III, and build the human oversight and logging duties into the existing AML control framework.',
  },
  {
    slug: 'sanctions-screening-false-positives-calibration',
    title: 'Sanctions Screening False Positives: Calibrating Without Losing Coverage',
    topic: 'Sanctions × Operations',
    jurisdiction: 'Global',
    publishedOn: '2026-03-27',
    heroImage: '/cta-bg.jpg',
    dek: 'Alert volumes are a symptom. The cause is usually a threshold nobody has revisited since go-live.',
    context: 'Fuzzy-matching thresholds set at implementation rarely reflect the current customer base, producing alert volumes that analysts clear without real review.',
    approach: 'Tune against a labelled test set, document every threshold change with its rationale, and re-test coverage against known designated names after each change.',
  },
  {
    slug: 'right-to-erasure-vs-aml-record-keeping',
    title: 'Right to Erasure vs AML Record-Keeping: Five to Seven Years of Tension',
    topic: 'AML × Privacy',
    jurisdiction: 'UK · EU · UAE',
    publishedOn: '2026-02-26',
    heroImage: '/about-hero.jpeg',
    dek: 'An erasure request against records you are legally required to keep is not a refusal. It is a process.',
    context: 'AML laws require retention of CDD and transaction records for five to seven years; privacy laws give individuals the right to request erasure of the same data.',
    approach: 'Respond within the deadline, explain the statutory retention ground, restrict processing to the retention purpose, and diarise deletion for the end of the period.',
  },
  {
    slug: 'adgm-vs-difc-data-protection-for-fintechs',
    title: 'ADGM vs DIFC: Choosing a Data Protection Regime for Your Fintech',
    topic: 'Privacy × Licensing',
    jurisdiction: 'UAE',
    publishedOn: '2026-01-29',
    heroImage: '/world-map.png',
    dek: 'Two common-law free zones, two data protection laws, and different expectations for the same business model.',
    context: 'ADGM and DIFC each operate an independent data protection regime alongside the federal PDPL, with their own regulators, transfer rules and accountability duties.',
    approach: 'Compare the regimes against your actual data flows, vendor locations and growth plans before choosing a licensing jurisdiction, not after.',
  },
  {
    slug: 'board-oversight-ai-models-regulator-expectations',
    title: 'Board Oversight of AI Models: What Regulators Expect from Directors',
    topic: 'AI Governance',
    jurisdiction: 'Global',
    publishedOn: '2025-12-18',
    heroImage: '/corporate-law.jpg',
    dek: 'Accountability for AI outcomes sits with the board, whether or not the board understands the model.',
    context: 'Supervisors increasingly expect boards to approve AI risk appetite, receive model performance reporting, and challenge reliance on third-party models.',
    approach: 'Give the board a model inventory, a short set of performance and override metrics, and a clear escalation route when a model behaves unexpectedly.',
  },
].map((p) =>
  dummyPost({
    ...p,
    description: p.dek,
    sections: [
      { id: 'context', title: 'The Regulatory Context', takeaway: p.context, paragraphs: [p.context] },
      { id: 'approach', title: 'Building a Defensible Position', takeaway: p.approach, paragraphs: [p.approach] },
    ],
    faq: [{ q: 'Is this guidance legal advice?', a: 'No. This briefing is general commentary. Speak to an adviser about your specific obligations.' }],
  })
);

export default [...dummyPosts, ...compact];
