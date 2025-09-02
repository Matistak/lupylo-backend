import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios.js';

export interface logs_sistemaAttributes {
  id: number;
  usuario_id?: number;
  accion: string;
  tabla_afectada?: string;
  registro_id?: number;
  datos_anteriores?: object;
  datos_nuevos?: object;
  ip_address?: string;
  user_agent?: string;
  timestamp_accion?: Date;
  nivel?: string;
}

export type logs_sistemaPk = "id";
export type logs_sistemaId = logs_sistema[logs_sistemaPk];
export type logs_sistemaOptionalAttributes = "id" | "usuario_id" | "tabla_afectada" | "registro_id" | "datos_anteriores" | "datos_nuevos" | "ip_address" | "user_agent" | "timestamp_accion" | "nivel";
export type logs_sistemaCreationAttributes = Optional<logs_sistemaAttributes, logs_sistemaOptionalAttributes>;

export class logs_sistema extends Model<logs_sistemaAttributes, logs_sistemaCreationAttributes> implements logs_sistemaAttributes {
  id!: number;
  usuario_id?: number;
  accion!: string;
  tabla_afectada?: string;
  registro_id?: number;
  datos_anteriores?: object;
  datos_nuevos?: object;
  ip_address?: string;
  user_agent?: string;
  timestamp_accion?: Date;
  nivel?: string;

  // logs_sistema belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof logs_sistema {
    return logs_sistema.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuario_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      }
    },
    accion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tabla_afectada: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    registro_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datos_anteriores: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    datos_nuevos: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    ip_address: {
      type: DataTypes.INET,
      allowNull: true
    },
    user_agent: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timestamp_accion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    nivel: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "info"
    }
  }, {
    sequelize,
    tableName: 'logs_sistema',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "logs_sistema_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
