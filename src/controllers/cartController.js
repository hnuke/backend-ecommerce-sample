import { NotFoundError } from "../errors/CustomErrors.js";
import addProductToCart from "../services/cart/AddProductToCart.js"
import Users from "../models/usersModel.js";

class cartController {
    async addItem(req, res, next) {
        const userId = req.user?.id;
        const user = await Users.findById(userId);

        if (!user) throw new NotFoundError('User not found');
        const product = req.body?.product;
        if (!product) throw new NotFoundError('Product not found');
        try {
            const cart = await addProductToCart.execute(user, product);
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