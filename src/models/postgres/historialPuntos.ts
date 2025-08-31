import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface HistorialPuntosAttributes {
  id: number;
  usuarioId: number;
  tipoAccion: string;
  puntos: number;
  descripcion?: string;
  referenciaId?: number;
  referenciaTipo?: string;
  creadoEn?: Date;
}

export type HistorialPuntosPk = "id";
export type HistorialPuntosId = HistorialPuntos[HistorialPuntosPk];
export type HistorialPuntosOptionalAttributes = "id" | "descripcion" | "referenciaId" | "referenciaTipo" | "creadoEn";
export type HistorialPuntosCreationAttributes = Optional<HistorialPuntosAttributes, HistorialPuntosOptionalAttributes>;

export class HistorialPuntos extends Model<HistorialPuntosAttributes, HistorialPuntosCreationAttributes> implements HistorialPuntosAttributes {
  id!: number;
  usuarioId!: number;
  tipoAccion!: string;
  puntos!: number;
  descripcion?: string;
  referenciaId?: number;
  referenciaTipo?: string;
  creadoEn?: Date;

  // HistorialPuntos belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof HistorialPuntos {
    return HistorialPuntos.init({
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
    tipoAccion: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tipo_accion'
    },
    puntos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    referenciaId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'referencia_id'
    },
    referenciaTipo: {
      type: DataTypes.STRING(50),
      allowNull: true,
      field: 'referencia_tipo'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
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
