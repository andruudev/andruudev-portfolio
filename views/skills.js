export const SkillsView = () => `
  <section class="animate">
    <span class="section-label" data-t="skills_label">[07] Skills</span>
    <h2 style="font-family: var(--font-sans); font-size: 24px; margin-bottom: 24px;" data-t="skills_title">Technical Skills</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 32px; margin-top: 32px;">
      <div>
        <h3 style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary); margin-bottom: 12px; text-transform: uppercase;">Design</h3>
        <ul style="list-style: none; font-size: 14px;">
          <li style="margin-bottom: 8px;">Product Design</li>
          <li style="margin-bottom: 8px;">UI/UX Systems</li>
          <li style="margin-bottom: 8px;">Interaction Design</li>
          <li style="margin-bottom: 8px;">Prototyping (Figma)</li>
        </ul>
      </div>
      <div>
        <h3 style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary); margin-bottom: 12px; text-transform: uppercase;">Development</h3>
        <ul style="list-style: none; font-size: 14px;">
          <li style="margin-bottom: 8px;">React / Next.js</li>
          <li style="margin-bottom: 8px;">TypeScript</li>
          <li style="margin-bottom: 8px;">JavaScript (ES6+)</li>
          <li style="margin-bottom: 8px;">GSAP / Framer Motion</li>
        </ul>
      </div>
      <div>
        <h3 style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary); margin-bottom: 12px; text-transform: uppercase;">Backend & Tools</h3>
        <ul style="list-style: none; font-size: 14px;">
          <li style="margin-bottom: 8px;">Node.js</li>
          <li style="margin-bottom: 8px;">Git / GitHub</li>
          <li style="margin-bottom: 8px;">PostgreSQL</li>
          <li style="margin-bottom: 8px;">TailwindCSS</li>
        </ul>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`;
