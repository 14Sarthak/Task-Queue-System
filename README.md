#  Task Queue System

A full-stack task queue management system built with **React, Node.js, Express, BullMQ, and Redis**. The application enables users to create, prioritize, and monitor background jobs through an interactive dashboard while demonstrating asynchronous job processing using a Redis-backed queue.

## 🚀 Live Demo

👉 ** https://task-queue-system.vercel.app/



---

## 📸 Preview
<img width="1440" height="729" alt="Screenshot 2026-06-26 at 3 00 01 AM" src="https://github.com/user-attachments/assets/afbcafdb-be0c-4b00-8b1a-91c492d1c7bc" />


---

## ✨ Features

* Create tasks with different priority levels
* Background job processing using BullMQ
* Redis-backed queue management
* Automatic retry mechanism for failed jobs
* Real-time dashboard updates
* Queue statistics (Waiting, Active, Completed, Failed)
* Asynchronous worker-based processing

---

## 🛠️ Tech Stack

### Frontend

* React
* Axios

### Backend

* Node.js
* Express.js

### Queue & Storage

* BullMQ
* Redis (Upstash)

---

## 📁 Project Structure

```text
Task-Queue-System
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── queue.js
│   ├── redis.js
│   ├── worker.js
│   ├── server.js
│   └── data.js
│
├── frontend
│   ├── public
│   └── src
│
├── README.md
└── .gitignore
```

---

## 📡 API Endpoints

| Method | Endpoint | Description               |
| ------ | -------- | ------------------------- |
| POST   | `/tasks` | Create a new task         |
| GET    | `/tasks` | Retrieve all tasks        |
| GET    | `/stats` | Retrieve queue statistics |

---

## ⚙️ Local Setup

### Clone the repository

```bash
git clone https://github.com/14Sarthak/Task-Queue-System.git
cd Task-Queue-System
```

### Install dependencies

**Backend**

```bash
cd backend
npm install
```

**Frontend**

```bash
cd frontend
npm install
```

### Configure Redis

Create a `.env` file inside the **backend** directory.

```env
REDIS_URL=your_redis_connection_string
```

### Start the application

**Backend**

```bash
npm start
```

Runs on:

```text
http://127.0.0.1:9200
```

**Frontend**

```bash
npm start
```

Runs on:

```text
http://localhost:3000
```

---

## 🔮 Future Improvements

* MongoDB persistence
* User authentication
* Task deletion
* Search & filtering
* WebSocket live updates
* Docker support

---

## 📚 Learning Outcomes

This project demonstrates:

* Background job processing
* Queue management with BullMQ
* Redis integration
* REST API development
* Asynchronous architecture
* Full-stack application deployment

---

