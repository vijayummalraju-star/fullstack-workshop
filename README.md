# 📝 Full Stack Workshop — To-Do App Demo

A simple full-stack To-Do app built with **Express.js** (backend) and **vanilla HTML/CSS/JS** (frontend).

## Quick Start

```bash
npm start
```

Then open **http://localhost:3000** in your browser.

## Project Structure

```
fullstack-workshop/
├── server.js          ← Backend (Express API)
├── public/
│   └── index.html     ← Frontend (HTML + CSS + JS)
├── package.json
└── README.md
```

## API Endpoints

| Method   | Endpoint         | Description       |
|----------|------------------|-------------------|
| `GET`    | `/api/tasks`     | Get all tasks     |
| `POST`   | `/api/tasks`     | Create a task     |
| `PUT`    | `/api/tasks/:id` | Toggle done/undone|
| `DELETE` | `/api/tasks/:id` | Delete a task     |
