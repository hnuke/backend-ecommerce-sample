import express from 'express';
import ProductsController from '../controllers/productsController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';
const router = express.Router();


router.get('', ProductsController.getAllProducts);

router.get('/:id', ProductsController.getProductById);

router.post('', authenticate, authorize(['admin']),  ProductsController.createProduct);

router.patch('/:id', authenticate, authorize(['admin']), ProductsController.updateProductById)

router.delete('/:id', authenticate, authorize(['admin']),ProductsController.deleteProductById)

export default router;