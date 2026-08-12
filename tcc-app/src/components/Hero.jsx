import { useInView } from '../hooks/useInView';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden"
    >
      {/* Full-cover minimal image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        {/* Light yellow overlay, keeps image visible but text-focused */}
        <div className="absolute inset-0 bg-brand-yellow-light/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow-light/95 via-brand-yellow-light/70 to-brand-yellow-light/25" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 md:pt-36 pb-20 md:pb-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-4 mb-10 transition-all duration-700 ${
              isInView ? 'animate-fade-up' : 'opacity-0'
            }`}
          >
            <div className="w-12 h-[1px] bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light">
              Cross-Border Regulatory Advisory
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-[30px] xs:text-[34px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-semibold text-brand-dark leading-[1.08] tracking-[-0.02em] transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-1' : 'opacity-0'
            }`}
          >
            <span className="relative inline-block">
              Compliancenomics
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-brand-yellow/40" />
            </span>
          </h1>

          {/* Supporting paragraph */}
          <p
            className={`mt-8 text-[17px] md:text-[17px] leading-[1.8] text-brand-grey max-w-[520px] transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-2' : 'opacity-0'
            }`}
          >
            Cross-border regulatory risk advisory where AML, privacy law, AI
            governance, and operational resilience converge.
            <span className="block mt-3 text-brand-dark font-medium">
              Your GDPR team does not own the SAR. Your AML adviser has not read
              the AI Act. Your GRC consultant is working from a single-framework
              lens. The conflict between these obligations is where regulatory
              exposure lives and where most advisory practices stop.
            </span>
          </p>

          {/* CTAs */}
          <div
            className={`mt-10 flex flex-wrap items-center gap-4 transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-3' : 'opacity-0'
            }`}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] font-semibold tracking-[0.15em] uppercase bg-brand-yellow text-brand-dark rounded-sm hover:bg-brand-yellow-dark transition-all duration-200 hover:translate-y-[-1px]"
            >
              Work With Us
            </Link>
            <a
              href="https://regulatorygap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 text-[12px] font-semibold tracking-[0.15em] uppercase border border-brand-dark/20 text-brand-dark rounded-sm hover:border-brand-dark/60 transition-all duration-200"
            >
              Read Our Insights
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </div>

          {/* Trust cue */}
          <div
            className={`mt-12 flex items-center gap-3 transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-4' : 'opacity-0'
            }`}
          >
            <div className="w-8 h-[1px] bg-brand-border" />
            <span className="text-[11px] tracking-[0.25em] text-brand-dark/70 font-medium uppercase">
              EU &middot; UK &middot; UAE &middot; APAC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
