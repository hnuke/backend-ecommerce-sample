import dotenv from "dotenv";
dotenv.config();

import express from 'express';
import connectDB from './utils/db.js';

// app.js
const app = express();
const port = process.env.PORT || 3000;
connectDB();
app.use(express.json()); // Middleware for parsing JSON

// Import route modules
import productRoutes from './routes/products.js';
import userRoutes from './routes/users.js';

// Use route modules with base paths
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

// Start Server
app.listen(port);