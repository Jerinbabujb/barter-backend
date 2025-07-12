import e from "express"
import {addProductController , getProducts } from "../controllers/addProductController.js";

const ProductRoutes=e.Router();

ProductRoutes.post('/add-product',addProductController);
ProductRoutes.get('/getproduct',getProducts)

export default ProductRoutes;