import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Productos, ProductosId } from './productos.js';

export interface EstilosCervezaAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  ibuMin?: number;
  ibuMax?: number;
  alcoholMin?: number;
  alcoholMax?: number;
  creadoEn?: Date;
}

export type EstilosCervezaPk = "id";
export type EstilosCervezaId = EstilosCerveza[EstilosCervezaPk];
export type EstilosCervezaOptionalAttributes = "id" | "descripcion" | "ibuMin" | "ibuMax" | "alcoholMin" | "alcoholMax" | "creadoEn";
export type EstilosCervezaCreationAttributes = Optional<EstilosCervezaAttributes, EstilosCervezaOptionalAttributes>;

export class EstilosCerveza extends Model<EstilosCervezaAttributes, EstilosCervezaCreationAttributes> implements EstilosCervezaAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  ibuMin?: number;
  ibuMax?: number;
  alcoholMin?: number;
  alcoholMax?: number;
  creadoEn?: Date;

  // EstilosCerveza hasMany Productos via estiloId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof EstilosCerveza {
    return EstilosCerveza.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "estilos_cerveza_nombre_key"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ibuMin: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'ibu_min'
    },
    ibuMax: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 120,
      field: 'ibu_max'
    },
    alcoholMin: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0.0,
      field: 'alcohol_min'
    },
    alcoholMax: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 15.0,
      field: 'alcohol_max'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    }
  }, {
    sequelize,
    tableName: 'estilos_cerveza',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "estilos_cerveza_nombre_key",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "estilos_cerveza_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
