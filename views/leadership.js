export const LeadershipView = () => `
  <section class="animate">
    <span class="section-label" data-t="leadership_label">[11] Leadership</span>
    <h2 style="font-family: var(--font-sans); font-size: 24px; margin-bottom: 24px;" data-t="leadership_title">Leadership & Volunteering</h2>
    
    <div class="items-list">
      <div class="item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 0; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <span style="font-weight: 500;">Design Mentor</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2023 — Present</span>
        </div>
        <span style="font-size: 13px; color: var(--text-secondary);">ADPList</span>
        <p style="font-size: 14px; margin-top: 8px;">Mentoring aspiring designers on portfolio reviews, career paths, and UI design principles.</p>
      </div>

      <div class="item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 0;">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <span style="font-weight: 500;">Community Organizer</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2021 — 2022</span>
        </div>
        <span style="font-size: 13px; color: var(--text-secondary);">Local Dev Community</span>
        <p style="font-size: 14px; margin-top: 8px;">Organized monthly meetups and workshops for over 200 local developers and designers.</p>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`;
