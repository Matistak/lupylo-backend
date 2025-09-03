import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios.js';

export interface historial_puntosAttributes {
  id: number;
  usuario_id: number;
  tipo_accion: string;
  puntos: number;
  descripcion?: string;
  referencia_id?: number;
  referencia_tipo?: string;
  creado_en?: Date;
}

export type historial_puntosPk = "id";
export type historial_puntosId = historial_puntos[historial_puntosPk];
export type historial_puntosOptionalAttributes = "id" | "descripcion" | "referencia_id" | "referencia_tipo" | "creado_en";
export type historial_puntosCreationAttributes = Optional<historial_puntosAttributes, historial_puntosOptionalAttributes>;

export class historial_puntos extends Model<historial_puntosAttributes, historial_puntosCreationAttributes> implements historial_puntosAttributes {
  id!: number;
  usuario_id!: number;
  tipo_accion!: string;
  puntos!: number;
  descripcion?: string;
  referencia_id?: number;
  referencia_tipo?: string;
  creado_en?: Date;

  // historial_puntos belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof historial_puntos {
    return historial_puntos.init({
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
    tipo_accion: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referencia_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    referencia_tipo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'historial_puntos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "historial_puntos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "idx_historial_puntos_fecha",
        fields: [
          { name: "creado_en" },
        ]
      },
      {
        name: "idx_historial_puntos_usuario",
        fields: [
          { name: "usuario_id" },
        ]
      },
    ]
  });
  }
}
