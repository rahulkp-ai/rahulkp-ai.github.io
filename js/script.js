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
    // {
    //   title       : 'LLM-Powered Assistant',
    //   desc        : 'Conversational AI assistant built with fine-tuned LLMs and FastAPI backend.',
    //   long        : 'A domain-specific conversational assistant leveraging fine-tuned large language models. The system uses retrieval-augmented generation (RAG) to ground responses in a curated knowledge base. Built on FastAPI with LangChain orchestration, it supports multi-turn memory, streaming responses, and structured output parsing. Features a vector store backed by Chroma for efficient semantic retrieval at scale.',
    //   highlights  : ['RAG with vector search','Multi-turn conversation memory','Streaming responses','LangChain orchestration'],
    //   tags        : ['LLM','FastAPI','LangChain'],
    //   imgs        : ['images/projects/2.jpg','images/projects/5.jpg','images/projects/1.jpg'],
    //   meta        : [{label:'Stack', val:'Python, LangChain, FastAPI, OpenAI'},{label:'Status', val:'Deployed'},{label:'Domain', val:'NLP / LLMs'}],
    //   github      : '#', demo: '#', flagship: true
    // },
    // desc : 84 words
   
    //  Ann-foundation'
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
                  { role: "URLs",        email: "",                                                        password: "" },
                  { role: "High Risk",            email: "http://paypal-verify-account.tk/login/confirm",           password: "" },
                  { role: "High Risk",            email: "http://192.168.1.1/admin/login",                          password: "" },
                  { role: "High Risk",            email: "http://secure-banking-update.xyz/account/verify",         password: "" },
                  { role: "Safe",                 email: "https://github.com/rahulkp-ai/phishguard",                password: "" },
                  { role: "Safe",                 email: "https://www.google.com/search?q=phishing+detection",      password: "" },
                  { role: "Safe",                 email: "https://stackoverflow.com/questions/tagged/flask",         password: "" },
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
                    { role: "Admin",              email: "admin@taskflow.com",  password: "Admin@123" },
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
    const cw = cardWidth();
    const g = gap();
    const maxOffset = Math.max(0, scroller.scrollWidth - wrap.clientWidth);
    const offset = Math.min(currentPage * cpp * (cw + g), maxOffset);
    scroller.style.transform = `translateX(-${offset}px)`;
    prev.classList.toggle('disabled', currentPage === 0);
    next.classList.toggle('disabled', currentPage >= pc - 1);
    syncDots();
  }

  function reinit() {
    applyCardSizes();
    buildDots();
    currentPage = 0;
    scroller.style.transform = 'translateX(0)';
    prev.classList.toggle('disabled', true);
    next.classList.toggle('disabled', pageCount() <= 1);
  }

  reinit();

  prev.addEventListener('click', () => goTo(currentPage - 1));
  next.addEventListener('click', () => goTo(currentPage + 1));

  // Touch swipe
  let tx0 = 0;
  wrap.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, {passive:true});
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx0;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? currentPage + 1 : currentPage - 1);
  }, {passive:true});

  // click opens modal
  scroller.addEventListener('click', e => {
    const card = e.target.closest('.eng-card[data-ei]');
    if (!card) return;
    openProjectModal(engineeringProjects[+card.dataset.ei]);
  });

  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(reinit, 180); });
})();

/* ===== Experience Section ===== */
const experiences = [
  {
    role: 'MSc Computer Science',
    company: 'University of Calicut',
    period: '2023 — 2025',
    type: 'Academic',
    icon: 'bi-mortarboard',
    color: '#7c3aed',
    desc: 'Final-year MSc student specialising in Artificial Intelligence and Machine Learning. Published peer-reviewed research on Neural Collaborative Filtering, building a full production microservices stack with FastAPI and PostgreSQL.',
    skills: ['AI/ML','Research','Python','Deep Learning']
  },
  {
    role: 'AI Research Author',
    company: 'Preprints.org',
    period: 'May 2026',
    type: 'Publication',
    icon: 'bi-journal-text',
    color: '#06b6d4',
    desc: 'Authored and published a research article on Neural Collaborative Filtering-based movie recommendation systems, benchmarked on MovieLens with PyTorch and NumPy implementations. Achieved 3.39× training speedup over a from-scratch NumPy baseline.',
    skills: ['Research','NCF','PyTorch','FastAPI']
  },
  {
    role: 'Generative AI Engineer',
    company: 'IBM (Certified)',
    period: '2024 — 2025',
    type: 'Certification Track',
    icon: 'bi-cpu',
    color: '#ec4899',
    desc: 'Completed IBM\'s 15-course Generative AI Engineering Professional Certificate, covering LLMs, transformer architectures, RAG pipelines, and production GenAI system design. Gained hands-on experience fine-tuning models and deploying AI-powered APIs at scale.',
    skills: ['LLMs','GenAI','IBM Watson','RAG']
  },
  {
    role: 'MLOps Specialist',
    company: 'Duke University (Certified)',
    period: '2024',
    type: 'Certification Track',
    icon: 'bi-gear-wide-connected',
    color: '#3b82f6',
    desc: 'Completed Duke University\'s 4-course MLOps Specialization covering model deployment lifecycle, CI/CD for ML, containerisation, and monitoring strategies for production systems. Applied skills to design reproducible, observable ML workflows using Docker and GitHub Actions.',
    skills: ['MLOps','Docker','CI/CD','Model Monitoring']
  },
  {
    role: 'Open Source Developer',
    company: 'Self-Directed Projects',
    period: '2022 — Present',
    type: 'Projects',
    icon: 'bi-code-slash',
    color: '#22c55e',
    desc: 'Built and shipped multiple AI-driven applications including a vision pipeline, LLM-powered assistant, NLP sentiment engine, and time-series forecasting system. Each project targets real-world problems with clean APIs, rigorous testing, and production-ready deployment.',
    skills: ['Python','FastAPI','PyTorch','OpenCV']
  },
];

document.getElementById('exp-scroller').innerHTML = experiences.map((e, i) => `
  <div class="exp-card glass" style="cursor:default">
    <div class="exp-card-top">
      <div class="exp-icon" style="background:linear-gradient(135deg,${e.color}55,${e.color}22);border-color:${e.color}44">
        <i class="bi ${e.icon}" style="color:${e.color}"></i>
      </div>
      <span class="exp-type-badge">${e.type}</span>
    </div>
    <div class="exp-period text-muted-2">${e.period}</div>
    <h5 class="exp-role">${e.role}</h5>
    <div class="exp-company"><i class="bi bi-building me-1"></i>${e.company}</div>
    <p class="exp-desc text-muted-2">${e.desc}</p>
    <div class="exp-skills">${e.skills.map(s=>`<span>${s}</span>`).join('')}</div>
  </div>`).join('');

