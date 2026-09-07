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

**Software Engineer | Backend & Full-Stack**
Kerala, India · +91 79091 52002 · [rahulkpkurup@gmail.com](mailto:rahulkpkurup@gmail.com)
GitHub: github.com/rahulkp-ai · LinkedIn: linkedin.com/in/rahulkp-ai · Portfolio: rahulkp-ai.github.io

## SUMMARY

Software Engineer with an M.Sc. in Computer Science and hands-on experience building **backend APIs, full-stack applications, data-intensive systems, and AI/ML applications**. Strong in Python, FastAPI, PostgreSQL, Redis, React/Next.js, Docker, Git, and CI/CD. Experienced in designing modular application architectures, integrating services through REST APIs, implementing authentication and role-based access, and building deployable systems. Strong CS fundamentals with a focus on **reliable, maintainable, and production-oriented software**.

## TECHNICAL SKILLS

**Languages:** Python, C/C++, JavaScript, TypeScript, SQL
**Backend:** FastAPI, REST APIs, PostgreSQL, Redis, SQLAlchemy, Pydantic
**Frontend:** React, Next.js, TypeScript, Tailwind CSS
**Engineering:** Data Structures & Algorithms, OOP, System Design, API Integration, Testing, Debugging
**DevOps:** Git, GitHub Actions, Docker, Docker Compose, Nginx, Kubernetes, Terraform
**AI/Data:** NumPy, PyTorch, Scikit-learn, Machine Learning, Deep Learning, NLP, LLMs, RAG
**Databases:** PostgreSQL, MongoDB

## PROJECTS

### RankScript — Full-Stack Learning & Ranking Platform

**FastAPI · PostgreSQL · Redis · Next.js · TypeScript · Docker**

- Built a full-stack platform with **Student, Mentor, and Admin** roles, authentication, RBAC, course management, quizzes, assignments, and analytics.
- Designed modular REST APIs using a **Route → Service → Model** architecture with FastAPI, SQLAlchemy, Pydantic, and PostgreSQL.
- Implemented competitive ranking and leaderboard logic using quiz performance, assignments, course completion, and learning activity.
- Integrated **Redis caching, Docker containerization, Nginx, and CI/CD** for deployment and operational reliability.

### NCF Recommender System — End-to-End Recommendation Platform

**Python · NumPy · PyTorch · FastAPI · PostgreSQL · Docker**

- Designed and implemented a recommendation system from **first principles**, including a NumPy implementation and PyTorch benchmark.
- Built an end-to-end architecture for data processing, model training, recommendation generation, API serving, and deployment.
- Implemented hybrid recommendation strategies to address **cold-start and sparse-interaction** scenarios.
- Achieved **0.6293 Hit@10 and 0.3541 NDCG@10** on evaluation experiments.

### ANN Foundation — Neural Network & Automatic Differentiation

**Python · Automatic Differentiation · Neural Networks · Testing**

- Implemented a neural-network framework from scratch with **reverse-mode automatic differentiation and dynamic computation graphs**.
- Built composable Neuron → Layer → MLP abstractions with gradient accumulation and reverse topological backpropagation.
- Developed gradient verification tests using numerical differentiation and automated testing through GitHub Actions.

### Phishing Detection — Machine Learning Security System

**Python · Scikit-learn · Machine Learning**

- Developed a machine-learning pipeline for detecting phishing URLs using feature engineering, model training, and evaluation.
- Applied classification techniques to identify malicious URL patterns and evaluated model performance using standard ML metrics.

## EDUCATION

**M.Sc. Computer Science** — University of Calicut | 2024–2026
**B.Sc. Computer Science** — University of Calicut | 2020–2023

## RESEARCH

**Neural Collaborative Filtering Recommender System**
Research/preprint work focused on neural recommendation architectures, first-principles implementation, NumPy/PyTorch benchmarking, hybrid recommendation strategies, and reproducible evaluation.
