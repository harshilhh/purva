import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

/* -------------------------------------------------------------------------- */
/*  Small primitives                                                          */
/* -------------------------------------------------------------------------- */

function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-[1.5px] bg-brand-yellow" />
      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow">
        {children}
      </span>
    </div>
  );
}

function CtaLink({ children, variant = 'dark' }) {
  const styles =
    variant === 'dark'
      ? 'bg-brand-yellow text-brand-dark hover:bg-brand-yellow-dark'
      : 'bg-brand-yellow text-brand-dark hover:bg-brand-yellow-dark';
  return (
    <Link
      to="/contact"
      className={`inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold tracking-wide uppercase rounded-sm transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg ${styles}`}
    >
      {children}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 1 — Hero                                                          */
/* -------------------------------------------------------------------------- */

function Hero() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/corporate-law.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-yellow-light/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow-light/95 via-brand-yellow-light/70 to-brand-yellow-light/25" />
        <div className="absolute inset-0 grid-motif opacity-60" />
      </div>
      <div
        className={`relative max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <Eyebrow>Governance Advisory</Eyebrow>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] font-semibold text-brand-dark leading-[1.05] tracking-tight max-w-4xl">
          Governance Advisory & Regulatory{' '}
          <span className="relative inline-block">
            Operating Models
            <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-brand-yellow/60" />
          </span>
        </h1>
        <p className="mt-8 font-display italic text-2xl md:text-3xl text-brand-grey max-w-3xl leading-snug">
          If accountability is clear on paper, is it equally clear in practice?
        </p>
        <p className="mt-8 text-lg text-brand-grey max-w-3xl leading-relaxed">
          Most governance frameworks are designed for the moment of inspection. They satisfy the regulator
          who asks, the investor who reviews, the auditor who tests and then sit untouched until the next
          one arrives. Compliancenomics builds governance that runs the organisation, not just represents
          it. Structures that translate board-level accountability into operational reality and hold their
          shape as the business scales, enters new jurisdictions, and deploys new technology.
        </p>
        <div className="mt-10">
          <CtaLink>Book a Scoping Call</CtaLink>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 2 — Why Strong Governance Operating Models Matter                 */
/* -------------------------------------------------------------------------- */

function WhyMatters() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>Why It Matters</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
              The governance problem most organisations do not see{' '}
              <span className="text-brand-yellow">until it is too late.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-[17px] leading-relaxed text-brand-grey">
            <p>
              Governance fails quietly. Not in the boardroom, not at the policy level but in the distance
              between what the board approves and what the organisation actually does. A framework that
              looks sound on paper develops gaps the moment operations scale. The three lines of defence
              exist in the documentation. In practice, the second line does not know what the first line
              is doing, and the third line is reviewing a system that no longer reflects how the business
              runs.
            </p>
            <p>
              For high-growth organisations, the problem arrives faster. Governance infrastructure that
              was adequate at Series A is not adequate at Series B. The investor who was satisfied with a
              compliance policy last year now wants to see an operating model. The regulator who accepted
              a basic framework during authorisation now expects a governance architecture that
              demonstrates genuine oversight. And most organisations discover this gap during the
              scrutiny itself.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 3 — Our Approach                                                  */
/* -------------------------------------------------------------------------- */

function Approach() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface-warm relative overflow-hidden">
      <div
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl">
          <Eyebrow>Our Approach</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            Governance architecture that runs the organisation.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-brand-border p-8 md:p-10">
            <p className="text-[17px] leading-relaxed text-brand-grey">
              Compliancenomics approaches governance as an operating discipline, not a documentation
              exercise. The starting point is always the organisation as it actually functions — its
              decision pathways, its regulatory obligations, its technology environment, its growth
              trajectory.
            </p>
          </div>
          <div className="bg-brand-yellow-light p-8 md:p-10 border border-brand-yellow/30">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-brand-dark text-xs font-semibold tracking-[0.2em] uppercase">
                    Upward
                  </span>
                  <div className="flex-1 h-px bg-brand-dark/15" />
                </div>
                <p className="text-[15px] leading-relaxed text-brand-grey">
                  Giving the board genuine visibility into what the organisation is doing.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-brand-dark text-xs font-semibold tracking-[0.2em] uppercase">
                    Downward
                  </span>
                  <div className="flex-1 h-px bg-brand-dark/15" />
                </div>
                <p className="text-[15px] leading-relaxed text-brand-grey">
                  Giving operations a clear, executable framework for what the board has decided.
                </p>
              </div>
              <p className="pt-4 border-t border-brand-dark/10 text-[14px] italic text-brand-grey">
                Most governance engagements produce one or the other. The architecture Compliancenomics
                builds produces both — because the distance between board intent and operational
                execution is precisely where regulatory exposure accumulates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Inline CTA blocks                                                         */
/* -------------------------------------------------------------------------- */

function InlineCTA({ heading, subheading, buttonText }) {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-brand-yellow-light">
      <div
        className={`max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <h2 className="font-display text-2xl md:text-3xl lg:text-[36px] font-semibold leading-tight tracking-tight text-brand-dark">
          {heading}
        </h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-brand-dark/70 max-w-2xl mx-auto">
          {subheading}
        </p>
        <div className="mt-8">
          <CtaLink>{buttonText}</CtaLink>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 4 — What Our Services Cover                                       */
/* -------------------------------------------------------------------------- */

const services = [
  {
    title: 'Governance Operating Models',
    body: 'Designing governance structures that define how oversight, decision-making, reporting, and control operate across the organisation. The model is aligned with regulatory obligations, organisational scale, and the way the business functions in practice.',
  },
  {
    title: 'Accountability Frameworks',
    body: 'Establishing clear ownership across boards, senior management, compliance, risk, and operational teams. Defining roles, decision rights, reporting responsibilities, and lines of accountability so there is clarity over who owns what.',
  },
  {
    title: 'Board Reporting Architecture',
    body: 'Designing board and committee reporting frameworks that turn regulatory, risk, and compliance information into meaningful management intelligence — giving leadership the visibility needed to oversee risk, challenge decisions, and evidence effective governance.',
  },
  {
    title: 'Risk & Control Frameworks',
    body: 'Developing risk and control structures that connect identified risks with ownership, controls, monitoring, and oversight. The focus is on creating a coherent control environment rather than a collection of standalone controls.',
  },
  {
    title: 'Escalation Protocols',
    body: 'Defining how material compliance, risk, and operational issues move through the organisation once identified. Escalation pathways establish triggers, ownership, decision authority, documentation requirements, and routes to senior management or board oversight where required.',
  },
  {
    title: 'Governance Maturity Assessments',
    body: 'Assessing existing governance arrangements against the organisation’s regulatory exposure, operational complexity, and stage of growth. The assessment identifies structural gaps, unclear accountability, weak oversight, and areas where existing governance may no longer be sufficient.',
  },
  {
    title: 'Implementation Roadmap',
    body: 'Translating governance recommendations into a structured plan for implementation. The roadmap sets priorities, responsibilities, sequencing, and practical next steps so governance improvements can be embedded into existing operations rather than remaining recommendations on paper.',
  },
];

function ServicesCover() {
  const [ref, isInView] = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Ambient background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow-light/60 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div
        className={`relative max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-7">
            <Eyebrow>What We Cover</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] font-semibold text-brand-dark leading-[1.05] tracking-tight">
              What our governance advisory{' '}
              <span className="italic text-brand-yellow-dark">services cover.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-10 md:border-l md:border-brand-border flex items-end">
            <p className="text-[15px] leading-relaxed text-brand-grey">
              Seven working areas that together form a governance operating architecture — pick one, or
              combine them into a full engagement.
            </p>
          </div>
        </div>

        {/* Editorial split — index list left, live detail right */}
        <div className="grid md:grid-cols-12 gap-0 border border-brand-border bg-white">
          {/* Index list */}
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-brand-border">
            {services.map((s, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={s.title}
                  onMouseEnter={() => setActiveIndex(i)}
                  onFocus={() => setActiveIndex(i)}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center gap-5 border-b border-brand-border last:border-b-0 transition-all duration-300 group ${
                    isActive
                      ? 'bg-brand-yellow-light pl-8 md:pl-10'
                      : 'bg-white hover:bg-brand-yellow-light/40'
                  }`}
                >
                  <span
                    className={`shrink-0 font-display text-[11px] font-semibold tracking-widest transition-colors ${
                      isActive ? 'text-brand-yellow-dark' : 'text-brand-grey-light'
                    }`}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span
                    className={`flex-1 font-display text-lg md:text-xl font-semibold leading-tight transition-colors ${
                      isActive ? 'text-brand-dark' : 'text-brand-grey group-hover:text-brand-dark'
                    }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-brand-yellow text-brand-dark scale-100 opacity-100'
                        : 'bg-transparent text-transparent scale-75 opacity-0'
                    }`}
                  >
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail pane */}
          <div className="md:col-span-7 relative bg-brand-surface-warm">
            <div
              key={activeIndex}
              className="p-8 md:p-14 h-full flex flex-col justify-between animate-fade-up"
            >
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <span className="font-display text-[80px] md:text-[120px] leading-none font-semibold text-brand-yellow/25 select-none">
                    {String(activeIndex + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1">
                    <div className="w-10 h-[2px] bg-brand-yellow mb-3" />
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark">
                      Practice Area
                    </span>
                  </div>
                </div>

                <h3 className="font-display text-2xl md:text-3xl lg:text-[36px] font-semibold text-brand-dark leading-[1.1] tracking-tight mb-6">
                  {services[activeIndex].title}
                </h3>

                <p className="text-[16px] md:text-[17px] leading-relaxed text-brand-grey">
                  {services[activeIndex].body}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-brand-border flex items-center justify-between gap-4">
                <span className="text-[11px] tracking-[0.2em] uppercase text-brand-grey-light font-semibold">
                  Scope this practice area
                </span>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase text-brand-dark hover:text-brand-yellow-dark transition-colors"
                >
                  Discuss
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 5 — The Residue of Good Advisory                                  */
/* -------------------------------------------------------------------------- */

const residue = [
  ['Governance Operating Model', 'Clear ownership and oversight'],
  ['Board & Executive Reporting Framework', 'Better board-level visibility'],
  ['Governance Accountability Matrix', 'Defined roles and decision rights'],
  ['Risk & Control Architecture', 'Stronger control environment'],
  ['Escalation & Decision Frameworks', 'Clear escalation pathways'],
  ['Governance Policies & Operating Procedures', 'Governance that works in practice'],
  ['Governance Maturity Roadmap', 'Structured path for growth'],
  ['Operational Integration Recommendations', 'Better-aligned systems and workflows'],
];

function Residue() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface">
      <div
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl mb-12">
          <Eyebrow>Deliverables</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            The residue of good advisory.
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-brand-grey">
            Good governance should leave you with more than a set of documents. It should make
            responsibilities clearer and oversight stronger across the organisation. Depending on the
            scope of the engagement, that can translate into:
          </p>
        </div>

        <div className="border border-brand-border bg-white">
          <div className="grid grid-cols-12 px-6 md:px-8 py-4 bg-brand-yellow text-brand-dark text-[11px] font-semibold tracking-[0.2em] uppercase">
            <div className="col-span-6 md:col-span-5">Deliverable</div>
            <div className="col-span-6 md:col-span-7">Outcome</div>
          </div>
          {residue.map(([deliverable, outcome], i) => (
            <div
              key={deliverable}
              className={`grid grid-cols-12 px-6 md:px-8 py-5 md:py-6 items-start gap-4 hover:bg-brand-yellow-light/30 transition-colors duration-200 ${
                i !== residue.length - 1 ? 'border-b border-brand-border' : ''
              }`}
            >
              <div className="col-span-12 md:col-span-5 flex items-start gap-3">
                <span className="shrink-0 text-[11px] font-semibold tracking-widest text-brand-yellow font-display mt-1">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-display text-lg md:text-xl font-semibold text-brand-dark leading-snug">
                  {deliverable}
                </span>
              </div>
              <div className="col-span-12 md:col-span-7 text-[15px] leading-relaxed text-brand-grey md:pl-6 md:border-l md:border-brand-border">
                {outcome}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 6 — Is Your Organisation at This Stage?                           */
/* -------------------------------------------------------------------------- */

const stages = [
  'Preparing for organisational growth or expansion into new jurisdictions',
  'Strengthening board and executive oversight',
  'Modernising governance structures around evolving regulatory obligations',
  'Integrating compliance into operational systems and technology',
  'Preparing for investor, regulator, or stakeholder scrutiny',
  'Seeking governance frameworks that support long-term organisational maturity rather than short-term compliance exercises',
];

function Stage() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <Eyebrow>Who It’s For</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
              Is your organisation at this stage?
            </h2>
            <p className="mt-6 text-[17px] leading-relaxed text-brand-grey">
              This engagement is designed for organisations that are:
            </p>
          </div>
          <ul className="md:col-span-7 space-y-4">
            {stages.map((s, i) => (
              <li
                key={s}
                className="flex items-start gap-4 border-b border-brand-border pb-4 last:border-b-0"
              >
                <span className="shrink-0 mt-1 text-[11px] font-semibold tracking-widest text-brand-yellow font-display">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[16px] leading-relaxed text-brand-dark">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 7 — Why Organisations Choose Us                                   */
/* -------------------------------------------------------------------------- */

const differentiators = [
  {
    title: 'Built to Govern',
    body: 'Governance should shape how decisions are made, escalated, monitored, and evidenced across the organisation. Our work connects board-level accountability with the processes, controls, and systems responsible for carrying it out.',
  },
  {
    title: 'No Blind Corners',
    body: 'AML, privacy, AI governance, risk, and operational systems rarely function independently. Compliancenomics considers how these obligations interact, so governance decisions made in one area do not create blind spots somewhere else.',
  },
  {
    title: 'Institutional by Design',
    body: "When an FCA examiner or a Series A investor reviews governance, they are not adjusting their expectations for the organisation's size. Compliancenomics exists precisely for that gap: delivering governance architecture at the standard regulators and investors apply.",
  },
  {
    title: 'Authority',
    body: 'Every engagement is delivered by professionals with relevant industry experience and recognised qualifications, such as CAMS. Our advisers understand how regulators assess governance in practice and translate that into frameworks that work across board oversight and day-to-day decision-making.',
  },
  {
    title: 'Within The Lines',
    body: 'Governance structures are designed with regulatory scrutiny in mind, accounting for the expectations of authorities such as the FCA, EBA, DFSA and FSRA rather than a single supervisory lens. The objective is a governance model that remains coherent, evidenced and defensible across regulatory environments.',
  },
];

function WhyUs() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface-warm relative overflow-hidden">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl mb-14">
          <Eyebrow>Why Compliancenomics</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            Why organisations choose Compliancenomics.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className={`p-8 md:p-10 bg-white border border-brand-border hover:border-brand-yellow/60 hover:shadow-lg transition-all duration-300 ${
                i === 4 ? 'lg:col-start-2' : ''
              }`}
            >
              <span className="block text-[11px] font-semibold tracking-widest text-brand-yellow font-display mb-3">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="w-8 h-[2px] bg-brand-yellow mb-4" />
              <h3 className="font-display text-2xl font-semibold text-brand-dark leading-tight mb-4">
                {d.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-brand-grey">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  FAQs                                                                      */
/* -------------------------------------------------------------------------- */

const faqs = [
  {
    q: 'What is a governance operating model?',
    a: 'A governance operating model defines how an organisation makes decisions, assigns accountability, manages risk, escalates issues, and provides oversight. It connects board-level governance with the roles, controls, reporting lines, and processes used across day-to-day operations.',
  },
  {
    q: 'What does a governance advisory service include?',
    a: 'Governance advisory can include operating model design, accountability frameworks, board reporting architecture, risk and control frameworks, escalation protocols, governance maturity assessments, and implementation planning.',
  },
  {
    q: 'What is the difference between a governance framework and a governance operating model?',
    a: 'A governance framework establishes the principles, responsibilities, and rules for oversight. A governance operating model translates those principles into practical decision rights, reporting structures, controls, escalation pathways, and operational responsibilities.',
  },
  {
    q: 'When does an organisation need a governance maturity assessment?',
    a: 'A governance maturity assessment can be useful when an organisation is scaling, entering new jurisdictions, facing increased regulatory scrutiny, introducing new technology, or finding that existing governance arrangements no longer reflect how the business operates.',
  },
  {
    q: 'How can governance support regulatory readiness?',
    a: 'Effective governance establishes clear accountability, documented decision-making, appropriate controls, escalation routes, and reliable management information. These structures help an organisation demonstrate how regulatory obligations are governed and applied in practice.',
  },
];

function FAQItem({ index, question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="shrink-0 text-[11px] font-semibold tracking-widest text-brand-yellow font-display">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[16px] md:text-[17px] font-semibold text-brand-dark group-hover:text-brand-yellow transition-colors duration-200">
            {question}
          </span>
        </div>
        <span
          className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen ? 'bg-brand-yellow border-brand-yellow' : 'border-gray-300 group-hover:border-brand-yellow'
          }`}
        >
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${
              isOpen ? 'rotate-180 text-white' : 'text-brand-grey-light'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[600px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[15px] leading-relaxed text-brand-grey pl-10 pr-6 md:pr-10">{answer}</p>
      </div>
    </div>
  );
}

function FAQs() {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="border border-brand-border bg-white p-6 sm:p-10 md:p-14 hover:shadow-lg transition-shadow duration-300">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-4">
              <Eyebrow>FAQs</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark leading-[1.1] tracking-tight">
                Governance Advisory &{' '}
                <span className="text-brand-grey-light font-normal">Operating Models</span>
              </h2>
              <p className="mt-6 text-[15px] leading-relaxed text-brand-grey">
                Answers to common questions on how governance frameworks translate into working operating
                models.
              </p>
            </div>
            <div className="md:col-span-8">
              {faqs.map((f, i) => (
                <FAQItem
                  key={i}
                  index={i}
                  question={f.q}
                  answer={f.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Section 8 — Related Insights                                              */
/* -------------------------------------------------------------------------- */

const insights = [
  {
    tag: 'Governance',
    title: 'Where the three lines of defence quietly break down',
    excerpt:
      'A look at the structural gaps that emerge between board intent and operational execution as organisations scale.',
  },
  {
    tag: 'Regulatory',
    title: 'What FCA examiners actually look for in governance reviews',
    excerpt:
      'Not policies. Evidence of decision-making, escalation, and oversight functioning as designed.',
  },
  {
    tag: 'Operating Model',
    title: 'From Series A to Series B: when governance stops keeping up',
    excerpt:
      'Signals that an organisation has outgrown its governance infrastructure and what to rebuild first.',
  },
];

function RelatedInsights() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface-warm">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <div>
            <Eyebrow>From the Knowledge Platform</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
              Related insights.
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((post) => (
            <article
              key={post.title}
              className="insight-card group bg-white border border-brand-border p-8 md:p-10 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[1.5px] bg-brand-yellow" />
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow">
                  {post.tag}
                </span>
              </div>
              <h3 className="font-display text-xl md:text-2xl font-semibold text-brand-dark leading-tight mb-4 group-hover:text-brand-yellow-dark transition-colors">
                {post.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-brand-grey mb-6">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase text-brand-dark group-hover:text-brand-yellow transition-colors">
                Read Insight
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function ServicesPage() {
  return (
    <>
      <Hero />
      <WhyMatters />
      <Approach />
      <InlineCTA
        heading="Is Your Governance Working the Way It Was Designed To?"
        subheading="Discuss how your current governance structure holds up across decision-making, accountability, controls, and oversight."
        buttonText="Discuss Your Governance Structure"
      />
      <ServicesCover />
      <Residue />
      <InlineCTA
        heading="Seen Something Your Governance Is Missing?"
        subheading="Let’s talk through the gaps and determine which structures and deliverables would strengthen your operating model."
        buttonText="Discuss Your Requirements"
      />
      <Stage />
      <WhyUs />
      <InlineCTA
        heading="Good Governance Should Never Be Just Good on Paper."
        subheading="Make accountability and oversight work in practice."
        buttonText="Book a Scoping Call"
      />
      <FAQs />
      <RelatedInsights />
    </>
  );
}
