# RAHUL P. K.

**Machine Learning Engineer | Statistical Modeling | Recommender Systems | ML Systems**

Kerala, India · Open to U.S. opportunities
[rahulkp-ai.github.io](https://rahulkp-ai.github.io) · [GitHub](https://github.com/rahulkp-ai) · [LinkedIn](https://linkedin.com/in/rahulkp-ai) · [Hugging Face](https://huggingface.co/rahulkp-ai)

---

## SUMMARY

Machine Learning Engineer and MSc Computer Science candidate focused on **predictive modeling, recommender systems, statistical learning, deep learning, and production ML systems**. Experienced in taking ML problems from **mathematical formulation and from-scratch implementation through empirical benchmarking, evaluation, and production-oriented deployment**.

Research experience includes a **Neural Collaborative Filtering recommender system on MovieLens 1M**, with explicit negative sampling, ranking-based evaluation, PyTorch benchmarking, and a production architecture using FastAPI, PostgreSQL, Docker, and monitoring infrastructure. Strong programming foundation in **Python, C, Java, SQL, and PyTorch/scikit-learn**, with particular interest in personalization, experimentation, scalable ML, and data-driven product optimization.

---

## EDUCATION

### University of Calicut

**MSc Computer Science** · 2024–2026
CGPA/Percentage: ~77%

Relevant areas: Machine Learning, Artificial Intelligence, Data Structures & Algorithms, Database Systems, Statistical Computing, Deep Learning, Research Methodology

### University of Calicut

**BSc Computer Science** · 2020–2023

---

## RESEARCH

### Neural Collaborative Filtering–Based Movie Recommendation System

**Researcher / ML Engineer**

**Preprint:** DOI: 10.20944/preprints202605.0449.v1

- Designed and implemented a **Neural Collaborative Filtering (NCF)** recommendation pipeline combining Generalized Matrix Factorization (GMF) and Multi-Layer Perceptron (MLP) components for implicit-feedback personalization.
- Implemented the core recommendation algorithm **from scratch using NumPy**, establishing the mathematical and computational baseline before benchmarking against PyTorch.
- Trained and evaluated models on **MovieLens 1M**, using a **1:4 positive-to-negative sampling strategy** and leave-one-out evaluation with 99 negative candidates.
- Evaluated ranking quality using **Hit Rate@10 and NDCG@10**, emphasizing recommendation quality rather than classification accuracy alone.
- Achieved approximately **0.628 Hit@10** and **0.63 NDCG@10-class ranking performance**, while benchmarking equivalent NumPy and PyTorch implementations.
- Compared computational implementations and observed approximately **12.8× epoch-level execution speed improvement with PyTorch/MPS** over the from-scratch implementation.
- Developed a production-oriented architecture separating **model training, inference, API serving, persistence, and observability**.
- Designed serving components using **FastAPI, PostgreSQL, Docker, Nginx, and monitoring infrastructure**, demonstrating the transition from research prototype to deployable ML system.
- Investigated the trade-offs between mathematical transparency, framework optimization, inference architecture, and production scalability.
- Authored a research manuscript documenting the methodology, experimental design, benchmarking methodology, evaluation metrics, and production architecture.

**Technologies:** Python, NumPy, PyTorch, scikit-learn, SQL, PostgreSQL, FastAPI, Docker, Nginx, MPS

---

## MACHINE LEARNING PROJECTS

### PhishGuard — Machine Learning–Based Phishing Detection

- Developed a supervised ML pipeline for phishing URL classification using engineered lexical and structural features.
- Compared classification approaches using predictive performance and ROC-AUC rather than relying exclusively on raw accuracy.
- Achieved approximately **95% classification accuracy and 0.98 ROC-AUC** on the evaluated dataset.
- Built automated testing with **222 test cases and approximately 98.7% test coverage**, connecting ML experimentation with software-engineering quality practices.
- Designed the pipeline for reproducible feature extraction, model inference, and evaluation.

**Technologies:** Python, scikit-learn, NumPy, Pandas, SQL

### ANN From-Scratch Implementation

- Implemented a feed-forward Artificial Neural Network from first principles using NumPy.
- Implemented forward propagation, loss computation, backpropagation, gradient-based optimization, and parameter updates without relying on high-level deep-learning abstractions.
- Used the implementation to validate the mathematical relationship between matrix operations, gradients, optimization, and model convergence.

**Technologies:** Python, NumPy, Linear Algebra, Calculus, Optimization

### CNN Image Classification

- Implemented and evaluated a convolutional neural network for handwritten-digit classification.
- Achieved approximately **98.6% classification accuracy** on MNIST.
- Investigated convolution, pooling, nonlinear activation, optimization, and generalization behavior.

**Technologies:** Python, PyTorch, NumPy

---

## TECHNICAL SKILLS

### Machine Learning

Supervised Learning · Classification · Regression · Feature Engineering · Model Evaluation · Ranking · Recommendation Systems · Negative Sampling · Predictive Modeling · Cross-Validation · Hyperparameter Optimization

### Statistical & Quantitative Methods

Probability · Statistical Learning · Regression · Hypothesis Testing · Experimental Design · A/B Testing Concepts · Optimization · Loss Functions · Evaluation Metrics · Quantitative Analysis

### Deep Learning

Neural Networks · CNNs · Representation Learning · Embeddings · MLP · GMF · Neural Collaborative Filtering · PyTorch

### Programming

**Python · C · Java · SQL · JavaScript/TypeScript**

### Data & ML Libraries

**NumPy · Pandas · scikit-learn · PyTorch · XGBoost · LightGBM**

### Data & Backend Systems

**PostgreSQL · Redis · FastAPI · REST APIs · Data Pipelines**

### ML Production & Infrastructure

**Docker · Kubernetes · Nginx · GitHub Actions · Prometheus · Grafana · Terraform**

### AI / GenAI

Transformers · Hugging Face · LLMs · RAG · LangChain · LoRA · QLoRA

---

## SELECTED ENGINEERING PROJECT

### Production ML / Recommendation Platform

Designed a modular ML platform demonstrating the transition from **research experimentation to production inference**:

```text
Data
  ↓
Feature / Interaction Processing
  ↓
Training
  ↓
Model Evaluation
  ↓
Model Artifact
  ↓
FastAPI Inference Service
  ↓
PostgreSQL / Redis
  ↓
Application Layer
  ↓
Monitoring & Observability
```

- Separated experimentation, training, model serving, persistence, and application concerns.
- Designed REST-based model inference services using FastAPI.
- Used PostgreSQL for structured application and interaction data.
- Used Redis for low-latency application workloads and caching patterns.
- Containerized services with Docker.
- Designed deployment and observability architecture using Nginx, Kubernetes, Prometheus, and Grafana.
- Applied software-engineering principles to ML systems rather than treating models as isolated notebooks.

---

## SOFTWARE ENGINEERING

### TaskFlow

- Built a full-stack task-management application with authentication, APIs, database persistence, and frontend workflows.
- Applied modular backend and frontend architecture with production-oriented API design.

**Technologies:** JavaScript, React, Node.js, PostgreSQL

### RankScript

- Developed a ranking/scoring system using weighted evaluation criteria.
- Implemented deterministic scoring and ranking logic for structured assessment data.
- Designed the system around transparent and reproducible scoring rules.

---

## CERTIFICATIONS

- **IBM Generative AI Engineering Professional Certificate**
- **Oracle Cloud Infrastructure 2025 Generative AI Professional**
- **ISRO — AI/ML for Geodata Analytics**
- Additional coursework/certifications across machine learning, deep learning, cloud, software engineering, and AI

---

## RESEARCH & ENGINEERING INTERESTS

- Predictive Modeling
- Personalization & Recommendation Systems
- Statistical Machine Learning
- Causal Inference
- Experimental Design
- Time-Series Modeling
- Optimization
- Large-Scale ML
- Customer & Behavioral Analytics
- Production Machine Learning
- ML Systems & MLOps

---

## ENGINEERING PHILOSOPHY

**Mathematical formulation → From-scratch implementation → Framework benchmarking → Empirical evaluation → Production architecture**

I prioritize understanding the mathematical and computational foundations of an ML method before optimizing its implementation and integrating it into a production system.

---

## ADDITIONAL

**Languages:** English, Malayalam
**Availability:** Open to relocation / U.S. opportunities
**Interests:** Machine Learning Research, Personalization, Statistical Modeling, Recommender Systems, ML Infrastructure
