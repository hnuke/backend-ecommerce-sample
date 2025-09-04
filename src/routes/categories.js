import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';
const router = express.Router();

router.get('/:id', CategoryController.getProductsByCategoryId);
router.post('', authenticate, authorize(['admin']),CategoryController.createCategory)
router.post('/:id', authenticate, authorize(['admin']),CategoryController.updateCategoryById)
router.delete('/:id', authenticate, authorize(['admin']),CategoryController.deleteCategoryById);

export default router;