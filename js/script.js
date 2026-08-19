AOS.init({ duration: 800, once: true, offset: 80 });
document.getElementById('year').textContent = new Date().getFullYear();

/* ===== Hero Flip Designations ===== */
(function(){
  const track = document.getElementById('flip-track');
  if(!track) return;
  const roles = [
    'AI/ML Engineer','Generative AI Engineer','ML Engineer','MLOps Engineer',
    'Software Engineer','Math of AI','Problem Solver'
  ];
  let current = 0;
  roles.forEach((r, i) => {
    const span = document.createElement('span');
    span.className = 'flip-item' + (i === 0 ? ' active' : '');
    span.textContent = r;
    track.appendChild(span);
  });
  setInterval(() => {
    const items = track.querySelectorAll('.flip-item');
    items[current].classList.remove('active');
    items[current].classList.add('leaving');
    setTimeout(() => items[current].classList.remove('leaving'), 500);
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  }, 2400);
})();

/* ===== Projects Data ===== */
// All projects — first 2 = Flagship, rest = Engineering
const allProjects = [
    {
      title       : 'AI Vision Pipeline',
      desc        : 'End-to-end computer vision pipeline using OpenCV and PyTorch for real-time object detection.',
      long        : 'A production-grade computer vision system capable of real-time multi-class object detection. Built using PyTorch for the neural backbone and OpenCV for frame capture and pre/post-processing. Achieves sub-30ms inference on GPU-accelerated hardware. The pipeline includes data augmentation, anchor-free detection heads, and a REST API for integration. Integrated with a streaming dashboard for live monitoring and alert thresholds.',
      highlights  : ['Sub-30ms GPU inference','Anchor-free detection heads','REST API integration','Real-time monitoring dashboard'],
      tags        : ['Python','PyTorch','OpenCV'],
      imgs        : ['images/projects/1.jpg','images/projects/3.jpg','images/projects/4.jpg'],
      meta        : [{label:'Stack', val:'Python, PyTorch, OpenCV, FastAPI'},{label:'Status', val:'Production'},{label:'Domain', val:'Computer Vision'}],
      github      : '#', demo: '#', flagship: true
    },
    {
      title       : 'ANN Foundation',
      desc        : 'Built an autograd engine and Multi-Layer Perceptron (MLP) from scratch in Python, implementing computational graphs, automatic differentiation, backpropagation, and gradient-based optimization without ML frameworks. Designed a dynamic computational graph to track mathematical operations and dependencies between values. Implemented reverse-mode automatic differentiation and recursive backpropagation for efficient gradient computation. Developed and trained an MLP using custom neural-network layers, activation functions, loss functions, and gradient-descent optimization.',
      long        : 'This project implements the core foundations of neural-network training from the ground up, without relying on high-level deep-learning frameworks. The custom autograd engine builds a dynamic computational graph during forward operations and records the relationships between values required for gradient computation. Reverse-mode automatic differentiation traverses this graph backward from the loss, recursively applying the chain rule to calculate gradients for trainable parameters. On top of the autograd system, a Multi-Layer Perceptron (MLP) was implemented with custom layers, activation functions, loss functions, and gradient-descent optimization for model training. The project provides a practical understanding of how automatic differentiation, backpropagation, parameter updates, and neural-network learning work internally at a fundamental level.',
      highlights  : [
                      'Custom Autograd Engine',
                      'Reverse-Mode Backprop',
                      'Dynamic Graph Construction',
                      'Zero-Framework Architecture',
                      'Automated CI/CD Testing',
                      'Interactive Web Visualizer'
                    ],

      tags        : ['Python','Neural Networks', 'Autograd', 'NumPy'],
      imgs        : [
                      'images/projects/Engineering/Ann-foundation-01.png',
                      'images/projects/Engineering/Ann-foundation-02.png',
                      'images/projects/Engineering/Ann-foundation-03.png',
                      'images/projects/Engineering/Ann-foundation-04.png',
                    ],

      meta        : [
                      {label:'Stack', val:'Gradio, Hugging Face Spaces, Pytest'},
                      {label:'Status', val:'Active & Deployed'},
                      {label:'Domain', val:'Deep-Learning'}
                    ],
      github      : 'https://github.com/rahulkp-ai/ann-foundation', 
      demo        : 'https://huggingface.co/spaces/rahulkp-ai/ann-foundation', 
      flagship    : false
    },

    // CNN Foundation
    {
      title       : 'CNN Foundation',
      desc        : 'Built a convolutional neural network from scratch in pure Python and NumPy — implementing a Tensor autograd engine, im2col-based Conv2D, MaxPool2D, cross-entropy loss, and Adam optimizer without any ML frameworks. Designed a NumPy-backed Tensor class with reverse-mode automatic differentiation over N-dimensional arrays, including broadcasting-aware gradient accumulation. Implemented im2col/col2im convolution that reduces 2D convolution to a single matrix multiply, with analytically-derived and numerically-verified backward passes. Trained a two-block CNN (9,098 parameters) on MNIST achieving 98.6% test accuracy, with a live Gradio demo on Hugging Face Spaces.',
      long        : 'This project lifts the scalar autograd engine from ann-foundation to N-dimensional arrays, implementing the full mathematical stack needed to train a CNN from first principles. The Tensor class wraps NumPy arrays and builds a dynamic computation graph during the forward pass, tracking operations and parent nodes for reverse-mode autodiff. The backward pass walks a topological ordering of the graph, applying the chain rule at each node with broadcasting-aware gradient accumulation — correctly summing gradients back to their original shapes after NumPy broadcasts them forward. Convolution is implemented via the im2col trick: receptive-field patches of the input are unrolled into columns of a matrix, reducing Conv2D to a single matmul whose backward pass is a standard matmul gradient composed with col2im (the scatter-add inverse of im2col). MaxPool2D records argmax positions on the forward pass and routes gradients exclusively to those positions on the backward pass. Cross-entropy loss uses the numerically-stable log-sum-exp formulation with a closed-form gradient. Three optimizers (SGD, SGD+Momentum, Adam) are implemented from their update equations. All 52 gradient checks compare analytical gradients against central-difference numerical approximations at 1e-5 tolerance. The CNN architecture (Conv2D→ReLU→MaxPool2D×2→Flatten→Linear) trains on 60,000 MNIST images with Adam in 5 epochs and achieves 98.6% test accuracy with 9,098 parameters.',
      highlights  : [
                      'NumPy Tensor Autograd Engine',
                      'im2col Conv2D from Scratch',
                      'Broadcasting-Aware Backprop',
                      'Adam / SGD Optimizers',
                      '52 Gradient-Verified Tests',
                      '98.6% MNIST Accuracy',
                      'Live Gradio Demo'
                    ],

      tags        : ['Python', 'NumPy', 'CNN', 'Autograd', 'Gradio', 'MNIST'],
      imgs        : [
                      'images/projects/Engineering/CNN-foundation-01.png',
                      'images/projects/Engineering/CNN-foundation-02.png',
                      'images/projects/Engineering/CNN-foundation-03.png',
                      'images/projects/Engineering/CNN-foundation-04.png',
                      'images/projects/Engineering/CNN-foundation-05.png',
                      'images/projects/Engineering/CNN-foundation-06.png',
                    ],

      meta        : [
                      {label:'Stack',  val:'Gradio, Hugging Face Spaces, Pytest'},
                      {label:'Status', val:'Active & Deployed'},
                      {label:'Domain', val:'Deep-Learning'}
                    ],
      github      : 'https://github.com/rahulkp-ai/cnn-foundation',
      demo        : 'https://huggingface.co/spaces/rahulkp-ai/cnn-foundation',
      flagship    : false
    },

    // RankScript
    {
      title       : 'RankScript',
      desc        : 'A full-stack competitive learning platform combining course management with gamified leaderboards. Built with FastAPI, Next.js, PostgreSQL, and Redis, it features end-to-end role-based access control across student, mentor, and admin workflows. A real-time engine aggregates quiz performance, assignment grades, lesson completion, and activity streaks into weighted rank scores across district, state, and national tiers. Mentors handle course lifecycles via a draft-to-approval workflow, while admins manage platform moderation with audit logs. Fully containerized with Docker and deployed across Vercel, Render, Neon, and Upstash.',
      long        : 'This full-stack Learning Management System drives engagement through gamified competition rather than passive learning. Built on a strict layered backend—separating HTTP routes, business logic, and SQLAlchemy models—it spans ten domains including auth, courses, enrollments, and analytics. Its core differentiator is a weighted ranking engine aggregating quiz scores (40%), assignment grades (30%), completion rates (15%), and activity streaks (15%) into unified scores served via materialized views for fast regional leaderboard pagination. End-to-end role-based security separates student, mentor, and admin workflows, backed by JWT refresh-token rotation and bcrypt hashing. Fully containerized with Docker Compose and verified by a 266-test pytest suite, it deploys seamlessly across Vercel, Render, Neon PostgreSQL, and Upstash Redis.',
      highlights  : [ 
                      "Weighted Rank-Scoring Engine",
                      "Role-Based Access Control",
                      "Regional Leaderboards (District/State/National)",
                      "JWT Auth with Refresh Rotation",
                      "Admin Approval Workflows",
                      "266-Test Backend Suite"
                    ],

      tags        : ["FastAPI", "Next.js", "PostgreSQL", "Redis", "Docker"],

      imgs        : [
                      'images/projects/Engineering/RankScript-01.png',
                      'images/projects/Engineering/RankScript-02.png',
                      'images/projects/Engineering/RankScript-03.png',
                      'images/projects/Engineering/RankScript-04.png',
                      'images/projects/Engineering/RankScript-05.png',
                    ],

      meta        : [
                      { label: "Stack", val: "FastAPI, Next.js, PostgreSQL, Redis, Docker" },
                      { label: "Status", val: "Active & Deployed" },
                      { label: "Domain", val: "Full-Stack / EdTech" },
                    ],

      credentials : [
                      { role: "Student", email: "student.lisa@test.com", password: "password" },
                      { role: "Mentor",  email: "mentor.rajesh@test.com", password: "password" },
                      { role: "Admin",   email: "admin@rankscript.com",   password: "password" }
                    ],
      demoNote    : "Backend runs on Render's free tier and sleeps after 15 minutes of inactivity — the first login may take 10–30 seconds while it wakes up.",

      github      : 'https://github.com/rahulkp-ai/rankscript',
      demo        : 'https://rankscript.vercel.app/auth/login',
      flagship    : false
    },

    // PhishGuard
    {
      title       : 'PhishGuard',
      desc        : 'This production-grade MLOps engineering project detects malicious phishing URLs in real time by deploying a robust Random Forest classifier trained on 28 carefully hand-engineered URL features. Built using Flask, scikit-learn, and Prometheus instrumentation, the application seamlessly supports real-time REST API scoring, scalable batch prediction workflows, automated data drift monitoring, and fully containerized deployments. Designed for high reliability, it incorporates the complete enterprise production stack: structured JSON logging, automated CI/CD deployment pipelines, production Kubernetes manifests, and a comprehensive Grafana dashboard for real-time end-to-end system observability.',
      long        : 'PhishGuard goes beyond a typical ML project by implementing the full engineering stack a real ML product requires. The feature extractor derives 28 URL signals — entropy, brand impersonation, TLD analysis, subdomain depth — entirely from the URL string with no DNS lookups, achieving sub-10ms inference. A Random Forest classifier trained on ~50,000 balanced URLs from OpenPhish, URLhaus, PhishTank, Majestic Million, and Tranco achieves ~95% accuracy and ~0.98 ROC-AUC. The Flask API (gunicorn, app factory pattern) exposes /api/predict, /api/batch (50 URLs), /api/health, and /metrics endpoints with full input validation, per-request X-Request-ID middleware, and structured JSON logging via structlog. A rolling-window drift detector monitors the live phishing rate against a configurable baseline and emits structured alerts on deviation. The codebase is verified by 222 tests at 98.7% coverage across unit, integration, and regression categories, with a pytest matrix on Python 3.10 and 3.12. A multi-stage Docker build (non-root uid=1001, read-only rootfs) feeds a GitHub Actions CI pipeline that gates on lint, coverage, and image structure before pushing to GHCR. Kubernetes manifests cover HPA, init containers, and kustomize overlays for dev/staging/production environments.',

      highlights  : [
                    '28 Hand-Engineered URL Features',
                    '~95% Accuracy · ~0.98 ROC-AUC',
                    '222 Tests · 98.7% Coverage',
                    'Prometheus Metrics + Drift Detection',
                    'Kubernetes with HPA + Kustomize Overlays',
                    'GitHub Actions CI/CD + GHCR Image Push'
                  ],

      tags        : ['Python', 'Flask', 'scikit-learn', 'Docker', 'Kubernetes'],

      imgs        : [
                    'images/projects/Engineering/PhishGuard-01.png',
                    'images/projects/Engineering/PhishGuard-02.png',
                    'images/projects/Engineering/PhishGuard-03.png',
                    'images/projects/Engineering/PhishGuard-04.png',
                    'images/projects/Engineering/PhishGuard-05.png',
                    'images/projects/Engineering/PhishGuard-06.png',
                  ],

      meta        : [
                    { label: 'Stack',  val: 'Flask, scikit-learn, Docker, Kubernetes, Prometheus' },
                    { label: 'Status', val: 'Live & Deployed' },
                    { label: 'Domain', val: 'MLOps / Cybersecurity' },
                  ],

      credentials : [
                  { role: "URLs",        email: "",                                                       password: "" },
                  { role: "High Risk",   email: "http://paypal-verify-account.tk/login/confirm",          password: "" },
                  { role: "High Risk",   email: "http://192.168.1.1/admin/login",                         password: "" },
                  { role: "High Risk",   email: "http://secure-banking-update.xyz/account/verify",        password: "" },
                  { role: "Safe",        email: "https://github.com/rahulkp-ai/phishguard",               password: "" },
                  { role: "Safe",        email: "https://www.google.com/search?q=phishing+detection",     password: "" },
                  { role: "Safe",        email: "https://stackoverflow.com/questions/tagged/flask",        password: "" },
                ],

      demoNote    : "Deployed on Render's free tier — the first request may take 10–30 seconds to wake up. Submit any URL to the predict endpoint and get a real-time phishing classification with confidence score and risk level.",

      github      : 'https://github.com/rahulkp-ai/phishguard',
      demo        : 'https://phishguard-xozj.onrender.com',
      flagship    : false
    },
    
    // TaskFlow
  {
    title       : 'TaskFlow',
    desc        : 'Engineered to elevate team productivity, this enterprise-grade full-stack Kanban platform delivers seamless project management using the MERN stack (MongoDB, Express, React, Node.js). The application enforces secure, fine-grained role-based access control (RBAC) across administrative and member workflows, while driving efficiency through granular subtask tracking and dynamic analytics. Built for bulletproof reliability, it highlights continuous integration with a 99%+ test-covered API suite, isolated Docker containerization for production parity, and multi-cloud deployment across Vercel, Render, and MongoDB Atlas to showcase modern DevOps expertise.',
    long        : 'This full-stack task management app lets teams plan, track, and collaborate through both a Kanban board and list view, with tasks moving through todo, in-progress, and completed stages. Built on Express and MongoDB with a clean MVC structure, it separates controllers, middleware, and Mongoose models across dedicated user and task domains. Role-based middleware (protectRoute, isAdminRoute) gates admin-only actions — task creation, team management, account activation — behind JWT auth stored in HttpOnly cookies with bcrypt password hashing. The dashboard aggregates task counts by stage and priority into a live Recharts visualization, while a notification system and per-task activity feed keep teams in sync. Hardened with helmet, rate limiting, and an env-driven CORS allow-list, and verified by Jest + Supertest (server) and Vitest + React Testing Library (client) test suites, it deploys across Vercel, Render, and MongoDB Atlas — with API requests proxied through Vercel to keep the auth cookie same-origin and Safari-compatible.',
    highlights  : [
                    "Kanban Board & List Views",
                    "Role-Based Access Control",
                    "Task Lifecycle with Subtasks & Activity Feed",
                    "JWT Auth in HttpOnly Cookies",
                    "Dashboard Analytics (Recharts)",
                    "Dockerized with CI-Gated Test Suites"
                  ],

    tags        : ["React", "Express", "MongoDB", "Docker"],

    imgs        : [
                    'images/projects/Engineering/TaskFlow-01.png',
                    'images/projects/Engineering/TaskFlow-02.png',
                    'images/projects/Engineering/TaskFlow-03.png',
                    'images/projects/Engineering/TaskFlow-04.png',
                    'images/projects/Engineering/TaskFlow-05.png',
                    'images/projects/Engineering/TaskFlow-06.png',
                  ],

    meta        : [
                    { label: "Stack", val: "React, Express, MongoDB, Docker" },
                    { label: "Status", val: "Active & Deployed" },
                    { label: "Domain", val: "Full-Stack / Productivity" },
                  ],

    credentials : [
                    { role: "Admin",             email: "admin@taskflow.com",  password: "Admin@123" },
                    { role: "Frontend Engineer",  email: "sarah@taskflow.com",  password: "Sarah@123" },
                    { role: "Backend Engineer",   email: "james@taskflow.com",  password: "James@123" }
                  ],
    demoNote    : "Backend runs on Render's free tier and sleeps after 15 minutes of inactivity — the first login may take 30–60 seconds while it wakes up.",

    github      : 'https://github.com/rahulkp-ai/taskflow',
    demo        : 'https://taskflow-iota-ecru.vercel.app/log-in',
    flagship    : false
  },

];

