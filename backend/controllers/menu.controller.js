const menuModel = require('../models/menu.model');

// Get all menu items
exports.getAllMenuItems = (req, res) => {
  menuModel.getAllMenuItems((err, items) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: items || [],
    });
  });
};

// Get menu item by ID
exports.getMenuItemById = (req, res) => {
  const { id } = req.params;
  menuModel.getMenuItemById(id, (err, item) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!item) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json({
      success: true,
      data: item,
    });
  });
};

// Get menu items by category
exports.getMenuItemsByCategory = (req, res) => {
  const { category } = req.params;
  menuModel.getMenuItemsByCategory(category, (err, items) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: items || [],
    });
  });
};

// Create menu item
exports.createMenuItem = (req, res) => {
  const itemData = req.body;
  if (!itemData.id || !itemData.item_name || !itemData.category || !itemData.price) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  menuModel.createMenuItem(itemData, (err, item) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({
      success: true,
      data: item,
    });
  });
};

// Update menu item
exports.updateMenuItem = (req, res) => {
  const { id } = req.params;
  const itemData = req.body;
  menuModel.updateMenuItem(id, itemData, (err, item) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: item,
    });
  });
};

// Delete menu item
exports.deleteMenuItem = (req, res) => {
  const { id } = req.params;
  menuModel.deleteMenuItem(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({
      success: true,
      data: result,
    });
  });
};
