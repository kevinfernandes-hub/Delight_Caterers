const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders.controller');

// Get all orders
router.get('/', ordersController.getAllOrders);

// Get order by ID
router.get('/:id', ordersController.getOrderById);

// Create order
router.post('/', ordersController.createOrder);

// Update order
router.put('/:id', ordersController.updateOrder);

// Delete order
router.delete('/:id', ordersController.deleteOrder);

module.exports = router;
