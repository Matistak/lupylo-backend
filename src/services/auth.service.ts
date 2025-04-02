import bcrypt from 'bcryptjs';
import { UsuarioAttributes } from '../models/usuario.js';
import aunthRepository from '../repositories/aunth.repository.js';
import jwt from 'jsonwebtoken';
import { ACCESS_TOKEN_EXPIRATION, ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from '../index.js';

const registerUserService = async (userData: UsuarioAttributes) => {
    const hashedPassword = await bcrypt.hash(userData.contrasena, 10);
    const newUser = {
        ...userData,
        contrasena: hashedPassword,
    }
    return await aunthRepository.createUser(newUser);
};

const loginUser = async (username: string, password: string) => {
    const user = await aunthRepository.findUserByUsername(username);
    if (!user) throw new Error('User not found');

    const isPasswordValid = await bcrypt.compare(password, user.contrasena);
    if (!isPasswordValid) throw new Error('Invalid password');

    const accessToken = jwt.sign({ username }, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRATION });
    const refreshToken = jwt.sign({ username }, REFRESH_TOKEN_SECRET);

    user.refreshToken = refreshToken;
    return {
        user,
        accessToken,
    };
};

export default {
    registerUserService,
    loginUser
};