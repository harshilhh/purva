import { useInView } from '../hooks/useInView';

const jurisdictions = [
  { id: 'uk', label: 'United Kingdom', sub: 'FCA / ICO / PRA', left: '34.8%', top: '22%', delay: 0 },
  { id: 'eu', label: 'European Union', sub: 'ESMA / EBA / EDPB', left: '39%', top: '28%', delay: 150 },
  { id: 'uae', label: 'UAE', sub: 'DFSA / ADGM / CBUAE', left: '53.5%', top: '52%', delay: 300 },
  { id: 'india', label: 'India', sub: 'RBI / SEBI / IRDAI', left: '60%', top: '48%', delay: 450 },
  { id: 'apac', label: 'Singapore', sub: 'MAS / PDPC', left: '68%', top: '62%', delay: 600 },
];

// Country highlight zones — positioned over each country on the map
const countryHighlights = [
  { id: 'uk', left: '35%', top: '28%', w: '3%', h: '8%', animDelay: '0s' },
  { id: 'eu', left: '39.5%', top: '32%', w: '7%', h: '12%', animDelay: '2s' },
  { id: 'uae', left: '54.5%', top: '56%', w: '3.5%', h: '8%', animDelay: '4s' },
  { id: 'india', left: '61%', top: '52%', w: '5%', h: '14%', animDelay: '6s' },
  { id: 'apac', left: '68.5%', top: '66%', w: '2.5%', h: '5%', animDelay: '8s' },
];

export default function RegulatoryRadar() {
  const [ref, isInView] = useInView();

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

        {/* Globe map container — full width */}
        <div
          className={`relative transition-all duration-1000 delay-200 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}
        >
          <div className="relative">
            <img
              src="/world-map.png"
              alt="Globe showing TCC jurisdictional coverage"
              className="w-full h-auto block"
              draggable="false"
              style={{ marginBottom: '-4px', clipPath: 'inset(0 0 4px 0)' }}
            />

            {/* Country highlight glows — cycle one by one */}
            {isInView && countryHighlights.map((c) => (
              <div
                key={c.id}
                className="absolute rounded-full pointer-events-none country-highlight"
                style={{
                  left: c.left,
                  top: c.top,
                  width: c.w,
                  height: c.h,
                  transform: 'translate(-50%, -50%)',
                  background: 'radial-gradient(ellipse at center, rgba(245,166,35,0.55) 0%, rgba(245,166,35,0.2) 40%, rgba(245,166,35,0) 70%)',
                  animationDelay: c.animDelay,
                  filter: 'blur(4px)',
                }}
              />
            ))}

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
                }}
              >
                {/* Pin head */}
                <div className="relative">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brand-yellow flex items-center justify-center shadow-lg shadow-brand-yellow/30">
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
