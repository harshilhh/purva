import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import Hyphen from './Hyphen';

const faqs = [
  {
    question:
      'What does The Compliance Chamber do and how is it different from a standard compliance consultant?',
    answer:
      'The Compliance Chamber advises on the intersection of AML, privacy law, AI governance, and operational resilience simultaneously, not in sequence. Most advisers specialise in one framework and refer out when a second appears. This practice holds both, which is the only way to resolve conflicts between frameworks rather than name them. Every engagement is led directly by Purva Buch, CAMS. So, you get senior sight in all the aspects.',
  },
  {
    question: 'How do I know if my organisation has a regulatory gap?',
    answer:
      'The clearest signal is when a compliance question arrives and no single team can answer it completely. Other indicators: your AML adviser and your privacy lawyer are giving conflicting guidance on the same fact pattern. Your governance documentation was built for one jurisdiction and you have since expanded into others. A new regulation such as MiCA, DORA, the EU AI Act, or MLR 2025 has come into force and no one has assessed how it interacts with your existing compliance architecture.',
  },
  {
    question: 'Who is The Compliance Chamber right for?',
    answer:
      'Regulated organisations with a genuine cross-framework or cross-jurisdictional compliance problem — mid-size law firms, accountancy practices, corporate services providers, fintechs, and scaling businesses preparing for regulatory authorisation or institutional funding.',
  },
  {
    question:
      'When does a business need external compliance advisory rather than an in-house team?',
    answer:
      'When the compliance problem crosses framework boundaries that no single in-house function owns. An internal MLRO understands AML. An internal DPO understands data protection. Neither owns the intersection, and that is where the most consequential regulatory exposure sits. External advisory is most valuable when the problem requires depth across more than one regulatory framework simultaneously.',
  },
  {
    question: 'What should I expect from a compliance advisory engagement?',
    answer:
      'A clearly scoped engagement with a defined deliverable — not an open-ended retainer that produces activity without output. Every engagement begins with a scoping call to define the problem precisely. The deliverable is built for operational use: a gap analysis your legal team can act on, a protocol your compliance team can follow, a governance framework your board can interrogate. Engagements are led directly by the founder.',
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
          <span className="text-[14px] sm:text-[16px] font-semibold text-brand-dark group-hover:text-brand-yellow transition-colors duration-200 leading-snug">
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
        <p className="text-[13.5px] sm:text-[15px] leading-relaxed text-brand-grey pl-6 sm:pl-10 pr-2 sm:pr-10">
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
        <div className="border border-gray-200 p-5 sm:p-8 md:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
          {/* Header */}
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1.5px] bg-brand-yellow" />
            <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
              FAQ
            </span>
          </div>
          <h2 className="font-display text-[20px] sm:text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.2] tracking-tight mb-8">
            Common Questions on Cross<Hyphen />Border Compliance:{' '}
            <span className="text-brand-grey-light font-normal">Answered</span>
          </h2>

          {/* Accordion */}
          <div>
            {faqs.map((faq, i) => (
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
