import { RichText } from './primitives';

/* Small editorial blocks used inside an article body. */

export function Paragraph({ text }) {
  return (
    <p className="my-5 text-[17px] leading-[1.8] text-brand-grey">
      <RichText text={text} />
    </p>
  );
}

export function Lead({ text }) {
  return <p className="my-6 font-display text-[24px] md:text-[28px] italic leading-snug text-brand-dark">{text}</p>;
}

export function SubHeading({ id, text }) {
  return (
    <h3 id={id} className="scroll-mt-36 lg:scroll-mt-28 mt-12 mb-4 font-display text-[23px] md:text-[26px] font-semibold text-brand-dark leading-[1.2] tracking-tight">
      {text}
    </h3>
  );
}

export function BulletList({ items }) {
  return (
    <ul className="my-6 space-y-4">
      {items.map((item) => (
        <li key={item} className="flex gap-4 text-[17px] leading-[1.75] text-brand-grey">
          <span className="mt-[12px] w-1.5 h-1.5 rotate-45 bg-brand-yellow shrink-0" aria-hidden="true" />
          <span>
            <RichText text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PullQuote({ text, cite, link }) {
  return (
    <figure className="relative my-12 py-10 px-6 sm:px-10 border-y border-brand-yellow/40">
      <span className="absolute -top-7 left-4 sm:left-8 font-display text-[96px] leading-none text-brand-yellow select-none" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="font-display text-[24px] sm:text-[28px] md:text-[32px] italic leading-[1.35] text-brand-dark tracking-tight">
        {text}
      </blockquote>
      <figcaption className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
        <span className="text-[13px] font-semibold tracking-[0.15em] uppercase text-brand-dark">{cite}</span>
        {link && (
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[13px] font-medium text-brand-yellow-dark underline decoration-brand-yellow/40 underline-offset-4 hover:decoration-brand-yellow transition-colors"
          >
            {link.label}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H18m0 0v4.5M18 6l-7.5 7.5M6 9v9h9" />
            </svg>
          </a>
        )}
      </figcaption>
    </figure>
  );
}

export function Callout({ text }) {
  return (
    <div className="my-8 flex gap-4 bg-brand-yellow-light/70 border-l-[3px] border-brand-yellow px-5 py-5 sm:px-6">
      <svg className="w-5 h-5 shrink-0 mt-1 text-brand-yellow-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
      </svg>
      <p className="text-[16px] leading-[1.7] font-medium text-brand-dark">
        <RichText text={text} />
      </p>
    </div>
  );
}

/** Statutory wording, set like a quoted provision. */
export function Provision({ source, fragments }) {
  return (
    <div className="my-8 bg-white border border-brand-border">
      <p className="px-5 sm:px-6 py-3 border-b border-brand-border text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-grey-light">
        {source}
      </p>
      <div className="px-5 sm:px-6 py-6 grid sm:grid-cols-2 gap-6">
        {fragments.map((f, i) => (
          <div key={f}>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark">{i === 0 ? 'Timing' : 'Consequence'}</p>
            <p className="mt-2 font-display text-[22px] italic leading-snug text-brand-dark">&ldquo;{f}&rdquo;</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Entities({ items, note }) {
  return (
    <div className="my-8">
      <div className="grid sm:grid-cols-3 gap-px bg-brand-border border border-brand-border">
        {items.map((e) => (
          <div key={e.abbr} className="bg-white p-5 md:p-6">
            <span className="font-display text-[30px] font-bold text-brand-yellow-dark leading-none">{e.abbr}</span>
            <h4 className="mt-3 text-[14px] font-semibold text-brand-dark leading-snug">{e.label}</h4>
            <p className="mt-2 text-[14px] leading-relaxed text-brand-grey">{e.body}</p>
          </div>
        ))}
      </div>
      {note && (
        <p className="mt-4 text-[15px] text-brand-grey">
          <RichText text={note} />
        </p>
      )}
    </div>
  );
}

/** Statutory references, each with a reference tab and explanation. */
export function ArticleRefs({ items }) {
  return (
    <ol className="my-8 space-y-4">
      {items.map((item) => (
        <li key={item.ref} className="grid sm:grid-cols-[150px_1fr] border border-brand-border bg-white">
          <div className="px-5 py-3 sm:py-5 bg-brand-surface border-b sm:border-b-0 sm:border-r border-brand-border">
            <span className="font-display text-[18px] font-semibold text-brand-dark">{item.ref}</span>
          </div>
          <div className="px-5 py-5">
            <p className="text-[16px] leading-[1.75] text-brand-grey">{item.body}</p>
            {item.conditions?.length > 0 && (
              <ol className="mt-4 space-y-2">
                {item.conditions.map((c, i) => (
                  <li key={c} className="flex gap-3 text-[15px] leading-relaxed text-brand-dark">
                    <span className="shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-brand-yellow-light text-[11px] font-semibold text-brand-yellow-dark">
                      {i + 1}
                    </span>
                    {c}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Pillars({ items }) {
  return (
    <div className="my-10 space-y-px bg-brand-border border border-brand-border">
      {items.map((item, i) => (
        <div key={item.title} className="bg-white p-6 md:p-8 grid md:grid-cols-[64px_1fr] gap-3 md:gap-6">
          <span className="font-display text-[44px] font-semibold text-brand-yellow/60 leading-none">{String(i + 1).padStart(2, '0')}</span>
          <div>
            <h4 className="font-display text-[22px] font-semibold text-brand-dark">{item.title}</h4>
            <p className="mt-2 text-[16px] leading-[1.75] text-brand-grey">{item.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Duties({ items }) {
  return (
    <div className="my-8 grid sm:grid-cols-2 gap-4">
      {items.map((d, i) => (
        <div key={d.title} className="p-6 bg-white border border-brand-border hover:border-brand-yellow/60 hover:shadow-lg transition-all duration-300">
          <span className="block text-[11px] font-semibold tracking-widest text-brand-yellow-dark font-display mb-3">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div className="w-8 h-[2px] bg-brand-yellow mb-4" aria-hidden="true" />
          <h4 className="font-display text-[21px] font-semibold text-brand-dark leading-tight">{d.title}</h4>
          <p className="mt-2 text-[15px] leading-relaxed text-brand-grey">{d.body}</p>
        </div>
      ))}
    </div>
  );
}

function TensionSide({ side }) {
  return (
    <div className="p-6 md:p-7 bg-white">
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark">{side.label}</p>
      <p className="mt-3 text-[15px] leading-relaxed text-brand-grey">{side.body}</p>
    </div>
  );
}

/** Two regimes pulling in opposite directions. */
export function Tension({ left, right }) {
  return (
    <div className="relative my-10 grid md:grid-cols-2 gap-px bg-brand-border border border-brand-border">
      <TensionSide side={left} />
      <TensionSide side={right} />
      <span
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-brand-dark text-brand-yellow font-display text-2xl leading-none shadow-lg"
        aria-hidden="true"
      >
        &times;
      </span>
    </div>
  );
}
