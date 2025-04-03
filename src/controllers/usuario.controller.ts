import { NextFunction, Request, Response } from 'express';
import authService from '../services/auth.service.js';
import { ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET } from '../index.js';
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
        const { user, accessToken } = await authService.loginUser(req.body.nombre, req.body.contrasena);
        await user.save();
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        });
        res.cookie('refreshToken', user.refreshToken, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        });
        res.send('Login successful');
    } catch (error) {
        console.error(error);
    }
};

const authenticateController = (req: Request, res: Response, next: NextFunction) => {
    const { accessToken } = req.cookies;
    if (!accessToken) res.status(401).send('Token required');

    try {
        jwt.verify(accessToken, ACCESS_TOKEN_SECRET);
        res.status(200).send('Token valid');
        // If you want to proceed to the next middleware or route handler, uncomment the line below
        //next();
    } catch (error) {
        console.error('Error verifying token:', error);
        res.status(403).send('Invalid token');
    }

};

const tokenUserController = async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) res.status(401).send('Refresh token missing');

    const user = await aunthRepository.findUserByRefreshToken(refreshToken);
    if (!user) res.status(403).send('Invalid refresh token');

    try {
        const newAccessToken = await authService.refreshAccessToken(refreshToken);
        console.log('New access token:', newAccessToken);
        res.cookie('accessToken', newAccessToken, {
            httpOnly: true,
            secure: false, // Set to true if using HTTPS
        });
        res.send('Access token refreshed');
    } catch (error) {
        console.error('Error refreshing access token:', error);
        res.status(403).send('Invalid refresh token');
    }

}

const logoutUserController = async (req: Request, res: Response) => {
    const { refreshToken } = req.cookies;
    if (!refreshToken) res.status(401).send('Refresh token missing');

    const user = await aunthRepository.findUserByRefreshToken(refreshToken);
    if (!user) res.status(403).send('Invalid refresh token');

    if (user) {
        user.refreshToken = "";
        await user.save();

        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        res.send('Logout successful');
    }
}


export {
    registerUserController,
    loginUserController,
    authenticateController,
    tokenUserController,
    logoutUserController
};