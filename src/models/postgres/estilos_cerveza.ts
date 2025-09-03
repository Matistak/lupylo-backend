import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface estilos_cervezaAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  ibu_min?: number;
  ibu_max?: number;
  alcohol_min?: number;
  alcohol_max?: number;
  creado_en?: Date;
}

export type estilos_cervezaPk = "id";
export type estilos_cervezaId = estilos_cerveza[estilos_cervezaPk];
export type estilos_cervezaOptionalAttributes = "id" | "descripcion" | "ibu_min" | "ibu_max" | "alcohol_min" | "alcohol_max" | "creado_en";
export type estilos_cervezaCreationAttributes = Optional<estilos_cervezaAttributes, estilos_cervezaOptionalAttributes>;

export class estilos_cerveza extends Model<estilos_cervezaAttributes, estilos_cervezaCreationAttributes> implements estilos_cervezaAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  ibu_min?: number;
  ibu_max?: number;
  alcohol_min?: number;
  alcohol_max?: number;
  creado_en?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof estilos_cerveza {
    return estilos_cerveza.init({
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
    ibu_min: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    ibu_max: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 120
    },
    alcohol_min: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    alcohol_max: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 15
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
