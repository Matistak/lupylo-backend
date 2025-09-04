import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { comentarios, comentariosId } from './comentarios';
import type { publicaciones, publicacionesId } from './publicaciones';
import type { usuarios, usuariosId } from './usuarios';

export interface likesAttributes {
  id: number;
  usuario_id: number;
  publicacion_id?: number;
  comentario_id?: number;
  creado_en?: Date;
}

export type likesPk = "id";
export type likesId = likes[likesPk];
export type likesOptionalAttributes = "id" | "publicacion_id" | "comentario_id" | "creado_en";
export type likesCreationAttributes = Optional<likesAttributes, likesOptionalAttributes>;

export class likes extends Model<likesAttributes, likesCreationAttributes> implements likesAttributes {
  id!: number;
  usuario_id!: number;
  publicacion_id?: number;
  comentario_id?: number;
  creado_en?: Date;

  // likes belongsTo comentarios via comentario_id
  comentario!: comentarios;
  getComentario!: Sequelize.BelongsToGetAssociationMixin<comentarios>;
  setComentario!: Sequelize.BelongsToSetAssociationMixin<comentarios, comentariosId>;
  createComentario!: Sequelize.BelongsToCreateAssociationMixin<comentarios>;
  // likes belongsTo publicaciones via publicacion_id
  publicacion!: publicaciones;
  getPublicacion!: Sequelize.BelongsToGetAssociationMixin<publicaciones>;
  setPublicacion!: Sequelize.BelongsToSetAssociationMixin<publicaciones, publicacionesId>;
  createPublicacion!: Sequelize.BelongsToCreateAssociationMixin<publicaciones>;
  // likes belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof likes {
    return likes.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    publicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'publicaciones',
        key: 'id'
      }
    },
    comentario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comentarios',
        key: 'id'
      }
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'likes',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "likes_likes_usuario_id_comentario_id_key",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "comentario_id" },
        ]
      },
      {
        name: "likes_likes_usuario_id_publicacion_id_key",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "publicacion_id" },
        ]
      },
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
