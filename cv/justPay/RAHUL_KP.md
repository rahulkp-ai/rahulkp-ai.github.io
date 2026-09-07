---
title: ""
author: ""
date: ""
format:
  pdf:
    pdf-engine: xelatex
    documentclass: scrartcl
    classoption:
      - DIV=11
      - numbers=noendperiod
    papersize: a4
    fontsize: 8.5pt
    geometry:
      - top=0.32in
      - bottom=0.32in
      - left=0.42in
      - right=0.42in
    linestretch: 0.88
    colorlinks: true
    linkcolor: black
    urlcolor: black
    toc: false
    pagestyle: empty
    header-includes:
      - |
        \usepackage{enumitem}
        \setlist[itemize]{
          leftmargin=1.15em,
          itemsep=0pt,
          topsep=0pt,
          parsep=0pt,
          partopsep=0pt
        }
      - |
        \usepackage{microtype}
        \setlength{\parindent}{0pt}
        \setlength{\parskip}{1pt}
        \KOMAoptions{headings=small}
        \RedeclareSectionCommand[
          beforeskip=3pt,
          afterskip=1.5pt
        ]{section}
        \RedeclareSectionCommand[
          beforeskip=2pt,
          afterskip=1pt
        ]{subsection}
    keep-tex: false
---

# RAHUL KP

**Software Development Engineer | Backend & AI/ML**
Kerala, India · +91 79091 52002 · [rahulkurup@gmail.com](mailto:rahulkpkurup@gmail.com)
[LinkedIn](https://linkedin.com/in/rahulkp-ai) · [GitHub](https://github.com/rahulkp-ai) · [Portfolio](https://rahulkp-ai.github.io/) · [Hugging Face](https://huggingface.co/rahulkp-ai)

## SUMMARY

Software engineer with an **M.Sc. in Computer Science** and hands-on experience building backend systems, APIs, distributed application architectures, and machine-learning systems. Strong foundation in **Python, C/C++, data structures & algorithms, SQL, FastAPI, PostgreSQL, Redis, Docker, and system design**, complemented by deep-learning and recommendation-system experience. Interested in building **reliable, high-performance backend systems, payment/business logic, API integrations, and scalable infrastructure**.

## TECHNICAL SKILLS

**Languages:** Python, C/C++, Java, JavaScript/TypeScript, SQL
**Backend:** FastAPI, REST APIs, Pydantic, SQLAlchemy, PostgreSQL, Redis
**Engineering:** Data Structures & Algorithms, OOP, System Design, Authentication, API Integration, Testing
**Frontend:** Next.js, React, TypeScript, Tailwind CSS
**DevOps:** Docker, Docker Compose, Nginx, GitHub Actions, Kubernetes, Prometheus, Grafana
**AI/ML:** NumPy, PyTorch, Scikit-learn, Neural Networks, Deep Learning, NLP, LLMs, RAG, Recommender Systems
**Foundations:** Linear Algebra, Probability, Statistics, Machine Learning Mathematics, Functional/Declarative Programming Concepts

## SELECTED PROJECTS

### NCF Recommender System — End-to-End Recommendation Platform

**Python · NumPy · PyTorch · FastAPI · Next.js · PostgreSQL · Docker · Nginx**

- Built a **production-oriented hybrid recommendation system** combining Neural Collaborative Filtering, content-based filtering, and popularity-based recommendations.
- Implemented **NCF from first principles with NumPy**, then benchmarked against an optimized PyTorch implementation with MPS/GPU support.
- Designed a **microservice architecture** separating frontend, API/backend, recommendation engine, and model serving.
- Addressed the **cold-start problem** using hybrid recommendation strategies and implemented movie search/ranking and interaction tracking.
- Achieved **0.6293 Hit@10 and 0.3541 NDCG@10** with the PyTorch model; documented experiments, architecture, and evaluation methodology.

### RankScript — Competitive Learning Platform

**FastAPI · Next.js · PostgreSQL · Redis · Docker · JWT**

- Engineered a full-stack learning platform with **Student, Mentor, and Admin** roles and role-based access control.
- Developed REST APIs using a layered **Route → Service → Model** architecture with SQLAlchemy and Pydantic.
- Implemented course management, quizzes, assignments, authentication, analytics, and competitive district/state/national leaderboards.
- Built a weighted ranking system combining **quiz performance, assignments, course completion, and learning streaks**.
- Used **PostgreSQL for persistent data, Redis for caching, Docker for containerization**, and automated CI/CD.

### ANN Foundation — Neural Network & Autograd Engine

**Pure Python · Automatic Differentiation · Neural Networks · Testing**

- Implemented a neural-network learning pipeline **from mathematical first principles**, without PyTorch or TensorFlow.
- Built reverse-mode **automatic differentiation**, dynamic computation graphs, gradient accumulation, and reverse topological backpropagation.
- Implemented `tanh`, `ReLU`, and `sigmoid` activations plus a composable **Neuron → Layer → MLP** architecture.
- Created **19 gradient-verification tests** comparing analytical gradients against central-difference numerical differentiation.
- Added GitHub Actions CI/CD and deployed an interactive Gradio demonstration on Hugging Face Spaces.

## RESEARCH

**Neural Collaborative Filtering Recommender System**
Research/preprint work covering NCF implementation from first principles, NumPy vs. PyTorch benchmarking, hybrid recommendation architecture, evaluation metrics, and reproducible experiments.

## EDUCATION

**M.Sc. Computer Science** — University of Calicut | **2024–2026**
**B.Sc. Computer Science** — University of Calicut | **2020–2023**
**HSE Computer Science** — Kerala Board | **2017–2019**

## CERTIFICATIONS

- **IBM Generative AI Engineering Professional Certificate**
- Oracle Cloud Infrastructure — Generative AI Professional
- Google — Accelerate Your Job Search with AI
- Additional industry certifications and courses in AI, software engineering, communication, and professional development

## LINKS

**Portfolio:** [https://rahulkp-ai.github.io/](https://rahulkp-ai.github.io/)
**GitHub:** [https://github.com/rahulkp-ai](https://github.com/rahulkp-ai)
**LinkedIn:** [https://linkedin.com/in/rahulkp-ai](https://linkedin.com/in/rahulkp-ai)
**Hugging Face:** [https://huggingface.co/rahulkp-ai](https://huggingface.co/rahulkp-ai)
**ORCID:** [https://orcid.org/0009-0009-3403-6670](https://orcid.org/0009-0009-3403-6670)
