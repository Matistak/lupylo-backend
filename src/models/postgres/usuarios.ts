import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { comentarios, comentariosId } from './comentarios.js';
import type { historial_puntos, historial_puntosId } from './historial_puntos.js';
import type { likes, likesId } from './likes.js';
import type { locales, localesId } from './locales.js';
import type { logs_sistema, logs_sistemaId } from './logs_sistema.js';
import type { marcas, marcasId } from './marcas.js';
import type { niveles_usuario, niveles_usuarioId } from './niveles_usuario.js';
import type { publicaciones, publicacionesId } from './publicaciones.js';
import type { recompensas_obtenidas, recompensas_obtenidasId } from './recompensas_obtenidas.js';
import type { seguimientos, seguimientosId } from './seguimientos.js';
import type { solicitudes, solicitudesId } from './solicitudes.js';
import type { suscripciones, suscripcionesId } from './suscripciones.js';
import type { tokens_qr, tokens_qrId } from './tokens_qr.js';
import type { usuario_objetivos, usuario_objetivosId } from './usuario_objetivos.js';
import type { usuario_roles, usuario_rolesId } from './usuario_roles.js';
import type { validaciones_qr, validaciones_qrId } from './validaciones_qr.js';

export interface usuariosAttributes {
  id: number;
  email: string;
  password_hash: string;
  nombre: string;
  nombre_usuario?: string;
  foto_perfil?: string;
  descripcion?: string;
  telefono?: string;
  fecha_nacimiento?: string;
  estado?: string;
  nivel_id?: number;
  puntos_totales?: number;
  creado_en?: Date;
  actualizado_en?: Date;
  solicitud_id?: number;
  puntos?: number;
}

export type usuariosPk = "id";
export type usuariosId = usuarios[usuariosPk];
export type usuariosOptionalAttributes = "id" | "nombre_usuario" | "foto_perfil" | "descripcion" | "telefono" | "fecha_nacimiento" | "estado" | "nivel_id" | "puntos_totales" | "creado_en" | "actualizado_en" | "solicitud_id" | "puntos";
export type usuariosCreationAttributes = Optional<usuariosAttributes, usuariosOptionalAttributes>;

export class usuarios extends Model<usuariosAttributes, usuariosCreationAttributes> implements usuariosAttributes {
  id!: number;
  email!: string;
  password_hash!: string;
  nombre!: string;
  nombre_usuario?: string;
  foto_perfil?: string;
  descripcion?: string;
  telefono?: string;
  fecha_nacimiento?: string;
  estado?: string;
  nivel_id?: number;
  puntos_totales?: number;
  creado_en?: Date;
  actualizado_en?: Date;
  solicitud_id?: number;
  puntos?: number;

