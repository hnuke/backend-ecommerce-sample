import express from 'express';
import ProductsController from '../controllers/productsController.js';
const router = express.Router();


router.get('/', ProductsController.getAllProducts);

router.get('/:id', ProductsController.getProductById);

router.post('/', ProductsController.createProduct);

router.patch('/:id', ProductsController.updateProductById)

router.delete('/:id', ProductsController.deleteProductById)

export default router;