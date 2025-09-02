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
import categoryRoutes from './routes/categories.js';

// Use route modules with base paths
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);

// Last middleware for handling errors
app.use((err,req,res, next) => { // Middleware for handling errors centrally
    console.error(err.name);
    const statusCode = err.statusCode || 500;
    const message = err.message || 'A unexpected error has ocurred';
    
    res.status(statusCode).json({error: message});
})

// Start Server
app.listen(port);