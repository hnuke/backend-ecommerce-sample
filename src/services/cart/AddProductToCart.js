import { NotFoundError } from "../../errors/CustomErrors.js";

class AddProductToCart {
    async execute(user, product) {
        const userCart = user?.cart;
        if (!userCart) throw new NotFoundError('Cart not found');
        userCart.items.push({
            productId: product.productId,
            quantity: product.quantity
        });
        await user.save();
        return userCart;
    }
}

const addProductToCart = new AddProductToCart();

export default addProductToCart;