import { UsuarioAttributes } from '../models/usuario.js';
import aunthRepository from '../repositories/aunth.repository.js';

const registerUserService = async (userData: UsuarioAttributes) => {
    return await aunthRepository.createUser(userData);
};

export default {
    registerUserService,
};