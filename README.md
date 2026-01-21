\# ResearchCopilot-AI

AI-powered research and financial document analysis platform using OCR, LLMs, and Knowledge Graphs.



\## Overview

ResearchCopilot-AI automates analysis of financial and research documents that are usually manual, time-consuming, and error-prone.

The system extracts structured information from PDFs, answers natural-language questions, and organizes insights for explainable decision-making.



\## Key Features

\- OCR-based text extraction from scanned PDFs

\- LLM-powered question answering

\- Financial document understanding

\- Multi-model evaluation (Azure OCR, HuggingFace, Ollama, LLaMA)

\- Knowledge Graph–ready structured outputs

\- Backend API with FastAPI

\- Frontend UI built with React + Vite



\## Tech Stack

\### Backend

\- Python

\- FastAPI

\- Azure OCR

\- HuggingFace / Ollama / LLaMA (LLMs)

\- LangChain

\- Pandas



\### Frontend

\- React

\- Vite

\- JavaScript

\- HTML/CSS



\## Project Structure


\## Backend Responsibilities

\- OCR extraction from financial PDFs

\- LLM-based question answering

\- Data preprocessing and validation

\- API endpoints for frontend integration



\## Frontend Responsibilities

\- User interface for document upload

\- Question answering UI

\- Display extracted insights

\- Connects to backend APIs



\## Models \& Tools Used

\- Azure OCR (primary OCR engine)

\- HuggingFace LLMs

\- Ollama (local inference)

\- LLaMA models

\- LangChain for orchestration



\## Current Status

\- OCR pipeline implemented

\- LLM-based Q\&A working

\- Multi-model evaluation completed

\- Knowledge Graph construction in progress



\## Future Work

\- Complete Knowledge Graph visualization

\- Improve OCR accuracy on complex layouts

\- Add document comparison

\- Model fine-tuning for finance domain



\## Author

\*\*Gopika S N\*\*  

AI / ML Intern

# ResearchCopilot-AI

**AI-Powered Research Automation Platform**

ResearchCopilot-AI is a fullstack research automation platform designed to streamline research workflows using AI. It allows academic and financial researchers to analyze documents, extract insights, generate knowledge graphs, and interact with content through Q&A and audio/podcast formats.

---

## Features

### Core Research Tools
- **Research Assistant:** Ask questions on research papers (PDFs) and get AI-powered answers with citations.
- **PDF Processing:** Extract text, tables, and figures from PDFs with OCR.
- **Knowledge Graph Construction:** Convert extracted information into structured insights for analysis.
- **Financial Document Analysis:** Automated extraction and Q&A for financial filings.
- **Multi-Model AI Support:** Integrates GPT-4, LLaMA 3, Ollama, and HuggingFace models.
- **Real-time Streaming:** Receive live AI responses using server-sent events.
- **Audio/Podcast Generation:** Convert research content into multi-voice audio podcasts using Azure Speech.

### Additional Tools
- **Research Gap Analyzer:** Identify opportunities and gaps in research papers.
- **Systematic Review Generator:** Generate structured literature reviews.
- **Research Insights Analyzer:** Discover latest AI/ML research papers, news, and trends.

---

## Architecture

ResearchCopilot-AI/
├── backend/ # FastAPI backend
│ ├── main.py
│ ├── llm.py
│ ├── ai_utils.py
│ ├── pdf_utils.py
│ └── requirements.txt
├── frontend/ # React + TypeScript frontend
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── vite.config.js
├── README.md
└── .gitignore


---

## Installation

### Backend

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
# Create a .env file with:
# OPENAI_API_KEY=your_openai_api_key
# AZURE_SPEECH_KEY=your_azure_speech_key
# TAVILY_API_KEY=your_tavily_api_key
uvicorn main:app --reload --host 0.0.0.0 --port 8000
Frontend
cd frontend
npm install
# Create a .env file with:
# VITE_API_BASE_URL=http://localhost:8000
npm run dev
The frontend will run at http://localhost:5173 and backend at http://localhost:8000.

Usage
Upload PDFs or financial documents.

Ask questions using the Research Assistant.

Generate podcasts for documents.

Analyze research gaps or generate systematic reviews.

Build knowledge graphs and extract insights.

Technologies Used
Backend: Python, FastAPI, LangChain

Frontend: React, TypeScript, Material-UI, Vite

AI Models: GPT-4, LLaMA 3, Ollama, HuggingFace

OCR & Audio: Azure OCR, Azure Speech

Data Processing: Pandas, NumPy, PyMuPDF

Financial Document Analysis Workflow
This module automates analysis of UK company filings:

Extract structured data using Azure OCR.

Verify data against Company House API.

Apply LLMs (GPT, LLaMA, Ollama, HuggingFace) for Q&A.

Build a Knowledge Graph for explainable insights.

Benchmark models for accuracy, precision, and speed.

Evaluation Results
Tool / Model	Accuracy
Azure OCR	90%
Ollama	83%
GPT-4	80%
HuggingFace	85%
LLaMA 3	88%
Challenges: OCR noise, LLM hallucinations, multi-column PDFs, GPU requirements for local inference, API downtime.

Future Scope
Fine-tune LLM prompts for higher accuracy.

Expand Knowledge Graph coverage.

Support for additional document types and languages.

Real-time collaborative research tools.

License
This project is licensed under the MIT License. See the LICENSE file for details.



