const cors = require('cors');

// Define allowed origins for local development
const allowedOrigins = [
  'http://localhost:3000', // Default Next.js port
  'http://localhost:5001', // Custom frontend port
];

// CORS options
const corsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      // If the origin is in the allowed list, allow it
      callback(null, true);
    } else {
      // Otherwise, block it
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: false,
};

// Create the CORS middleware with the specified options
const corsMiddleware = cors(corsOptions);

module.exports = corsMiddleware;
