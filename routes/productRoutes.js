import e from "express"
import {addProductController , getProducts, getUserProducts } from "../controllers/addProductController.js";
import { protectRoute } from "../middleware/auth.js";

const ProductRoutes=e.Router();

ProductRoutes.post('/add-product',protectRoute,addProductController);
ProductRoutes.get('/getproduct',protectRoute,getProducts)
ProductRoutes.get('/user-products',protectRoute,getUserProducts)

export default ProductRoutes;