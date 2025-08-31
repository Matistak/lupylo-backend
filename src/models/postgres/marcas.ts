import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Objetivos, ObjetivosId } from './objetivos.js';
import type { ProductoLocales, ProductoLocalesId } from './productoLocales.js';
import type { Productos, ProductosId } from './productos.js';
import type { Publicaciones, PublicacionesId } from './publicaciones.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface MarcasAttributes {
  id: number;
  usuarioId: number;
  nombreComercial: string;
  razonSocial?: string;
  ruc?: string;
  descripcion?: string;
  sitioWeb?: string;
  anoFundacion?: number;
  logo?: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;
}

export type MarcasPk = "id";
export type MarcasId = Marcas[MarcasPk];
export type MarcasOptionalAttributes = "id" | "razonSocial" | "ruc" | "descripcion" | "sitioWeb" | "anoFundacion" | "logo" | "estado" | "creadoEn" | "actualizadoEn";
export type MarcasCreationAttributes = Optional<MarcasAttributes, MarcasOptionalAttributes>;

export class Marcas extends Model<MarcasAttributes, MarcasCreationAttributes> implements MarcasAttributes {
  id!: number;
  usuarioId!: number;
  nombreComercial!: string;
  razonSocial?: string;
  ruc?: string;
  descripcion?: string;
  sitioWeb?: string;
  anoFundacion?: number;
  logo?: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;

  // Marcas hasMany Objetivos via marcaId
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
  // Marcas hasMany ProductoLocales via marcaId
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
  // Marcas hasMany Productos via marcaId
  productos!: Productos[];
  getProductos!: Sequelize.HasManyGetAssociationsMixin<Productos>;
  setProductos!: Sequelize.HasManySetAssociationsMixin<Productos, ProductosId>;
  addProducto!: Sequelize.HasManyAddAssociationMixin<Productos, ProductosId>;
  addProductos!: Sequelize.HasManyAddAssociationsMixin<Productos, ProductosId>;
  createProducto!: Sequelize.HasManyCreateAssociationMixin<Productos>;
  removeProducto!: Sequelize.HasManyRemoveAssociationMixin<Productos, ProductosId>;
  removeProductos!: Sequelize.HasManyRemoveAssociationsMixin<Productos, ProductosId>;
  hasProducto!: Sequelize.HasManyHasAssociationMixin<Productos, ProductosId>;
  hasProductos!: Sequelize.HasManyHasAssociationsMixin<Productos, ProductosId>;
  countProductos!: Sequelize.HasManyCountAssociationsMixin;
  // Marcas hasMany Publicaciones via marcaId
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
  // Marcas belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Marcas {
    return Marcas.init({
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
      field: 'usuario_id'
    },
    nombreComercial: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: 'nombre_comercial'
    },
    razonSocial: {
      type: DataTypes.STRING(200),
      allowNull: true,
      field: 'razon_social'
    },
    ruc: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "marcas_ruc_key"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sitioWeb: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'sitio_web'
    },
    anoFundacion: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'año_fundacion'
    },
    logo: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'marcas',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "marcas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "marcas_ruc_key",
        unique: true,
        fields: [
          { name: "ruc" },
        ]
      },
    ]
  });
  }
}
