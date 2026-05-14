export const WritingView = () => {
  const posts = [
    { title: "2026 in review", date: "28 Dec 2026", tag: "Thoughts" },
    { title: "Creative development with GSAP", date: "21 Oct 2025", tag: "Code" },
    { title: "The product design 'polish' checklist", date: "22 Jul 2025", tag: "Design" },
    { title: "The art of saying 'no'", date: "8 Jun 2025", tag: "Process" },
    { title: "Stop pursuing perfection", date: "14 Apr 2025", tag: "Process" },
    { title: "Shipping 'fast'", date: "16 Feb 2025", tag: "Process" }
  ];

  return `
    <section class="animate">
      <span class="section-label" data-t="blog_label">[12] Blog</span>
      <h2 style="font-family: var(--font-sans); font-size: 24px; margin-bottom: 24px;" data-t="blog_title">Field Notes</h2>
      <div class="items-list">
        ${posts.map(post => `
          <a href="#" class="item">
            <span class="item-title"><i data-lucide="book-text"></i> \${post.title}</span>
            <span class="item-meta">\${post.date}</span>
          </a>
        `).join('')}
      </div>
    </section>

    <div style="margin-top: 40px;">
      <a href="/" class="nav-link" style="color: var(--text-secondary); font-family: var(--font-mono); font-size: 13px; text-decoration: none;" data-t="back_home"><i data-lucide="arrow-left"></i> Back to Home</a>
    </div>
  `;
};
