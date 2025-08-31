import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface SeguimientosAttributes {
  id: number;
  seguidorId: number;
  seguidoId: number;
  fechaSeguimiento?: Date;
  estado?: string;
}

export type SeguimientosPk = "id";
export type SeguimientosId = Seguimientos[SeguimientosPk];
export type SeguimientosOptionalAttributes = "id" | "fechaSeguimiento" | "estado";
export type SeguimientosCreationAttributes = Optional<SeguimientosAttributes, SeguimientosOptionalAttributes>;

export class Seguimientos extends Model<SeguimientosAttributes, SeguimientosCreationAttributes> implements SeguimientosAttributes {
  id!: number;
  seguidorId!: number;
  seguidoId!: number;
  fechaSeguimiento?: Date;
  estado?: string;

  // Seguimientos belongsTo Usuarios via seguidoId
  seguido!: Usuarios;
  getSeguido!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setSeguido!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createSeguido!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;
  // Seguimientos belongsTo Usuarios via seguidorId
  seguidor!: Usuarios;
  getSeguidor!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setSeguidor!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createSeguidor!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Seguimientos {
    return Seguimientos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seguidorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      unique: "seguimientos_seguidor_id_seguido_id_key",
      field: 'seguidor_id'
    },
    seguidoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      unique: "seguimientos_seguidor_id_seguido_id_key",
      field: 'seguido_id'
    },
    fechaSeguimiento: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'fecha_seguimiento'
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
    ]
  });
  }
}
