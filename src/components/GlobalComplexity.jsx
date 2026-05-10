import { useInView } from '../hooks/useInView';
import BulletList from './BulletList';

export default function GlobalComplexity() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="how-we-help" className="relative py-16 md:py-20 bg-white overflow-hidden">
      {/* Background image - right side, bleeds behind content */}
      <div className="absolute top-0 right-0 bottom-0 w-[40%] hidden md:block">
        <img
          src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80"
          alt="Global operations"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent" />
      </div>

      <div className={`relative max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        {/* Global Reach + tags on same row */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-3">
            <div className="w-6 h-[1.5px] bg-brand-yellow" />
            <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
              Global Reach
            </span>
          </div>
          <div className="flex items-center gap-3">
            {['EU', 'UK', 'UAE', 'APAC'].map((tag) => (
              <span key={tag} className="px-3 py-1.5 text-[11px] font-bold tracking-[0.1em] bg-brand-yellow-light text-brand-yellow-dark rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] font-semibold text-brand-dark leading-[1.1] tracking-tight mb-3">
          Built for Global Regulatory Complexity
        </h2>

        <div className="w-10 h-[2px] bg-brand-yellow mb-8" />

        {/* Two-column content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-[14px] text-brand-grey-light italic mb-6">
              Multiple regulators. Overlapping obligations. Zero margin of error.
            </p>
            <p className="text-[14px] leading-relaxed text-brand-grey">
              We support Organisations operating across EU, UK, APAC, UAE, and other regulatory regimes, helping them navigate overlapping compliance obligations with systems that are controlled, defensible, and scalable.
            </p>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-wide uppercase text-brand-dark mb-3">
              Our work includes aligning:
            </p>
            <BulletList
              items={[
                'Anti-money laundering (AML) requirements across jurisdictions',
                'Data Protection and Privacy regulations',
                'Cross-border Data Handling obligations',
                'Multi-jurisdiction regulatory expectations',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
