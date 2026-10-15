import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const uri = (process.env.MONGO_URI || process.env.MONGODB_URI || "")
            .trim()
            .replace(/^["']|["']$/g, "");
        
        console.log("Connecting to:", uri.replace(/\/\/.*@/, "//***@"));
        await mongoose.connect(uri);
        console.log("MongoDB Atlas connected!");
    } catch (error){
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};

export default connectDB;