/* ===== Experience Carousel ===== */
(function() {
  const track = document.getElementById('exp-scroller');
  const wrap  = document.getElementById('exp-carousel-wrap');
  const dotsWrap = document.getElementById('exp-car-dots');
  const outer = wrap ? wrap.closest('.exp-carousel-outer') : null;
  const prevBtn = outer ? outer.querySelector('.exp-car-prev') : null;
  const nextBtn = outer ? outer.querySelector('.exp-car-next') : null;
  if (!track || !wrap) return;

  const cards = Array.from(track.children);
  let currentPage = 0, autoTimer = null, dotEls = [];

  function pageSize() {
    const w = window.innerWidth;
    if (w < 640)  return 1;
    if (w < 992)  return 2;
    return 3;
  }
  function pageCount() { return Math.ceil(cards.length / pageSize()); }

  function buildDots() {
    dotsWrap.innerHTML = ''; dotEls = [];
    for (let i = 0; i < pageCount(); i++) {
      const d = document.createElement('button');
      d.className = 'exp-car-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Page ${i+1}`);
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
      dotEls.push(d);
    }
  }
  function syncDots() { dotEls.forEach((d,i) => d.classList.toggle('active', i === currentPage)); }

  function arrowPad() {
    return 0; /* arrows are outside the wrap (positioned on exp-carousel-outer), wrap clientWidth = full card area */
  }

  function applyLayout() {
    const ps   = pageSize();
    const gap  = 16;
    const availW = wrap.clientWidth;
    const cardW  = ps === 1 ? availW : (availW - gap * (ps - 1)) / ps;
    cards.forEach(c => {
      c.style.flex       = `0 0 ${cardW}px`;
      c.style.minWidth   = `${cardW}px`;
      c.style.maxWidth   = `${cardW}px`;
      c.style.marginRight = `${gap}px`;
    });
  }

  function goTo(page) {
    const ps  = pageSize();
    const pc  = pageCount();
    currentPage = Math.max(0, Math.min(page, pc - 1));
    const gap  = 16;
    const availW = wrap.clientWidth;
    const cardW  = ps === 1 ? availW : (availW - gap * (ps - 1)) / ps;
    const offset = currentPage * ps * (cardW + gap);
    track.style.transform = `translateX(-${offset}px)`;
    prevBtn.classList.toggle('disabled', currentPage === 0);
    nextBtn.classList.toggle('disabled', currentPage >= pc - 1);
    syncDots();
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo(currentPage >= pageCount() - 1 ? 0 : currentPage + 1), 4500);
  }

  function reinit() {
    applyLayout(); buildDots(); currentPage = 0; goTo(0); resetAuto();
  }

  reinit();
  prevBtn.addEventListener('click', () => { goTo(currentPage - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goTo(currentPage + 1); resetAuto(); });
  wrap.addEventListener('mouseenter', () => clearInterval(autoTimer));
  wrap.addEventListener('mouseleave', resetAuto);

  let tx0 = 0;
  wrap.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; clearInterval(autoTimer); }, {passive:true});
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx0;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? currentPage + 1 : currentPage - 1);
    setTimeout(resetAuto, 500);
  }, {passive:true});

  let resizeTimer;
  window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(reinit, 180); });
})();

/* ===== Research Section ===== */
const papers = [
{
  status          : 'Preprint',
  type            : 'Article',
  title           : 'Design of a Neural Collaborative Filtering–Based Movie Recommendation System: From-Scratch Implementation, PyTorch Benchmarking and Production Architecture',
  subject         : 'Computer Science & Mathematics — Artificial Intelligence and Machine Learning',
  abstract        : 'A complete neural collaborative filtering system for movie recommendations, built two ways: a from-scratch NumPy implementation with hand-derived backpropagation, and an optimized PyTorch version accelerated on Apple Silicon (MPS). Benchmarked on MovieLens, then deployed as a production microservices stack with a FastAPI gateway, a dedicated inference server, PostgreSQL, and a Netflix-style frontend with a hybrid cold-start module.',
  
  stats           : [
                      { val: '3.39×', label: 'Faster training (PyTorch vs. NumPy)' },
                      { val: '0.615', label: 'Peak HR@10 recommendation quality' },
                      { val: '0.2257', label: 'Final BCE loss (Scratch NCF)' }
                    ],

  keywords        : [
                      'Neural Collaborative Filtering',
                      'Recommender Systems',
                      'Matrix Factorization',
                      'Implicit Feedback',
                      'Deep Learning',
                      'Microservices Architecture',
                      'Scalable Deployment',
                      'MovieLens'
                    ],

  platform        : 'Preprints.org',
  preprintId      : '212150',
  doi             : 'https://doi.org/10.20944/preprints202605.0449.v1',
  doiShort        : 'doi.org/10.20944/preprints202605.0449.v1',

  author          : { 
                      initials: 'RK', 
                      name: 'RAHUL K P', 
                      qual: 'MSc Computer Science', 
                      org: 'University of Calicut', 
                      email: 'rahul.kp.msc.cs@gmail.com' 
                    },

  supervisor      : { 
                      initials: 'SK', 
                      name: 'Dr. Seema S.', 
                      qual: 'MCA · MBA · MPhil · PhD', 
                      org: 'University of Calicut', 
                      email: 'seema.karuvarath@gmail.com' 
                    },

  methodology     : 'The study implements Neural Collaborative Filtering from the ground up using NumPy with analytically derived gradients, then replicates the same architecture in PyTorch leveraging Apple Silicon MPS acceleration. Both implementations are rigorously benchmarked on the MovieLens 1M dataset using leave-one-out evaluation. A hybrid cold-start module blending NCF scores with content/popularity signals supplements the collaborative signal for new users, and the system is deployed as a four-service microservices stack with a FastAPI gateway, an isolated PyTorch inference server, PostgreSQL, Redis caching, and a Netflix-style TMDB-integrated frontend.',
  reproducibility : 'Published as an open-access CC BY 4.0 preprint on Preprints.org (MDPI). The from-scratch NumPy baseline requires no GPU; the PyTorch variant targets MPS/CUDA.',
  
  contributions   : [
                      'From-scratch NCF',
                      'MPS Acceleration',
                      'Hybrid Cold-Start',
                      'Microservices Deploy',
                      'Benchmarking Suite'
                    ],
},
  // {
  //   status: 'Preprint',
  //   type: 'Article',
  //   title: 'Benchmarking Retrieval-Augmented Generation Pipelines: Chunking Strategies, Embedding Models, and Reranker Impact on Answer Faithfulness',
  //   subject: 'Computer Science & Mathematics — Natural Language Processing & Information Retrieval',
  //   abstract: 'A systematic empirical study of RAG pipeline design choices across three axes: document chunking strategy (fixed-size, sentence-aware, semantic), embedding model family (dense bi-encoder vs. sparse BM25 vs. hybrid), and reranker placement (cross-encoder vs. no reranking). Evaluated on a curated QA benchmark spanning technical documentation, scientific abstracts, and long-form prose. Faithfulness, answer relevancy, and context precision are measured using the RAGAS framework. Results show semantic chunking with cross-encoder reranking yields the highest faithfulness at the cost of 2.4× latency compared to fixed-size + BM25 baselines.',
  //   stats: [
  //     { val: '94.2%', label: 'Peak faithfulness (RAGAS)' },
  //     { val: '2.4×', label: 'Latency overhead of best pipeline' },
  //     { val: '12', label: 'Pipeline configurations benchmarked' }
  //   ],
  //   keywords: ['Retrieval-Augmented Generation','RAG','Chunking Strategy','Bi-Encoder','BM25','Cross-Encoder Reranking','RAGAS','LLM Evaluation'],
  //   platform: 'Preprints.org',
  //   preprintId: 'TBD',
  //   doi: '#',
  //   doiShort: 'Submission in progress',
  //   author: { initials: 'RK', name: 'Rahul K P', qual: 'MSc Computer Science, Final Year', org: 'University of Calicut', email: 'rahul.kp.msc.cs@gmail.com' },
  //   supervisor: { initials: 'SK', name: 'Dr. Seema S.', qual: 'MCA · MBA · MPhil · PhD', org: 'University of Calicut', email: 'seema.karuvarath@gmail.com' },
  //   methodology: 'Twelve distinct RAG pipeline configurations are constructed by varying chunking strategy (fixed-size 256/512 tokens, sentence-aware, recursive semantic), embedding model (BGE-M3, E5-large, BM25), and reranking stage (none, cross-encoder BGE-reranker-v2). Each pipeline is evaluated on 300 QA pairs across three domain categories using the RAGAS evaluation suite measuring faithfulness, answer relevancy, context recall, and context precision. Latency profiling is performed under single-request and batch-10 conditions.',
  //   reproducibility: 'All 12 pipeline configurations, evaluation scripts, and benchmark datasets are released. Experiments can be reproduced on CPU (slower) or with any CUDA-capable GPU. No proprietary data or model weights are required beyond publicly available HuggingFace checkpoints.',
  //   contributions: ['12-config RAG benchmark','Semantic chunking analysis','Cross-encoder reranking study','RAGAS evaluation suite','Latency-faithfulness tradeoff'],
  // }
];

