import bcrypt from 'bcryptjs';
import aunthRepository from '../repositories/aunth.repository.js';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../index.js';
import { usuariosAttributes } from '@/models/postgres/usuarios.js';

const registerUserService = async (userData: usuariosAttributes) => {

    const existingUser = await aunthRepository.findUserByEmail(userData.email);
    if (existingUser) throw new Error('User already exists');

    const hashedPassword = await bcrypt.hash(userData.password_hash, 10);
    const newUser = {
        ...userData,
        password_hash: hashedPassword,
    }
    return await aunthRepository.createUser(newUser);
};

const loginUserService = async (email: string, passwordHash: string) => {
    const user = await aunthRepository.findUserByEmail(email);
    if (!user) throw new Error('Email not found');

    const isPasswordValid = await bcrypt.compare(passwordHash, user.password_hash);
    if (!isPasswordValid) throw new Error('Invalid password');

    const accessToken = jwt.sign({ email }, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });
    const refreshToken = jwt.sign({ email }, REFRESH_TOKEN_SECRET);
    const usuario = {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
    }

    return {
        usuario,
        accessToken,
        refreshToken
    };
};

const refreshAccessTokenService = async (refreshToken: string, username: string) => {
    try{
        jwt.verify(refreshToken, REFRESH_TOKEN_SECRET);
        const newAccessToken = jwt.sign({ username }, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });

        return newAccessToken;
    } catch (error) {
        console.error('Error verifying refresh token:', error);
        throw new Error('Invalid refresh token');
    }
}

export default {
    registerUserService,
    loginUserService,
    refreshAccessTokenService
};