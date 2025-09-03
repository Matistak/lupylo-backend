import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { objetivos, objetivosId } from './objetivos.js';
import type { producto_locales, producto_localesId } from './producto_locales.js';
import type { productos, productosId } from './productos.js';
import type { publicaciones, publicacionesId } from './publicaciones.js';
import type { usuarios, usuariosId } from './usuarios.js';

export interface marcasAttributes {
  id: number;
  usuario_id: number;
  nombre_comercial: string;
  razon_social?: string;
  ruc?: string;
  descripcion?: string;
  sitio_web?: string;
  'año_fundacion'?: number;
  logo?: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;
}

export type marcasPk = "id";
export type marcasId = marcas[marcasPk];
export type marcasOptionalAttributes = "id" | "razon_social" | "ruc" | "descripcion" | "sitio_web" | "año_fundacion" | "logo" | "estado" | "creado_en" | "actualizado_en";
export type marcasCreationAttributes = Optional<marcasAttributes, marcasOptionalAttributes>;

export class marcas extends Model<marcasAttributes, marcasCreationAttributes> implements marcasAttributes {
  id!: number;
  usuario_id!: number;
  nombre_comercial!: string;
  razon_social?: string;
  ruc?: string;
  descripcion?: string;
  sitio_web?: string;
  'año_fundacion'?: number;
  logo?: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;

  // marcas hasMany objetivos via marca_id
  objetivos!: objetivos[];
  getObjetivos!: Sequelize.HasManyGetAssociationsMixin<objetivos>;
  setObjetivos!: Sequelize.HasManySetAssociationsMixin<objetivos, objetivosId>;
  addObjetivo!: Sequelize.HasManyAddAssociationMixin<objetivos, objetivosId>;
  addObjetivos!: Sequelize.HasManyAddAssociationsMixin<objetivos, objetivosId>;
  createObjetivo!: Sequelize.HasManyCreateAssociationMixin<objetivos>;
  removeObjetivo!: Sequelize.HasManyRemoveAssociationMixin<objetivos, objetivosId>;
  removeObjetivos!: Sequelize.HasManyRemoveAssociationsMixin<objetivos, objetivosId>;
  hasObjetivo!: Sequelize.HasManyHasAssociationMixin<objetivos, objetivosId>;
  hasObjetivos!: Sequelize.HasManyHasAssociationsMixin<objetivos, objetivosId>;
  countObjetivos!: Sequelize.HasManyCountAssociationsMixin;
  // marcas hasMany producto_locales via marca_id
  producto_locales!: producto_locales[];
  getProducto_locales!: Sequelize.HasManyGetAssociationsMixin<producto_locales>;
  setProducto_locales!: Sequelize.HasManySetAssociationsMixin<producto_locales, producto_localesId>;
  addProducto_locale!: Sequelize.HasManyAddAssociationMixin<producto_locales, producto_localesId>;
  addProducto_locales!: Sequelize.HasManyAddAssociationsMixin<producto_locales, producto_localesId>;
  createProducto_locale!: Sequelize.HasManyCreateAssociationMixin<producto_locales>;
  removeProducto_locale!: Sequelize.HasManyRemoveAssociationMixin<producto_locales, producto_localesId>;
  removeProducto_locales!: Sequelize.HasManyRemoveAssociationsMixin<producto_locales, producto_localesId>;
  hasProducto_locale!: Sequelize.HasManyHasAssociationMixin<producto_locales, producto_localesId>;
  hasProducto_locales!: Sequelize.HasManyHasAssociationsMixin<producto_locales, producto_localesId>;
  countProducto_locales!: Sequelize.HasManyCountAssociationsMixin;
  // marcas hasMany productos via marca_id
  productos!: productos[];
  getProductos!: Sequelize.HasManyGetAssociationsMixin<productos>;
  setProductos!: Sequelize.HasManySetAssociationsMixin<productos, productosId>;
  addProducto!: Sequelize.HasManyAddAssociationMixin<productos, productosId>;
  addProductos!: Sequelize.HasManyAddAssociationsMixin<productos, productosId>;
  createProducto!: Sequelize.HasManyCreateAssociationMixin<productos>;
  removeProducto!: Sequelize.HasManyRemoveAssociationMixin<productos, productosId>;
  removeProductos!: Sequelize.HasManyRemoveAssociationsMixin<productos, productosId>;
  hasProducto!: Sequelize.HasManyHasAssociationMixin<productos, productosId>;
  hasProductos!: Sequelize.HasManyHasAssociationsMixin<productos, productosId>;
  countProductos!: Sequelize.HasManyCountAssociationsMixin;
  // marcas hasMany publicaciones via marca_id
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
  // marcas belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof marcas {
    return marcas.init({
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
    nombre_comercial: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    razon_social: {
      type: DataTypes.STRING(200),
      allowNull: true
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
    sitio_web: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    'año_fundacion': {
      type: DataTypes.INTEGER,
      allowNull: true
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
    tableName: 'marcas',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "marcas_marcas_ruc_key",
        unique: true,
        fields: [
          { name: "ruc" },
        ]
      },
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
