# ⚡ Task Queue System

A full-stack task queue management system built using **React, Node.js, Express, Redis, and BullMQ** that allows users to create, prioritize, and monitor background tasks in real time.

## 🚀 Features

* Create tasks with different priorities
* Background task processing using BullMQ
* Redis-backed job queue
* Automatic retry mechanism for failed tasks
* Real-time task status updates
* Dashboard to monitor tasks and statistics
* Worker-based asynchronous processing

---

## 🏗️ Tech Stack

### Frontend

* React
* Axios

### Backend

* Node.js
* Express.js

### Queue System

* BullMQ
* Redis

---

## 📂 Project Structure

```text
Task-Queue_System/

├── backend/
│
│   ├── controllers/
│   │   └── taskController.js
│
│   ├── routes/
│   │   ├── taskRoutes.js
│   │   └── statsRoutes.js
│
│   ├── data.js
│   ├── queue.js
│   ├── redis.js
│   ├── worker.js
│   └── server.js
│
├── frontend/
│
│   ├── public/
│   └── src/
│
├── README.md
└── .gitignore
```

---

## ⚙️ System Architecture

```text
React Dashboard

↓

Express API

↓

BullMQ Queue

↓

Redis

↓

Worker

↓

Background Processing
```

---

## 📡 API Endpoints

### Create Task

```http
POST /tasks
```

Request Body

```json
{
  "title": "Generate Report",
  "priority": 2
}
```

---

### Get All Tasks

```http
GET /tasks
```

---

### Get Statistics

```http
GET /stats
```

Example Response

```json
{
  "waiting": 0,
  "active": 0,
  "completed": 1,
  "failed": 0
}
```

---

## ▶️ Running Locally

### Backend

```bash
cd backend

node server.js
```

Backend runs on:

```text
http://127.0.0.1:9200
```

### Frontend

```bash
cd frontend

npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🛠️ Installation

### Backend

```bash
npm install
```

### Frontend

```bash
npm install
```

### Start Redis

```bash
brew services start redis
```

Verify:

```bash
redis-cli ping
```

Expected:

```text
PONG
```

---

## 🔮 Future Improvements

* MongoDB persistence
* User authentication
* Task deletion
* Search and filtering
* WebSocket live updates
* Docker support
* Deployment with Vercel + Render + Upstash

---

## 🎯 Learning Outcomes

This project demonstrates:

* Background job processing
* Asynchronous architecture
* Queue management
* Priority scheduling
* Retry mechanisms
* Full-stack integration
* API design

---

## 👨‍💻 Author

**Sarthak Jain**

GitHub: https://github.com/14Sarthak
