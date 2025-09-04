import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios';

export interface seguimientosAttributes {
  id: number;
  seguidor_id: number;
  seguido_id: number;
  fecha_seguimiento?: Date;
  estado?: string;
}

export type seguimientosPk = "id";
export type seguimientosId = seguimientos[seguimientosPk];
export type seguimientosOptionalAttributes = "id" | "fecha_seguimiento" | "estado";
export type seguimientosCreationAttributes = Optional<seguimientosAttributes, seguimientosOptionalAttributes>;

export class seguimientos extends Model<seguimientosAttributes, seguimientosCreationAttributes> implements seguimientosAttributes {
  id!: number;
  seguidor_id!: number;
  seguido_id!: number;
  fecha_seguimiento?: Date;
  estado?: string;

  // seguimientos belongsTo usuarios via seguido_id
  seguido!: usuarios;
  getSeguido!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setSeguido!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createSeguido!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;
  // seguimientos belongsTo usuarios via seguidor_id
  seguidor!: usuarios;
  getSeguidor!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setSeguidor!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createSeguidor!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof seguimientos {
    return seguimientos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seguidor_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    seguido_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    fecha_seguimiento: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
    }
  }, {
    sequelize,
    tableName: 'seguimientos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_seguimientos_seguido",
        fields: [
          { name: "seguido_id" },
        ]
      },
      {
        name: "idx_seguimientos_seguidor",
        fields: [
          { name: "seguidor_id" },
        ]
      },
      {
        name: "seguimientos_idx_seguimientos_seguido",
        fields: [
          { name: "seguido_id" },
        ]
      },
      {
        name: "seguimientos_idx_seguimientos_seguidor",
        fields: [
          { name: "seguidor_id" },
        ]
      },
      {
        name: "seguimientos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "seguimientos_seguidor_id_seguido_id_key",
        unique: true,
        fields: [
          { name: "seguidor_id" },
          { name: "seguido_id" },
        ]
      },
      {
        name: "seguimientos_seguimientos_seguidor_id_seguido_id_key",
        unique: true,
        fields: [
          { name: "seguidor_id" },
          { name: "seguido_id" },
        ]
      },
    ]
  });
  }
}