const flagshipProjects = allProjects.filter(p => p.flagship);
const engineeringProjects = allProjects.filter(p => !p.flagship);

/* ===== Project Modal — Image Carousel ===== */
const pModal = document.getElementById('proj-modal');
const closePModal = () => pModal.classList.remove('open');
document.getElementById('proj-modal-close').addEventListener('click', closePModal);
pModal.querySelector('.proj-modal-backdrop').addEventListener('click', closePModal);
document.addEventListener('keydown', e => { if(e.key === 'Escape') closePModal(); });

(function() {
  const wrap = document.getElementById('proj-modal-img-wrap');
  const prevBtn = document.getElementById('proj-img-prev');
  const nextBtn = document.getElementById('proj-img-next');
  const dotsWrap = document.getElementById('proj-img-dots');
  const counter = document.getElementById('proj-img-counter');
  let slides = [], dotEls = [], curImg = 0;

  function buildImgCarousel(imgs) {
    // Remove old slides
    wrap.querySelectorAll('.proj-modal-img-slide').forEach(el => el.remove());
    dotsWrap.innerHTML = '';
    slides = []; dotEls = []; curImg = 0;

    imgs.forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'proj-modal-img-slide' + (i === 0 ? ' active' : '');
      slide.innerHTML = `<img src="${src}" alt="Project image ${i+1}" loading="${i===0?'eager':'lazy'}"/>`;
      wrap.insertBefore(slide, wrap.querySelector('.proj-modal-img-overlay'));
      slides.push(slide);

      if (imgs.length > 1) {
        const dot = document.createElement('button');
        dot.className = 'proj-img-dot' + (i === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Image ${i+1}`);
        dot.addEventListener('click', () => goImgTo(i));
        dotsWrap.appendChild(dot);
        dotEls.push(dot);
      }
    });

    const multi = imgs.length > 1;
    prevBtn.classList.toggle('hidden', !multi);
    nextBtn.classList.toggle('hidden', !multi);
    dotsWrap.style.display = multi ? '' : 'none';
    counter.style.display = multi ? '' : 'none';
    if (multi) updateImgUI();
  }

  function updateImgUI() {
    slides.forEach((s,i) => s.classList.toggle('active', i === curImg));
    dotEls.forEach((d,i) => d.classList.toggle('active', i === curImg));
    counter.textContent = `${curImg+1} / ${slides.length}`;
    prevBtn.classList.toggle('hidden', curImg === 0);
    nextBtn.classList.toggle('hidden', curImg === slides.length - 1);
  }

  function goImgTo(idx) {
    curImg = Math.max(0, Math.min(idx, slides.length - 1));
    updateImgUI();
  }

  prevBtn.addEventListener('click', () => goImgTo(curImg - 1));
  nextBtn.addEventListener('click', () => goImgTo(curImg + 1));

  // Touch swipe on modal image
  let tx0 = 0;
  wrap.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, {passive:true});
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx0;
    if (Math.abs(dx) > 40) goImgTo(dx < 0 ? curImg + 1 : curImg - 1);
  }, {passive:true});

  // Expose builder
  window._buildProjImgCarousel = buildImgCarousel;
})();

function openProjectModal(p) {
  const imgs = p.imgs || (p.img ? [p.img] : ['images/projects/1.jpg']);
  window._buildProjImgCarousel(imgs);
  document.getElementById('proj-modal-title').textContent = p.title;
  document.getElementById('proj-modal-desc').textContent = p.long;
  document.getElementById('proj-modal-tags').innerHTML = p.tags.map(t=>`<span class="proj-tag">${t}</span>`).join('');
  document.getElementById('proj-modal-meta').innerHTML = p.meta.map(m=>`
    <div class="proj-meta-item">
      <span class="proj-meta-label">${m.label}</span>
      <span class="proj-meta-val">${m.val}</span>
    </div>`).join('') + (p.highlights ? `
    <div class="proj-meta-item proj-highlights-wrap">
      <span class="proj-meta-label">Highlights</span>
      <ul class="proj-highlights">${p.highlights.map(h=>`<li><i class="bi bi-check2-circle"></i>${h}</li>`).join('')}</ul>
    </div>` : '') + (p.credentials ? `
    <div class="proj-meta-item proj-credentials-wrap">
      <span class="proj-meta-label">Demo Credentials</span>
      <div class="proj-credentials-table">
        ${p.credentials.map(c=>`
          <div class="proj-cred-row">
            <span class="proj-cred-role">${c.role}</span>
            <span class="proj-cred-email">${c.email}</span>
            <span class="proj-cred-pass">${c.password}</span>
          </div>`).join('')}
      </div>
      ${p.demoNote ? `<p class="proj-demo-note"><i class="bi bi-info-circle me-1"></i>${p.demoNote}</p>` : ''}
    </div>` : '');
  document.getElementById('proj-modal-actions').innerHTML = `
    <a href="${p.github}" class="btn btn-gradient" target="_blank"><i class="bi bi-github me-2"></i>View Code</a>
    <a href="${p.demo}" class="btn btn-glass" target="_blank"><i class="bi bi-box-arrow-up-right me-2"></i>Live Demo</a>`;
  pModal.classList.add('open');
}

/* ===== Flagship Carousel (one card at a time, full width) ===== */
(function() {
  const track = document.getElementById('flagship-track');
  const dotsWrap = document.getElementById('flagship-dots');
  if (!track) return;

  let current = 0;
  let autoTimer;

  flagshipProjects.forEach((p, i) => {
    const slide = document.createElement('div');
    slide.className = 'flagship-slide' + (i === 0 ? ' active' : '');
    slide.dataset.fi = i;
    slide.innerHTML = `
      <div class="flagship-card glass" data-fi="${i}" style="cursor:pointer">
        <div class="flagship-img-wrap">
          <img src="${p.imgs ? p.imgs[0] : p.img}" alt="${p.title}" loading="lazy"/>
          <div class="flagship-img-overlay"></div>
          <div class="flagship-badge"><i class="bi bi-gem me-1"></i>Flagship</div>
        </div>
        <div class="flagship-body">
          <div class="flagship-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
          <h3 class="flagship-title">${p.title}</h3>
          <p class="flagship-desc">${p.desc}</p>
          ${p.highlights ? `<ul class="flagship-highlights">${p.highlights.map(h=>`<li><i class="bi bi-check2-circle"></i>${h}</li>`).join('')}</ul>` : ''}
          <div class="flagship-meta-row">
            ${p.meta.slice(0,2).map(m=>`<div class="flagship-meta-chip"><span class="fmc-label">${m.label}</span><span class="fmc-val">${m.val}</span></div>`).join('')}
          </div>
          <div class="flagship-cta"><span class="proj-view-btn"><i class="bi bi-arrow-right-circle me-1"></i>View Full Details</span></div>
        </div>
      </div>`;
    track.appendChild(slide);

    // dot
    const dot = document.createElement('button');
    dot.className = 'flagship-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Slide ${i+1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsWrap.appendChild(dot);
  });

  function goTo(idx) {
    const slides = track.querySelectorAll('.flagship-slide');
    const dots = dotsWrap.querySelectorAll('.flagship-dot');
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (idx + flagshipProjects.length) % flagshipProjects.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    resetAuto();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(current + 1), 4500);
  }
  resetAuto();

  document.querySelector('.flagship-prev').addEventListener('click', () => goTo(current - 1));
  document.querySelector('.flagship-next').addEventListener('click', () => goTo(current + 1));

  // click opens modal
  track.addEventListener('click', e => {
    const card = e.target.closest('.flagship-card[data-fi]');
    if (!card) return;
    openProjectModal(flagshipProjects[+card.dataset.fi]);
  });
})();

/* ===== Engineering Projects Carousel (paged at every breakpoint, with dots) ===== */
(function() {
  const scroller = document.getElementById('eng-scroller');
  if (!scroller) return;

  scroller.innerHTML = engineeringProjects.map((p, i) => `
    <article class="eng-card glass" data-ei="${i}" style="cursor:pointer">
      <div class="project-img"><img src="${p.imgs ? p.imgs[0] : p.img}" alt="${p.title}" loading="lazy"/></div>
      <div class="project-body">
        <h6 class="fw-bold">${p.title}</h6>
        <p class="text-muted-2 project-desc">${p.desc}</p>
        <div class="project-tags">${p.tags.map(x=>`<span>${x}</span>`).join('')}</div>
        <div class="proj-card-cta"><span class="proj-view-btn"><i class="bi bi-arrow-right-circle me-1"></i>View Details</span></div>
      </div>
    </article>`).join('');

  const wrap = document.querySelector('.eng-carousel-wrap');
  const outer = document.querySelector('.eng-carousel-outer');
  const prev = outer.querySelector('.eng-prev');
  const next = outer.querySelector('.eng-next');

  // Add dots container after the wrap
  const dotsWrap = document.createElement('div');
  dotsWrap.className = 'eng-dots';
  dotsWrap.id = 'eng-dots';
  wrap.insertAdjacentElement('afterend', dotsWrap);

  const cards = Array.from(scroller.children);
  let currentPage = 0;
  let dotEls = [];

  // Responsive cards-per-page: mobile 1, tablet 2, laptop/desktop 3
  function cardsPerPage() {
    const w = window.innerWidth;
    if (w < 640) return 1;
    if (w < 992) return 2;
    return 3;
  }

  function gap() { return window.innerWidth < 640 ? 14 : 20; }

  function pageCount() { return Math.ceil(cards.length / cardsPerPage()); }

  function cardWidth() {
    const cpp = cardsPerPage();
    const g = gap();
    return (wrap.clientWidth - g * (cpp - 1)) / cpp;
  }

  function buildDots() {
    dotsWrap.innerHTML = ''; dotEls = [];
    const pc = pageCount();
    dotsWrap.style.display = pc > 1 ? 'flex' : 'none';
    for (let i = 0; i < pc; i++) {
      const d = document.createElement('button');
      d.className = 'eng-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Page ${i+1}`);
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
      dotEls.push(d);
    }
  }

  function syncDots() {
    dotEls.forEach((d, i) => d.classList.toggle('active', i === currentPage));
  }

  function applyCardSizes() {
    const cw = cardWidth();
    const g = gap();
    cards.forEach(c => {
      c.style.flex = `0 0 ${cw}px`;
      c.style.minWidth = `${cw}px`;
      c.style.maxWidth = `${cw}px`;
      c.style.marginRight = `${g}px`;
      c.style.marginLeft = '0';
    });
  }

  function goTo(page) {
    const pc = pageCount();
    currentPage = Math.max(0, Math.min(page, pc - 1));
    const cpp = cardsPerPage();
    const g = gap();
    const scrollOffset = currentPage * cpp * (cardWidth() + g);

    scroller.scrollTo({
      left: scrollOffset,
      behavior: 'smooth'
    });

    if (prev) prev.disabled = currentPage === 0;
    if (next) next.disabled = currentPage === pc - 1;

    syncDots();
  }

  function init() {
    applyCardSizes();
    buildDots();
    goTo(0);
  }

  init();

  window.addEventListener('resize', () => {
    applyCardSizes();
    buildDots();
    goTo(currentPage);
  });

  if (prev) prev.addEventListener('click', () => goTo(currentPage - 1));
  if (next) next.addEventListener('click', () => goTo(currentPage + 1));

  // Click opens project modal
  scroller.addEventListener('click', e => {
    const card = e.target.closest('.eng-card[data-ei]');
    if (!card) return;
    openProjectModal(engineeringProjects[+card.dataset.ei]);
  });
})();