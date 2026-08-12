import { useInView } from '../hooks/useInView';
import { useRef, useState, useEffect } from 'react';

const conflicts = [
  {
    id: '01',
    left: 'SAR',
    right: 'DSAR',
    summary: 'The SAR\u2013DSAR Conflict',
    description:
      'A data subject submits an erasure request. Your GDPR team starts the clock. Your MLRO has an active suspicious activity report on the same individual. Disclosure of the SAR is a criminal offence. Erasure of the underlying data may prejudice an investigation. Neither team has a documented protocol for this scenario.',
  },
  {
    id: '02',
    left: 'AML',
    right: 'AI Act',
    summary: 'The AML\u2013AI Act Paradox',
    description:
      'Your automated customer risk-scoring model is subject to Article 22 GDPR, the individual has a right to explanation and human review. The same model is central to your AML transaction monitoring architecture. The EU AI Act now classifies certain AML tools as high-risk AI systems with mandatory oversight obligations. Your compliance team and your technology team are operating without a unified governance framework.',
  },
  {
    id: '03',
    left: 'DORA',
    right: 'GDPR',
    summary: 'The DORA\u2013GDPR Incident Timeline Conflict',
    description:
      'DORA requires ICT-related incident reporting within 24 hours of classification. GDPR sets a 72-hour window for personal data breaches but requires prior determination of whether personal data is affected. When an ICT incident involves customer data, the two reporting timelines run simultaneously, under different supervisors, with different notification content requirements. Most firms do not have a joint protocol.',
  },
  {
    id: '04',
    left: 'MiCA',
    right: 'Travel Rule \u00d7 GDPR',
    summary: 'The MiCA\u2013Travel Rule\u2013GDPR Triangle',
    description:
      'MiCA imposes disclosure obligations on crypto-asset service providers. The EU Transfer of Funds Regulation extends Travel Rule requirements to crypto transfers, mandating originator and beneficiary data at the point of transaction. GDPR restricts the transfer of that same personal data to third-country counterparties without an adequacy mechanism. Three frameworks. Three supervisors. One transaction.',
  },
];

function ConflictCard({ conflict, index, isInView }) {
  return (
    <div
      className="conflict-card group relative shrink-0 w-[85vw] md:w-[calc((100%-2*1.25rem)/3)] bg-brand-surface rounded-[3px] snap-start overflow-hidden"
      style={{
        opacity: isInView ? 1 : 0,
        transitionDelay: `${index * 120 + 200}ms`,
        transitionDuration: '700ms',
        transitionProperty: 'opacity',
      }}
    >
      {/* Left accent spine, extends on hover */}
      <div className="absolute top-0 left-0 w-[3px] h-10 bg-brand-yellow group-hover:h-full transition-all duration-600 ease-out" />

      {/* Large ghost number watermark */}
      <span className="absolute top-3 right-5 font-display text-[88px] leading-none font-bold text-brand-dark/[0.035] group-hover:text-brand-yellow/[0.1] transition-colors duration-700 select-none pointer-events-none">
        {conflict.id}
      </span>

      {/* Corner fold accent, slides in on hover */}
      <div className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-r-[28px] border-t-transparent border-r-brand-yellow/0 group-hover:border-r-brand-yellow/15 transition-all duration-500" />

      {/* Content */}
      <div className="relative p-6 md:p-9 pl-5 md:pl-7">
        {/* Case label */}
        <span className="inline-block text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-yellow/90">
          Case {conflict.id}
        </span>

        {/* Framework clash names */}
        <div className="mt-5 flex items-baseline gap-3 flex-wrap">
          <span className="font-display text-[22px] md:text-[24px] font-semibold text-brand-dark tracking-tight leading-tight">
            {conflict.left}
          </span>
          <span className="conflict-x inline-block text-[17px] text-brand-yellow font-semibold select-none">
            &times;
          </span>
          <span className="font-display text-[22px] md:text-[24px] font-semibold text-brand-dark tracking-tight leading-tight">
            {conflict.right}
          </span>
        </div>

        {/* Summary */}
        <p className="mt-2 text-[11px] tracking-[0.12em] uppercase text-brand-grey-light/80 font-medium">
          {conflict.summary}
        </p>

        {/* Animated separator, fills left to right on hover */}
        <div className="mt-6 mb-6 h-[1px] relative overflow-hidden">
          <div className="absolute inset-0 bg-brand-border/40" />
          <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-brand-yellow/40 transition-all duration-700 ease-out" />
        </div>

        {/* Description */}
        <p className="text-[13.5px] leading-[1.8] text-brand-grey/75 group-hover:text-brand-grey transition-colors duration-500">
          {conflict.description}
        </p>
      </div>
    </div>
  );
}

export default function RegulatoryGap() {
  const [ref, isInView] = useInView();
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener('scroll', checkScroll, { passive: true });
    window.addEventListener('resize', checkScroll);
    return () => {
      el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const nudged = useRef(false);

  // One-time nudge when section comes into view
  useEffect(() => {
    if (isInView && !nudged.current && scrollRef.current) {
      nudged.current = true;
      const el = scrollRef.current;
      const timer = setTimeout(() => {
        el.scrollTo({ left: 40, behavior: 'smooth' });
        setTimeout(() => el.scrollTo({ left: 0, behavior: 'smooth' }), 600);
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector(':first-child')?.offsetWidth || 300;
    el.scrollBy({ left: dir === 'right' ? cardWidth + 20 : -(cardWidth + 20), behavior: 'smooth' });
  };

  return (
    <section ref={ref} id="regulatory-gap" className="py-16 md:py-20 bg-white border-t border-brand-border/40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-10 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6 transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
                Regulatory Tensions
              </span>
            </div>
            <h2 className="font-display text-[26px] sm:text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.1] tracking-tight max-w-2xl">
              The Cases No One Framework Owns Alone
            </h2>
            <p className="mt-6 text-[17px] leading-[1.8] text-brand-grey max-w-2xl">
              Most regulated organisations manage AML compliance and data
              protection in separate functions, with separate advisers, working
              from separate frameworks. That architecture made sense when the
              frameworks did not intersect. It no longer does. These are the
              conflicts that fall through the gap and the ones that create the
              most material regulatory exposure.
            </p>
          </div>

          {/* Carousel arrows */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-10 h-10 flex items-center justify-center border rounded-sm transition-all duration-200 ${
                canScrollLeft
                  ? 'border-brand-dark/20 text-brand-dark hover:border-brand-yellow hover:text-brand-yellow cursor-pointer'
                  : 'border-brand-border text-brand-border cursor-default'
              }`}
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-10 h-10 flex items-center justify-center border rounded-sm transition-all duration-200 ${
                canScrollRight
                  ? 'border-brand-dark/20 text-brand-dark hover:border-brand-yellow hover:text-brand-yellow cursor-pointer'
                  : 'border-brand-border text-brand-border cursor-default'
              }`}
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mb-4"
          data-carousel
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {conflicts.map((c, i) => (
            <ConflictCard key={c.id} conflict={c} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