function renderPaper(p) {
  return `
<div class="paper-card">
  <div class="paper-top">
    <span class="paper-status"><span class="dot"></span>${p.status}</span>
    <span class="article-type">${p.type}</span>
  </div>
  <h3 class="paper-title">${p.title}</h3>
  <span class="paper-subject">${p.subject}</span>

  <!-- LEFT COLUMN -->
  <div class="paper-col-left">
    <p class="paper-abstract">${p.abstract}</p>
    <div class="keyword-row">
      ${p.keywords.map(k=>`<span class="keyword-chip">${k}</span>`).join('')}
    </div>
    <div class="stats-row">
      ${p.stats.map(s=>`<div class="stat-box"><div class="stat-value">${s.val}</div><div class="stat-label">${s.label}</div></div>`).join('')}
    </div>
    <div class="paper-method-row">
      <div class="paper-method-label"><i class="bi bi-diagram-3 me-2"></i>Methodology</div>
      <p class="paper-method-text">${p.methodology}</p>
    </div>
    <div class="paper-repro-row">
      <i class="bi bi-box-seam me-2"></i><strong>Reproducibility:</strong>
      <span class="text-muted-2"> ${p.reproducibility}</span>
    </div>
  </div>

  <!-- RIGHT COLUMN -->
  <div class="paper-col-right">
    <div class="meta-grid">
      <div class="meta-cell"><div class="meta-label">Platform</div><div class="meta-value">${p.platform}</div></div>
      <div class="meta-cell"><div class="meta-label">Preprint ID</div><div class="meta-value">${p.preprintId}</div></div>
      <div class="meta-cell" style="grid-column:1/-1"><div class="meta-label">DOI</div><div class="meta-value">${p.doi !== '#' ? `<a href="${p.doi}" target="_blank" rel="noopener">${p.doiShort}</a>` : p.doiShort}</div></div>
    </div>
    <div class="paper-contrib-row">
      <div class="paper-contrib-label">Key Contributions</div>
      <div class="paper-contrib-chips">
        ${p.contributions.map(c=>`<span>${c}</span>`).join('')}
      </div>
    </div>
    <div class="people-grid">
      <div class="supervisor">
        <div class="person-role">Author</div>
        <div class="supervisor-body">
          <div class="supervisor-avatar">${p.author.initials}</div>
          <div class="supervisor-info">
            <div class="supervisor-name">${p.author.name}</div>
            <div class="supervisor-qual">${p.author.qual}</div>
            <div class="supervisor-meta"><span>${p.author.org}</span></div>
          </div>
        </div>
      </div>
      <div class="supervisor">
        <div class="person-role">Supervisor</div>
        <div class="supervisor-body">
          <div class="supervisor-avatar">${p.supervisor.initials}</div>
          <div class="supervisor-info">
            <div class="supervisor-name">${p.supervisor.name}</div>
            <div class="supervisor-qual">${p.supervisor.qual}</div>
            <div class="supervisor-meta"><span>${p.supervisor.org}</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="paper-cite-box">
      <div class="paper-cite-label"><i class="bi bi-quote me-1"></i>How to Cite</div>
      <p class="paper-cite-text">Rahul K P (2026). <em>${p.title.split('–')[0].trim()}.</em> Preprints.org${p.preprintId !== 'TBD' ? `, ${p.preprintId}` : ''}. ${p.doi !== '#' ? `<a href="${p.doi}" target="_blank" rel="noopener">DOI: ${p.doiShort}</a>` : 'DOI pending.'}</p>
    </div>
  </div>

  <div class="paper-actions">
    ${p.doi !== '#' ? `<a class="btn-primary" href="${p.doi}" target="_blank" rel="noopener">View Publication ↗</a><a class="btn-ghost" href="${p.doi}" target="_blank" rel="noopener">Copy DOI</a>` : `<span class="btn-ghost" style="opacity:.6;cursor:default"><i class="bi bi-clock me-1"></i>Submission in Progress</span>`}
    <span class="id-chip">Preprint <b>#${p.preprintId}</b></span>
  </div>
</div>`;
}

