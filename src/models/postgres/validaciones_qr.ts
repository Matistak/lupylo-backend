import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locales, localesId } from './locales.js';
import type { usuario_objetivos, usuario_objetivosId } from './usuario_objetivos.js';
import type { usuarios, usuariosId } from './usuarios.js';

export interface validaciones_qrAttributes {
  id: number;
  usuario_objetivo_id: number;
  local_id: number;
  validado_por: number;
  token_qr: string;
  timestamp_validacion?: Date;
  progreso_anterior: number;
  progreso_nuevo: number;
}

export type validaciones_qrPk = "id";
export type validaciones_qrId = validaciones_qr[validaciones_qrPk];
export type validaciones_qrOptionalAttributes = "id" | "timestamp_validacion";
export type validaciones_qrCreationAttributes = Optional<validaciones_qrAttributes, validaciones_qrOptionalAttributes>;

export class validaciones_qr extends Model<validaciones_qrAttributes, validaciones_qrCreationAttributes> implements validaciones_qrAttributes {
  id!: number;
  usuario_objetivo_id!: number;
  local_id!: number;
  validado_por!: number;
  token_qr!: string;
  timestamp_validacion?: Date;
  progreso_anterior!: number;
  progreso_nuevo!: number;

  // validaciones_qr belongsTo locales via local_id
  local!: locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<locales, localesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<locales>;
  // validaciones_qr belongsTo usuario_objetivos via usuario_objetivo_id
  usuario_objetivo!: usuario_objetivos;
  getUsuario_objetivo!: Sequelize.BelongsToGetAssociationMixin<usuario_objetivos>;
  setUsuario_objetivo!: Sequelize.BelongsToSetAssociationMixin<usuario_objetivos, usuario_objetivosId>;
  createUsuario_objetivo!: Sequelize.BelongsToCreateAssociationMixin<usuario_objetivos>;
  // validaciones_qr belongsTo usuarios via validado_por
  validado_por_usuario!: usuarios;
  getValidado_por_usuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setValidado_por_usuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createValidado_por_usuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof validaciones_qr {
    return validaciones_qr.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_objetivo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario_objetivos',
        key: 'id'
      }
    },
    local_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      }
    },
    validado_por: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    token_qr: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    timestamp_validacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    progreso_anterior: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    progreso_nuevo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'validaciones_qr',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "validaciones_qr_idx_validaciones_qr_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "validaciones_qr_idx_validaciones_qr_usuario_objetivo",
        fields: [
          { name: "usuario_objetivo_id" },
        ]
      },
      {
        name: "validaciones_qr_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
