import mongoose from "mongoose";

export const cartSchema = mongoose.Schema({
    items: [
        {
            productI: {
                type: mongoose.Schema.Types.ObjectId,
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ]
});

const Cart = mongoose.model("carts", cartSchema);

export default Cart;