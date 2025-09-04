import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { referencias, referenciasId } from './referencias';

export interface tipo_referenciaAttributes {
  id: number;
  valor?: string;
  descripcion?: string;
}

export type tipo_referenciaPk = "id";
export type tipo_referenciaId = tipo_referencia[tipo_referenciaPk];
export type tipo_referenciaOptionalAttributes = "valor" | "descripcion";
export type tipo_referenciaCreationAttributes = Optional<tipo_referenciaAttributes, tipo_referenciaOptionalAttributes>;

export class tipo_referencia extends Model<tipo_referenciaAttributes, tipo_referenciaCreationAttributes> implements tipo_referenciaAttributes {
  id!: number;
  valor?: string;
  descripcion?: string;

  // tipo_referencia hasMany referencias via tipo_referencia_id
  referencia!: referencias[];
  getReferencia!: Sequelize.HasManyGetAssociationsMixin<referencias>;
  setReferencia!: Sequelize.HasManySetAssociationsMixin<referencias, referenciasId>;
  addReferencium!: Sequelize.HasManyAddAssociationMixin<referencias, referenciasId>;
  addReferencia!: Sequelize.HasManyAddAssociationsMixin<referencias, referenciasId>;
  createReferencium!: Sequelize.HasManyCreateAssociationMixin<referencias>;
  removeReferencium!: Sequelize.HasManyRemoveAssociationMixin<referencias, referenciasId>;
  removeReferencia!: Sequelize.HasManyRemoveAssociationsMixin<referencias, referenciasId>;
  hasReferencium!: Sequelize.HasManyHasAssociationMixin<referencias, referenciasId>;
  hasReferencia!: Sequelize.HasManyHasAssociationsMixin<referencias, referenciasId>;
  countReferencia!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof tipo_referencia {
    return tipo_referencia.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    tableName: 'tipo_referencia',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "tipo_referencia_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
