import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Comentarios, ComentariosId } from './comentarios.js';
import type { HistorialPuntos, HistorialPuntosId } from './historialPuntos.js';
import type { Likes, LikesId } from './likes.js';
import type { Locales, LocalesId } from './locales.js';
import type { LogsSistema, LogsSistemaId } from './logsSistema.js';
import type { Marcas, MarcasId } from './marcas.js';
import type { NivelesUsuario, NivelesUsuarioId } from './nivelesUsuario.js';
import type { Publicaciones, PublicacionesId } from './publicaciones.js';
import type { RecompensasObtenidas, RecompensasObtenidasId } from './recompensasObtenidas.js';
import type { Seguimientos, SeguimientosId } from './seguimientos.js';
import type { Suscripciones, SuscripcionesId } from './suscripciones.js';
import type { TokensQr, TokensQrId } from './tokensQr.js';
import type { UsuarioObjetivos, UsuarioObjetivosId } from './usuarioObjetivos.js';
import type { UsuarioRoles, UsuarioRolesId } from './usuarioRoles.js';
import type { ValidacionesQr, ValidacionesQrId } from './validacionesQr.js';

export interface UsuariosAttributes {
  id: number;
  email: string;
  passwordHash: string;
  nombre: string;
  nombreUsuario?: string;
  fotoPerfil?: string;
  descripcion?: string;
  telefono?: string;
  fechaNacimiento?: string;
  estado?: string;
  nivelId?: number;
  puntosTotales?: number;
  creadoEn?: Date;
  actualizadoEn?: Date;
}

export type UsuariosPk = "id";
export type UsuariosId = Usuarios[UsuariosPk];
export type UsuariosOptionalAttributes = "id" | "nombreUsuario" | "fotoPerfil" | "descripcion" | "telefono" | "fechaNacimiento" | "estado" | "nivelId" | "puntosTotales" | "creadoEn" | "actualizadoEn";
export type UsuariosCreationAttributes = Optional<UsuariosAttributes, UsuariosOptionalAttributes>;

export class Usuarios extends Model<UsuariosAttributes, UsuariosCreationAttributes> implements UsuariosAttributes {
  declare id: number;
  declare email: string;
  declare passwordHash: string;
  declare nombre: string;
  declare nombreUsuario?: string;
  declare fotoPerfil?: string;
  declare descripcion?: string;
  declare telefono?: string;
  declare fechaNacimiento?: string;
  declare estado?: string;
  declare nivelId?: number;
  declare puntosTotales?: number;
  declare creadoEn?: Date;
  declare actualizadoEn?: Date;