  // usuarios belongsTo niveles_usuario via nivel_id
  nivel!: niveles_usuario;
  getNivel!: Sequelize.BelongsToGetAssociationMixin<niveles_usuario>;
  setNivel!: Sequelize.BelongsToSetAssociationMixin<niveles_usuario, niveles_usuarioId>;
  createNivel!: Sequelize.BelongsToCreateAssociationMixin<niveles_usuario>;
  // usuarios belongsTo solicitudes via solicitud_id
  solicitud!: solicitudes;
  getSolicitud!: Sequelize.BelongsToGetAssociationMixin<solicitudes>;
  setSolicitud!: Sequelize.BelongsToSetAssociationMixin<solicitudes, solicitudesId>;
  createSolicitud!: Sequelize.BelongsToCreateAssociationMixin<solicitudes>;
  // usuarios hasMany comentarios via autor_id
  comentarios!: comentarios[];
  getComentarios!: Sequelize.HasManyGetAssociationsMixin<comentarios>;
  setComentarios!: Sequelize.HasManySetAssociationsMixin<comentarios, comentariosId>;
  addComentario!: Sequelize.HasManyAddAssociationMixin<comentarios, comentariosId>;
  addComentarios!: Sequelize.HasManyAddAssociationsMixin<comentarios, comentariosId>;
  createComentario!: Sequelize.HasManyCreateAssociationMixin<comentarios>;
  removeComentario!: Sequelize.HasManyRemoveAssociationMixin<comentarios, comentariosId>;
  removeComentarios!: Sequelize.HasManyRemoveAssociationsMixin<comentarios, comentariosId>;
  hasComentario!: Sequelize.HasManyHasAssociationMixin<comentarios, comentariosId>;
  hasComentarios!: Sequelize.HasManyHasAssociationsMixin<comentarios, comentariosId>;
  countComentarios!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany historial_puntos via usuario_id
  historial_puntos!: historial_puntos[];
  getHistorial_puntos!: Sequelize.HasManyGetAssociationsMixin<historial_puntos>;
  setHistorial_puntos!: Sequelize.HasManySetAssociationsMixin<historial_puntos, historial_puntosId>;
  addHistorial_punto!: Sequelize.HasManyAddAssociationMixin<historial_puntos, historial_puntosId>;
  addHistorial_puntos!: Sequelize.HasManyAddAssociationsMixin<historial_puntos, historial_puntosId>;
  createHistorial_punto!: Sequelize.HasManyCreateAssociationMixin<historial_puntos>;
  removeHistorial_punto!: Sequelize.HasManyRemoveAssociationMixin<historial_puntos, historial_puntosId>;
  removeHistorial_puntos!: Sequelize.HasManyRemoveAssociationsMixin<historial_puntos, historial_puntosId>;
  hasHistorial_punto!: Sequelize.HasManyHasAssociationMixin<historial_puntos, historial_puntosId>;
  hasHistorial_puntos!: Sequelize.HasManyHasAssociationsMixin<historial_puntos, historial_puntosId>;
  countHistorial_puntos!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany likes via usuario_id
  likes!: likes[];
  getLikes!: Sequelize.HasManyGetAssociationsMixin<likes>;
  setLikes!: Sequelize.HasManySetAssociationsMixin<likes, likesId>;
  addLike!: Sequelize.HasManyAddAssociationMixin<likes, likesId>;
  addLikes!: Sequelize.HasManyAddAssociationsMixin<likes, likesId>;
  createLike!: Sequelize.HasManyCreateAssociationMixin<likes>;
  removeLike!: Sequelize.HasManyRemoveAssociationMixin<likes, likesId>;
  removeLikes!: Sequelize.HasManyRemoveAssociationsMixin<likes, likesId>;
  hasLike!: Sequelize.HasManyHasAssociationMixin<likes, likesId>;
  hasLikes!: Sequelize.HasManyHasAssociationsMixin<likes, likesId>;
  countLikes!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany locales via usuario_id
  locales!: locales[];
  getLocales!: Sequelize.HasManyGetAssociationsMixin<locales>;
  setLocales!: Sequelize.HasManySetAssociationsMixin<locales, localesId>;
  addLocale!: Sequelize.HasManyAddAssociationMixin<locales, localesId>;
  addLocales!: Sequelize.HasManyAddAssociationsMixin<locales, localesId>;
  createLocale!: Sequelize.HasManyCreateAssociationMixin<locales>;
  removeLocale!: Sequelize.HasManyRemoveAssociationMixin<locales, localesId>;
  removeLocales!: Sequelize.HasManyRemoveAssociationsMixin<locales, localesId>;
  hasLocale!: Sequelize.HasManyHasAssociationMixin<locales, localesId>;
  hasLocales!: Sequelize.HasManyHasAssociationsMixin<locales, localesId>;
  countLocales!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany logs_sistema via usuario_id
  logs_sistemas!: logs_sistema[];
  getLogs_sistemas!: Sequelize.HasManyGetAssociationsMixin<logs_sistema>;
  setLogs_sistemas!: Sequelize.HasManySetAssociationsMixin<logs_sistema, logs_sistemaId>;
  addLogs_sistema!: Sequelize.HasManyAddAssociationMixin<logs_sistema, logs_sistemaId>;
  addLogs_sistemas!: Sequelize.HasManyAddAssociationsMixin<logs_sistema, logs_sistemaId>;
  createLogs_sistema!: Sequelize.HasManyCreateAssociationMixin<logs_sistema>;
  removeLogs_sistema!: Sequelize.HasManyRemoveAssociationMixin<logs_sistema, logs_sistemaId>;
  removeLogs_sistemas!: Sequelize.HasManyRemoveAssociationsMixin<logs_sistema, logs_sistemaId>;
  hasLogs_sistema!: Sequelize.HasManyHasAssociationMixin<logs_sistema, logs_sistemaId>;
  hasLogs_sistemas!: Sequelize.HasManyHasAssociationsMixin<logs_sistema, logs_sistemaId>;
  countLogs_sistemas!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany marcas via usuario_id
  marcas!: marcas[];
  getMarcas!: Sequelize.HasManyGetAssociationsMixin<marcas>;
  setMarcas!: Sequelize.HasManySetAssociationsMixin<marcas, marcasId>;
  addMarca!: Sequelize.HasManyAddAssociationMixin<marcas, marcasId>;
  addMarcas!: Sequelize.HasManyAddAssociationsMixin<marcas, marcasId>;
  createMarca!: Sequelize.HasManyCreateAssociationMixin<marcas>;
  removeMarca!: Sequelize.HasManyRemoveAssociationMixin<marcas, marcasId>;
  removeMarcas!: Sequelize.HasManyRemoveAssociationsMixin<marcas, marcasId>;
  hasMarca!: Sequelize.HasManyHasAssociationMixin<marcas, marcasId>;
  hasMarcas!: Sequelize.HasManyHasAssociationsMixin<marcas, marcasId>;
  countMarcas!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany publicaciones via autor_id
  publicaciones!: publicaciones[];
  getPublicaciones!: Sequelize.HasManyGetAssociationsMixin<publicaciones>;
  setPublicaciones!: Sequelize.HasManySetAssociationsMixin<publicaciones, publicacionesId>;
  addPublicacione!: Sequelize.HasManyAddAssociationMixin<publicaciones, publicacionesId>;
  addPublicaciones!: Sequelize.HasManyAddAssociationsMixin<publicaciones, publicacionesId>;
  createPublicacione!: Sequelize.HasManyCreateAssociationMixin<publicaciones>;
  removePublicacione!: Sequelize.HasManyRemoveAssociationMixin<publicaciones, publicacionesId>;
  removePublicaciones!: Sequelize.HasManyRemoveAssociationsMixin<publicaciones, publicacionesId>;
  hasPublicacione!: Sequelize.HasManyHasAssociationMixin<publicaciones, publicacionesId>;
  hasPublicaciones!: Sequelize.HasManyHasAssociationsMixin<publicaciones, publicacionesId>;
  countPublicaciones!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany recompensas_obtenidas via usuario_id
  recompensas_obtenidas!: recompensas_obtenidas[];
  getRecompensas_obtenidas!: Sequelize.HasManyGetAssociationsMixin<recompensas_obtenidas>;
  setRecompensas_obtenidas!: Sequelize.HasManySetAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  addRecompensas_obtenida!: Sequelize.HasManyAddAssociationMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  addRecompensas_obtenidas!: Sequelize.HasManyAddAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  createRecompensas_obtenida!: Sequelize.HasManyCreateAssociationMixin<recompensas_obtenidas>;
  removeRecompensas_obtenida!: Sequelize.HasManyRemoveAssociationMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  removeRecompensas_obtenidas!: Sequelize.HasManyRemoveAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  hasRecompensas_obtenida!: Sequelize.HasManyHasAssociationMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  hasRecompensas_obtenidas!: Sequelize.HasManyHasAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  countRecompensas_obtenidas!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany seguimientos via seguido_id
  seguimientos!: seguimientos[];
  getSeguimientos!: Sequelize.HasManyGetAssociationsMixin<seguimientos>;
  setSeguimientos!: Sequelize.HasManySetAssociationsMixin<seguimientos, seguimientosId>;
  addSeguimiento!: Sequelize.HasManyAddAssociationMixin<seguimientos, seguimientosId>;
  addSeguimientos!: Sequelize.HasManyAddAssociationsMixin<seguimientos, seguimientosId>;
  createSeguimiento!: Sequelize.HasManyCreateAssociationMixin<seguimientos>;
  removeSeguimiento!: Sequelize.HasManyRemoveAssociationMixin<seguimientos, seguimientosId>;
  removeSeguimientos!: Sequelize.HasManyRemoveAssociationsMixin<seguimientos, seguimientosId>;
  hasSeguimiento!: Sequelize.HasManyHasAssociationMixin<seguimientos, seguimientosId>;
  hasSeguimientos!: Sequelize.HasManyHasAssociationsMixin<seguimientos, seguimientosId>;
  countSeguimientos!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany seguimientos via seguidor_id
  seguidor_seguimientos!: seguimientos[];
  getSeguidor_seguimientos!: Sequelize.HasManyGetAssociationsMixin<seguimientos>;
  setSeguidor_seguimientos!: Sequelize.HasManySetAssociationsMixin<seguimientos, seguimientosId>;
  addSeguidor_seguimiento!: Sequelize.HasManyAddAssociationMixin<seguimientos, seguimientosId>;
  addSeguidor_seguimientos!: Sequelize.HasManyAddAssociationsMixin<seguimientos, seguimientosId>;
  createSeguidor_seguimiento!: Sequelize.HasManyCreateAssociationMixin<seguimientos>;
  removeSeguidor_seguimiento!: Sequelize.HasManyRemoveAssociationMixin<seguimientos, seguimientosId>;
  removeSeguidor_seguimientos!: Sequelize.HasManyRemoveAssociationsMixin<seguimientos, seguimientosId>;
  hasSeguidor_seguimiento!: Sequelize.HasManyHasAssociationMixin<seguimientos, seguimientosId>;
  hasSeguidor_seguimientos!: Sequelize.HasManyHasAssociationsMixin<seguimientos, seguimientosId>;
  countSeguidor_seguimientos!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany suscripciones via usuario_id
  suscripciones!: suscripciones[];
  getSuscripciones!: Sequelize.HasManyGetAssociationsMixin<suscripciones>;
  setSuscripciones!: Sequelize.HasManySetAssociationsMixin<suscripciones, suscripcionesId>;
  addSuscripcione!: Sequelize.HasManyAddAssociationMixin<suscripciones, suscripcionesId>;
  addSuscripciones!: Sequelize.HasManyAddAssociationsMixin<suscripciones, suscripcionesId>;
  createSuscripcione!: Sequelize.HasManyCreateAssociationMixin<suscripciones>;
  removeSuscripcione!: Sequelize.HasManyRemoveAssociationMixin<suscripciones, suscripcionesId>;
  removeSuscripciones!: Sequelize.HasManyRemoveAssociationsMixin<suscripciones, suscripcionesId>;
  hasSuscripcione!: Sequelize.HasManyHasAssociationMixin<suscripciones, suscripcionesId>;
  hasSuscripciones!: Sequelize.HasManyHasAssociationsMixin<suscripciones, suscripcionesId>;
  countSuscripciones!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany tokens_qr via usuario_id
  tokens_qrs!: tokens_qr[];
  getTokens_qrs!: Sequelize.HasManyGetAssociationsMixin<tokens_qr>;
  setTokens_qrs!: Sequelize.HasManySetAssociationsMixin<tokens_qr, tokens_qrId>;
  addTokens_qr!: Sequelize.HasManyAddAssociationMixin<tokens_qr, tokens_qrId>;
  addTokens_qrs!: Sequelize.HasManyAddAssociationsMixin<tokens_qr, tokens_qrId>;
  createTokens_qr!: Sequelize.HasManyCreateAssociationMixin<tokens_qr>;
  removeTokens_qr!: Sequelize.HasManyRemoveAssociationMixin<tokens_qr, tokens_qrId>;
  removeTokens_qrs!: Sequelize.HasManyRemoveAssociationsMixin<tokens_qr, tokens_qrId>;
  hasTokens_qr!: Sequelize.HasManyHasAssociationMixin<tokens_qr, tokens_qrId>;
  hasTokens_qrs!: Sequelize.HasManyHasAssociationsMixin<tokens_qr, tokens_qrId>;
  countTokens_qrs!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany usuario_objetivos via usuario_id
  usuario_objetivos!: usuario_objetivos[];
  getUsuario_objetivos!: Sequelize.HasManyGetAssociationsMixin<usuario_objetivos>;
  setUsuario_objetivos!: Sequelize.HasManySetAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  addUsuario_objetivo!: Sequelize.HasManyAddAssociationMixin<usuario_objetivos, usuario_objetivosId>;
  addUsuario_objetivos!: Sequelize.HasManyAddAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  createUsuario_objetivo!: Sequelize.HasManyCreateAssociationMixin<usuario_objetivos>;
  removeUsuario_objetivo!: Sequelize.HasManyRemoveAssociationMixin<usuario_objetivos, usuario_objetivosId>;
  removeUsuario_objetivos!: Sequelize.HasManyRemoveAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  hasUsuario_objetivo!: Sequelize.HasManyHasAssociationMixin<usuario_objetivos, usuario_objetivosId>;
  hasUsuario_objetivos!: Sequelize.HasManyHasAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  countUsuario_objetivos!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany usuario_roles via usuario_id
  usuario_roles!: usuario_roles[];
  getUsuario_roles!: Sequelize.HasManyGetAssociationsMixin<usuario_roles>;
  setUsuario_roles!: Sequelize.HasManySetAssociationsMixin<usuario_roles, usuario_rolesId>;
  addUsuario_role!: Sequelize.HasManyAddAssociationMixin<usuario_roles, usuario_rolesId>;
  addUsuario_roles!: Sequelize.HasManyAddAssociationsMixin<usuario_roles, usuario_rolesId>;
  createUsuario_role!: Sequelize.HasManyCreateAssociationMixin<usuario_roles>;
  removeUsuario_role!: Sequelize.HasManyRemoveAssociationMixin<usuario_roles, usuario_rolesId>;
  removeUsuario_roles!: Sequelize.HasManyRemoveAssociationsMixin<usuario_roles, usuario_rolesId>;
  hasUsuario_role!: Sequelize.HasManyHasAssociationMixin<usuario_roles, usuario_rolesId>;
  hasUsuario_roles!: Sequelize.HasManyHasAssociationsMixin<usuario_roles, usuario_rolesId>;
  countUsuario_roles!: Sequelize.HasManyCountAssociationsMixin;
  // usuarios hasMany validaciones_qr via validado_por
  validaciones_qrs!: validaciones_qr[];
  getValidaciones_qrs!: Sequelize.HasManyGetAssociationsMixin<validaciones_qr>;
  setValidaciones_qrs!: Sequelize.HasManySetAssociationsMixin<validaciones_qr, validaciones_qrId>;
  addValidaciones_qr!: Sequelize.HasManyAddAssociationMixin<validaciones_qr, validaciones_qrId>;
  addValidaciones_qrs!: Sequelize.HasManyAddAssociationsMixin<validaciones_qr, validaciones_qrId>;
  createValidaciones_qr!: Sequelize.HasManyCreateAssociationMixin<validaciones_qr>;
  removeValidaciones_qr!: Sequelize.HasManyRemoveAssociationMixin<validaciones_qr, validaciones_qrId>;
  removeValidaciones_qrs!: Sequelize.HasManyRemoveAssociationsMixin<validaciones_qr, validaciones_qrId>;
  hasValidaciones_qr!: Sequelize.HasManyHasAssociationMixin<validaciones_qr, validaciones_qrId>;
  hasValidaciones_qrs!: Sequelize.HasManyHasAssociationsMixin<validaciones_qr, validaciones_qrId>;
  countValidaciones_qrs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof usuarios {
    return usuarios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "usuarios_email_key"
    },
    password_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nombre_usuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "usuarios_nombre_usuario_key"
    },
    foto_perfil: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
    },
    nivel_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'niveles_usuario',
        key: 'id'
      }
    },
    puntos_totales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    actualizado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    solicitud_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'solicitudes',
        key: 'id'
      }
    },
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "usuarios_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "usuarios_idx_usuarios_email",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "usuarios_idx_usuarios_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "usuarios_idx_usuarios_nombre_usuario",
        fields: [
          { name: "nombre_usuario" },
        ]
      },
      {
        name: "usuarios_nombre_usuario_key",
        unique: true,
        fields: [
          { name: "nombre_usuario" },
        ]
      },
      {
        name: "usuarios_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuarios_usuarios_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "usuarios_usuarios_nombre_usuario_key",
        unique: true,
        fields: [
          { name: "nombre_usuario" },
        ]
      },
    ]
  });
  }
}
