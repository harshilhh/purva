import { CtaLink } from './primitives';

const STRIPES = {
  backgroundImage:
    'repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(212,137,26,0.08) 40px, rgba(212,137,26,0.08) 41px)',
};

export default function ArticleCTA({ heading, subheading, button, variant = 'light' }) {
  const dark = variant === 'dark';
  return (
    <aside
      className={`not-prose relative my-12 overflow-hidden px-6 py-10 sm:px-10 md:px-12 md:py-12 ${
        dark ? 'bg-brand-dark text-white' : 'bg-brand-yellow-light border border-brand-yellow/30'
      }`}
    >
      <div className="absolute inset-0 pointer-events-none" style={STRIPES} aria-hidden="true" />
      <div className="relative md:flex md:items-center md:gap-10">
        <div className="flex-1">
          <p className={`text-[10px] font-semibold tracking-[0.25em] uppercase ${dark ? 'text-brand-yellow' : 'text-brand-yellow-dark'}`}>
            Compliancenomics Advisory
          </p>
          <h3 className={`mt-3 font-display text-[26px] md:text-[32px] font-semibold leading-[1.15] tracking-tight ${dark ? 'text-white' : 'text-brand-dark'}`}>
            {heading}
          </h3>
          <p className={`mt-3 text-[15px] md:text-base leading-relaxed ${dark ? 'text-white/70' : 'text-brand-dark/70'}`}>{subheading}</p>
        </div>
        <div className="mt-8 md:mt-0 shrink-0">
          <CtaLink>{button}</CtaLink>
        </div>
      </div>
    </aside>
  );
}
