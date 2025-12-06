// Mobile Menu Toggle
function renderHeader(info) {
  return `
  <header>
    <div class="navbar container">
    <div class="logo">DM<span class="dot">.</span></div>
      <nav class="nav-links" aria-label="Primary Navigation">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
          <a href="#reviews">Reviews</a>
        <a href="#contact">Contact</a>
      </nav>
      <div class="social-links">
        <a class="social-link" href="${info.social.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn" aria-label="LinkedIn"><img src="images/linkedin_icon.svg" alt="LinkedIn" class="social-img"/></a>
        <a class="social-link" href="${info.social.github}" target="_blank" rel="noopener noreferrer" title="GitHub" aria-label="GitHub"><img src="images/github_icon.svg" alt="GitHub" class="social-img"/></a>
        <a class="social-link" href="mailto:${info.email}" title="Email" aria-label="Email"><img src="images/email_icon.svg" alt="GitHub" class="social-img"/>        </a>
        <a class="social-link" href="${info.social.whatsapp}" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp"><img src="images/whatsapp_icon.svg" alt="WhatsApp" class="social-img"/></a>
      </div>
      <button class="menu-btn" aria-label="Open menu"> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
      </button>
    </div>
    <div class="mobile-menu">
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#projects">Projects</a>
      <a href="#reviews">Reviews</a>
      <a href="#contact">Contact</a>
      <div class="mobile-social-links" style="display:flex;gap:0.75rem;margin-top:1rem;align-items:center;">
         <a class="social-link" href="${info.social.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="images/linkedin_icon.svg" alt="LinkedIn" class="social-img"/></a>
         <a class="social-link" href="${info.social.github}" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="images/github_icon.svg" alt="GitHub" class="social-img"/></a>
         <a class="social-link" href="mailto:${info.email}" title="Email" aria-label="Email"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M4 4h16v12H4z"></path><path d="M4 8l8 5 8-5"></path></svg></a>
         <a class="social-link" href="${info.social.whatsapp}" target="_blank" rel="noopener noreferrer" title="WhatsApp" aria-label="WhatsApp"><img src="images/whatsapp_icon.svg" alt="WhatsApp" class="social-img"/></a>
      </div>
    </div>
  </header>
  `;
}

function renderHero(info) {
  return `
    <section id="about" aria-label="About">
      <div class="hero-bg">
        <canvas id="particleCanvas" class="hero-particles" aria-hidden="true"></canvas>
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
      </div>
      <div class="container hero-content">
        <span class="hero-greeting">Hello, I'm</span>
        <h1 class="hero-name">${info.name}</h1>
        <div class="hero-title">${info.title}</div>
        <div class="hero-bio"><p>${info.bio}</p></div>
        <div class="hero-cta">
          <div class="hero-cta-row">
            <a class="cta-btn outline small" href="#projects">View Projects</a>
            <a class="cta-btn primary small" href="#contact">Contact Me</a>
          </div>
          <div class="hero-social">
            <a class="social-icon-btn" href="${info.social.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn"><img src="images/linkedin_icon.svg" alt="LinkedIn" class="social-img"/></a>
            <a class="social-icon-btn" href="${info.social.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub"><img src="images/github_icon.svg" alt="GitHub" class="social-img"/></a>
            <a class="social-icon-btn" href="${info.social.whatsapp}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp"><img src="images/whatsapp_icon.svg" alt="WhatsApp" class="social-img"/></a>
            <a class="social-icon-btn" href="mailto:${info.email}" target="_blank" rel="noopener noreferrer" aria-label="Email" title="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M4 4h16v12H4z"></path><path d="M4 8l8 5 8-5"></path></svg>
            </a>
          </div>
        </div>
      </div>
      <div class="scroll-indicator" aria-hidden>
        <svg class="scroll-mouse" width="28" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden>
          <rect x="6" y="2" width="12" height="18" rx="6"></rect>
          <path d="M12 6v3" />
        </svg>
      </div>
    </section>
  `;
}

