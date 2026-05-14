export const NowView = () => `
  <section class="animate">
    <span class="section-label">Now</span>
    <div class="content-text">
      <p>This is a <a href="https://nownownow.com/about" target="_blank" style="color: inherit;">now page</a>, and these are the things I’m currently focused on.</p>
    </div>
  </section>

  <section class="animate">
    <span class="section-label">Ongoing</span>
    <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 12px; font-size: 15px;">
      <li style="display: flex; gap: 12px; align-items: baseline;">
        <span style="font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary);"><i data-lucide="zap" style="width: 10px; height: 10px;"></i> 01</span>
        <span>Reimagining my portfolio with high-end GSAP animations.</span>
      </li>
      <li style="display: flex; gap: 12px; align-items: baseline;">
        <span style="font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary);"><i data-lucide="camera" style="width: 10px; height: 10px;"></i> 02</span>
        <span>Exploring analog photography in the streets of Guayaquil.</span>
      </li>
      <li style="display: flex; gap: 12px; align-items: baseline;">
        <span style="font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary);"><i data-lucide="code-2" style="width: 10px; height: 10px;"></i> 03</span>
        <span>Deep diving into creative coding and WebGL shaders.</span>
      </li>
    </ul>
  </section>

  <section class="animate">
    <span class="section-label">Current stack</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="pen-tool"></i> Design</span>
        <span class="item-meta">Figma / Framer</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="terminal"></i> Code</span>
        <span class="item-meta">React / Vite / GSAP</span>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`;
