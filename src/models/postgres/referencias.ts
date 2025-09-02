import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { tipo_referencia, tipo_referenciaId } from './tipo_referencia.js';

export interface referenciasAttributes {
  id: number;
  tipo_referencia_id?: number;
  valor?: string;
  descripcion?: string;
}

export type referenciasPk = "id";
export type referenciasId = referencias[referenciasPk];
export type referenciasOptionalAttributes = "tipo_referencia_id" | "valor" | "descripcion";
export type referenciasCreationAttributes = Optional<referenciasAttributes, referenciasOptionalAttributes>;

export class referencias extends Model<referenciasAttributes, referenciasCreationAttributes> implements referenciasAttributes {
  id!: number;
  tipo_referencia_id?: number;
  valor?: string;
  descripcion?: string;

  // referencias belongsTo tipo_referencia via tipo_referencia_id
  tipo_referencium!: tipo_referencia;
  getTipo_referencium!: Sequelize.BelongsToGetAssociationMixin<tipo_referencia>;
  setTipo_referencium!: Sequelize.BelongsToSetAssociationMixin<tipo_referencia, tipo_referenciaId>;
  createTipo_referencium!: Sequelize.BelongsToCreateAssociationMixin<tipo_referencia>;

  static initModel(sequelize: Sequelize.Sequelize): typeof referencias {
    return referencias.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    tipo_referencia_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'tipo_referencia',
        key: 'id'
      }
    },
    valor: {
      type: DataTypes.STRING,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'referencias',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "referencias_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
