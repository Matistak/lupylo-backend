import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { comentarios, comentariosId } from './comentarios.js';
import type { likes, likesId } from './likes.js';
import type { locales, localesId } from './locales.js';
import type { marcas, marcasId } from './marcas.js';
import type { productos, productosId } from './productos.js';
import type { usuarios, usuariosId } from './usuarios.js';

export interface publicacionesAttributes {
  id: number;
  autor_id: number;
  tipo_publicacion_id: number;
  titulo?: string;
  contenido: string;
  imagen?: string;
  local_id?: number;
  marca_id?: number;
  producto_id?: number;
  puntuacion?: number;
  color_cerveza?: string;
  aroma?: string;
  sensaciones?: string;
  maridaje_probado?: string;
  fecha_evento?: Date;
  ubicacion_evento?: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;
}

export type publicacionesPk = "id";
export type publicacionesId = publicaciones[publicacionesPk];
export type publicacionesOptionalAttributes = "id" | "titulo" | "imagen" | "local_id" | "marca_id" | "producto_id" | "puntuacion" | "color_cerveza" | "aroma" | "sensaciones" | "maridaje_probado" | "fecha_evento" | "ubicacion_evento" | "estado" | "creado_en" | "actualizado_en";
export type publicacionesCreationAttributes = Optional<publicacionesAttributes, publicacionesOptionalAttributes>;

export class publicaciones extends Model<publicacionesAttributes, publicacionesCreationAttributes> implements publicacionesAttributes {
  id!: number;
  autor_id!: number;
  tipo_publicacion_id!: number;
  titulo?: string;
  contenido!: string;
  imagen?: string;
  local_id?: number;
  marca_id?: number;
  producto_id?: number;
  puntuacion?: number;
  color_cerveza?: string;
  aroma?: string;
  sensaciones?: string;
  maridaje_probado?: string;
  fecha_evento?: Date;
  ubicacion_evento?: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;

  // publicaciones belongsTo locales via local_id
  local!: locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<locales, localesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<locales>;
  // publicaciones belongsTo marcas via marca_id
  marca!: marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<marcas, marcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<marcas>;
  // publicaciones belongsTo productos via producto_id
  producto!: productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<productos, productosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<productos>;
  // publicaciones hasMany comentarios via publicacion_id
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
  // publicaciones hasMany likes via publicacion_id
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
  // publicaciones belongsTo usuarios via autor_id
  autor!: usuarios;
  getAutor!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setAutor!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createAutor!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof publicaciones {
    return publicaciones.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    autor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    tipo_publicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    local_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locales',
        key: 'id'
      }
    },
    marca_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'marcas',
        key: 'id'
      }
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    color_cerveza: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    aroma: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sensaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maridaje_probado: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_evento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ubicacion_evento: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activa"
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
    tableName: 'publicaciones',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_publicaciones_autor",
        fields: [
          { name: "autor_id" },
        ]
      },
      {
        name: "idx_publicaciones_fecha",
        fields: [
          { name: "creado_en" },
        ]
      },
      {
        name: "idx_publicaciones_tipo",
        fields: [
          { name: "tipo_publicacion_id" },
        ]
      },
      {
        name: "publicaciones_idx_publicaciones_autor",
        fields: [
          { name: "autor_id" },
        ]
      },
      {
        name: "publicaciones_idx_publicaciones_fecha",
        fields: [
          { name: "creado_en" },
        ]
      },
      {
        name: "publicaciones_idx_publicaciones_tipo",
        fields: [
          { name: "tipo_publicacion_id" },
        ]
      },
      {
        name: "publicaciones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
