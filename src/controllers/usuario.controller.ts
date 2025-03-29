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



export default {
    registerUserController,
};