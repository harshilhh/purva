import { useInView } from '../hooks/useInView';

export default function FounderQuote() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={`grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {/* Left — Founder image */}
          <div className="relative w-[200px] md:w-[260px] shrink-0 mx-auto md:mx-0">
            <div className="aspect-[3/4] rounded-[3px] overflow-hidden">
              <img
                src="/leadership.jpg"
                alt="Purva Buch, CAMS"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Yellow accent corner */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-brand-yellow rounded-br-[3px]" />
          </div>

          {/* Right — Quote */}
          <div>
            <blockquote className="font-display text-[22px] md:text-[28px] lg:text-[32px] font-normal italic text-brand-dark leading-[1.45] tracking-tight relative">
              <span className="font-display text-[48px] md:text-[56px] text-brand-yellow/40 select-none float-left mr-1 -mt-1 leading-[0.8]">&ldquo;</span>Compliance frameworks were never designed to work together. Our work
              begins where they overlap &mdash; and where that overlap creates
              operational consequences.<span className="font-display text-[48px] md:text-[56px] text-brand-yellow/40 select-none leading-[0] inline-block ml-1 -mb-3 align-bottom">&rdquo;</span>
            </blockquote>

            <div className="mt-8">
              <div className="w-8 h-[1.5px] bg-brand-yellow mb-4" />
              <p className="text-[15px] font-semibold tracking-[0.15em] uppercase text-brand-dark">
                Purva Buch, CAMS
              </p>
              <p className="mt-1 text-[13px] text-brand-grey-light tracking-wide">
                Founder, Compliancenomics
              </p>
              <a
                href="mailto:purva@compliancenomics.com"
                className="mt-3 inline-flex items-center gap-2 text-[13px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
              >
                <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                purva@compliancenomics.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
