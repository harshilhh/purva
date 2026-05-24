export default function BulletList({ items, variant = 'default' }) {
  return (
    <ul className="space-y-3 mt-5">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
          {variant === 'detailed' ? (
            <span className="text-[15px] leading-relaxed text-brand-grey">
              <strong className="text-brand-dark font-semibold">{item.title}:</strong>{' '}
              <em className="text-brand-grey-light not-italic">{item.description}</em>
            </span>
          ) : (
            <span className="text-[15px] leading-relaxed text-brand-grey">{item}</span>
          )}
        </li>
      ))}
    </ul>
  );
}
