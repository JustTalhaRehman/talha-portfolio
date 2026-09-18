import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import { PROJECTS } from '@/lib/constants';

export const Projects = () => {
  return (
    <section id="work" className="content-section diffuse-reveal">
      <div className="section-label">Selected Projects</div>

      <div style={{ marginBottom: '40px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', letterSpacing: '-0.025em', color: 'var(--text-primary)', lineHeight: 1.45 }}>
          A selection of production-tested cloud platforms, GitOps architectures, and open-source systems.
        </p>
      </div>

      <div className="projects-list">
        {PROJECTS.map((project, idx) => (
          <div key={idx} className="project-item diffuse-reveal">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <span>{project.title}</span>
              <ArrowUpRight className="arrow-icon" />
            </a>

            <p className="project-desc">{project.desc}</p>
            {project.subdesc && (
              <p className="project-subdesc">{project.subdesc}</p>
            )}

            <div className="project-meta-row">
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-source-btn"
                >
                  <Github size={13} />
                  <span>View Repository</span>
                  <ArrowUpRight size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
