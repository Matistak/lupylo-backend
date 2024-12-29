import { Sequelize } from "sequelize";
import _SequelizeMeta from "./SequelizeMeta.js";
import _initComentario from "./comentario.js";
import _initFoto from './foto.js';
import _initLocal from "./local.js";
import _initMarca from "./marca.js";
import _initObjetivo from "./objetivo.js";
import _initObjetivoCompletado from "./objetivo_completado.js";
import _initPersona from "./persona.js";
import _initProducto from "./producto.js";
import _initPublicacion from "./publicacion.js";
import _initRecompensa from "./recompensa.js";
import _initRol from "./rol.js";
import _initSeguimiento from "./seguimiento.js";
import _initTemporada from "./temporada.js";
import _initUsuario from "./usuario.js";
import _initUsuarioRol from "./usuario_rol.js";

export default function initModels (sequelize: Sequelize) {
  const SequelizeMeta = _SequelizeMeta(sequelize);
  const comentario = _initComentario(sequelize);
  const foto = _initFoto(sequelize);
  const local = _initLocal(sequelize);
  const marca = _initMarca(sequelize);
  const objetivo = _initObjetivo(sequelize);
  const objetivo_completado = _initObjetivoCompletado(sequelize);
  const persona = _initPersona(sequelize);
  const producto = _initProducto(sequelize);
  const publicacion = _initPublicacion(sequelize);
  const recompensa = _initRecompensa(sequelize);
  const rol = _initRol(sequelize);
  const seguimiento = _initSeguimiento(sequelize);
  const temporada = _initTemporada(sequelize);
  const usuario = _initUsuario(sequelize);
  const usuario_rol = _initUsuarioRol(sequelize);

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
  publicacion.belongsTo(producto, { as: "producto", foreignKey: "producto_id"});
  producto.hasMany(publicacion, { as: "publicacions", foreignKey: "producto_id"});

  // Relationships for publicacion
  comentario.belongsTo(publicacion, { as: "publicacion", foreignKey: "publicacion_id"});
  publicacion.hasMany(comentario, { as: "comentarios", foreignKey: "publicacion_id"});
  foto.belongsTo(publicacion, { as: "publicacion", foreignKey: "publicacion_id"});
  publicacion.hasMany(foto, { as: "fotos", foreignKey: "publicacion_id"});
  publicacion.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(publicacion, { as: "publicacions", foreignKey: "usuario_id"});

  // Relationships for comentario
  comentario.belongsTo(usuario, { as: "usuario", foreignKey: "usuario_id"});
  usuario.hasMany(comentario, { as: "comentarios", foreignKey: "usuario_id"});

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
    comentario,
    foto,
    local,
    marca,
    objetivo,
    objetivo_completado,
    persona,
    producto,
    publicacion,
    recompensa,
    rol,
    seguimiento,
    temporada,
    usuario,
    usuario_rol,
  };
}
