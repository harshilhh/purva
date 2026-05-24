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
          </div>
        </div>
      </div>
    </section>
  );
}
