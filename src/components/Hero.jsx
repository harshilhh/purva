import { useInView } from '../hooks/useInView';
import Hyphen from './Hyphen';

export default function Hero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-[75vh] md:min-h-[85vh] flex items-center bg-white overflow-hidden"
    >
      {/* Right-side law stock image at 70% opacity */}
      <div className="absolute top-0 right-0 bottom-0 w-full md:w-[50%]">
        <img
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&q=80"
          alt="Legal and compliance"
          className="w-full h-full object-cover opacity-70"
        />
        {/* Left fade so it blends into the text area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 md:py-40">
        <div className="max-w-2xl">
          <div className={`transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[1.5px] bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow">
                Cross-Border Compliance
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
              Cross<Hyphen />Border Compliance for{' '}
              <span className="relative inline-block">
                Multi<Hyphen />Jurisdiction
                <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-brand-yellow/50" />
              </span>{' '}
              Operations
            </h1>
          </div>

          <div className={`mt-8 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-1' : 'opacity-0'}`}>
            <p className="text-lg md:text-xl text-brand-grey leading-relaxed">
              Organisations operating across multiple geographies face fragmented AML and Data Privacy requirements.
            </p>
          </div>

          <div className={`mt-6 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>
            <p className="text-base text-brand-grey-light leading-relaxed">
              We help SaaS, RegTech, HealthTech, and global businesses to align with AML and Data Privacy and protection requirements across jurisdictions through structured, operational compliance frameworks.
            </p>
          </div>

          <div className={`mt-5 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-3' : 'opacity-0'}`}>
            <p className="text-base text-brand-grey-light leading-relaxed">
              Operate across multiple regulatory landscapes with confidence using systems designed for jurisdiction-specific compliance, not one-size-fits-all approach.
            </p>
          </div>

          {/* Jurisdiction tags */}
          <div className={`mt-10 flex flex-wrap gap-3 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-4' : 'opacity-0'}`}>
            {['EU', 'UK', 'UAE', 'APAC'].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-[11px] font-semibold tracking-[0.15em] uppercase border border-brand-border text-brand-grey rounded-sm hover:border-brand-yellow hover:text-brand-yellow hover:bg-brand-yellow-light transition-all duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
