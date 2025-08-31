import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Locales, LocalesId } from './locales.js';
import type { UsuarioObjetivos, UsuarioObjetivosId } from './usuarioObjetivos.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface ValidacionesQrAttributes {
  id: number;
  usuarioObjetivoId: number;
  localId: number;
  validadoPor: number;
  tokenQr: string;
  timestampValidacion?: Date;
  progresoAnterior: number;
  progresoNuevo: number;
}

export type ValidacionesQrPk = "id";
export type ValidacionesQrId = ValidacionesQr[ValidacionesQrPk];
export type ValidacionesQrOptionalAttributes = "id" | "timestampValidacion";
export type ValidacionesQrCreationAttributes = Optional<ValidacionesQrAttributes, ValidacionesQrOptionalAttributes>;

export class ValidacionesQr extends Model<ValidacionesQrAttributes, ValidacionesQrCreationAttributes> implements ValidacionesQrAttributes {
  id!: number;
  usuarioObjetivoId!: number;
  localId!: number;
  validadoPor!: number;
  tokenQr!: string;
  timestampValidacion?: Date;
  progresoAnterior!: number;
  progresoNuevo!: number;

  // ValidacionesQr belongsTo Locales via localId
  local!: Locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<Locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<Locales, LocalesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<Locales>;
  // ValidacionesQr belongsTo UsuarioObjetivos via usuarioObjetivoId
  usuarioObjetivo!: UsuarioObjetivos;
  getUsuarioObjetivo!: Sequelize.BelongsToGetAssociationMixin<UsuarioObjetivos>;
  setUsuarioObjetivo!: Sequelize.BelongsToSetAssociationMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  createUsuarioObjetivo!: Sequelize.BelongsToCreateAssociationMixin<UsuarioObjetivos>;
  // ValidacionesQr belongsTo Usuarios via validadoPor
  validadoPorUsuario!: Usuarios;
  getValidadoPorUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setValidadoPorUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createValidadoPorUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ValidacionesQr {
    return ValidacionesQr.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuarioObjetivoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuario_objetivos',
        key: 'id'
      },
      field: 'usuario_objetivo_id'
    },
    localId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      },
      field: 'local_id'
    },
    validadoPor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      field: 'validado_por'
    },
    tokenQr: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'token_qr'
    },
    timestampValidacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'timestamp_validacion'
    },
    progresoAnterior: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'progreso_anterior'
    },
    progresoNuevo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'progreso_nuevo'
    }
  }, {
    sequelize,
    tableName: 'validaciones_qr',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_validaciones_qr_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "idx_validaciones_qr_usuario_objetivo",
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
