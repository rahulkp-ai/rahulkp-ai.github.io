---
title: ""
format:
  pdf:
    documentclass: article
    papersize: letter
    geometry:
      - top=0.45in
      - bottom=0.45in
      - left=0.55in
      - right=0.55in
    fontsize: 10pt
    linestretch: 1.1
    colorlinks: True
    urlcolor: black
    pdf-engine: lualatex
    include-in-header:
      text: |
        \usepackage{titlesec}
        \usepackage{enumitem}
        \usepackage{parskip}
        \usepackage{hyperref}

        \setlength{\parindent}{0pt}
        \setlength{\parskip}{1pt}

        \titleformat{\section}
          {\large\bfseries}
          {}
          {0pt}
          {}

        \titleformat{\subsection}
          {\normalsize\bfseries}
          {}
          {0pt}
          {}

        \titlespacing*{\section}{0pt}{6pt}{3pt}
        \titlespacing*{\subsection}{0pt}{4pt}{1pt}

        \setlist[itemize]{
          leftmargin=1.15em,
          itemsep=0pt,
          topsep=1pt,
          parsep=0pt,
          partopsep=0pt
        }

        \pagestyle{empty}
---

<center>

# RAHUL KP

## Software Engineer Intern

Tirur, Kerala, India· +917909152002
[GitHub](https://github.com/rahulkp-ai) ·[LinkedIn](https://www.linkedin.com/in/rahulkp-ai/) ·[Portfolio](https://rahulkp-ai.netlify.app/#home)
rahulkpkurup@gmail.com

</center>

## EDUCATION

### University of Calicut

**MSc Computer Science** | 2024–2026 · **CGPA: 77%**  
**BSc Computer Science** | 2020–2023

## TECHNICAL SKILLS

**Languages:** Python, Java, C/C++, SQL  
**Core CS:** Data Structures, Algorithms, OOP, REST APIs, Authentication, Authorization, Git, CI/CD  
**Backend & Web:** FastAPI, Flask, Node.js, Express.js, React, Next.js  
**Databases & Infrastructure:** PostgreSQL, Redis, Docker, Kubernetes, GitHub Actions  
**Observability & Deployment:** Prometheus, Grafana, Vercel, Render  
**Machine Learning:** PyTorch, NumPy, scikit-learn, Neural Networks, CNNs

## PROJECTS

### RankScript — Full-Stack Learning & Ranking Platform

**FastAPI · Next.js · PostgreSQL · Redis · Docker**  
[GitHub](https://github.com/rahulkp-ai/rankscript) · [Live Demo](https://rankscript.vercel.app/auth/login)

- Engineered a full-stack platform with layered backend architecture separating API routes, business logic, and database models using **FastAPI, PostgreSQL, Redis, and Next.js**.
- Implemented **role-based access control** for student, mentor, and admin workflows with JWT authentication and refresh-token rotation.
- Built a weighted ranking engine combining quiz scores, assignments, completion rates, and activity streaks into **district, state, and national leaderboards**, using PostgreSQL materialized views for efficient pagination.
- Developed **266 automated backend tests** and containerized the application with Docker for reproducible deployment.

### PhishGuard — Production ML API & MLOps System

**Python · Flask · scikit-learn · Docker · Kubernetes · Prometheus**  
[GitHub](https://github.com/rahulkp-ai/phishguard) · [Live Demo](https://phishguard-xozj.onrender.com/)

- Engineered a production REST API with prediction and batch endpoints, input validation, request tracing, structured JSON logging, and Prometheus metrics for phishing-URL detection (~95% accuracy, 0.98 ROC-AUC).
- Implemented automated data-drift monitoring and Kubernetes deployment with **HPA and Kustomize** for horizontal autoscaling.
- Built GitHub Actions CI/CD with **CodeQL static analysis**, backed by **222 automated tests achieving 98.7% code coverage**.

### TaskFlow — Full-Stack Kanban Task Management App

**React · Express · MongoDB**  
[GitHub](https://github.com/rahulkp-ai/taskflow) · [Live Demo](https://taskflow-iota-ecru.vercel.app/log-in)

- Built and deployed a full-stack Kanban application with React/Vite, Express, and MongoDB, including drag-and-drop task management and role-based workflows.
- Diagnosed and resolved a cross-site cookie authentication failure caused by **Safari Intelligent Tracking Prevention**, re-architecting authentication through a same-origin Vercel API proxy.
- Resolved production **CORS** and deployment issues, including a silently failing database seeder on Render's native runtime.

## CERTIFICATIONS

- [IBM Generative AI Engineering Professional Certificate](https://www.coursera.org/account/accomplishments/professional-cert/CG66922OUOBS)
- [Duke University MLOps | Machine Learning Operations Specialization](https://www.coursera.org/account/accomplishments/specialization/0MS5AHGLJJGH)
- [Google Cloud AI Infrastructure Specialization](https://www.coursera.org/account/accomplishments/specialization/KQIDFRTDW199)
