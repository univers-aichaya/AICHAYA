const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const basicAuth = require('express-basic-auth');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..'))); // serve static front-end files

// ---- Database setup ----
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(path.join(__dirname, 'orders.db'));

// Ensure orders table exists
db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    phone TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`, (err) => {
    if (err) {
        console.error("Erreur lors de la création de la table :", err.message);
    } else {
        console.log("Base de données initialisée et table 'orders' prete.");
    }
});

// ---- Public API: submit order ----
app.post('/api/orders', (req, res) => {
    const { client_name, client_email, phone, subject, message } = req.body;
    if (!client_name || !client_email || !phone || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Nouvelle syntaxe pour le module sqlite3
    const query = `INSERT INTO orders (client_name, client_email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`;

    db.run(query, [client_name, client_email, phone, subject, message], function (err) {
        if (err) {
            console.error("Erreur lors de l'insertion :", err.message);
            return res.status(500).json({ error: "Erreur serveur lors de l'enregistrement." });
        }
        return res.status(201).json({ id: this.lastID, message: 'Order submitted successfully' });
    });
});

// ---- Admin authentication ----
const ADMIN_USER = process.env.ADMIN_USER || 'admin';
const ADMIN_PASS = process.env.ADMIN_PASS || 'admin123';
app.use('/admin', basicAuth({
    users: { [ADMIN_USER]: ADMIN_PASS },
    challenge: true,
    realm: 'Admin Area'
}));

// ---- Admin API: view orders ----
app.get('/admin/api/orders', (req, res) => {
    db.all('SELECT * FROM orders ORDER BY created_at DESC', [], (err, rows) => {
        if (err) {
            console.error("Erreur lors de la récupération :", err.message);
            return res.status(500).json({ error: "Erreur serveur." });
        }
        res.json(rows);
    });
});

// ---- Admin page fallback ----
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

// ---- Start Server ----
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});