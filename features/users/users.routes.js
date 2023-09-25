import express from 'express';
import UserController from './user.controller.js';

//initializing router and controller
const userRouter = express.Router();
const userController = new UserController;


//assigning proper controlers for API calls
userRouter.post("/register",userController.signUp);
userRouter.post("/login",userController.signIn);


export default userRouter;