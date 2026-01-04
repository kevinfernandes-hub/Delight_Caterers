const db = require('../config/db');

// Get all orders
const getAllOrders = (callback) => {
  db.all(
    'SELECT * FROM orders ORDER BY created_at DESC',
    (err, rows) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, rows);
    }
  );
};

// Get order by ID
const getOrderById = (id, callback) => {
  db.get(
    'SELECT * FROM orders WHERE id = ?',
    [id],
    (err, row) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, row);
    }
  );
};

// Create order
const createOrder = (orderData, callback) => {
  const { id, customer_name, event_type, event_date, status } = orderData;
  db.run(
    'INSERT INTO orders (id, customer_name, event_type, event_date, status) VALUES (?, ?, ?, ?, ?)',
    [id, customer_name, event_type, event_date, status || 'Pending'],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, { id, customer_name, event_type, event_date, status });
    }
  );
};

// Update order
const updateOrder = (id, orderData, callback) => {
  const { customer_name, event_type, event_date, status } = orderData;
  db.run(
    'UPDATE orders SET customer_name = ?, event_type = ?, event_date = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [customer_name, event_type, event_date, status, id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Order not found'), null);
      }
      callback(null, { id, customer_name, event_type, event_date, status });
    }
  );
};

// Delete order
const deleteOrder = (id, callback) => {
  db.run(
    'DELETE FROM orders WHERE id = ?',
    [id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Order not found'), null);
      }
      callback(null, { message: 'Order deleted successfully', id });
    }
  );
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
