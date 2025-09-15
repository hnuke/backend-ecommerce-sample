import { NotFoundError } from "../errors/CustomErrors.js";
import CartService from "../services/cart/cartService.js"
import Users from "../models/usersModel.js";

class cartController {

    async getItems(req, res) {
        const userId = req.user?.id;
        const user = await Users.findById(userId);
        if (!user) throw new NotFoundError('User not found');
        const cart = user?.cart;
        if (!cart) throw new NotFoundError('Cart not found');
        return res.status(200).json({
            success: true,
            cart
        });

    }

    async addItem(req, res, next) {
        const userId = req.user?.id;
        const user = await Users.findById(userId);

        if (!user) throw new NotFoundError('User not found');
        const product = req.body?.product;
        if (!product) throw new NotFoundError('Product not found');
        try {
            const cart = await CartService.addProductToCart(user, product);
            return res.status(200).json({
                success: true,
                cart
            });
        }
        catch (err) {
            next(err);
        }
    }

    async updateItem(req, res, next) {
        const userId = req.user?.id;
        const user = await Users.findById(userId);

        if (!user) throw new NotFoundError('User not found');
        const product = req.body?.product;
        const newQuantity = product.quantity;
        if (!product) throw new NotFoundError('Product not found');
        try {
            const cart = await CartService.updateQuantityProductCart(user, product, newQuantity);
            return res.status(200).json({
                success: true,
                cart
            });
        }
        catch (err) {
            next(err);
        }
    }

    async removeItem(req, res) {
        const userId = req.user?.id;
        const user = await Users.findById(userId);
        if (!user) throw new NotFoundError('User not found');
        const product = req.body?.product;
        if (!product) throw new NotFoundError('Product not found');
        try {
            const cart = await CartService.removeProductCart(user, product);
            return res.status(200).json({
                success: true,
                cart
            });
        }
        catch (err) {
            next(err);
        }
    }

}

const CartController = new cartController();
export default CartController;