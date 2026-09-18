import React from 'react';
import { Award, GraduationCap, CheckCircle } from 'lucide-react';
import { EDUCATION_AND_CERTS } from '@/lib/constants';

export const Credentials = () => {
  return (
    <section id="credentials" className="content-section diffuse-reveal">
      <div className="section-label">06 // Credentials &amp; Education</div>

      <div style={{ marginBottom: '32px' }}>
        <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', fontWeight: '600', letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>
          Formal software engineering foundation and verified cloud certifications.
        </p>
      </div>

      <div className="credentials-grid">
        <div className="credential-box diffuse-reveal">
          <div className="credential-icon-row">
            <GraduationCap size={20} className="credential-icon" />
            <span className="credential-badge">Academic Degree</span>
          </div>
          <h4 className="credential-title">{EDUCATION_AND_CERTS.education.degree}</h4>
          <p className="credential-org">{EDUCATION_AND_CERTS.education.institution}</p>
          <div className="credential-meta-row">
            <span>{EDUCATION_AND_CERTS.education.period}</span>
            <span>·</span>
            <span>Software Engineering Core</span>
          </div>
        </div>

        {EDUCATION_AND_CERTS.certifications.map((cert, idx) => (
          <div key={idx} className="credential-box diffuse-reveal">
            <div className="credential-icon-row">
              <Award size={20} className="credential-icon" />
              <span className="credential-badge">Industry Certified</span>
            </div>
            <h4 className="credential-title">{cert.name}</h4>
            <p className="credential-org">{cert.issuer}</p>
            <div className="credential-meta-row">
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--emerald)' }}>
                <CheckCircle size={13} />
                <span>Verified Credential</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
