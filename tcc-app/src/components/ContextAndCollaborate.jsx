import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const cards = [
  {
    highlight: 'Context',
    title: 'Legislative Context',
    subtitle: 'Parallel Systems, Shared Friction',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    content: [
      'Cross-border compliance is not governed by a single rulebook. It is shaped by multiple legislative systems across various jurisdictions, developed independently, enforced in parallel, and applied simultaneously.',
      'Data protection regimes (for example, GDPR-style frameworks), AML standards grounded in FATF recommendations, and jurisdiction-specific regulatory requirements.',
      'Each system carries its own legal logic, priorities, and assumptions. They often apply to the same data, the same activity, and the same organisation. When applied together, these systems create structural misalignment across the same operational activity.',
    ],
  },
  {
    highlight: 'Collaborate',
    title: 'Work With Us',
    subtitle: 'Build Compliance That Holds Across Borders',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    content: [
      'Cross-border compliance cannot be managed through templates or siloed compliance protocols. It requires structured frameworks designed for multiple jurisdictions, regulators, and evolving legislative requirements.',
      'We design and implement frameworks based on the Alignment-First Compliance Model and support organisations in designing and implementing operational compliance frameworks that align AML and data protection obligations clearly, defensibly, and in practice.',
    ],
  },
];

function FlipCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="relative h-[350px] sm:h-[420px] rounded-sm overflow-hidden cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Image, visible by default, fades when active */}
      <img
        src={card.image}
        alt={card.title}
        className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${flipped ? 'opacity-30 scale-110' : 'opacity-70'}`}
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/30 to-transparent transition-opacity duration-700 ${flipped ? 'opacity-0' : ''}`} />

      {/* Title overlay on image, visible by default, hides when active */}
      <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-all duration-700 ${flipped ? 'opacity-0 translate-y-4' : ''}`}>
        <div className="flex items-center gap-3 mb-2">
          <div className="w-6 h-[1.5px] bg-brand-yellow" />
          <span className="font-display text-lg font-semibold text-brand-yellow tracking-tight">
            {card.highlight}
          </span>
        </div>
        <h2 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-white leading-[1.15] tracking-tight">
          {card.title}: <span className="font-normal text-white/70">{card.subtitle}</span>
        </h2>
        <p className="mt-3 text-[12px] text-white/50 md:hidden">Tap to read more</p>
      </div>

      {/* Text content, hidden by default, shows when active */}
      <div className={`absolute inset-0 bg-white/70 p-6 sm:p-8 overflow-y-auto transition-all duration-700 ${flipped ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[1.5px] bg-brand-yellow" />
          <span className="font-display text-xl font-semibold text-brand-yellow tracking-tight">
            {card.highlight}
          </span>
        </div>
        <h3 className="font-display text-xl sm:text-2xl font-semibold text-brand-dark leading-[1.15] tracking-tight mb-5">
          {card.title}: <span className="text-brand-grey-light font-normal">{card.subtitle}</span>
        </h3>
        <div className="space-y-4">
          {card.content.map((text, j) => (
            <p key={j} className="text-[13px] sm:text-[14px] leading-relaxed text-brand-grey">
              {text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ContextAndCollaborate() {
  const [ref, isInView] = useInView();

  return (
    <section ref={ref} id="context" className="py-8 md:py-12 bg-white">
      <div className={`mx-auto px-4 sm:px-6 transition-all duration-700 ${isInView ? 'animate-fade-up' : 'opacity-0'}`}>
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((card, i) => (
            <FlipCard key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}
