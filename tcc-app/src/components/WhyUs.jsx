import { useEffect, useRef, useState } from 'react';
import { useInView } from '../hooks/useInView';

const reasons = [
  {
    num: '01',
    title: 'Convergent Counsel',
    text: 'Most advisory practices specialise in one framework — AML, data protection, or GRC — and refer out when the other framework appears. This practice holds the AML and privacy expertise simultaneously, which is the only way to resolve conflicts between them rather than simply name them.',
  },
  {
    num: '02',
    title: 'Certified Judgment',
    text: 'The practice was founded by a Certified Anti-Money Laundering Specialist with legal training. That combination is not common in the advisory market. It matters when the engagement requires both regulatory precision and legal interpretive rigour — which most cross-framework conflicts do.',
  },
  {
    num: '03',
    title: 'Institutional Utility',
    text: 'Every deliverable is built for operational use: protocols that compliance teams can follow, gap analyses that legal teams can act on, governance frameworks that boards can interrogate. Not documentation that demonstrates engagement and then sits in a folder.',
  },
  {
    num: '04',
    title: 'Regulatory Continuum',
    text: 'The regulatory environment that matters is the one in force now: AMLA, MLR 2025 amendments, MiCA, DORA, the EU AI Act. The knowledge platform behind this practice maps 141+ regulatory conflict topics across twelve frameworks and six jurisdictions. That is the evidence base the advisory draws from.',
  },
];

export default function WhyUs() {
  const [headerRef, isInView] = useInView();
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionH = section.offsetHeight;
      const viewH = window.innerHeight;
      const scrollable = sectionH - viewH;

      if (scrollable <= 0) return;

      const scrolled = -rect.top;
      const p = Math.min(Math.max(scrolled / scrollable, 0), 1);
      setScrollProgress(p);

      const count = reasons.length;
      const idx = Math.min(Math.floor(p * count), count - 1);
      setActiveIndex(idx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="why-us"
      className="relative"
      style={{ height: `${reasons.length * 70}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen bg-brand-yellow-light" style={{ overflowX: 'clip' }}>
        {/* Subtle diagonal lines texture */}
        <div className="absolute inset-0 opacity-[0.12]" style={{
          backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 40px, #D4891A 40px, #D4891A 41px)',
        }} />

        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-[1fr_1.6fr] gap-12 md:gap-20 items-center">

              {/* Left — Header + progress dots */}
              <div ref={headerRef}>
                <div
                  className={`transition-all duration-700 ${
                    isInView ? 'animate-fade-up' : 'opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-[1px] bg-brand-yellow" />
                    <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
                      Why The Compliance Chamber
                    </span>
                  </div>
                  <h2 className="font-display text-[24px] sm:text-[30px] md:text-[36px] lg:text-[44px] font-semibold text-brand-dark leading-[1.15] tracking-tight">
                    The difference begins at the intersection.
                  </h2>
                  <p className="mt-5 text-[16px] leading-[1.8] text-brand-grey max-w-md">
                    You might wonder why organisations bring these issues here
                    instead of to a traditional compliance adviser.
                  </p>
                </div>

                {/* Step indicators */}
                <div className="mt-10 flex flex-col gap-3">
                  {reasons.map((reason, i) => (
                    <div key={reason.num} className="flex items-center gap-4">
                      {/* Round dot */}
                      <div className={`relative w-[36px] h-[36px] rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-500 ${
                        i <= activeIndex
                          ? 'border-brand-yellow bg-brand-yellow'
                          : 'border-brand-border bg-white'
                      }`}>
                        <span className={`text-[11px] font-semibold select-none transition-colors duration-500 ${
                          i <= activeIndex ? 'text-white' : 'text-brand-grey-light'
                        }`}>
                          {reason.num}
                        </span>

                        {/* Pulse on current */}
                        {i === activeIndex && (
                          <div className="absolute inset-0 rounded-full border-2 border-brand-yellow animate-why-ring" />
                        )}
                      </div>

                      {/* Title preview */}
                      <span className={`text-[14px] font-medium transition-all duration-500 ${
                        i === activeIndex
                          ? 'text-brand-dark'
                          : i < activeIndex
                            ? 'text-brand-grey'
                            : 'text-brand-dark/25'
                      }`}>
                        {reason.title}
                      </span>
                    </div>
                  ))}

                  {/* Progress bar below dots */}
                  <div className="mt-4 h-[2px] bg-brand-border/40 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-brand-yellow rounded-full transition-none"
                      style={{ width: `${scrollProgress * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Right — Stacked cards that overlap */}
              <div className="relative h-[340px] md:h-[380px]">
                {reasons.map((reason, i) => {
                  const isCurrent = i === activeIndex;
                  const isPast = i < activeIndex;

                  return (
                    <div
                      key={reason.num}
                      className="absolute inset-0 bg-white rounded-[4px] border border-brand-border/50 p-8 md:p-10 flex flex-col justify-center transition-all duration-700"
                      style={{
                        opacity: isCurrent ? 1 : isPast ? 0 : 0,
                        transform: isCurrent
                          ? 'translateY(0) scale(1)'
                          : isPast
                            ? 'translateY(-40px) scale(0.95)'
                            : 'translateY(60px) scale(0.97)',
                        zIndex: isCurrent ? 10 : isPast ? 5 - i : 0,
                        boxShadow: isCurrent
                          ? '0 8px 40px rgba(0,0,0,0.06)'
                          : 'none',
                        transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.32, 1)',
                      }}
                    >
                      {/* Number watermark */}
                      <span className="absolute top-6 right-8 font-display text-[72px] md:text-[96px] font-bold text-brand-yellow/[0.07] leading-none select-none">
                        {reason.num}
                      </span>

                      <div className="relative">
                        <h3 className="font-display text-[22px] md:text-[28px] font-semibold text-brand-dark tracking-tight leading-[1.2] mb-3">
                          {reason.title}
                        </h3>

                        <div className="h-[2px] w-10 bg-brand-yellow mb-5" />

                        <p className="text-[15px] md:text-[16px] leading-[1.8] text-brand-grey max-w-lg">
                          {reason.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
