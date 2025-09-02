import mongoose from "mongoose";

const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minLength: 6
    },
    description: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        minLength: 8
    }
});

const Categories = mongoose.model("categories", categoriesSchema);

export default Categories;