import express from 'express';
import CartController from '../controllers/cartController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('', authenticate, CartController.addItem);
router.delete('/:productId', authenticate, CartController.removeItem);
export default router;