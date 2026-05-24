import { useInView } from '../hooks/useInView';

const articles = [
  {
    num: '001',
    topic: 'AML × Privacy',
    title:
      'SAR vs DSAR: The Structural Conflict Between AML Reporting and Data Access Rights',
    excerpt:
      'When the obligation to report meets the right to access, compliance teams face a conflict that no single framework resolves.',
    date: 'April 2026',
  },
  {
    num: '002',
    topic: 'Digital Resilience × Privacy',
    title:
      'DORA, GDPR, and the Problem of Overlapping Incident Timelines',
    excerpt:
      'Two regulatory clocks running simultaneously on the same incident. One framework demands speed. The other demands accuracy.',
    date: 'March 2026',
  },
  {
    num: '003',
    topic: 'AI × Financial Regulation',
    title:
      'Automated Risk Scoring Under GDPR Article 22: Where AML Meets Algorithmic Accountability',
    excerpt:
      'AML requires automated risk assessment. GDPR restricts solely automated decision-making. The operational question is how to satisfy both.',
    date: 'February 2026',
  },
];

export default function Insights() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="insights" className="py-16 md:py-20 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header row */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
                Notes on the Tensions
              </span>
            </div>
            <h2 className="font-display text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
              Featured Insights
            </h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-brand-grey max-w-lg">
              Analysis of the structural tensions between regulatory frameworks
              &mdash; published on{' '}
              <a
                href="https://regulatorygap.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-dark font-medium underline decoration-brand-yellow/40 underline-offset-3 hover:decoration-brand-yellow transition-colors"
              >
                regulatorygap.com
              </a>
            </p>
          </div>

          {/* View all link */}
          <a
            href="https://regulatorygap.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light hover:text-brand-yellow transition-colors duration-300 shrink-0"
          >
            View all insights
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Article cards — editorial research style */}
        <div className="grid md:grid-cols-3 gap-[1px] bg-brand-border/40">
          {articles.map((article, i) => (
            <a
              key={i}
              href="https://regulatorygap.com"
              target="_blank"
              rel="noopener noreferrer"
              className="insight-card group block bg-white p-8 md:p-9 relative"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transitionDelay: `${i * 130 + 200}ms`,
                transitionDuration: '700ms',
                transitionProperty: 'opacity, transform',
              }}
            >
              {/* Top meta row */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow border border-brand-yellow/30 px-3 py-1 rounded-full">
                  {article.topic}
                </span>
                <span className="text-[11px] text-brand-grey-light/60 tracking-wide">
                  {article.date}
                </span>
              </div>

              {/* Issue number watermark */}
              <span className="absolute top-6 right-8 font-display text-[64px] font-bold text-brand-dark/[0.03] leading-none select-none group-hover:text-brand-yellow/[0.08] transition-colors duration-600">
                {article.num}
              </span>

              {/* Title */}
              <h3 className="font-display text-[19px] md:text-[21px] font-semibold text-brand-dark leading-[1.35] tracking-tight group-hover:text-brand-yellow-dark transition-colors duration-300 mb-5">
                {article.title}
              </h3>

              {/* Separator that expands */}
              <div className="h-[1.5px] w-8 bg-brand-yellow group-hover:w-16 transition-all duration-500 mb-5" />

              {/* Excerpt */}
              <p className="text-[15px] leading-[1.8] text-brand-grey mb-8">
                {article.excerpt}
              </p>

              {/* Read link */}
              <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.15em] uppercase text-brand-grey-light group-hover:text-brand-yellow transition-colors duration-300">
                Read analysis
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>

              {/* Bottom accent on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-yellow group-hover:w-full transition-all duration-600 ease-out" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
