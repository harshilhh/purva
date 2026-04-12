import { useState, useEffect } from 'react';

const sections = [
  { id: 'home', label: 'Overview' },
  { id: 'how-we-help', label: 'How we help' },
  { id: 'services', label: 'Focus & Model' },
  { id: 'experience', label: 'Experience' },
  { id: 'foundation', label: 'Foundation' },
  { id: 'framework', label: 'Framework' },
  { id: 'approach', label: 'Our process' },
  { id: 'context', label: 'Context' },
  { id: 'faq', label: 'FAQ' },
];

export default function SubNav() {
  const [active, setActive] = useState('home');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);

      const offsets = sections.map(({ id }) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        return { id, top: el.getBoundingClientRect().top };
      });

      const current = offsets
        .filter((o) => o.top <= 150)
        .sort((a, b) => b.top - a.top)[0];

      if (current) setActive(current.id);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-[72px] left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-brand-border shadow-sm">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <nav className="subnav-scroll flex items-center gap-0 overflow-x-auto">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById(section.id);
                if (el) {
                  const top = el.getBoundingClientRect().top + window.scrollY - 130;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className={`relative shrink-0 px-4 py-3.5 text-[12px] font-medium tracking-wide whitespace-nowrap transition-colors duration-200 ${
                active === section.id
                  ? 'text-brand-dark'
                  : 'text-brand-grey-light hover:text-brand-dark'
              }`}
            >
              {section.label}
              {active === section.id && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-brand-yellow" />
              )}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
