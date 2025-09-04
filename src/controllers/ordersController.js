import Orders from "../models/ordersModel.js";
import { NotFoundError } from "../errors/CustomErrors.js";
class ordersController {
    async createOrder(req, res){
        const {
            price,
            taxShipping,
            address,
            products
        } = req.body;

        const order = await Orders.create({price, taxShipping, address, products});
        
        return res.status(200).json({
            success:true,
            order
        })
    }

    async updateOrder(req, res){
        const {id} = req.param;
        const {address} = req.body;
        const order = await Orders.findByIdAndUpdate(id, {address})
        if (!order) throw new NotFoundError('Order not found');
        return res.status(200).json({succes: true, order});
    }   

    async deleteOrder(req, res){
        const {id} = req.params;
        const order = await Orders.findByIdAndDelete(id);
        if (!order) throw new NotFoundError('Order not found');
        return req.status(200).json({sucess: true});
    }
}

const OrderController = new ordersController;
export default OrderController;