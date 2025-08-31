import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface LogsSistemaAttributes {
  id: number;
  usuarioId?: number;
  accion: string;
  tablaAfectada?: string;
  registroId?: number;
  datosAnteriores?: object;
  datosNuevos?: object;
  ipAddress?: string;
  userAgent?: string;
  timestampAccion?: Date;
  nivel?: string;
}

export type LogsSistemaPk = "id";
export type LogsSistemaId = LogsSistema[LogsSistemaPk];
export type LogsSistemaOptionalAttributes = "id" | "usuarioId" | "tablaAfectada" | "registroId" | "datosAnteriores" | "datosNuevos" | "ipAddress" | "userAgent" | "timestampAccion" | "nivel";
export type LogsSistemaCreationAttributes = Optional<LogsSistemaAttributes, LogsSistemaOptionalAttributes>;

export class LogsSistema extends Model<LogsSistemaAttributes, LogsSistemaCreationAttributes> implements LogsSistemaAttributes {
  id!: number;
  usuarioId?: number;
  accion!: string;
  tablaAfectada?: string;
  registroId?: number;
  datosAnteriores?: object;
  datosNuevos?: object;
  ipAddress?: string;
  userAgent?: string;
  timestampAccion?: Date;
  nivel?: string;

  // LogsSistema belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof LogsSistema {
    return LogsSistema.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      field: 'usuario_id'
    },
    accion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    tablaAfectada: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'tabla_afectada'
    },
    registroId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'registro_id'
    },
    datosAnteriores: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'datos_anteriores'
    },
    datosNuevos: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'datos_nuevos'
    },
    ipAddress: {
      type: DataTypes.INET,
      allowNull: true,
      field: 'ip_address'
    },
    userAgent: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'user_agent'
    },
    timestampAccion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'timestamp_accion'
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
