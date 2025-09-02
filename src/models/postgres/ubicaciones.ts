import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locales, localesId } from './locales.js';

export interface ubicacionesAttributes {
  id: number;
  entidad_tipo: string;
  entidad_id: number;
  nombre?: string;
  direccion_completa: string;
  latitud?: number;
  longitud?: number;
  ciudad?: string;
  departamento?: string;
  pais?: string;
  codigo_postal?: string;
  es_principal?: boolean;
  creado_en?: Date;
}

export type ubicacionesPk = "id";
export type ubicacionesId = ubicaciones[ubicacionesPk];
export type ubicacionesOptionalAttributes = "id" | "nombre" | "latitud" | "longitud" | "ciudad" | "departamento" | "pais" | "codigo_postal" | "es_principal" | "creado_en";
export type ubicacionesCreationAttributes = Optional<ubicacionesAttributes, ubicacionesOptionalAttributes>;

export class ubicaciones extends Model<ubicacionesAttributes, ubicacionesCreationAttributes> implements ubicacionesAttributes {
  id!: number;
  entidad_tipo!: string;
  entidad_id!: number;
  nombre?: string;
  direccion_completa!: string;
  latitud?: number;
  longitud?: number;
  ciudad?: string;
  departamento?: string;
  pais?: string;
  codigo_postal?: string;
  es_principal?: boolean;
  creado_en?: Date;

  // ubicaciones hasMany locales via ubicacion_id
  locales!: locales[];
  getLocales!: Sequelize.HasManyGetAssociationsMixin<locales>;
  setLocales!: Sequelize.HasManySetAssociationsMixin<locales, localesId>;
  addLocale!: Sequelize.HasManyAddAssociationMixin<locales, localesId>;
  addLocales!: Sequelize.HasManyAddAssociationsMixin<locales, localesId>;
  createLocale!: Sequelize.HasManyCreateAssociationMixin<locales>;
  removeLocale!: Sequelize.HasManyRemoveAssociationMixin<locales, localesId>;
  removeLocales!: Sequelize.HasManyRemoveAssociationsMixin<locales, localesId>;
  hasLocale!: Sequelize.HasManyHasAssociationMixin<locales, localesId>;
  hasLocales!: Sequelize.HasManyHasAssociationsMixin<locales, localesId>;
  countLocales!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof ubicaciones {
    return ubicaciones.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    entidad_tipo: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    entidad_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    direccion_completa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    latitud: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitud: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "Paraguay"
    },
    codigo_postal: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    es_principal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'ubicaciones',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_ubicaciones_coords",
        fields: [
          { name: "latitud" },
          { name: "longitud" },
        ]
      },
      {
        name: "idx_ubicaciones_entidad",
        fields: [
          { name: "entidad_tipo" },
          { name: "entidad_id" },
        ]
      },
      {
        name: "ubicaciones_idx_ubicaciones_coords",
        fields: [
          { name: "latitud" },
          { name: "longitud" },
        ]
      },
      {
        name: "ubicaciones_idx_ubicaciones_entidad",
        fields: [
          { name: "entidad_tipo" },
          { name: "entidad_id" },
        ]
      },
      {
        name: "ubicaciones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
