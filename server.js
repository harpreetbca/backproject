import express from "express";
import dotenv from "dotenv";
import cors from "cors";                  
import connectDB from "./backend/config/db.js";
import route from "./backend/routes/apiproduct.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5500;

app.use(cors());                          
app.use(express.json());

app.use("/products", route);

connectDB();

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
