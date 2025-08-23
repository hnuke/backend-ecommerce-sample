import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb://admin:admin123@localhost:27017/ecommerce?authSource=admin")
        .then(console.log("MongoDB connected"))
        .catch(error => console.log(error.message));

}

export default connectDB;