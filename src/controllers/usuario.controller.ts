import { NextFunction, Request, Response } from 'express';
import authService from '../services/auth.service.js';
import { ACCESS_TOKEN_SECRET } from '../index.js';
import jwt from 'jsonwebtoken';
import aunthRepository from '../repositories/aunth.repository.js';


const registerUserController = async (req: Request, res: Response) => {
    try {
        const user = await authService.registerUserService(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

const loginUserController = async (req: Request, res: Response) => {
    try {
        const { user, accessToken } = await authService.loginUserService(req.body.nombre, req.body.contrasena);
        await user.save();
        res.json({
            accessToken,
            refreshToken: user.refreshToken,
            message: 'Login successful'
        });
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Authentication failed' });
    }
};

const authenticateController = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const accessToken = authHeader && authHeader.split(' ')[1];
    
    if (!accessToken) return res.status(401).json({ error: 'Token required' });

    try {
        jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(403).json({ error: 'Invalid token' });
    }
};

const tokenUserController = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ error: 'Refresh token missing' });

    const user = await aunthRepository.findUserByRefreshToken(refreshToken);
    if (!user) return res.status(403).json({ error: 'Invalid refresh token' });

    try {
        const newAccessToken = await authService.refreshAccessTokenService(refreshToken);
        res.json({
            accessToken: newAccessToken,
            message: 'Access token refreshed'
        });
    } catch (error) {
        console.error('Error refreshing access token:', error);
        res.status(403).json({ error: 'Invalid refresh token' });
    }
}

const logoutUserController = async (req: Request, res: Response) => {
    const { refreshToken } = req.body;
    if (!refreshToken) return res.status(401).json({ error: 'Refresh token missing' });

    const user = await aunthRepository.findUserByRefreshToken(refreshToken);
    if (!user) return res.status(403).json({ error: 'Invalid refresh token' });

    user.refreshToken = "";
    await user.save();
    res.json({ message: 'Logout successful' });
}


export {
    registerUserController,
    loginUserController,
    authenticateController,
    tokenUserController,
    logoutUserController
};