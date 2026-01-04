const db = require('../config/db');

// Get all menu items
const getAllMenuItems = (callback) => {
  db.all(
    'SELECT * FROM menu ORDER BY category, item_name',
    (err, rows) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, rows);
    }
  );
};

// Get menu item by ID
const getMenuItemById = (id, callback) => {
  db.get(
    'SELECT * FROM menu WHERE id = ?',
    [id],
    (err, row) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, row);
    }
  );
};

// Get menu items by category
const getMenuItemsByCategory = (category, callback) => {
  db.all(
    'SELECT * FROM menu WHERE category = ? ORDER BY item_name',
    [category],
    (err, rows) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, rows);
    }
  );
};

// Create menu item
const createMenuItem = (itemData, callback) => {
  const { id, item_name, category, price, description } = itemData;
  db.run(
    'INSERT INTO menu (id, item_name, category, price, description) VALUES (?, ?, ?, ?, ?)',
    [id, item_name, category, price, description || null],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, { id, item_name, category, price, description });
    }
  );
};

// Update menu item
const updateMenuItem = (id, itemData, callback) => {
  const { item_name, category, price, description } = itemData;
  db.run(
    'UPDATE menu SET item_name = ?, category = ?, price = ?, description = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [item_name, category, price, description, id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Menu item not found'), null);
      }
      callback(null, { id, item_name, category, price, description });
    }
  );
};

// Delete menu item
const deleteMenuItem = (id, callback) => {
  db.run(
    'DELETE FROM menu WHERE id = ?',
    [id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Menu item not found'), null);
      }
      callback(null, { message: 'Menu item deleted successfully', id });
    }
  );
};

module.exports = {
  getAllMenuItems,
  getMenuItemById,
  getMenuItemsByCategory,
  createMenuItem,
  updateMenuItem,
  deleteMenuItem,
};
