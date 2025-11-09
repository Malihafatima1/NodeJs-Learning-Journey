const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

const secretKey = 'mdnjfrhrrurhb2i3';

// Serve login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

// POST endpoint for login and token generation
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simulated authentication
  if (username === 'user' && password === 'password') {
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.status(401).send('Invalid credentials');
  }
});

// Serve dashboard page
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// ✅ NEW endpoint to verify token
app.get('/verify', (req, res) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ message: 'Token missing' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }
    res.json({ username: decoded.username });
  });
});

// Start server
app.listen(3000, () => console.log('✅ Server running at http://localhost:3000'));
