import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import SectionHeader from '../components/SectionHeader';
import BulletList from '../components/BulletList';
import CTABanner from '../components/CTABanner';

/* --- About Hero --- */
function AboutHero() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative min-h-[70vh] flex items-center bg-brand-yellow-light overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0 md:left-[65%] md:right-0">
        <img
          src="/about-hero.jpeg"
          alt="Professional consultant"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow-light via-brand-yellow-light/90 to-brand-yellow-light/40 md:from-brand-yellow-light md:via-brand-yellow-light/80 md:to-transparent" />
      </div>

      <div className={`relative max-w-6xl mx-auto px-6 lg:px-8 w-full py-32 md:py-40 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[1.5px] bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow">
              About
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[56px] font-semibold text-brand-dark leading-[1.1] tracking-tight">
            Cross-Border Compliance,{' '}
            <span className="relative inline-block">
              Structured
              <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-brand-yellow/60" />
            </span>
          </h1>

          <div className="mt-8 space-y-5">
            <p className="text-lg md:text-xl text-brand-grey leading-relaxed">
              The Compliance Chamber designs cross-border compliance frameworks that align AML and Data Privacy requirements across jurisdictions.
            </p>
            <p className="text-base text-brand-grey-light leading-relaxed">
              Cross-border compliance involves operating across legal systems that impose overlapping or differentiated obligations on the same activities, requiring structured, jurisdiction-specific approaches rather than uniform implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Our Approach --- */
function OurApproach() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-10 md:py-14 bg-brand-surface">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader
          title={<>Our Approach: <span className="text-brand-grey-light font-normal">Alignment, Not Standardisation</span></>}
          highlight="Approach"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-5">
            <p className="text-[15px] leading-relaxed text-brand-grey">
              Regulatory frameworks are developed independently and reflect different legal priorities and policy objectives. This creates variation across:
            </p>

            <BulletList
              items={[
                'Data retention',
                'Consent and legal basis',
                'Disclosure and reporting',
                'Cross-border data handling',
              ]}
            />

            <div className="relative pl-6 py-4 border-l-[3px] border-brand-yellow bg-brand-yellow-light/30 rounded-r-sm">
              <p className="text-[15px] leading-relaxed text-brand-dark font-medium">
                Effective compliance is not achieved through consolidation. It requires precise alignment of jurisdiction-specific obligations at an operational level.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="Strategy planning"
              className="w-full h-[400px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- What We Do --- */
function AboutWhatWeDo() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-10 md:py-14 bg-white">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader
          title={<>What We Do: <span className="text-brand-grey-light font-normal">Make Cross-Border Compliance Operational</span></>}
          highlight="Services"
        />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="Team collaboration"
              className="w-full h-[380px] object-cover rounded-sm"
            />
          </div>
          <div className="order-1 md:order-2">
            <p className="text-[15px] leading-relaxed text-brand-grey">
              We design and implement frameworks that make cross-border compliance operational across jurisdictions, systems, and regulatory environments:
            </p>

            <BulletList
              items={[
                'Identify areas of regulatory overlap and divergence',
                'Structure data and processing activities by legal obligation',
                'Apply jurisdiction-specific compliance logic',
                'Document compliance across multiple regulatory regimes',
                'Maintain alignment as regulatory requirements evolve',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Specialisation Areas --- */
function SpecialisationAreas() {
  const [ref, isInView] = useInView();

  const areas = [
    'Alignment of AML and data protection requirements',
    'Cross-border data governance frameworks',
    'Multi-jurisdiction regulatory compliance design',
    'Data retention and minimisation alignment',
    'Consent and legal basis implementation across jurisdictions',
  ];

  return (
    <section ref={ref} className="py-10 md:py-14 bg-brand-surface">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader title="Specialisation Areas" highlight="Expertise" />

        <p className="text-[15px] leading-relaxed text-brand-grey mb-8">
          Our work focuses on:
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <div
              key={i}
              className="group relative p-6 bg-white border border-brand-border rounded-sm hover:border-brand-yellow/50 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-brand-yellow scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <span className="text-[14px] leading-relaxed text-brand-grey">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Regulatory Coverage --- */
function RegulatoryCoverage() {
  const [ref, isInView] = useInView();

  const regions = [
    { code: 'EU/UK', name: 'European Union and United Kingdom' },
    { code: 'SG', name: 'Singapore' },
    { code: 'AU', name: 'Australia' },
    { code: 'IN', name: 'India' },
    { code: 'UAE', name: 'United Arab Emirates' },
    { code: 'HK', name: 'Hong Kong' },
  ];

  return (
    <section ref={ref} className="py-10 md:py-14 bg-white">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader title="Regulatory Coverage" highlight="Jurisdictions" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <p className="text-[15px] leading-relaxed text-brand-grey mb-8">
              We work across major regulatory environments including:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {regions.map((region, i) => (
                <div
                  key={i}
                  className="group text-center p-5 bg-brand-surface border border-brand-border rounded-sm hover:border-brand-yellow/50 hover:bg-brand-yellow-light/30 transition-all duration-300"
                >
                  <span className="block text-[13px] font-bold tracking-[0.1em] text-brand-yellow mb-2">
                    {region.code}
                  </span>
                  <span className="block text-[13px] leading-snug text-brand-grey">
                    {region.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800&q=80"
              alt="Global map"
              className="w-full h-[400px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Leadership --- */
function Leadership() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-16 md:py-20 bg-brand-surface">
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader title="Leadership" highlight="Team" />

        {/* Top: Photo + Bio */}
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div>
            <img
              src="/leadership.jpeg"
              alt="Purva Buch, CAMS"
              className="w-full h-[320px] object-cover rounded-sm"
            />
          </div>
          <div>
            <h3 className="font-display text-2xl md:text-[28px] font-semibold text-brand-dark tracking-tight">
              Purva Buch, CAMS
            </h3>
            <p className="mt-1 text-[14px] font-medium text-brand-yellow">
              Cross-Border Compliance Specialist
            </p>
            <p className="mt-1 text-[13px] text-brand-grey-light mb-5">
              7+ years across litigation, compliance, and cross-border regulatory frameworks
            </p>

            <div className="space-y-4">
              <p className="text-[15px] leading-relaxed text-brand-grey">
                Purva Buch focuses on aligning AML and data protection requirements across jurisdictions, particularly for data-intensive and regulated sectors including SaaS, HealthTech, and RegTech.
              </p>
              <p className="text-[15px] leading-relaxed text-brand-grey">
                Built on a foundation in litigation and compliance, her work focuses on designing operational frameworks that withstand regulatory scrutiny across jurisdictions.
              </p>
            </div>
          </div>
        </div>

        {/* Scope of Work + Experience Highlights side by side */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Scope of Work Card */}
          <div className="border border-brand-border p-8 sm:p-10 md:p-12 bg-white rounded-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-brand-yellow" />
              <span className="font-display text-lg italic text-brand-yellow tracking-tight">
                Our Scope
              </span>
            </div>
            <h4 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-6">
              Scope of Work: <span className="text-brand-grey-light font-normal">Cross-Border Challenges</span>
            </h4>

            <p className="text-[15px] leading-relaxed text-brand-grey mb-5">
              Cross-border compliance challenges typically involve:
            </p>

            <BulletList
              items={[
                'Aligning AML and data protection requirements across jurisdictions',
                'Managing conflicting data retention and minimisation obligations',
                'Structuring cross-border data processing in regulated environments',
                'Designing compliance frameworks for multi-jurisdiction operations',
                'Translating regulatory requirements into operational systems and controls',
              ]}
            />

            <div className="mt-6 relative pl-6 py-4 border-l-[3px] border-brand-yellow bg-brand-yellow-light/30 rounded-r-sm">
              <p className="text-[14px] leading-relaxed text-brand-dark font-medium">
                Her work operates at the intersection of AML, data protection, and cross-border regulatory compliance.
              </p>
            </div>
          </div>

          {/* Experience Highlights Card */}
          <div className="border border-brand-border p-8 sm:p-10 md:p-12 bg-white rounded-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-[1.5px] bg-brand-yellow" />
              <span className="font-display text-lg italic text-brand-yellow tracking-tight">
                Our Experience
              </span>
            </div>
            <h4 className="font-display text-2xl md:text-3xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-6">
              Experience Highlights: <span className="text-brand-grey-light font-normal">Track Record</span>
            </h4>

            <p className="text-[15px] leading-relaxed text-brand-grey mb-5">
              Her work is reflected in
            </p>

            <BulletList
              items={[
                'Designing AML compliance frameworks aligned to multi-jurisdiction regulatory requirements',
                'Structuring data protection and governance frameworks aligned to GDPR-style regimes',
                'Translating regulatory obligations into operational systems and controls',
                'Designing SaaS, HealthTech, and RegTech legal and compliance frameworks (including DPAs, ToS, and licensing structures)',
                'Applying regulatory frameworks across jurisdictions including the UK, EU, UAE, Singapore, Australia, Hong Kong, and India',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Process & Insight Cards --- */
function ProcessInsightCard({ label, title, subtitle, image, alt, children }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className="relative rounded-sm overflow-hidden cursor-pointer h-[380px] md:h-[420px]"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
      onClick={() => setActive((a) => !a)}
    >
      {/* Background image */}
      <img
        src={image}
        alt={alt}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${active ? 'scale-110' : ''}`}
      />
      <div className={`absolute inset-0 transition-all duration-500 ${active ? 'bg-brand-dark/85' : 'bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent'}`} />

      {/* Label + Title (always visible at bottom) */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ${active ? 'opacity-0 translate-y-4' : 'opacity-100'}`}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-[1.5px] bg-brand-yellow" />
          <span className="font-display text-base italic text-brand-yellow">{label}</span>
        </div>
        <h4 className="font-display text-xl md:text-2xl font-semibold text-white leading-[1.2] tracking-tight">
          {title} <span className="font-normal text-white/70">{subtitle}</span>
        </h4>
      </div>

      {/* Hover detail content */}
      <div className={`absolute inset-0 flex flex-col justify-center p-6 md:p-8 transition-all duration-500 ${active ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1.5px] bg-brand-yellow" />
          <span className="font-display text-base italic text-brand-yellow">{label}</span>
        </div>
        <h4 className="font-display text-lg md:text-xl font-semibold text-white leading-[1.2] tracking-tight mb-4">
          {title} <span className="font-normal text-white/70">{subtitle}</span>
        </h4>
        {children}
      </div>
    </div>
  );
}

