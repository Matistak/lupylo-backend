import models from '../models/init-models.js'
import { UsuarioAttributes } from '../models/usuario.js';

const { usuario } = models;

const createUser = async (userData: UsuarioAttributes) => {
  return await usuario.create(userData)
};

const findUserByUsername = async (username: string) => {
  return await usuario.findOne({ where: { nombre: username } });;
};

/* const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findByPk(id);
};

const updateUser = async (id, userData) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  return await user.update(userData);
};

const deleteUser = async (id) => {
  const user = await User.findByPk(id);
  if (!user) throw new Error('User not found');
  await user.destroy();
}; */

export default {
  createUser,
  findUserByUsername,
/*   getAllUsers,
  getUserById,
  updateUser,
  deleteUser, */
};