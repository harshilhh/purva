import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';
import Hyphen from './Hyphen';

const faqs = [
  {
    question: 'What is cross-border compliance?',
    answer: 'Cross-border compliance refers to protocols designed in such a manner that an organisation meets regulatory requirements across multiple jurisdictions, simultaneously. It involves aligning obligations such as AML, data protection, data-retention and reporting, where rules differ, overlap, or contradict.',
  },
  {
    question: 'Why is cross-border compliance difficult?',
    answer: 'Cross-border compliance is difficult because regulatory systems are not harmonised. Each jurisdiction applies its own legal logic, creating overlap, conflict, and operational friction across the same activities.',
  },
  {
    question: 'How do organisations manage AML and data protection conflicts?',
    answer: 'AML and data protection conflicts can be managed by structuring compliance, not simplifying it. This includes segmenting data, applying jurisdiction-specific rules, and implementing controls that address overlapping obligations without breaking operations.',
  },
  {
    question: 'What is a cross-border compliance framework?',
    answer: 'Cross-border compliance framework is a structured system that maps various regulatory requirements, segments data by legal obligation, and embeds jurisdiction-specific controls into operations to ensure that compliance holds across borders.',
  },
];

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-brand-border">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="text-[15px] font-semibold text-brand-dark pr-4 group-hover:text-brand-yellow transition-colors duration-200">
          {question}
        </span>
        <span className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full border border-brand-border group-hover:border-brand-yellow transition-all duration-300 ${isOpen ? 'bg-brand-yellow border-brand-yellow rotate-0' : ''}`}>
          <svg
            className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-brand-grey-light'}`}
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
          isOpen ? 'max-h-[500px] opacity-100 pb-5' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-[14px] leading-relaxed text-brand-grey-light pr-10">
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
    <section ref={ref} id="faq" className="py-10 md:py-14 bg-brand-surface">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title={<>Frequently Asked Questions on Cross<Hyphen />Border Compliance</>}
            highlight="FAQ"
          />

          <div className="mt-8">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
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
