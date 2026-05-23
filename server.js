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
const Database = require('better-sqlite3');
const db = new Database(path.join(__dirname, 'orders.db'));

// Ensure orders table exists and add status column if missing
const hasStatus = db.prepare('PRAGMA table_info(orders)').all().some(col => col.name === 'status');
if (!hasStatus) {
  db.prepare("ALTER TABLE orders ADD COLUMN status TEXT DEFAULT 'pending'").run();
}
db.prepare(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    client_name TEXT NOT NULL,
    client_email TEXT NOT NULL,
    phone TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)`).run();

console.log("Base de données initialisée et table 'orders' prete.");

// ---- Public API: submit order ----
app.post('/api/orders', (req, res) => {
    const { client_name, client_email, phone, subject, message } = req.body;
    if (!client_name || !client_email || !phone || !subject || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    // Insert the new order using better-sqlite3
    const stmt = db.prepare(`INSERT INTO orders (client_name, client_email, phone, subject, message) VALUES (?, ?, ?, ?, ?)`);
    const info = stmt.run(client_name, client_email, phone, subject, message);
    return res.status(201).json({ success: true, orderId: info.lastInsertRowid });
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
    try {
        const rows = db.prepare('SELECT * FROM orders ORDER BY created_at DESC').all();
        res.json(rows);
    } catch (err) {
        console.error('Erreur lors de la récupération :', err.message);
        res.status(500).json({ error: 'Erreur serveur.' });
    }
});

// ---- Admin API: update order status ----
app.put('/admin/api/orders/:id/status', (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) {
        return res.status(400).json({ error: 'Status required' });
    }
    try {
        const stmt = db.prepare('UPDATE orders SET status = ? WHERE id = ?');
        const info = stmt.run(status, id);
        if (info.changes === 0) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json({ success: true });
    } catch (err) {
        console.error('Erreur mise à jour statut :', err.message);
        res.status(500).json({ error: 'Erreur serveur lors de la mise à jour.' });
    }
});

// ---- Admin page fallback ----
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'admin.html'));
});

// ---- Start Server ----
app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});