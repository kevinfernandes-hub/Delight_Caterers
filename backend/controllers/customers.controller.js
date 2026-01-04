const customersModel = require('../models/customers.model');

// Get all customers
exports.getAllCustomers = (req, res) => {
  customersModel.getAllCustomers((err, customers) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: customers || [],
    });
  });
};

// Get customer by ID
exports.getCustomerById = (req, res) => {
  const { id } = req.params;
  customersModel.getCustomerById(id, (err, customer) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!customer) {
      return res.status(404).json({ error: 'Customer not found' });
    }
    res.json({
      success: true,
      data: customer,
    });
  });
};

// Create customer
exports.createCustomer = (req, res) => {
  const customerData = req.body;
  if (!customerData.id || !customerData.name) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  customersModel.createCustomer(customerData, (err, customer) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      success: true,
      data: customer,
    });
  });
};

// Update customer
exports.updateCustomer = (req, res) => {
  const { id } = req.params;
  const customerData = req.body;
  customersModel.updateCustomer(id, customerData, (err, customer) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: customer,
    });
  });
};

// Delete customer
exports.deleteCustomer = (req, res) => {
  const { id } = req.params;
  customersModel.deleteCustomer(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: result,
    });
  });
};
