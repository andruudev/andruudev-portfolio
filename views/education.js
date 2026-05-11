export const EducationView = () => `
  <section class="animate">
    <span class="section-label" data-t="education_label">[09] Education</span>
    <h2 style="font-family: var(--font-sans); font-size: 24px; margin-bottom: 24px;" data-t="education_title">Education</h2>
    
    <div class="items-list">
      <div class="item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 0; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <span style="font-weight: 500;">B.S. in Computer Science</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2015 — 2019</span>
        </div>
        <span style="font-size: 13px; color: var(--text-secondary);">State University of Technology</span>
      </div>

      <div class="item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 0;">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <span style="font-weight: 500;">Interactive Design Specialization</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2020</span>
        </div>
        <span style="font-size: 13px; color: var(--text-secondary);">Online Academy of Art</span>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`;
