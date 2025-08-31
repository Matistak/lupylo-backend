import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Productos, ProductosId } from './productos.js';
import type { TiposEnvase, TiposEnvaseId } from './tiposEnvase.js';

export interface ProductoEnvasesAttributes {
  id: number;
  productoId: number;
  tipoEnvaseId: number;
  precio?: number;
  disponible?: boolean;
}

export type ProductoEnvasesPk = "id";
export type ProductoEnvasesId = ProductoEnvases[ProductoEnvasesPk];
export type ProductoEnvasesOptionalAttributes = "id" | "precio" | "disponible";
export type ProductoEnvasesCreationAttributes = Optional<ProductoEnvasesAttributes, ProductoEnvasesOptionalAttributes>;

export class ProductoEnvases extends Model<ProductoEnvasesAttributes, ProductoEnvasesCreationAttributes> implements ProductoEnvasesAttributes {
  id!: number;
  productoId!: number;
  tipoEnvaseId!: number;
  precio?: number;
  disponible?: boolean;

  // ProductoEnvases belongsTo Productos via productoId
  producto!: Productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Productos, ProductosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Productos>;
  // ProductoEnvases belongsTo TiposEnvase via tipoEnvaseId
  tipoEnvase!: TiposEnvase;
  getTipoEnvase!: Sequelize.BelongsToGetAssociationMixin<TiposEnvase>;
  setTipoEnvase!: Sequelize.BelongsToSetAssociationMixin<TiposEnvase, TiposEnvaseId>;
  createTipoEnvase!: Sequelize.BelongsToCreateAssociationMixin<TiposEnvase>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ProductoEnvases {
    return ProductoEnvases.init({
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
      unique: "producto_envases_producto_id_tipo_envase_id_key",
      field: 'producto_id'
    },
    tipoEnvaseId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'tipos_envase',
        key: 'id'
      },
      unique: "producto_envases_producto_id_tipo_envase_id_key",
      field: 'tipo_envase_id'
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    disponible: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'producto_envases',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "producto_envases_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "producto_envases_producto_id_tipo_envase_id_key",
        unique: true,
        fields: [
          { name: "producto_id" },
          { name: "tipo_envase_id" },
        ]
      },
    ]
  });
  }
}
