import { Usuarios, UsuariosAttributes } from '../models/postgres/usuarios.js';

const createUser = async (userData: UsuariosAttributes) => {
  return await Usuarios.create(userData)
};

const findUserByUsername = async (username: string) => {
  return await Usuarios.findOne({ where: { nombre: username } });
};

const findUserByEmail = async (email: string) => {
  return await Usuarios.findOne({ where: { email } });
};

/* const getAllUsuarios = async () => {
  return await Usuarios.findAll();
};

const getUserById = async (id) => {
  return await Usuarios.findByPk(id);
};

const updateUser = async (id, userData) => {
  const user = await Usuarios.findByPk(id);
  if (!user) throw new Error('User not found');
  return await user.update(userData);
};

const deleteUser = async (id) => {
  const user = await Usuarios.findByPk(id);
  if (!user) throw new Error('User not found');
  await user.destroy();
}; */

export default {
  createUser,
  findUserByUsername,
  findUserByEmail
};