import { BadRequestError, NotFoundError } from "../../errors/CustomErrors.js";

class cartService {
    async addProductToCart(user, product) {
        const userCart = user?.cart;
        if (!userCart) throw new NotFoundError('Cart not found');
        userCart.items.push({
            productId: product.productId,
            quantity: product.quantity
        });
        await user.save();
        return userCart;
    }

    async removeProductCart(user, product) {
        const userCart = user?.cart;
        if (!userCart) throw new NotFoundError('Cart not found');
        const index = userCart.items.findIndex(item =>
            item.productId.toString() === product.productId.toString()
        );
        if (index >= 0) userCart.items.splice(index, 1);
        await user.save();
        return userCart;
    }

    async updateQuantityProductCart(user, product, newQuantity) {
        const userCart = user?.cart;
        if (!userCart) throw new NotFoundError('Cart not found');
        const index = userCart.items.findIndex(item =>
            item.productId.toString() === product.productId.toString()
        );
        if (newQuantity < 1) throw new BadRequestError('Invalid value')
        userCart.items[index].quantity = newQuantity;
        await user.save();
        return userCart;
    }
}

const CartService = new cartService();

export default CartService;