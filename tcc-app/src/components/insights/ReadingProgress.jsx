import { useEffect, useRef } from 'react';

/** Thin yellow bar under the navbar showing how far through the article the reader is. */
export default function ReadingProgress({ targetRef }) {
  const barRef = useRef(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const target = targetRef.current;
      const bar = barRef.current;
      if (!target || !bar) return;
      const rect = target.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progress = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      bar.style.transform = `scaleX(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [targetRef]);

  return (
    <div className="fixed top-[64px] md:top-[72px] left-0 right-0 h-[3px] z-40 pointer-events-none" aria-hidden="true">
      <div ref={barRef} className="h-full bg-brand-yellow origin-left" style={{ transform: 'scaleX(0)' }} />
    </div>
  );
}
