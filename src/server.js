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

// Use route modules with base paths
app.use('/api/products', productRoutes);

import Users from './models/usersModel.js';

app.post('/api/user/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({email});
    if (!user) return res.status(404).json({
        message: 'User not found'
    });
    const isMatch = await user.comparePassword(password);
    if (isMatch) return res.status(200).json({success: true});
    else return res.status(401).json({message: "Unauthorized"});
});

app.post('/api/user/register', async (req, res) => {
    const { name, email, password } = req.body;
    await Users.create({name,email,password});
    res.status(200).json({success: true});
});
 

// Start Server
app.listen(port);