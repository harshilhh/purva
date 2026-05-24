import { useInView } from '../hooks/useInView';
import SectionHeader from './SectionHeader';

const steps = [
  {
    short: 'Regulatory Mapping',
    title: 'Conducting Regulatory Mapping to Identify Overlap and Areas of Divergence',
    description: 'We map what actually applies across geographies, to identify areas of regulatory overlap and divergence, including where multiple frameworks impose differing obligations on the same activities.',
  },
  {
    short: 'Data Segmentation',
    title: 'Segmenting Data by Regulatory Obligations',
    description: 'We classify data and processing activities based on applicable legal requirements, enabling differentiated handling aligned to jurisdiction-specific obligations.',
  },
  {
    short: 'Jurisdiction Controls',
    title: 'Designing Jurisdiction-Specific Controls',
    description: 'We develop tailored compliance frameworks that reflect the legal and regulatory expectations of each jurisdiction, while maintaining overall operational coherence across the organisation',
  },
  {
    short: 'Operational Controls',
    title: 'Implementing Operational Controls',
    description: 'We design and deploy operational controls that apply jurisdiction-specific compliance rules dynamically, ensuring consistent and auditable execution across systems and processes.',
  },
  {
    short: 'Ongoing Alignment',
    title: 'Maintain Ongoing Regulatory Alignment',
    description: 'We monitor regulatory developments and update compliance frameworks as requirements evolve, ensuring continued alignment across all applicable jurisdictions.',
  },
];

function StepCard({ step, num, isInView }) {
  return (
    <div
      className="text-center group relative cursor-pointer transition-all duration-700"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(30px)',
        transitionDelay: `${(num - 1) * 150}ms`,
      }}
    >
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-dark text-white flex items-center justify-center mx-auto text-[14px] sm:text-[15px] font-semibold group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-300">
        {num}
      </div>
      <h3 className="mt-3 sm:mt-4 font-display text-base sm:text-lg md:text-xl font-semibold text-brand-dark italic tracking-tight">
        {step.short}
      </h3>
      <p className="mt-1 text-[11px] sm:text-[12px] font-semibold uppercase tracking-wide text-brand-grey-light">
        {step.title}
      </p>
      <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-64 sm:w-72 bg-brand-dark text-white text-[13px] leading-relaxed p-4 rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
        {step.description}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-brand-dark rotate-45" />
      </div>
    </div>
  );
}

export default function ProcessSteps() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="approach" className="py-6 md:py-8 bg-brand-surface">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader
          title={<>How We Get Things Done</>}
          highlight="Our 5 Step Process"
        />

        {/* All 5 steps in one grid — single row on desktop, scrollable on mobile */}
        <div className="mt-8">
          <div
            className="h-[3px] bg-brand-dark rounded-full transition-all duration-1000 origin-left"
            style={{ transform: isInView ? 'scaleX(1)' : 'scaleX(0)' }}
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 mt-8">
            {steps.map((step, i) => (
              <StepCard key={i} step={step} num={i + 1} isInView={isInView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
