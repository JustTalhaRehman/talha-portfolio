import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ENGINEERING_NOTES, type NoteSlug } from '@/lib/notes';

export function noteMetadata(slug: NoteSlug): Metadata {
  const note = ENGINEERING_NOTES.find((item) => item.slug === slug);
  if (!note) notFound();
  const url = `https://talha.devistio.com/writing/${slug}`;
  const searchTitles: Record<NoteSlug, string> = {
    "eks-platform-terraform": "EKS Terraform: Cluster & Add-ons",
    "kubernetes-secrets-aws": "Kubernetes Secrets, IRSA & Rotation",
    "gitops-bootstrap": "Argo CD Bootstrap & GitOps Delivery",
  };
  const title = `${searchTitles[slug]} | Talha Rehman`;
  return { title, description: note.description, alternates: { canonical: url },
    openGraph: { type: 'article', title, description: note.description, url },
    twitter: { card: 'summary', title, description: note.description } };
}

export function EngineeringNote({ slug }: { slug: NoteSlug }) {
  const note = ENGINEERING_NOTES.find((item) => item.slug === slug);
  if (!note) notFound();
  const url = `https://talha.devistio.com/writing/${slug}`;
  const related = ENGINEERING_NOTES.find((item) => item.slug === note.related)!;
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'TechArticle', '@id': `${url}#article`, headline: note.title, description: note.description, url,
      mainEntityOfPage: url, inLanguage: 'en', author: { '@type': 'Person', '@id': 'https://talha.devistio.com/#person', name: 'Talha Rehman', url: 'https://talha.devistio.com/' },
      citation: note.sources.map((source) => source.url) },
    { '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Talha Rehman', item: 'https://talha.devistio.com/' },
      { '@type': 'ListItem', position: 2, name: 'Engineering notes', item: 'https://talha.devistio.com/writing' },
      { '@type': 'ListItem', position: 3, name: note.title, item: url },
    ] },
  ] };
  return <article className="note-article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, '\\u003c') }} />
    <nav aria-label="Breadcrumb" className="note-breadcrumb"><Link href="/">Home</Link> / <Link href="/writing">Engineering notes</Link> / <span aria-current="page">{note.kind}</span></nav>
    <header><p className="section-label">{note.kind}</p><h1>{note.title}</h1><p className="note-byline">By <Link href="/#about">Talha Rehman</Link> · Source review, November 2026</p><p className="note-intro">{note.intro}</p></header>
    <figure className="note-flow"><figcaption>How the pieces connect</figcaption><ol>{note.flow.map((step) => <li key={step}>{step}</li>)}</ol></figure>
    {note.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.text}</p>{section.checks.length > 0 && <ul>{section.checks.map((check) => <li key={check}>{check}</li>)}</ul>}</section>)}
    <section><h2>Checks to run in your environment</h2><p>{note.codeLabel}</p><pre><code>{note.code}</code></pre><p>These are suggested verification steps, not a record of a production test run. Check prerequisites and resource access before using them.</p></section>
    <section><h2>Source and references</h2><p>Project links point to the exact source revision reviewed for this note.</p><ul>{note.sources.map((source) => <li key={source.url}><a href={source.url}>{source.label}</a></li>)}</ul></section>
    <aside className="note-next"><h2>Continue reading</h2><p><Link href={`/writing/${related.slug}`}>{related.title}</Link></p><p>Need help with a similar system? <a href={`https://devistio.com/services/${note.service}`}>Explore the relevant Devistio service</a> or <Link href="/#contact">get in touch</Link>.</p></aside>
  </article>;
}
