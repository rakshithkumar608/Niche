# 🚀 AI Content Generation Platform (Full-Stack)

## 📌 Overview

This is a full-stack AI-powered content generation platform designed to help users create **viral-ready social media scripts instantly**.

The system combines:

* 🧠 **AI Service (FastAPI + Groq + RAG)**
* ⚙️ **Backend API (Node.js + Express)**
* 🎨 **Frontend (Next.js)**

👉 Users input their niche, tone, and goals — and the system generates structured, high-quality content scripts ready for posting.

---

# 🧱 Tech Stack

## 🧠 AI Service (Python - FastAPI)

* FastAPI
* Groq API (LLM)
* FAISS (Vector DB)
* sentence-transformers
* Custom RAG pipeline

## ⚙️ Backend (Node.js)

* Express.js
* MongoDB (Mongoose)
* REST APIs

## 🎨 Frontend (Next.js)

* Next.js (App Router)
* Tailwind CSS
* Axios
* Framer Motion

---

# 🏗️ System Architecture

```
Frontend (Next.js)
        ↓
Node Backend (Express API)
        ↓
Python AI Service (FastAPI + RAG + LLM)
        ↓
AI Processing + Scoring
        ↓
MongoDB + Vector DB (FAISS)
```

---

# 🔄 Full Flow (End-to-End)

## 1. User Interaction

User enters:

* Niche (e.g., fitness)
* Audience (e.g., beginners)
* Platform (e.g., Instagram)
* Goal (e.g., gain followers)
* Tone (e.g., engaging)

---

## 2. Frontend Request

Frontend sends:

```
POST /api/scripts/generate
```

```json
{
  "niche": "fitness",
  "tone": "engaging",
  "count": 3
}
```

---

## 3. Backend Processing (Node.js)

* Receives request
* Validates input
* Sends request to Python AI service

---

## 4. AI Processing (Python FastAPI)

### Steps:

1. 🔍 **RAG Retrieval**

   * Fetches relevant examples from FAISS

2. 🧠 **Prompt Construction**

   * Injects:

     * user input
     * retrieved examples

3. 🤖 **LLM Generation (Groq)**

   * Generates structured scripts

4. 🧾 **JSON Parsing**

   * Ensures valid output:

   ```json
   {
     "hook": "...",
     "content": "...",
     "pattern_interrupt": "...",
     "cta": "..."
   }
   ```

5. 🔁 **Content Agent**

   * Improves script quality

6. 📊 **Virality Scoring**

   * Assigns performance score

7. 🧠 **Self-Learning Loop**

   * Stores best scripts back into FAISS

---

## 5. Backend Storage

Node.js:

* Stores scripts in MongoDB
* Includes:

  * niche
  * tone
  * performance_score
  * timestamps

---

## 6. Response to Frontend

```json
{
  "scripts": [
    {
      "hook": "...",
      "content": "...",
      "pattern_interrupt": "...",
      "cta": "...",
      "performance_score": 92
    }
  ]
}
```

---

## 7. Frontend Display

User sees:

* Script cards
* Copy button
* Score indicator

---

# 🎬 Example Output

### 🎬 Script 1

**Hook:**
Stop doing cardio like this… ❌

**Content:**
Most beginners waste hours running without results...

**Pattern Interrupt:**
But here’s the truth 👇

**CTA:**
Follow for real fitness tips 💪

**Score:** 91

---

# 📁 Project Structure

```
app/
components/
lib/
services/
hooks/
types/
public/

backend/
ai-service/
```

---

# 🔑 Key Features

## 🧠 AI Intelligence

* RAG-based contextual generation
* Example-driven prompting
* Structured JSON output

## ⚡ Performance

* Fast API responses
* Optimized prompt building

## 🔄 Self-Improving System

* Stores high-performing scripts
* Improves over time

## 🎨 Clean UI

* Modern SaaS interface
* Copy & reuse scripts instantly

---

# 🔐 Authentication (Planned / Optional)

* JWT-based authentication
* Secure API access
* Protected dashboard routes

---

# 📊 Database Schema (MongoDB)

```js
{
  hook: String,
  content: String,
  pattern_interrupt: String,
  cta: String,
  niche: String,
  tone: String,
  performance_score: Number,
  createdAt: Date
}
```

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone <repo-url>
cd project
```

---

## 2. Setup Backend

```bash
cd backend
npm install
npm run dev
```

---

## 3. Setup AI Service

```bash
cd ai-service
pip install -r requirements.txt
uvicorn main:app --reload
```

---

## 4. Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# 🌐 Environment Variables

### Backend

```
MONGO_URI=
PORT=5000
```

### AI Service

```
GROQ_API_KEY=
```

### Frontend

```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

# 🚀 Future Improvements

* Authentication system
* Saved scripts dashboard
* Script editing
* Multi-platform optimization
* Analytics & performance tracking

---

# 🧠 Final Concept

This platform transforms:

😵 “I don’t know what to post”
➡️
😎 “I have 10 viral scripts ready”

---

# 💡 Summary

👉 Input idea
👉 AI generates scripts
👉 User posts content
👉 System learns and improves

---

# 📌 Author

Built as a full-stack AI system combining:

* Backend engineering
* AI architecture
* Modern frontend design

---
