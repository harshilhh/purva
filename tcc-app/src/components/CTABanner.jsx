import { useInView } from '../hooks/useInView';

export default function CTABanner({ heading, subheading, buttonText, noBgImage = false }) {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${noBgImage ? 'py-10 md:py-14' : 'py-20 md:py-28'}`}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {!noBgImage && (
          <div
            className="absolute inset-0 bg-cover bg-center md:bg-fixed"
            style={{ backgroundImage: `url(/cta-bg.jpg)` }}
          />
        )}
        <div className="absolute inset-0 bg-brand-yellow-light/90" />
      </div>

      <div className={`relative max-w-3xl mx-auto px-6 lg:px-8 text-center transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <h2 className="font-display text-2xl md:text-3xl lg:text-[40px] font-semibold leading-tight tracking-tight text-brand-dark">
          {heading}
        </h2>
        <p className="mt-4 text-base md:text-lg leading-relaxed text-brand-dark/70">
          {subheading}
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-[13px] font-semibold tracking-wide uppercase rounded-sm bg-brand-dark text-white hover:bg-brand-grey transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg"
          >
            {buttonText}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
