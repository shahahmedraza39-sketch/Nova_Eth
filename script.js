/**
 * NOVA_ETH - WEB3 COLLAB MANAGER PORTFOLIO
 * Script.js - Futuristic Canvas Particles, Smooth Dynamics & Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. Futuristic Web3 Network Particle Canvas
  // =========================================================================
  const canvas = document.getElementById('networkCanvas');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Particle nodes
    const particleCount = Math.min(width > 768 ? 45 : 22, 60);
    const particles = [];
    const maxDistance = 140;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.8 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(53, 199, 232, 0.7)';
        ctx.shadowColor = '#35C7E8';
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animateNetwork() {
      ctx.clearRect(0, 0, width, height);

      // Draw lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(53, 199, 232, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Update and draw particles
      particles.forEach(p => {
        p.update();
        p.draw();
      });

      requestAnimationFrame(animateNetwork);
    }

    animateNetwork();

    // Resize handler
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }, { passive: true });
  }

  // =========================================================================
  // 2. Navigation Smooth Scrolling & Active State Observer
  // =========================================================================
  const navLinks = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('section[id]');
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  function closeMobileMenu() {
    if (navMenu && navMenu.classList.contains('open')) {
      navMenu.classList.remove('open');
      if (menuToggle) menuToggle.classList.remove('active');
    }
  }

  if (menuToggle) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      menuToggle.classList.toggle('active', isOpen);
    });
  }

  // Smooth scroll
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          closeMobileMenu();
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          window.scrollTo({
            top: offsetTop - 85,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Track active section on scroll
  function updateActiveNavigation() {
    const scrollPosition = window.pageYOffset + 180;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavigation, { passive: true });
  updateActiveNavigation();

  // Close mobile nav on click outside
  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('open')) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        closeMobileMenu();
      }
    }
  });

  // =========================================================================
  // 3. Toast Notification System
  // =========================================================================
  const toastContainer = document.getElementById('toastContainer');

  function showToast(message, icon = '⚡') {
    if (!toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span class="toast-text">${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('toast-fadeout');
      toast.addEventListener('animationend', () => {
        toast.remove();
      });
    }, 3200);
  }

  // =========================================================================
  // 4. Discord Tag Copy Utility
  // =========================================================================
  function copyDiscordTag(discordHandle) {
    const textToCopy = discordHandle || '@nova_3th';

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Discord tag copied: ${textToCopy}`, '🎮');
      }).catch(() => {
        fallbackCopy(textToCopy);
      });
    } else {
      fallbackCopy(textToCopy);
    }
  }

  function fallbackCopy(text) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    tempInput.style.position = 'fixed';
    tempInput.style.left = '-9999px';
    document.body.appendChild(tempInput);
    tempInput.focus();
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Discord tag copied: ${text}`, '🎮');
    } catch (err) {
      console.error('Copy failed', err);
    }
    document.body.removeChild(tempInput);
  }

  // Hero Discord Copy Button
  const heroDiscordBtn = document.getElementById('heroDiscordBtn');
  if (heroDiscordBtn) {
    heroDiscordBtn.addEventListener('click', () => {
      copyDiscordTag(heroDiscordBtn.getAttribute('data-discord'));
    });
  }

  // Contact Discord Button
  const contactDiscordBtn = document.getElementById('contactDiscordBtn');
  if (contactDiscordBtn) {
    contactDiscordBtn.addEventListener('click', () => {
      copyDiscordTag(contactDiscordBtn.getAttribute('data-discord'));
    });
  }

  // Footer Discord Button
  const footerDiscordBtn = document.getElementById('footerDiscordBtn');
  if (footerDiscordBtn) {
    footerDiscordBtn.addEventListener('click', () => {
      copyDiscordTag(footerDiscordBtn.getAttribute('data-discord'));
    });
  }

  // =========================================================================
  // 5. Expandable 100+ Collaborations Showcase
  // =========================================================================
  const toggleMoreCollabsBtn = document.getElementById('toggleMoreCollabsBtn');
  const moreCollabsContainer = document.getElementById('moreCollabsContainer');
  const toggleCollabsBtnText = document.getElementById('toggleCollabsBtnText');
  const toggleCollabsIcon = document.getElementById('toggleCollabsIcon');

  if (toggleMoreCollabsBtn && moreCollabsContainer) {
    toggleMoreCollabsBtn.addEventListener('click', () => {
      const isHidden = moreCollabsContainer.classList.contains('hidden');

      if (isHidden) {
        moreCollabsContainer.classList.remove('hidden');
        if (toggleCollabsBtnText) toggleCollabsBtnText.textContent = 'Show Less Collaborations';
        if (toggleCollabsIcon) toggleCollabsIcon.style.transform = 'rotate(180deg)';
      } else {
        moreCollabsContainer.classList.add('hidden');
        if (toggleCollabsBtnText) toggleCollabsBtnText.textContent = 'View More Collaborations';
        if (toggleCollabsIcon) toggleCollabsIcon.style.transform = 'rotate(0deg)';
      }
    });
  }

  // =========================================================================
  // 6. Proof of Work Lightbox Modal
  // =========================================================================
  const proofModal = document.getElementById('proofModal');
  const proofModalTitle = document.getElementById('proofModalTitle');
  const proofModalBody = document.getElementById('proofModalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalDismissBtn = document.getElementById('modalDismissBtn');
  const proofCards = document.querySelectorAll('.proof-card');

  const proofDetailsData = {
    confirmations: {
      title: "Project Collaboration Confirmation",
      content: `
        <div class="modal-detail-panel">
          <p><strong>Verification Type:</strong> Direct Project Team Communication & Term Sheet</p>
          <p><strong>Allocations Secured:</strong> Guaranteed (GTD) and First-Come-First-Serve (FCFS) mint slots.</p>
          <p><strong>Campaign Scope:</strong> Verified community whitelist submission via Alpha Core, Heroes Alpha, Elite Vision, and Elite Alpha networks.</p>
          <p style="margin-top: 0.8rem; font-size: 0.85rem; color: #A8D0E0;">
            <em>All partner projects receive targeted community exposure, verified wallet submissions, and cross-channel engagement metrics.</em>
          </p>
        </div>
      `
    },
    allocations: {
      title: "WL / GTD Allocation Sheet Log",
      content: `
        <div class="modal-detail-panel">
          <p><strong>Verification Type:</strong> Secure Allocation Distribution Spreadsheet</p>
          <p><strong>Data Sanitization:</strong> Wallet hashes truncated (0x...xxxx) for member security.</p>
          <p><strong>Execution Status:</strong> 100% allocation claim verification prior to contract deployment.</p>
          <p style="margin-top: 0.8rem; font-size: 0.85rem; color: #A8D0E0;">
            <em>Guaranteed spots were distributed strictly via transparent community raffles with winner logs archived.</em>
          </p>
        </div>
      `
    },
    discord: {
      title: "Discord Collaboration Setup",
      content: `
        <div class="modal-detail-panel">
          <p><strong>Verification Type:</strong> Community Discord Collaboration & Raffle Integration</p>
          <p><strong>Platform:</strong> High-engagement Discord communities with specialized alpha and collab bots.</p>
          <p><strong>Engagement:</strong> Over 1,000+ total reactions per featured campaign, driving direct conversion.</p>
          <p style="margin-top: 0.8rem; font-size: 0.85rem; color: #A8D0E0;">
            <em>Includes custom role assignment, automated winner notifications, and dedicated collab review voice chats.</em>
          </p>
        </div>
      `
    },
    raffles: {
      title: "Raffle Results & Winner Sheets",
      content: `
        <div class="modal-detail-panel">
          <p><strong>Verification Type:</strong> Provably Fair Winner Selection & On-Chain Wallet Collection</p>
          <p><strong>Integrity Check:</strong> Sybil-resistance, Discord verification, and X follow verification verified prior to winner export.</p>
          <p><strong>Export:</strong> Direct delivery to project lead developers via secure encrypted channels.</p>
        </div>
      `
    },
    twitter: {
      title: "X / Twitter Collaboration Post",
      content: `
        <div class="modal-detail-panel">
          <p><strong>Verification Type:</strong> High-Impression X (Twitter) Partnership Campaign</p>
          <p><strong>Amplification:</strong> Coordinated reposts, quote tweets, and pinned alpha breakdowns.</p>
          <p><strong>Reach:</strong> Direct impressions across dedicated Web3 investor and collector audiences.</p>
        </div>
      `
    },
    conversations: {
      title: "Project Team Outreach & Terms",
      content: `
        <div class="modal-detail-panel">
          <p><strong>Verification Type:</strong> Professional Project Team Outreach & Negotiation Records</p>
          <p><strong>Methodology:</strong> Identifying high-potential Web3 projects early, drafting formal collab pitches, and aligning incentives for both team and community.</p>
          <p><strong>Result:</strong> Smooth long-term alliances and repeat collaboration opportunities across seasons.</p>
        </div>
      `
    }
  };

  function openProofModal(category, fallbackTitle) {
    if (!proofModal) return;

    const data = proofDetailsData[category] || {
      title: fallbackTitle || "Collaboration Record",
      content: `
        <div class="modal-detail-panel">
          <p><strong>Record Status:</strong> Verified Web3 Collaboration Campaign.</p>
          <p>This verification document confirms successful coordination between Nova_Eth and participating project teams.</p>
        </div>
      `
    };

    if (proofModalTitle) proofModalTitle.textContent = data.title;
    if (proofModalBody) proofModalBody.innerHTML = data.content;

    proofModal.classList.add('active');
    proofModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeProofModal() {
    if (!proofModal) return;
    proofModal.classList.remove('active');
    proofModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  proofCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.getAttribute('data-category');
      const title = card.getAttribute('data-title');
      openProofModal(category, title);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProofModal);
  if (modalDismissBtn) modalDismissBtn.addEventListener('click', closeProofModal);

  if (proofModal) {
    proofModal.addEventListener('click', (e) => {
      if (e.target === proofModal) {
        closeProofModal();
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeProofModal();
    }
  });

  // =========================================================================
  // 7. Dynamic Site Data Synchronization (Loads from site-data.js / Admin CMS)
  // =========================================================================
  function applyDynamicSiteData() {
    if (typeof getSiteData !== 'function') return;
    const data = getSiteData();

    // 1. Hero Section
    const heroNameEl = document.querySelector('.name-highlight');
    if (heroNameEl && data.hero?.name) heroNameEl.textContent = data.hero.name;

    const heroHeadlineEl = document.querySelector('.hero-headline');
    if (heroHeadlineEl && data.hero?.headline) heroHeadlineEl.textContent = data.hero.headline;

    const heroDescEl = document.querySelector('.hero-description');
    if (heroDescEl && data.hero?.description) heroDescEl.textContent = data.hero.description;

    const heroRoleTagEl = document.querySelector('.hero-badge');
    if (heroRoleTagEl && data.hero?.roleTag) {
      heroRoleTagEl.innerHTML = `<span class="badge-dot"></span>${data.hero.roleTag}`;
    }

    const heroAvatarImg = document.getElementById('heroProfileImg');
    if (heroAvatarImg && data.hero?.profileImgUrl) {
      heroAvatarImg.src = data.hero.profileImgUrl;
    }

    // Hero Stats
    const heroStatCards = document.querySelectorAll('.hero-stat-card');
    if (data.hero?.stats) {
      heroStatCards.forEach((card, i) => {
        const stat = data.hero.stats[i];
        if (stat) {
          const numEl = card.querySelector('.stat-number');
          const lblEl = card.querySelector('.stat-label');
          if (numEl) numEl.textContent = stat.val;
          if (lblEl) lblEl.textContent = stat.lbl;
        }
      });
    }

    // Hero Social Handles
    const heroXPill = document.querySelector('.hero-social-row a.social-pill');
    if (heroXPill && data.hero?.xHandle) {
      const span = heroXPill.querySelector('span');
      if (span) span.textContent = `X: ${data.hero.xHandle}`;
      if (data.hero.xUrl) heroXPill.href = data.hero.xUrl;
    }

    const heroDiscordBtn = document.getElementById('heroDiscordBtn');
    if (heroDiscordBtn && data.hero?.discordTag) {
      heroDiscordBtn.setAttribute('data-discord', data.hero.discordTag);
      const tagText = heroDiscordBtn.querySelector('.discord-tag-text');
      if (tagText) tagText.textContent = `Discord: ${data.hero.discordTag}`;
    }

    // 2. About Me Section
    const aboutLeadEl = document.querySelector('.about-lead');
    if (aboutLeadEl && data.about?.lead) aboutLeadEl.innerHTML = data.about.lead;

    const aboutBodyEl = document.querySelector('.about-body');
    if (aboutBodyEl && data.about?.body) aboutBodyEl.textContent = data.about.body;

    const skillsContainer = document.querySelector('.about-skills-matrix');
    if (skillsContainer && data.about?.skills) {
      skillsContainer.innerHTML = '';
      data.about.skills.forEach(skill => {
        const chip = document.createElement('span');
        chip.className = 'skill-chip';
        chip.textContent = skill;
        skillsContainer.appendChild(chip);
      });
    }

    const aboutSideBoxes = document.querySelectorAll('.about-stat-box');
    if (data.about?.sideStats) {
      aboutSideBoxes.forEach((box, i) => {
        const st = data.about.sideStats[i];
        if (st) {
          const valEl = box.querySelector('.stat-highlight-val');
          const lblEl = box.querySelector('.stat-highlight-name');
          if (valEl) valEl.textContent = st.val;
          if (lblEl) lblEl.textContent = st.lbl;
        }
      });
    }

    // 3. Communities Section
    const commGrid = document.querySelector('.communities-grid');
    if (commGrid && data.communities && data.communities.length > 0) {
      commGrid.innerHTML = '';
      data.communities.forEach(c => {
        const card = document.createElement('div');
        card.className = 'community-card';
        card.innerHTML = `
          <div class="community-card-header">
            <div class="community-logo-box">
              <span class="community-avatar-initial">${c.monogram || 'W3'}</span>
            </div>
            <span class="role-badge">${c.roleBadge || 'Collab Manager'}</span>
          </div>
          <h3 class="community-name">${c.name}</h3>
          <p class="community-desc">${c.desc}</p>
          <div class="community-footer">
            <a href="${c.xLink || '#'}" target="_blank" rel="noopener noreferrer" class="btn-community-x">
              <svg viewBox="0 0 24 24" fill="currentColor" class="social-svg-small">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Follow on X</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow-svg"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
            </a>
          </div>
        `;
        commGrid.appendChild(card);
      });
    }

    // 4. Founder Section
    const founderTitleEl = document.querySelector('.founder-title');
    if (founderTitleEl && data.founder?.title) founderTitleEl.textContent = data.founder.title;

    const founderQuoteEl = document.querySelector('.founder-quote');
    if (founderQuoteEl && data.founder?.quote) founderQuoteEl.textContent = `"${data.founder.quote.replace(/^"|"$/g, '')}"`;

    const founderMetaItems = document.querySelectorAll('.founder-meta-item');
    if (founderMetaItems.length >= 3 && data.founder) {
      const val0 = founderMetaItems[0].querySelector('.meta-val');
      const val1 = founderMetaItems[1].querySelector('.meta-val');
      const val2 = founderMetaItems[2].querySelector('.meta-val');
      if (val0 && data.founder.community) val0.textContent = data.founder.community;
      if (val1 && data.founder.role) val1.textContent = data.founder.role;
      if (val2 && data.founder.mission) val2.textContent = data.founder.mission;
    }

    const founderXBtn = document.querySelector('.founder-actions a');
    if (founderXBtn && data.founder?.xLink) founderXBtn.href = data.founder.xLink;

    // 5. Collaborations Section
    const collabNumberEl = document.querySelector('.collab-hero-number');
    if (collabNumberEl && data.collaborations?.number) collabNumberEl.textContent = data.collaborations.number;

    const collabTitleEl = document.querySelector('.collab-hero-title');
    if (collabTitleEl && data.collaborations?.title) collabTitleEl.textContent = data.collaborations.title;

    const centerSub = document.querySelector('.center-subtitle');
    if (centerSub && data.collaborations?.subtitle) centerSub.textContent = data.collaborations.subtitle;

    const projGrid = document.querySelector('.projects-grid');
    if (projGrid && data.collaborations?.projects && data.collaborations.projects.length > 0) {
      projGrid.innerHTML = '';
      data.collaborations.projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'collab-project-card';
        card.innerHTML = `
          <div class="project-card-header">
            <div class="project-logo-placeholder">
              <span class="project-monogram">${p.monogram || 'W3'}</span>
            </div>
            <span class="collab-badge">${p.badge || 'Verified Collaboration'}</span>
          </div>
          <h3 class="collab-project-name">${p.name}</h3>
          <p class="collab-project-desc">${p.desc}</p>
          <div class="collab-card-footer">
            <a href="${p.xLink || '#'}" target="_blank" rel="noopener noreferrer" class="btn-view-project">
              <span>View Project on X</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="arrow-svg"><path d="M7 17l9.2-9.2M17 17V8H8"/></svg>
            </a>
          </div>
        `;
        projGrid.appendChild(card);
      });
    }

    // 6. Services Section
    const srvCards = document.querySelectorAll('.service-card');
    if (data.services) {
      srvCards.forEach((card, i) => {
        const s = data.services[i];
        if (s) {
          const t = card.querySelector('.service-title');
          const d = card.querySelector('.service-desc');
          if (t) t.textContent = s.title;
          if (d) d.textContent = s.desc;
        }
      });
    }

    // 7. Process Section
    const procCards = document.querySelectorAll('.process-step');
    if (data.process) {
      procCards.forEach((stepEl, i) => {
        const p = data.process[i];
        if (p) {
          const t = stepEl.querySelector('.step-title');
          const d = stepEl.querySelector('.step-desc');
          if (t) t.textContent = p.title;
          if (d) d.textContent = p.desc;
        }
      });
    }

    // 8. Results Section
    const resCards = document.querySelectorAll('.result-card');
    if (data.results) {
      resCards.forEach((c, i) => {
        const r = data.results[i];
        if (r) {
          const num = c.querySelector('.result-number');
          const lbl = c.querySelector('.result-label');
          const sub = c.querySelector('.result-sub');
          if (num) num.textContent = r.val;
          if (lbl) lbl.textContent = r.lbl;
          if (sub) sub.textContent = r.sub;
        }
      });
    }

    // 9. Proofs Section
    const dynamicProofCards = document.querySelectorAll('.proof-card');
    if (data.proofs) {
      dynamicProofCards.forEach((c, i) => {
        const pr = data.proofs[i];
        if (pr) {
          const tag = c.querySelector('.proof-tag');
          const title = c.querySelector('.proof-title');
          if (tag) tag.textContent = pr.tag;
          if (title) title.textContent = pr.title;
        }
      });
    }

    // 10. Contact Section
    const contactTitleEl = document.querySelector('.contact-title');
    if (contactTitleEl && data.contact?.title) contactTitleEl.textContent = data.contact.title;

    const contactDescEl = document.querySelector('.contact-description');
    if (contactDescEl && data.contact?.description) contactDescEl.textContent = data.contact.description;

    const contactXBtn = document.querySelector('.contact-method-card a.method-btn');
    if (contactXBtn && data.contact?.xUrl) contactXBtn.href = data.contact.xUrl;

    const contactDiscordBtn = document.getElementById('contactDiscordBtn');
    if (contactDiscordBtn && data.contact?.discordHandle) {
      contactDiscordBtn.setAttribute('data-discord', data.contact.discordHandle);
    }
  }

  // Initial render of dynamic data
  applyDynamicSiteData();

  // Listen for storage changes from admin tab to update live in real-time
  window.addEventListener('storage', (e) => {
    if (e.key === 'nova_site_custom_data') {
      applyDynamicSiteData();
    }
  });
});
