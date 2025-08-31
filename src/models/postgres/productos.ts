import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { EstilosCerveza, EstilosCervezaId } from './estilosCerveza.js';
import type { Marcas, MarcasId } from './marcas.js';
import type { Objetivos, ObjetivosId } from './objetivos.js';
import type { ProductoEnvases, ProductoEnvasesId } from './productoEnvases.js';
import type { ProductoLocales, ProductoLocalesId } from './productoLocales.js';
import type { Publicaciones, PublicacionesId } from './publicaciones.js';

export interface ProductosAttributes {
  id: number;
  marcaId: number;
  nombre: string;
  descripcion?: string;
  estiloId?: number;
  ibu?: number;
  gradoAlcoholico?: number;
  colorDescripcion?: string;
  maridaje?: string;
  imagenEtiqueta?: string;
  imagenProducto?: string;
  estado?: string;
  fechaCreacion?: Date;
  actualizadoEn?: Date;
}

export type ProductosPk = "id";
export type ProductosId = Productos[ProductosPk];
export type ProductosOptionalAttributes = "id" | "descripcion" | "estiloId" | "ibu" | "gradoAlcoholico" | "colorDescripcion" | "maridaje" | "imagenEtiqueta" | "imagenProducto" | "estado" | "fechaCreacion" | "actualizadoEn";
export type ProductosCreationAttributes = Optional<ProductosAttributes, ProductosOptionalAttributes>;

export class Productos extends Model<ProductosAttributes, ProductosCreationAttributes> implements ProductosAttributes {
  id!: number;
  marcaId!: number;
  nombre!: string;
  descripcion?: string;
  estiloId?: number;
  ibu?: number;
  gradoAlcoholico?: number;
  colorDescripcion?: string;
  maridaje?: string;
  imagenEtiqueta?: string;
  imagenProducto?: string;
  estado?: string;
  fechaCreacion?: Date;
  actualizadoEn?: Date;

  // Productos belongsTo EstilosCerveza via estiloId
  estilo!: EstilosCerveza;
  getEstilo!: Sequelize.BelongsToGetAssociationMixin<EstilosCerveza>;
  setEstilo!: Sequelize.BelongsToSetAssociationMixin<EstilosCerveza, EstilosCervezaId>;
  createEstilo!: Sequelize.BelongsToCreateAssociationMixin<EstilosCerveza>;
  // Productos belongsTo Marcas via marcaId
  marca!: Marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<Marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<Marcas, MarcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<Marcas>;
  // Productos hasMany Objetivos via productoId
  objetivos!: Objetivos[];
  getObjetivos!: Sequelize.HasManyGetAssociationsMixin<Objetivos>;
  setObjetivos!: Sequelize.HasManySetAssociationsMixin<Objetivos, ObjetivosId>;
  addObjetivo!: Sequelize.HasManyAddAssociationMixin<Objetivos, ObjetivosId>;
  addObjetivos!: Sequelize.HasManyAddAssociationsMixin<Objetivos, ObjetivosId>;
  createObjetivo!: Sequelize.HasManyCreateAssociationMixin<Objetivos>;
  removeObjetivo!: Sequelize.HasManyRemoveAssociationMixin<Objetivos, ObjetivosId>;
  removeObjetivos!: Sequelize.HasManyRemoveAssociationsMixin<Objetivos, ObjetivosId>;
  hasObjetivo!: Sequelize.HasManyHasAssociationMixin<Objetivos, ObjetivosId>;
  hasObjetivos!: Sequelize.HasManyHasAssociationsMixin<Objetivos, ObjetivosId>;
  countObjetivos!: Sequelize.HasManyCountAssociationsMixin;
  // Productos hasMany ProductoEnvases via productoId
  productoEnvases!: ProductoEnvases[];
  getProductoEnvases!: Sequelize.HasManyGetAssociationsMixin<ProductoEnvases>;
  setProductoEnvases!: Sequelize.HasManySetAssociationsMixin<ProductoEnvases, ProductoEnvasesId>;
  addProductoEnvase!: Sequelize.HasManyAddAssociationMixin<ProductoEnvases, ProductoEnvasesId>;
  addProductoEnvases!: Sequelize.HasManyAddAssociationsMixin<ProductoEnvases, ProductoEnvasesId>;
  createProductoEnvase!: Sequelize.HasManyCreateAssociationMixin<ProductoEnvases>;
  removeProductoEnvase!: Sequelize.HasManyRemoveAssociationMixin<ProductoEnvases, ProductoEnvasesId>;
  removeProductoEnvases!: Sequelize.HasManyRemoveAssociationsMixin<ProductoEnvases, ProductoEnvasesId>;
  hasProductoEnvase!: Sequelize.HasManyHasAssociationMixin<ProductoEnvases, ProductoEnvasesId>;
  hasProductoEnvases!: Sequelize.HasManyHasAssociationsMixin<ProductoEnvases, ProductoEnvasesId>;
  countProductoEnvases!: Sequelize.HasManyCountAssociationsMixin;
  // Productos hasMany ProductoLocales via productoId
  productoLocales!: ProductoLocales[];
  getProductoLocales!: Sequelize.HasManyGetAssociationsMixin<ProductoLocales>;
  setProductoLocales!: Sequelize.HasManySetAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  addProductoLocale!: Sequelize.HasManyAddAssociationMixin<ProductoLocales, ProductoLocalesId>;
  addProductoLocales!: Sequelize.HasManyAddAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  createProductoLocale!: Sequelize.HasManyCreateAssociationMixin<ProductoLocales>;
  removeProductoLocale!: Sequelize.HasManyRemoveAssociationMixin<ProductoLocales, ProductoLocalesId>;
  removeProductoLocales!: Sequelize.HasManyRemoveAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  hasProductoLocale!: Sequelize.HasManyHasAssociationMixin<ProductoLocales, ProductoLocalesId>;
  hasProductoLocales!: Sequelize.HasManyHasAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  countProductoLocales!: Sequelize.HasManyCountAssociationsMixin;
  // Productos hasMany Publicaciones via productoId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Productos {
    return Productos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marcas',
        key: 'id'
      },
      unique: "productos_marca_id_nombre_key",
      field: 'marca_id'
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "productos_marca_id_nombre_key"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estiloId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'estilos_cerveza',
        key: 'id'
      },
      field: 'estilo_id'
    },
    ibu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    gradoAlcoholico: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      field: 'grado_alcoholico'
    },
    colorDescripcion: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'color_descripcion'
    },
    maridaje: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagenEtiqueta: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'imagen_etiqueta'
    },
    imagenProducto: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'imagen_producto'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
    },
    fechaCreacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'fecha_creacion'
    },
    actualizadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'actualizado_en'
    }
  }, {
    sequelize,
    tableName: 'productos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_productos_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "idx_productos_marca",
        fields: [
          { name: "marca_id" },
        ]
      },
      {
        name: "productos_marca_id_nombre_key",
        unique: true,
        fields: [
          { name: "marca_id" },
          { name: "nombre" },
        ]
      },
      {
        name: "productos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
