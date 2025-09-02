import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipos_envaseAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  capacidad_ml?: number;
  creado_en?: Date;
}

export type tipos_envasePk = "id";
export type tipos_envaseId = tipos_envase[tipos_envasePk];
export type tipos_envaseOptionalAttributes = "id" | "descripcion" | "capacidad_ml" | "creado_en";
export type tipos_envaseCreationAttributes = Optional<tipos_envaseAttributes, tipos_envaseOptionalAttributes>;

export class tipos_envase extends Model<tipos_envaseAttributes, tipos_envaseCreationAttributes> implements tipos_envaseAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  capacidad_ml?: number;
  creado_en?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipos_envase {
    return tipos_envase.init({
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
    capacidad_ml: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
