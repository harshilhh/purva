import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const scenarios = [
  {
    marker: 'I',
    situation: 'Legal & Professional Services',
    tagline: 'The law firm or accountancy practice with a cross-framework compliance gap.',
    text: 'Mid-size regulated legal practices and accountancy firms navigating the FCA’s AML supervision transition, where the Money Laundering Regulations, GDPR, and professional confidentiality obligations are colliding in ways their existing advisers — one for AML, one for data protection — have not mapped together. These organisations have compliance obligations but not the in-house specialist depth to manage the intersection.',
  },
  {
    marker: 'II',
    situation: 'Corporate Services & Intermediaries',
    tagline: 'The corporate services provider operating across multiple free zone and onshore jurisdictions.',
    text: 'Corporate service providers, registered agents, and professional intermediaries operating across DIFC, ADGM, UAE mainland, and EU jurisdictions simultaneously, where VARA obligations, AML requirements, and data protection frameworks from three separate regulators sit inside the same transaction architecture. Organisations that need a single advisory view across the full regulatory stack, not three separate advisers working in parallel.',
  },
  {
    marker: 'III',
    situation: 'Fintech & Regulated Payment Institutions',
    tagline: 'The fintech operating under MiCA and UK MLR at the same time.',
    text: 'Regulated payment institutions and crypto-asset service providers managing dual-jurisdiction obligations — preparing for AMLA direct supervision, implementing Travel Rule requirements, and deploying AI-assisted transaction monitoring systems that now fall within the scope of the EU AI Act. Organisations where the compliance, technology, and legal functions are operating from different frameworks with no coordinating architecture.',
  },
  {
    marker: 'IV',
    situation: 'Scaling & High-Growth Businesses',
    tagline: 'The high-growth organisation building governance before the regulator arrives.',
    text: 'Scaling businesses across GIFT City, Dubai, London, Singapore, or beyond, approaching their first institutional funding round, regulatory authorisation, or cross-border expansion and needing governance infrastructure that will hold under scrutiny. Organisations that do not yet have a full compliance function but need institutional-grade governance architecture in place before the regulator or the investor asks for it. The practice is sized for organisations that are regulated, that take compliance seriously, and that have a genuine cross-jurisdictional or cross-framework problem. Not the very small. Not the very large. The sophisticated middle.',
  },
];

export default function HomeAudience() {
  const [ref, isInView] = useInView();
  const [expanded, setExpanded] = useState({});
  const toggle = (key) => setExpanded((p) => ({ ...p, [key]: !p[key] }));

  return (
    <section ref={ref} id="audience" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — centered */}
        <div
          className={`mb-14 md:mb-20 flex flex-col items-center text-center transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
              Who We Work With
            </span>
            <div className="w-10 h-[1px] bg-brand-yellow" />
          </div>
          <h2 className="font-display text-[26px] sm:text-[32px] md:text-[44px] lg:text-[52px] font-semibold text-brand-dark leading-[1.1] tracking-tight max-w-3xl">
            The right fit and the right problem.
          </h2>
          <p className="mt-6 text-[16px] md:text-[17px] leading-[1.85] text-brand-grey max-w-2xl">
            The Compliance Chamber is not the right engagement for every
            regulated firm. It is built for a specific kind of organisation —
            the one with genuine cross-framework or cross-jurisdictional
            compliance exposure that a single-discipline adviser cannot resolve.
          </p>
        </div>

        {/* Scenario grid */}
        <div className="grid md:grid-cols-2 gap-[1px] bg-brand-border/50">
          {scenarios.map((scenario, i) => (
            <div
              key={scenario.marker}
              className="audience-card group relative bg-brand-surface hover:bg-brand-yellow-light p-6 md:p-10 transition-colors duration-500"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 120 + 200}ms`,
                transitionDuration: '700ms',
                transitionProperty: 'opacity, transform',
              }}
            >
              {/* Marker + Title */}
              <div className="flex items-start gap-5 mb-3">
                <span className="font-display text-[36px] md:text-[52px] font-bold leading-none text-brand-yellow/30 group-hover:text-brand-yellow/60 transition-colors duration-600 select-none shrink-0">
                  {scenario.marker}
                </span>
                <h3 className="font-display text-[20px] md:text-[24px] font-semibold text-brand-yellow-dark leading-[1.2] tracking-tight pt-2">
                  {scenario.situation}
                </h3>
              </div>

              {/* Tagline */}
              <p className="mt-3 text-[15px] md:text-[16px] font-medium leading-[1.5] text-brand-dark/75 italic">
                {scenario.tagline}
              </p>

              {/* Separator */}
              <div className="mt-5 mb-5 h-[1px] w-8 bg-brand-yellow group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p
                className={`text-[15px] md:text-[16px] leading-[1.85] text-brand-grey group-hover:text-brand-dark/80 transition-colors duration-500 ${
                  expanded[scenario.marker] ? '' : 'line-clamp-4'
                }`}
              >
                {scenario.text}
              </p>
              <button
                type="button"
                onClick={() => toggle(scenario.marker)}
                className="mt-4 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark hover:text-brand-dark transition-colors duration-200"
              >
                {expanded[scenario.marker] ? 'Show less' : 'Read more'}
                <svg
                  className={`w-3 h-3 transition-transform duration-300 ${expanded[scenario.marker] ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Hover accent — bottom-left corner mark */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-yellow group-hover:w-full transition-all duration-600 ease-out" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
