import { RichText } from './primitives';

const PILLAR_MARKS = ['AML', 'AI', 'DP'];

export default function KeyTakeaways({ data }) {
  return (
    <section id={data.id} aria-labelledby={`${data.id}-title`} className="scroll-mt-32 relative bg-brand-surface-warm border border-brand-border">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-brand-yellow" aria-hidden="true" />
      <div className="p-6 sm:p-8 md:p-10">
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-yellow-dark mb-3">Briefing summary</p>
        <h2 id={`${data.id}-title`} className="font-display text-[26px] md:text-[32px] font-semibold text-brand-dark leading-[1.15] tracking-tight">
          {data.title}
        </h2>

        <ul className="mt-8 space-y-5">
          {data.points.map((point, i) => (
            <li key={i} className="flex gap-4">
              <span className="shrink-0 mt-[3px] font-display text-[13px] font-semibold text-brand-yellow-dark tabular-nums">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[16px] leading-[1.75] text-brand-grey">
                <RichText text={point} />
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-[16px] leading-[1.75] text-brand-dark font-medium">{data.pillarsIntro}</p>
        <div className="mt-5 grid sm:grid-cols-3 gap-px bg-brand-border border border-brand-border">
          {data.pillars.map((pillar, i) => (
            <div key={pillar.label} className="bg-white p-5 md:p-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-brand-yellow-light font-display text-[14px] font-bold text-brand-yellow-dark">
                {PILLAR_MARKS[i] ?? i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-brand-dark">{pillar.label}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-brand-grey">{pillar.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[16px] leading-[1.75] text-brand-grey">{data.closing}</p>
      </div>
    </section>
  );
}
