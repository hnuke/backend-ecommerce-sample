import express from 'express';
import connectDB from './utils/db.js';
import Products from './models/productsModel.js';
const app = express();
const port = 3000;

app.use(express.json()); // Middleware for parsing JSON

connectDB();

// Routes

app.get('/', (req, res) => {
    res.send('OK!');
});

app.get('/api/products', async (req, res) => {
    const products = await Products.find();
    res.send(products);
});

app.post('/api/products', async (req, res) => {
    try {
        const products = await Products.create(req.body);

        res.status(200).json({
            success: true,
            products
        });
    }
    catch(error) {
        res.status(500).json({
            message: error.message
        });
    }
});



app.listen(port);