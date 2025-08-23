import express from 'express';
import connectDB from './utils/db.js';
import Products from './models/productsModel.js';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json()); // Middleware for parsing JSON

connectDB();

// Routes

app.get('/', (req, res) => {
    res.send('OK!');
});

// All products
app.get('/api/products', async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json({
            success: true,
            products
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }

});

// Find one product

app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        const product = await Products.findById(id);

        if (!product) {
            return res.status(404).json({
                message: `Product not found`
            });
        }

        res.status(200).json({
            success: true,
            product
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})

app.patch('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        const product = await Products.findByIdAndUpdate(id, req.body);
        
        if (!product) {
            return res.status(404).json({
                message: `Product not found`
            });
        }

        const updatedProduct = await Products.findById(id);

        res.status(200).json({
            success: true,
            updatedProduct
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})

app.delete('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        // Check if the ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        const product = await Products.findByIdAndDelete(id);
        
        if (!product) {
            return res.status(404).json({
                message: `Product not found`
            });
        }

        res.status(200).json({
            success: true
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
})

app.post('/api/products', async (req, res) => {
    try {
        const products = await Products.create(req.body);

        res.status(200).json({
            success: true,
            products
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});



app.listen(port);