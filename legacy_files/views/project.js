export const ProjectView = (projectId) => {
  const projects = {
    'partner-growth': {
      title: 'Partner Product Led Growth',
      client: 'Pleo',
      description: 'Building foundations of the partner funnel. This project involved deep research into partner needs and the creation of a seamless onboarding flow.',
      role: 'Lead Designer',
      year: '2024',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
      stats: [
        { label: 'Conversion Rate', value: '85%' },
        { label: 'User Satisfaction', value: '92%' },
        { label: 'Onboarding Time', value: '-40%' }
      ]
    },
    'client-page': {
      title: 'Client Page 2.0',
      client: 'Pleo',
      description: 'Easy client management, all in one place. We redesigned the core dashboard to improve discoverability and reduce friction for power users.',
      role: 'Product Designer',
      year: '2023',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
      stats: [
        { label: 'Daily Active Users', value: '+120%' },
        { label: 'Task Completion', value: '98%' },
        { label: 'Support Tickets', value: '-25%' }
      ]
    }
  };

  const project = projects[projectId] || { title: 'Project Not Found', client: '', description: '', image: '', stats: [] };

  return `
    <section class="animate">
      <span class="section-label">${project.client} / ${project.year}</span>
      <h1 style="font-size: clamp(2rem, 5vw, 4rem); line-height: 1.1; margin-bottom: 32px;">${project.title}</h1>
      
      <div class="case-study-hero animate" style="width: 100%; height: 60vh; border-radius: 12px; overflow: hidden; margin-bottom: 40px;">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>

      <div class="content-text" style="max-width: 600px;">
        <p style="font-size: 18px; line-height: 1.6; color: var(--text-color);">${project.description}</p>
      </div>
    </section>

    <section class="animate">
      <span class="section-label">Data Impact</span>
      <div class="chart-container">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 24px;">
          ${(project.stats || []).map(stat => `
            <div>
              <div style="font-family: var(--font-mono); font-size: 12px; color: var(--text-secondary); margin-bottom: 8px;">${stat.label}</div>
              <div style="font-size: 24px; font-weight: 500;">${stat.value}</div>
              <div class="chart-bar" style="width: ${stat.value.includes('+') || stat.value.includes('-') ? '100%' : stat.value}"></div>
            </div>
          `).join('')}
        </div>
      </div>
    </section>

    <section class="animate">
      <div style="display: flex; gap: 40px;">
        <div>
          <span class="section-label">Role</span>
          <p>${project.role}</p>
        </div>
        <div>
          <span class="section-label">Year</span>
          <p>${project.year}</p>
        </div>
      </div>
    </section>

    <div style="margin-top: 80px; padding-bottom: 40px;">
      <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;">
        <i data-lucide="arrow-left"></i> Back to Home
      </a>
    </div>
  `;
};
