/*
  AMLCompliancePage — mirrors the visual design of ServicesPage2,
  content sourced from the AML Compliance & Anti Financial Crime
  Advisory brief.
*/

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';

/* -------------------------------------------------------------------------- */
/*  Primitives                                                                */
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

function CtaLink({ children }) {
  return (
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold tracking-wide uppercase rounded-sm bg-brand-yellow text-brand-dark hover:bg-brand-yellow-dark transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg"
    >
      {children}
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*  Hero                                                                      */
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
        <Eyebrow>AML Compliance & Anti Financial Crime Advisory</Eyebrow>
        <h1 className="font-display text-[28px] xs:text-[32px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-semibold text-brand-dark leading-[1.1] tracking-[-0.02em] max-w-4xl">
          AML Compliance & Anti Financial{' '}
          <span className="relative inline-block">
            Crime Advisory
            <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-brand-yellow/60" />
          </span>
        </h1>
        <p className="mt-8 font-display italic text-xl md:text-2xl text-brand-grey max-w-3xl leading-snug">
          If your AML framework was built to satisfy the last examination, is it ready for the next one?
        </p>
        <p className="mt-6 text-[16px] md:text-[17px] text-brand-grey max-w-3xl leading-[1.8]">
          AML compliance is not a policy problem. It is an operational one. The firms that face
          regulatory action are not always the ones that ignored their obligations, but often they
          are the ones whose frameworks looked sound on paper but were never tested against the
          reality of how their business actually runs. Compliancenomics builds AML and sanctions
          frameworks that are designed for operational use from the start - audit-ready,
          jurisdiction-specific, and calibrated to the actual risk profile of the organisation they
          govern.
        </p>
        <div className="mt-10">
          <CtaLink>Assess Your AML Position</CtaLink>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 2                                                                 */
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
            <Eyebrow>Why a Strong AML Framework Matters</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
              The AML problem most organisations{' '}
              <span className="text-brand-yellow">discover too late.</span>
            </h2>
          </div>
          <div className="md:col-span-7 space-y-6 text-[17px] leading-relaxed text-brand-grey">
            <p>
              AML frameworks fail at the operational level, not the policy level. The risk
              assessment is conducted annually and filed. The transaction monitoring system
              generates alerts that nobody has reviewed the logic behind. The sanctions screening
              tool was configured at implementation and has not been updated since the risk profile
              changed. The MLRO is reporting to a board that does not have the information needed
              to provide genuine oversight. None of these are visible failures. They accumulate
              quietly until an examination, an incident, or a correspondent banking review makes
              them visible all at once.
            </p>
            <p>
              For organisations operating across multiple jurisdictions, the complexity compounds.
              What satisfies the FCA does not automatically satisfy the DFSA. What is adequate
              under UAE federal AML requirements may not meet ADGM or DIFC rulebook standards. The
              firms that carry the most exposure are not surprisingly the ones that have no
              framework, but the ones that have a framework built for one jurisdiction and
              operating across several.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 3                                                                 */
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
          <Eyebrow>Our AML Advisory Approach</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            AML architecture designed for the organisation as it actually operates.
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="relative bg-white border border-brand-border p-6 md:p-10 flex flex-col">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-4xl md:text-5xl font-semibold text-brand-yellow leading-none">
                01
              </span>
            </div>
            <div className="mt-6 h-px bg-brand-dark/10" />
            <p className="mt-6 text-[17px] leading-relaxed text-brand-dark/85">
              Compliancenomics approaches AML compliance as a risk architecture problem. Thus, the
              starting point is always the organisation's actual risk profile, like its customer
              base, its transaction flows, its jurisdictional footprint, and its technology
              environment before any framework is designed or any policy is drafted.
            </p>
          </div>
          <div className="relative bg-white border border-brand-border p-6 md:p-10 flex flex-col">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-4xl md:text-5xl font-semibold text-brand-yellow leading-none">
                02
              </span>
            </div>
            <div className="mt-6 h-px bg-brand-dark/10" />
            <p className="mt-6 text-[17px] leading-relaxed text-brand-dark/85">
              From that foundation, the work builds upward. The governance structure gives the
              board genuine oversight. The risk assessment reflects the business as it runs today.
              The monitoring logic is calibrated to the alerts that matter, not the volume that
              creates noise. The escalation pathways are documented before an incident occurs, not
              reconstructed after one. The result is an AML framework that functions as an
              operational system - one that the MLRO can run with confidence and the regulator can
              examine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Inline CTA                                                                */
/* -------------------------------------------------------------------------- */

function InlineCTA({ heading, subheading, buttonText }) {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="relative py-16 md:py-20 bg-brand-yellow-light overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 40px,
            rgba(212,137,26,0.07) 40px,
            rgba(212,137,26,0.07) 41px
          )`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,26,26,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,26,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />
      <div
        className={`relative max-w-4xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${
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
/*  SECTION 4                                                                 */
/* -------------------------------------------------------------------------- */

const services = [
  {
    title: 'AML Framework Design',
    body: "Designing risk-based AML and CFT governance frameworks aligned to the organisation's regulatory obligations, business model, and jurisdictional footprint. A tailored AML framework establishes the policy architecture, governance structure, and operational controls required to meet regulatory expectations across each jurisdiction in scope.",
  },
  {
    title: 'Enterprise-Wide Risk Assessment',
    body: "Conducting timely and in-depth risk assessments that reflect the organisation's actual exposure to money laundering (ML), terrorist financing (TF), and proliferation financing (PF) risks. The risk assessment covers customer risk, product and service risk, delivery channel risk, and geographic risk, and is structured to satisfy regulatory requirements and inform the controls and monitoring logic built around it.",
  },
  {
    title: 'KYC & Customer Risk Architecture',
    body: "Developing customer due diligence and enhanced due diligence frameworks, customer risk rating methodologies, and onboarding governance structures. This includes the selection and implementation of KYC technology where appropriate - C-KYC for India, E-KYC for UAE, and equivalent solutions across other jurisdictions in scope.",
  },
  {
    title: 'Transaction Monitoring & Sanctions Controls',
    body: "Designing transaction monitoring frameworks with alert logic calibrated to the organisation's risk profile while covering forex flows, correspondent banking, VASP transactions, and high-value activity. Sanctions screening architecture is built for real-time operation against UN, OFAC, UK, and local lists, with zero-tolerance configuration and audit-ready alert management.",
  },
  {
    title: 'MLRO Advisory & Audit Readiness',
    body: 'Supporting the MLRO function across the full scope of its responsibilities from fit and proper appointment, annual reporting, and board engagement through to independent effectiveness testing and remediation. Audit readiness work covers the documentation, record-keeping architecture, and governance evidence that regulators expect to find during an examination.',
  },
  {
    title: 'AML Technology & RegTech Enablement',
    body: "Advising on the selection and implementation of AML technology - transaction monitoring platforms, sanctions screening tools, and KYC automation systems. The focus is on configuration that is audit-ready from day one and integrated into the organisation's existing operational infrastructure, so that compliance tools function as part of the business rather than alongside it.",
  },
];

function ServicesCover() {
  const [ref, isInView] = useInView();
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow-light/60 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div
        className={`relative max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="grid md:grid-cols-12 gap-8 mb-14">
          <div className="md:col-span-7">
            <Eyebrow>What Our AML & Sanctions Compliance Services Cover</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[48px] font-semibold text-brand-dark leading-[1.05] tracking-tight">
              What Our AML & Sanctions{' '}
              <span className="italic text-brand-yellow-dark">Compliance Services Cover</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-0 border border-brand-border bg-white">
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-brand-border">
            {services.map((s, i) => {
              const isActive = i === activeIndex;
              return (
                <div key={s.title} className="border-b border-brand-border last:border-b-0">
                  <button
                    onMouseEnter={() => {
                      if (window.matchMedia('(min-width: 768px)').matches) setActiveIndex(i);
                    }}
                    onClick={() => setActiveIndex((prev) => (prev === i ? -1 : i))}
                    className={`w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center gap-5 transition-all duration-300 group ${
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
                      className={`md:hidden shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
                        isActive ? 'bg-brand-yellow border-brand-yellow' : 'border-gray-300'
                      }`}
                    >
                      <svg
                        className={`w-3 h-3 transition-transform duration-300 ${
                          isActive ? 'rotate-180 text-brand-dark' : 'text-brand-grey-light'
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                    <span
                      className={`hidden md:flex shrink-0 w-6 h-6 items-center justify-center rounded-full transition-all duration-300 ${
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

                  <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-brand-surface-warm ${
                      isActive ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pt-4 pb-6">
                      <p className="text-[15px] leading-relaxed text-brand-grey">{s.body}</p>
                      <Link
                        to="/contact"
                        className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold tracking-wide uppercase text-brand-dark hover:text-brand-yellow-dark transition-colors"
                      >
                        Discuss
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="hidden md:block md:col-span-7 relative bg-brand-surface-warm">
            {(() => {
              const detailIndex = activeIndex >= 0 ? activeIndex : 0;
              return (
                <div
                  key={detailIndex}
                  className="p-8 md:p-14 h-full flex flex-col justify-between animate-fade-up"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <span className="font-display text-[80px] md:text-[120px] leading-none font-semibold text-brand-yellow/25 select-none">
                        {String(detailIndex + 1).padStart(2, '0')}
                      </span>
                      <div className="flex-1">
                        <div className="w-10 h-[2px] bg-brand-yellow mb-3" />
                        <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark">
                          Practice Area
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl lg:text-[36px] font-semibold text-brand-dark leading-[1.1] tracking-tight mb-6">
                      {services[detailIndex].title}
                    </h3>

                    <p className="text-[16px] md:text-[17px] leading-relaxed text-brand-grey">
                      {services[detailIndex].body}
                    </p>
                  </div>

                  <div className="mt-10 pt-6 border-t border-brand-border flex items-center justify-between gap-4">
                    <span className="text-[11px] tracking-[0.2em] uppercase text-brand-grey-light font-semibold">
                      Scope this service area
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
              );
            })()}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  SECTION 5                                                                 */
/* -------------------------------------------------------------------------- */

const residue = [
  ['AML Governance Framework', 'Clear ownership and board-level oversight'],
  ['Enterprise-Wide Risk Assessment', 'Documented, audit-ready risk position'],
  ['Customer Risk Rating Methodology', 'Consistent, defensible customer profiling'],
  ['Transaction Monitoring Framework', 'Calibrated alerts and audit-ready logic'],
  ['Sanctions Screening Architecture', 'Zero-tolerance screening with full audit trail'],
  ['MLRO Advisory & Reporting Support', 'Stronger MLRO function and board engagement'],
  ['AML Policy & Procedure Suite', 'Jurisdiction-specific, operationally usable documentation'],
  ['RegTech Implementation Advisory', 'Compliance technology configured for audit readiness'],
];

function Substance() {
  const [ref, isInView] = useInView();
  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface">
      <div
        className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="max-w-3xl mb-12">
          <Eyebrow>The Substance of Good Advisory</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            The Substance of Good Advisory
          </h2>
          <p className="mt-6 text-[17px] leading-relaxed text-brand-grey">
            Good AML compliance should leave the organisation with more than a set of policies. It
            should make the MLRO's function more equipped, the board's oversight more substantive,
            and the organisation's position more resilient under examination. Depending on the
            scope of the engagement, that translates into:
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
/*  SECTION 6                                                                 */
/* -------------------------------------------------------------------------- */

const stages = [
  'preparing to enter a jurisdiction with AML regulatory obligations for the first time',
  'operating across UAE, UK, EU, India, or APAC under different supervisory regimes simultaneously',
  'deploying AI-assisted transaction monitoring or automated sanctions screening',
  'approaching an AML examination, correspondent banking review, or regulatory authorisation',
  'finding that the existing AML framework no longer reflects how the business operates',
  'strengthening the MLRO function without expanding the compliance headcount',
  'managing Travel Rule obligations alongside data protection requirements',
  'building AML infrastructure ahead of a funding round or licensing application',
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
            <Eyebrow>Is Your Organisation at This Stage?</Eyebrow>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
              Is Your Organisation at This Stage?
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
/*  SECTION 7                                                                 */
/* -------------------------------------------------------------------------- */

const differentiators = [
  {
    title: 'Expertise, Certified',
    body: 'AML compliance at this level of complexity requires more than regulatory familiarity. Every AML engagement at Compliancenomics is led by a Certified Anti-Money Laundering Specialist - the internationally recognised qualification for financial crime work with legal training that extends the analysis beyond the framework into the legal consequences of getting it wrong.',
  },
  {
    title: 'Across Borders',
    body: 'Most AML advisers are built for one regulatory environment. Compliancenomics designs AML frameworks that operate simultaneously across UAE, UK, EU, India, APAC, and not as separate engagements but as a single coordinated compliance architecture that satisfies each jurisdiction\'s requirements without treating them as isolated obligations.',
  },
  {
    title: 'Inspection Ready',
    body: 'When a regulator examines an AML framework, they are not reviewing policy documents; they are testing whether the framework functions as described. Compliancenomics builds frameworks that hold up under that level of scrutiny because they are designed for operational use, not regulatory presentation.',
  },
  {
    title: 'Qualified Perspective',
    body: 'Every AML engagement is delivered by professionals holding recognised qualifications in financial crime compliance and legal practice. The advisory reflects how regulators actually assess AML frameworks in practice across governance, risk assessment, customer due diligence, monitoring logic, and the documentation that ties it together.',
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
          <Eyebrow>Why Organisations Choose Compliancenomics</Eyebrow>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            Why Organisations Choose Compliancenomics
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {differentiators.map((d, i) => (
            <div
              key={d.title}
              className="p-6 md:p-10 bg-white border border-brand-border hover:border-brand-yellow/60 hover:shadow-lg transition-all duration-300"
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
    q: 'What is AML compliance and which organisations need it?',
    a: 'AML, anti-money laundering, refers to the legal and regulatory obligations placed on organisations to detect, prevent, and report financial crime. The requirement applies across financial institutions, payment firms, crypto-asset service providers, and designated non-financial businesses and professions including law firms, accountancy practices, corporate service providers, and real estate agents. The specific obligations vary by jurisdiction and sector, but the core framework is consistent: know your customer, assess your risk, monitor your transactions, and report suspicion to the relevant authority. Organisations that fail to meet these obligations face regulatory sanction, licence revocation, and in serious cases, criminal liability.',
  },
  {
    q: 'What is an enterprise-wide risk assessment and why does it matter?',
    a: 'An enterprise-wide risk assessment identifies and documents the money laundering, terrorist financing, and proliferation financing risks specific to the organisation - its customers, products, services, delivery channels, and geographies. It is the foundation of a risk-based AML framework and the document most regulators review first during an examination. An EWRA that does not reflect how the business actually operates creates a gap between the documented risk position and the controls designed around it.',
  },
  {
    q: 'What is the difference between transaction monitoring and sanctions screening?',
    a: "Transaction monitoring identifies unusual or suspicious activity within the organisation's transaction flows based on alert logic calibrated to the organisation's risk profile. Sanctions screening checks customers, counterparties, and transactions against designated lists in real time. Both are required components of an AML framework, but they operate on different logic, against different lists, and with different regulatory consequences when they fail.",
  },
  {
    q: 'When does an organisation need to appoint an MLRO?',
    a: "The requirement varies by jurisdiction and regulatory regime, but most AML frameworks require a nominated officer responsible for receiving internal suspicious activity disclosures, making external reports to the relevant financial intelligence unit, and overseeing the organisation's AML compliance programme. In the UK, the nominated officer must be approved by the FCA where required. In the UAE, DIFC, and ADGM, the appointment must meet fit and proper standards set by the relevant regulator.",
  },
  {
    q: 'How does AML compliance interact with data protection obligations?',
    a: 'AML frameworks require the retention of customer data, transaction records, and due diligence documentation for five to seven years depending on jurisdiction. Data protection laws - GDPR, UAE PDPL, and India DPDPA impose minimisation principles and erasure rights over the same data. When a data subject requests erasure of information that the organisation is legally required to retain under AML law, both obligations are triggered simultaneously. Managing that conflict requires a documented legal basis and a conflict protocol that satisfies both supervisors.',
  },
  {
    q: 'What does RegTech implementation advisory involve?',
    a: 'RegTech advisory covers the selection, configuration, and integration of compliance technology such as transaction monitoring platforms, sanctions screening tools, and KYC automation systems. The focus is on ensuring the technology is configured to produce audit-ready outputs from day one, integrated into existing operational infrastructure, and aligned with the regulatory expectations of each jurisdiction in scope.',
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
              <Eyebrow>FAQs - AML Compliance & Financial Crime Advisory</Eyebrow>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-brand-dark leading-[1.1] tracking-tight">
                FAQs - AML Compliance &{' '}
                <span className="text-brand-grey-light font-normal">Financial Crime Advisory</span>
              </h2>
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
/*  Page                                                                      */
/* -------------------------------------------------------------------------- */

export default function AMLCompliancePage() {
  return (
    <>
      <Hero />
      <WhyMatters />
      <Approach />
      <InlineCTA
        heading="Is Your AML Framework Built for How Your Business Actually Operates?"
        subheading="Discuss how your current AML structure holds up across risk assessment, ongoing monitoring, escalation, and regulatory reporting."
        buttonText="Discuss Your AML Framework"
      />
      <ServicesCover />
      <Substance />
      <InlineCTA
        heading="Your AML Framework Should Produce All of This"
        subheading="If it does not, that is where we start."
        buttonText="Book a Scoping Call"
      />
      <Stage />
      <WhyUs />
      <InlineCTA
        heading="You've Seen How We Think"
        subheading="Now let's look at how it applies to your organisation."
        buttonText="Let's Talk Through It"
      />
      <FAQs />
    </>
  );
}
