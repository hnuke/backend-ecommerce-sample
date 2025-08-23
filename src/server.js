import express from 'express';
import connectDB from './utils/db.js';
import Products from './models/productModel.js';
const app = express();
const port = 3000;

connectDB();

// Routes
app.get('/', (req, res) => {
    res.send(`${Products.find()}`);
});



app.listen(port);