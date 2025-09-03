import mongoose, { Schema } from "mongoose";

export const productsSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minLength: 10,
        maxLength: 40,
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minLength: 20,
        maxLength: 240
    },
    price: {
        type: Number,
        required: true
    },
    categoryId: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories',
        required: true
    }]
}, {strict: true});

const Products = mongoose.model("products", productsSchema);

export default Products;