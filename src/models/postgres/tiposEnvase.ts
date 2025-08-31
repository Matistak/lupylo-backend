import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { ProductoEnvases, ProductoEnvasesId } from './productoEnvases.js';

export interface TiposEnvaseAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  capacidadMl?: number;
  creadoEn?: Date;
}

export type TiposEnvasePk = "id";
export type TiposEnvaseId = TiposEnvase[TiposEnvasePk];
export type TiposEnvaseOptionalAttributes = "id" | "descripcion" | "capacidadMl" | "creadoEn";
export type TiposEnvaseCreationAttributes = Optional<TiposEnvaseAttributes, TiposEnvaseOptionalAttributes>;

export class TiposEnvase extends Model<TiposEnvaseAttributes, TiposEnvaseCreationAttributes> implements TiposEnvaseAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  capacidadMl?: number;
  creadoEn?: Date;

  // TiposEnvase hasMany ProductoEnvases via tipoEnvaseId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TiposEnvase {
    return TiposEnvase.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "tipos_envase_nombre_key"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    capacidadMl: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'capacidad_ml'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    }
  }, {
    sequelize,
    tableName: 'tipos_envase',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "tipos_envase_nombre_key",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "tipos_envase_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
