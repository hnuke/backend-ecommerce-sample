import Categories from "../models/categoriesModel.js";
import { NotFoundError } from "../errors/CustomErrors.js";
class categoryController {
    async createCategory(req, res) {
        const { name, description } = req.body;
        const category = await Categories.create({ name, description });
        if (category) return res.status(200).json({
            success: true,
            category
        });
    }

    async updateCategoryById(req, res) {
        const {id} = req.params;
        const {name, description } = req.body;
        const category = await Categories.findByIdAndUpdate(id, {name, description});
        if (!category) throw new NotFoundError('Category not found');

        res.status(200).json({
            success: true,
            message: "Category successfully updated"
        });
    }

    async deleteCategoryById(req, res) {
        const { id } = req.body;
        const category = await Categories.findByIdAndDelete(id);
        if (!category) throw new NotFoundError('Category not found');

        res.status(200).json({
            success: true,
            message: "Category successfully deleted"
        });
    }
}

const CategoryController = new categoryController();
export default CategoryController;