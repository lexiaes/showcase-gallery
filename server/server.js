import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 500; 

app.use(cors());
app.use(express.json({limit: "5mb"}));

app.get("/", (req, res) => {
    res.json({message: "Showcase API is running!"});
});

app.use("/api/products", productRoutes);

connectDB().then(() => {
    app.listen(PORT, () => console.log (`Server running on port ${PORT}`));
});