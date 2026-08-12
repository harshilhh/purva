import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useInView';
import Hyphen from '../components/Hyphen';

/* ─────────────────────────────────────────────
   SECTION 1, Opening Problem Statement
   bg-brand-yellow-light
   Manifesto opener: the regulatory gap framed
   with conviction before any founder context.
───────────────────────────────────────────── */
function OpeningProblemStatement() {
  const [ref, isInView] = useInView();

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-center overflow-hidden"
    >
      {/* Full-cover background image with yellow overlay, matches home hero */}
      <div className="absolute inset-0">
        <img
          src="/cta-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
          fetchpriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-brand-yellow-light/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow-light/95 via-brand-yellow-light/70 to-brand-yellow-light/25" />
      </div>

      {/* Editorial grid texture, dark lines on warm cream */}
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

      {/* Diagonal stripe accent, brand yellow, very faint */}
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

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full pt-32 md:pt-36 pb-20 md:pb-24">

        {/* Eyebrow */}
        <div
          className={`flex items-center gap-4 mb-14 transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="w-12 h-px bg-brand-yellow" />
          <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
            Why Compliancenomics Exists
          </span>
        </div>

        {/* Manifesto, line 1 */}
        <div className="max-w-5xl">
          <h1
            className={`font-display text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-semibold text-brand-dark leading-[1.06] tracking-[-0.02em] transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-1' : 'opacity-0'
            }`}
          >
            Every framework makes sense.
          </h1>

          {/* Manifesto, highlighted anchor line */}
          <h2
            className={`mt-2 font-display text-[36px] sm:text-[46px] md:text-[54px] lg:text-[64px] font-semibold leading-[1.06] tracking-[-0.02em] transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-2' : 'opacity-0'
            }`}
          >
            <span className="text-brand-yellow-dark">Until it meets another.</span>
          </h2>

          {/* Divider */}
          <div
            className={`my-12 w-14 h-[2px] bg-brand-yellow transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-3' : 'opacity-0'
            }`}
          />

          {/* Anchor paragraph */}
          <p
            className={`text-[16px] md:text-[17px] leading-[1.8] text-brand-grey max-w-2xl transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-3' : 'opacity-0'
            }`}
          >
            That&apos;s where compliance becomes interpretation instead of
            implementation.{' '}
            <span className="text-brand-dark font-medium">
              Compliancenomics exists for organisations operating where AML,
              privacy, AI governance, operational resilience, and regulatory
              expectations begin to overlap. The work starts where
              single-framework advice stops.
            </span>
          </p>

          {/* Thesis line */}
          <p
            className={`mt-8 text-[13px] md:text-[14px] leading-[1.8] text-brand-grey-light max-w-xl tracking-[0.06em] uppercase font-semibold transition-all duration-700 ${
              isInView ? 'animate-fade-up-delay-4' : 'opacity-0'
            }`}
          >
            Compliancenomics is that practice.
          </p>
        </div>

        {/* Bottom row */}
        <div className={`mt-16 flex items-center gap-5 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-5' : 'opacity-0'}`}>
          <div className="w-8 h-[2px] bg-brand-yellow" />
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-brand-grey-light/60">
            Compliancenomics
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
   SECTION 2, The Gap Map / Conflict Matrix
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
        'Your AML framework says retain. Your privacy framework says erase. Both obligations are live. Both are triggered by the same customer record. AML retention periods run five to seven years. GDPR erasure requests arrive in thirty days. Neither regulator has issued a definitive resolution. What your organisation needs before the request arrives is a documented legal basis, a conflict protocol, and a decision trail that holds under examination from both supervisors simultaneously. Most firms have neither.',
    },
    {
      a: 'AI Explainability',
      b: 'Automation',
      tag: 'Systems',
      description:
        'The system flags the transaction. The algorithm scores the risk. The decision is made in milliseconds. Then the regulator asks: why? Deploying automation without building the explainability layer behind it is not a compliance gap waiting to happen. It is one that already exists.',
    },
    {
      a: 'Escalation Workflows',
      b: 'Reporting Duties',
      tag: 'Process',
      description:
        'An incident occurs. The GDPR team starts a 72-hour breach notification clock. The MLRO opens a SAR. DORA requires an ICT incident report within 24 hours. Three reporting obligations. Three supervisors. One event. Without a joint escalation protocol, each function follows its own process, and the gaps between them become the audit findings.',
    },
    {
      a: 'Governance Oversight',
      b: 'Operational Execution',
      tag: 'Structure',
      description:
        'The board approves the policy. The policy sits in a folder. The system does something different. That distance between what governance mandates and what operations actually run is where regulatory exposure accumulates without anyone noticing until it is too late to be proactive about it.',
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
              Where the Framework Breaks
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[52px] font-semibold text-brand-dark leading-[1.08] tracking-tight mb-5">
            Four Points of Regulatory Tension
          </h2>
          <p className="text-[15px] md:text-[16px] leading-[1.8] text-brand-grey max-w-2xl">
            Compliance fails quietly. Not because firms ignore the rules but
            because the rules were written by different regulators, at
            different times, for different problems. When they land on the
            same transaction, the same system, the same team, the gap
            between them becomes the liability.
          </p>
        </div>

        {/* Index table */}
        <div className={`transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}>

          {/* Column labels, desktop only */}
          <div className="hidden md:grid grid-cols-[48px_1fr_52px_1fr_120px] gap-6 pb-4 border-b-2 border-brand-dark/15 mb-1">
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light">#</span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light text-center">Framework A</span>
            <span />
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light text-center">Framework B</span>
            <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-brand-grey-light text-center">Domain</span>
          </div>

          <div className="divide-y divide-brand-border/60">
            {conflicts.map((c, i) => (
              <div
                key={i}
                className="group relative cursor-pointer"
                onMouseEnter={() => setActiveIdx(i)}
                onMouseLeave={() => setActiveIdx(null)}
                onClick={() => setActiveIdx(activeIdx === i ? null : i)}
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
                    <h3 className="font-display text-[26px] lg:text-[34px] font-semibold text-brand-dark leading-tight tracking-tight text-center">
                      {c.a}
                    </h3>
                    <div className="flex flex-col items-center gap-[5px]">
                      <div className="w-px h-5 bg-brand-yellow/50" />
                      <span className="font-display text-[18px] font-bold text-brand-yellow leading-none">×</span>
                      <div className="w-px h-5 bg-brand-yellow/50" />
                    </div>
                    <h3 className="font-display text-[26px] lg:text-[34px] font-normal text-brand-grey leading-tight tracking-tight text-center">
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

                  {/* Tension description, slides open on hover/tap */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIdx === i ? 'max-h-[900px] opacity-100 mt-5' : 'max-h-0 opacity-0 mt-0'}`}>
                    <p className="text-[13.5px] md:text-[14px] leading-[1.8] text-brand-grey pl-[36px] md:pl-[calc(48px+24px+4px)] pr-2 md:pr-24">
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
          <p className="text-[13px] leading-relaxed text-brand-grey-light max-w-2xl">
            These conflicts are not exceptions waiting to be managed. They are
            structural realities that require frameworks deliberately designed
            to work together from the very beginning.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 3, Founder Lens
   bg-brand-surface-warm
   Personal without biographical. Purva framed
   as a regulatory architect, first person,
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

          {/* Left, quote block */}
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
              I look at regulation the way an architect looks at structure
              for{' '}
              <span className="relative inline-block">
                load-bearing points
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-brand-yellow/60" />
              </span>{' '}
              and blind spots.
            </blockquote>

            <p className="mt-7 text-[16px] md:text-[17px] leading-[1.8] text-brand-grey max-w-xl">
              Think about it this way: a business today isn&rsquo;t just dealing
              with one rulebook. It&rsquo;s AML obligations, privacy regulations,
              maybe AI protocols too, all applying to the same piece of customer
              data at the same time. Most compliance advisers only know one of
              those rulebooks really well, so when two of them clash,
              nobody&rsquo;s actually looking at both. That clash is exactly
              where I work. It&rsquo;s the whole reason Compliancenomics exists.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="w-10 h-[2px] bg-brand-yellow" />
              <div>
                <p className="text-[15px] font-semibold text-brand-dark tracking-tight">
                  Purva Buch, LLB, CAMS
                </p>
                <p className="text-[12px] font-medium tracking-[0.1em] uppercase text-brand-yellow-dark mt-0.5">
                  Founder · Compliancenomics LLP
                </p>
                <a
                  href="mailto:purva@compliancenomics.com"
                  className="mt-2 inline-flex items-center gap-2 text-[13px] text-brand-dark hover:text-brand-yellow-dark transition-colors"
                >
                  <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  purva@compliancenomics.com
                </a>
              </div>
            </div>
          </div>

          {/* Right, portrait */}
          <div className={`transition-all duration-700 delay-200 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative">
              {/* Yellow corner frame, top right */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-[3px] border-r-[3px] border-brand-yellow z-10" />

              <img
                src="/leadership.jpg"
                alt="Purva Buch, LLB, CAMS, Founder, Compliancenomics"
                className="relative w-full h-[460px] md:h-[500px] object-cover object-top rounded-sm"
                loading="lazy"
                decoding="async"
              />

              {/* Yellow corner frame, bottom left */}
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
   SECTION 4, The Triangulated Model
   bg-white | Fixed equilateral SVG triangle,
   vertex icon nodes, hover-reveal side cards
───────────────────────────────────────────── */

/* Reusable hover card for each pillar */
function PillarHoverCard({ pillar, active, onEnter, onLeave }) {
  return (
    <div
      className={`relative bg-white border rounded-sm p-5 shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-300 ${
        active
          ? 'border-brand-yellow/40 shadow-[0_8px_40px_rgba(245,166,35,0.18)] scale-[1.02]'
          : 'border-brand-border'
      }`}
      style={{ width: 310, minHeight: 230 }}
      onMouseEnter={() => onEnter(pillar.id)}
      onMouseLeave={onLeave}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-yellow rounded-t-sm" />
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-display text-[17px] font-semibold text-brand-dark leading-tight tracking-tight">
          {pillar.name}
        </h3>
        <span className="shrink-0 text-[9px] font-bold tracking-[0.22em] text-brand-yellow mt-0.5">{pillar.number}</span>
      </div>
      <div className="h-px bg-brand-yellow/25 mb-3" />
      <ul className="space-y-[6px] mb-4">
        {pillar.points.map((pt, i) => (
          <li key={i} className="flex items-center gap-2 text-[11px] text-brand-grey leading-relaxed">
            <span className="shrink-0 w-[4px] h-[4px] rounded-full bg-brand-yellow flex-none" />
            {pt}
          </li>
        ))}
      </ul>
      <p className="text-[10.5px] font-display font-semibold italic text-brand-yellow-dark leading-relaxed">
        {pillar.tagline}
      </p>
    </div>
  );
}

function TriangulatedModel() {
  const [ref, isInView] = useInView();
  const [hovered, setHovered] = useState(null);
  const [drawn, setDrawn]     = useState(false);
  const leaveTimer            = useRef(null);

  const onEnter = (id) => { clearTimeout(leaveTimer.current); setHovered(id); };
  const onLeave = ()   => { leaveTimer.current = setTimeout(() => setHovered(null), 90); };

  useEffect(() => {
    if (isInView && !drawn) {
      const t = setTimeout(() => setDrawn(true), 400);
      return () => clearTimeout(t);
    }
  }, [isInView, drawn]);

  const pillars = [
    {
      id: 'legal', number: '01', name: 'Legal Defensibility',
      tagline: 'Can this withstand regulatory scrutiny?',
      points: ['Regulatory alignment', 'Documentation integrity', 'Escalation & reporting', 'Audit preparedness', 'Cross-border obligations'],
      /* SVG vertex coords (viewBox 0 0 460 420) */
      svgX: 230, svgY: 22,
      /* pixel position inside the 460×420 diagram div */
      nodeX: 230, nodeY: 22,
    },
    {
      id: 'governance', number: '02', name: 'Strategic Governance',
      tagline: 'Can leadership actually govern this effectively?',
      points: ['Governance frameworks', 'Roles & accountability', 'Board & management oversight', 'Risk appetite & controls', 'Policy coherence'],
      svgX: 22, svgY: 398,
      nodeX: 22, nodeY: 398,
    },
    {
      id: 'systems', number: '03', name: 'Systems Integration',
      tagline: 'Can the systems execute this consistently?',
      points: ['Process & workflow design', 'Automation & AI oversight', 'Systems interoperability', 'Data flows & controls', 'Explainability & transparency'],
      svgX: 438, svgY: 398,
      nodeX: 438, nodeY: 398,
    },
  ];

  /*
   * Equilateral triangle in viewBox "0 0 460 420"
   * Side ≈ 416px  → height = 416 × √3/2 ≈ 360px
   * T  = (230,  22)
   * BL = ( 22, 382)  [22 + 360 = 382]
   * BR = (438, 382)
   * Centroid ≈ (230, 262)
   * Perimeter ≈ 1248
   */
  const T  = { x: 230, y: 22  };
  const BL = { x: 22,  y: 382 };
  const BR = { x: 438, y: 382 };
  const cx = (T.x + BL.x + BR.x) / 3;   // 230
  const cy = (T.y + BL.y + BR.y) / 3;   // 262
  const triPath = `M${T.x},${T.y} L${BL.x},${BL.y} L${BR.x},${BR.y} Z`;
  const perim   = 1248;

  const legalPillar      = pillars[0];
  const governancePillar = pillars[1];
  const systemsPillar    = pillars[2];

  return (
    <section ref={ref} className="relative bg-white overflow-hidden">
      {/* Subtle editorial grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(rgba(26,26,26,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(26,26,26,0.025) 1px, transparent 1px)`,
        backgroundSize: '72px 72px',
      }} />

      {/* ── Animated background blobs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Top-left amber blob */}
        <div className="blob-drift-1 absolute -top-32 -left-24 w-[480px] h-[480px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.10) 0%, rgba(245,166,35,0.03) 55%, transparent 75%)' }} />
        {/* Bottom-right warm blob */}
        <div className="blob-drift-2 absolute -bottom-40 -right-28 w-[520px] h-[520px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(245,166,35,0.09) 0%, rgba(253,244,227,0.05) 50%, transparent 72%)' }} />
        {/* Center-top accent blob */}
        <div className="blob-drift-3 absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[280px] rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(245,166,35,0.05) 0%, transparent 68%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 pt-20 md:pt-28 pb-20 md:pb-28">

        {/* Section header */}
        <div className={`mb-14 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-12 h-px bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
              Compliancenomics Model
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[44px] lg:text-[56px] font-semibold text-brand-dark leading-[1.06] tracking-tight">
            The Triangulated Model
          </h2>
          <p className="text-[14px] leading-[1.8] text-brand-grey mt-4 max-w-lg">
            Every engagement is evaluated through three interconnected lenses.
            Remove any one and the framework loses structural integrity.
          </p>
        </div>

        {/* ── DESKTOP: 3-col grid, left card | triangle | right cards ── */}
        <div
          className={`hidden lg:grid items-start gap-8 transition-all duration-1000 ${isInView ? 'opacity-100' : 'opacity-0'}`}
          style={{ gridTemplateColumns: 'minmax(0,1fr) 460px minmax(0,1fr)' }}
        >
          {/* LEFT column, Governance card (bottom-aligned to match BL vertex) */}
          <div className="flex flex-col" style={{ height: 420 }}>
            <div style={{ marginTop: 'auto' }}>
              <PillarHoverCard
                pillar={governancePillar}
                active={hovered === 'governance'}
                onEnter={onEnter}
                onLeave={onLeave}
              />
            </div>
          </div>

          {/* CENTER, fixed 460×420 equilateral triangle diagram */}
          <div className="relative shrink-0" style={{ width: 460, height: 420 }}>
            {/* SVG, fixed size, no aspect-ratio distortion */}
            <svg
              width={460}
              height={420}
              viewBox="0 0 460 420"
              className="absolute inset-0 pointer-events-none"
              aria-hidden="true"
            >
              {/* Warm interior fill */}
              <path d={triPath} fill="rgba(253,244,227,0.55)" />

              {/* Soft centroid glow */}
              <ellipse cx={cx} cy={cy} rx="90" ry="80" fill="rgba(245,166,35,0.07)" />

              {/* Dashed spoke lines, vertex → centroid */}
              {pillars.map((p, i) => (
                <line key={i}
                  x1={p.svgX} y1={p.svgY} x2={cx} y2={cy}
                  stroke="#F5A623" strokeWidth="1" strokeDasharray="4 9"
                  opacity={drawn ? (hovered === null || hovered === p.id ? 0.4 : 0.07) : 0}
                  style={{ transition: 'opacity 0.35s ease' }}
                />
              ))}

              {/* Triangle outline, animated draw-in */}
              <path
                d={triPath}
                fill="none"
                stroke="#F5A623"
                strokeWidth="1.5"
                strokeLinejoin="miter"
                strokeDasharray={perim}
                strokeDashoffset={drawn ? 0 : perim}
                opacity="0.75"
                style={{ transition: 'stroke-dashoffset 2s cubic-bezier(0.4,0,0.2,1)' }}
              />

              {/* Centre convergence marker */}
              <g opacity={drawn ? 1 : 0} style={{ transition: 'opacity 0.9s ease 1.4s' }}>
                {/* Animated radar rings */}
                <circle cx={cx} cy={cy} r="52" fill="none" stroke="#F5A623" strokeWidth="1" className="radar-ring-1" />
                <circle cx={cx} cy={cy} r="52" fill="none" stroke="#F5A623" strokeWidth="1" className="radar-ring-2" />
                {/* Static rings */}
                <circle cx={cx} cy={cy} r="52" fill="rgba(253,244,227,0.55)" stroke="#F5A623" strokeWidth="0.8" opacity="0.45" />
                <circle cx={cx} cy={cy} r="34" fill="white" stroke="#F5A623" strokeWidth="1.5" opacity="0.94" />
                <circle cx={cx} cy={cy} r="7" fill="#F5A623" />
              </g>
              <g opacity={drawn ? 1 : 0} style={{ transition: 'opacity 0.7s ease 1.8s' }}>
                <text x={cx} y={cy + 54} textAnchor="middle" fill="#D4891A"
                  fontSize="7.5" fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="700" letterSpacing="0.18em">
                  OPERATIONALIZED CERTAINTY
                </text>
                <text x={cx} y={cy + 66} textAnchor="middle" fill="#6B7280"
                  fontSize="6.5" fontFamily="'Plus Jakarta Sans', sans-serif"
                  fontWeight="500" letterSpacing="0.1em">
                  Integrated Governance Architecture
                </text>
              </g>
            </svg>

            {/* Vertex icon nodes, pixel-positioned over SVG */}
            {pillars.map((p, idx) => {
              return (
                <div
                  key={p.id}
                  className="absolute z-20 cursor-pointer w-20 h-20"
                  style={{ left: p.nodeX, top: p.nodeY, transform: 'translate(-50%,-50%)' }}
                  onMouseEnter={() => onEnter(p.id)}
                  onMouseLeave={onLeave}
                >
                  {/* Animated radar rings */}
                  <div
                    className="radar-ring-1 absolute inset-0 rounded-full border-2 border-brand-yellow pointer-events-none"
                    style={{ opacity: drawn ? 1 : 0, transition: `opacity 0.6s ease ${0.6 + idx * 0.15}s` }}
                  />
                  <div
                    className="radar-ring-2 absolute inset-0 rounded-full border border-brand-yellow/70 pointer-events-none"
                    style={{ opacity: drawn ? 1 : 0, transition: `opacity 0.6s ease ${0.6 + idx * 0.15}s` }}
                  />
                  {/* Icon circle, always in active/hover state */}
                  <div
                    className="relative w-20 h-20 rounded-full border-2 border-brand-yellow bg-amber-50 flex items-center justify-center shadow-[0_0_32px_rgba(245,166,35,0.35)]"
                    style={{
                      opacity: drawn ? 1 : 0,
                      transition: `opacity 0.6s ease ${0.6 + idx * 0.15}s`,
                    }}
                  >
                    <VertexIcon id={p.id} active={true} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT column, Legal near top vertex, Systems near bottom vertex */}
          <div className="flex flex-col" style={{ height: 420 }}>
            {/* Pull legal up and left so it visually aligns with the apex circle */}
            <div style={{ marginTop: -130, marginLeft: -120 }}>
              <PillarHoverCard
                pillar={legalPillar}
                active={hovered === 'legal'}
                onEnter={onEnter}
                onLeave={onLeave}
              />
            </div>
            <div style={{ marginTop: 'auto', marginLeft: 100 }}>
              <PillarHoverCard
                pillar={systemsPillar}
                active={hovered === 'systems'}
                onEnter={onEnter}
                onLeave={onLeave}
              />
            </div>
          </div>
        </div>


        {/* ── MOBILE: triangle + stacked cards ── */}
        <div className="lg:hidden">
          {/* Triangle SVG, viewBox padded so vertex circles don't clip */}
          <div className={`mb-8 transition-all duration-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
            <svg
              viewBox="0 0 400 360"
              className="w-full max-w-sm mx-auto"
              aria-hidden="true"
            >
              {/* T=(200,35) BL=(35,321) BR=(365,321), equilateral, side≈330px */}
              {/* Warm fill */}
              <path d="M200,35 L35,321 L365,321 Z" fill="rgba(253,244,227,0.55)" />

              {/* Centroid glow */}
              <ellipse cx="200" cy="226" rx="70" ry="60" fill="rgba(245,166,35,0.07)" />

              {/* Dashed spokes */}
              {[[200,35],[35,321],[365,321]].map(([x,y],i) => (
                <line key={i} x1={x} y1={y} x2="200" y2="226"
                  stroke="#F5A623" strokeWidth="1" strokeDasharray="4 8"
                  opacity={drawn ? 0.4 : 0}
                  style={{ transition: `opacity 0.4s ease ${0.8+i*0.1}s` }} />
              ))}

              {/* Triangle outline, animated draw */}
              <path d="M200,35 L35,321 L365,321 Z"
                fill="none" stroke="#F5A623" strokeWidth="1.5" opacity="0.75"
                strokeDasharray="990" strokeDashoffset={drawn ? 0 : 990}
                style={{ transition: 'stroke-dashoffset 1.8s ease 0.3s' }} />

              {/* Vertex circles, bigger, with animated radar rings */}
              {[[200,35],[35,321],[365,321]].map(([x,y],i) => (
                <g key={i} opacity={drawn ? 1 : 0} style={{ transition: `opacity 0.5s ease ${0.9+i*0.15}s` }}>
                  {/* Animated radar ring 1 */}
                  <circle cx={x} cy={y} r="22" fill="none" stroke="#F5A623" strokeWidth="1.5"
                    className="radar-ring-1"
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
                  {/* Animated radar ring 2 */}
                  <circle cx={x} cy={y} r="22" fill="none" stroke="#F5A623" strokeWidth="1"
                    className="radar-ring-2"
                    style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
                  {/* Main circle */}
                  <circle cx={x} cy={y} r="22" fill="rgba(255,251,235,1)" stroke="#F5A623" strokeWidth="1.5" />
                  {/* Inner dot */}
                  <circle cx={x} cy={y} r="7" fill="#F5A623" />
                </g>
              ))}

              {/* Centre convergence */}
              <g opacity={drawn ? 1 : 0} style={{ transition: 'opacity 0.5s ease 1.6s' }}>
                {/* Animated radar rings */}
                <circle cx="200" cy="226" r="20" fill="none" stroke="#F5A623" strokeWidth="1.5"
                  className="radar-ring-1"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
                <circle cx="200" cy="226" r="20" fill="none" stroke="#F5A623" strokeWidth="1"
                  className="radar-ring-2"
                  style={{ transformBox: 'fill-box', transformOrigin: 'center' }} />
                <circle cx="200" cy="226" r="32" fill="rgba(253,244,227,0.65)" stroke="#F5A623" strokeWidth="0.8" opacity="0.55" />
                <circle cx="200" cy="226" r="20" fill="white" stroke="#F5A623" strokeWidth="1.5" opacity="0.93" />
                <circle cx="200" cy="226" r="6" fill="#F5A623" />
              </g>
            </svg>
          </div>

          {/* Stacked pillar cards */}
          <div className="space-y-3">
            {pillars.map((p, i) => (
              <div key={p.id}
                className={`relative border border-brand-border bg-white rounded-sm p-5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 120 + 300}ms` }}>
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-yellow rounded-t-sm" />
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-display text-[18px] font-semibold text-brand-dark leading-tight">{p.name}</h3>
                  <span className="text-[9px] font-bold tracking-[0.22em] text-brand-yellow mt-0.5">{p.number}</span>
                </div>
                <div className="h-px bg-brand-yellow/25 mb-3" />
                <ul className="space-y-[6px] mb-4">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-center gap-2 text-[12px] text-brand-grey">
                      <span className="shrink-0 w-[4px] h-[4px] rounded-full bg-brand-yellow flex-none" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="text-[11px] font-display font-semibold italic text-brand-yellow-dark">{p.tagline}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom thesis bar */}
        <div className={`mt-16 border-t border-brand-border pt-10 transition-all duration-700 delay-500 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
            <div className="shrink-0 flex items-center gap-4">
              <div className="w-8 h-[2px] bg-brand-yellow" />
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-brand-yellow-dark">The Thesis</span>
            </div>
            <p className="text-[13px] md:text-[14px] leading-[1.8] text-brand-grey-light max-w-2xl">
              Every engagement begins with one question: &ldquo;Can this
              framework be defended, governed, and executed with equal
              confidence?&rdquo; The triangulated model exists to ensure the
              answer is always yes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Thin-line SVG icons for each pillar vertex node */
function VertexIcon({ id, active }) {
  const c = active ? '#F5A623' : '#6B7280';
  const s = { stroke: c, fill: 'none', strokeWidth: '1.5', strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (id === 'legal') return (
    <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
      <line x1="12" y1="3" x2="12" y2="21" />
      <line x1="5.5" y1="6.5" x2="18.5" y2="6.5" />
      <path d="M4 14l2-7.5 4 7.5H4z" />
      <path d="M14 14l2-7.5 4 7.5h-6z" />
      <line x1="8" y1="21" x2="16" y2="21" />
    </svg>
  );
  if (id === 'governance') return (
    <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
      <polygon points="12,3 3,9 21,9" />
      <line x1="7" y1="9" x2="7" y2="19" />
      <line x1="12" y1="9" x2="12" y2="19" />
      <line x1="17" y1="9" x2="17" y2="19" />
      <line x1="3" y1="19" x2="21" y2="19" />
      <line x1="3" y1="21" x2="21" y2="21" />
    </svg>
  );
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" {...s}>
      <circle cx="12" cy="5" r="2" />
      <circle cx="5" cy="19" r="2" />
      <circle cx="19" cy="19" r="2" />
      <line x1="12" y1="7" x2="6.5" y2="17" />
      <line x1="12" y1="7" x2="17.5" y2="17" />
      <line x1="7" y1="19" x2="17" y2="19" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   SECTION 6, How We Work
   bg-white
   Operating model as a vertical timeline, not
   a service list. Five sequential steps.
   observe → map → test → operationalise → defend
───────────────────────────────────────────── */
function HowWeWork() {
  const [ref, isInView] = useInView();

  const steps = [
    {
      verb: 'Observe',
      description:
        'Before any framework is designed, the full regulatory landscape is mapped across every relevant jurisdiction. Jurisdictions in scope, overlapping obligations, points where the regulatory landscape has shifted since the last framework was built. Exposures that have been quietly accumulating tend to surface here. That is by design.',
    },
    {
      verb: 'Map',
      description:
        'The conflict points are structured with precision. Where does the same transaction trigger different obligations? Where do reporting timelines collide? Where does the governance policy say one thing and the system do another? This becomes the operational risk map that every subsequent decision is built on.',
    },
    {
      verb: 'Test',
      description:
        'The proposed framework is stress-tested against each jurisdiction\'s requirements independently, then simultaneously. A position that holds in isolation must also hold when two regulators are examining the same fact pattern at the same time. If it does not hold here, it will not hold in an audit.',
    },
    {
      verb: 'Operationalise',
      description:
        'The framework is translated into what the organisation actually runs on, processes, system controls, escalation workflows, documentation standards. Not a policy that describes what should happen. A governance structure that determines what does.',
    },
    {
      verb: 'Defend',
      description:
        'Once the framework is in place, the work has to hold up when someone else looks at it. Defend is that final layer: turning the framework into something legible from the outside, to auditors, regulators, institutional partners. Not through a scramble to explain it after the fact, but because it is documented and traceable from the start.',
    },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] gap-14 md:gap-20 items-start">

          {/* Left, sticky header + step index */}
          <div className={`md:sticky md:top-28 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-px bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
                Operating Model
              </span>
            </div>
            <h2 className="font-display text-[30px] md:text-[36px] lg:text-[44px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
              How Compliancenomics Works
            </h2>
            <p className="mt-5 text-[15px] leading-[1.8] text-brand-grey">
              Every framework we build passes through these five stages ,
              because strong compliance is designed deliberately, never
              assembled retrospectively.
            </p>

            {/* Step quick-reference, desktop */}
            <div className="hidden md:flex flex-col gap-3 mt-10 pl-1">
              {steps.map((s, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-brand-yellow w-6">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[13px] font-semibold text-brand-grey-light">{s.verb}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right, vertical timeline */}
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
   SECTION 7, For the Firms We Are Built For
   bg-brand-surface
   Accordion panel layout matching homepage
   "What We Do" design exactly.
───────────────────────────────────────────── */
const firmItems = [
  { num: '01', title: 'Legal & Accountancy Practices' },
  { num: '02', title: 'Corporate Services & Intermediaries' },
  { num: '03', title: 'Online Marketplaces & Travel Tech' },
  { num: '04', title: 'Healthtech & Data-Intensive Services' },
  { num: '05', title: 'AI-Deployed Platforms & Conversational Interfaces' },
  { num: '06', title: 'Scaling & High-Growth Businesses' },
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

  return (
    <section ref={ref} className="py-20 md:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-12 md:mb-16 max-w-3xl transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
              Who We Serve
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
            For the Firms We Are Built For
          </h2>
          <p className="mt-5 text-[16px] md:text-[17px] leading-[1.8] text-brand-grey">
            The firms in these spaces are the ones we are built for. If you
            are in one of them, the conversation is worth having.
          </p>
        </div>

        {/* Industry cards, 4 cols × 2 rows on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {firmItems.map((firm, i) => (
            <div
              key={firm.num}
              className="group relative bg-white border border-brand-border rounded-sm p-6 md:p-7 hover:border-brand-yellow/50 hover:shadow-[0_8px_28px_rgba(0,0,0,0.05)] transition-all duration-300"
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(16px)',
                transitionDelay: `${i * 70 + 200}ms`,
                transitionDuration: '600ms',
                transitionProperty: 'opacity, transform, border-color, box-shadow',
              }}
            >
              <div className="absolute top-0 left-0 w-8 h-[2px] bg-brand-yellow group-hover:w-full transition-all duration-500 rounded-tl-sm" />
              <span className="text-[10px] font-bold tracking-[0.24em] text-brand-yellow font-display">
                {firm.num}
              </span>
              <h3 className="mt-3 font-display text-[17px] md:text-[19px] font-semibold text-brand-dark leading-[1.25] tracking-tight">
                {firm.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 8, Manifesto Endcap
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
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-16 items-center">

          {/* Left, statement */}
          <div>
            <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="w-12 h-px bg-brand-yellow" />
              <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow-dark">
                The Thesis
              </span>
            </div>

            <p
              className={`font-display text-[28px] md:text-[38px] lg:text-[46px] font-semibold text-brand-dark leading-[1.1] tracking-tight transition-all duration-700 ${isInView ? 'animate-fade-up-delay-1' : 'opacity-0'}`}
            >
              Most regulatory failures do not announce themselves.
            </p>

            <p
              className={`mt-4 font-display text-[22px] md:text-[26px] lg:text-[30px] font-normal leading-[1.35] tracking-tight text-brand-dark/60 transition-all duration-700 ${isInView ? 'animate-fade-up-delay-2' : 'opacity-0'}`}
            >
              They accumulate quietly, at the{' '}
              <span className="text-brand-yellow-dark font-semibold">intersections</span>
              , until the{' '}
              <span className="text-brand-dark font-semibold">audit</span> begins.
            </p>
          </div>

          {/* Right, CTA action card */}
          <div
            className={`relative bg-white border border-brand-border p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-all duration-700 ${isInView ? 'animate-fade-up-delay-3' : 'opacity-0'}`}
          >
            {/* Yellow corner accent */}
            <div className="absolute -top-[2px] left-0 w-16 h-[3px] bg-brand-yellow" />
            <div className="absolute top-0 -left-[2px] w-[3px] h-16 bg-brand-yellow" />

            <p className="font-display text-[15px] md:text-[16px] font-medium italic text-brand-yellow-dark">
              We exist to close it.
            </p>

            <p className="mt-3 text-[15px] leading-[1.7] text-brand-grey">
              Start with a scoping conversation. If there is a genuine
              cross-framework problem, we will map it together.
            </p>

            <Link
              to="/contact"
              className="mt-7 group inline-flex items-center justify-between gap-4 w-full px-6 py-4 text-[12px] font-semibold tracking-[0.18em] uppercase bg-brand-yellow text-brand-dark hover:bg-brand-yellow-dark transition-all duration-200"
            >
              Begin the Conversation
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   SECTION 9, Testimonials
   bg-brand-surface
   Three client voice cards. Quote, attribution,
   firm context. Hover reveals yellow top line.
───────────────────────────────────────────── */
function Testimonials() {
  const [ref, isInView] = useInView();

  const testimonials = [
    {
      quote:
        'Compliancenomics redesigned our cross-border AML framework after our Singapore expansion. The approach was precise, jurisdiction-specific, and operational from day one.',
      name: 'Head of Compliance',
      firm: 'Payments Platform, UK / SG',
    },
    {
      quote:
        'What sets Compliancenomics apart is intersection expertise, not just AML, not just privacy, but where they structurally conflict. That is exactly the gap we needed closed.',
      name: 'Chief Risk Officer',
      firm: 'RegTech Firm, EU / UAE',
    },
    {
      quote:
        "Purva's regulatory architecture approach meant our governance framework was defensible at board level from the moment it was implemented, across three jurisdictions, simultaneously.",
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
              {/* Top yellow accent, expands on hover */}
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
   SECTION 10, FAQs
   bg-white
   About-specific accordion FAQ. Same pattern
   as homepage FAQ for visual consistency.
───────────────────────────────────────────── */
function AboutFAQs() {
  const [ref, isInView] = useInView();
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: 'What exactly is Compliancenomics and what does it do?',
      a: 'Compliancenomics is a cross-border regulatory advisory practice specialising in the intersection of AML compliance, privacy law, AI governance, and operational resilience. Compliancenomics is built for regulated organisations that have compliance obligations across more than one framework or jurisdiction and whose existing advisory structure was not designed to manage the conflicts between them. The work is not about building basic compliance from scratch. It is about making existing frameworks defensible, coordinated, and operational across the full scope of where the business actually runs.',
    },
    {
      q: 'Who leads the engagements at Compliancenomics?',
      a: 'Every engagement is led directly by Purva Buch, LLB, CAMS, the founder. Purva is a Certified Anti-Money Laundering Specialist with legal training, working at the intersection of AML, privacy law, AI governance, and systems integration. There is no junior substitution. The adviser the client speaks to in the scoping call is the adviser who does the work.',
    },
    {
      q: 'What makes Compliancenomics different from hiring a specialist AML or privacy consultant separately?',
      a: 'A specialist AML consultant advises on AML. A privacy consultant advises on privacy. Neither typically owns the point where the two frameworks collide, and that is precisely where the most consequential regulatory exposure sits. Compliancenomics holds both simultaneously, which means conflicts are identified and resolved within a single engagement rather than falling between two advisers who are not coordinating with each other.',
    },
    {
      q: 'What is dynamic policy management and why does it matter?',
      a: 'Most compliance frameworks are built once and revisited when a regulator asks a question. Dynamic policy management means the framework is designed to grow with the organisation, as the business scales, enters new jurisdictions, deploys new technology, or faces regulatory change, the governance architecture updates in step. The alternative is a framework that was accurate at the point of drafting and quietly becomes a liability as the organisation it was built for stops resembling the one that exists today.',
    },
    {
      q: 'Does Compliancenomics work with organisations that already have an in-house compliance team?',
      a: 'Yes, and most engagements involve one. Compliancenomics does not replace the MLRO or DPO. It works alongside them, providing the cross-framework depth that in-house functions are rarely resourced to carry alone.',
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
              Further Clarity
            </span>
          </div>
          <h2 className="font-display text-[30px] md:text-[42px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
            Frequently Asked Questions
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
   ABOUT PAGE, full section assembly
───────────────────────────────────────────── */
export default function AboutPage() {
  return (
    <>
      {/* S1, Manifesto opener */}
      <OpeningProblemStatement />

      {/* S2, Conflict matrix */}
      <GapMatrix />

      {/* S3, Founder lens */}
      <FounderLens />

      {/* S4, Triangulated model */}
      <TriangulatedModel />

      {/* S6, How we work (vertical timeline) */}
      <HowWeWork />

      {/* S7, Firms we are built for */}
      <ForTheFirms />

      {/* S8, Manifesto endcap + CTA */}
      <ManifestoEndcap />

      {/* S9, Testimonials (removed) */}
      {/* <Testimonials /> */}

      {/* S10, FAQs */}
      <AboutFAQs />
    </>
  );
}
