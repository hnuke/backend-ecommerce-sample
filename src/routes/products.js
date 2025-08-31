import express from 'express';
import ProductsController from '../controllers/productsController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';
import validateProductMiddleware from '../middlewares/validateProductMiddleware.js';
const router = express.Router();


router.get('/', ProductsController.getAllProducts);

router.get('/:id', ProductsController.getProductById);

router.post('/', authenticate, validateProductMiddleware, ProductsController.createProduct);

router.patch('/:id', authenticate, ProductsController.updateProductById)

router.delete('/:id', authenticate, authorize(['admin']),ProductsController.deleteProductById)

export default router;