import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const jurisdictions = [
  {
    id: 'uk',
    label: 'United Kingdom',
    sub: 'FCA / ICO / PRA',
    left: '34.8%',
    top: '22%',
    delay: 0,
    tooltip: 'Deep expertise in FCA authorisation, ICO data compliance, and PRA-regulated firm governance. Covering financial services, fintech, and cross-border data flows.',
  },
  {
    id: 'eu',
    label: 'European Union',
    sub: 'ESMA / EBA / EDPB',
    left: '39%',
    top: '28%',
    delay: 150,
    tooltip: 'Advisory across DORA, MiCA, GDPR, and ESG disclosure obligations. Supporting firms navigating the EU regulatory single rulebook and equivalence frameworks.',
  },
  {
    id: 'uae',
    label: 'UAE',
    sub: 'DFSA / ADGM / CBUAE',
    left: '53.5%',
    top: '52%',
    delay: 300,
    tooltip: 'Specialist coverage of DIFC and ADGM regulatory regimes, CBUAE licensing requirements, and AML/CFT frameworks for financial institutions operating in the Gulf.',
  },
  {
    id: 'india',
    label: 'India',
    sub: 'RBI / SEBI / IRDAI',
    left: '60%',
    top: '48%',
    delay: 450,
    tooltip: 'Guidance on RBI payment system regulations, SEBI capital markets compliance, and DPDP Act requirements for technology and financial services firms.',
  },
  {
    id: 'apac',
    label: 'Singapore',
    sub: 'MAS / PDPC',
    left: '68%',
    top: '62%',
    delay: 600,
    tooltip: 'Advisory on MAS licensing and technology risk management guidelines, PDPA obligations, and regional compliance strategies for APAC market entry.',
  },
];


export default function RegulatoryRadar() {
  const [ref, isInView] = useInView();
  const [hoveredPin, setHoveredPin] = useState(null);

  return (
    <section
      ref={ref}
      className="py-16 md:py-24 relative"
      style={{
        overflowX: 'clip',
        background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 40%, #E8C55A 52%, #F2D27A 60%, #FDF4E3 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-10 md:mb-14 transition-all duration-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-brand-yellow" />
            <span className="text-[11px] font-semibold tracking-[0.3em] uppercase text-brand-yellow">
              Jurisdictional Reach
            </span>
            <div className="w-12 h-[1px] bg-brand-yellow" />
          </div>
          <h2 className="font-display text-[30px] md:text-[40px] lg:text-[48px] font-semibold text-brand-dark leading-[1.08] tracking-tight">
            Regulatory Radar
          </h2>
          <p className="mt-5 text-[16px] leading-[1.8] text-brand-grey max-w-xl mx-auto">
            Advisory coverage across jurisdictions where regulatory frameworks
            intersect &mdash; and where that intersection creates operational risk.
          </p>
        </div>

        {/* Globe map container — full width, zoomed on mobile */}
        <div
          className={`relative transition-all duration-1000 delay-200 map-container ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative">
            <img
              src="/world-map.png"
              alt="Globe showing TCC jurisdictional coverage"
              className="w-full h-auto block"
              draggable="false"
              style={{ marginBottom: '-4px', clipPath: 'inset(0 0 4px 0)' }}
            />


            {/* Pin markers overlaid on the map */}
            {jurisdictions.map((j) => (
              <div
                key={j.id}
                className="absolute flex flex-col items-center transition-all duration-700"
                style={{
                  left: j.left,
                  top: j.top,
                  transform: 'translate(-50%, -100%)',
                  opacity: isInView ? 1 : 0,
                  transitionDelay: `${600 + j.delay}ms`,
                  zIndex: hoveredPin === j.id ? 50 : 10,
                }}
                onMouseEnter={() => setHoveredPin(j.id)}
                onMouseLeave={() => setHoveredPin(null)}
              >
                {/* Tooltip */}
                <div
                  className="absolute bottom-full mb-3 pointer-events-none"
                  style={{
                    left: '50%',
                    transform: 'translateX(-50%)',
                    opacity: hoveredPin === j.id ? 1 : 0,
                    transition: 'opacity 0.2s ease, transform 0.2s ease',
                    transformOrigin: 'bottom center',
                    scale: hoveredPin === j.id ? '1' : '0.95',
                    width: '200px',
                  }}
                >
                  <div
                    className="rounded-xl px-4 py-3 text-left"
                    style={{
                      background: 'rgba(15, 23, 42, 0.92)',
                      backdropFilter: 'blur(8px)',
                      border: '1px solid rgba(245,166,35,0.35)',
                      boxShadow: '0 -6px 24px rgba(0,0,0,0.35), 0 0 12px rgba(0,0,0,0.2)',
                    }}
                  >
                    <p className="text-[13px] font-semibold text-brand-yellow leading-tight mb-1">
                      {j.label}
                    </p>
                    <p className="text-[10px] tracking-[0.12em] uppercase text-brand-yellow/60 mb-2">
                      {j.sub}
                    </p>
                    <p className="text-[11px] leading-[1.6] text-white/80">
                      {j.tooltip}
                    </p>
                  </div>
                  {/* Arrow pointing down */}
                  <div
                    className="mx-auto w-0 h-0"
                    style={{
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderTop: '6px solid rgba(15, 23, 42, 0.92)',
                    }}
                  />
                </div>

                {/* Pin head */}
                <div className="relative cursor-pointer">
                  <div
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-yellow flex items-center justify-center transition-transform duration-200"
                    style={{
                      transform: hoveredPin === j.id ? 'scale(1.2)' : 'scale(1)',
                      boxShadow: '0 0 12px 3px rgba(245,166,35,0.45)',
                    }}
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                    </svg>
                  </div>
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full border-2 border-brand-yellow"
                    style={{
                      animation: isInView ? 'radarPulse 2.5s ease-out infinite' : 'none',
                      animationDelay: `${j.delay + 800}ms`,
                    }}
                  />
                </div>
                {/* Pin stem */}
                <div className="w-[2px] h-5 md:h-7 bg-brand-yellow" />
                {/* Ground dot */}
                <div className="w-2 h-2 rounded-full bg-brand-yellow/60" />
              </div>
            ))}
          </div>
        </div>

        {/* Jurisdiction legend below map */}
        <div
          className={`mt-8 md:mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 transition-all duration-700 delay-700 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {jurisdictions.map((j) => (
            <div key={j.id} className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-brand-yellow shrink-0" />
              <div>
                <p className="text-[13px] font-semibold text-brand-dark tracking-tight leading-tight">
                  {j.label}
                </p>
                <p className="text-[10px] tracking-[0.1em] text-brand-grey-light/70 uppercase">
                  {j.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <div
          className={`mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-700 delay-500 ${
            isInView ? 'animate-fade-up' : 'opacity-0'
          }`}
        >
          {[
            { value: '5+', label: 'Jurisdictions' },
            { value: '12+', label: 'Regulatory Bodies' },
            { value: '30+', label: 'Framework Intersections' },
            { value: '4', label: 'Key Regions' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-display text-[32px] md:text-[40px] font-semibold text-brand-yellow tracking-tight leading-none">
                {stat.value}
              </p>
              <p className="text-[12px] tracking-[0.15em] uppercase text-brand-grey-light mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
