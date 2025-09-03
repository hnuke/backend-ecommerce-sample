import express from 'express';
import CategoryController from '../controllers/categoriesController.js';
const router = express.Router();

router.post('', CategoryController.createCategory)
router.post('/:id', CategoryController.updateCategoryById)
router.delete('/:id', CategoryController.deleteCategoryById);

export default router;