import { Fragment } from 'react';
import { Link } from 'react-router-dom';

export function Eyebrow({ children, className = 'mb-6' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-8 h-[1.5px] bg-brand-yellow" />
      <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark">
        {children}
      </span>
    </div>
  );
}

export function ArrowIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

export function CtaLink({ children, to = '/contact' }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 px-8 py-4 min-h-[48px] text-[13px] font-semibold tracking-wide uppercase rounded-sm bg-brand-yellow text-brand-dark hover:bg-brand-yellow-dark transition-all duration-200 hover:-translate-y-px hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-dark"
    >
      {children}
      <ArrowIcon />
    </Link>
  );
}

/** Renders a string with **bold** segments. */
export function RichText({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={i} className="font-semibold text-brand-dark">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    )
  );
}
