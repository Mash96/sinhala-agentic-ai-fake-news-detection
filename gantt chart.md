# Grant Proposal: Sinhala Agentic AI Fake News Detection System

---

## Title

**SAFN-AI: Sinhala Agentic Fake News Detection Using Temporal Hybrid Verification and Large Language Models**

---

## Abstract

Misinformation in Sinhala—Sri Lanka's primary language—poses a significant threat to democratic discourse, public health, and social cohesion. With over 22 million speakers and limited NLP resources, Sinhala communities are particularly vulnerable to viral fake news that spreads unchecked on social media platforms.

This project presents **SAFN-AI**, an innovative agentic AI system designed specifically for Sinhala fake news detection. Unlike traditional classification approaches, our system employs a **two-stage agentic pipeline** consisting of a Research Agent (evidence gathering) and a Judge Agent (verdict generation), powered by state-of-the-art Large Language Models. The system implements **Temporal Hybrid Verification**, dynamically routing claims to either a historical vector database or live web search based on temporal classification.

**Expected Outcomes:**
- A fully functional, open-source Sinhala fake news detection system
- Bilingual explanations (Sinhala + English) with inline citations for transparency
- Contribution to Sinhala NLP research and digital media literacy
- Reduction of misinformation spread in Sinhala-speaking communities

---

## Background and Significance

### The Problem

Sri Lanka has witnessed the devastating consequences of fake news, from communal violence fueled by social media rumors to public health crises during the COVID-19 pandemic. Despite being spoken by over 22 million people, Sinhala remains a **low-resource language** with:

1. **Limited NLP Tools**: No comprehensive fact-checking systems exist for Sinhala
2. **Linguistic Complexity**: 
   - **Diglossia**: Spoken and written Sinhala differ significantly
   - **Complex Morphology**: Extensive use of suffixes and compound words
   - **Script Challenges**: Unique Unicode characters with normalization issues
3. **Mixed Language Use**: Code-switching between Sinhala, English, and transliterated "Singlish"

### Current Gaps

Existing fact-checking solutions (Google Fact Check, ClaimBuster) are primarily designed for English and European languages. They fail to address:
- Sinhala's morphological complexity
- Local news context and sources
- The need for culturally appropriate explanations

### Significance

This project addresses a critical gap in digital media literacy infrastructure for Sri Lanka and can serve as a blueprint for other low-resource South Asian languages (Tamil, Bengali, Nepali).

---

## Objectives/Goals

### Primary Objectives

| # | Objective | Metric |
|---|-----------|--------|
| 1 | Develop a working Sinhala fake news detection system | Functional web application |
| 2 | Achieve ≥75% accuracy on Sinhala claim verification | Evaluation on curated dataset |
| 3 | Provide transparent, explainable verdicts | 100% of verdicts include citations |
| 4 | Enable real-time verification | <30 second average response time |

### Secondary Objectives

- Contribute to Sinhala NLP resources (embeddings, preprocessing pipelines)
- Create a labeled dataset of 500+ verified Sinhala claims
- Publish findings in academic venues (workshops, conferences)
- Open-source all code and models for community use

---

## Methodology/Approach

### System Architecture

The SAFN-AI system employs a **multi-agent architecture** with specialized components:

```
┌─────────────────────────────────────────────────────────┐
│                    User Interface                        │
│              (Web App / API Endpoint)                    │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│              Claim Decomposition Agent                   │
│  • Normalize Unicode   • Extract Keywords               │
│  • Translate to English • Classify Temporal Type        │
└─────────────────────┬───────────────────────────────────┘
                      │
          ┌───────────┴───────────┐
          ▼                       ▼
┌─────────────────┐     ┌─────────────────┐
│  Vector DB      │     │  Live Web       │
│  (Historical)   │     │  (Recent News)  │
│  Pinecone       │     │  DeepResearch   │
└────────┬────────┘     └────────┬────────┘
         │                       │
         └───────────┬───────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│                 Research Agent (Stage 1)                 │
│  • Gather evidence from multiple sources                │
│  • Rate source credibility                              │
│  • Extract supporting/refuting snippets                 │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│                  Judge Agent (Stage 2)                   │
│  • Weigh evidence                                       │
│  • Resolve conflicts                                    │
│  • Generate verdict with Sinhala explanation            │
│  • Assign confidence score                              │
└─────────────────────┬───────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────┐
│                    Final Output                          │
│  Verdict | Confidence | Sinhala Explanation | Citations │
└─────────────────────────────────────────────────────────┘
```

### Key Technical Innovations

1. **Temporal Hybrid Verification**
   - Claims are classified as "recent" (<7 days) or "historical"
   - Recent claims → Live web search via DeepResearch LLM
   - Historical claims → Vector database of verified news articles

