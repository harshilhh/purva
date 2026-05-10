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
                src="/leadership.jpeg"
                alt="Purva Buch, CAMS"
                className="w-full h-full object-cover"
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
                Founder, The Compliance Chamber
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
