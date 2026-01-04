const express = require('express');
const router = express.Router();
const customersController = require('../controllers/customers.controller');

// Get all customers
router.get('/', customersController.getAllCustomers);

// Get customer by ID
router.get('/:id', customersController.getCustomerById);

// Create customer
router.post('/', customersController.createCustomer);

// Update customer
router.put('/:id', customersController.updateCustomer);

// Delete customer
router.delete('/:id', customersController.deleteCustomer);

module.exports = router;
