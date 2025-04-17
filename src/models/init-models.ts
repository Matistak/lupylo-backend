import { Sequelize } from "sequelize";
import _SequelizeMeta from "./SequelizeMeta.js";
import _initLocal from "./local.js";
import _initMarca from "./marca.js";
import _initObjetivo from "./objetivo.js";
import _initObjetivoCompletado from "./objetivo_completado.js";
import _initPersona from "./persona.js";
import _initProducto from "./producto.js";
import _initRecompensa from "./recompensa.js";
import _initRol from "./rol.js";
import _initSeguimiento from "./seguimiento.js";
import _initTemporada from "./temporada.js";
import _initUsuario from "./usuario.js";
import _initUsuarioRol from "./usuario_rol.js";
import _initArchivo from "./archivo.js";
import sequelize from "../config/database.js";

function initModels (sequelize: Sequelize) {
  const SequelizeMeta = _SequelizeMeta(sequelize);
  const archivo = _initArchivo(sequelize);
  const local = _initLocal(sequelize);
  const marca = _initMarca(sequelize);
  const objetivo = _initObjetivo(sequelize);
  const objetivo_completado = _initObjetivoCompletado(sequelize);
  const persona = _initPersona(sequelize);
  const producto = _initProducto(sequelize);
  const recompensa = _initRecompensa(sequelize);
  const rol = _initRol(sequelize);
  const seguimiento = _initSeguimiento(sequelize);
  const temporada = _initTemporada(sequelize);
  const usuario = _initUsuario(sequelize);
  const usuario_rol = _initUsuarioRol(sequelize);

  // Relationships for archivo
  archivo.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(archivo, { as: "archivos", foreignKey: "usuario_id"});

  // Relationships for local
  local.belongsTo(marca, { as: "marca", foreignKey: "marca_id"});
  marca.hasMany(local, { as: "locals", foreignKey: "marca_id"});

  // Relationships for objetivo
  objetivo.belongsTo(marca, { as: "marca", foreignKey: "marca_id"});
  marca.hasMany(objetivo, { as: "objetivos", foreignKey: "marca_id"});
  objetivo_completado.belongsTo(objetivo, { as: "objetivo", foreignKey: "objetivo_id"});
  objetivo.hasMany(objetivo_completado, { as: "objetivo_completados", foreignKey: "objetivo_id"});
  objetivo.belongsTo(producto, { as: "producto", foreignKey: "producto_id"});
  producto.hasMany(objetivo, { as: "objetivos", foreignKey: "producto_id"});
  objetivo.belongsTo(temporada, { as: "temporada", foreignKey: "temporada_id"});
  temporada.hasMany(objetivo, { as: "objetivos", foreignKey: "temporada_id"});

  // Relationships for producto
  producto.belongsTo(marca, { as: "marca", foreignKey: "marca_id"});
  marca.hasMany(producto, { as: "productos", foreignKey: "marca_id"});

  // Relationships for marca
  marca.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(marca, { as: "marcas", foreignKey: "usuario_id"});

  // Relationships for objetivo_completado
  objetivo_completado.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(objetivo_completado, { as: "objetivo_completados", foreignKey: "usuario_id"});

  // Relationships for persona
  persona.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(persona, { as: "personas", foreignKey: "usuario_id"});

  // Relationships for seguimiento
  seguimiento.belongsTo(usuario, { as: "seguido", foreignKey: "seguido_id"});
  usuario.hasMany(seguimiento, { as: "seguimientos", foreignKey: "seguido_id"});
  seguimiento.belongsTo(usuario, { as: "seguidor", foreignKey: "seguidor_id"});
  usuario.hasMany(seguimiento, { as: "seguidor_seguimientos", foreignKey: "seguidor_id"});

  // Relationships for usuario_rol
  usuario_rol.belongsTo(rol, { as: "rol", foreignKey: "rol_id"});
  rol.hasMany(usuario_rol, { as: "usuario_rols", foreignKey: "rol_id"});
  usuario_rol.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(usuario_rol, { as: "usuario_rols", foreignKey: "usuario_id"});

  return {
    SequelizeMeta,
    archivo,
    local,
    marca,
    objetivo,
    objetivo_completado,
    persona,
    producto,
    recompensa,
    rol,
    seguimiento,
    temporada,
    usuario,
    usuario_rol,
  };
}

const models = initModels(sequelize);
export default models;
