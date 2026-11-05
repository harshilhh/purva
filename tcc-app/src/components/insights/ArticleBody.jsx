import ArticleCTA from './ArticleCTA';
import ArticleFAQ from './ArticleFAQ';
import CapabilityTable from './CapabilityTable';
import ComplianceChecklist from './ComplianceChecklist';
import OversightModels from './OversightModels';
import {
  ArticleRefs,
  BulletList,
  Callout,
  Duties,
  Entities,
  Lead,
  Paragraph,
  Pillars,
  Provision,
  PullQuote,
  SubHeading,
  Tension,
} from './ProseBlocks';

const BLOCKS = {
  p: Paragraph,
  lead: Lead,
  h3: SubHeading,
  ul: BulletList,
  quote: PullQuote,
  callout: Callout,
  provision: Provision,
  entities: Entities,
  articles: ArticleRefs,
  pillars: Pillars,
  duties: Duties,
  tension: Tension,
  table: CapabilityTable,
  oversight: OversightModels,
  checklist: ComplianceChecklist,
  cta: ArticleCTA,
  faq: ArticleFAQ,
};

function Block({ block }) {
  const Component = BLOCKS[block.type];
  if (!Component) {
    if (import.meta.env.DEV) console.warn(`[insights] Unknown block type "${block.type}"`);
    return null;
  }
  // eslint-disable-next-line no-unused-vars
  const { type, ...props } = block;
  return <Component {...props} />;
}

export function ArticleSection({ section, number }) {
  return (
    <section aria-labelledby={section.id} className="pt-14 first:pt-0">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-display text-[14px] font-semibold text-brand-yellow-dark tabular-nums">{number}</span>
        <span className="w-8 h-[1.5px] bg-brand-yellow" aria-hidden="true" />
      </div>
      <h2
        id={section.id}
        className="scroll-mt-36 lg:scroll-mt-28 font-display text-[30px] md:text-[38px] font-semibold text-brand-dark leading-[1.1] tracking-tight"
      >
        {section.title}
      </h2>
      <div className="mt-6">
        {section.blocks.map((block, i) => (
          <Block key={`${section.id}-${i}`} block={block} />
        ))}
      </div>
    </section>
  );
}
