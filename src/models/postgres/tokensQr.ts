import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Objetivos, ObjetivosId } from './objetivos.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface TokensQrAttributes {
  id: number;
  usuarioId: number;
  objetivoId: number;
  token: string;
  datosEncriptados: string;
  fechaGeneracion?: Date;
  fechaExpiracion: Date;
  usado?: boolean;
  fechaUso?: Date;
  ipGeneracion?: string;
}

export type TokensQrPk = "id";
export type TokensQrId = TokensQr[TokensQrPk];
export type TokensQrOptionalAttributes = "id" | "fechaGeneracion" | "usado" | "fechaUso" | "ipGeneracion";
export type TokensQrCreationAttributes = Optional<TokensQrAttributes, TokensQrOptionalAttributes>;

export class TokensQr extends Model<TokensQrAttributes, TokensQrCreationAttributes> implements TokensQrAttributes {
  id!: number;
  usuarioId!: number;
  objetivoId!: number;
  token!: string;
  datosEncriptados!: string;
  fechaGeneracion?: Date;
  fechaExpiracion!: Date;
  usado?: boolean;
  fechaUso?: Date;
  ipGeneracion?: string;

  // TokensQr belongsTo Objetivos via objetivoId
  objetivo!: Objetivos;
  getObjetivo!: Sequelize.BelongsToGetAssociationMixin<Objetivos>;
  setObjetivo!: Sequelize.BelongsToSetAssociationMixin<Objetivos, ObjetivosId>;
  createObjetivo!: Sequelize.BelongsToCreateAssociationMixin<Objetivos>;
  // TokensQr belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof TokensQr {
    return TokensQr.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      field: 'usuario_id'
    },
    objetivoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'objetivos',
        key: 'id'
      },
      field: 'objetivo_id'
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "tokens_qr_token_key"
    },
    datosEncriptados: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'datos_encriptados'
    },
    fechaGeneracion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'fecha_generacion'
    },
    fechaExpiracion: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'fecha_expiracion'
    },
    usado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    fechaUso: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_uso'
    },
    ipGeneracion: {
      type: DataTypes.INET,
      allowNull: true,
      field: 'ip_generacion'
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
    ]
  });
  }
}
