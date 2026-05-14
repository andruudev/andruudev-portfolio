export const BookshelfView = () => `
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
`;
