import React from 'react';
import { STACK } from '@/lib/constants';

export const Stack = () => {
  return (
    <section id="skills" className="content-section diffuse-reveal">
      <div className="section-label">03 // Tech Stack</div>

      <div className="stack-list">
        {STACK.map((group, idx) => (
          <div key={idx} className="stack-row diffuse-reveal">
            <div className="stack-cat">{group.category}</div>
            <div className="stack-items">
              {group.items.map((item, iIdx) => (
                <span key={iIdx} className="stack-pill">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
