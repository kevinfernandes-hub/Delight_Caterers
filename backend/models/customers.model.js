const db = require('../config/db');

// Get all customers
const getAllCustomers = (callback) => {
  db.all(
    'SELECT * FROM customers ORDER BY created_at DESC',
    (err, rows) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, rows);
    }
  );
};

// Get customer by ID
const getCustomerById = (id, callback) => {
  db.get(
    'SELECT * FROM customers WHERE id = ?',
    [id],
    (err, row) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, row);
    }
  );
};

// Create customer
const createCustomer = (customerData, callback) => {
  const { id, name, phone, email } = customerData;
  db.run(
    'INSERT INTO customers (id, name, phone, email) VALUES (?, ?, ?, ?)',
    [id, name, phone, email],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      callback(null, { id, name, phone, email });
    }
  );
};

// Update customer
const updateCustomer = (id, customerData, callback) => {
  const { name, phone, email } = customerData;
  db.run(
    'UPDATE customers SET name = ?, phone = ?, email = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
    [name, phone, email, id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Customer not found'), null);
      }
      callback(null, { id, name, phone, email });
    }
  );
};

// Delete customer
const deleteCustomer = (id, callback) => {
  db.run(
    'DELETE FROM customers WHERE id = ?',
    [id],
    function (err) {
      if (err) {
        return callback(err, null);
      }
      if (this.changes === 0) {
        return callback(new Error('Customer not found'), null);
      }
      callback(null, { message: 'Customer deleted successfully', id });
    }
  );
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
