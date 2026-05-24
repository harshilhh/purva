import { useInView } from '../hooks/useInView';

const scenarios = [
  {
    marker: 'I',
    situation: 'Cross-border AML supervision change',
    text: 'A mid-size law firm whose clients face AML supervision changes across multiple jurisdictions — and needs structured advice on the cross-border implications.',
  },
  {
    marker: 'II',
    situation: 'Privacy vs. reporting tension',
    text: 'A corporate services provider managing the tension between privacy obligations and regulatory reporting requirements across EU, UK, and APAC.',
  },
  {
    marker: 'III',
    situation: 'Overlapping frameworks, no specialist capacity',
    text: 'A regulated intermediary operating under overlapping frameworks without sufficient in-house specialist capacity to address the structural conflicts.',
  },
  {
    marker: 'IV',
    situation: 'Multi-regulator data compliance',
    text: 'A technology platform processing regulated data across borders, needing compliance architecture that holds under scrutiny from multiple regulators.',
  },
];

export default function HomeAudience() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="audience" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
              Built for the Sophisticated Middle
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
            Who We Work With
          </h2>
          <p className="mt-5 text-[17px] leading-[1.8] text-brand-grey max-w-lg">
            We don&apos;t describe our clients by industry label. We describe
            them by situation.
          </p>
        </div>

        {/* Scenario grid */}
        <div className="grid md:grid-cols-2 gap-[1px] bg-brand-border/50">
          {scenarios.map((scenario, i) => (
            <div
              key={scenario.marker}
              className="audience-card group relative bg-brand-surface hover:bg-brand-yellow-light p-8 md:p-10 transition-colors duration-500"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 120 + 200}ms`,
                transitionDuration: '700ms',
                transitionProperty: 'opacity, transform',
              }}
            >
              {/* Top row: marker + situation tag */}
              <div className="flex items-baseline justify-between mb-6">
                <span className="font-display text-[48px] md:text-[56px] font-bold leading-none text-brand-yellow/20 group-hover:text-brand-yellow/40 transition-colors duration-600 select-none">
                  {scenario.marker}
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow/80 border border-brand-yellow/30 px-3 py-1 rounded-full">
                  {scenario.situation}
                </span>
              </div>

              {/* Separator */}
              <div className="h-[1px] w-6 bg-brand-yellow group-hover:w-12 transition-all duration-500 mb-5" />

              {/* Description */}
              <p className="text-[16px] md:text-[17px] leading-[1.85] text-brand-grey group-hover:text-brand-dark/80 transition-colors duration-500">
                {scenario.text}
              </p>

              {/* Hover accent — bottom-left corner mark */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-yellow group-hover:w-full transition-all duration-600 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