document.getElementById('research-grid').innerHTML = papers.map(renderPaper).join('');

/* ===== Research Carousel ===== */
(function() {
  const track = document.getElementById('research-grid');
  const wrap  = document.getElementById('research-carousel-wrap');
  const dotsWrap = document.getElementById('res-car-dots');
  const prevBtn = wrap.querySelector('.res-car-prev');
  const nextBtn = wrap.querySelector('.res-car-next');
  if (!track || !wrap || papers.length <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  const cards = Array.from(track.children);
  let cur = 0, dotEls = [];

  function buildDots() {
    dotsWrap.innerHTML = ''; dotEls = [];
    cards.forEach((_, i) => {
      const d = document.createElement('button');
      d.className = 'res-car-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Article ${i+1}`);
      d.addEventListener('click', () => goTo(i));
      dotsWrap.appendChild(d);
      dotEls.push(d);
    });
  }

  function applyLayout() {
    const availW = wrap.clientWidth - 88;
    cards.forEach(c => {
      c.style.flex = `0 0 ${availW}px`;
      c.style.minWidth = `${availW}px`;
      c.style.maxWidth = `${availW}px`;
      c.style.marginRight = '24px';
    });
  }

  function goTo(page) {
    cur = Math.max(0, Math.min(page, cards.length - 1));
    const availW = wrap.clientWidth - 88;
    const offset = cur * (availW + 24);
    track.style.transform = `translateX(-${offset}px)`;
    prevBtn.classList.toggle('disabled', cur === 0);
    nextBtn.classList.toggle('disabled', cur >= cards.length - 1);
    dotEls.forEach((d,i) => d.classList.toggle('active', i === cur));
  }

  function reinit() { applyLayout(); buildDots(); cur = 0; goTo(0); }
  reinit();

  prevBtn.addEventListener('click', () => goTo(cur - 1));
  nextBtn.addEventListener('click', () => goTo(cur + 1));

  let tx0 = 0;
  wrap.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX; }, {passive:true});
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx0;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? cur + 1 : cur - 1);
  }, {passive:true});

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(reinit, 180); });
})();


