import { useEffect, useRef } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { formatDate, getAllPosts } from '../data/insights';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { ArrowIcon, CtaLink, Eyebrow } from '../components/insights/primitives';
import Pagination from '../components/insights/Pagination';

const POSTS_PER_PAGE = 10;

function PostCard({ post }) {
  const href = `/insights/${post.slug}/`;
  return (
    <article className="group relative flex flex-col bg-white border border-brand-border overflow-hidden transition-shadow duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
      <Link to={href} tabIndex={-1} aria-hidden="true" className="relative block aspect-[16/9] overflow-hidden bg-brand-surface">
        <img
          src={post.heroImage}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.2em] uppercase text-brand-dark bg-brand-yellow px-3 py-1 rounded-full">
          {post.topic}
        </span>
      </Link>

      <div className="flex flex-col flex-1 p-6">
        <time dateTime={post.publishedOn} className="text-[12px] text-brand-grey-light tracking-wide">
          {formatDate(post.publishedOn)}
        </time>
        <h2 className="mt-3 font-display text-[21px] md:text-[22px] font-semibold text-brand-dark leading-[1.25] tracking-tight">
          <Link to={href} className="hover:text-brand-yellow-dark transition-colors duration-300">
            {post.title}
          </Link>
        </h2>
        <div className="mt-auto pt-6">
          <Link
            to={href}
            aria-label={`Read more: ${post.title}`}
            className="inline-flex items-center gap-2 min-h-[44px] text-[12px] font-semibold tracking-[0.15em] uppercase text-brand-dark border-b-[1.5px] border-brand-yellow hover:text-brand-yellow-dark transition-colors"
          >
            Read more
            <ArrowIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-brand-yellow group-hover:w-full transition-all duration-500" aria-hidden="true" />
    </article>
  );
}

function usePage(totalPages) {
  const [params] = useSearchParams();
  const requested = Number.parseInt(params.get('page') ?? '1', 10);
  if (!Number.isFinite(requested) || requested < 1) return 1;
  return Math.min(requested, Math.max(1, totalPages));
}

export default function InsightsPage() {
  const listRef = useRef(null);
  const isFirstRender = useRef(true);
  const posts = getAllPosts();
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const page = usePage(totalPages);
  const firstIndex = (page - 1) * POSTS_PER_PAGE;
  const pagePosts = posts.slice(firstIndex, firstIndex + POSTS_PER_PAGE);

  useDocumentMeta({
    title: 'Insights | Compliancenomics',
    description:
      'Briefings on where AML law, data privacy regulation, AI governance and operational resilience intersect, written for compliance officers, legal teams and business leaders.',
    path: '/insights',
    type: 'website',
  });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    listRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [page]);

  return (
    <main>
      <header className="relative pt-28 pb-14 md:pt-36 md:pb-20 bg-brand-yellow-light overflow-hidden">
        <div className="absolute inset-0 grid-motif opacity-70" aria-hidden="true" />
        <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-brand-yellow/20 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 animate-fade-up">
          <Eyebrow>Insights</Eyebrow>
          <h1 className="font-display text-[36px] sm:text-[48px] md:text-[60px] lg:text-[68px] font-semibold text-brand-dark leading-[1.05] tracking-[-0.02em] max-w-4xl">
            Briefings from where{' '}
            <span className="relative inline-block">
              regulations collide
              <span className="absolute bottom-1 left-0 right-0 h-[3px] bg-brand-yellow/60" aria-hidden="true" />
            </span>
            .
          </h1>
          <p className="mt-6 text-[16px] md:text-[17px] text-brand-grey max-w-2xl leading-[1.8]">
            Practical analysis of AML obligations, data privacy rules and AI governance expectations, and how they intersect
            in the systems your business actually runs.
          </p>
        </div>
      </header>

      <section ref={listRef} className="scroll-mt-20 py-16 md:py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-brand-grey">New briefings are on the way.</p>
          ) : (
            <>
              <p className="mb-8 text-[13px] text-brand-grey-light tabular-nums" aria-live="polite">
                Showing {firstIndex + 1}
                {pagePosts.length > 1 && <>&ndash;{firstIndex + pagePosts.length}</>} of {posts.length} briefings
              </p>
              <div key={page} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-up">
                {pagePosts.map((post) => (
                  <PostCard key={post.slug} post={post} />
                ))}
              </div>
              <Pagination current={page} total={totalPages} />
            </>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display text-[28px] md:text-[36px] font-semibold text-brand-dark leading-tight tracking-tight">
            Have a question these briefings don&rsquo;t answer?
          </h2>
          <p className="mt-4 text-base md:text-lg text-brand-grey">Tell us where your obligations overlap and we&rsquo;ll map the gap.</p>
          <div className="mt-8">
            <CtaLink>Get in touch</CtaLink>
          </div>
        </div>
      </section>
    </main>
  );
}
