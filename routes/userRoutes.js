import e from "express";
import { checkAuth, login, signup } from "../controllers/userController.js";
import { protectRoute } from "../middleware/auth.js";

const userRouter=e.Router();

userRouter.post('/signup',signup)
userRouter.post('/login',login)
userRouter.get('/check',protectRoute, checkAuth)

export default userRouter;