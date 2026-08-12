import { useInView } from '../hooks/useInView';
import { useState, useRef, useEffect } from 'react';

const services = [
  {
    num: '01',
    title: 'Governance Advisory',
    intro:
      'Regulated and high-growth organisations need governance structures that hold under scrutiny from regulators, investors, and boards. This service covers the full operating model: three lines of defence design, compliance function resourcing, board and committee reporting frameworks that translate compliance data into strategic management intelligence, and governance maturity assessments for firms preparing for institutional review.',
    detail:
      'For organisations that do not need a full-time compliance department but require institutional-grade oversight, Compliancenomics provides the governance architecture without the permanent headcount.',
  },
  {
    num: '02',
    title: 'AML & Sanctions',
    intro:
      'CAMS-certified AML framework design, built around the 13-step AML/CFT and sanctions defence framework: from board-level governance and MLRO appointment through enterprise-wide risk assessment, CDD/EDD architecture, transaction monitoring logic, sanctions screening, and audit-ready record-keeping.',
    detail:
      'Covering UAE (mainland, DIFC, ADGM), UK, EU, India (IFSCA), and APAC jurisdictions simultaneously as a single coordinated compliance ecosystem. Compliancenomics also advises on RegTech selection and implementation, ensuring transaction monitoring and screening tools are configured for audit readiness from day one.',
  },
  {
    num: '03',
    title: 'Privacy & AI',
    intro:
      'Data protection compliance across GDPR, UK GDPR, UAE PDPL (mainland, DIFC, ADGM), India DPDPA, and APAC frameworks, combined with AI governance architecture for organisations deploying automated decision-making systems. The service covers the full privacy operating model: DPO appointment, ROPA and DPIA frameworks, consent management automation, cross-border transfer mechanisms, and data subject rights workflows.',
    detail:
      'On the AI side: EU AI Act risk classification, explainability and human oversight design, and the governance documentation regulators are beginning to require. The two disciplines are addressed together, because the automated systems driving AML and financial crime decisions are increasingly subject to both simultaneously.',
  },
  {
    num: '04',
    title: 'Systems & Automation',
    intro:
      'Compliance governance is only as effective as the systems that carry it. This service covers the selection and implementation of compliance technology, transaction monitoring platforms, sanctions screening tools, consent management systems, and AI governance software, and the integration of that technology into the organisation\u2019s existing operational infrastructure.',
    detail:
      'The objective is to embed compliance logic directly into business workflows, eliminating the manual friction that creates gaps between policy and practice. For SMEs and scaling organisations, this includes aligning compliance tools with core business systems so that governance is not a parallel process but a built-in one.',
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
          {/* Left, Sticky header */}
          <div
            className={`transition-all duration-700 ${
              isInView ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <div className="md:sticky md:top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-brand-yellow" />
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
                  What We Do
                </span>
              </div>
              <h2 className="font-display text-[26px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
                Advisory built for the intersection.
              </h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-brand-grey">
                The Compliance Chamber operates across four service areas. Each
                is designed for the point where regulatory frameworks conflict
                and where single-framework advisory leaves organisations
                exposed.
              </p>
            </div>
          </div>

          {/* Right, Accordion panels */}
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
