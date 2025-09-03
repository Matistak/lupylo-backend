import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios.js';

export interface suscripcionesAttributes {
  id: number;
  usuario_id: number;
  fecha_inicio: Date;
  fecha_fin: Date;
  precio: number;
  estado?: string;
  objetivos_restantes?: number;
  metodo_pago?: string;
  transaccion_id?: string;
  auto_renovar?: boolean;
  creado_en?: Date;
}

export type suscripcionesPk = "id";
export type suscripcionesId = suscripciones[suscripcionesPk];
export type suscripcionesOptionalAttributes = "id" | "estado" | "objetivos_restantes" | "metodo_pago" | "transaccion_id" | "auto_renovar" | "creado_en";
export type suscripcionesCreationAttributes = Optional<suscripcionesAttributes, suscripcionesOptionalAttributes>;

export class suscripciones extends Model<suscripcionesAttributes, suscripcionesCreationAttributes> implements suscripcionesAttributes {
  id!: number;
  usuario_id!: number;
  fecha_inicio!: Date;
  fecha_fin!: Date;
  precio!: number;
  estado?: string;
  objetivos_restantes?: number;
  metodo_pago?: string;
  transaccion_id?: string;
  auto_renovar?: boolean;
  creado_en?: Date;

  // suscripciones belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof suscripciones {
    return suscripciones.init({
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
    fecha_inicio: {
      type: DataTypes.DATE,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATE,
      allowNull: false
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
    objetivos_restantes: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 15
    },
    metodo_pago: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    transaccion_id: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    auto_renovar: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
        name: "suscripciones_idx_suscripciones_estado_fecha",
        fields: [
          { name: "estado" },
          { name: "fecha_fin" },
        ]
      },
      {
        name: "suscripciones_idx_suscripciones_usuario",
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
