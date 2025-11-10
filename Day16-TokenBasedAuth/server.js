const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;
const secretKey = 'mysecretkey';

// Middleware
app.use(bodyParser.json());
app.use(cors());

// ✅ Serve login.html at root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// ✅ Serve static files (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Read users
function readUsers() {
  if (!fs.existsSync('users.json')) return [];
  const data = fs.readFileSync('users.json');
  return data.length ? JSON.parse(data) : [];
}

// Write users
function writeUsers(users) {
  fs.writeFileSync('users.json', JSON.stringify(users, null, 2));
}

// Signup route
app.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  if (users.find(u => u.username === username)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ username, password: hashedPassword });
  writeUsers(users);

  res.json({ message: "Signup successful!" });
});

// Login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();

  const user = users.find(u => u.username === username);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
  res.json({ token });
});

// Protected route
app.get('/dashboard', (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: "Token missing" });

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    res.json({ message: `Welcome ${decoded.username}` });
  });
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