function renderSkills(skills) {
  let html = `<section id="skills">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Skills</span>
        <h2 class="section-title">What I Do</h2>
      </div>
      <div class="skills-grid">`;
  skills.forEach(skill => {
    const icon = skill.icon || 'images/python_icon.svg';
    html += `
      <div class="skill-card">
        <div class="skill-icon"><img class="skill-img" src="${icon}" alt="${skill.name} icon"/></div>
        <div class="skill-name">${skill.name}</div>
        <div class="skill-description">${skill.description}</div>
        `;
    if (skill.details && Array.isArray(skill.details)) {
      html += `<ul class="skill-list">`;
      skill.details.forEach(item => {
        html += `<li class="skill-item">${item}</li>`;
      });
      html += `</ul>`;
    }
    html += `
      </div>`;
  });
  html += `</div></div></section>`;
  return html;
}

function renderProjects(categories) {
  let html = `<section id="projects"><div class="container"><div class="section-header"><span class="section-label">Projects</span><h2 class="section-title">Recent Work</h2></div><p class="projects-intro">A collection of projects showcasing my experience in Power BI, machine learning, Python, automation, web scraping, and more.</p><div class="projects-list">`;
  categories.forEach((category, catIndex) => {
    html += `<div class="project-category">
      <h3 class="category-title">${category.name}</h3>
      <div class="carousel">
        <button class="carousel-prev" aria-label="Previous">◀</button>
        <div class="carousel-track">`;
    category.projects.forEach((project, i) => {
      const src = project.image || '';
      html += `<div class="carousel-slide">
          <article class="project-card">
            <div class="project-image"><img data-src="${src}" alt="${project.title}"></div>
            <div class="project-content">
              <div class="project-title"><span class="title-text">${project.title}</span><a class="project-external-link" href="${project.link}" target="_blank" rel="noopener">↗</a></div>
              <div class="project-description">${project.description}</div>
              <div class="project-tags">`;
      project.tags.forEach(tag => {
        html += `<span class="project-tag">${tag}</span>`;
      });
      html += `</div></div></article></div>`;
    });
    html += `</div><button class="carousel-next" aria-label="Next">▶</button>`;
    // Progress dots
    html += `<div class="carousel-progress" style="display:flex;gap:.5rem;margin-top:1rem;justify-content:center;">`;
    
    const limit_dots = category.projects.length;

    for (let dotIndex = 0; dotIndex < limit_dots; dotIndex++) {
      html += `<button class="progress-dot" aria-label="Go to slide ${dotIndex + 1}"></button>`;
    }
    
    // category.projects.forEach((p, dotIndex) => {
    //   html += `<button class="progress-dot" aria-label="Go to slide ${dotIndex + 1}"></button>`;
    // });
    html += `</div></div></div>`;
  });
  
  html += `</div></div></section>`;
  return html;
}

