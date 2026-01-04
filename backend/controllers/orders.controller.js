const ordersModel = require('../models/orders.model');

// Get all orders
exports.getAllOrders = (req, res) => {
  ordersModel.getAllOrders((err, orders) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: orders || [],
    });
  });
};

// Get order by ID
exports.getOrderById = (req, res) => {
  const { id } = req.params;
  ordersModel.getOrderById(id, (err, order) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }
    res.json({
      success: true,
      data: order,
    });
  });
};

// Create order
exports.createOrder = (req, res) => {
  const orderData = req.body;
  if (!orderData.id || !orderData.customer_name || !orderData.event_type || !orderData.event_date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  ordersModel.createOrder(orderData, (err, order) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      success: true,
      data: order,
    });
  });
};

// Update order
exports.updateOrder = (req, res) => {
  const { id } = req.params;
  const orderData = req.body;
  ordersModel.updateOrder(id, orderData, (err, order) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: order,
    });
  });
};

// Delete order
exports.deleteOrder = (req, res) => {
  const { id } = req.params;
  ordersModel.deleteOrder(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: result,
    });
  });
};
