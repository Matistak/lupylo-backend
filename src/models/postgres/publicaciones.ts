import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Comentarios, ComentariosId } from './comentarios.js';
import type { Likes, LikesId } from './likes.js';
import type { Locales, LocalesId } from './locales.js';
import type { Marcas, MarcasId } from './marcas.js';
import type { Productos, ProductosId } from './productos.js';
import type { TiposPublicacion, TiposPublicacionId } from './tiposPublicacion.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface PublicacionesAttributes {
  id: number;
  autorId: number;
  tipoPublicacionId: number;
  titulo?: string;
  contenido: string;
  imagen?: string;
  localId?: number;
  marcaId?: number;
  productoId?: number;
  puntuacion?: number;
  colorCerveza?: string;
  aroma?: string;
  sensaciones?: string;
  maridajeProbado?: string;
  fechaEvento?: Date;
  ubicacionEvento?: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;
}

export type PublicacionesPk = "id";
export type PublicacionesId = Publicaciones[PublicacionesPk];
export type PublicacionesOptionalAttributes = "id" | "titulo" | "imagen" | "localId" | "marcaId" | "productoId" | "puntuacion" | "colorCerveza" | "aroma" | "sensaciones" | "maridajeProbado" | "fechaEvento" | "ubicacionEvento" | "estado" | "creadoEn" | "actualizadoEn";
export type PublicacionesCreationAttributes = Optional<PublicacionesAttributes, PublicacionesOptionalAttributes>;

export class Publicaciones extends Model<PublicacionesAttributes, PublicacionesCreationAttributes> implements PublicacionesAttributes {
  id!: number;
  autorId!: number;
  tipoPublicacionId!: number;
  titulo?: string;
  contenido!: string;
  imagen?: string;
  localId?: number;
  marcaId?: number;
  productoId?: number;
  puntuacion?: number;
  colorCerveza?: string;
  aroma?: string;
  sensaciones?: string;
  maridajeProbado?: string;
  fechaEvento?: Date;
  ubicacionEvento?: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;

  // Publicaciones belongsTo Locales via localId
  local!: Locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<Locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<Locales, LocalesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<Locales>;
  // Publicaciones belongsTo Marcas via marcaId
  marca!: Marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<Marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<Marcas, MarcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<Marcas>;
  // Publicaciones belongsTo Productos via productoId
  producto!: Productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Productos, ProductosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Productos>;
  // Publicaciones hasMany Comentarios via publicacionId
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
  // Publicaciones hasMany Likes via publicacionId
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
  // Publicaciones belongsTo TiposPublicacion via tipoPublicacionId
  tipoPublicacion!: TiposPublicacion;
  getTipoPublicacion!: Sequelize.BelongsToGetAssociationMixin<TiposPublicacion>;
  setTipoPublicacion!: Sequelize.BelongsToSetAssociationMixin<TiposPublicacion, TiposPublicacionId>;
  createTipoPublicacion!: Sequelize.BelongsToCreateAssociationMixin<TiposPublicacion>;
  // Publicaciones belongsTo Usuarios via autorId
  autor!: Usuarios;
  getAutor!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setAutor!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createAutor!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Publicaciones {
    return Publicaciones.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tipoPublicacionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_publicacion',
        key: 'id'
      },
      field: 'tipo_publicacion_id'
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
    localId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'locales',
        key: 'id'
      },
      field: 'local_id'
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'marcas',
        key: 'id'
      },
      field: 'marca_id'
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'id'
      },
      field: 'producto_id'
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    colorCerveza: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'color_cerveza'
    },
    aroma: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sensaciones: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maridajeProbado: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'maridaje_probado'
    },
    fechaEvento: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_evento'
    },
    ubicacionEvento: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'ubicacion_evento'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activa"
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
