import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Comentarios, ComentariosId } from './comentarios.js';
import type { Publicaciones, PublicacionesId } from './publicaciones.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface LikesAttributes {
  id: number;
  usuarioId: number;
  publicacionId?: number;
  comentarioId?: number;
  creadoEn?: Date;
}

export type LikesPk = "id";
export type LikesId = Likes[LikesPk];
export type LikesOptionalAttributes = "id" | "publicacionId" | "comentarioId" | "creadoEn";
export type LikesCreationAttributes = Optional<LikesAttributes, LikesOptionalAttributes>;

export class Likes extends Model<LikesAttributes, LikesCreationAttributes> implements LikesAttributes {
  id!: number;
  usuarioId!: number;
  publicacionId?: number;
  comentarioId?: number;
  creadoEn?: Date;

  // Likes belongsTo Comentarios via comentarioId
  comentario!: Comentarios;
  getComentario!: Sequelize.BelongsToGetAssociationMixin<Comentarios>;
  setComentario!: Sequelize.BelongsToSetAssociationMixin<Comentarios, ComentariosId>;
  createComentario!: Sequelize.BelongsToCreateAssociationMixin<Comentarios>;
  // Likes belongsTo Publicaciones via publicacionId
  publicacion!: Publicaciones;
  getPublicacion!: Sequelize.BelongsToGetAssociationMixin<Publicaciones>;
  setPublicacion!: Sequelize.BelongsToSetAssociationMixin<Publicaciones, PublicacionesId>;
  createPublicacion!: Sequelize.BelongsToCreateAssociationMixin<Publicaciones>;
  // Likes belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Likes {
    return Likes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      unique: "likes_usuario_id_publicacion_id_key",
      field: 'usuario_id'
    },
    publicacionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'publicaciones',
        key: 'id'
      },
      unique: "likes_usuario_id_publicacion_id_key",
      field: 'publicacion_id'
    },
    comentarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comentarios',
        key: 'id'
      },
      unique: "likes_usuario_id_comentario_id_key",
      field: 'comentario_id'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    }
  }, {
    sequelize,
    tableName: 'likes',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "likes_usuario_id_comentario_id_key",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "comentario_id" },
        ]
      },
      {
        name: "likes_usuario_id_publicacion_id_key",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "publicacion_id" },
        ]
      },
    ]
  });
  }
}
