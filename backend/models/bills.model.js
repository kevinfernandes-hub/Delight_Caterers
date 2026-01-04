const db = require('../config/db');

// Get all bills
const getAllBills = (callback) => {
  db.all(
    'SELECT * FROM bills ORDER BY created_at DESC',
    (err, rows) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, rows);
    }
  );
};

// Get bill by ID
const getBillById = (id, callback) => {
  db.get(
    'SELECT * FROM bills WHERE id = ?',
    [id],
    (err, row) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, row);
    }
  );
};

// Get bills by order ID
const getBillsByOrderId = (orderId, callback) => {
  db.all(
    'SELECT * FROM bills WHERE order_id = ? ORDER BY created_at DESC',
    [orderId],
    (err, rows) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, rows);
    }
  );
};

// Create bill
const createBill = (billData, callback) => {
  const { id, order_id, customer_name, amount, status } = billData;
  db.run(
    'INSERT INTO bills (id, order_id, customer_name, amount, status) VALUES (?, ?, ?, ?, ?)',
    [id, order_id, customer_name, amount, status || 'Pending'],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, { id, order_id, customer_name, amount, status });
    }
  );
};

// Update bill
const updateBill = (id, billData, callback) => {
  const { order_id, customer_name, amount, status } = billData;
  db.run(
    'UPDATE bills SET order_id = ?, customer_name = ?, amount = ?, status = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [order_id, customer_name, amount, status, id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Bill not found'), null);
      }
      callback(null, { id, order_id, customer_name, amount, status });
    }
  );
};

// Delete bill
const deleteBill = (id, callback) => {
  db.run(
    'DELETE FROM bills WHERE id = ?',
    [id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Bill not found'), null);
      }
      callback(null, { message: 'Bill deleted successfully', id });
    }
  );
};

module.exports = {
  getAllBills,
  getBillById,
  getBillsByOrderId,
  createBill,
  updateBill,
  deleteBill,
};
