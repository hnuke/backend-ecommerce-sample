import Products from '../models/productsModel.js';
import mongoose from 'mongoose';

const getAllProducts = async (req, res) => {
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
};

const getProductById = async (req, res) => {
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
            product,
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

const createProduct = async (req, res) => {
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
};

const updateProductById = async (req, res) => {
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
}

const deleteProductById = async (req, res) => {
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
}

const ProductsController = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProductById,
    deleteProductById
};

export default ProductsController;