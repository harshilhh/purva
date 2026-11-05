import { Link } from 'react-router-dom';
import { formatDate } from '../../data/insights';

function MetaItem({ label, children }) {
  return (
    <div>
      <dt className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-grey-light">{label}</dt>
      <dd className="mt-1 text-[14px] font-medium text-brand-dark">{children}</dd>
    </div>
  );
}

export default function ArticleHero({ post, minutes }) {
  const { author } = post;
  return (
    <header className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-brand-yellow-light overflow-hidden">
      <div className="absolute inset-0 grid-motif opacity-70" aria-hidden="true" />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-yellow/20 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 animate-fade-up">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-[12px] font-medium tracking-wide text-brand-grey-light">
            <li>
              <Link to="/" className="hover:text-brand-dark transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link to="/insights" className="hover:text-brand-dark transition-colors">Insights</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-brand-dark truncate max-w-[50vw]" aria-current="page">{post.topic}</li>
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-dark bg-brand-yellow px-3 py-1 rounded-full">
            {post.topic}
          </span>
          <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-yellow-dark border border-brand-yellow/50 px-3 py-1 rounded-full">
            {post.jurisdiction}
          </span>
        </div>

        <h1 className="font-display text-[32px] xs:text-[36px] sm:text-[46px] md:text-[56px] lg:text-[64px] font-semibold text-brand-dark leading-[1.05] tracking-[-0.02em] max-w-4xl">
          {post.title}
        </h1>
        <p className="mt-6 font-display italic text-xl md:text-2xl text-brand-grey max-w-3xl leading-snug">{post.dek}</p>

        <figure className="relative mt-10">
          <div className="relative aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-brand-surface shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <img
              src={post.heroImage}
              alt={post.heroAlt ?? ''}
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 w-16 h-16 border-r-2 border-b-2 border-brand-yellow pointer-events-none" aria-hidden="true" />
        </figure>

        <div className="mt-10 pt-8 border-t border-brand-dark/10 flex flex-col sm:flex-row sm:items-center gap-8">
          <div className="flex items-center gap-4">
            <img
              src={author.photo}
              alt=""
              width="56"
              height="56"
              className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-white shadow-sm"
            />
            <div>
              <p className="text-[15px] font-semibold text-brand-dark">
                {author.name}, <span className="font-medium text-brand-grey">{author.credentials}</span>
              </p>
              <p className="text-[13px] text-brand-grey-light">{author.role}</p>
            </div>
          </div>
          <dl className="flex flex-wrap gap-x-8 gap-y-4 sm:ml-auto">
            <MetaItem label="Published">
              <time dateTime={post.publishedOn}>{formatDate(post.publishedOn)}</time>
            </MetaItem>
            <MetaItem label="Updated">
              <time dateTime={post.updatedOn}>{formatDate(post.updatedOn)}</time>
            </MetaItem>
            <MetaItem label="Reading time">{minutes} min</MetaItem>
          </dl>
        </div>
      </div>
    </header>
  );
}
