import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import Hyphen from './Hyphen';

const faqs = [
  {
    question: 'What does Compliancenomics do?',
    answer:
      'Compliancenomics designs and implements cross-border AML and privacy compliance frameworks for businesses operating across multiple jurisdictions. We align regulatory obligations — including AML, data protection, and reporting requirements — across regions such as the UK, EU, UAE, India, and Singapore.',
  },
  {
    question: 'Who does Compliancenomics work with?',
    answer:
      'We work with financial institutions, fintech companies, payment service providers, and professional services firms that operate — or are expanding — across multiple jurisdictions and need structured, cross-border compliance frameworks.',
  },
  {
    question: 'What is the Alignment-First Compliance Model?',
    answer:
      'The Alignment-First Compliance Model is our structured approach to managing overlapping regulatory obligations across jurisdictions. Rather than forcing artificial standardisation, it maps jurisdiction-specific requirements, segments obligations, and applies controls that enable simultaneous compliance across all relevant regions.',
  },
  {
    question: 'Which jurisdictions does Compliancenomics cover?',
    answer:
      'We cover key regulatory jurisdictions including the United Kingdom (FCA, ICO, PRA), the European Union (ESMA, EBA, EDPB), the UAE (DFSA, ADGM, CBUAE), India (RBI, SEBI, IRDAI), and Singapore (MAS, PDPC), along with their intersecting regulatory frameworks.',
  },
  {
    question: 'How is Compliancenomics different from a traditional compliance consultant?',
    answer:
      "Unlike generalist consultants, we specialise exclusively in cross-border regulatory conflict — the point where jurisdictions impose contradictory or overlapping obligations. We do not simplify compliance; we structure it so that each jurisdiction's requirements are met individually and simultaneously.",
  },
];

function FAQItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="shrink-0 text-[11px] font-semibold tracking-widest text-brand-yellow font-display">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-[16px] font-semibold text-brand-dark group-hover:text-brand-yellow transition-colors duration-200">
            {question}
          </span>
        </div>
        <span
          className={`shrink-0 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
            isOpen
              ? 'bg-brand-yellow border-brand-yellow'
              : 'border-gray-300 group-hover:border-brand-yellow'
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
          isOpen ? 'max-h-[500px] opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[15px] leading-relaxed text-brand-grey pl-10 pr-10">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section ref={ref} className="py-8 md:py-12 bg-white">
      <div
        className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="border border-gray-200 p-6 sm:p-8 md:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1.5px] bg-brand-yellow" />
            <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
              FAQ
            </span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-8">
            Common Questions on Cross<Hyphen />Border Compliance:{' '}
            <span className="text-brand-grey-light font-normal">Answered</span>
          </h2>

          {/* Accordion */}
          <div>
            {faqs.slice(0, 4).map((faq, i) => (
              <FAQItem
                key={i}
                index={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
