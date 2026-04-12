import { useInView } from '../hooks/useInView';
import BulletList from './BulletList';

export default function WhatWeDo() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="services" className="py-8 md:py-12 bg-white">
      <div className={`mx-auto px-4 sm:px-6 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {/* Our Focus — Left Card */}
          <div className="border border-gray-200 p-6 sm:p-8 md:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1.5px] bg-brand-yellow" />
              <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
                Our Focus
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-6">
              What We Do: <span className="text-brand-grey-light font-normal">Compliance, Borderless by Design</span>
            </h2>

            <p className="text-[15px] leading-relaxed text-brand-grey">
              We design and implement cross-border AML and privacy compliance frameworks that enable businesses to operate across multiple geographies in an organised and compliant manner.
            </p>

            <p className="mt-6 text-[13px] font-semibold tracking-wide uppercase text-brand-dark">
              Our work focuses on:
            </p>

            <BulletList
              items={[
                'Aligning AML and data protection obligations',
                'Structuring data and processing activities by legal requirement',
                'Applying jurisdiction-specific compliance controls',
                'Supporting regulatory readiness across multiple regions',
                'Maintaining alignment across evolving regulatory requirements',
              ]}
            />
          </div>

          {/* Our Model — Right Card */}
          <div className="border border-gray-200 p-6 sm:p-8 md:p-10 bg-white hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1.5px] bg-brand-yellow" />
              <span className="font-display text-xl md:text-2xl font-semibold text-brand-yellow tracking-tight">
                Our Model
              </span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-6">
              Why This Approach Works: <span className="text-brand-grey-light font-normal">Alignment, Not Standardisation</span>
            </h2>

            <div className="space-y-5">
              <p className="text-[15px] leading-relaxed text-brand-grey">
                Most compliance models assume regulatory requirements can be standardised across jurisdictions.
              </p>

              <p className="text-[15px] leading-relaxed text-brand-grey">
                However, in terms of practical implementation, regulatory systems are developed independently and often impose repugnant or inconsistent obligations
              </p>

              <div className="relative pl-6 py-4 border-l-[3px] border-brand-yellow bg-brand-yellow-light/30 rounded-r-sm">
                <p className="text-[15px] leading-relaxed text-brand-dark font-semibold">
                  We apply the Alignment-First Compliance Model: a structured approach to managing overlapping regulatory obligations across jurisdictions without forcing artificial standardisation.
                </p>
              </div>

              <p className="text-[15px] leading-relaxed text-brand-grey">
                This enables organisations to comply with each jurisdiction's requirements, individually and simultaneously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
