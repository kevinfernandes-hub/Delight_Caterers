const billsModel = require('../models/bills.model');

// Get all bills
exports.getAllBills = (req, res) => {
  billsModel.getAllBills((err, bills) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: bills || [],
    });
  });
};

// Get bill by ID
exports.getBillById = (req, res) => {
  const { id } = req.params;
  billsModel.getBillById(id, (err, bill) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!bill) {
      return res.status(404).json({ error: 'Bill not found' });
    }
    res.json({
      success: true,
      data: bill,
    });
  });
};

// Get bills by order ID
exports.getBillsByOrderId = (req, res) => {
  const { orderId } = req.params;
  billsModel.getBillsByOrderId(orderId, (err, bills) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: bills || [],
    });
  });
};

// Create bill
exports.createBill = (req, res) => {
  const billData = req.body;
  if (!billData.id || !billData.customer_name || !billData.amount) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  billsModel.createBill(billData, (err, bill) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      success: true,
      data: bill,
    });
  });
};

// Update bill
exports.updateBill = (req, res) => {
  const { id } = req.params;
  const billData = req.body;
  billsModel.updateBill(id, billData, (err, bill) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: bill,
    });
  });
};

// Delete bill
exports.deleteBill = (req, res) => {
  const { id } = req.params;
  billsModel.deleteBill(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: result,
    });
  });
};
