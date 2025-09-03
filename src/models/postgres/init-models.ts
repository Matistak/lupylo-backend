import type { Sequelize } from "sequelize";
import { comentarios as _comentarios } from "./comentarios.js";
import type { comentariosAttributes, comentariosCreationAttributes } from "./comentarios.js";
import { estilos_cerveza as _estilos_cerveza } from "./estilos_cerveza.js";
import type { estilos_cervezaAttributes, estilos_cervezaCreationAttributes } from "./estilos_cerveza.js";
import { historial_puntos as _historial_puntos } from "./historial_puntos.js";
import type { historial_puntosAttributes, historial_puntosCreationAttributes } from "./historial_puntos.js";
import { likes as _likes } from "./likes.js";
import type { likesAttributes, likesCreationAttributes } from "./likes.js";
import { locales as _locales } from "./locales.js";
import type { localesAttributes, localesCreationAttributes } from "./locales.js";
import { logs_sistema as _logs_sistema } from "./logs_sistema.js";
import type { logs_sistemaAttributes, logs_sistemaCreationAttributes } from "./logs_sistema.js";
import { marcas as _marcas } from "./marcas.js";
import type { marcasAttributes, marcasCreationAttributes } from "./marcas.js";
import { niveles_usuario as _niveles_usuario } from "./niveles_usuario.js";
import type { niveles_usuarioAttributes, niveles_usuarioCreationAttributes } from "./niveles_usuario.js";
import { objetivos as _objetivos } from "./objetivos.js";
import type { objetivosAttributes, objetivosCreationAttributes } from "./objetivos.js";
import { producto_envases as _producto_envases } from "./producto_envases.js";
import type { producto_envasesAttributes, producto_envasesCreationAttributes } from "./producto_envases.js";
import { producto_locales as _producto_locales } from "./producto_locales.js";
import type { producto_localesAttributes, producto_localesCreationAttributes } from "./producto_locales.js";
import { productos as _productos } from "./productos.js";
import type { productosAttributes, productosCreationAttributes } from "./productos.js";
import { publicaciones as _publicaciones } from "./publicaciones.js";
import type { publicacionesAttributes, publicacionesCreationAttributes } from "./publicaciones.js";
import { recompensas_obtenidas as _recompensas_obtenidas } from "./recompensas_obtenidas.js";
import type { recompensas_obtenidasAttributes, recompensas_obtenidasCreationAttributes } from "./recompensas_obtenidas.js";
import { referencias as _referencias } from "./referencias.js";
import type { referenciasAttributes, referenciasCreationAttributes } from "./referencias.js";
import { roles as _roles } from "./roles.js";
import type { rolesAttributes, rolesCreationAttributes } from "./roles.js";
import { seguimientos as _seguimientos } from "./seguimientos.js";
import type { seguimientosAttributes, seguimientosCreationAttributes } from "./seguimientos.js";
import { solicitudes as _solicitudes } from "./solicitudes.js";
import type { solicitudesAttributes, solicitudesCreationAttributes } from "./solicitudes.js";
import { sub_objetivos as _sub_objetivos } from "./sub_objetivos.js";
import type { sub_objetivosAttributes, sub_objetivosCreationAttributes } from "./sub_objetivos.js";
import { suscripciones as _suscripciones } from "./suscripciones.js";
import type { suscripcionesAttributes, suscripcionesCreationAttributes } from "./suscripciones.js";
import { temporadas as _temporadas } from "./temporadas.js";
import type { temporadasAttributes, temporadasCreationAttributes } from "./temporadas.js";
import { tipo_referencia as _tipo_referencia } from "./tipo_referencia.js";
import type { tipo_referenciaAttributes, tipo_referenciaCreationAttributes } from "./tipo_referencia.js";
import { tipos_envase as _tipos_envase } from "./tipos_envase.js";
import type { tipos_envaseAttributes, tipos_envaseCreationAttributes } from "./tipos_envase.js";
import { tipos_publicacion as _tipos_publicacion } from "./tipos_publicacion.js";
import type { tipos_publicacionAttributes, tipos_publicacionCreationAttributes } from "./tipos_publicacion.js";
import { tokens_qr as _tokens_qr } from "./tokens_qr.js";
import type { tokens_qrAttributes, tokens_qrCreationAttributes } from "./tokens_qr.js";
import { ubicaciones as _ubicaciones } from "./ubicaciones.js";
import type { ubicacionesAttributes, ubicacionesCreationAttributes } from "./ubicaciones.js";
import { usuario_objetivos as _usuario_objetivos } from "./usuario_objetivos.js";
import type { usuario_objetivosAttributes, usuario_objetivosCreationAttributes } from "./usuario_objetivos.js";
import { usuario_roles as _usuario_roles } from "./usuario_roles.js";
import type { usuario_rolesAttributes, usuario_rolesCreationAttributes } from "./usuario_roles.js";
import { usuarios as _usuarios } from "./usuarios.js";
import type { usuariosAttributes, usuariosCreationAttributes } from "./usuarios.js";
import { validaciones_qr as _validaciones_qr } from "./validaciones_qr.js";
import type { validaciones_qrAttributes, validaciones_qrCreationAttributes } from "./validaciones_qr.js";

