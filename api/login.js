const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

const USERNAME = "admin";  // change as needed
const PASSWORD = "1234";   // change as needed

// Home → Login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Handle login
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
