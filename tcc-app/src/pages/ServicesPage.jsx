import { useInView } from '../hooks/useInView';
import WhatWeDo from '../components/WhatWeDo';
import OperationalFrameworks from '../components/OperationalFrameworks';
import ProcessSteps from '../components/ProcessSteps';
import CTABanner from '../components/CTABanner';
import Hyphen from '../components/Hyphen';

function ServicesHero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative bg-brand-yellow-light pt-28 pb-16 md:pt-36 md:pb-20"
    >
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-[1.5px] bg-brand-yellow" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow">
            Services
          </span>
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
          Cross<Hyphen />Border Compliance,{' '}
          <span className="relative inline-block">
            Delivered
            <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-brand-yellow/60" />
          </span>
        </h1>
        <p className="mt-6 text-lg text-brand-grey max-w-xl leading-relaxed">
          We design and implement operational compliance frameworks that align AML and data protection requirements across jurisdictions.
        </p>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <WhatWeDo />
      <OperationalFrameworks />
      <ProcessSteps />

      <CTABanner
        heading="Build Compliance That Works Across Jurisdictions"
        subheading="Design and implement cross-border AML and Data Protection frameworks structured for real operations."
        buttonText="Contact Us"
        index={2}
        variant="dark"
      />
    </>
  );
}
