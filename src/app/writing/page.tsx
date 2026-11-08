import type { Metadata } from 'next';
import Link from 'next/link';
import { ENGINEERING_NOTES } from '@/lib/notes';

const title = 'Engineering Notes on EKS, Secrets & GitOps | Talha Rehman';
const description = 'Source-linked engineering walkthroughs by Talha Rehman covering EKS architecture, AWS Secrets Manager, Kubernetes and Argo CD bootstrap.';
export const metadata: Metadata = { title, description, alternates: { canonical: '/writing' }, openGraph: { title, description, url: '/writing' }, twitter: { title, description } };

export default function WritingPage() {
  return <div className="note-article"><header><p className="section-label">Engineering notes</p><h1>Decisions behind the infrastructure.</h1><p className="note-intro">Code, trade-offs and the checks I would make before handing a system over. Each walkthrough links to the source it discusses.</p></header><div className="projects-list">{ENGINEERING_NOTES.map((note) => <article key={note.slug} className="project-item"><p className="note-byline">{note.kind}</p><h2><Link href={`/writing/${note.slug}`}>{note.title}</Link></h2><p>{note.description}</p><Link className="project-expand-btn" href={`/writing/${note.slug}`}>Read the note ↗</Link></article>)}</div><p><Link href="/#work">Back to selected projects</Link></p></div>;
}