/* ===== TECH STACK CATEGORIES (10) ===== */
const techCategories = [
  { n:1, title:'AI & Gen AI', icon:'bi-cpu',
    items:[
      {name:'Python',icon:'bi-filetype-py',level:'Expert'},
      {name:'Large Language Models',icon:'bi-chat-square-text',level:'Advanced'},
      {name:'Prompt Engineering',icon:'bi-magic',level:'Advanced'},
      {name:'Generative AI',icon:'bi-stars',level:'Advanced'},
      {name:'AI Infrastructure',icon:'bi-hdd-network',level:'Intermediate'},
      {name:'Transformer Models',icon:'bi-diagram-3',level:'Advanced'},
      {name:'BERT',icon:'bi-translate',level:'Intermediate'},
      {name:'TensorFlow',icon:'bi-cpu',level:'Advanced'},
      {name:'PyTorch',icon:'bi-fire',level:'Expert'},
    ],
    insight: 'From GPT fine-tuning to building RAG pipelines — this is the core of my engineering identity.'
  },
  { n:2, title:'Machine Learning & Deep Learning', icon:'bi-diagram-3',
    items:[
      {name:'Machine Learning',icon:'bi-graph-up',level:'Expert'},
      {name:'Deep Learning',icon:'bi-layers',level:'Advanced'},
      {name:'Graph Neural Networks',icon:'bi-share',level:'Intermediate'},
      {name:'Statistics',icon:'bi-calculator',level:'Advanced'},
      {name:'CNN',icon:'bi-grid-3x3-gap',level:'Advanced'},
      {name:'RNN',icon:'bi-arrow-repeat',level:'Advanced'},
      {name:'LSTM',icon:'bi-clock-history',level:'Advanced'},
      {name:'EDA',icon:'bi-search',level:'Expert'},
      {name:'NumPy',icon:'bi-123',level:'Expert'},
      {name:'Pandas',icon:'bi-table',level:'Expert'},
      {name:'Matplotlib',icon:'bi-bar-chart',level:'Advanced'},
      {name:'Seaborn',icon:'bi-graph-up-arrow',level:'Advanced'},
    ],
    insight: 'Built NCF systems from scratch with hand-derived backprop — nothing replaces fundamentals.'
  },
  { n:3, title:'Data Science & Analytics', icon:'bi-bar-chart-line',
    items:[
      {name:'SQL',icon:'bi-database',level:'Advanced'},
      {name:'Pandas',icon:'bi-table',level:'Expert'},
      {name:'NumPy',icon:'bi-123',level:'Expert'},
      {name:'Statistics',icon:'bi-calculator',level:'Advanced'},
      {name:'Data Visualization',icon:'bi-pie-chart',level:'Advanced'},
      {name:'EDA',icon:'bi-search',level:'Expert'},
      {name:'Matplotlib',icon:'bi-bar-chart',level:'Advanced'},
      {name:'Seaborn',icon:'bi-graph-up-arrow',level:'Advanced'},
      {name:'R Programming',icon:'bi-r-circle',level:'Intermediate'},
    ],
    insight: 'Data tells a story — I make sure it\'s the right one by cleaning, exploring, and validating rigorously.'
  },
  { n:4, title:'MLOps & AI Infrastructure', icon:'bi-gear-wide-connected',
    items:[
      {name:'Docker',icon:'bi-box-seam',level:'Advanced'},
      {name:'Git',icon:'bi-git',level:'Expert'},
      {name:'GitHub',icon:'bi-github',level:'Expert'},
      {name:'Linux',icon:'bi-terminal',level:'Advanced'},
      {name:'DevOps',icon:'bi-arrow-repeat',level:'Intermediate'},
      {name:'CI/CD',icon:'bi-diagram-2',level:'Intermediate'},
      {name:'Model Deployment',icon:'bi-rocket-takeoff',level:'Advanced'},
    ],
    insight: 'A model that can\'t be deployed is just a science fair project. I build for production from day one.'
  },
  { n:5, title:'AI Backend & Deployment', icon:'bi-lightning-charge',
    items:[
      {name:'FastAPI',icon:'bi-lightning',level:'Expert'},
      {name:'Flask',icon:'bi-cup-hot',level:'Advanced'},
      {name:'Python',icon:'bi-filetype-py',level:'Expert'},
      {name:'Model Serving',icon:'bi-broadcast',level:'Advanced'},
      {name:'API Development',icon:'bi-hdd-network',level:'Advanced'},
    ],
    insight: 'Every ML model deserves a clean, well-documented API. FastAPI + async inference is my go-to stack.'
  },
  { n:6, title:'Software Engineering & Programming', icon:'bi-code-slash',
    items:[
      {name:'DSA',icon:'bi-diagram-3',level:'Advanced'},
      {name:'Python',icon:'bi-filetype-py',level:'Expert'},
      {name:'Java',icon:'bi-cup',level:'Advanced'},
      {name:'C',icon:'bi-c-circle',level:'Intermediate'},
      {name:'C++',icon:'bi-c-square',level:'Intermediate'},
      {name:'SQL',icon:'bi-database',level:'Advanced'},
      {name:'GitHub',icon:'bi-github',level:'Expert'},
      {name:'Linux',icon:'bi-terminal',level:'Advanced'},
    ],
    insight: 'Strong CS fundamentals are what separate AI engineers who prototype from those who ship.'
  },
  { n:7, title:'Mathematics for AI', icon:'bi-calculator',
    items:[
      {name:'Calculus',icon:'bi-infinity',level:'Advanced'},
      {name:'Linear Algebra',icon:'bi-grid-3x3-gap',level:'Advanced'},
      {name:'Probability',icon:'bi-dice-5',level:'Advanced'},
      {name:'Statistics',icon:'bi-bar-chart',level:'Advanced'},
      {name:'Optimization',icon:'bi-sliders',level:'Intermediate'},
    ],
    insight: 'Backprop is just the chain rule. Attention is just dot products. Math makes everything click.'
  },
  { n:8, title:'Problem Solving & Critical Thinking', icon:'bi-lightbulb',
    items:[
      {name:'Algorithm Design',icon:'bi-diagram-2',level:'Advanced'},
      {name:'Analytical Thinking',icon:'bi-search',level:'Expert'},
      {name:'Problem Solving',icon:'bi-puzzle',level:'Expert'},
    ],
    insight: 'The ability to decompose complex, ill-defined problems is the meta-skill that makes everything else useful.'
  },
  { n:9, title:'Professional Skills', icon:'bi-people',
    items:[
      {name:'Communication',icon:'bi-chat-dots',level:'Advanced'},
      {name:'Emotional Intelligence',icon:'bi-heart-pulse',level:'Advanced'},
      {name:'Time Management',icon:'bi-hourglass-split',level:'Advanced'},
      {name:'Stress Management',icon:'bi-activity',level:'Advanced'},
      {name:'Conflict Resolution',icon:'bi-shield-check',level:'Intermediate'},
      {name:'Public Speaking',icon:'bi-megaphone',level:'Intermediate'},
    ],
    insight: 'Technical excellence without communication is a bottleneck. I invest in both sides of the equation.'
  },
  { n:10, title:'Natural Language Processing', icon:'bi-eye',
    items:[
      {name:'OpenCV',icon:'bi-camera-video',level:'Advanced'},
      {name:'Computer Vision',icon:'bi-eye',level:'Advanced'},
      {name:'Image Processing',icon:'bi-image',level:'Advanced'},
      {name:'NLP',icon:'bi-translate',level:'Advanced'},
      {name:'Tokenization',icon:'bi-text-paragraph',level:'Advanced'},
      {name:'BERT',icon:'bi-translate',level:'Intermediate'},
      {name:'Transformers',icon:'bi-diagram-3',level:'Advanced'},
      {name:'HuggingFace',icon:'bi-emoji-smile',level:'Advanced'},
    ],
    insight: 'From YOLO detection pipelines to fine-tuned BERT classifiers — vision and language are my playgrounds.'
  },
];

/* ===== Certification helpers ===== */
const cUrl  = id => `https://www.coursera.org/account/accomplishments/verify/${id}`;
const cProf = id => `https://www.coursera.org/account/accomplishments/professional-cert/${id}`;
const cSpec = id => `https://www.coursera.org/account/accomplishments/specialization/${id}`;
const C  = (issuer,name,id,icon='bi-award') => ({issuer,name,id,icon,url:cUrl(id)});
const CP = (issuer,name,id,icon='bi-award') => ({issuer,name,id,icon,url:cProf(id)});
const CS = (issuer,name,id,icon='bi-award') => ({issuer,name,id,icon,url:cSpec(id)});


