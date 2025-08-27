import { getprduct, getSingleProduct, createproduct, updateproduct, deleteproduct } from "../controller/product.controller.js";
import express from "express"

const route = express.Router();

route.get("/getproduct", getprduct);
route.get("/getproduct/:id", getSingleProduct);
route.post("/createproduct", createproduct);
route.put("/updateproduct/:id", updateproduct);
route.delete("/deleteproduct/:id", deleteproduct);

export default route;

