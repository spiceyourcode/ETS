// routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const connection = require('../config/db');
const router = express.Router();

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);

    const query = 'INSERT INTO Users (username, password) VALUES (?, ?)';
    connection.query(query, [username, hashedPassword], (err, result) => {
        if (err) throw err;
        res.send('User registered successfully');
    });
});

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM Users WHERE username = ?';
    connection.query(query, [username], (err, results) => {
        if (err) throw err;
        if (results.length === 0) {
            return res.status(400).send('User not found');
        }

        const user = results[0];
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) {
            return res.status(400).send('Invalid password');
        }

        // Redirect to index.html after successful login
        res.redirect('/dashboard');
    });
});

module.exports = router;