/* ===== CERTIFICATION CATEGORIES (10) ===== */
const certCategories = [
  { n:1, title:'Artificial Intelligence & Generative AI', icon:'bi-cpu', certs:[
      CP('IBM','Generative AI Engineering — Professional Certificate','CG66922OUOBS','bi-award'),
      C('Adobe','Prompting for Generative AI','XW9JINKBBQ52','bi-magic'),
      C('Google','Introduction to AI','BU81GMHJ110I','bi-google'),
      C('Packt','Architecting AI Solutions – Scalable GenAI Systems','PJS3NVRLAUAE','bi-diagram-3'),
      C('IBM','Generative AI Engineering — Course 1','VQXHOKSFJEA9','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 2','AGDXXMDHVJD1','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 3','04EV0RHF7FJC','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 4','AU36M0J1J2GQ','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 5','I8DIQ93TGKCG','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 6','JX17J283O48E','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 7','H2D1OJ7OH24M','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 8','EDYUIO41MUL5','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 9','188NURP3GHX7','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 10','20QR6ZDKZDF7','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 11','455HIBHVWD13','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 12','14I3PFJ3RVIE','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 13','VG1Z593BKOWB','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 14','O2X3HM9RIV4K','bi-cpu'),
      C('IBM','Generative AI Engineering — Course 15','R7CF14OZGF83','bi-cpu'),
      C('Google Cloud','Transformer Models and BERT Model','K7ZQ0AF1Q2SF','bi-cloud'),
      
  ]},
  { n:2, title:'Machine Learning & Deep Learning', icon:'bi-diagram-3', certs:[
      C('DeepLearning.AI','Neural Networks and Deep Learning','DPT72QDPLAZV','bi-cpu'),
  ]},
  { n:3, title:'Data Science & Analytics', icon:'bi-bar-chart-line', certs:[
      C('UC Davis','SQL for Data Science','FD4Q2PG62LDM','bi-database'),
  ]},
  { n:4, title:'MLOps & AI Infrastructure', icon:'bi-gear-wide-connected', certs:[
      CS('Duke University','MLOps | Machine Learning Operations Specialization','0MS5AHGLJJGH','bi-gear-wide-connected'),
      CS('Google Cloud','Google Cloud Al Infrastructure Specialization','KQIDFRTDW199','bi-cloud'),
      C('LearnKartS','Docker Fundamentals','8V4N8RBXGOS6','bi-box-seam'),
      C('Atlassian','Version Control with Git','PK3J1ZO0B122','bi-git'),
      C('Duke University','MLOps Specialization — Course 1','UCY8YLI6L9MZ','bi-gear-wide-connected'),
      C('Duke University','MLOps Specialization — Course 2','59RGIBQ7SCU7','bi-gear-wide-connected'),
      C('Duke University','MLOps Specialization — Course 3','AQNWLT32VQKQ','bi-gear-wide-connected'),
      C('Duke University','MLOps Specialization — Course 4','W2TNBS2UGPLO','bi-gear-wide-connected'),   
      C('Google Cloud','AI Infrastructure — Course 1','LI7JH238VGT6','bi-cloud'),
      C('Google Cloud','AI Infrastructure — Course 2','G99MCFGNYMJ4','bi-cloud'),
      C('Google Cloud','AI Infrastructure — Course 3','385EZXHOESI5','bi-cloud'), 


  ]},
  { n:6, title:'Software Engineering & Programming', icon:'bi-code-slash', certs:[
      C('Microsoft','Advanced C++ Programming and Modern Practices','V54MKYHP7ARC','bi-microsoft'),
      C('Microsoft','Introduction to GitHub Copilot','EZJPDEKEOVM1','bi-microsoft'),
  ]},
  { n:7, title:'Mathematics for AI', icon:'bi-calculator', certs:[
      C('The University of Sydney','Introduction to Calculus','E9UQH794HR4X','bi-calculator'),
      C('The University of Sydney','Introduction to Advanced Calculus','XZHYJ6U5P3OS','bi-calculator'),
      C('University of London','Geometry and Calculus for Computing','G9TYVT2D048H','bi-rulers'),
      C('HKUST','Matrix Algebra for Engineers','QDXTI5AWJ6BT','bi-grid-3x3-gap'),
  ]},
  // { n:8, title:'Problem Solving & Critical Thinking', icon:'bi-lightbulb', certs:[
  //     C('LearnKartS','Master Problem Solving and Critical Thinking','TO1XYHKVBDML','bi-lightbulb'),
  // ]},
  { n:8, title:'Problem Solving & Communication', icon:'bi-people', certs:[
      C('LearnKartS','Problem Solving and Critical Thinking','TO1XYHKVBDML','bi-lightbulb'),
      C('Packt','Managing Time and Stress','09VS34R0FMQN','bi-hourglass-split'),
      C('Packt','Managing Conflict','TSSY21DDA3RV','bi-shield-check'),
      C('Packt','Emotional Intelligence','OT8A9ERTF2EC','bi-heart-pulse'),
      C('UC San Diego','Communicating with the Public','5Z4BM6MEJGGZ','bi-megaphone'),
      C('Google','Accelerate Your Job Search with AI','E15GYYHNXF7I','bi-google'),
  ]}
];
/* Level badge color */
const levelColor = { Expert: '#22c55e', Advanced: '#3b82f6', Intermediate: '#f59e0b' };

/* Tech card renderer */
const techCard = (item) => {
  const descByName = {
    Python: 'Clean, expressive code for ML pipelines, APIs, and automation.',
    Java: 'Performance-minded development for scalable services and tooling.',
    C: 'Low-level fundamentals that sharpen memory and systems intuition.',
    'C++': 'High-performance implementations for algorithms and production systems.',
    SQL: 'Query-first thinking for analytics, data modeling, and validation.',
    NumPy: 'Vectorized numerics for fast experimentation and reliable math.',
    Pandas: 'Data shaping and ETL that makes experiments reproducible.',
    Matplotlib: 'Clear visual storytelling for debugging and results communication.',
    Statistics: 'Probabilistic reasoning for modeling, evaluation, and uncertainty.',
    'Machine Learning': 'Model design, training strategies, and rigorous evaluation.',
    'Deep Learning': 'Neural architectures and training workflows that converge well.',
    CNN: 'Vision feature extractors built for accuracy and efficiency.',
    RNN: 'Sequence modeling approaches for temporal dependencies.',
    LSTM: 'Long-range sequence learning for forecasting and time-series tasks.',
    'Graph Neural Networks': 'Reasoning over structured relationships and graph data.',
    EDA: 'Exploration pipelines to uncover patterns and data quality issues.',
    'Data Visualization': 'Dashboards and plots that make insights actionable.',
    Seaborn: 'Polished visualizations for quick iteration and analysis.',
    'R Programming': 'Statistical tooling for experiments and analysis workflows.',
    Docker: 'Containerization for consistent environments and easy deployment.',
    Git: 'Version control discipline for collaborative engineering.',
    GitHub: 'Repository workflows that keep code, docs, and CI aligned.',
    Linux: 'Shell-first operations for servers, tooling, and performance tuning.',
    DevOps: 'Automation practices to reduce friction between dev and prod.',
    'CI/CD': 'Automated testing and delivery pipelines for dependable releases.',
    'Model Deployment': 'Packaging and serving strategies for production inference.',
    FastAPI: 'High-performance Python APIs with clean async patterns.',
    Flask: 'Lightweight service development for focused backend needs.',
    'Model Serving': 'Serving strategies that balance latency, throughput, and cost.',
    'API Development': 'Designing maintainable interfaces with validation and docs.',
    Python: 'Clean, expressive code for ML pipelines, APIs, and automation.',
    'Large Language Models': 'LLM workflows: prompts, evaluation, and task-specific adaptation.',
    'Prompt Engineering': 'Prompting techniques for robustness, correctness, and style.',
    'Generative AI': 'Building GenAI experiences with grounding and safe outputs.',
    'AI Infrastructure': 'Tools and patterns to support training, evaluation, and deployment.',
    'Transformer Models': 'Attention-first architectures and scaling intuition.',
    BERT: 'Fine-tuning and embeddings for text classification and retrieval.',
    TensorFlow: 'Training and experimentation with TF-based deep learning.',
    PyTorch: 'Dynamic training and fast iteration for state-of-the-art models.',
    'Artificial Intelligence': 'AI systems that learn, reason, and generalize.',
    'Calculus': 'Core math for gradients and optimization intuition.',
    'Linear Algebra': 'Vector/matrix thinking for embeddings and representations.',
    Probability: 'Modeling uncertainty and making evaluation mathematically sound.',
    Optimization: 'Loss shaping, constraints, and training dynamics that work.',
    'Algorithm Design': 'Designing solutions that are correct and efficient.',
    'Analytical Thinking': 'Breaking down problems and validating assumptions.',
    'Problem Solving': 'Turning ambiguity into structured plans and shipped outcomes.',
    Communication: 'Explaining complex ideas clearly for collaboration and impact.',
    'Emotional Intelligence': 'Human-centered engineering through empathy and feedback.',
    'Time Management': 'Prioritization and execution strategies for long projects.',
    'Stress Management': 'Sustaining productivity and quality under pressure.',
    'Conflict Resolution': 'Handling disagreements constructively and keeping teams effective.',
    'Public Speaking': 'Presenting results with clarity, structure, and confidence.',
    OpenCV: 'Computer vision tooling for detection, preprocessing, and pipelines.',
    'Computer Vision': 'Vision systems for real-world perception problems.',
    'Image Processing': 'Transformations and enhancement techniques that improve signals.',
    NLP: 'Text pipelines for preprocessing, understanding, and evaluation.',
    Tokenization: 'Token-level modeling for stable and meaningful text representations.',
    Transformers: 'Building blocks for modern language and vision models.',
    HuggingFace: 'Ecosystem workflows for pretrained models and fine-tuning.',
  };

  const baseDesc = descByName[item.name] || 'Hands-on skills applied in projects to deliver measurable results.';
  const desc = `${baseDesc} With real-world focus and continuous improvement.`;


  return `
  <div class="cat-tech-card glass">
    <div class="tech-icon"><i class="bi ${item.icon}"></i></div>
    <div class="tech-card-body">
      <h6>${item.name}</h6>
      <p class="tech-desc">${desc}</p>
      <span class="tech-level-badge" style="--lc:${levelColor[item.level]||'#7c3aed'}">${item.level}</span>
    </div>
  </div>`;
};

