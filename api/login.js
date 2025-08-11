const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// Hardcoded credentials
const USERNAME = "admin";
const PASSWORD = "1234";

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === USERNAME && password === PASSWORD) {
        // If credentials match, send protected page
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } else {
        // If wrong, send error message
        res.send(`
            <h2 style="color:red;text-align:center;">Invalid username or password</h2>
            <p style="text-align:center;"><a href="/">Go back</a></p>
        `);
    }
});

// Start server (for local testing)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app; // For Vercel