export {
  _comentarios as comentarios,
  _estilos_cerveza as estilos_cerveza,
  _historial_puntos as historial_puntos,
  _likes as likes,
  _locales as locales,
  _logs_sistema as logs_sistema,
  _marcas as marcas,
  _niveles_usuario as niveles_usuario,
  _objetivos as objetivos,
  _producto_envases as producto_envases,
  _producto_locales as producto_locales,
  _productos as productos,
  _publicaciones as publicaciones,
  _recompensas_obtenidas as recompensas_obtenidas,
  _referencias as referencias,
  _roles as roles,
  _seguimientos as seguimientos,
  _solicitudes as solicitudes,
  _sub_objetivos as sub_objetivos,
  _suscripciones as suscripciones,
  _temporadas as temporadas,
  _tipo_referencia as tipo_referencia,
  _tipos_envase as tipos_envase,
  _tipos_publicacion as tipos_publicacion,
  _tokens_qr as tokens_qr,
  _ubicaciones as ubicaciones,
  _usuario_objetivos as usuario_objetivos,
  _usuario_roles as usuario_roles,
  _usuarios as usuarios,
  _validaciones_qr as validaciones_qr,
};

export type {
  comentariosAttributes,
  comentariosCreationAttributes,
  estilos_cervezaAttributes,
  estilos_cervezaCreationAttributes,
  historial_puntosAttributes,
  historial_puntosCreationAttributes,
  likesAttributes,
  likesCreationAttributes,
  localesAttributes,
  localesCreationAttributes,
  logs_sistemaAttributes,
  logs_sistemaCreationAttributes,
  marcasAttributes,
  marcasCreationAttributes,
  niveles_usuarioAttributes,
  niveles_usuarioCreationAttributes,
  objetivosAttributes,
  objetivosCreationAttributes,
  producto_envasesAttributes,
  producto_envasesCreationAttributes,
  producto_localesAttributes,
  producto_localesCreationAttributes,
  productosAttributes,
  productosCreationAttributes,
  publicacionesAttributes,
  publicacionesCreationAttributes,
  recompensas_obtenidasAttributes,
  recompensas_obtenidasCreationAttributes,
  referenciasAttributes,
  referenciasCreationAttributes,
  rolesAttributes,
  rolesCreationAttributes,
  seguimientosAttributes,
  seguimientosCreationAttributes,
  solicitudesAttributes,
  solicitudesCreationAttributes,
  sub_objetivosAttributes,
  sub_objetivosCreationAttributes,
  suscripcionesAttributes,
  suscripcionesCreationAttributes,
  temporadasAttributes,
  temporadasCreationAttributes,
  tipo_referenciaAttributes,
  tipo_referenciaCreationAttributes,
  tipos_envaseAttributes,
  tipos_envaseCreationAttributes,
  tipos_publicacionAttributes,
  tipos_publicacionCreationAttributes,
  tokens_qrAttributes,
  tokens_qrCreationAttributes,
  ubicacionesAttributes,
  ubicacionesCreationAttributes,
  usuario_objetivosAttributes,
  usuario_objetivosCreationAttributes,
  usuario_rolesAttributes,
  usuario_rolesCreationAttributes,
  usuariosAttributes,
  usuariosCreationAttributes,
  validaciones_qrAttributes,
  validaciones_qrCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const comentarios = _comentarios.initModel(sequelize);
  const estilos_cerveza = _estilos_cerveza.initModel(sequelize);
  const historial_puntos = _historial_puntos.initModel(sequelize);
  const likes = _likes.initModel(sequelize);
  const locales = _locales.initModel(sequelize);
  const logs_sistema = _logs_sistema.initModel(sequelize);
  const marcas = _marcas.initModel(sequelize);
  const niveles_usuario = _niveles_usuario.initModel(sequelize);
  const objetivos = _objetivos.initModel(sequelize);
  const producto_envases = _producto_envases.initModel(sequelize);
  const producto_locales = _producto_locales.initModel(sequelize);
  const productos = _productos.initModel(sequelize);
  const publicaciones = _publicaciones.initModel(sequelize);
  const recompensas_obtenidas = _recompensas_obtenidas.initModel(sequelize);
  const referencias = _referencias.initModel(sequelize);
  const roles = _roles.initModel(sequelize);
  const seguimientos = _seguimientos.initModel(sequelize);
  const solicitudes = _solicitudes.initModel(sequelize);
  const sub_objetivos = _sub_objetivos.initModel(sequelize);
  const suscripciones = _suscripciones.initModel(sequelize);
  const temporadas = _temporadas.initModel(sequelize);
  const tipo_referencia = _tipo_referencia.initModel(sequelize);
  const tipos_envase = _tipos_envase.initModel(sequelize);
  const tipos_publicacion = _tipos_publicacion.initModel(sequelize);
  const tokens_qr = _tokens_qr.initModel(sequelize);
  const ubicaciones = _ubicaciones.initModel(sequelize);
  const usuario_objetivos = _usuario_objetivos.initModel(sequelize);
  const usuario_roles = _usuario_roles.initModel(sequelize);
  const usuarios = _usuarios.initModel(sequelize);
  const validaciones_qr = _validaciones_qr.initModel(sequelize);

  comentarios.belongsTo(comentarios, { as: "comentario_padre", foreignKey: "comentario_padre_id"});
  comentarios.hasMany(comentarios, { as: "comentarios", foreignKey: "comentario_padre_id"});
  likes.belongsTo(comentarios, { as: "comentario", foreignKey: "comentario_id"});
  comentarios.hasMany(likes, { as: "likes", foreignKey: "comentario_id"});
  objetivos.belongsTo(locales, { as: "local", foreignKey: "local_id"});
  locales.hasMany(objetivos, { as: "objetivos", foreignKey: "local_id"});
  producto_locales.belongsTo(locales, { as: "local", foreignKey: "local_id"});
  locales.hasMany(producto_locales, { as: "producto_locales", foreignKey: "local_id"});
  publicaciones.belongsTo(locales, { as: "local", foreignKey: "local_id"});
  locales.hasMany(publicaciones, { as: "publicaciones", foreignKey: "local_id"});
  recompensas_obtenidas.belongsTo(locales, { as: "local", foreignKey: "local_id"});
  locales.hasMany(recompensas_obtenidas, { as: "recompensas_obtenidas", foreignKey: "local_id"});
  temporadas.belongsTo(locales, { as: "local", foreignKey: "local_id"});
  locales.hasMany(temporadas, { as: "temporadas", foreignKey: "local_id"});
  validaciones_qr.belongsTo(locales, { as: "local", foreignKey: "local_id"});
  locales.hasMany(validaciones_qr, { as: "validaciones_qrs", foreignKey: "local_id"});
  objetivos.belongsTo(marcas, { as: "marca", foreignKey: "marca_id"});
  marcas.hasMany(objetivos, { as: "objetivos", foreignKey: "marca_id"});
  producto_locales.belongsTo(marcas, { as: "marca", foreignKey: "marca_id"});
  marcas.hasMany(producto_locales, { as: "producto_locales", foreignKey: "marca_id"});
  productos.belongsTo(marcas, { as: "marca", foreignKey: "marca_id"});
  marcas.hasMany(productos, { as: "productos", foreignKey: "marca_id"});
  publicaciones.belongsTo(marcas, { as: "marca", foreignKey: "marca_id"});
  marcas.hasMany(publicaciones, { as: "publicaciones", foreignKey: "marca_id"});
  usuarios.belongsTo(niveles_usuario, { as: "nivel", foreignKey: "nivel_id"});
  niveles_usuario.hasMany(usuarios, { as: "usuarios", foreignKey: "nivel_id"});
  recompensas_obtenidas.belongsTo(objetivos, { as: "objetivo", foreignKey: "objetivo_id"});
  objetivos.hasMany(recompensas_obtenidas, { as: "recompensas_obtenidas", foreignKey: "objetivo_id"});
  sub_objetivos.belongsTo(objetivos, { as: "objetivo", foreignKey: "objetivo_id"});
  objetivos.hasMany(sub_objetivos, { as: "sub_objetivos", foreignKey: "objetivo_id"});
  tokens_qr.belongsTo(objetivos, { as: "objetivo", foreignKey: "objetivo_id"});
  objetivos.hasMany(tokens_qr, { as: "tokens_qrs", foreignKey: "objetivo_id"});
  usuario_objetivos.belongsTo(objetivos, { as: "objetivo", foreignKey: "objetivo_id"});
  objetivos.hasMany(usuario_objetivos, { as: "usuario_objetivos", foreignKey: "objetivo_id"});
  producto_envases.belongsTo(productos, { as: "producto", foreignKey: "producto_id"});
  productos.hasMany(producto_envases, { as: "producto_envases", foreignKey: "producto_id"});
  producto_locales.belongsTo(productos, { as: "producto", foreignKey: "producto_id"});
  productos.hasMany(producto_locales, { as: "producto_locales", foreignKey: "producto_id"});
  publicaciones.belongsTo(productos, { as: "producto", foreignKey: "producto_id"});
  productos.hasMany(publicaciones, { as: "publicaciones", foreignKey: "producto_id"});
  sub_objetivos.belongsTo(productos, { as: "producto", foreignKey: "producto_id"});
  productos.hasMany(sub_objetivos, { as: "sub_objetivos", foreignKey: "producto_id"});
  comentarios.belongsTo(publicaciones, { as: "publicacion", foreignKey: "publicacion_id"});
  publicaciones.hasMany(comentarios, { as: "comentarios", foreignKey: "publicacion_id"});
  likes.belongsTo(publicaciones, { as: "publicacion", foreignKey: "publicacion_id"});
  publicaciones.hasMany(likes, { as: "likes", foreignKey: "publicacion_id"});
  usuario_roles.belongsTo(roles, { as: "rol", foreignKey: "rol_id"});
  roles.hasMany(usuario_roles, { as: "usuario_roles", foreignKey: "rol_id"});
  usuarios.belongsTo(solicitudes, { as: "solicitud", foreignKey: "solicitud_id"});
  solicitudes.hasMany(usuarios, { as: "usuarios", foreignKey: "solicitud_id"});
  objetivos.belongsTo(temporadas, { as: "temporada", foreignKey: "temporada_id"});
  temporadas.hasMany(objetivos, { as: "objetivos", foreignKey: "temporada_id"});
  referencias.belongsTo(tipo_referencia, { as: "tipo_referencium", foreignKey: "tipo_referencia_id"});
  tipo_referencia.hasMany(referencias, { as: "referencia", foreignKey: "tipo_referencia_id"});
  locales.belongsTo(ubicaciones, { as: "ubicacion", foreignKey: "ubicacion_id"});
  ubicaciones.hasMany(locales, { as: "locales", foreignKey: "ubicacion_id"});
  validaciones_qr.belongsTo(usuario_objetivos, { as: "usuario_objetivo", foreignKey: "usuario_objetivo_id"});
  usuario_objetivos.hasMany(validaciones_qr, { as: "validaciones_qrs", foreignKey: "usuario_objetivo_id"});
  comentarios.belongsTo(usuarios, { as: "autor", foreignKey: "autor_id"});
  usuarios.hasMany(comentarios, { as: "comentarios", foreignKey: "autor_id"});
  historial_puntos.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(historial_puntos, { as: "historial_puntos", foreignKey: "usuario_id"});
  likes.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(likes, { as: "likes", foreignKey: "usuario_id"});
  locales.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(locales, { as: "locales", foreignKey: "usuario_id"});
  logs_sistema.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(logs_sistema, { as: "logs_sistemas", foreignKey: "usuario_id"});
  marcas.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(marcas, { as: "marcas", foreignKey: "usuario_id"});
  publicaciones.belongsTo(usuarios, { as: "autor", foreignKey: "autor_id"});
  usuarios.hasMany(publicaciones, { as: "publicaciones", foreignKey: "autor_id"});
  recompensas_obtenidas.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(recompensas_obtenidas, { as: "recompensas_obtenidas", foreignKey: "usuario_id"});
  seguimientos.belongsTo(usuarios, { as: "seguido", foreignKey: "seguido_id"});
  usuarios.hasMany(seguimientos, { as: "seguimientos", foreignKey: "seguido_id"});
  seguimientos.belongsTo(usuarios, { as: "seguidor", foreignKey: "seguidor_id"});
  usuarios.hasMany(seguimientos, { as: "seguidor_seguimientos", foreignKey: "seguidor_id"});
  suscripciones.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(suscripciones, { as: "suscripciones", foreignKey: "usuario_id"});
  tokens_qr.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(tokens_qr, { as: "tokens_qrs", foreignKey: "usuario_id"});
  usuario_objetivos.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(usuario_objetivos, { as: "usuario_objetivos", foreignKey: "usuario_id"});
  usuario_roles.belongsTo(usuarios, { as: "usuario", foreignKey: "usuario_id"});
  usuarios.hasMany(usuario_roles, { as: "usuario_roles", foreignKey: "usuario_id"});
  validaciones_qr.belongsTo(usuarios, { as: "validado_por_usuario", foreignKey: "validado_por"});
  usuarios.hasMany(validaciones_qr, { as: "validaciones_qrs", foreignKey: "validado_por"});

  return {
    comentarios: comentarios,
    estilos_cerveza: estilos_cerveza,
    historial_puntos: historial_puntos,
    likes: likes,
    locales: locales,
    logs_sistema: logs_sistema,
    marcas: marcas,
    niveles_usuario: niveles_usuario,
    objetivos: objetivos,
    producto_envases: producto_envases,
    producto_locales: producto_locales,
    productos: productos,
    publicaciones: publicaciones,
    recompensas_obtenidas: recompensas_obtenidas,
    referencias: referencias,
    roles: roles,
    seguimientos: seguimientos,
    solicitudes: solicitudes,
    sub_objetivos: sub_objetivos,
    suscripciones: suscripciones,
    temporadas: temporadas,
    tipo_referencia: tipo_referencia,
    tipos_envase: tipos_envase,
    tipos_publicacion: tipos_publicacion,
    tokens_qr: tokens_qr,
    ubicaciones: ubicaciones,
    usuario_objetivos: usuario_objetivos,
    usuario_roles: usuario_roles,
    usuarios: usuarios,
    validaciones_qr: validaciones_qr,
  };
}
