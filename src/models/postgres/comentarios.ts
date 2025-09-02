import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { likes, likesId } from './likes.js';
import type { publicaciones, publicacionesId } from './publicaciones.js';
import type { usuarios, usuariosId } from './usuarios.js';

export interface comentariosAttributes {
  id: number;
  publicacion_id: number;
  autor_id: number;
  contenido: string;
  comentario_padre_id?: number; 
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;
}

export type comentariosPk = "id";
export type comentariosId = comentarios[comentariosPk];
export type comentariosOptionalAttributes = "id" | "comentario_padre_id" | "estado" | "creado_en" | "actualizado_en";
export type comentariosCreationAttributes = Optional<comentariosAttributes, comentariosOptionalAttributes>;

export class comentarios extends Model<comentariosAttributes, comentariosCreationAttributes> implements comentariosAttributes {
  id!: number;
  publicacion_id!: number;
  autor_id!: number;
  contenido!: string;
  comentario_padre_id?: number;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;

  // comentarios belongsTo comentarios via comentario_padre_id
  comentario_padre!: comentarios;
  getComentario_padre!: Sequelize.BelongsToGetAssociationMixin<comentarios>;
  setComentario_padre!: Sequelize.BelongsToSetAssociationMixin<comentarios, comentariosId>;
  createComentario_padre!: Sequelize.BelongsToCreateAssociationMixin<comentarios>;
  // comentarios hasMany likes via comentario_id
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
  // comentarios belongsTo publicaciones via publicacion_id
  publicacion!: publicaciones;
  getPublicacion!: Sequelize.BelongsToGetAssociationMixin<publicaciones>;
  setPublicacion!: Sequelize.BelongsToSetAssociationMixin<publicaciones, publicacionesId>;
  createPublicacion!: Sequelize.BelongsToCreateAssociationMixin<publicaciones>;
  // comentarios belongsTo usuarios via autor_id
  autor!: usuarios;
  getAutor!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setAutor!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createAutor!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof comentarios {
    return comentarios.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    publicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'publicaciones',
        key: 'id'
      }
    },
    autor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    comentario_padre_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'comentarios',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
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
