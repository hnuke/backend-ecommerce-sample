import express from 'express';
import CartController from '../controllers/cartController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();


router.post('', authenticate, CartController.addItem);
router.post('/edit', authenticate, CartController.updateItem)
router.delete('', authenticate, CartController.removeItem);
export default router;