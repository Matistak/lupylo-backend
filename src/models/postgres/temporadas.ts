import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Locales, LocalesId } from './locales.js';
import type { Objetivos, ObjetivosId } from './objetivos.js';

export interface TemporadasAttributes {
  id: number;
  localId: number;
  nombre: string;
  descripcion?: string;
  fechaInicio: string;
  fechaFin: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;
}

export type TemporadasPk = "id";
export type TemporadasId = Temporadas[TemporadasPk];
export type TemporadasOptionalAttributes = "id" | "descripcion" | "estado" | "creadoEn" | "actualizadoEn";
export type TemporadasCreationAttributes = Optional<TemporadasAttributes, TemporadasOptionalAttributes>;

export class Temporadas extends Model<TemporadasAttributes, TemporadasCreationAttributes> implements TemporadasAttributes {
  id!: number;
  localId!: number;
  nombre!: string;
  descripcion?: string;
  fechaInicio!: string;
  fechaFin!: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;

  // Temporadas belongsTo Locales via localId
  local!: Locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<Locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<Locales, LocalesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<Locales>;
  // Temporadas hasMany Objetivos via temporadaId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof Temporadas {
    return Temporadas.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    localId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      },
      unique: "temporadas_local_id_nombre_key",
      field: 'local_id'
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: "temporadas_local_id_nombre_key"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'fecha_inicio'
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      field: 'fecha_fin'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "programada"
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
    ]
  });
  }
}
