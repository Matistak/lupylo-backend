import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { productos, productosId } from './productos';

export interface producto_envasesAttributes {
  id: number;
  tipo_envase_id?: number;
  producto_id: number;
  precio?: number;
  disponible?: boolean;
}

export type producto_envasesPk = "id";
export type producto_envasesId = producto_envases[producto_envasesPk];
export type producto_envasesOptionalAttributes = "id" | "tipo_envase_id" | "precio" | "disponible";
export type producto_envasesCreationAttributes = Optional<producto_envasesAttributes, producto_envasesOptionalAttributes>;

export class producto_envases extends Model<producto_envasesAttributes, producto_envasesCreationAttributes> implements producto_envasesAttributes {
  id!: number;
  tipo_envase_id?: number;
  producto_id!: number;
  precio?: number;
  disponible?: boolean;

  // producto_envases belongsTo productos via producto_id
  producto!: productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<productos, productosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<productos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof producto_envases {
    return producto_envases.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_envase_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      }
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
        ]
      },
    ]
  });
  }
}
