import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 6
    },
    description: {
        type: String,
        required: true,
        minLength: 8
    }
});

const Category = mongoose.model("category", categorySchema);

export default Category;