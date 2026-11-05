import { useMemo, useRef } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { getPostBySlug, readingTime } from '../data/insights';
import { useDocumentMeta } from '../hooks/useDocumentMeta';
import { useActiveSection } from '../hooks/useActiveSection';
import ArticleHero from '../components/insights/ArticleHero';
import ReadingProgress from '../components/insights/ReadingProgress';
import TableOfContents from '../components/insights/TableOfContents';
import KeyTakeaways from '../components/insights/KeyTakeaways';
import AuthorCard from '../components/insights/AuthorCard';
import { ArticleSection } from '../components/insights/ArticleBody';
import { ArrowIcon } from '../components/insights/primitives';

const SITE_URL = 'https://www.compliancenomics.com';

function buildToc(post) {
  return [
    { id: post.keyTakeaways.id, label: 'Key Takeaways', number: '00' },
    ...post.sections.map((section, i) => ({
      id: section.id,
      label: section.title,
      number: String(i + 1).padStart(2, '0'),
      children: section.blocks.filter((b) => b.type === 'h3').map((b) => ({ id: b.id, label: b.text })),
    })),
  ];
}

function buildStructuredData(post) {
  const url = `${SITE_URL}/insights/${post.slug}/`;
  const faqBlock = post.sections.flatMap((s) => s.blocks).find((b) => b.type === 'faq');
  const article = {
    '@type': 'Article',
    headline: post.metaTitle,
    description: post.metaDescription,
    datePublished: post.publishedOn,
    dateModified: post.updatedOn,
    image: `${SITE_URL}${post.heroImage}`,
    mainEntityOfPage: url,
    author: { '@type': 'Person', name: post.author.name, url: post.author.linkedin },
    publisher: { '@type': 'Organization', name: 'Compliancenomics LLP', logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
  };
  const faq = faqBlock && {
    '@type': 'FAQPage',
    mainEntity: faqBlock.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: [item.a, ...(item.points ?? [])].join(' ') },
    })),
  };
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [article, faq].filter(Boolean) });
}

function Article({ post }) {
  const articleRef = useRef(null);
  const toc = useMemo(() => buildToc(post), [post]);
  const ids = useMemo(() => toc.flatMap((i) => [i.id, ...(i.children ?? []).map((c) => c.id)]), [toc]);
  const activeId = useActiveSection(ids);
  const minutes = useMemo(() => readingTime(post), [post]);
  const structuredData = useMemo(() => buildStructuredData(post), [post]);

  useDocumentMeta({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/insights/${post.slug}/`,
    image: post.heroImage,
  });

  return (
    <main>
      <ReadingProgress targetRef={articleRef} />
      <script type="application/ld+json">{structuredData}</script>
      <ArticleHero post={post} minutes={minutes} />

      <div ref={articleRef} className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24 lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16 xl:gap-20">
          <aside className="lg:pt-16">
            <TableOfContents items={toc} activeId={activeId} />
          </aside>

          <article className="pt-10 lg:pt-16 max-w-[760px]">
            <KeyTakeaways data={post.keyTakeaways} />
            <div className="mt-16">
              {post.sections.map((section, i) => (
                <ArticleSection key={section.id} section={section} number={String(i + 1).padStart(2, '0')} />
              ))}
            </div>
            <AuthorCard author={post.author} />
            <div className="mt-12 pt-8 border-t border-brand-border">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 min-h-[44px] text-[12px] font-semibold tracking-[0.15em] uppercase text-brand-grey hover:text-brand-yellow-dark transition-colors"
              >
                <ArrowIcon className="w-4 h-4 rotate-180" />
                All insights
              </Link>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}

export default function InsightArticlePage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  if (!post) return <Navigate to="/insights" replace />;
  return <Article key={post.slug} post={post} />;
}
