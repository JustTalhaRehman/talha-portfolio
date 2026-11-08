'use client';

import React, { useId, useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Github, ChevronDown, CheckCircle2, Layers, BookOpen } from 'lucide-react';
import { PROJECTS, ProjectItem } from '@/lib/constants';

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-item diffuse-reveal">
      <h3 className="project-header-row">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>{project.title}</span>
          <ArrowUpRight className="arrow-icon" />
        </a>
      </h3>

      <p className="project-desc">{project.desc}</p>

      {project.caseStudy && <Link href={project.caseStudy} className="project-source-btn">Read the engineering note <ArrowUpRight size={12} /></Link>}

      <div className="project-meta-row">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {project.tags.map((tag, tIdx) => (
            <span key={tIdx} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions-group">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-source-btn"
            >
              <Github size={13} />
              <span>Repository</span>
              <ArrowUpRight size={12} />
            </a>
          )}

          {project.mediumUrl && (
            <a
              href={project.mediumUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-source-btn"
            >
              <BookOpen size={13} />
              <span>Read Article</span>
              <ArrowUpRight size={12} />
            </a>
          )}

          {(project.subdesc || (project.highlights && project.highlights.length > 0)) && (
            <button
              type="button"
              className={`project-expand-btn ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <Layers size={13} />
              <span>{isOpen ? 'Close Specs' : 'Architecture & Specs'}</span>
              <ChevronDown className={`expand-chevron ${isOpen ? 'rotated' : ''}`} size={13} />
            </button>
          )}
        </div>
      </div>

      <div id={panelId} aria-hidden={!isOpen} className={`project-deepdive-panel ${isOpen ? 'is-open' : ''}`}>
        <div className="project-deepdive-inner">
          <div className="project-deepdive-card">
            <div className="deepdive-header">
              <div className="deepdive-badge">
                <span className="deepdive-dot" />
                <span>Architecture Breakdown</span>
              </div>
              <span className="deepdive-spec-label">Production Spec</span>
            </div>

            {project.subdesc && (
              <p className="deepdive-desc">{project.subdesc}</p>
            )}

            {project.highlights && project.highlights.length > 0 && (
              <div className="deepdive-specs-grid">
                {project.highlights.map((highlight, hIdx) => (
                  <div key={hIdx} className="deepdive-spec-item">
                    <CheckCircle2 size={13} className="deepdive-spec-icon" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section tabIndex={-1} id="work" className="content-section diffuse-reveal">
      <h2 className="section-label">Selected Projects</h2>

      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: '600', letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.45 }}>
          Selected infrastructure work, with code and architecture details.
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.slice(0, 3).map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <details style={{ marginTop: '24px' }}>
        <summary className="project-expand-btn" style={{ width: 'fit-content', listStyle: 'none' }}>
          <ChevronDown size={13} aria-hidden="true" />
          More projects &amp; writing ({PROJECTS.length - 3})
        </summary>
        <div className="projects-list">
          {PROJECTS.slice(3).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </details>
    </section>
  );
};
