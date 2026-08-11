import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

export default function FinalCTA() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="relative py-20 md:py-28 bg-brand-yellow-light" style={{ overflowX: 'clip' }}>
      {/* Subtle diagonal lines — same style as WhyUs for rhythm */}
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 40px, #1A1A1A 40px, #1A1A1A 41px)',
      }} />

      <div
        className={`relative max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${
          isInView ? 'animate-fade-up' : 'opacity-0'
        }`}
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          {/* Left — statement */}
          <div className="max-w-xl">
            <div className="w-10 h-[2px] bg-brand-dark/20 mb-8" />
            <p className="font-display text-[26px] md:text-[34px] lg:text-[40px] font-semibold text-brand-dark leading-[1.2] tracking-tight">
              The conflict is mapped.
            </p>
            <p className="font-display text-[26px] md:text-[34px] lg:text-[40px] font-normal text-brand-dark/45 leading-[1.2] tracking-tight mt-1">
              The engagement starts here.
            </p>
            <p className="mt-6 text-[15px] leading-[1.8] text-brand-grey max-w-md">
              If your organisation has a compliance problem that does not fit
              neatly into one adviser&apos;s remit, this practice is built for
              that problem.
            </p>
          </div>

          {/* Right — CTAs stacked */}
          <div className="flex flex-col gap-3 md:items-end shrink-0 w-full md:w-auto">
            <Link
              to="/contact"
              className="cta-primary inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 md:px-10 py-4 text-[12px] font-semibold tracking-[0.18em] uppercase bg-brand-dark text-white rounded-sm hover:bg-brand-grey transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg"
            >
              Book a Scoping Call
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 md:px-10 py-4 text-[12px] font-semibold tracking-[0.18em] uppercase border-2 border-brand-dark/20 text-brand-dark/70 rounded-sm hover:border-brand-dark/50 hover:text-brand-dark transition-all duration-300"
            >
              View Our Services
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