const certCard = c => `
  <div class="cat-cert-card glass">
    <button class="cert-preview" data-img="images/certs/${c.id}.jpeg" data-title="${c.name.replace(/"/g,'&quot;')}" data-issuer="${c.issuer}" data-url="${c.url}" aria-label="Preview ${c.name}">
      <img src="images/certs/${c.id}.jpeg" alt="${c.name}" loading="lazy" onerror="this.style.display='none'"/>
      <span class="cert-zoom"><i class="bi bi-arrows-fullscreen"></i> Preview</span>
    </button>
    <div class="cert-body">
      <div class="cert-issuer"><i class="bi ${c.icon}"></i> ${c.issuer}</div>
      <h6>${c.name}</h6>
      <div class="cert-actions">
        <a href="${c.url}" target="_blank" rel="noopener" class="verify-btn"><i class="bi bi-patch-check-fill"></i> Verify</a>
        <a href="images/certs/${c.id}.jpeg" download="${c.issuer}-${c.id}.jpeg" class="download-btn" title="Download certificate"><i class="bi bi-download"></i></a>
      </div>
    </div>
  </div>`;

const categoryBlock = (cat, kind) => {
  const items = kind === 'tech' ? cat.items : cat.certs;
  const renderer = kind === 'tech' ? techCard : certCard;
  const countLabel = kind === 'tech'
    ? `${items.length} skill${items.length!==1?'s':''}`
    : `${items.length} cert${items.length!==1?'s':''}`;
  const insight = cat.insight ? `<div class="category-insight"><i class="bi bi-quote"></i>${cat.insight}</div>` : '';
  // Fill blank space when fewer than 3 items
  const fillerNeeded = items.length > 0 && items.length < 3;
  const filler = fillerNeeded ? `<div class="cat-filler-card glass"><div class="filler-inner"><i class="bi bi-plus-circle"></i><p>More skills in this track coming soon — currently building hands-on expertise through projects and certifications.</p></div></div>` : '';
  const dir = cat.n % 2 === 0 ? 'rtl' : 'ltr';
  return `
  <article class="category-block glass" data-aos="fade-up">
    <header class="category-header">
      <div class="category-title">
        <div>
          <h3><i class="bi ${cat.icon}"></i> ${cat.title}</h3>
        </div>
      </div>
      <span class="category-count">${countLabel}</span>
    </header>
    ${insight}
    ${items.length ? `
      <div class="cert-scroller-wrap" data-dir="${dir}">
        <div class="cert-scroller ${kind==='tech'?'tech-scroller':''}">
          ${items.map(renderer).join('')}${filler}
        </div>
      </div>` : `<p class="text-muted-2 small mb-0 mt-3"><i class="bi bi-info-circle"></i> Practical hands-on experience — no formal certification yet.</p>`}
  </article>`;
};

document.getElementById('tech-grid').innerHTML =
  techCategories.map(c => categoryBlock(c, 'tech')).join('');
document.getElementById('certs-grid').innerHTML =
  certCategories.map(c => categoryBlock(c, 'cert')).join('');

/* ===== Smart Carousel =============================================
   Mobile  (<640px)  : 1 card per page, 2.2s auto, swipe support
   Tablet  (640–991) : 2 cards per page, 4s auto
   Desktop (≥992px)  : 3 cards per page, 4s auto
   — strict clipping: NO edge/peek of next cards
   — dot row rendered below each carousel, synced to active page
   ================================================================ */
