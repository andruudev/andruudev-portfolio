export const ColophonView = () => `
  <section class="animate">
    <span class="section-label">Colophon</span>
    <div class="content-text">
      <p>This site was designed and developed by Jeyson Andrés Mueses.</p>
      <p>It is built with vanilla JavaScript and CSS, served using Vite. The layout is inspired by minimalist Japanese and Swiss design principles.</p>
    </div>
  </section>

  <section class="animate">
    <span class="section-label">Typography</span>
    <div class="content-text">
      <p>The primary typeface is <strong>Geist Sans</strong>, a modern sans-serif designed by Vercel. Monospaced elements use <strong>Geist Mono</strong>.</p>
    </div>
  </section>

  <section class="animate">
    <span class="section-label">Technology</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="cloud"></i> Hosting</span>
        <span class="item-meta">Vercel</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="bar-chart-3"></i> Analytics</span>
        <span class="item-meta">Fathom (Privacy-first)</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="github"></i> Source</span>
        <a href="https://github.com/andruudev" target="_blank" class="item-meta" style="color: var(--text-color); text-decoration: none;">andruudev</a>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`;
