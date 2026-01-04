const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../db/database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database:', err.message);
    process.exit(1);
  } else {
    console.log('Connected to SQLite database:', dbPath);
    initializeDatabase();
  }
});

// Enable foreign keys
db.run('PRAGMA foreign_keys = ON');

// Initialize database tables
function initializeDatabase() {
  db.serialize(() => {
    // Orders table
    db.run(
      `CREATE TABLE IF NOT EXISTS orders (
        id TEXT PRIMARY KEY,
        customer_name TEXT NOT NULL,
        event_type TEXT NOT NULL,
        event_date TEXT NOT NULL,
        status TEXT DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => {
        if (err) console.error('Error creating orders table:', err);
      }
    );

    // Bills table
    db.run(
      `CREATE TABLE IF NOT EXISTS bills (
        id TEXT PRIMARY KEY,
        order_id TEXT,
        customer_name TEXT NOT NULL,
        amount REAL NOT NULL,
        status TEXT DEFAULT 'Pending',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (order_id) REFERENCES orders(id)
      )`,
      (err) => {
        if (err) console.error('Error creating bills table:', err);
      }
    );

    // Customers table
    db.run(
      `CREATE TABLE IF NOT EXISTS customers (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        phone TEXT,
        email TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => {
        if (err) console.error('Error creating customers table:', err);
      }
    );

    // Menu table
    db.run(
      `CREATE TABLE IF NOT EXISTS menu (
        id TEXT PRIMARY KEY,
        item_name TEXT NOT NULL,
        category TEXT NOT NULL,
        price REAL NOT NULL,
        description TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )`,
      (err) => {
        if (err) console.error('Error creating menu table:', err);
      }
    );
  });
}

module.exports = db;
