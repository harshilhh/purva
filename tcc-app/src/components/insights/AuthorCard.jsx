function MailIcon() {
  return (
    <svg className="w-4 h-4 text-brand-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4 text-brand-yellow" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.777 13.019H3.56V9h3.554v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function AuthorCard({ author }) {
  const linkedinLabel = author.linkedin.replace(/^https?:\/\/(www\.)?/, '');
  return (
    <section aria-labelledby="about-author" className="mt-16 border border-brand-border bg-brand-surface-warm p-6 sm:p-8 md:p-10">
      <div className="grid sm:grid-cols-[auto_1fr] gap-8 items-start">
        <div className="relative w-[140px] mx-auto sm:mx-0">
          <div className="aspect-[3/4] overflow-hidden rounded-[3px]">
            <img src={author.photo} alt={`${author.name}, ${author.credentials}`} width="140" height="187" loading="lazy" decoding="async" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-2.5 -right-2.5 w-12 h-12 border-r-2 border-b-2 border-brand-yellow rounded-br-[3px]" aria-hidden="true" />
        </div>
        <div>
          <p id="about-author" className="text-[10px] font-semibold tracking-[0.25em] uppercase text-brand-yellow-dark">About the Author</p>
          <h2 className="mt-2 font-display text-[28px] font-semibold text-brand-dark leading-tight">
            {author.name} <span className="text-brand-grey-light font-normal text-[22px]">{author.credentials}</span>
          </h2>
          <p className="text-[13px] font-medium tracking-wide text-brand-grey">{author.role}</p>
          <p className="mt-4 text-[15px] leading-[1.8] text-brand-grey">{author.bio}</p>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <a href={`mailto:${author.email}`} className="inline-flex items-center gap-2 min-h-[44px] text-[13px] text-brand-dark hover:text-brand-yellow-dark transition-colors">
              <MailIcon />
              {author.email}
            </a>
            <a href={author.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 min-h-[44px] text-[13px] text-brand-dark hover:text-brand-yellow-dark transition-colors">
              <LinkedInIcon />
              {linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
