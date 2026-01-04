const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menu.controller');

// Get all menu items
router.get('/', menuController.getAllMenuItems);

// Get menu item by ID
router.get('/:id', menuController.getMenuItemById);

// Get menu items by category
router.get('/category/:category', menuController.getMenuItemsByCategory);

// Create menu item
router.post('/', menuController.createMenuItem);

// Update menu item
router.put('/:id', menuController.updateMenuItem);

// Delete menu item
router.delete('/:id', menuController.deleteMenuItem);

module.exports = router;
