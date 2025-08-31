import type { Sequelize } from "sequelize";
import { Comentarios as _Comentarios } from "./comentarios.js";
import type { ComentariosAttributes, ComentariosCreationAttributes } from "./comentarios.js";
import { EstilosCerveza as _EstilosCerveza } from "./estilosCerveza.js";
import type { EstilosCervezaAttributes, EstilosCervezaCreationAttributes } from "./estilosCerveza.js";
import { HistorialPuntos as _HistorialPuntos } from "./historialPuntos.js";
import type { HistorialPuntosAttributes, HistorialPuntosCreationAttributes } from "./historialPuntos.js";
import { Likes as _Likes } from "./likes.js";
import type { LikesAttributes, LikesCreationAttributes } from "./likes.js";
import { Locales as _Locales } from "./locales.js";
import type { LocalesAttributes, LocalesCreationAttributes } from "./locales.js";
import { LogsSistema as _LogsSistema } from "./logsSistema.js";
import type { LogsSistemaAttributes, LogsSistemaCreationAttributes } from "./logsSistema.js";
import { Marcas as _Marcas } from "./marcas.js";
import type { MarcasAttributes, MarcasCreationAttributes } from "./marcas.js";
import { NivelesUsuario as _NivelesUsuario } from "./nivelesUsuario.js";
import type { NivelesUsuarioAttributes, NivelesUsuarioCreationAttributes } from "./nivelesUsuario.js";
import { Objetivos as _Objetivos } from "./objetivos.js";
import type { ObjetivosAttributes, ObjetivosCreationAttributes } from "./objetivos.js";
import { ProductoEnvases as _ProductoEnvases } from "./productoEnvases.js";
import type { ProductoEnvasesAttributes, ProductoEnvasesCreationAttributes } from "./productoEnvases.js";
import { ProductoLocales as _ProductoLocales } from "./productoLocales.js";
import type { ProductoLocalesAttributes, ProductoLocalesCreationAttributes } from "./productoLocales.js";
import { Productos as _Productos } from "./productos.js";
import type { ProductosAttributes, ProductosCreationAttributes } from "./productos.js";
import { Publicaciones as _Publicaciones } from "./publicaciones.js";
import type { PublicacionesAttributes, PublicacionesCreationAttributes } from "./publicaciones.js";
import { RecompensasObtenidas as _RecompensasObtenidas } from "./recompensasObtenidas.js";
import type { RecompensasObtenidasAttributes, RecompensasObtenidasCreationAttributes } from "./recompensasObtenidas.js";
import { Roles as _Roles } from "./roles.js";
import type { RolesAttributes, RolesCreationAttributes } from "./roles.js";
import { Seguimientos as _Seguimientos } from "./seguimientos.js";
import type { SeguimientosAttributes, SeguimientosCreationAttributes } from "./seguimientos.js";
import { Suscripciones as _Suscripciones } from "./suscripciones.js";
import type { SuscripcionesAttributes, SuscripcionesCreationAttributes } from "./suscripciones.js";
import { Temporadas as _Temporadas } from "./temporadas.js";
import type { TemporadasAttributes, TemporadasCreationAttributes } from "./temporadas.js";
import { TiposEnvase as _TiposEnvase } from "./tiposEnvase.js";
import type { TiposEnvaseAttributes, TiposEnvaseCreationAttributes } from "./tiposEnvase.js";
import { TiposPublicacion as _TiposPublicacion } from "./tiposPublicacion.js";
import type { TiposPublicacionAttributes, TiposPublicacionCreationAttributes } from "./tiposPublicacion.js";
import { TokensQr as _TokensQr } from "./tokensQr.js";
import type { TokensQrAttributes, TokensQrCreationAttributes } from "./tokensQr.js";
import { Ubicaciones as _Ubicaciones } from "./ubicaciones.js";
import type { UbicacionesAttributes, UbicacionesCreationAttributes } from "./ubicaciones.js";
import { UsuarioObjetivos as _UsuarioObjetivos } from "./usuarioObjetivos.js";
import type { UsuarioObjetivosAttributes, UsuarioObjetivosCreationAttributes } from "./usuarioObjetivos.js";
import { UsuarioRoles as _UsuarioRoles } from "./usuarioRoles.js";
import type { UsuarioRolesAttributes, UsuarioRolesCreationAttributes } from "./usuarioRoles.js";
import { Usuarios as _Usuarios } from "./usuarios.js";
import type { UsuariosAttributes, UsuariosCreationAttributes } from "./usuarios.js";
import { ValidacionesQr as _ValidacionesQr } from "./validacionesQr.js";
import type { ValidacionesQrAttributes, ValidacionesQrCreationAttributes } from "./validacionesQr.js";

