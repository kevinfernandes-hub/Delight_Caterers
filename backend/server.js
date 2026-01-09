const express = require('express');
const cors = require('./middleware/cors');
const db = require('./config/db');

// Import routes
const ordersRoutes = require('./routes/orders.routes');
const billsRoutes = require('./routes/bills.routes');
const customersRoutes = require('./routes/customers.routes');
const menuRoutes = require('./routes/menu.routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors);

// Root API endpoint
app.get('/api', (req, res) => {
  res.json({
    success: true,
    message: 'Delight Caterers API',
    version: '1.0.0',
    endpoints: {
      health: '/api/health',
      orders: '/api/orders',
      bills: '/api/bills',
      customers: '/api/customers',
      menu: '/api/menu',
    },
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/orders', ordersRoutes);
app.use('/api/bills', billsRoutes);
app.use('/api/customers', customersRoutes);
app.use('/api/menu', menuRoutes);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found',
    path: req.originalUrl,
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error',
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`\n✅ Server running on http://localhost:${PORT}`);
  console.log(`📍 API base URL: http://localhost:${PORT}/api\n`);
  console.log('Available endpoints:');
  console.log('  GET    /api/orders');
  console.log('  GET    /api/orders/:id');
  console.log('  POST   /api/orders');
  console.log('  PUT    /api/orders/:id');
  console.log('  DELETE /api/orders/:id\n');
  console.log('  GET    /api/bills');
  console.log('  GET    /api/bills/:id');
  console.log('  POST   /api/bills');
  console.log('  PUT    /api/bills/:id');
  console.log('  DELETE /api/bills/:id\n');
  console.log('  GET    /api/customers');
  console.log('  GET    /api/customers/:id');
  console.log('  POST   /api/customers');
  console.log('  PUT    /api/customers/:id');
  console.log('  DELETE /api/customers/:id\n');
  console.log('  GET    /api/menu');
  console.log('  GET    /api/menu/:id');
  console.log('  POST   /api/menu');
  console.log('  PUT    /api/menu/:id');
  console.log('  DELETE /api/menu/:id\n');
});

// Handle server errors
process.on('unhandledRejection', (err) => {
  console.error('Unhandled Rejection:', err.message);
  process.exit(1);
});

process.on('SIGINT', () => {
  console.log('\n\n👋 Server shutting down...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err.message);
      process.exit(1);
    }
    console.log('✅ Database connection closed');
    process.exit(0);
  });
});

module.exports = app;
