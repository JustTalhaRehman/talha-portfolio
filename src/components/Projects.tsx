'use client';

import React, { useState } from 'react';
import { ArrowUpRight, Github, ChevronDown, CheckCircle2, Layers } from 'lucide-react';
import { PROJECTS, ProjectItem } from '@/lib/constants';

const ProjectCard = ({ project }: { project: ProjectItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-item diffuse-reveal">
      <div className="project-header-row">
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
        >
          <span>{project.title}</span>
          <ArrowUpRight className="arrow-icon" />
        </a>
      </div>

      <p className="project-desc">{project.desc}</p>

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

          {(project.subdesc || (project.highlights && project.highlights.length > 0)) && (
            <button
              type="button"
              className={`project-expand-btn ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
            >
              <Layers size={13} />
              <span>{isOpen ? 'Close Specs' : 'Architecture & Specs'}</span>
              <ChevronDown className={`expand-chevron ${isOpen ? 'rotated' : ''}`} size={13} />
            </button>
          )}
        </div>
      </div>

      <div className={`project-deepdive-panel ${isOpen ? 'is-open' : ''}`}>
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
    <section id="work" className="content-section diffuse-reveal">
      <div className="section-label">Selected Projects</div>

      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', fontWeight: '600', letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.45 }}>
          A selection of production-tested cloud platforms, GitOps architectures, and open-source systems.
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};
