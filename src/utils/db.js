import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://dbUser:admin@cluster0.cj2lbvp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(console.log("MongoDB connected"))
        .catch(error => console.log(error.message));

}

export default connectDB;