function ProcessAndInsight() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-10 md:py-14 bg-white">
      <div className={`max-w-7xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-8">
          <ProcessInsightCard
            label="Process"
            title="How We Work:"
            subtitle="Regulatory Complexity to Operational Clarity"
            image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
            alt="Office technology"
          >
            <p className="text-[14px] leading-relaxed text-white/80 mb-3">We work with organisations to:</p>
            <ul className="space-y-2">
              {[
                'Identify where regulatory requirements overlap or diverge',
                'Assess how these differences shape operational processes',
                'Design frameworks aligned to jurisdiction-specific obligations',
                'Implement compliance structures that function effectively in practice',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 flex-shrink-0" />
                  <span className="text-[13px] leading-relaxed text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </ProcessInsightCard>

          <ProcessInsightCard
            label="Insight"
            title="Regulatory Insight:"
            subtitle="Precise Implementation"
            image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1400&q=80"
            alt="Cityscape"
          >
            <div className="space-y-4">
              <p className="text-[14px] leading-relaxed text-white/85">
                regulatorygap.com provides analysis of structural differences between regulatory frameworks.
              </p>
              <p className="text-[14px] leading-relaxed text-white/85">
                The Compliance Chamber translates these differences into operational compliance frameworks, enabling organisations to move from regulatory interpretation to practical implementation.
              </p>
            </div>
          </ProcessInsightCard>
        </div>
      </div>
    </section>
  );
}

/* --- Core Principle --- */
function CorePrinciple() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="py-10 md:py-14 bg-white">
      <div className={`max-w-6xl mx-auto px-6 lg:px-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <SectionHeader title="Core Principle" highlight="Principle" />

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-5">
            <p className="text-[15px] leading-relaxed text-brand-grey">
              Cross-border compliance challenges arise from structural differences between regulatory systems.
            </p>

            <div className="relative pl-6 py-4 border-l-[3px] border-brand-yellow bg-brand-yellow-light/30 rounded-r-sm">
              <p className="text-[15px] leading-relaxed text-brand-dark font-medium">
                Effective compliance requires structured alignment of jurisdiction-specific requirements at an operational level.
              </p>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
              alt="Handshake"
              className="w-full h-[340px] object-cover rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- About Page --- */
export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurApproach />
      <AboutWhatWeDo />
      <SpecialisationAreas />
      <RegulatoryCoverage />
      <Leadership />
      <ProcessAndInsight />
      <CorePrinciple />

      {/* Engage CTA */}
      <CTABanner
        heading="Engage"
        subheading="We design and implement cross-border compliance frameworks that align AML and data protection across jurisdictions structured for real operations, not theoretical models."
        buttonText="Contact Us"
        index={2}
        variant="dark"
      />
    </>
  );
}
