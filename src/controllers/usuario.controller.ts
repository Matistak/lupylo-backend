import { NextFunction, Request, Response } from 'express';
import authService from '../services/auth.service.js';
import { ACCESS_TOKEN_SECRET } from '../index.js';
import jwt from 'jsonwebtoken';

const registerUserController = async (req: Request, res: Response) => {
    try {
        const user = await authService.registerUserService(req.body);
        res.status(201).json(user);
    } catch (error) {
        console.error('Error registering user:', error);
    }
};

const loginUserController = async (req: Request, res: Response) => {
    const { email, passwordHash } = req.body;
    try {
        const { accessToken, refreshToken, usuario } = await authService.loginUserService(email, passwordHash);

        res.json({
            usuario,
            accessToken,
            refreshToken,
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
    
    if (!accessToken) {
        res.status(401).json({ error: 'Token required' })
    } else {
        try {
            jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
            res.status(200).json({ message: 'Pasa bobo pasa' });
            //next();
        } catch (error) {
            console.error('Error verifying token:', error);
            res.status(403).json({ error: 'Invalid token' });
        }
    };
};

const tokenUserController = async (req: Request, res: Response) => {
    const { refreshToken, userName } = req.body;
    if (!refreshToken) res.status(401).json({ error: 'Refresh token missing' });

    try {
        const newAccessToken = await authService.refreshAccessTokenService(refreshToken, userName);
        res.json({
            accessToken: newAccessToken,
            message: 'Access token refreshed'
        });
    } catch (error) {
        console.error('Error refreshing access token:', error);
        res.status(403).json({ error: 'Invalid refresh token' });
    }
}


export {
    registerUserController,
    loginUserController,
    authenticateController,
    tokenUserController,
};