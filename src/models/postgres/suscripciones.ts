import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface SuscripcionesAttributes {
  id: number;
  usuarioId: number;
  fechaInicio: Date;
  fechaFin: Date;
  precio: number;
  estado?: string;
  objetivosRestantes?: number;
  metodoPago?: string;
  transaccionId?: string;
  autoRenovar?: boolean;
  creadoEn?: Date;
}

export type SuscripcionesPk = "id";
export type SuscripcionesId = Suscripciones[SuscripcionesPk];
export type SuscripcionesOptionalAttributes = "id" | "estado" | "objetivosRestantes" | "metodoPago" | "transaccionId" | "autoRenovar" | "creadoEn";
export type SuscripcionesCreationAttributes = Optional<SuscripcionesAttributes, SuscripcionesOptionalAttributes>;

export class Suscripciones extends Model<SuscripcionesAttributes, SuscripcionesCreationAttributes> implements SuscripcionesAttributes {
  id!: number;
  usuarioId!: number;
  fechaInicio!: Date;
  fechaFin!: Date;
  precio!: number;
  estado?: string;
  objetivosRestantes?: number;
  metodoPago?: string;
  transaccionId?: string;
  autoRenovar?: boolean;
  creadoEn?: Date;

  // Suscripciones belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Suscripciones {
    return Suscripciones.init({
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
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'fecha_inicio'
    },
    fechaFin: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'fecha_fin'
    },
    precio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activa"
    },
    objetivosRestantes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 15,
      field: 'objetivos_restantes'
    },
    metodoPago: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'metodo_pago'
    },
    transaccionId: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'transaccion_id'
    },
    autoRenovar: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true,
      field: 'auto_renovar'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    }
  }, {
    sequelize,
    tableName: 'suscripciones',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_suscripciones_estado_fecha",
        fields: [
          { name: "estado" },
          { name: "fecha_fin" },
        ]
      },
      {
        name: "idx_suscripciones_usuario",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "suscripciones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