2. **Two-Stage Agentic Pipeline**
   - **Research Agent**: Specialized for evidence gathering only
   - **Judge Agent**: Specialized for verdict generation only
   - Separation of concerns improves transparency and accuracy

3. **Sinhala-First Design**
   - Custom text normalization for Sinhala Unicode
   - Multilingual embeddings (E5-Large) for semantic search
   - Bilingual output (Sinhala + English translations)

4. **Explainability**
   - Every verdict includes inline citations [1], [2], [3]
   - Detailed reasoning chain visible to users
   - Confidence scores (0-100%) indicate certainty

### Technology Stack

| Component | Technology |
|-----------|------------|
| Backend | Python, FastAPI |
| LLM | OpenRouter (Alibaba Tongyi DeepResearch-30b) |
| Vector Database | Pinecone |
| Embeddings | intfloat/multilingual-e5-large |
| Caching | Redis |
| Long-term Memory | PostgreSQL |
| Frontend | HTML/CSS/JavaScript |

---

## Expected Outcomes/Impact

### Immediate Outcomes (Year 1)

1. **Functional System**: Deployed web application accessible to the public
2. **Dataset Contribution**: 500+ labeled Sinhala claims with verdicts
3. **Academic Output**: Research paper submitted to ACL/EMNLP workshop
4. **Open-Source Release**: GitHub repository with full documentation

### Long-term Impact

| Stakeholder | Benefit |
|-------------|---------|
| **General Public** | Access to free, reliable fact-checking in Sinhala |
| **Journalists** | Tool for verifying claims before publication |
| **Researchers** | New resources for Sinhala NLP |
| **Educators** | Platform for teaching media literacy |
| **Policymakers** | Data on misinformation trends |

### Societal Impact

- **Reduced Misinformation**: Fewer false claims spread virally
- **Improved Trust**: Users can verify news independently
- **Digital Literacy**: Educational component teaches critical thinking
- **Template for Other Languages**: Methodology applicable to Tamil, Bengali, etc.

---

## Timeline

| Phase | Duration | Activities |
|-------|----------|------------|
| **Phase 1: Foundation** | Months 1-2 | Data collection, preprocessing pipeline, vector database setup |
| **Phase 2: Core Development** | Months 3-4 | Research Agent implementation, Judge Agent implementation, integration |
| **Phase 3: Enhancement** | Months 5-6 | Frontend development, caching layer, API optimization |
| **Phase 4: Evaluation** | Month 7 | Dataset creation, accuracy testing, user studies |
| **Phase 5: Deployment** | Month 8 | Cloud deployment, documentation, public release |
| **Phase 6: Dissemination** | Months 9-12 | Paper writing, presentations, community building |

### Milestones

- **M1 (Month 2)**: Vector database populated with 10,000+ news articles
- **M2 (Month 4)**: Two-stage agentic pipeline functional
- **M3 (Month 6)**: Beta version deployed with user interface
- **M4 (Month 8)**: Public release with API access
- **M5 (Month 12)**: Research paper submitted/published

---

## Budget Overview

| Category | Estimated Cost (USD) | Notes |
|----------|---------------------|-------|
| **Cloud Infrastructure** | $1,200 | Render/AWS hosting (12 months) |
| **LLM API Credits** | $2,400 | OpenRouter API usage |
| **Vector Database** | $840 | Pinecone pro tier (12 months) |
| **Development Tools** | $300 | IDEs, monitoring, testing |
| **Research Expenses** | $500 | Data annotation, user studies |
| **Publication Fees** | $500 | Open-access publication |
| **Contingency** | $260 | 5% buffer |
| **TOTAL** | **$6,000** | |

*Note: Personnel costs not included as this is an academic/thesis project.*

---

## Conclusion

The **SAFN-AI: Sinhala Agentic Fake News Detection System** addresses a critical and timely problem—the spread of misinformation in Sinhala-speaking communities. By leveraging cutting-edge agentic AI techniques, Large Language Models, and a novel Temporal Hybrid Verification approach, this project will deliver:

1. **A working, deployable system** that the public can use immediately
2. **Transparent, explainable verdicts** that build trust and understanding
3. **Reusable NLP resources** for the broader Sinhala research community
4. **A methodological template** applicable to other low-resource languages

This project aligns with global efforts to combat misinformation while addressing the unique linguistic and cultural needs of Sri Lanka. With your support, we can empower millions of Sinhala speakers to navigate the digital information landscape with confidence.

**We respectfully request funding to bring this vision to reality.**

---

## Contact Information

**Project Lead**: [Your Name]  
**Institution**: [Your University/Organization]  
**Email**: [your.email@domain.com]  
**GitHub**: https://github.com/[your-username]/sinhala-agentic-fake-news

---

*This proposal was prepared in December 2024.*