function renderContact(info) {
  return `
    <section id="contact">
      <div class="container">
        <div class="contact-header">
          <span class="section-label">Contact</span>
          <h2 class="section-title">Work With Me</h2>
        </div>
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Get in touch</h3>
            <div class="contact-items">
              <div class="contact-item"><div class="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M4 4h16v12H4z"></path><path d="M4 8l8 5 8-5"></path></svg></div><div class="contact-detail"><span class="contact-label">Email</span><a class="contact-value" href="mailto:${info.email}">${info.email}</a></div></div>
              <div class="contact-item"><div class="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.11 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72c.11 1 .7 2.2 1.75 3.25 1.05 1.05 2 1.64 3 1.75.71.09 1.5-.1 2 0v3a2 2 0 0 1-2 2H10"></path></svg></div><div class="contact-detail"><span class="contact-label">Phone</span><a class="contact-value" href="tel:${info.phone}">${info.phone}</a></div></div>
              <div class="contact-item"><div class="contact-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden><path d="M16 11c0 4-4 8-4 8s-4-4-4-8a4 4 0 1 1 8 0z"></path><circle cx="12" cy="11" r="1"></circle></svg></div><div class="contact-detail"><span class="contact-label">Location</span><div class="contact-value">${info.location}</div></div></div>
            </div>
            <div class="contact-social"><p>Connect with me</p><div class="social-icons"><a class="social-icon-btn" href="${info.social.linkedin}" target="_blank" rel="noopener noreferrer" title="LinkedIn"><img src="images/linkedin_icon.svg" alt="LinkedIn" class="social-img"/></a><a class="social-icon-btn" href="${info.social.github}" target="_blank" rel="noopener noreferrer" title="GitHub"><img src="images/github_icon.svg" alt="GitHub" class="social-img"/></a><a class="social-icon-btn" href="${info.social.whatsapp}" target="_blank" rel="noopener noreferrer" title="WhatsApp"><img src="images/whatsapp_icon.svg" alt="WhatsApp" class="social-img"/></a></div></div>
              <div class="contact-cta moved-cta">
                <h3>Let's build something</h3>
                <p>If you'd like to work together or discuss a project, reach out and we can collaborate to find the right solution.</p>
                <div class="cta-buttons"><a href="mailto:${info.email}" class="cta-btn primary">Email me</a><a href="${info.social.linkedin}" class="cta-btn outline">Message on LinkedIn</a></div>
              </div>
          </div>
          <div class="contact-form-container">
            <form id="contact-form" class="contact-form" method="POST" action="https://api.web3forms.com/submit" aria-label="Contact form">
              <div class="form-row">
                <div class="form-field"><label for="name">Name</label><input type="text" name="name" id="name" placeholder="Name" required/></div>
                <div class="form-field"><label for="email">Email</label><input type="email" name="email" id="email" placeholder="Email" required/></div>
              </div>
              <div class="form-row">
                <div class="form-field" style="grid-column: 1 / -1"><label for="category">Subject</label><select name="category" id="category"><option value="">- Subject -</option><option value="Project offer">Project offer</option><option value="Job offer">Job offer</option><option value="Connection and networking">Connection and networking</option><option value="Mentorship">Mentorship</option></select></div>
              </div>
              <div class="form-row">
                <div class="form-field" style="grid-column: 1 / -1"><label for="message">Message</label><textarea name="message" id="message" placeholder="Enter your message" rows="6" required></textarea></div>
              </div>
              <input type="hidden" name="access_key" value="b08991d1-c9e3-4354-8d3c-969dfdd0643d" />
              <input type="hidden" name="subject" value="New Submission from my portfolio website" />
              <input type="hidden" name="from_name" value="Get in touch Portfolio website" />
              <div class="form-actions"><input type="submit" value="Send Message" class="primary"/><input type="reset" value="Reset" /></div>
              <div class="form-result" role="status" aria-live="polite"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderReviews(reviews) {
  if (!reviews || !Array.isArray(reviews) || reviews.length === 0) return '';

  function starHtml(n) {
    const max = 5;
    let html = '';
    for (let i = 0; i < max; i++) {
      html += i < n ? '<span aria-hidden="true">★</span>' : '<span aria-hidden="true">☆</span>';
    }
    return html;
  }

  let html = `
    <section id="reviews">
      <div class="container">
        <div class="section-header">
          <span class="section-label">Client Reviews</span>
          <h2 class="section-title">What Clients Say</h2>
        </div>
        <div class="reviews-list">
          <div class="carousel">
            <button class="carousel-prev" aria-label="Previous">◀</button>
            <div class="carousel-track">
  `;

  reviews.forEach((r) => {
    // Display ordered: name, location, service, text, stars (stars last)
    const location = r.location ? `<div class="review-location">${r.location}</div>` : '';
    const service = r.service || r.projectName || '';
    html += `<div class="carousel-slide">
      <article class="review-card">
        <div class="review-header">
          <div class="review-client">${r.clientName}</div>
          ${location}
        </div>
        <div class="review-project">${service}</div>
        <div class="review-text">${r.review}</div>
        <div class="review-stars" aria-label="${r.stars} out of 5 stars">${starHtml(r.stars)}</div>
      </article>
    </div>`;
  });

  html += `</div><button class="carousel-next" aria-label="Next">▶</button>`;

  html += `<div class="carousel-progress" style="display:flex;gap:.5rem;margin-top:1rem;justify-content:center;">`;
  for (let i=0;i<reviews.length;i++) html += `<button class="progress-dot" aria-label="Go to slide ${i+1}"></button>`;
  html += `</div></div></div></section>`;
  return html;
}

function renderFooter(info) {
  const year = new Date().getFullYear();
  return `
    <footer>
      <div class="container footer-content">
        <div class="footer-logo">DM<span class="dot">.</span></div>
        <div class="footer-copyright">© ${year} ${info.name}. All rights reserved.</div>
        <div class="footer-nav"><a href="#about">About</a><a href="#projects">Projects</a><a href="#contact">Contact</a></div>
      </div>
    </footer>
  `;
}

function renderSite() {
  const root = document.getElementById('root');
  if (!root) return;
  const info = window.personalInfo || { name: 'Your Name', title: '', bio: '' };
  const skills = window.skills || [];
  const categories = window.projectCategories || [];

  root.innerHTML = '';
  root.insertAdjacentHTML('beforeend', renderHeader(info));
  root.insertAdjacentHTML('beforeend', renderHero(info));
  root.insertAdjacentHTML('beforeend', renderSkills(skills));
  root.insertAdjacentHTML('beforeend', renderProjects(categories));
  const reviews = window.reviews || [];
  root.insertAdjacentHTML('beforeend', renderReviews(reviews));
  root.insertAdjacentHTML('beforeend', renderContact(info));
  root.insertAdjacentHTML('beforeend', renderFooter(info));
}

document.addEventListener('DOMContentLoaded', function() {
  // Render all site sections using `data.js` globals
  renderSite();

  // Initialize hero particle animation (if present)
  // initHeroParticles();

  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('open');
      // Toggle between hamburger and X icon
      const svg = menuBtn.innerHTML;
      if (mobileMenu.classList.contains('open')) {
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
      } else {
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
      }
    });

    // Close menu when clicking on a nav link
    const mobileNavLinks = mobileMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.remove('open');
        menuBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>';
      });
    });
  }
});

// Particle animation in hero background
function initHeroParticles() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;
  // Respect user preference for reduced motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const canvas = heroBg.querySelector('#particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let dpr = Math.max(window.devicePixelRatio || 1, 1);
  let particles = [];
  const mouse = { x: null, y: null, radius: 90 };
  let animationId = null;

  function resizeCanvas() {
    const rect = heroBg.getBoundingClientRect();
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  class Particle {
    constructor(w, h) {
      this.x = Math.random() * w;
      this.y = Math.random() * h;
      this.vx = Math.random() * 1.6 - 0.8;
      this.vy = Math.random() * 1.6 - 0.8;
      this.baseRadius = 2.5;
      this.radius = this.baseRadius;
      this.maxRadius = 6;
      this.connectDistance = 140;
      this.w = w;
      this.h = h;
      this._hueOffset = Math.random() * 10; // hue variation
      this._pulseOffset = Math.random() * 10; // pulse variation
    }
    draw(time) {
      // glow via radial gradient (techy look)
      const hue = 265 + Math.sin(time / 900 + this._hueOffset) * 8; // subtle hue shift
      const alpha = 0.6;
      const color = `hsla(${Math.floor(hue)},70%,60%,${alpha})`;
      const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.radius * 4);
      g.addColorStop(0, `${color}`);
      g.addColorStop(0.12, `hsla(${Math.floor(hue)},70%,60%,${alpha * 0.75})`);
      g.addColorStop(0.45, `hsla(${Math.floor(hue)},70%,60%,${alpha * 0.18})`);
      g.addColorStop(1, `hsla(${Math.floor(hue)},70%,60%,0)`);
      // add a soft glow
      ctx.save();
      ctx.shadowBlur = 12;
      ctx.shadowColor = `hsla(${Math.floor(hue)},70%,60%,${alpha * 0.9})`;
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
      ctx.restore();
    }
    update(mouse) {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > this.w) this.vx *= -1;
      if (this.y < 0 || this.y > this.h) this.vy *= -1;
      if (mouse.x !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          this.radius = this.maxRadius;
          // slight repel with a twist for techy motion
          const repulse = (mouse.radius - distance) / mouse.radius;
          this.vx += (dx / distance) * -0.02 * repulse;
          this.vy += (dy / distance) * -0.02 * repulse;
          this.x -= dx * 0.02;
          this.y -= dy * 0.02;
        } else this.radius = this.baseRadius + Math.sin(Date.now() / 800 + this._pulseOffset) * 0.7;
      }
    }
  }

  function setupParticles() {
    const rect = heroBg.getBoundingClientRect();
    const area = rect.width * rect.height;
    const count = Math.max(18, Math.min(110, Math.floor(area / 70000)));
    particles = [];
    for (let i = 0; i < count; i++) particles.push(new Particle(rect.width, rect.height));
  }

  function onMouseMove(e) {
    const rect = heroBg.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouse.x = x;
    mouse.y = y;
  }
  function onMouseLeave() { mouse.x = null; mouse.y = null; }

    function animateParticles() {
    const now = performance.now();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const rect = heroBg.getBoundingClientRect();
    // Use lighter composite to make colors glow together
    ctx.globalCompositeOperation = 'lighter';
    particles.forEach((p) => {
      p.update(mouse);
      p.draw(now);
    });
    // Connect (draw lines with normal composite so they don't over-brighten)
    ctx.globalCompositeOperation = 'source-over';
    particles.forEach((p1, idx) => {
      for (let j = idx + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < p1.connectDistance) {
          ctx.beginPath();
          const lineAlpha = Math.min(0.3, 0.22 * (1 - dist / p1.connectDistance));
          ctx.strokeStyle = `hsla(265,70%,60%,${lineAlpha})`;
          ctx.lineWidth = 1.25;
          ctx.shadowBlur = 6;
          ctx.shadowColor = `hsla(265,70%,60%,${lineAlpha})`;
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.shadowBlur = 0;
          ctx.closePath();
        }
      }
    });
    animationId = requestAnimationFrame(animateParticles);
  }

  function start() {
    resizeCanvas();
    setupParticles();
    if (animationId) cancelAnimationFrame(animationId);
    animateParticles();
  }

  function stop() {
    if (animationId) cancelAnimationFrame(animationId);
    animationId = null;
  }

  // Resize and events
  window.addEventListener('resize', () => {
    resizeCanvas();
    setupParticles();
  });
  heroBg.addEventListener('mousemove', onMouseMove);
  heroBg.addEventListener('mouseleave', onMouseLeave);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stop(); else if (!animationId) start();
  });

  // Start
  start();
}

// Carousel Navigation
class Carousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.track = carouselElement.querySelector('.carousel-track');
    this.slides = Array.from(this.track.querySelectorAll('.carousel-slide'));
    this.prevBtn = carouselElement.querySelector('.carousel-prev');
    this.nextBtn = carouselElement.querySelector('.carousel-next');
    this.progressDots = Array.from(carouselElement.querySelectorAll('.progress-dot'));
    this.currentIndex = 0;

    // Autoplay state
    this.autoplayInterval = 7000; // ms
    this.autoplayTimer = null;
    this.autoplayRestartDelay = 7000; // ms
    this.isAutoplaying = false;
    this.isPaused = false;
    this._restartTimeout = null;

    // Scroll state
    this.isScrolling = false;
    this._scrollTimeout = null;

    // Store reference for external access
    carouselElement._carouselInstance = this;

    // Setup event listeners
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.handlePrevClick());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.handleNextClick());
    
    // Use event delegation for progress dots to handle dynamic updates
    const progressContainer = carouselElement.querySelector('.carousel-progress');
    if (progressContainer) {
      progressContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('progress-dot')) {
          const dots = Array.from(progressContainer.querySelectorAll('.progress-dot'));
          const index = dots.indexOf(e.target);
          if (index !== -1) this.handleDotClick(index);
        }
      });
    }

    // Autoplay pause/resume
    this.carousel.addEventListener('mouseenter', () => this.pauseAutoplay());
    this.carousel.addEventListener('mouseleave', () => this.resumeAutoplay());
    this.carousel.addEventListener('focusin', () => this.pauseAutoplay());
    this.carousel.addEventListener('focusout', () => this.resumeAutoplay());

    // Tab visibility
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) this.pauseAutoplay();
      else this.resumeAutoplay();
    });

    // Track scroll to update progress
    this.track.addEventListener('scroll', () => this.onScroll());

    // Pause when hovering slides (helpful when cards have their own content)
    this.slides.forEach(slide => {
      if (!slide._hoverBound) {
        slide.addEventListener('mouseenter', () => this.pauseAutoplay());
        slide.addEventListener('mouseleave', () => this.resumeAutoplay());
        slide._hoverBound = true;
      }
    });

    // Initialize layout and start autoplay
    setTimeout(() => {
      this.updateLayout();
      this.goToSlide(this.currentIndex);
      this.startAutoplay();
    }, 50);
  }

  // Handle prev button click
  handlePrevClick() {
    const len = this.slides.length;
    const newIndex = (this.currentIndex - 1 + len) % len;
    this.goToSlide(newIndex);
    this.pauseAutoplayBriefly();
  }

  // Handle next button click
  handleNextClick() {
    const len = this.slides.length;
    const newIndex = (this.currentIndex + 1) % len;
    this.goToSlide(newIndex);
    this.pauseAutoplayBriefly();
  }

  // Handle progress dot click
  handleDotClick(index) {
    this.goToSlide(index);
    this.pauseAutoplayBriefly();
  }

  // Pause autoplay briefly after user interaction
  pauseAutoplayBriefly() {
    clearTimeout(this._restartTimeout);
    this.pauseAutoplay();
    if (this.autoplayRestartDelay > 0) {
      this._restartTimeout = setTimeout(() => {
        if (!this.isPaused) this.startAutoplay();
      }, this.autoplayRestartDelay);
    }
  }

  // Start autoplay timer
  startAutoplay() {
    if (!this.autoplayInterval || this.autoplayInterval <= 0) return;
    if (this.slides.length <= 1) return;
    if (this.autoplayTimer) return; // Already running
    if (this.isPaused) return; // Don't start if paused

    this.isAutoplaying = true;
    this.autoplayTimer = setInterval(() => {
      const len = this.slides.length ;
      const newIndex = (this.currentIndex + 1) % len;
      this.goToSlide(newIndex);
    }, this.autoplayInterval);
  }

  // Pause autoplay (keep state so resume can restart it)
  pauseAutoplay() {
    this.isPaused = true;
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = null;
    }
  }

  // Resume autoplay
  resumeAutoplay() {
    this.isPaused = false;
    if (this.isAutoplaying && !this.autoplayTimer) {
      this.startAutoplay();
    }
  }

  // Navigate to a specific slide
  goToSlide(index) {
    if (index < 0 || index >= this.slides.length) return;

    this.currentIndex = index;
    this.updateActiveDot();

    const slide = this.slides[index];
    if (!slide) return;

    // Scroll the slide into view by using the native scrollIntoView or simple scroll calculation
    // Use slide.offsetLeft as the target scroll position (left-aligned)
    const scrollLeft = slide.offsetLeft;

    // Mark that we're scrolling to prevent onScroll from updating currentIndex
    this.isScrolling = true;
    clearTimeout(this._scrollTimeout);

    this.track.scrollTo({ left: scrollLeft, behavior: 'smooth' });

    // Clear scrolling flag after smooth scroll completes
    this._scrollTimeout = setTimeout(() => {
      this.isScrolling = false;
    }, 700);
  }

  // Update active progress dot
  updateActiveDot() {
    this.progressDots.forEach((dot, i) => {
      if (i === this.currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Handle scroll events to detect which slide is visible
  onScroll() {
    if (this.isScrolling) return; // Ignore during programmatic scroll

    if (this.slides.length === 0) return;

    const scrollLeft = this.track.scrollLeft;
    const trackCenter = scrollLeft + this.track.clientWidth / 2;

    // Find the slide closest to the center
    let nearest = 0;
    let minDistance = Infinity;

    this.slides.forEach((slide, i) => {
      const slideCenter = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(slideCenter - trackCenter);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = i;
      }
    });

    // Only update if the detected slide changed
    if (nearest !== this.currentIndex) {
      this.currentIndex = nearest;
      this.updateActiveDot();
    }
  }

  // Update layout and measurements
  updateLayout() {
    this.slides = Array.from(this.track.querySelectorAll('.carousel-slide'));
    this.progressDots = Array.from(this.carousel.querySelectorAll('.progress-dot'));
    this.updateActiveDot();

    // Hide progress dots container if there are 2 or fewer slides
    const progressContainer = this.carousel.querySelector('.carousel-progress');
    if (progressContainer) {
      if (this.slides.length <= 2) {
        progressContainer.style.display = 'none';
      } else {
        progressContainer.style.display = 'flex';
      }
    }

    // Re-bind image load handlers for lazy-loaded images
    this.carousel.querySelectorAll('img[data-src], img').forEach(img => {
      if (!img._carouselBound) {
        img.addEventListener('load', () => {
          // Recompute layout when images load to account for layout shifts
          setTimeout(() => this.updateLayout(), 50);
        });
        img._carouselBound = true;
      }
    });

    // Re-bind slide hover listeners so new slides pause autoplay on hover
    this.slides.forEach(slide => {
      if (!slide._hoverBound) {
        slide.addEventListener('mouseenter', () => this.pauseAutoplay());
        slide.addEventListener('mouseleave', () => this.resumeAutoplay());
        slide._hoverBound = true;
      }
    });
  }
}

// Initialize all carousels
document.addEventListener('DOMContentLoaded', function() {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach(carousel => {
    new Carousel(carousel);
  });

  // Recompute carousel layout on resize for proper wrapping behavior
  window.addEventListener('resize', () => {
    document.querySelectorAll('.carousel').forEach(carousel => {
      const instance = carousel._carouselInstance;
      if (instance && typeof instance.updateLayout === 'function') instance.updateLayout();
    });
  });

  // Stagger animation for skill cards
  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.animationDelay = `${0.1 + index * 0.05}s`;
  });

  // Stagger animation for project categories
  const projectCategories = document.querySelectorAll('.project-category');
  projectCategories.forEach((category, index) => {
    category.style.animationDelay = `${0.1 + index * 0.1}s`;
  });

  // Smooth scroll for anchor links (setup after DOM is created)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Image lazy loading with Intersection Observer
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
  }
});

// NOTE: Smooth scroll and lazy-loading are set up after rendering the site inside DOMContentLoaded to ensure DOM elements exist

// Scroll indicator
document.addEventListener('DOMContentLoaded', function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        scrollIndicator.style.display = 'none';
      } else {
        scrollIndicator.style.display = 'block';
      }
    });
  }
});

// Contact form submission handling
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  const formResult = contactForm.querySelector('.form-result');

  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      return;
    }
    const submitBtn = contactForm.querySelector('input[type="submit"]');
    submitBtn.disabled = true;
    formResult.textContent = 'Sending...';

    fetch(contactForm.action, {
      method: 'POST',
      body: new FormData(contactForm)
    }).then(res => res.json()).then(data => {
      if (data.success || data.success === undefined) {
        formResult.textContent = 'Thank you! Your message has been sent.';
        formResult.classList.remove('error');
        contactForm.reset();
      } else {
        formResult.textContent = data.message || 'There was an issue sending your message.';
        formResult.classList.add('error');
      }
    }).catch(err => {
      formResult.textContent = 'Error sending message. Please try again later.';
      formResult.classList.add('error');
    }).finally(() => { submitBtn.disabled = false; setTimeout(() => formResult.textContent = '', 6000); });
  });
});
