import { useInView } from '../hooks/useInView';

export default function Specialist() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-24 md:py-32 bg-white">
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo side */}
          <div>
            <img
              src="/leadership.jpg"
              alt="Purva Buch, CAMS"
              className="w-full h-[480px] object-cover rounded-sm"
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Content side */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow">
                Leadership
              </span>
            </div>

            <p className="text-[13px] font-semibold tracking-wide uppercase text-brand-dark mb-4">
              Built by a Cross-Border Compliance Specialist
            </p>

            <h3 className="font-display text-2xl md:text-[32px] font-semibold text-brand-dark tracking-tight">
              Purva Buch, CAMS
            </h3>

            <p className="mt-4 text-[15px] leading-relaxed text-brand-grey-light max-w-md">
              Focused on aligning AML and Data Protection across jurisdictions through operational, system-level frameworks.
            </p>

            <a
              href="mailto:purva@compliancenomics.com"
              className="mt-6 inline-flex items-center gap-2 text-[14px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
            >
              <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              purva@compliancenomics.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
