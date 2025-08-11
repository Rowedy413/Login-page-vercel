const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const USERNAME = "admin";
const PASSWORD = "1234";

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USERNAME && password === PASSWORD) {
    // Serve your protected page HTML
    res.sendFile(__dirname +'public/index.html');
  } else {
    res.send(`
      <h1 style="color:red;text-align:center;">Invalid Credentials</h1>
      <p style="text-align:center;"><a href="/">Go back</a></p>
    `);
  }
});

module.exports = app;