function buildSmartCarousel(scroller) {
  const wrap = scroller.closest('.cert-scroller-wrap');
  if (!wrap) return;

  const cards = Array.from(scroller.children);
  if (!cards.length) return;

  /* ── remove leftover arrows from previous runs ── */
  wrap.querySelectorAll('.carousel-arrow, .sc-dots').forEach(el => el.remove());

  /* ── arrow buttons (inside wrap for z-index) ── */
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-arrow carousel-prev';
  prevBtn.setAttribute('aria-label', 'Previous');
  prevBtn.innerHTML = '<i class="bi bi-chevron-left"></i>';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-arrow carousel-next';
  nextBtn.setAttribute('aria-label', 'Next');
  nextBtn.innerHTML = '<i class="bi bi-chevron-right"></i>';

  wrap.appendChild(prevBtn);
  wrap.appendChild(nextBtn);

  /* ── dot container — inserted AFTER wrap in the DOM ── */
  const dotsRow = document.createElement('div');
  dotsRow.className = 'sc-dots';
  wrap.insertAdjacentElement('afterend', dotsRow);

  /* ── scroller is a single sliding strip ── */
  scroller.style.cssText += `
    display:flex !important;
    flex-wrap:nowrap !important;
    flex-direction:row !important;
    overflow:visible !important;
    transition:transform 0.52s cubic-bezier(0.22,1,0.36,1);
    will-change:transform;
    padding:0.5rem 0 1rem;
    gap:0 !important;
  `;
  /* wrap clips the strip */
  wrap.style.overflow = 'hidden';
  wrap.style.padding  = '0 44px';   /* room for arrows */

  const GAP_PX = 16; /* 1 rem gap between cards */
  let currentPage = 0;
  let autoTimer   = null;
  let dotEls      = [];

  /* ── breakpoint helpers ── */
  function pageSize() {
    const w = window.innerWidth;
    if (w < 640)  return 1;
    if (w < 992)  return 2;
    return 3;
  }

  function mobileGap() {
    /* On mobile (single-card view), add spacing between swiped cards */
    return window.innerWidth < 640 ? 20 : GAP_PX;
  }

  function pageCount() {
    return Math.ceil(cards.length / pageSize());
  }

  /* ── build / rebuild dot buttons for current page count ── */
  function buildDots() {
    dotsRow.innerHTML = '';
    dotEls = [];
    const n = pageCount();
    for (let i = 0; i < n; i++) {
      const d = document.createElement('button');
      d.className = 'sc-dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Page ${i + 1}`);
      d.addEventListener('click', () => { goTo(i); resetAuto(); });
      dotsRow.appendChild(d);
      dotEls.push(d);
    }
  }

  /* ── sync dots to currentPage ── */
  function syncDots() {
    dotEls.forEach((d, i) => d.classList.toggle('active', i === currentPage));
  }

  /* ── size every card so exactly `ps` cards fill the viewport ── */
  function applyLayout() {
    const ps  = pageSize();
    const gap = ps === 1 ? mobileGap() : GAP_PX;
    /* Available width = wrap width minus the 2×44 px arrow padding */
    const availW = wrap.clientWidth - 88; /* 44px each side */
    const cardW  = ps === 1 ? availW : (availW - gap * (ps - 1)) / ps;

    cards.forEach((c, idx) => {
      c.style.flex       = `0 0 ${cardW}px`;
      c.style.minWidth   = `${cardW}px`;
      c.style.maxWidth   = `${cardW}px`;
      c.style.display    = '';
      /* gap between cards: right margin on all cards (for mobile peek effect) */
      c.style.marginRight = `${gap}px`;
    });
  }

  /* ── slide to a page index ── */
  function goTo(page) {
    const ps  = pageSize();
    const pc  = pageCount();
    currentPage = Math.max(0, Math.min(page, pc - 1));

    const gap    = ps === 1 ? mobileGap() : GAP_PX;
    const availW = wrap.clientWidth - 88;
    const cardW  = ps === 1 ? availW : (availW - gap * (ps - 1)) / ps;
    /* Each page starts at: page * ps * (cardW + gap) */
    const offset = currentPage * ps * (cardW + gap);

    scroller.style.transform = `translateX(-${offset}px)`;

    prevBtn.disabled = (currentPage === 0);
    nextBtn.disabled = (currentPage >= pc - 1);
    prevBtn.classList.toggle('disabled', currentPage === 0);
    nextBtn.classList.toggle('disabled', currentPage >= pc - 1);

    syncDots();
  }

  /* ── auto-advance ── */
  function resetAuto() {
    clearInterval(autoTimer);
    const ms = pageSize() === 1 ? 2200 : 3800;
    autoTimer = setInterval(() => {
      goTo(currentPage >= pageCount() - 1 ? 0 : currentPage + 1);
    }, ms);
  }

  /* ── full reinit on resize ── */
  function reinit() {
    applyLayout();
    buildDots();
    currentPage = 0;
    goTo(0);
    resetAuto();
  }

  /* ── initial setup ── */
  reinit();

  /* ── arrow clicks ── */
  prevBtn.addEventListener('click', () => { goTo(currentPage - 1); resetAuto(); });
  nextBtn.addEventListener('click', () => { goTo(currentPage + 1); resetAuto(); });

  /* ── hover pause (desktop) ── */
  wrap.addEventListener('mouseenter', () => clearInterval(autoTimer));
  wrap.addEventListener('mouseleave', resetAuto);

  /* ── touch swipe ── */
  let tx0 = 0;
  wrap.addEventListener('touchstart', e => {
    tx0 = e.touches[0].clientX;
    clearInterval(autoTimer);
  }, { passive: true });
  wrap.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - tx0;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? currentPage + 1 : currentPage - 1);
    setTimeout(resetAuto, 500);
  }, { passive: true });

  /* ── resize ── */
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(reinit, 180);
  });

  /* ── pause when off-screen ── */
  new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) clearInterval(autoTimer);
      else resetAuto();
    });
  }, { threshold: 0.05 }).observe(wrap);
}

document.querySelectorAll('.cert-scroller-wrap').forEach(wrap => {
  const sc = wrap.querySelector('.cert-scroller');
  if (sc) buildSmartCarousel(sc);
});


/* Cert preview modal */
const cModal = document.getElementById('cert-modal');
const closeCModal = () => cModal.classList.remove('open');
cModal.querySelector('.cert-modal-close').addEventListener('click', closeCModal);
cModal.querySelector('.cert-modal-backdrop').addEventListener('click', closeCModal);
document.addEventListener('keydown', e=>{ if(e.key==='Escape'){ closeCModal(); closePModal(); } });

document.addEventListener('click', e=>{
  const btn = e.target.closest('.cert-preview');
  if(!btn) return;
  const {img,title,issuer,url} = btn.dataset;
  cModal.querySelector('img').src = img;
  cModal.querySelector('.cert-modal-title').textContent = title;
  cModal.querySelector('.cert-modal-issuer').innerHTML = `<i class="bi bi-building"></i> ${issuer}`;
  cModal.querySelector('.cert-modal-verify').href = url;
  const dl = cModal.querySelector('.cert-modal-download');
  dl.href = img;
  dl.setAttribute('download', `${issuer}-${title}.jpeg`);
  cModal.classList.add('open');
});
