import { Request, Response } from 'express';
import authService from '../services/auth.service.js';


export const registerUserController = async (req: Request, res: Response) => {
    try {
        const user = await authService.registerUserService(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

export const loginUser = async (req: Request, res: Response) => {
    try {
        const login = await authService.loginUser(req.body.nombre, req.body.contrasena);
        await login.user.save();
        res.cookie('accessToken', login.accessToken, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        });
        res.cookie('refreshToken', login.user.refreshToken, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        });
        res.send('Login successful');
    } catch (error) {
        console.error(error);
    }
};



export default {
    registerUserController,
    loginUser
};