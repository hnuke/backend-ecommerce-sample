import mongoose from "mongoose";
import { productsSchema } from "./productsModel.js";

export const ordersSchema = mongoose.Schema({
    price: {
        type: Number,
        required: true,
        immutable: true
    },
    taxShipping: {
        type: Number,
        required: true,
        immutable: true,
    },
    address: {
        type: String,
        required: true
    },
    products: {
        type: [productsSchema],
        required: true
    }
});

const Orders = mongoose.model('orders', ordersSchema);

export default Orders;