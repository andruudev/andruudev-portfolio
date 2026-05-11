export const HomeView = () => `
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
`;
