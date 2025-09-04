import express from 'express';
import OrderController from '../controllers/ordersController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.get('', authenticate, OrderController.getOrder);
router.post('', authenticate, authorize(['admin']), OrderController.createOrder);
router.post('/:id', authenticate, authorize(['admin'], OrderController.updateOrder));
router.delete('/:id', authenticate, authorize(['admin'], OrderController.deleteOrder));

export default router;