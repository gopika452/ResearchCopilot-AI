ResearchCopilot-AI : AI-Powered Research & Analysis Platform

ResearchCopilot-AI is a comprehensive AI-driven platform for research automation, financial document analysis, and code bug localization. It integrates advanced LLMs, knowledge graphs, OCR, and multi-agent pipelines to provide intelligent, explainable insights for academic and industry use.

Table of Contents

Features

Architecture

Prerequisites

Installation

Configuration

Usage

Project Modules

Development & Testing

Contributing

License

✨ Features
1. Research Automation

AI-powered Q&A for academic papers (PDF input)

Voice-based summarization using Azure Speech Services

Multilingual research support with translation & streaming responses

Systematic Review Generator with APA-style references

Research Gap Analyzer to suggest opportunities

Research Insights Analyzer for trending AI/ML papers and technical news

2. Financial Document Analysis

Extract structured data from scanned UK company filings using OCR

Multi-LLM evaluation (GPT-4, LLaMA 3, Ollama, HuggingFace) for Q&A

Build Financial Knowledge Graphs for explainable insights

Benchmark models for precision, completeness, and consistency

End-to-end Python + LangChain + Azure OCR pipeline

3. Automated Bug Localization

Parse AspectJ Java source code to extract classes, methods, and fields

Build Neo4j Knowledge Graph with code relationships

Use Google Gemini LLM or keyword matching for bug report localization

Top-5 ranked buggy locations returned with scoring

Production-ready pipeline with error handling, configurable ranking, and documentation

🏗️ Architecture
Backend (FastAPI + LangChain)
backend/
├── main_app.py              # FastAPI entrypoint
├── researchassistant.py     # Research Q&A
├── financial_analysis.py    # Financial doc processing
├── AgentPodcast.py          # Podcast generation
├── gap.py                   # Research gap analyzer
├── systematicreview.py      # Systematic review
├── cag.py                   # Cache-Augmented Generation
├── insights.py              # Research insights
├── bug_localizer.py         # Bug localization pipeline
├── neo4j_loader.py          # Knowledge Graph builder
├── pdf_utils.py             # PDF parsing utilities
└── prompts/                 # AI prompt templates

Frontend (React + TypeScript)
frontend/client/src/
├── pages/                   # Application pages
├── components/              # Reusable UI components
├── contexts/                # Theme and state management
├── hooks/                   # Custom React hooks
├── lib/                     # API utilities
└── types/                   # TypeScript type definitions

📋 Prerequisites

Python 3.8+

Node.js 16+ & npm/yarn

Neo4j Database (for bug localization)

API Keys:

OpenAI API (GPT models)

Azure Speech Services (audio generation)

Tavily API (research news)

Google Gemini API (bug localization)

Optional: Supabase (for data storage)

🚀 Installation
Backend Setup
cd backend
pip install -r requirements.txt


Create .env:

# OpenAI
OPENAI_API_KEY=your_key

# Azure
AZURE_SPEECH_KEY=key
AZURE_SPEECH_REGION=region

# Tavily
TAVILY_API_KEY=key

# Neo4j
NEO4J_USER=neo4j
NEO4J_PASSWORD=password

# Gemini API (Optional)
GEMINI_API_KEY=key

# App settings
ENVIRONMENT=development
DEBUG=true

Frontend Setup
cd frontend
npm install


Create .env:

VITE_API_BASE_URL=http://localhost:8000
VITE_ENVIRONMENT=development
VITE_APP_NAME=ResearchCopilot-AI
VITE_APP_VERSION=1.0.0

⚙️ Usage
1. Start Backend
uvicorn main_app:app --reload --host 0.0.0.0 --port 8000

2. Start Frontend
cd frontend
npm run dev

3. Modules
Research Assistant

Upload PDF → Ask questions → Get AI-powered answers

Podcast Generator

Upload research paper → Generate audio podcast

Gap Analyzer

Identify research gaps and opportunities

Systematic Review

Generate literature review in Markdown

Research Insights

Analyze trending research and generate reports

Financial Document Analysis

Extract data via OCR + Company House API

Convert to structured Q&A

Build Knowledge Graph

Compare LLMs for accuracy and explainability

Bug Localization

Parse Java source → Build Neo4j Knowledge Graph

Input bug reports → Returns Top-5 buggy code locations

Supports stack trace, keyword, and LLM-based ranking

🧪 Testing

Backend: pytest tests/

Frontend: npm run test

🛠️ Development Notes

LangChain for multi-agent pipelines

Neo4j for structured knowledge graphs

Material-UI + React for responsive frontend

Streaming Responses for real-time AI outputs

🤝 Contributing

Fork the repo

Create feature branch

Add tests and documentation

Submit PR with conventional commits

📝 License

MIT License. AspectJ code subject to Eclipse Public License.

📚 References

OpenAI, HuggingFace, LLaMA, Ollama LLMs

LangChain, LangGraph frameworks

Neo4j Knowledge Graph

Azure OCR & Speech Services

AspectJ Java Project

🔥 Summary

ResearchCopilot-AI combines:

Academic research automation

Financial document analysis & Knowledge Graphs

Automated bug localization with LLMs

…all in one AI-powered, production-ready platform.



