const express = require('express');
const router = express.Router();
const billsController = require('../controllers/bills.controller');

// Get all bills
router.get('/', billsController.getAllBills);

// Get bill by ID
router.get('/:id', billsController.getBillById);

// Get bills by order ID
router.get('/order/:orderId', billsController.getBillsByOrderId);

// Create bill
router.post('/', billsController.createBill);

// Update bill
router.put('/:id', billsController.updateBill);

// Delete bill
router.delete('/:id', billsController.deleteBill);

module.exports = router;
