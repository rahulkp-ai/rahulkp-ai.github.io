# Rahul KP

**AI/ML Engineer | Generative AI & RAG Systems | MSc Computer Science**

Tirur, Kerala, India · rahulkpkurup@gmail.com · +91 7909152002
[github.com/rahulkp-ai](https://github.com/rahulkp-ai) · [linkedin.com/in/rahulkp-ai](https://www.linkedin.com/in/rahulkp-ai/)

---

## Summary

Engineer building production-grade AI/ML systems — from a fully-instrumented RAG platform with automated evaluation, to deep learning components (CNNs, autograd engines, recommender systems) implemented from first principles in NumPy. Comfortable across the full stack: model training, API serving, containerized deployment, CI/CD, and monitoring. Published academic author with 40+ completed certifications spanning Generative AI Engineering, MLOps, and Cloud AI Infrastructure.

---

## Technical Skills

**Languages:** Python, Java, C, C++, SQL
**Machine Learning / Deep Learning:** scikit-learn, Random Forest, NumPy-based autograd (reverse-mode AD), CNNs (Conv2D/MaxPool2D from scratch), Neural Collaborative Filtering (NeuMF), SGD/Adam optimizers, gradient verification via numerical differentiation
**Generative AI:** Retrieval-Augmented Generation (RAG), LangChain, ChromaDB, cross-encoder reranking, prompt engineering, LLM evaluation (faithfulness/relevancy scoring), Hugging Face ecosystem, Transformer/BERT fundamentals (coursework)
**Backend:** FastAPI, Flask, REST API design, JWT authentication, SQLAlchemy ORM
**Frontend:** Next.js 14, React, TypeScript, TailwindCSS
**Databases:** PostgreSQL, SQLite, Redis, ChromaDB
**MLOps / DevOps:** Docker, Docker Compose, Kubernetes (Kustomize), GitHub Actions (CI/CD), MLflow, Prometheus, Grafana, structured logging, model drift detection, CodeQL security scanning
**Practices & Tools:** Git/GitHub, pytest (TDD, 70–98% coverage across projects), SOLID principles, Linux

---

## Projects

### Neural Collaborative Filtering from Scratch (NCF / NeuMF)

_Academic thesis project_

- Implemented NeuMF entirely in NumPy — embedding layers, linear layers, binary cross-entropy loss, and SGD/Adam optimizers — with no deep learning framework dependency.
- Trained and evaluated the model on MovieLens 1M, benchmarking recommendation quality with Hit@10.
- Authored graduate-level study notes deriving the architecture from first principles, reinforcing framework-independent understanding of recommender systems.

### RankScript — Competitive Learning Management System

_Full-stack production system_

- Designed a gamified LMS on FastAPI, Next.js 14, PostgreSQL, and Redis with role-based access for students, mentors, and admins.
- Built a weighted ranking algorithm (quiz/assignment/completion/streak scores) backed by a materialized-view leaderboard for low-latency reads.
- Containerized the full stack with Docker Compose; deployed across Vercel, Render, Neon, and Upstash.

### PhishGuard — ML-Powered Phishing Detection API

_Production MLOps project_

- Trained a Random Forest classifier on 28 hand-engineered URL features across ~50K labeled URLs, reaching ~95% accuracy and 0.98 ROC-AUC with no external API calls at inference time.
- Built a Flask inference service with Prometheus/Grafana monitoring and a custom rolling-window drift detector to flag model decay.
- Reached 98%+ test coverage (222 tests) with a full CI/CD pipeline (CodeQL scanning, Kubernetes manifests via Kustomize).

### CNN & ANN Foundation — Deep Learning Engines from Scratch

_Educational/research implementation_

- Built a NumPy reverse-mode automatic differentiation engine with broadcasting support, implementing Conv2D, MaxPool2D, and a full MNIST training pipeline without PyTorch/TensorFlow.
- Verified every gradient computation (52 tests) against numerical differentiation to confirm mathematical correctness of the autograd engine.

---

## Research & Publications

- **RAHUL KP**, academic preprint — _Preprints.org_, 2026. [DOI: 10.20944/preprints202605.0449.v1](https://doi.org/10.20944/preprints202605.0449.v1)

---

## Certifications

- IBM — **Generative AI Engineering** Professional Certificate (17-course specialization)
- Duke University — **MLOps | Machine Learning Operations** Specialization
- Google Cloud — **AI Infrastructure** Specialization
- DeepLearning.AI — **Neural Networks and Deep Learning**
- Google Cloud — **Transformer Models and the BERT Model**
- Packt — **Architecting AI Solutions – Scalable GenAI Systems**
- LearnKartS — Docker Fundamentals · Atlassian — Version Control with Git · UC Davis — SQL for Data Science

---

## Education

**MSc Computer Science** — University of Calicut _(examinations completed)_
**BSc Computer Science** — University of Calicut
