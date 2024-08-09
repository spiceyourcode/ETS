const express = require('express');
const connection = require('../config/db');
const router = express.Router();

router.post('/add', (req, res) => {
    const { user_id, amount, date, category } = req.body;

    const query = 'INSERT INTO Expenses (user_id, amount, date, category) VALUES (?, ?, ?, ?)';
    connection.query(query, [user_id, amount, date, category], (err, result) => {
        if (err) throw err;
        res.send('Expense added successfully');
    });
});

router.get('/view/:user_id', (req, res) => {
    const { user_id } = req.params;

    const query = 'SELECT * FROM Expenses WHERE user_id = ?';
    connection.query(query, [user_id], (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

module.exports = router;
