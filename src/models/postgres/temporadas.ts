import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locales, localesId } from './locales.js';
import type { objetivos, objetivosId } from './objetivos.js';

export interface temporadasAttributes {
  id: number;
  local_id: number;
  nombre: string;
  descripcion?: string;
  fecha_inicio: string;
  fecha_fin: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;
}

export type temporadasPk = "id";
export type temporadasId = temporadas[temporadasPk];
export type temporadasOptionalAttributes = "id" | "descripcion" | "estado" | "creado_en" | "actualizado_en";
export type temporadasCreationAttributes = Optional<temporadasAttributes, temporadasOptionalAttributes>;

export class temporadas extends Model<temporadasAttributes, temporadasCreationAttributes> implements temporadasAttributes {
  id!: number;
  local_id!: number;
  nombre!: string;
  descripcion?: string;
  fecha_inicio!: string;
  fecha_fin!: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;

  // temporadas belongsTo locales via local_id
  local!: locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<locales, localesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<locales>;
  // temporadas hasMany objetivos via temporada_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof temporadas {
    return temporadas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    local_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "programada"
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
    tableName: 'temporadas',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_temporadas_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "idx_temporadas_fechas",
        fields: [
          { name: "fecha_inicio" },
          { name: "fecha_fin" },
        ]
      },
      {
        name: "idx_temporadas_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "temporadas_idx_temporadas_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "temporadas_idx_temporadas_fechas",
        fields: [
          { name: "fecha_inicio" },
          { name: "fecha_fin" },
        ]
      },
      {
        name: "temporadas_idx_temporadas_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "temporadas_local_id_nombre_key",
        unique: true,
        fields: [
          { name: "local_id" },
          { name: "nombre" },
        ]
      },
      {
        name: "temporadas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "temporadas_temporadas_local_id_nombre_key",
        unique: true,
        fields: [
          { name: "local_id" },
          { name: "nombre" },
        ]
      },
    ]
  });
  }
}
