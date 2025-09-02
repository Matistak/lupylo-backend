import { usuarios, usuariosAttributes } from "@/models/postgres/usuarios.js";



const createUser = async (userData: usuariosAttributes) => {
  return await usuarios.create(userData)
};

const findUserByUsername = async (username: string) => {
  return await usuarios.findOne({ where: { nombre: username } });
};

const findUserByEmail = async (email: string) => {
  return await usuarios.findOne({ where: { email } });
};

/* const getAllUsuarios = async () => {
  return await usuarios.findAll();
};

const getUserById = async (id) => {
  return await usuarios.findByPk(id);
};

const updateUser = async (id, userData) => {
  const user = await usuarios.findByPk(id);
  if (!user) throw new Error('User not found');
  return await user.update(userData);
};

const deleteUser = async (id) => {
  const user = await usuarios.findByPk(id);
  if (!user) throw new Error('User not found');
  await user.destroy();
}; */

export default {
  createUser,
  findUserByUsername,
  findUserByEmail
};