export {
  _Comentarios as Comentarios,
  _EstilosCerveza as EstilosCerveza,
  _HistorialPuntos as HistorialPuntos,
  _Likes as Likes,
  _Locales as Locales,
  _LogsSistema as LogsSistema,
  _Marcas as Marcas,
  _NivelesUsuario as NivelesUsuario,
  _Objetivos as Objetivos,
  _ProductoEnvases as ProductoEnvases,
  _ProductoLocales as ProductoLocales,
  _Productos as Productos,
  _Publicaciones as Publicaciones,
  _RecompensasObtenidas as RecompensasObtenidas,
  _Roles as Roles,
  _Seguimientos as Seguimientos,
  _Suscripciones as Suscripciones,
  _Temporadas as Temporadas,
  _TiposEnvase as TiposEnvase,
  _TiposPublicacion as TiposPublicacion,
  _TokensQr as TokensQr,
  _Ubicaciones as Ubicaciones,
  _UsuarioObjetivos as UsuarioObjetivos,
  _UsuarioRoles as UsuarioRoles,
  _Usuarios as Usuarios,
  _ValidacionesQr as ValidacionesQr,
};

export type {
  ComentariosAttributes,
  ComentariosCreationAttributes,
  EstilosCervezaAttributes,
  EstilosCervezaCreationAttributes,
  HistorialPuntosAttributes,
  HistorialPuntosCreationAttributes,
  LikesAttributes,
  LikesCreationAttributes,
  LocalesAttributes,
  LocalesCreationAttributes,
  LogsSistemaAttributes,
  LogsSistemaCreationAttributes,
  MarcasAttributes,
  MarcasCreationAttributes,
  NivelesUsuarioAttributes,
  NivelesUsuarioCreationAttributes,
  ObjetivosAttributes,
  ObjetivosCreationAttributes,
  ProductoEnvasesAttributes,
  ProductoEnvasesCreationAttributes,
  ProductoLocalesAttributes,
  ProductoLocalesCreationAttributes,
  ProductosAttributes,
  ProductosCreationAttributes,
  PublicacionesAttributes,
  PublicacionesCreationAttributes,
  RecompensasObtenidasAttributes,
  RecompensasObtenidasCreationAttributes,
  RolesAttributes,
  RolesCreationAttributes,
  SeguimientosAttributes,
  SeguimientosCreationAttributes,
  SuscripcionesAttributes,
  SuscripcionesCreationAttributes,
  TemporadasAttributes,
  TemporadasCreationAttributes,
  TiposEnvaseAttributes,
  TiposEnvaseCreationAttributes,
  TiposPublicacionAttributes,
  TiposPublicacionCreationAttributes,
  TokensQrAttributes,
  TokensQrCreationAttributes,
  UbicacionesAttributes,
  UbicacionesCreationAttributes,
  UsuarioObjetivosAttributes,
  UsuarioObjetivosCreationAttributes,
  UsuarioRolesAttributes,
  UsuarioRolesCreationAttributes,
  UsuariosAttributes,
  UsuariosCreationAttributes,
  ValidacionesQrAttributes,
  ValidacionesQrCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const Comentarios = _Comentarios.initModel(sequelize);
  const EstilosCerveza = _EstilosCerveza.initModel(sequelize);
  const HistorialPuntos = _HistorialPuntos.initModel(sequelize);
  const Likes = _Likes.initModel(sequelize);
  const Locales = _Locales.initModel(sequelize);
  const LogsSistema = _LogsSistema.initModel(sequelize);
  const Marcas = _Marcas.initModel(sequelize);
  const NivelesUsuario = _NivelesUsuario.initModel(sequelize);
  const Objetivos = _Objetivos.initModel(sequelize);
  const ProductoEnvases = _ProductoEnvases.initModel(sequelize);
  const ProductoLocales = _ProductoLocales.initModel(sequelize);
  const Productos = _Productos.initModel(sequelize);
  const Publicaciones = _Publicaciones.initModel(sequelize);
  const RecompensasObtenidas = _RecompensasObtenidas.initModel(sequelize);
  const Roles = _Roles.initModel(sequelize);
  const Seguimientos = _Seguimientos.initModel(sequelize);
  const Suscripciones = _Suscripciones.initModel(sequelize);
  const Temporadas = _Temporadas.initModel(sequelize);
  const TiposEnvase = _TiposEnvase.initModel(sequelize);
  const TiposPublicacion = _TiposPublicacion.initModel(sequelize);
  const TokensQr = _TokensQr.initModel(sequelize);
  const Ubicaciones = _Ubicaciones.initModel(sequelize);
  const UsuarioObjetivos = _UsuarioObjetivos.initModel(sequelize);
  const UsuarioRoles = _UsuarioRoles.initModel(sequelize);
  const Usuarios = _Usuarios.initModel(sequelize);
  const ValidacionesQr = _ValidacionesQr.initModel(sequelize);

  Comentarios.belongsTo(Comentarios, { as: "comentarioPadre", foreignKey: "comentarioPadreId"});
  Comentarios.hasMany(Comentarios, { as: "comentarios", foreignKey: "comentarioPadreId"});
  Likes.belongsTo(Comentarios, { as: "comentario", foreignKey: "comentarioId"});
  Comentarios.hasOne(Likes, { as: "like", foreignKey: "comentarioId"});
  Productos.belongsTo(EstilosCerveza, { as: "estilo", foreignKey: "estiloId"});
  EstilosCerveza.hasMany(Productos, { as: "productos", foreignKey: "estiloId"});
  Objetivos.belongsTo(Locales, { as: "local", foreignKey: "localId"});
  Locales.hasMany(Objetivos, { as: "objetivos", foreignKey: "localId"});
  ProductoLocales.belongsTo(Locales, { as: "local", foreignKey: "localId"});
  Locales.hasMany(ProductoLocales, { as: "productoLocales", foreignKey: "localId"});
  Publicaciones.belongsTo(Locales, { as: "local", foreignKey: "localId"});
  Locales.hasMany(Publicaciones, { as: "publicaciones", foreignKey: "localId"});
  RecompensasObtenidas.belongsTo(Locales, { as: "local", foreignKey: "localId"});
  Locales.hasMany(RecompensasObtenidas, { as: "recompensasObtenidas", foreignKey: "localId"});
  Temporadas.belongsTo(Locales, { as: "local", foreignKey: "localId"});
  Locales.hasMany(Temporadas, { as: "temporadas", foreignKey: "localId"});
  ValidacionesQr.belongsTo(Locales, { as: "local", foreignKey: "localId"});
  Locales.hasMany(ValidacionesQr, { as: "validacionesQrs", foreignKey: "localId"});
  Objetivos.belongsTo(Marcas, { as: "marca", foreignKey: "marcaId"});
  Marcas.hasMany(Objetivos, { as: "objetivos", foreignKey: "marcaId"});
  ProductoLocales.belongsTo(Marcas, { as: "marca", foreignKey: "marcaId"});
  Marcas.hasMany(ProductoLocales, { as: "productoLocales", foreignKey: "marcaId"});
  Productos.belongsTo(Marcas, { as: "marca", foreignKey: "marcaId"});
  Marcas.hasMany(Productos, { as: "productos", foreignKey: "marcaId"});
  Publicaciones.belongsTo(Marcas, { as: "marca", foreignKey: "marcaId"});
  Marcas.hasMany(Publicaciones, { as: "publicaciones", foreignKey: "marcaId"});
  Usuarios.belongsTo(NivelesUsuario, { as: "nivel", foreignKey: "nivelId"});
  NivelesUsuario.hasMany(Usuarios, { as: "usuarios", foreignKey: "nivelId"});
  RecompensasObtenidas.belongsTo(Objetivos, { as: "objetivo", foreignKey: "objetivoId"});
  Objetivos.hasMany(RecompensasObtenidas, { as: "recompensasObtenidas", foreignKey: "objetivoId"});
  TokensQr.belongsTo(Objetivos, { as: "objetivo", foreignKey: "objetivoId"});
  Objetivos.hasMany(TokensQr, { as: "tokensQrs", foreignKey: "objetivoId"});
  UsuarioObjetivos.belongsTo(Objetivos, { as: "objetivo", foreignKey: "objetivoId"});
  Objetivos.hasMany(UsuarioObjetivos, { as: "usuarioObjetivos", foreignKey: "objetivoId"});
  Objetivos.belongsTo(Productos, { as: "producto", foreignKey: "productoId"});
  Productos.hasMany(Objetivos, { as: "objetivos", foreignKey: "productoId"});
  ProductoEnvases.belongsTo(Productos, { as: "producto", foreignKey: "productoId"});
  Productos.hasMany(ProductoEnvases, { as: "productoEnvases", foreignKey: "productoId"});
  ProductoLocales.belongsTo(Productos, { as: "producto", foreignKey: "productoId"});
  Productos.hasMany(ProductoLocales, { as: "productoLocales", foreignKey: "productoId"});
  Publicaciones.belongsTo(Productos, { as: "producto", foreignKey: "productoId"});
  Productos.hasMany(Publicaciones, { as: "publicaciones", foreignKey: "productoId"});
  Comentarios.belongsTo(Publicaciones, { as: "publicacion", foreignKey: "publicacionId"});
  Publicaciones.hasMany(Comentarios, { as: "comentarios", foreignKey: "publicacionId"});
  Likes.belongsTo(Publicaciones, { as: "publicacion", foreignKey: "publicacionId"});
  Publicaciones.hasMany(Likes, { as: "likes", foreignKey: "publicacionId"});
  UsuarioRoles.belongsTo(Roles, { as: "rol", foreignKey: "rolId"});
  Roles.hasMany(UsuarioRoles, { as: "usuarioRoles", foreignKey: "rolId"});
  Objetivos.belongsTo(Temporadas, { as: "temporada", foreignKey: "temporadaId"});
  Temporadas.hasMany(Objetivos, { as: "objetivos", foreignKey: "temporadaId"});
  ProductoEnvases.belongsTo(TiposEnvase, { as: "tipoEnvase", foreignKey: "tipoEnvaseId"});
  TiposEnvase.hasMany(ProductoEnvases, { as: "productoEnvases", foreignKey: "tipoEnvaseId"});
  Publicaciones.belongsTo(TiposPublicacion, { as: "tipoPublicacion", foreignKey: "tipoPublicacionId"});
  TiposPublicacion.hasMany(Publicaciones, { as: "publicaciones", foreignKey: "tipoPublicacionId"});
  ValidacionesQr.belongsTo(UsuarioObjetivos, { as: "usuarioObjetivo", foreignKey: "usuarioObjetivoId"});
  UsuarioObjetivos.hasMany(ValidacionesQr, { as: "validacionesQrs", foreignKey: "usuarioObjetivoId"});
  Comentarios.belongsTo(Usuarios, { as: "autor", foreignKey: "autorId"});
  Usuarios.hasMany(Comentarios, { as: "comentarios", foreignKey: "autorId"});
  HistorialPuntos.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(HistorialPuntos, { as: "historialPuntos", foreignKey: "usuarioId"});
  Likes.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(Likes, { as: "likes", foreignKey: "usuarioId"});
  Locales.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(Locales, { as: "locales", foreignKey: "usuarioId"});
  LogsSistema.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(LogsSistema, { as: "logsSistemas", foreignKey: "usuarioId"});
  Marcas.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(Marcas, { as: "marcas", foreignKey: "usuarioId"});
  Publicaciones.belongsTo(Usuarios, { as: "autor", foreignKey: "autorId"});
  Usuarios.hasMany(Publicaciones, { as: "publicaciones", foreignKey: "autorId"});
  RecompensasObtenidas.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(RecompensasObtenidas, { as: "recompensasObtenidas", foreignKey: "usuarioId"});
  Seguimientos.belongsTo(Usuarios, { as: "seguido", foreignKey: "seguidoId"});
  Usuarios.hasMany(Seguimientos, { as: "seguimientos", foreignKey: "seguidoId"});
  Seguimientos.belongsTo(Usuarios, { as: "seguidor", foreignKey: "seguidorId"});
  Usuarios.hasMany(Seguimientos, { as: "seguidorSeguimientos", foreignKey: "seguidorId"});
  Suscripciones.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(Suscripciones, { as: "suscripciones", foreignKey: "usuarioId"});
  TokensQr.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(TokensQr, { as: "tokensQrs", foreignKey: "usuarioId"});
  UsuarioObjetivos.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(UsuarioObjetivos, { as: "usuarioObjetivos", foreignKey: "usuarioId"});
  UsuarioRoles.belongsTo(Usuarios, { as: "aprobadoPorUsuario", foreignKey: "aprobadoPor"});
  Usuarios.hasMany(UsuarioRoles, { as: "usuarioRoles", foreignKey: "aprobadoPor"});
  UsuarioRoles.belongsTo(Usuarios, { as: "usuario", foreignKey: "usuarioId"});
  Usuarios.hasMany(UsuarioRoles, { as: "usuarioUsuarioRoles", foreignKey: "usuarioId"});
  ValidacionesQr.belongsTo(Usuarios, { as: "validadoPorUsuario", foreignKey: "validadoPor"});
  Usuarios.hasMany(ValidacionesQr, { as: "validacionesQrs", foreignKey: "validadoPor"});

  return {
    Comentarios: Comentarios,
    EstilosCerveza: EstilosCerveza,
    HistorialPuntos: HistorialPuntos,
    Likes: Likes,
    Locales: Locales,
    LogsSistema: LogsSistema,
    Marcas: Marcas,
    NivelesUsuario: NivelesUsuario,
    Objetivos: Objetivos,
    ProductoEnvases: ProductoEnvases,
    ProductoLocales: ProductoLocales,
    Productos: Productos,
    Publicaciones: Publicaciones,
    RecompensasObtenidas: RecompensasObtenidas,
    Roles: Roles,
    Seguimientos: Seguimientos,
    Suscripciones: Suscripciones,
    Temporadas: Temporadas,
    TiposEnvase: TiposEnvase,
    TiposPublicacion: TiposPublicacion,
    TokensQr: TokensQr,
    Ubicaciones: Ubicaciones,
    UsuarioObjetivos: UsuarioObjetivos,
    UsuarioRoles: UsuarioRoles,
    Usuarios: Usuarios,
    ValidacionesQr: ValidacionesQr,
  };
}
