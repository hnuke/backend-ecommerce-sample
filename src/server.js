import express from 'express';
import connectDB from './utils/db.js';

// app.js
const app = express();
const port = 3000;
connectDB();
app.use(express.json()); // Middleware for parsing JSON

// Import route modules
import productRoutes from './routes/products.js';

// Use route modules with base paths
app.use('/api/products', productRoutes);

// Start Server
app.listen(port);