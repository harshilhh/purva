import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import Hyphen from '../components/Hyphen';

/* ─────────────────────────────────────────────
   SECTION 1 — Opening Problem Statement
   bg-brand-yellow-light
   Manifesto opener: the regulatory gap framed
   with conviction before any founder context.
───────────────────────────────────────────── */
function OpeningProblemStatement() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-center bg-brand-yellow-light overflow-hidden"
    >
      {/* Editorial grid texture — dark lines on warm cream */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,26,26,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,26,0.035) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      {/* Diagonal stripe accent — brand yellow, very faint */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 40px,
            rgba(212,137,26,0.06) 40px,
            rgba(212,137,26,0.06) 41px
          )`,
        }}
      />

      {/* Yellow vertical spine */}
      <div className="absolute top-0 left-0 w-[3px] h-28 bg-brand-yellow" />

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-border" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-40 pb-20">

        {/* Eyebrow */}
        <div
          className={`flex items-center gap-4 mb-14 transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="w-12 h-px bg-brand-yellow" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
            Why We Exist
          </span>
        </div>

        {/* Manifesto — line 1 */}
        <div className="max-w-5xl">
          <h1
            className={`font-display text-[38px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-semibold text-brand-dark leading-[1.06] tracking-[-0.02em] transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-1' : 'opacity-0'
            }`}
          >
            Regulatory frameworks<br className="hidden sm:block" /> are built independently.
          </h1>

          {/* Manifesto — highlighted anchor line */}
          <h2
            className={`mt-2 font-display text-[38px] sm:text-[52px] md:text-[64px] lg:text-[76px] font-semibold leading-[1.06] tracking-[-0.02em] transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-2' : 'opacity-0'
            }`}
          >
            <span className="text-brand-yellow-dark">They do not align.</span>
          </h2>

          {/* Divider */}
          <div
            className={`my-12 w-14 h-[2px] bg-brand-yellow transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-3' : 'opacity-0'
            }`}
          />

          {/* Anchor paragraph */}
          <p
            className={`text-[18px] md:text-[21px] leading-[1.75] text-brand-grey max-w-2xl transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-3' : 'opacity-0'
            }`}
          >
            AML obligations cross borders. Privacy law imposes its own requirements.
            AI governance adds another layer.{' '}
            <span className="text-brand-dark font-medium">
              That tension — the gap between regulatory systems — is where firms lose
              time, clarity, and defensibility.
            </span>
          </p>

          {/* Thesis line */}
          <p
            className={`mt-8 text-[13px] md:text-[14px] leading-[1.8] text-brand-grey-light max-w-xl tracking-[0.06em] uppercase font-semibold transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-4' : 'opacity-0'
            }`}
          >
            The Compliance Chamber exists to close it.
          </p>
        </div>

        {/* Bottom row */}
        <div className={`mt-16 flex items-center gap-5 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-5' : 'opacity-0'}`}>
          <div className="w-8 h-[2px] bg-brand-yellow" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-grey-light/60">
            The Compliance Chamber
          </span>
          <span className="w-4 h-px bg-brand-border" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-grey-light/60">
            Cross<Hyphen />Border Advisory
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 2 — The Gap Map / Conflict Matrix
   bg-white
   Signature visual: four structural tension
   points shown as an editorial conflict index.
