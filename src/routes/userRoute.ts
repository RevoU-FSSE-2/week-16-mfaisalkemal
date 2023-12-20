import { Router } from "express";
import cors from 'cors';
import { loginUserController, registerUserController, logoutUserController, generateResetUserController, resetPasswordController } from "../controllers/userController";
import loginLimiter from "../middlewares/loginLimiter";

export const userRoute = Router();


userRoute.post('/register', registerUserController);
userRoute.post('/login', loginLimiter, loginUserController);
userRoute.get('/logout', logoutUserController);
userRoute.post('/reset-password', generateResetUserController);
userRoute.post('/confirm-reset', resetPasswordController);
