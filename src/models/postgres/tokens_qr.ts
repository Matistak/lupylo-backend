import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { objetivos, objetivosId } from './objetivos.js';
import type { usuarios, usuariosId } from './usuarios.js';

export interface tokens_qrAttributes {
  id: number;
  usuario_id: number;
  objetivo_id: number;
  token: string;
  datos_encriptados: string;
  fecha_generacion?: Date;
  fecha_expiracion: Date;
  usado?: boolean;
  fecha_uso?: Date;
  ip_generacion?: string;
}

export type tokens_qrPk = "id";
export type tokens_qrId = tokens_qr[tokens_qrPk];
export type tokens_qrOptionalAttributes = "id" | "fecha_generacion" | "usado" | "fecha_uso" | "ip_generacion";
export type tokens_qrCreationAttributes = Optional<tokens_qrAttributes, tokens_qrOptionalAttributes>;

export class tokens_qr extends Model<tokens_qrAttributes, tokens_qrCreationAttributes> implements tokens_qrAttributes {
  id!: number;
  usuario_id!: number;
  objetivo_id!: number;
  token!: string;
  datos_encriptados!: string;
  fecha_generacion?: Date;
  fecha_expiracion!: Date;
  usado?: boolean;
  fecha_uso?: Date;
  ip_generacion?: string;

  // tokens_qr belongsTo objetivos via objetivo_id
  objetivo!: objetivos;
  getObjetivo!: Sequelize.BelongsToGetAssociationMixin<objetivos>;
  setObjetivo!: Sequelize.BelongsToSetAssociationMixin<objetivos, objetivosId>;
  createObjetivo!: Sequelize.BelongsToCreateAssociationMixin<objetivos>;
  // tokens_qr belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof tokens_qr {
    return tokens_qr.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    objetivo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'objetivos',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "tokens_qr_token_key"
    },
    datos_encriptados: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha_generacion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_expiracion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    usado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    fecha_uso: {
      type: DataTypes.DATE,
      allowNull: true
    },
    ip_generacion: {
      type: DataTypes.INET,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'tokens_qr',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_tokens_qr_expiracion",
        fields: [
          { name: "fecha_expiracion" },
        ]
      },
      {
        name: "idx_tokens_qr_usado",
        fields: [
          { name: "usado" },
        ]
      },
      {
        name: "idx_tokens_qr_usuario",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "tokens_qr_idx_tokens_qr_expiracion",
        fields: [
          { name: "fecha_expiracion" },
        ]
      },
      {
        name: "tokens_qr_idx_tokens_qr_usado",
        fields: [
          { name: "usado" },
        ]
      },
      {
        name: "tokens_qr_idx_tokens_qr_usuario",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "tokens_qr_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "tokens_qr_token_key",
        unique: true,
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "tokens_qr_tokens_qr_token_key",
        unique: true,
        fields: [
          { name: "token" },
        ]
      },
    ]
  });
  }
}
