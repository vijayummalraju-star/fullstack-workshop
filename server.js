const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Serve frontend files
app.use(express.static(path.join(__dirname, 'public')));

// --- In-memory "database" ---
let tasks = [];
let nextId = 1;

// GET all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// POST — create a new task
app.post('/api/tasks', (req, res) => {
  const { title } = req.body;
  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const task = { id: nextId++, title: title.trim(), done: false };
  tasks.push(task);
  res.status(201).json(task);
});

// PUT — toggle task done/undone
app.put('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: 'Task not found' });
  task.done = !task.done;
  res.json(task);
});

// DELETE — remove a task
app.delete('/api/tasks/:id', (req, res) => {
  const before = tasks.length;
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  if (tasks.length === before) return res.status(404).json({ error: 'Task not found' });
  res.json({ success: true });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`\n  ✅ Server running at http://localhost:${PORT}`);
  console.log(`  📝 Open http://localhost:${PORT} in your browser\n`);
});
