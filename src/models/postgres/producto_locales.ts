import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locales, localesId } from './locales.js';
import type { marcas, marcasId } from './marcas.js';
import type { productos, productosId } from './productos.js';

export interface producto_localesAttributes {
  id: number;
  producto_id: number;
  local_id: number;
  marca_id: number;
  fecha_asignacion?: Date;
  estado?: string;
  stock_disponible?: boolean;
}

export type producto_localesPk = "id";
export type producto_localesId = producto_locales[producto_localesPk];
export type producto_localesOptionalAttributes = "id" | "fecha_asignacion" | "estado" | "stock_disponible";
export type producto_localesCreationAttributes = Optional<producto_localesAttributes, producto_localesOptionalAttributes>;

export class producto_locales extends Model<producto_localesAttributes, producto_localesCreationAttributes> implements producto_localesAttributes {
  id!: number;
  producto_id!: number;
  local_id!: number;
  marca_id!: number;
  fecha_asignacion?: Date;
  estado?: string;
  stock_disponible?: boolean;

  // producto_locales belongsTo locales via local_id
  local!: locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<locales, localesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<locales>;
  // producto_locales belongsTo marcas via marca_id
  marca!: marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<marcas, marcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<marcas>;
  // producto_locales belongsTo productos via producto_id
  producto!: productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<productos, productosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<productos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof producto_locales {
    return producto_locales.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    local_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      }
    },
    marca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marcas',
        key: 'id'
      }
    },
    fecha_asignacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activa"
    },
    stock_disponible: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
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
        name: "producto_locales_idx_producto_locales_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "producto_locales_idx_producto_locales_producto",
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
      {
        name: "producto_locales_producto_locales_producto_id_local_id_key",
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