  // Usuarios belongsTo NivelesUsuario via nivelId
  nivel!: NivelesUsuario;
  getNivel!: Sequelize.BelongsToGetAssociationMixin<NivelesUsuario>;
  setNivel!: Sequelize.BelongsToSetAssociationMixin<NivelesUsuario, NivelesUsuarioId>;
  createNivel!: Sequelize.BelongsToCreateAssociationMixin<NivelesUsuario>;
  // Usuarios hasMany Comentarios via autorId
  comentarios!: Comentarios[];
  getComentarios!: Sequelize.HasManyGetAssociationsMixin<Comentarios>;
  setComentarios!: Sequelize.HasManySetAssociationsMixin<Comentarios, ComentariosId>;
  addComentario!: Sequelize.HasManyAddAssociationMixin<Comentarios, ComentariosId>;
  addComentarios!: Sequelize.HasManyAddAssociationsMixin<Comentarios, ComentariosId>;
  createComentario!: Sequelize.HasManyCreateAssociationMixin<Comentarios>;
  removeComentario!: Sequelize.HasManyRemoveAssociationMixin<Comentarios, ComentariosId>;
  removeComentarios!: Sequelize.HasManyRemoveAssociationsMixin<Comentarios, ComentariosId>;
  hasComentario!: Sequelize.HasManyHasAssociationMixin<Comentarios, ComentariosId>;
  hasComentarios!: Sequelize.HasManyHasAssociationsMixin<Comentarios, ComentariosId>;
  countComentarios!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany HistorialPuntos via usuarioId
  historialPuntos!: HistorialPuntos[];
  getHistorialPuntos!: Sequelize.HasManyGetAssociationsMixin<HistorialPuntos>;
  setHistorialPuntos!: Sequelize.HasManySetAssociationsMixin<HistorialPuntos, HistorialPuntosId>;
  addHistorialPunto!: Sequelize.HasManyAddAssociationMixin<HistorialPuntos, HistorialPuntosId>;
  addHistorialPuntos!: Sequelize.HasManyAddAssociationsMixin<HistorialPuntos, HistorialPuntosId>;
  createHistorialPunto!: Sequelize.HasManyCreateAssociationMixin<HistorialPuntos>;
  removeHistorialPunto!: Sequelize.HasManyRemoveAssociationMixin<HistorialPuntos, HistorialPuntosId>;
  removeHistorialPuntos!: Sequelize.HasManyRemoveAssociationsMixin<HistorialPuntos, HistorialPuntosId>;
  hasHistorialPunto!: Sequelize.HasManyHasAssociationMixin<HistorialPuntos, HistorialPuntosId>;
  hasHistorialPuntos!: Sequelize.HasManyHasAssociationsMixin<HistorialPuntos, HistorialPuntosId>;
  countHistorialPuntos!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany Likes via usuarioId
  likes!: Likes[];
  getLikes!: Sequelize.HasManyGetAssociationsMixin<Likes>;
  setLikes!: Sequelize.HasManySetAssociationsMixin<Likes, LikesId>;
  addLike!: Sequelize.HasManyAddAssociationMixin<Likes, LikesId>;
  addLikes!: Sequelize.HasManyAddAssociationsMixin<Likes, LikesId>;
  createLike!: Sequelize.HasManyCreateAssociationMixin<Likes>;
  removeLike!: Sequelize.HasManyRemoveAssociationMixin<Likes, LikesId>;
  removeLikes!: Sequelize.HasManyRemoveAssociationsMixin<Likes, LikesId>;
  hasLike!: Sequelize.HasManyHasAssociationMixin<Likes, LikesId>;
  hasLikes!: Sequelize.HasManyHasAssociationsMixin<Likes, LikesId>;
  countLikes!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany Locales via usuarioId
  locales!: Locales[];
  getLocales!: Sequelize.HasManyGetAssociationsMixin<Locales>;
  setLocales!: Sequelize.HasManySetAssociationsMixin<Locales, LocalesId>;
  addLocale!: Sequelize.HasManyAddAssociationMixin<Locales, LocalesId>;
  addLocales!: Sequelize.HasManyAddAssociationsMixin<Locales, LocalesId>;
  createLocale!: Sequelize.HasManyCreateAssociationMixin<Locales>;
  removeLocale!: Sequelize.HasManyRemoveAssociationMixin<Locales, LocalesId>;
  removeLocales!: Sequelize.HasManyRemoveAssociationsMixin<Locales, LocalesId>;
  hasLocale!: Sequelize.HasManyHasAssociationMixin<Locales, LocalesId>;
  hasLocales!: Sequelize.HasManyHasAssociationsMixin<Locales, LocalesId>;
  countLocales!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany LogsSistema via usuarioId
  logsSistemas!: LogsSistema[];
  getLogsSistemas!: Sequelize.HasManyGetAssociationsMixin<LogsSistema>;
  setLogsSistemas!: Sequelize.HasManySetAssociationsMixin<LogsSistema, LogsSistemaId>;
  addLogsSistema!: Sequelize.HasManyAddAssociationMixin<LogsSistema, LogsSistemaId>;
  addLogsSistemas!: Sequelize.HasManyAddAssociationsMixin<LogsSistema, LogsSistemaId>;
  createLogsSistema!: Sequelize.HasManyCreateAssociationMixin<LogsSistema>;
  removeLogsSistema!: Sequelize.HasManyRemoveAssociationMixin<LogsSistema, LogsSistemaId>;
  removeLogsSistemas!: Sequelize.HasManyRemoveAssociationsMixin<LogsSistema, LogsSistemaId>;
  hasLogsSistema!: Sequelize.HasManyHasAssociationMixin<LogsSistema, LogsSistemaId>;
  hasLogsSistemas!: Sequelize.HasManyHasAssociationsMixin<LogsSistema, LogsSistemaId>;
  countLogsSistemas!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany Marcas via usuarioId
  marcas!: Marcas[];
  getMarcas!: Sequelize.HasManyGetAssociationsMixin<Marcas>;
  setMarcas!: Sequelize.HasManySetAssociationsMixin<Marcas, MarcasId>;
  addMarca!: Sequelize.HasManyAddAssociationMixin<Marcas, MarcasId>;
  addMarcas!: Sequelize.HasManyAddAssociationsMixin<Marcas, MarcasId>;
  createMarca!: Sequelize.HasManyCreateAssociationMixin<Marcas>;
  removeMarca!: Sequelize.HasManyRemoveAssociationMixin<Marcas, MarcasId>;
  removeMarcas!: Sequelize.HasManyRemoveAssociationsMixin<Marcas, MarcasId>;
  hasMarca!: Sequelize.HasManyHasAssociationMixin<Marcas, MarcasId>;
  hasMarcas!: Sequelize.HasManyHasAssociationsMixin<Marcas, MarcasId>;
  countMarcas!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany Publicaciones via autorId
  publicaciones!: Publicaciones[];
  getPublicaciones!: Sequelize.HasManyGetAssociationsMixin<Publicaciones>;
  setPublicaciones!: Sequelize.HasManySetAssociationsMixin<Publicaciones, PublicacionesId>;
  addPublicacione!: Sequelize.HasManyAddAssociationMixin<Publicaciones, PublicacionesId>;
  addPublicaciones!: Sequelize.HasManyAddAssociationsMixin<Publicaciones, PublicacionesId>;
  createPublicacione!: Sequelize.HasManyCreateAssociationMixin<Publicaciones>;
  removePublicacione!: Sequelize.HasManyRemoveAssociationMixin<Publicaciones, PublicacionesId>;
  removePublicaciones!: Sequelize.HasManyRemoveAssociationsMixin<Publicaciones, PublicacionesId>;
  hasPublicacione!: Sequelize.HasManyHasAssociationMixin<Publicaciones, PublicacionesId>;
  hasPublicaciones!: Sequelize.HasManyHasAssociationsMixin<Publicaciones, PublicacionesId>;
  countPublicaciones!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany RecompensasObtenidas via usuarioId
  recompensasObtenidas!: RecompensasObtenidas[];
  getRecompensasObtenidas!: Sequelize.HasManyGetAssociationsMixin<RecompensasObtenidas>;
  setRecompensasObtenidas!: Sequelize.HasManySetAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  addRecompensasObtenida!: Sequelize.HasManyAddAssociationMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  addRecompensasObtenidas!: Sequelize.HasManyAddAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  createRecompensasObtenida!: Sequelize.HasManyCreateAssociationMixin<RecompensasObtenidas>;
  removeRecompensasObtenida!: Sequelize.HasManyRemoveAssociationMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  removeRecompensasObtenidas!: Sequelize.HasManyRemoveAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  hasRecompensasObtenida!: Sequelize.HasManyHasAssociationMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  hasRecompensasObtenidas!: Sequelize.HasManyHasAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  countRecompensasObtenidas!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany Seguimientos via seguidoId
  seguimientos!: Seguimientos[];
  getSeguimientos!: Sequelize.HasManyGetAssociationsMixin<Seguimientos>;
  setSeguimientos!: Sequelize.HasManySetAssociationsMixin<Seguimientos, SeguimientosId>;
  addSeguimiento!: Sequelize.HasManyAddAssociationMixin<Seguimientos, SeguimientosId>;
  addSeguimientos!: Sequelize.HasManyAddAssociationsMixin<Seguimientos, SeguimientosId>;
  createSeguimiento!: Sequelize.HasManyCreateAssociationMixin<Seguimientos>;
  removeSeguimiento!: Sequelize.HasManyRemoveAssociationMixin<Seguimientos, SeguimientosId>;
  removeSeguimientos!: Sequelize.HasManyRemoveAssociationsMixin<Seguimientos, SeguimientosId>;
  hasSeguimiento!: Sequelize.HasManyHasAssociationMixin<Seguimientos, SeguimientosId>;
  hasSeguimientos!: Sequelize.HasManyHasAssociationsMixin<Seguimientos, SeguimientosId>;
  countSeguimientos!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany Seguimientos via seguidorId
  seguidorSeguimientos!: Seguimientos[];
  getSeguidorSeguimientos!: Sequelize.HasManyGetAssociationsMixin<Seguimientos>;
  setSeguidorSeguimientos!: Sequelize.HasManySetAssociationsMixin<Seguimientos, SeguimientosId>;
  addSeguidorSeguimiento!: Sequelize.HasManyAddAssociationMixin<Seguimientos, SeguimientosId>;
  addSeguidorSeguimientos!: Sequelize.HasManyAddAssociationsMixin<Seguimientos, SeguimientosId>;
  createSeguidorSeguimiento!: Sequelize.HasManyCreateAssociationMixin<Seguimientos>;
  removeSeguidorSeguimiento!: Sequelize.HasManyRemoveAssociationMixin<Seguimientos, SeguimientosId>;
  removeSeguidorSeguimientos!: Sequelize.HasManyRemoveAssociationsMixin<Seguimientos, SeguimientosId>;
  hasSeguidorSeguimiento!: Sequelize.HasManyHasAssociationMixin<Seguimientos, SeguimientosId>;
  hasSeguidorSeguimientos!: Sequelize.HasManyHasAssociationsMixin<Seguimientos, SeguimientosId>;
  countSeguidorSeguimientos!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany Suscripciones via usuarioId
  suscripciones!: Suscripciones[];
  getSuscripciones!: Sequelize.HasManyGetAssociationsMixin<Suscripciones>;
  setSuscripciones!: Sequelize.HasManySetAssociationsMixin<Suscripciones, SuscripcionesId>;
  addSuscripcione!: Sequelize.HasManyAddAssociationMixin<Suscripciones, SuscripcionesId>;
  addSuscripciones!: Sequelize.HasManyAddAssociationsMixin<Suscripciones, SuscripcionesId>;
  createSuscripcione!: Sequelize.HasManyCreateAssociationMixin<Suscripciones>;
  removeSuscripcione!: Sequelize.HasManyRemoveAssociationMixin<Suscripciones, SuscripcionesId>;
  removeSuscripciones!: Sequelize.HasManyRemoveAssociationsMixin<Suscripciones, SuscripcionesId>;
  hasSuscripcione!: Sequelize.HasManyHasAssociationMixin<Suscripciones, SuscripcionesId>;
  hasSuscripciones!: Sequelize.HasManyHasAssociationsMixin<Suscripciones, SuscripcionesId>;
  countSuscripciones!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany TokensQr via usuarioId
  tokensQrs!: TokensQr[];
  getTokensQrs!: Sequelize.HasManyGetAssociationsMixin<TokensQr>;
  setTokensQrs!: Sequelize.HasManySetAssociationsMixin<TokensQr, TokensQrId>;
  addTokensQr!: Sequelize.HasManyAddAssociationMixin<TokensQr, TokensQrId>;
  addTokensQrs!: Sequelize.HasManyAddAssociationsMixin<TokensQr, TokensQrId>;
  createTokensQr!: Sequelize.HasManyCreateAssociationMixin<TokensQr>;
  removeTokensQr!: Sequelize.HasManyRemoveAssociationMixin<TokensQr, TokensQrId>;
  removeTokensQrs!: Sequelize.HasManyRemoveAssociationsMixin<TokensQr, TokensQrId>;
  hasTokensQr!: Sequelize.HasManyHasAssociationMixin<TokensQr, TokensQrId>;
  hasTokensQrs!: Sequelize.HasManyHasAssociationsMixin<TokensQr, TokensQrId>;
  countTokensQrs!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany UsuarioObjetivos via usuarioId
  usuarioObjetivos!: UsuarioObjetivos[];
  getUsuarioObjetivos!: Sequelize.HasManyGetAssociationsMixin<UsuarioObjetivos>;
  setUsuarioObjetivos!: Sequelize.HasManySetAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  addUsuarioObjetivo!: Sequelize.HasManyAddAssociationMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  addUsuarioObjetivos!: Sequelize.HasManyAddAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  createUsuarioObjetivo!: Sequelize.HasManyCreateAssociationMixin<UsuarioObjetivos>;
  removeUsuarioObjetivo!: Sequelize.HasManyRemoveAssociationMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  removeUsuarioObjetivos!: Sequelize.HasManyRemoveAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  hasUsuarioObjetivo!: Sequelize.HasManyHasAssociationMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  hasUsuarioObjetivos!: Sequelize.HasManyHasAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  countUsuarioObjetivos!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany UsuarioRoles via aprobadoPor
  usuarioRoles!: UsuarioRoles[];
  getUsuarioRoles!: Sequelize.HasManyGetAssociationsMixin<UsuarioRoles>;
  setUsuarioRoles!: Sequelize.HasManySetAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  addUsuarioRole!: Sequelize.HasManyAddAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  addUsuarioRoles!: Sequelize.HasManyAddAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  createUsuarioRole!: Sequelize.HasManyCreateAssociationMixin<UsuarioRoles>;
  removeUsuarioRole!: Sequelize.HasManyRemoveAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  removeUsuarioRoles!: Sequelize.HasManyRemoveAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  hasUsuarioRole!: Sequelize.HasManyHasAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  hasUsuarioRoles!: Sequelize.HasManyHasAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  countUsuarioRoles!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany UsuarioRoles via usuarioId
  usuarioUsuarioRoles!: UsuarioRoles[];
  getUsuarioUsuarioRoles!: Sequelize.HasManyGetAssociationsMixin<UsuarioRoles>;
  setUsuarioUsuarioRoles!: Sequelize.HasManySetAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  addUsuarioUsuarioRole!: Sequelize.HasManyAddAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  addUsuarioUsuarioRoles!: Sequelize.HasManyAddAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  createUsuarioUsuarioRole!: Sequelize.HasManyCreateAssociationMixin<UsuarioRoles>;
  removeUsuarioUsuarioRole!: Sequelize.HasManyRemoveAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  removeUsuarioUsuarioRoles!: Sequelize.HasManyRemoveAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  hasUsuarioUsuarioRole!: Sequelize.HasManyHasAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  hasUsuarioUsuarioRoles!: Sequelize.HasManyHasAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  countUsuarioUsuarioRoles!: Sequelize.HasManyCountAssociationsMixin;
  // Usuarios hasMany ValidacionesQr via validadoPor
  validacionesQrs!: ValidacionesQr[];
  getValidacionesQrs!: Sequelize.HasManyGetAssociationsMixin<ValidacionesQr>;
  setValidacionesQrs!: Sequelize.HasManySetAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  addValidacionesQr!: Sequelize.HasManyAddAssociationMixin<ValidacionesQr, ValidacionesQrId>;
  addValidacionesQrs!: Sequelize.HasManyAddAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  createValidacionesQr!: Sequelize.HasManyCreateAssociationMixin<ValidacionesQr>;
  removeValidacionesQr!: Sequelize.HasManyRemoveAssociationMixin<ValidacionesQr, ValidacionesQrId>;
  removeValidacionesQrs!: Sequelize.HasManyRemoveAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  hasValidacionesQr!: Sequelize.HasManyHasAssociationMixin<ValidacionesQr, ValidacionesQrId>;
  hasValidacionesQrs!: Sequelize.HasManyHasAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  countValidacionesQrs!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Usuarios {
    return Usuarios.init({
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
    passwordHash: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'password_hash'
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nombreUsuario: {
      type: DataTypes.STRING(50),
      allowNull: true,
      unique: "usuarios_nombre_usuario_key",
      field: 'nombre_usuario'
    },
    fotoPerfil: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'foto_perfil'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    fechaNacimiento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      field: 'fecha_nacimiento'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
    },
    nivelId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'niveles_usuario',
        key: 'id'
      },
      field: 'nivel_id'
    },
    puntosTotales: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'puntos_totales'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    },
    actualizadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'actualizado_en'
    }
  }, {
    sequelize,
    tableName: 'usuarios',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_usuarios_email",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "idx_usuarios_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "idx_usuarios_nombre_usuario",
        fields: [
          { name: "nombre_usuario" },
        ]
      },
      {
        name: "usuarios_email_key",
        unique: true,
        fields: [
          { name: "email" },
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
    ]
  });
  }
}
