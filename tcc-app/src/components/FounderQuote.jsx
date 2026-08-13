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
          {/* Left, Founder image */}
          <div className="relative w-[200px] md:w-[260px] shrink-0 mx-auto md:mx-0">
            <div className="aspect-[3/4] rounded-[3px] overflow-hidden">
              <img
                src="/leadership.jpg"
                alt="Purva Buch, LLB, CAMS, Founder, Compliancenomics LLP"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            {/* Yellow accent corner */}
            <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-brand-yellow rounded-br-[3px]" />
          </div>

          {/* Right, Quote */}
          <div>
            <blockquote className="font-display text-[22px] md:text-[28px] lg:text-[32px] font-normal italic text-brand-dark leading-[1.45] tracking-tight relative">
              <span className="font-display text-[48px] md:text-[56px] text-brand-yellow/40 select-none float-left mr-1 -mt-1 leading-[0.8]">&ldquo;</span>I spent years in litigation watching businesses get penalised for gaps
              nobody had mapped, one regulator&rsquo;s requirement colliding
              with another&rsquo;s, and no one responsible for the collision.
              Compliancenomics exists to find that gap before the regulator does.<span className="font-display text-[48px] md:text-[56px] text-brand-yellow/40 select-none leading-[0] inline-block ml-1 -mb-3 align-bottom">&rdquo;</span>
            </blockquote>

            <div className="mt-8">
              <div className="w-8 h-[1.5px] bg-brand-yellow mb-4" />
              <p className="text-[15px] font-semibold tracking-[0.15em] uppercase text-brand-dark">
                Purva Buch, LLB, CAMS
              </p>
              <p className="mt-1 text-[13px] text-brand-grey-light tracking-wide">
                Founder, Compliancenomics LLP
              </p>
              <a
                href="mailto:purva@compliancenomics.com"
                className="mt-3 flex w-fit items-center gap-2 text-[13px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
              >
                <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                purva@compliancenomics.com
              </a>
              <a
                href="https://www.linkedin.com/in/purvabuch"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 flex w-fit items-center gap-2 text-[13px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
              >
                <svg className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                linkedin.com/in/purvabuch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
