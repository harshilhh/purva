import { useInView } from '../hooks/useInView';

const challenges = [
  {
    title: 'Divergent legal bases',
    description: 'Same activity, different legal basis',
  },
  {
    title: 'Conflicting data retention requirements',
    description: 'AML says \u201Ckeep it\u201D, Privacy says \u201Cdelete it\u201D',
  },
  {
    title: 'Variations in consent and legal standards',
    description: 'Consent means different things in different places',
  },
  {
    title: 'Data localisation and transfer restrictions',
    description: "Data can\u2019t always cross the borders your business does",
  },
  {
    title: 'Competing regulatory priorities',
    description: "Monitoring vs Minimisation: pick one (you can\u2019t)",
  },
];

export default function FoundationAndChallenges() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="foundation" className="py-8 md:py-12 bg-white">
      <div className={`mx-auto px-4 sm:px-6 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Foundation — Left Card */}
          <div className="border border-gray-200 p-6 sm:p-8 md:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1.5px] bg-brand-yellow" />
              <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
                Foundation
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-6">
              Understanding Cross-Border Compliance: <span className="text-brand-grey-light font-normal">Beyond a Single Rulebook</span>
            </h2>

            <div className="space-y-5">
              <p className="text-[15px] leading-relaxed text-brand-grey">
                Cross-border compliance is the process of designing and implementing compliance protocols in such a manner that an organisation meets regulatory requirements across multiple jurisdictions, simultaneously.
              </p>

              <p className="text-[15px] leading-relaxed text-brand-grey">
                It involves aligning with different compliance obligations such as anti-money laundering (AML), data protection, data retention and reporting requirements that differ between countries.
              </p>

              <p className="text-[15px] leading-relaxed text-brand-grey">
                As regulatory systems are not harmonised, effective compliance requires operational frameworks that apply jurisdiction-specific rules, rather than relying on a single global standard.
              </p>

              <div className="relative pl-6 py-4 border-l-[3px] border-brand-yellow bg-brand-yellow-light/30 rounded-r-sm">
                <p className="text-[15px] leading-relaxed text-brand-dark font-medium">
                  Robust cross-border compliance requires operational frameworks that apply jurisdiction-specific rules in a structured and defensible way.
                </p>
              </div>
            </div>
          </div>

          {/* The Problem — Right Card */}
          <div className="border border-gray-200 p-8 md:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1.5px] bg-brand-yellow" />
              <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
                The Problem
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-6">
              Key Challenges: <span className="text-brand-grey-light font-normal">One System, Too Many Rulebooks</span>
            </h2>

            <p className="text-[15px] leading-relaxed text-brand-grey">
              Cross-border compliance doesn't fail randomly or because of its scale. It fails because regulatory systems aren't built to work together.
            </p>

            <p className="mt-6 text-[13px] font-semibold tracking-wide uppercase text-brand-dark">
              What that looks like:
            </p>

            <div className="mt-4 space-y-3">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                  <div>
                    <span className="text-[14px] font-semibold text-brand-dark">{item.title}</span>
                    <span className="text-[13px] text-brand-grey-light italic"> — {item.description}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
