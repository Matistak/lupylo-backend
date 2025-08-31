import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Likes, LikesCreationAttributes, LikesId } from './likes.js';
import type { Publicaciones, PublicacionesId } from './publicaciones.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface ComentariosAttributes {
  id: number;
  publicacionId: number;
  autorId: number;
  contenido: string;
  comentarioPadreId?: number;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;
}

export type ComentariosPk = "id";
export type ComentariosId = Comentarios[ComentariosPk];
export type ComentariosOptionalAttributes = "id" | "comentarioPadreId" | "estado" | "creadoEn" | "actualizadoEn";
export type ComentariosCreationAttributes = Optional<ComentariosAttributes, ComentariosOptionalAttributes>;

export class Comentarios extends Model<ComentariosAttributes, ComentariosCreationAttributes> implements ComentariosAttributes {
  id!: number;
  publicacionId!: number;
  autorId!: number;
  contenido!: string;
  comentarioPadreId?: number;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;

  // Comentarios belongsTo Comentarios via comentarioPadreId
  comentarioPadre!: Comentarios;
  getComentarioPadre!: Sequelize.BelongsToGetAssociationMixin<Comentarios>;
  setComentarioPadre!: Sequelize.BelongsToSetAssociationMixin<Comentarios, ComentariosId>;
  createComentarioPadre!: Sequelize.BelongsToCreateAssociationMixin<Comentarios>;
  // Comentarios hasOne Likes via comentarioId
  like!: Likes;
  getLike!: Sequelize.HasOneGetAssociationMixin<Likes>;
  setLike!: Sequelize.HasOneSetAssociationMixin<Likes, LikesId>;
  createLike!: Sequelize.HasOneCreateAssociationMixin<Likes>;
  // Comentarios belongsTo Publicaciones via publicacionId
  publicacion!: Publicaciones;
  getPublicacion!: Sequelize.BelongsToGetAssociationMixin<Publicaciones>;
  setPublicacion!: Sequelize.BelongsToSetAssociationMixin<Publicaciones, PublicacionesId>;
  createPublicacion!: Sequelize.BelongsToCreateAssociationMixin<Publicaciones>;
  // Comentarios belongsTo Usuarios via autorId
  autor!: Usuarios;
  getAutor!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setAutor!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createAutor!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Comentarios {
    return Comentarios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicaciones',
        key: 'id'
      },
      field: 'publicacion_id'
    },
    autorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      field: 'autor_id'
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comentarioPadreId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comentarios',
        key: 'id'
      },
      field: 'comentario_padre_id'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
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
    tableName: 'comentarios',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "comentarios_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
