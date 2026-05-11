(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=()=>`
  <section class="animate">
    <span class="section-label" data-t="profile_label">[01] Profile</span>
    <div class="content-text">
      <p data-t="profile_text">I'm a Product Designer & Creative Developer with 4 years of experience, based in Ecuador. Focused on building high-end interactive experiences and clean technical interfaces.</p>
    </div>
    <div style="margin-top: 16px;">
      <a href="/about" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="work_label">[02] Work</span>
    <div class="items-list">
      <a href="/project/sales-intelligence" class="item nav-link">
        <span class="item-title"><i data-lucide="bar-chart-3"></i> Sales Intelligence Dashboard</span>
        <span class="item-meta">Power BI + SQL</span>
      </a>
      <a href="/project/retail-analytics" class="item nav-link">
        <span class="item-title"><i data-lucide="database"></i> Retail ETL Pipeline</span>
        <span class="item-meta">Python + Azure</span>
      </a>
    </div>
    <div style="margin-top: 16px;">
      <a href="#" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="skills_label">[07] Skills</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title">Data Visualization & BI</span>
        <span class="item-meta">Power BI / Tableau / Looker</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title">Data Engineering</span>
        <span class="item-meta">SQL / Python / ETL</span>
      </div>
    </div>
    <div style="margin-top: 16px;">
      <a href="/skills" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label">[03] Data Stack</span>
    <div class="data-stack-grid">
      <div class="stack-item" title="SQL Server"><i data-lucide="database"></i><span>SQL</span></div>
      <div class="stack-item" title="Python"><i data-lucide="code-2"></i><span>Python</span></div>
      <div class="stack-item" title="Power BI"><i data-lucide="bar-chart-3"></i><span>Power BI</span></div>
      <div class="stack-item" title="Azure"><i data-lucide="cloud"></i><span>Azure</span></div>
      <div class="stack-item" title="Excel"><i data-lucide="table-2"></i><span>Excel</span></div>
      <div class="stack-item" title="Tableau"><i data-lucide="pie-chart"></i><span>Tableau</span></div>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="experience_label">[08] Experience</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title">BI Developer</span>
        <span class="item-meta">Data Insights Ltd.</span>
      </div>
    </div>
    <div style="margin-top: 16px;">
      <a href="/experience" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="education_label">[09] Education</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title">B.S. Computer Science</span>
        <span class="item-meta">Tech University</span>
      </div>
    </div>
    <div style="margin-top: 16px;">
      <a href="/education" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="certifications_label">[10] Certifications</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title">Google UX Certificate</span>
        <span class="item-meta">2023</span>
      </div>
    </div>
    <div style="margin-top: 16px;">
      <a href="/certifications" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="leadership_label">[11] Leadership</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title">Design Mentor</span>
        <span class="item-meta">ADPList</span>
      </div>
    </div>
    <div style="margin-top: 16px;">
      <a href="/leadership" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="blog_label">[12] Blog</span>
    <div class="items-list">
      <a href="/blog" class="item nav-link">
        <span class="item-title"><i data-lucide="book-text"></i> Creative development with GSAP</span>
        <span class="item-meta">21 Oct 2025</span>
      </a>
    </div>
    <div style="margin-top: 16px;">
      <a href="/blog" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 11px; text-decoration: none; display: flex; align-items: center; gap: 4px;" data-t="see_more">See More <i data-lucide="arrow-right" style="width: 10px; height: 10px;"></i></a>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="connect_label">[05] Connect</span>
    <form id="contact-form" class="minimal-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
      <div class="form-group">
        <input type="text" name="name" id="name" placeholder="Name" data-t="name_placeholder" required />
      </div>
      <div class="form-group">
        <input type="email" name="email" id="email" placeholder="Email" data-t="email_placeholder" required />
      </div>
      <div class="form-group">
        <textarea name="message" id="message" placeholder="Message..." data-t="message_placeholder" rows="3" required></textarea>
      </div>
      <button type="submit" class="submit-btn">
        <span data-t="send">Send</span> <i data-lucide="arrow-right"></i>
      </button>
    </form>
  </section>

  <section class="animate" id="network-visualizer">
    <span class="section-label" data-t="network_label">[06] Data Pipeline Status</span>
    <div class="dashboard-grid">
      <div class="dashboard-node">
        <div class="node-icon">
          <div class="status-dot"></div>
          <svg viewBox="0 0 40 40">
            <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" stroke-dasharray="4 4" class="radar-spin" />
          </svg>
        </div>
        <div class="node-info">
          <div class="node-status" data-t="secure_node">DATA WAREHOUSE CONNECTED</div>
          <div class="node-metrics" id="live-metrics">INITIALIZING...</div>
        </div>
      </div>
      <div class="system-logs" id="system-logs">
        <!-- Logs will be injected here -->
      </div>
    </div>
  </section>
`,t=()=>`
  <section class="animate">
    <span class="section-label" data-t="about_intro_label">[01] Profile</span>
    <div class="content-text">
      <p data-t="about_text_1">I’m Jeyson Andrés Mueses, a product designer based in Ecuador. Currently exploring the intersection of design and code.</p>
      <p data-t="about_text_2">I untangle complexity into a single, consistent thread. I believe that good design is invisible and that form should always follow function.</p>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="about_what_label">[02] What I do</span>
    <div class="content-text">
      <p data-t="about_text_3">I work across the entire design process—from initial research and strategy to high-fidelity prototyping and creative development. I thrive in collaborative environments and value clear communication.</p>
    </div>
  </section>

  <section class="animate">
    <span class="section-label" data-t="about_fav_label">[03] Favourites</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="type"></i> Font</span>
        <span class="item-meta">Geist / Inter</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="code"></i> Editor</span>
        <span class="item-meta">Cursor / VS Code</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="palette"></i> Theme</span>
        <span class="item-meta">Vesper / Dark</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="coffee"></i> Coffee</span>
        <span class="item-meta">Flat White</span>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`,n=e=>{let t={"partner-growth":{title:`Partner Product Led Growth`,client:`Pleo`,description:`Building foundations of the partner funnel. This project involved deep research into partner needs and the creation of a seamless onboarding flow.`,role:`Lead Designer`,year:`2024`,image:`https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200`,stats:[{label:`Conversion Rate`,value:`85%`},{label:`User Satisfaction`,value:`92%`},{label:`Onboarding Time`,value:`-40%`}]},"client-page":{title:`Client Page 2.0`,client:`Pleo`,description:`Easy client management, all in one place. We redesigned the core dashboard to improve discoverability and reduce friction for power users.`,role:`Product Designer`,year:`2023`,image:`https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`,stats:[{label:`Daily Active Users`,value:`+120%`},{label:`Task Completion`,value:`98%`},{label:`Support Tickets`,value:`-25%`}]}}[e]||{title:`Project Not Found`,client:``,description:``,image:``,stats:[]};return`
    <section class="animate">
      <span class="section-label">${t.client} / ${t.year}</span>
      <h1 style="font-size: clamp(2rem, 5vw, 4rem); line-height: 1.1; margin-bottom: 32px;">${t.title}</h1>
      
      <div class="case-study-hero animate" style="width: 100%; height: 60vh; border-radius: 12px; overflow: hidden; margin-bottom: 40px;">
        <img src="${t.image}" alt="${t.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div class="content-text" style="max-width: 600px;">
        <p style="font-size: 18px; line-height: 1.6; color: var(--text-color);">${t.description}</p>
      </div>
    </section>

    <section class="animate">
      <span class="section-label">Data Impact</span>
      <div class="chart-container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px;">
          ${(t.stats||[]).map(e=>`
            <div>
              <div style="font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">${e.label}</div>
              <div style="font-size: 24px; font-weight: 500;">${e.value}</div>
              <div class="chart-bar" style="width: ${e.value.includes(`+`)||e.value.includes(`-`)?`100%`:e.value}"></div>
            </div>
          `).join(``)}
        </div>
      </div>
    </section>

    <section class="animate">
      <div style="display: flex; gap: 40px;">
        <div>
          <span class="section-label">Role</span>
          <p>${t.role}</p>
        </div>
        <div>
          <span class="section-label">Year</span>
          <p>${t.year}</p>
        </div>
      </div>
    </section>

    <div style="margin-top: 80px; padding-bottom: 40px;">
      <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;">
        <i data-lucide="arrow-left"></i> Back to Home
      </a>
    </div>
  `},r=()=>`
    <section class="animate">
      <span class="section-label" data-t="blog_label">[12] Blog</span>
      <h2 style="font-family: var(--font-sans); font-size: 24px; margin-bottom: 24px;" data-t="blog_title">Field Notes</h2>
      <div class="items-list">
        ${[{title:`2026 in review`,date:`28 Dec 2026`,tag:`Thoughts`},{title:`Creative development with GSAP`,date:`21 Oct 2025`,tag:`Code`},{title:`The product design 'polish' checklist`,date:`22 Jul 2025`,tag:`Design`},{title:`The art of saying 'no'`,date:`8 Jun 2025`,tag:`Process`},{title:`Stop pursuing perfection`,date:`14 Apr 2025`,tag:`Process`},{title:`Shipping 'fast'`,date:`16 Feb 2025`,tag:`Process`}].map(e=>`
          <a href="#" class="item">
            <span class="item-title"><i data-lucide="book-text"></i> \${post.title}</span>
            <span class="item-meta">\${post.date}</span>
          </a>
        `).join(``)}
      </div>
    </section>

    <div style="margin-top: 40px;">
      <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
    </div>
  `,i=()=>`
  <section class="animate">
    <span class="section-label">Bookshelf</span>
    <div class="content-text">
      <p>A collection of things I've read and things I'm currently reading. I'm always looking for recommendations, especially in design and philosophy.</p>
    </div>
  </section>

  <section class="animate">
    <span class="section-label">Now reading</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="book-open"></i> The Courage to be Disliked</span>
        <span class="item-meta">Ichiro Kishimi</span>
      </div>
    </div>
  </section>

  <section class="animate">
    <span class="section-label">Finished recently</span>
    <div class="items-list">
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="book"></i> 7 Days in the Art World</span>
        <span class="item-meta">Sarah Thornton</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="book"></i> Thinking with Type</span>
        <span class="item-meta">Ellen Lupton</span>
      </div>
      <div class="item" style="cursor: default;">
        <span class="item-title"><i data-lucide="book"></i> Design as Art</span>
        <span class="item-meta">Bruno Munari</span>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`,a=()=>`
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
`,o=()=>`
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
`,s=()=>`
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
`,c=()=>`
  <section class="animate">
    <span class="section-label" data-t="experience_label">[08] Experience</span>
    <h2 style="font-family: var(--font-sans); font-size: 24px; margin-bottom: 24px;" data-t="experience_title">Work Experience</h2>
    
    <div class="items-list">
      <div class="item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 0; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <span style="font-weight: 500;">Senior Product Designer</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2022 — Present</span>
        </div>
        <span style="font-size: 13px; color: var(--text-secondary);">TechCorp Global</span>
        <p style="font-size: 14px; margin-top: 8px;">Leading the design system team and overseeing the UX strategy for the core financial platform.</p>
      </div>

      <div class="item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 0; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <span style="font-weight: 500;">UX/UI Designer</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2020 — 2022</span>
        </div>
        <span style="font-size: 13px; color: var(--text-secondary);">Creative Studio X</span>
        <p style="font-size: 14px; margin-top: 8px;">Developed interactive prototypes and visual identities for over 15 high-profile clients.</p>
      </div>

      <div class="item" style="flex-direction: column; align-items: flex-start; gap: 4px; padding: 16px 0;">
        <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
          <span style="font-weight: 500;">Junior Developer</span>
          <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2019 — 2020</span>
        </div>
        <span style="font-size: 13px; color: var(--text-secondary);">StartUp Inc.</span>
        <p style="font-size: 14px; margin-top: 8px;">Worked on the front-end implementation of a real-time collaboration tool using React.</p>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`,l=()=>`
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
`,u=()=>`
  <section class="animate">
    <span class="section-label" data-t="certifications_label">[10] Certifications</span>
    <h2 style="font-family: var(--font-sans); font-size: 24px; margin-bottom: 24px;" data-t="certifications_title">Certifications</h2>
    
    <div class="items-list">
      <div class="item" style="padding: 12px 0; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 500;">Google UX Design Professional Certificate</span>
          <span style="font-size: 13px; color: var(--text-secondary);">Google / Coursera</span>
        </div>
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2023</span>
      </div>

      <div class="item" style="padding: 12px 0; border-bottom: 1px solid var(--border-color);">
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 500;">Meta Front-End Developer Certificate</span>
          <span style="font-size: 13px; color: var(--text-secondary);">Meta / Coursera</span>
        </div>
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2022</span>
      </div>

      <div class="item" style="padding: 12px 0;">
        <div style="display: flex; flex-direction: column;">
          <span style="font-weight: 500;">Certified Scrum Master (CSM)</span>
          <span style="font-size: 13px; color: var(--text-secondary);">Scrum Alliance</span>
        </div>
        <span style="font-family: var(--font-mono); font-size: 11px; color: var(--text-secondary);">2021</span>
      </div>
    </div>
  </section>

  <div style="margin-top: 40px;">
    <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
  </div>
`,d=()=>`
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
`,f={en:{home:`Home`,about:`About`,projects:`Projects`,skills:`Skills`,experience:`Experience`,education:`Education`,certifications:`Certifications`,leadership:`Leadership`,blog:`Blog`,writing:`Writing`,now:`Now`,colophon:`Colophon`,bookshelf:`Bookshelf`,lights:`Lights off/on`,close:`Close ESC`,back_home:`Back to Home`,see_more:`See More`,send:`Send`,sending:`Sending...`,sent_success:`Sent Successfully`,error_sending:`Error Sending`,profile_label:`[01] Profile`,work_label:`[02] Work`,side_projects_label:`[03] Side Projects`,elsewhere_label:`[04] Elsewhere`,connect_label:`[05] Connect`,network_label:`[06] Data Pipeline Status`,skills_label:`[07] Skills`,experience_label:`[08] Experience`,education_label:`[09] Education`,certifications_label:`[10] Certifications`,leadership_label:`[11] Leadership`,blog_label:`[12] Blog`,profile_text:`I'm a Data Analyst & BI Developer focused on transforming complex datasets into actionable insights. Expert in building automated pipelines, interactive dashboards, and scalable data models.`,system_initializing:`SYSTEM_INITIALIZING...`,encrypting_session:`ENCRYPTING_SESSION...`,booting_core:`BOOTING_CORE_SYSTEM...`,loading_ui:`LOADING_UI_RESOURCES...`,connecting_grid:`CONNECTING_TO_GRID...`,decrypting_bio:`DECRYPTING_BIO_METRICS...`,access_granted:`ACCESS_GRANTED`,visitor_analytics:`VISITOR_ANALYTICS`,secure_node:`DATA_WAREHOUSE CONNECTED`,enc_type:`ENC_TYPE: AES-256`,system_secure:`SYSTEM_SECURE`,name_placeholder:`Name`,email_placeholder:`Email`,message_placeholder:`Message...`,about_title:`About Me`,about_intro_label:`[01] Profile`,about_what_label:`[02] What I do`,about_fav_label:`[03] Favourites`,about_text_1:`I’m Jeyson Andrés Mueses, a Data Analyst and BI Developer based in Ecuador. Currently leveraging data to solve complex business problems.`,about_text_2:`I translate raw data into strategic narratives. I believe that every dataset tells a story and that accuracy and clarity are the foundation of any successful project.`,about_text_3:`I work across the entire data lifecycle—from ETL processes and SQL optimization to high-end BI dashboard design and predictive analysis. I thrive in environments where data drives decisions.`,projects_title:`Projects`,skills_title:`Technical Skills`,experience_title:`Work Experience`,education_title:`Education`,certifications_title:`Certifications`,leadership_title:`Leadership & Volunteering`,blog_title:`Field Notes`},es:{home:`Inicio`,about:`Sobre mí`,projects:`Proyectos`,skills:`Habilidades`,experience:`Experiencia`,education:`Educación`,certifications:`Certificaciones`,leadership:`Liderazgo`,blog:`Blog`,writing:`Escritos`,now:`Ahora`,colophon:`Colofón`,bookshelf:`Biblioteca`,lights:`Luces off/on`,close:`Cerrar ESC`,back_home:`Volver al Inicio`,see_more:`Ver más`,send:`Enviar`,sending:`Enviando...`,sent_success:`Enviado con éxito`,error_sending:`Error al enviar`,profile_label:`[01] Perfil`,work_label:`[02] Trabajo`,side_projects_label:`[03] Proyectos Propios`,elsewhere_label:`[04] En otros lados`,connect_label:`[05] Contacto`,network_label:`[06] Estado del Pipeline`,skills_label:`[07] Habilidades`,experience_label:`[08] Experiencia`,education_label:`[09] Educación`,certifications_label:`[10] Certificaciones`,leadership_label:`[11] Liderazgo`,blog_label:`[12] Blog`,profile_text:`Soy Analista de Datos y Desarrollador BI, enfocado en transformar conjuntos de datos complejos en información estratégica. Experto en construir pipelines automatizados y dashboards interactivos.`,system_initializing:`INICIALIZANDO_SISTEMA...`,encrypting_session:`ENCRIPTANDO_SESIÓN...`,booting_core:`ARRANCANDO_NÚCLEO...`,loading_ui:`CARGANDO_RECURSOS_UI...`,connecting_grid:`CONECTANDO_A_LA_RED...`,decrypting_bio:`DECRIPTANDO_BIOMETRÍA...`,access_granted:`ACCESO_CONCEDIDO`,visitor_analytics:`ANALÍTICA_VISITANTE`,secure_node:`DATA_WAREHOUSE CONECTADO`,enc_type:`TIPO_ENC: AES-256`,system_secure:`SISTEMA_SEGURO`,name_placeholder:`Nombre`,email_placeholder:`Correo`,message_placeholder:`Mensaje...`,about_title:`Sobre Mí`,about_intro_label:`[01] Perfil`,about_what_label:`[02] Qué hago`,about_fav_label:`[03] Favoritos`,about_text_1:`Soy Jeyson Andrés Mueses, Analista de Datos y Desarrollador BI basado en Ecuador. Actualmente potenciando decisiones a través del análisis estratégico de datos.`,about_text_2:`Traduzco datos crudos en narrativas estratégicas. Creo que cada conjunto de datos cuenta una historia y que la precisión y la claridad son la base de cualquier proyecto exitoso.`,about_text_3:`Trabajo en todo el ciclo de vida de los datos, desde procesos ETL y optimización SQL hasta el diseño de dashboards BI de alto nivel y análisis predictivo.`,projects_title:`Proyectos`,skills_title:`Habilidades Técnicas`,experience_title:`Experiencia Laboral`,education_title:`Educación`,certifications_title:`Certificaciones`,leadership_title:`Liderazgo y Voluntariado`,blog_title:`Notas de Campo`}},p=document.getElementById(`cmdBtn`),m=document.getElementById(`modalOverlay`),h=document.getElementById(`modalTime`),g=document.getElementById(`themeToggle`),_=document.getElementById(`langToggle`),v=document.getElementById(`langText`),y=document.getElementById(`modalThemeToggle`),b=document.getElementById(`modalLangToggle`),x=document.getElementById(`app`),S=localStorage.getItem(`lang`)||`en`,C=window.location.hostname.includes(`github.io`)?`/andruudev-portfolio`:``,w={"/":e,"/about":t,"/skills":s,"/experience":c,"/education":l,"/certifications":u,"/leadership":d,"/writing":r,"/blog":r,"/bookshelf":i,"/now":a,"/colophon":o,"/project/sales-intelligence":()=>n(`sales-intelligence`),"/project/retail-analytics":()=>n(`retail-analytics`)};function T(e){let t=e.startsWith(C)?e:C+e;window.history.pushState({},t,window.location.origin+t),E(),H(),window.scrollTo(0,0)}gsap.registerPlugin(ScrollTrigger);function E(){let e=w[window.location.pathname.replace(C,``)||`/`]||w[`/`],t=document.querySelectorAll(`.transition-column`);gsap.timeline().to(t,{scaleY:1,duration:.6,stagger:.1,ease:`power4.inOut`}).add(()=>{ScrollTrigger.getAll().forEach(e=>e.kill()),x.innerHTML=e(),R(),k(),G(),J(),window.scrollTo(0,0)}).to(t,{scaleY:0,transformOrigin:`bottom`,duration:.6,stagger:.1,ease:`power4.inOut`,delay:.1,onComplete:()=>{O(),D(),gsap.set(t,{transformOrigin:`top`})}})}function D(){document.querySelectorAll(`.avatar, .cmd-btn, .nav-link, .item`).forEach(e=>{e.removeEventListener(`mousemove`,e._magMove),e._magMove=t=>{let{clientX:n,clientY:r}=t,{left:i,top:a,width:o,height:s}=e.getBoundingClientRect(),c=n-(i+o/2),l=r-(a+s/2);gsap.to(e,{x:c*.3,y:l*.3,rotateX:-l*.1,rotateY:c*.1,duration:.3})},e.addEventListener(`mousemove`,e._magMove),e.addEventListener(`mouseleave`,()=>{gsap.to(e,{x:0,y:0,rotateX:0,rotateY:0,duration:.6,ease:`elastic.out(1, 0.3)`})})})}function O(){gsap.to(`#progress-bar`,{scaleX:1,ease:`none`,scrollTrigger:{scrub:.3}}),x.querySelectorAll(`.animate`).forEach(e=>{let t=e.querySelector(`.section-label`);gsap.fromTo(e,{opacity:0,y:30},{opacity:1,y:0,duration:1,ease:`power2.out`,scrollTrigger:{trigger:e,start:`top 85%`,toggleActions:`play none none none`,onEnter:()=>{t&&t.classList.add(`visible`)}},onComplete:()=>{window.lucide&&lucide.createIcons()}})});let e=x.querySelector(`.case-study-hero img`);e&&gsap.to(e,{y:50,ease:`none`,scrollTrigger:{trigger:e,scrub:!0}});let t=x.querySelectorAll(`.chart-bar`);t.length>0&&gsap.to(t,{scaleX:1,duration:1.5,stagger:.2,ease:`power4.out`,scrollTrigger:{trigger:`.chart-container`,start:`top 80%`}})}function k(){document.querySelectorAll(`.nav-link`).forEach(e=>{e.onclick=t=>{let n=e.getAttribute(`href`);n&&(n.startsWith(`/`)||n.startsWith(C))&&(t.preventDefault(),T(n))}}),document.querySelectorAll(`.nav-link-modal`).forEach(e=>{e.onclick=()=>{T(e.getAttribute(`data-path`))}}),document.querySelectorAll(`.section-label`).forEach(e=>{e.onmouseenter=()=>{new A(e).setText(e.textContent)}}),M()}var A=class{constructor(e){this.el=e,this.chars=`!<>-_\\/[]{}—=+*^?#________`,this.update=this.update.bind(this)}setText(e){let t=this.el.innerText,n=Math.max(t.length,e.length),r=new Promise(e=>this.resolve=e);this.queue=[];for(let r=0;r<n;r++){let n=t[r]||``,i=e[r]||``,a=Math.floor(Math.random()*40),o=a+Math.floor(Math.random()*40);this.queue.push({from:n,to:i,start:a,end:o})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),r}update(){let e=``,t=0;for(let n=0,r=this.queue.length;n<r;n++){let{from:r,to:i,start:a,end:o,char:s}=this.queue[n];this.frame>=o?(t++,e+=i):this.frame>=a?((!s||Math.random()<.28)&&(s=this.randomChar(),this.queue[n].char=s),e+=`<span class="dud">${s}</span>`):e+=r}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)}randomChar(){return this.chars[Math.floor(Math.random()*this.chars.length)]}},j={"partner-growth":`/projects/partner-growth.png`,"client-page":`/projects/client-page.png`,"finding-home":`/projects/finding-home.png`,"type-wunderkammer":`/projects/type-wunderkammer.png`};function M(){let e=document.getElementById(`project-preview`);Array.from(document.querySelectorAll(`.item`)).filter(e=>{let t=e.closest(`section`)?.querySelector(`.section-label`)?.textContent.toLowerCase();return t===`work`||t===`side projects`}).forEach(t=>{let n=t.querySelector(`.item-title`);if(!n)return;let r=j[(n.innerText||n.textContent).toLowerCase().trim().replace(/ /g,`-`).replace(/[^\w-]/g,``)]||j[`client-page`];t.addEventListener(`mouseenter`,()=>{e.innerHTML=`<img src="${r}" alt="Preview">`,gsap.to(e,{opacity:1,scale:1,rotate:0,duration:.4,ease:`power2.out`})}),t.addEventListener(`mouseleave`,()=>{gsap.to(e,{opacity:0,scale:.8,rotate:-5,duration:.4,ease:`power2.in`})}),t.addEventListener(`mousemove`,t=>{gsap.to(e,{x:t.clientX+20,y:t.clientY-90,duration:.6,ease:`power3.out`})})})}var N;function P(){N=new Lenis({duration:1.2,easing:e=>Math.min(1,1.001-2**(-10*e)),smoothWheel:!0});function e(t){N.raf(t),requestAnimationFrame(e)}requestAnimationFrame(e)}function F(){let e=document.getElementById(`cursor`),t={x:window.innerWidth/2,y:window.innerHeight/2},n={x:t.x,y:t.y},r=.15;window.addEventListener(`mousemove`,e=>{n.x=e.clientX,n.y=e.clientY}),gsap.ticker.add(()=>{t.x+=(n.x-t.x)*r,t.y+=(n.y-t.y)*r,gsap.set(e,{x:t.x,y:t.y})}),document.addEventListener(`mouseover`,t=>{t.target.closest(`a, button, .nav-link, .modal-item`)&&e.classList.add(`hovering`)}),document.addEventListener(`mouseout`,t=>{t.target.closest(`a, button, .nav-link, .modal-item`)&&e.classList.remove(`hovering`)})}function I(){let e=localStorage.getItem(`theme`)||`light`;document.documentElement.setAttribute(`data-theme`,e)}function L(e){let t=e?.clientX||window.innerWidth/2,n=e?.clientY||window.innerHeight/2,r=Math.hypot(Math.max(t,window.innerWidth-t),Math.max(n,window.innerHeight-n)),i=document.documentElement.getAttribute(`data-theme`)===`light`?`dark`:`light`,a=document.createElement(`div`);a.style.position=`fixed`,a.style.top=`0`,a.style.left=`0`,a.style.width=`100%`,a.style.height=`100%`,a.style.zIndex=`9998`,a.style.pointerEvents=`none`,a.style.backgroundColor=i===`dark`?`#0a0a0a`:`#ffffff`,a.style.clipPath=`circle(0px at ${t}px ${n}px)`,document.body.appendChild(a),gsap.to(a,{clipPath:`circle(${r}px at ${t}px ${n}px)`,duration:.8,ease:`power3.inOut`,onComplete:()=>{document.documentElement.setAttribute(`data-theme`,i),localStorage.setItem(`theme`,i),document.body.removeChild(a)}})}g&&g.addEventListener(`click`,e=>{e.stopPropagation(),L(e),H()});function R(){let e=f[S];document.querySelectorAll(`[data-t]`).forEach(t=>{let n=t.getAttribute(`data-t`);e[n]&&(t.tagName===`INPUT`||t.tagName===`TEXTAREA`?t.placeholder=e[n]:t.innerHTML=e[n])}),v&&(v.textContent=S.toUpperCase())}function z(){S=S===`en`?`es`:`en`,localStorage.setItem(`lang`,S),R(),E()}_&&_.addEventListener(`click`,e=>{e.stopPropagation(),z(),H()}),y&&y.addEventListener(`click`,e=>{e.stopPropagation(),L(e),H()}),b&&b.addEventListener(`click`,e=>{e.stopPropagation(),z(),H()});function B(){let e=new Date().toLocaleTimeString(`en-GB`,{timeZone:`America/Guayaquil`,hour:`2-digit`,minute:`2-digit`,hour12:!0}).toLowerCase();h&&(h.textContent=`Ecuador, ${e}`)}function V(){B(),m.classList.add(`active`),document.body.classList.add(`modal-open`);let e=document.getElementById(`menu-icon`);e&&(e.setAttribute(`data-lucide`,`x`),window.lucide&&lucide.createIcons())}function H(){m.classList.remove(`active`),document.body.classList.remove(`modal-open`);let e=document.getElementById(`menu-icon`);e&&(e.setAttribute(`data-lucide`,`chart-no-axes-gantt`),window.lucide&&lucide.createIcons())}p.addEventListener(`click`,V),m.addEventListener(`click`,e=>{e.target===m&&H()}),window.addEventListener(`keydown`,e=>{let t=e.key.toLowerCase();if((e.metaKey||e.ctrlKey)&&t===`k`&&(e.preventDefault(),m.classList.contains(`active`)?H():V()),e.key===`Escape`&&H(),m.classList.contains(`active`)){if(e.key===`Enter`){let e=Array.from(document.querySelectorAll(`.modal-item`)).filter(e=>e.style.display!==`none`);e.length>0&&e[0].click()}t===`h`&&T(`/`),t===`a`&&T(`/about`),t===`b`&&T(`/bookshelf`),t===`n`&&T(`/writing`),t===`o`&&T(`/now`),t===`c`&&T(`/colophon`),t===`t`&&(L(e),H()),t===`l`&&(z(),H())}});function U(){let e=document.getElementById(`system-preloader`),t=e.querySelector(`.preloader-bar`),n=e.querySelector(`.preloader-status`);gsap.timeline().to(t,{width:`20%`,duration:.4,ease:`power2.inOut`}).add(()=>n.textContent=`BOOTING_CORE_SYSTEM...`).to(t,{width:`40%`,duration:.5,ease:`power2.inOut`,delay:.2}).add(()=>n.textContent=`LOADING_UI_RESOURCES...`).to(t,{width:`65%`,duration:.4,ease:`power2.inOut`}).add(()=>n.textContent=`CONNECTING_TO_GRID...`).to(t,{width:`85%`,duration:.6,ease:`power2.inOut`,delay:.1}).add(()=>n.textContent=`DECRYPTING_BIO_METRICS...`).to(t,{width:`100%`,duration:.3,ease:`power1.out`}).add(()=>n.textContent=`ACCESS_GRANTED`).to(e,{opacity:0,duration:.8,ease:`power4.inOut`,onComplete:()=>{e.style.display=`none`,gsap.fromTo([`.header`,`.footer`,`#menu-wrap`,`#theme-wrap`,`#lang-wrap`],{opacity:0,y:-20},{opacity:1,y:0,duration:1,ease:`power2.out`,stagger:.2})}})}function W(){let e=document.getElementById(`noiseCanvas`);if(!e)return;let t=e.getContext(`2d`),n,r,i=()=>{n=e.width=window.innerWidth,r=e.height=window.innerHeight};window.addEventListener(`resize`,i),i();let a=()=>{let e=t.createImageData(n,r),i=new Uint32Array(e.data.buffer),a=i.length;for(let e=0;e<a;e++)Math.random()<.5&&(i[e]=4278190080);t.putImageData(e,0,0)},o=0,s=()=>{o++,o%2==0&&a(),requestAnimationFrame(s)};s()}function G(){let e=document.getElementById(`contact-form`);e&&e.addEventListener(`submit`,async t=>{t.preventDefault();let n=e.querySelector(`.submit-btn span`),r=n.textContent;n.textContent=`Sending...`;try{if(e.action.includes(`YOUR_FORM_ID`))await new Promise(e=>setTimeout(e,800)),n.textContent=`Sent Successfully`;else{let t=new FormData(e);(await fetch(e.action,{method:`POST`,body:t,headers:{Accept:`application/json`}})).ok?n.textContent=`Sent Successfully`:n.textContent=`Error Sending`}}catch{n.textContent=`Error Sending`}setTimeout(()=>{e.reset(),n.textContent=r},3e3)})}var K=Date.now();window.addEventListener(`mousemove`,e=>{e.clientX,e.clientY});var q=null;function J(){let e=document.getElementById(`live-metrics`),t=document.getElementById(`system-logs`);q&&clearInterval(q);let n=[`CONNECTING_TO_DATA_WAREHOUSE...`,`SYNCING_POWER_BI_DATASETS...`,`QUERY_EXECUTION_SUCCESS [SQL]`,`EXTRACTING_ETL_PIPELINE_LOGS...`,`UPDATING_DASHBOARD_METRICS...`,`ANALYZING_TRAFFIC_PATTERNS...`,`DATABASE_SYNC_SUCCESS [WORK_COLL]`,`REFRESHING_OLAP_CUBES...`,`ESTABLISHING_SECURE_API_CONNECTION`,`SYSTEM_IDLE_NODE_OPTIMIZED`];q=setInterval(()=>{if(!t)return;let e=n[Math.floor(Math.random()*n.length)],r=new Date().toLocaleTimeString(`en-GB`,{hour12:!1,hour:`2-digit`,minute:`2-digit`,second:`2-digit`}),i=document.createElement(`div`);i.className=`log-line`,i.textContent=`[${r}] > ${e}`,t.appendChild(i),t.children.length>12&&t.removeChild(t.firstChild)},1500);let r=()=>{if(e){let t=Math.floor((Date.now()-K)/1e3),n=Math.floor(t/60).toString().padStart(2,`0`),r=(t%60).toString().padStart(2,`0`);window.scrollY||document.documentElement.scrollTop,e.textContent=`T: ${n}:${r} | THRUPT: ${(Math.random()*50+10).toFixed(1)}MB/S | LAT: ${Math.floor(Math.random()*20+5)}MS`}requestAnimationFrame(r)};r()}function Y(){[{wrapId:`menu-wrap`,btnId:`cmdBtn`,innerSelector:`#menu-icon`},{wrapId:`theme-wrap`,btnId:`themeToggle`,innerSelector:`.theme-toggle-inner`},{wrapId:`lang-wrap`,btnId:`langToggle`,innerSelector:`#langText`}].forEach(({wrapId:e,btnId:t,innerSelector:n})=>{let r=document.getElementById(e),i=document.getElementById(t);!r||!i||(r.addEventListener(`mousemove`,e=>{let t=r.getBoundingClientRect(),a=e.clientX-t.left-t.width/2,o=e.clientY-t.top-t.height/2;gsap.to(i,{x:a*.5,y:o*.5,duration:.3,ease:`power2.out`});let s=i.querySelector(n);s&&gsap.to(s,{x:a*.25,y:o*.25,duration:.3,ease:`power2.out`})}),r.addEventListener(`mouseleave`,()=>{gsap.to(i,{x:0,y:0,duration:.9,ease:`elastic.out(1, 0.3)`});let e=i.querySelector(n);e&&gsap.to(e,{x:0,y:0,duration:.9,ease:`elastic.out(1, 0.3)`})}),r.addEventListener(`click`,e=>{t===`cmdBtn`?m.classList.contains(`active`)?H():V():t===`themeToggle`?L(e):t===`langToggle`&&z()}))})}function X(){window.lucide&&lucide.createIcons(),I(),R(),W(),P(),F(),E(),U(),J(),Y(),B(),setInterval(B,6e4)}window.addEventListener(`popstate`,E),document.addEventListener(`DOMContentLoaded`,X),console.log(`Portfolio initialized with High-End Effects.`);