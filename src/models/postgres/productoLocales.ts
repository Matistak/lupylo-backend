import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Locales, LocalesId } from './locales.js';
import type { Marcas, MarcasId } from './marcas.js';
import type { Productos, ProductosId } from './productos.js';

export interface ProductoLocalesAttributes {
  id: number;
  productoId: number;
  localId: number;
  marcaId: number;
  fechaAsignacion?: Date;
  estado?: string;
  stockDisponible?: boolean;
}

export type ProductoLocalesPk = "id";
export type ProductoLocalesId = ProductoLocales[ProductoLocalesPk];
export type ProductoLocalesOptionalAttributes = "id" | "fechaAsignacion" | "estado" | "stockDisponible";
export type ProductoLocalesCreationAttributes = Optional<ProductoLocalesAttributes, ProductoLocalesOptionalAttributes>;

export class ProductoLocales extends Model<ProductoLocalesAttributes, ProductoLocalesCreationAttributes> implements ProductoLocalesAttributes {
  id!: number;
  productoId!: number;
  localId!: number;
  marcaId!: number;
  fechaAsignacion?: Date;
  estado?: string;
  stockDisponible?: boolean;

  // ProductoLocales belongsTo Locales via localId
  local!: Locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<Locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<Locales, LocalesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<Locales>;
  // ProductoLocales belongsTo Marcas via marcaId
  marca!: Marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<Marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<Marcas, MarcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<Marcas>;
  // ProductoLocales belongsTo Productos via productoId
  producto!: Productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Productos, ProductosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Productos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProductoLocales {
    return ProductoLocales.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      },
      unique: "producto_locales_producto_id_local_id_key",
      field: 'producto_id'
    },
    localId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      },
      unique: "producto_locales_producto_id_local_id_key",
      field: 'local_id'
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marcas',
        key: 'id'
      },
      field: 'marca_id'
    },
    fechaAsignacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'fecha_asignacion'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activa"
    },
    stockDisponible: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      field: 'stock_disponible'
    }
  }, {
    sequelize,
    tableName: 'producto_locales',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_producto_locales_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "idx_producto_locales_producto",
        fields: [
          { name: "producto_id" },
        ]
      },
      {
        name: "producto_locales_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "producto_locales_producto_id_local_id_key",
        unique: true,
        fields: [
          { name: "producto_id" },
          { name: "local_id" },
        ]
      },
    ]
  });
  }
}
