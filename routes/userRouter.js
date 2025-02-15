import { createUser, userLogin , userDelete } from "../controllers/userController.js";
import express from 'express';

export const userRouter = express.Router();

userRouter.post('/',createUser);

userRouter.post('/login',userLogin);

userRouter.delete('/', userDelete);