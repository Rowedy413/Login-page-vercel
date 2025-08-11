const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public'))); // public folder serve

const USERNAME = "admin";  // Change as needed
const PASSWORD = "1234";   // Change as needed

// Login form route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Login POST route
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  } else {
    res.send(`
      <h1 style="color:red;text-align:center;">Invalid Credentials</h1>
      <p style="text-align:center;"><a href="/">Go back</a></p>
    `);
  }
});

module.exports = app;
