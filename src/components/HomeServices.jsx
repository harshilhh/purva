import { useInView } from '../hooks/useInView';
import { useState, useRef, useEffect } from 'react';

const services = [
  {
    num: '01',
    title: 'Cross-Border Regulatory Conflict Mapping',
    intro:
      'We identify where regulatory frameworks impose contradictory or overlapping obligations on the same operational activity.',
    detail:
      'Mapping divergence across AML, data protection, AI governance, and operational resilience \u2014 jurisdiction by jurisdiction.',
  },
  {
    num: '02',
    title: 'Regulatory Readiness and Change Impact',
    intro:
      'We assess how incoming or evolving regulation reshapes existing compliance obligations across your operating jurisdictions.',
    detail:
      'From MiCA to the EU AI Act to DORA \u2014 structured analysis of change impact before it becomes an operational problem.',
  },
  {
    num: '03',
    title: 'Governance Protocols and Senior Advisory',
    intro:
      'We design governance protocols and advisory frameworks for organisations navigating multi-framework compliance.',
    detail:
      'Senior-level engagement on regulatory strategy, board reporting, and cross-border compliance architecture.',
  },
];

function AccordionPanel({ service, index, isOpen, onToggle, isInView }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className="border-t border-brand-border/50 last:border-b"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 150 + 200}ms`,
        transitionDuration: '700ms',
        transitionProperty: 'opacity, transform',
      }}
    >
      {/* Clickable title row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 cursor-pointer group text-left"
      >
        <span className={`font-display text-[15px] md:text-[16px] font-semibold tracking-[0.05em] select-none transition-colors duration-400 ${isOpen ? 'text-brand-yellow' : 'text-brand-dark/20 group-hover:text-brand-yellow/60'}`}>
          {service.num}
        </span>

        <h3 className={`flex-1 font-display text-[18px] md:text-[22px] font-semibold tracking-tight leading-[1.25] transition-colors duration-400 ${isOpen ? 'text-brand-dark' : 'text-brand-dark/70 group-hover:text-brand-dark'}`}>
          {service.title}
        </h3>

        {/* Toggle icon */}
        <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-400 ${isOpen ? 'border-brand-yellow bg-brand-yellow/10 rotate-45' : 'border-brand-border group-hover:border-brand-yellow/50'}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
          </svg>
        </span>
      </button>

      {/* Expandable content */}
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="pl-10 md:pl-14 pb-6 md:pb-8">
          <div className="h-[2px] w-8 bg-brand-yellow mb-4" />
          <p className="text-[17px] leading-[1.8] text-brand-grey max-w-lg">
            {service.intro}
          </p>
          <p className="mt-2 text-[15px] leading-[1.75] text-brand-grey-light max-w-lg">
            {service.detail}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomeServices() {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section ref={ref} id="services" className="py-16 md:py-20 bg-brand-yellow-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_1.8fr] gap-12 md:gap-16">
          {/* Left — Sticky header */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <div className="md:sticky md:top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-brand-yellow" />
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
                  The Operational Layer
                </span>
              </div>
              <h2 className="font-display text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
                What We Do
              </h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-brand-grey">
                Translating regulatory complexity into structured advisory
                capability. Each engagement is specific, outcome-led, and scoped to
                the conflict at hand.
              </p>
            </div>
          </div>

          {/* Right — Accordion panels */}
          <div>
            {services.map((service, i) => (
              <AccordionPanel
                key={service.num}
                service={service}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
