import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const scenarios = [
  {
    marker: 'I',
    situation: 'Legal & Professional Services',
    tagline: 'The law firm or accountancy practice with a cross-framework compliance gap.',
    text: "Mid-size regulated legal practices and accountancy firms navigating the FCA's transfer of AML supervision, where Regulation 21 customer due diligence requirements under the Money Laundering Regulations, UK GDPR's lawful basis provisions, and legal professional privilege are colliding in ways their existing advisers, one for AML, one for data protection, have not mapped together. These organisations have compliance obligations but not the in-house specialist depth to manage the intersection.",
  },
  {
    marker: 'II',
    situation: 'Corporate Services & Intermediaries',
    tagline: 'The corporate services provider operating across multiple free zone and onshore jurisdictions.',
    text: "Corporate service providers, registered agents, and professional intermediaries operating across DIFC, ADGM, UAE mainland, and EU jurisdictions simultaneously, where beneficial ownership disclosure thresholds under the UAE's AML-CFT framework, DIFC and ADGM data protection regulations, each with their own extraterritorial reach, and GDPR's Article 3 territorial scope diverge on the same client file, with no single framework reconciling them.",
  },
  {
    marker: 'III',
    situation: 'Online Marketplaces & Travel Tech Platforms',
    tagline: 'The platform handling customer data at scale, across borders.',
    text: "Online marketplaces, e-commerce platforms, and travel tech businesses, OTAs, booking engines, and travel management platforms, processing user data at every transaction, where consent requirements under India's DPDP Act, GDPR's purpose and storage limitation principles, and cross-border transfer restrictions apply differently depending on where the customer, the server, and the merchant each sit. Travel platforms carry the added layer of passport, visa, and travel history data moving across jurisdictions with each booking. Organisations where consent flows, retention schedules, and vendor data-sharing agreements were built for growth, not for what each of these regimes independently requires.",
  },
  {
    marker: 'IV',
    situation: 'Healthtech & Data-Intensive Services',
    tagline: 'The business whose service depends on sensitive personal data.',
    text: "Healthtech platforms, diagnostics providers, and digital health services processing health records, biometric data, or genetic information, where GDPR's Article 9 special category regime, India's DPDP Act read alongside the forthcoming health data governance rules, and HIPAA where US-linked data flows are in play, impose materially different consent, breach notification, and cross-border transfer standards on the same dataset. Organisations that need data flows, retention periods, and processor arrangements mapped with the same precision as a clinical protocol, not assumed.",
  },
  {
    marker: 'V',
    situation: 'AI-Deployed Platforms & Conversational Interfaces',
    tagline: 'The business whose customer-facing AI now carries regulatory obligations of its own.',
    text: "Platforms deploying AI chatbots, virtual assistants, or automated decision-making tools in customer-facing roles, where the EU AI Act's transparency obligations for limited-risk systems, GDPR's Article 22 restrictions on automated decision-making, and India's DPDP Act consent requirements for AI-processed personal data now apply to a function that was built and shipped as a product feature, not a regulated system. Organisations where the product, legal, and compliance teams have not yet had the conversation about what the chatbot is actually doing with what it collects.",
  },
  {
    marker: 'VI',
    situation: 'Scaling & High-Growth Businesses',
    tagline: 'The high-growth organisation building governance before the regulator arrives.',
    text: 'Scaling businesses across GIFT City, Dubai, London, Singapore, or beyond, approaching their first institutional funding round, IFSCA or FCA authorisation, or cross-border expansion, where AML policies, data protection frameworks, and sector-specific licensing conditions are being built in parallel by functions that have never spoken to each other, with no coordinating architecture holding it together.',
  },
];

export default function HomeAudience() {
  const [ref, isInView] = useInView();
  const [expanded, setExpanded] = useState({});
  const toggle = (key) => setExpanded((p) => ({ ...p, [key]: !p[key] }));

  return (
    <section ref={ref} id="audience" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header, centered */}
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
            Compliancenomics is not the right engagement for every
            regulated firm. It is built for a specific kind of organisation ,
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

              {/* Hover accent, bottom-left corner mark */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-yellow group-hover:w-full transition-all duration-600 ease-out" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
