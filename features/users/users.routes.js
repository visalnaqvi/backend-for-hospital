import express from 'express';
import UserController from './user.controller.js';
import Authentication from '../../config/authentication.js';

//initializing router and controller
const userRouter = express.Router();
const userController = new UserController;


//assigning proper controlers for API calls
userRouter.post("/register",userController.signUp);
userRouter.post("/login",userController.signIn);
userRouter.get("/validate",Authentication.verifyToken,(req,res)=>{res.send("User Valid")});


export default userRouter;