───────────────────────────────────────────── */
function GapMatrix() {
  const [ref, isInView] = useInView();
  const [activeIdx, setActiveIdx] = useState(null);

  const conflicts = [
    {
      a: 'AML Obligations',
      b: 'Privacy Timing',
      tag: 'Data',
      description:
        'AML frameworks require immediate transaction data retention and disclosure. Privacy law demands minimisation and the right to erasure. The same dataset triggers both — on contradictory timelines and with conflicting legal bases.',
    },
    {
      a: 'AI Explainability',
      b: 'Automation',
      tag: 'Systems',
      description:
        'Regulators require AI decisions to be explainable and auditable. Automation scales precisely because it removes manual review. Engineering both simultaneously is a structural challenge, not a configuration choice.',
    },
    {
      a: 'Escalation Workflows',
      b: 'Reporting Duties',
      tag: 'Process',
      description:
        'Internal escalation timelines differ from external reporting deadlines. What must be reported, to whom, and when — diverges jurisdiction by jurisdiction for the same incident. Firms operating across borders inherit all of it.',
    },
    {
      a: 'Governance Oversight',
      b: 'Operational Execution',
      tag: 'Structure',
      description:
        'Governance frameworks set policy at board level. Operations must implement it in real time. The gap between what is approved in principle and what systems actually do is where regulatory exposure quietly accumulates.',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className={`mb-16 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
              The Conflict Matrix
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[52px] font-semibold text-brand-dark leading-[1.08] tracking-tight mb-5">
            Four Points of<br className="hidden md:block" /> Regulatory Tension
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-brand-grey max-w-lg">
            These are not edge cases. They are the structural conflicts where cross-border operations consistently lose time, clarity, and defensibility.
          </p>
        </div>

        {/* Index table */}
        <div className={`transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>

          {/* Column labels — desktop only */}
          <div className="hidden md:grid grid-cols-[48px_1fr_52px_1fr_120px] gap-6 pb-4 border-b-2 border-brand-dark/15 mb-1">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light">#</span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light">Framework A</span>
            <span />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light">Framework B</span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light text-center">Domain</span>
          </div>

          <div className="divide-y divide-brand-border/60">
            {conflicts.map((c, i) => (
              <div
                key={i}
                className="group relative"
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
              >
                {/* Hover background wash */}
                <div className={`absolute inset-0 bg-brand-yellow-light/55 transition-opacity duration-300 ${activeIdx === i ? 'opacity-100' : 'opacity-0'}`} />

                {/* Left yellow spine */}
                <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-brand-yellow origin-top transition-all duration-300 ${activeIdx === i ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-50'}`} />

                <div className="relative py-7 md:py-9">

                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-[48px_1fr_52px_1fr_120px] gap-6 items-center">
                    <span className="font-display text-[13px] font-semibold tracking-[0.2em] text-brand-yellow pl-3">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[26px] lg:text-[34px] font-semibold text-brand-dark leading-tight tracking-tight">
                      {c.a}
                    </h3>
                    <div className="flex flex-col items-center gap-[5px]">
                      <div className="w-px h-5 bg-brand-yellow/50" />
                      <span className="font-display text-[18px] font-bold text-brand-yellow leading-none">×</span>
                      <div className="w-px h-5 bg-brand-yellow/50" />
                    </div>
                    <h3 className="font-display text-[26px] lg:text-[34px] font-normal text-brand-grey leading-tight tracking-tight">
                      {c.b}
                    </h3>
                    <div className="flex justify-center">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-yellow-dark border border-brand-yellow/50 px-3 py-1.5 whitespace-nowrap rounded-sm">
                        {c.tag}
                      </span>
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex items-start gap-4 pl-3">
                    <span className="shrink-0 font-display text-[13px] font-semibold tracking-[0.15em] text-brand-yellow pt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-[22px] font-semibold text-brand-dark leading-tight tracking-tight">{c.a}</h3>
                        <span className="font-display text-[18px] font-bold text-brand-yellow leading-none">×</span>
                        <h3 className="font-display text-[22px] font-normal text-brand-grey leading-tight tracking-tight">{c.b}</h3>
                      </div>
                      <span className="mt-3 inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-yellow-dark border border-brand-yellow/50 px-2.5 py-1 rounded-sm">
                        {c.tag}
                      </span>
                    </div>
                  </div>

                  {/* Tension description — slides open on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIdx === i ? 'max-h-32 opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-[14px] leading-[1.8] text-brand-grey pl-[64px] md:pl-[calc(48px+24px+4px)] pr-6 md:pr-24">
                      {c.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className={`mt-12 flex items-start gap-4 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-4' : 'opacity-0'}`}>
          <div className="shrink-0 w-8 h-[2px] bg-brand-yellow mt-3" />
          <p className="text-[13px] leading-relaxed text-brand-grey-light max-w-md">
            These conflicts are structural, not incidental. Resolving them requires deliberate design — not workarounds.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 3 — Founder Lens
   bg-brand-surface-warm
   Personal without biographical. Purva framed
   as a regulatory architect — first person,
   brief, precise. Portrait + quote only.
───────────────────────────────────────────── */
function FounderLens() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative pt-20 md:pt-28 pb-10 md:pb-14 bg-brand-surface-warm overflow-hidden"
    >
      {/* Subtle grid motif */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,26,26,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,26,1) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_380px] lg:grid-cols-[1fr_420px] gap-12 md:gap-16 lg:gap-24 items-center">

          {/* Left — quote block */}
          <div className={`transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-px bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
                Founder Lens
              </span>
            </div>

            {/* Oversized opening quote mark */}
            <div
              className="font-display text-brand-yellow leading-none select-none mb-2"
              style={{ fontSize: '96px', lineHeight: 0.8, opacity: 0.9 }}
            >
              "
            </div>

            <blockquote className="font-display text-[28px] md:text-[34px] lg:text-[40px] font-semibold text-brand-dark leading-[1.2] tracking-tight">
              I look at regulation the way an architect looks at structure —
              searching for{' '}
              <span className="relative inline-block">
                load-bearing points
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-yellow/60" />
              </span>{' '}
              and blind spots.
            </blockquote>

            <p className="mt-7 text-[16px] md:text-[17px] leading-[1.8] text-brand-grey max-w-lg">
              Most compliance frameworks feel sound until you put weight on the joints.
              That is where the structural gaps appear — and where we work.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="w-10 h-[2px] bg-brand-yellow" />
              <div>
                <p className="text-[15px] font-semibold text-brand-dark tracking-tight">
                  Purva Buch, CAMS
                </p>
                <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-brand-yellow-dark mt-0.5">
                  Founder · The Compliance Chamber
                </p>
              </div>
            </div>
          </div>

          {/* Right — portrait */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative">
              {/* Yellow corner frame — top right */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-[3px] border-r-[3px] border-brand-yellow z-10" />

              <img
                src="/leadership.jpg"
                alt="Purva Buch, CAMS — Founder, The Compliance Chamber"
                className="relative w-full h-[460px] md:h-[500px] object-cover object-top rounded-sm"
                loading="lazy"
                decoding="async"
              />

              {/* Yellow corner frame — bottom left */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-[3px] border-l-[3px] border-brand-yellow" />

              {/* Credential tag */}
              <div className="absolute bottom-6 right-0 bg-white border border-brand-border px-5 py-3 shadow-sm">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-yellow-dark">
                  7+ Years
                </p>
                <p className="text-[12px] font-semibold text-brand-dark mt-0.5">
                  Cross<Hyphen />Border Advisory
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 4 — The Triangulated Model
   bg-brand-surface
   Three pillars shown as editorial panels.
   Shows how Legal / Governance / Systems
   operate as an integrated model.
───────────────────────────────────────────── */
function TriangulatedModel() {
  const [ref, isInView] = useInView();

  const pillars = [
    {
      number: '01',
      name: 'Legal Defensibility',
      description:
        'Frameworks built to withstand regulatory scrutiny — not just internally coherent but externally defensible across every jurisdiction in which a firm operates.',
      accent: 'Defensible by design.',
    },
    {
      number: '02',
      name: 'Strategic Governance',
      description:
        'Compliance logic structured to function at both board and operational level — where policy is actionable and accountability is traceable across the organisation.',
      accent: 'Governance that holds under pressure.',
    },
    {
      number: '03',
      name: 'Systems Integration',
      description:
        'Regulatory obligations embedded into the operational systems and processes the firm actually runs — not documented separately from how work gets done.',
      accent: 'Compliance built into the workflow.',
    },
  ];

  return (
    <section ref={ref} className="pt-10 md:pt-14 pb-20 md:pb-28 bg-brand-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className={`mb-14 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
              The Practice Model
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[52px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
            The Triangulated Model
          </h2>
          <p className="mt-5 text-[15px] md:text-[16px] leading-[1.8] text-brand-grey max-w-xl">
            Three pillars that must operate together. Remove any one and the framework loses structural integrity.
          </p>
        </div>

        {/* Three-panel editorial grid */}
        <div className={`grid md:grid-cols-3 gap-px bg-brand-border/50 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className="relative bg-white p-8 md:p-10 group hover:bg-brand-yellow-light/40 transition-colors duration-300"
            >
              {/* Top accent bar — grows on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-brand-yellow/25 group-hover:bg-brand-yellow transition-colors duration-400" />

              {/* Background watermark number */}
              <div
                className="absolute top-5 right-6 font-display font-bold text-brand-dark select-none leading-none pointer-events-none"
                style={{ fontSize: '88px', opacity: 0.04 }}
              >
                {pillar.number}
              </div>

              {/* Index */}
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow mb-6 block">
                {pillar.number}
              </span>

              {/* Pillar name */}
              <h3 className="font-display text-[24px] md:text-[28px] lg:text-[32px] font-semibold text-brand-dark leading-tight tracking-tight mb-5">
                {pillar.name}
              </h3>

              {/* Yellow divider — expands on hover */}
              <div className="w-8 h-[2px] bg-brand-yellow mb-6 group-hover:w-16 transition-all duration-500" />

              {/* Description */}
              <p className="text-[14px] md:text-[15px] leading-[1.8] text-brand-grey mb-7">
                {pillar.description}
              </p>

              {/* Accent line — italic display */}
              <p className="text-[14px] font-display font-semibold italic text-brand-dark/50">
                "{pillar.accent}"
              </p>
            </div>
          ))}
        </div>

        {/* Convergence note */}
        <div className={`mt-10 flex items-start gap-5 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-4' : 'opacity-0'}`}>
          <div className="shrink-0 w-8 h-[2px] bg-brand-yellow mt-3" />
          <p className="text-[14px] md:text-[15px] leading-[1.8] text-brand-grey max-w-2xl">
            Legal defensibility without systems integration remains theoretical.
            Systems integration without strategic governance creates operational risk.
            The triangulated model keeps all three in alignment — simultaneously.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 6 — How We Work
   bg-white
   Operating model as a vertical timeline — not
   a service list. Five sequential steps.
   observe → map → test → operationalise → defend
───────────────────────────────────────────── */
function HowWeWork() {
  const [ref, isInView] = useInView();

  const steps = [
    {
      verb: 'Observe',
      description:
        'Map the regulatory landscape across all relevant jurisdictions — identifying overlapping obligations, timing conflicts, and legal basis differences before any framework is designed.',
    },
    {
      verb: 'Map',
      description:
        'Structure the conflict points with precision. Where do the same activities trigger different obligations? Where do timelines collide? This becomes the operational risk map that drives every design decision.',
    },
    {
      verb: 'Test',
      description:
        'Stress-test the proposed framework against each jurisdiction\'s requirements independently — then simultaneously. A framework that holds in theory must hold under real regulatory conditions.',
    },
    {
      verb: 'Operationalise',
      description:
        'Translate the framework into working processes, system controls, documentation standards, and governance structures that the organisation can actually run — day to day, across jurisdictions.',
    },
    {
      verb: 'Defend',
      description:
        'Ensure the implemented framework is externally defensible — documented, auditable, and structured to demonstrate compliance to regulators in each relevant jurisdiction.',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] gap-14 md:gap-20 items-start">

          {/* Left — sticky header + step index */}
          <div className={`md:sticky md:top-28 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-px bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
                Operating Model
              </span>
            </div>
            <h2 className="font-display text-[30px] md:text-[36px] lg:text-[44px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
              How We Work
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-brand-grey">
              A structured sequence — not a service list. Each step builds directly on the one before it.
            </p>

            {/* Step quick-reference — desktop */}
            <div className="hidden md:flex flex-col gap-3 mt-10 pl-1">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-brand-yellow w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[13px] font-semibold text-brand-grey-light">{s.verb}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — vertical timeline */}
          <div className={`relative transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>
            {/* Vertical connecting line */}
            <div className="absolute left-[15px] top-4 bottom-8 w-px bg-brand-border/70" />

            <div className="space-y-0">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="relative flex items-start gap-7 pb-10 last:pb-0 group"
                >
                  {/* Timeline dot */}
                  <div className="relative z-10 shrink-0 mt-1">
                    <div className="w-[31px] h-[31px] rounded-full border-2 border-brand-yellow bg-white group-hover:bg-brand-yellow transition-colors duration-300 flex items-center justify-center">
                      <div className="w-[9px] h-[9px] rounded-full bg-brand-yellow group-hover:bg-white transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Step content */}
                  <div className="flex-1 min-w-0 pt-1">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-yellow shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <h3 className="font-display text-[26px] md:text-[30px] lg:text-[34px] font-semibold text-brand-dark leading-tight tracking-tight">
                        {step.verb}
                      </h3>
                    </div>
                    <p className="text-[14.5px] leading-[1.8] text-brand-grey pr-4">
                      {step.description}
                    </p>
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

/* ─────────────────────────────────────────────
   SECTION 7 — For the Firms We Are Built For
   bg-brand-surface
   Accordion panel layout matching homepage
   "What We Do" design exactly.
───────────────────────────────────────────── */
const firmItems = [
  {
    num: '01',
    title: 'Financial Institutions',
    intro:
      'Banks, investment firms, and insurers operating across multiple regulatory environments with overlapping AML, data protection, and reporting obligations.',
    detail:
      'Jurisdiction-specific compliance architecture for firms where the same transaction triggers different obligations across multiple regulatory regimes simultaneously.',
    tag: 'Banks · Investment · Insurance',
  },
  {
    num: '02',
    title: 'FinTech & PayTech',
    intro:
      'Payment service providers and fintech companies expanding across borders — where AML requirements multiply rapidly and privacy law varies market by market.',
    detail:
      'Structured frameworks for cross-border payment operations where licensing, AML, and data residency obligations collide across the UK, EU, UAE, Singapore, and India.',
    tag: 'Payments · Digital Finance',
  },
  {
    num: '03',
    title: 'SaaS, HealthTech & RegTech',
    intro:
      'Data-intensive platforms that process personal data across jurisdictions and must align consent frameworks, retention obligations, and disclosure requirements simultaneously.',
    detail:
      'Operational compliance design for platforms where GDPR-style regimes overlap with sector-specific data obligations — built into product and system architecture from the start.',
    tag: 'Data · Health · Compliance Tech',
  },
  {
    num: '04',
    title: 'Professional Services',
    intro:
      'Law firms, consultancies, and advisory practices that require structured cross-border compliance frameworks for their own operations or for the clients they serve.',
    detail:
      'Senior-level compliance architecture for professional services firms navigating multi-jurisdictional regulatory obligations across client engagements and internal operations.',
    tag: 'Legal · Advisory · Consulting',
  },
];

function FirmPanel({ firm, index, isOpen, onToggle, isInView }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  return (
    <div
      className="border-t border-brand-border/50 last:border-b"
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(20px)',
        transitionDelay: `${index * 150 + 200}ms`,
        transitionDuration: '700ms',
        transitionProperty: 'opacity, transform',
      }}
    >
      {/* Clickable title row */}
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 md:gap-6 py-5 md:py-6 cursor-pointer group text-left"
        aria-expanded={isOpen}
      >
        <span className={`font-display text-[15px] md:text-[16px] font-semibold tracking-[0.05em] select-none transition-colors duration-300 ${isOpen ? 'text-brand-yellow' : 'text-brand-dark/20 group-hover:text-brand-yellow/60'}`}>
          {firm.num}
        </span>
        <h3 className={`flex-1 font-display text-[18px] md:text-[22px] font-semibold tracking-tight leading-[1.25] transition-colors duration-300 ${isOpen ? 'text-brand-dark' : 'text-brand-dark/70 group-hover:text-brand-dark'}`}>
          {firm.title}
        </h3>
        <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all duration-300 ${isOpen ? 'border-brand-yellow bg-brand-yellow/10 rotate-45' : 'border-brand-border group-hover:border-brand-yellow/50'}`}>
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m7-7H5" />
          </svg>
        </span>
      </button>

      {/* Expandable content */}
      <div
        className="overflow-hidden transition-all duration-500 ease-out"
        style={{ maxHeight: isOpen ? `${height}px` : '0px' }}
      >
        <div ref={contentRef} className="pl-10 md:pl-14 pb-6 md:pb-8">
          <div className="h-[2px] w-8 bg-brand-yellow mb-4" />
          <p className="text-[17px] leading-[1.8] text-brand-grey max-w-lg">
            {firm.intro}
          </p>
          <p className="mt-2 text-[15px] leading-[1.75] text-brand-grey-light max-w-lg">
            {firm.detail}
          </p>
          <span className="mt-4 inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-brand-yellow-dark border border-brand-yellow/40 px-2.5 py-1 rounded-sm">
            {firm.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

function ForTheFirms() {
  const [ref, isInView] = useInView();
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[1fr_1.8fr] gap-12 md:gap-16">

          {/* Left — sticky header */}
          <div className={`transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="md:sticky md:top-32">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-px bg-brand-yellow" />
                <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
                  Who We Serve
                </span>
              </div>
              <h2 className="font-display text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
                For the Firms<br /> We Are<br className="hidden md:block" /> Built For
              </h2>
              <p className="mt-5 text-[17px] leading-[1.8] text-brand-grey">
                The Compliance Chamber is not a generalist practice. These are the organisations whose cross-border complexity we are specifically built to handle.
              </p>
            </div>
          </div>

          {/* Right — accordion panels */}
          <div>
            {firmItems.map((firm, i) => (
              <FirmPanel
                key={firm.num}
                firm={firm}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 8 — Manifesto Endcap
   bg-brand-yellow-light
   Closing thesis of the entire page. The exact
   statement from the wireframe + CTA.
───────────────────────────────────────────── */
function ManifestoEndcap() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} className="relative py-24 md:py-32 bg-brand-yellow-light overflow-hidden">
      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            135deg,
            transparent,
            transparent 40px,
            rgba(212,137,26,0.07) 40px,
            rgba(212,137,26,0.07) 41px
          )`,
        }}
      />

      {/* Grid motif */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(26,26,26,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(26,26,26,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '72px 72px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <div className={`flex items-center gap-4 mb-12 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="w-12 h-px bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
              The Thesis
            </span>
          </div>

          {/* Statement line 1 */}
          <p
            className={`font-display text-[32px] md:text-[46px] lg:text-[58px] font-semibold text-brand-dark leading-[1.08] tracking-tight transition-all duration-700 ${isInView ? 'animate-fade-up-delay-1' : 'opacity-0'}`}
          >
            The regulatory gap is not a niche problem.
          </p>

          {/* Statement line 2 — slightly recessed */}
          <p
            className={`mt-2 font-display text-[32px] md:text-[46px] lg:text-[58px] font-semibold leading-[1.08] tracking-tight transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}
          >
            <span className="text-brand-dark/40">It is the place where modern firms lose </span>
            <span className="text-brand-dark">time</span>
            <span className="text-brand-dark/40">, </span>
            <span className="text-brand-dark">clarity</span>
            <span className="text-brand-dark/40">, and </span>
            <span className="text-brand-dark">defensibility</span>
            <span className="text-brand-dark/40">.</span>
          </p>

          {/* Divider */}
          <div className={`my-10 w-14 h-[2px] bg-brand-yellow transition-all duration-700 ${isInView ? 'animate-fade-up-delay-3' : 'opacity-0'}`} />

          {/* CTA row */}
          <div className={`flex flex-wrap items-center gap-6 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-3' : 'opacity-0'}`}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-[12px] font-semibold tracking-[0.15em] uppercase bg-brand-dark text-white rounded-sm hover:bg-brand-grey transition-all duration-200 hover:translate-y-[-1px] hover:shadow-lg"
            >
              Begin the conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-[14px] font-semibold text-brand-dark/50 italic font-display">
              We exist to close it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 9 — Testimonials
   bg-brand-surface
   Three client voice cards. Quote, attribution,
   firm context. Hover reveals yellow top line.
───────────────────────────────────────────── */
function Testimonials() {
  const [ref, isInView] = useInView();

  const testimonials = [
    {
      quote:
        'The Compliance Chamber redesigned our cross-border AML framework after our Singapore expansion. The approach was precise, jurisdiction-specific, and operational from day one.',
      name: 'Head of Compliance',
      firm: 'Payments Platform, UK / SG',
    },
    {
      quote:
        'What sets this practice apart is intersection expertise — not just AML, not just privacy, but where they structurally conflict. That is exactly the gap we needed closed.',
      name: 'Chief Risk Officer',
      firm: 'RegTech Firm, EU / UAE',
    },
    {
      quote:
        "Purva's regulatory architecture approach meant our governance framework was defensible at board level from the moment it was implemented — across three jurisdictions, simultaneously.",
      name: 'General Counsel',
      firm: 'FinTech Company, UK / IN',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
              From Our Clients
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
            What Firms Say
          </h2>
        </div>

        {/* Cards */}
        <div className={`grid md:grid-cols-3 gap-6 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 md:p-9 bg-white border border-brand-border/50 rounded-sm group hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] hover:border-brand-yellow/30 transition-all duration-300"
            >
              {/* Top yellow accent — expands on hover */}
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-yellow group-hover:w-full transition-all duration-500 rounded-tl-sm" />

              {/* Quote mark */}
              <div
                className="font-display text-brand-yellow leading-none select-none mb-5"
                style={{ fontSize: '52px', lineHeight: 0.9, opacity: 0.75 }}
              >
                "
              </div>

              {/* Quote body */}
              <p className="text-[14.5px] leading-[1.85] text-brand-grey mb-8">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3">
                <div className="w-5 h-[1.5px] bg-brand-yellow shrink-0" />
                <div>
                  <p className="text-[13px] font-semibold text-brand-dark">{t.name}</p>
                  <p className="text-[12px] text-brand-grey-light mt-0.5">{t.firm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 10 — FAQs
   bg-white
   About-specific accordion FAQ. Same pattern
   as homepage FAQ for visual consistency.
───────────────────────────────────────────── */
function AboutFAQs() {
  const [ref, isInView] = useInView();
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'What exactly is the regulatory gap?',
      a: 'The regulatory gap is the space created when two or more regulatory frameworks impose different or contradictory obligations on the same activity. It is not a flaw in any single regulation — it is the structural consequence of frameworks being developed independently by different jurisdictions with different legal priorities and policy objectives.',
    },
    {
      q: 'How is The Compliance Chamber different from a law firm?',
      a: 'Law firms interpret what the law requires. The Compliance Chamber designs frameworks that make compliance operational — translating legal obligations into processes, systems, and governance structures that a business can actually run. Our work sits at the intersection of legal logic, management logic, and systems logic. We do not provide legal advice; we design the operational architecture that puts legal requirements into practice.',
    },
    {
      q: 'What does the Triangulated Model mean in practice?',
      a: 'Every framework we design must satisfy three criteria simultaneously: it must be legally defensible in each relevant jurisdiction, it must be governable at both board and operational level, and it must be embedded into the systems and processes the organisation actually uses. A framework that satisfies only two of the three will eventually fail under regulatory or operational pressure.',
    },
    {
      q: 'Do you work on single-jurisdiction or multi-jurisdiction engagements?',
      a: 'Our practice is specifically designed for multi-jurisdiction complexity. Organisations operating within a single jurisdiction are generally well-served by domestic compliance providers. We engage where the structural conflict between regulatory systems is the core challenge — where the same activity is governed by two or more frameworks that impose different or contradictory obligations.',
    },
    {
      q: 'What is regulatorygap.com and how does it relate to The Compliance Chamber?',
      a: 'regulatorygap.com is a research and analysis platform that documents structural differences between regulatory frameworks across jurisdictions. The Compliance Chamber is the advisory practice that translates those differences into operational compliance frameworks. One identifies the gap; the other closes it.',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-14 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
              Questions
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
            Frequently Asked
          </h2>
        </div>

        {/* Accordion */}
        <div className={`transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-brand-border/60 last:border-b-0">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
                aria-expanded={openIdx === i}
              >
                <div className="flex items-start gap-4 pr-4">
                  <span className="shrink-0 text-[11px] font-semibold tracking-widest text-brand-yellow font-display pt-[3px]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] md:text-[16px] font-semibold text-brand-dark group-hover:text-brand-yellow-dark transition-colors duration-200 leading-snug">
                    {faq.q}
                  </span>
                </div>
                <span
                  className={`shrink-0 ml-4 w-7 h-7 flex items-center justify-center rounded-full border transition-all duration-300 ${
                    openIdx === i
                      ? 'bg-brand-yellow border-brand-yellow'
                      : 'border-brand-border group-hover:border-brand-yellow/60'
                  }`}
                >
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      openIdx === i ? 'rotate-180 text-white' : 'text-brand-grey-light'
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-400 ease-in-out ${
                  openIdx === i ? 'max-h-[500px] opacity-100 pb-7' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-[14.5px] leading-[1.85] text-brand-grey pl-10 pr-10">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   ABOUT PAGE — full section assembly
───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* S1 — Manifesto opener */}
      <OpeningProblemStatement />

      {/* S2 — Conflict matrix */}
      <GapMatrix />

      {/* S3 — Founder lens */}
      <FounderLens />

      {/* S4 — Triangulated model */}
      <TriangulatedModel />

      {/* S6 — How we work (vertical timeline) */}
      <HowWeWork />

      {/* S7 — Firms we are built for */}
      <ForTheFirms />

      {/* S8 — Manifesto endcap + CTA */}
      <ManifestoEndcap />

      {/* S9 — Testimonials */}
      <Testimonials />

      {/* S10 — FAQs */}
      <AboutFAQs />
    </>
  );
}
