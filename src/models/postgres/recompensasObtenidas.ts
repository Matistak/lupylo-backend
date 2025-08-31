import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Locales, LocalesId } from './locales.js';
import type { Objetivos, ObjetivosId } from './objetivos.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface RecompensasObtenidasAttributes {
  id: number;
  usuarioId: number;
  objetivoId: number;
  localId: number;
  descripcionPremio: string;
  fechaObtencion?: Date;
  fechaCanjeado?: Date;
  estado?: string;
  codigoCanje?: string;
  notas?: string;
}

export type RecompensasObtenidasPk = "id";
export type RecompensasObtenidasId = RecompensasObtenidas[RecompensasObtenidasPk];
export type RecompensasObtenidasOptionalAttributes = "id" | "fechaObtencion" | "fechaCanjeado" | "estado" | "codigoCanje" | "notas";
export type RecompensasObtenidasCreationAttributes = Optional<RecompensasObtenidasAttributes, RecompensasObtenidasOptionalAttributes>;

export class RecompensasObtenidas extends Model<RecompensasObtenidasAttributes, RecompensasObtenidasCreationAttributes> implements RecompensasObtenidasAttributes {
  id!: number;
  usuarioId!: number;
  objetivoId!: number;
  localId!: number;
  descripcionPremio!: string;
  fechaObtencion?: Date;
  fechaCanjeado?: Date;
  estado?: string;
  codigoCanje?: string;
  notas?: string;

  // RecompensasObtenidas belongsTo Locales via localId
  local!: Locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<Locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<Locales, LocalesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<Locales>;
  // RecompensasObtenidas belongsTo Objetivos via objetivoId
  objetivo!: Objetivos;
  getObjetivo!: Sequelize.BelongsToGetAssociationMixin<Objetivos>;
  setObjetivo!: Sequelize.BelongsToSetAssociationMixin<Objetivos, ObjetivosId>;
  createObjetivo!: Sequelize.BelongsToCreateAssociationMixin<Objetivos>;
  // RecompensasObtenidas belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof RecompensasObtenidas {
    return RecompensasObtenidas.init({
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
    localId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      },
      field: 'local_id'
    },
    descripcionPremio: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'descripcion_premio'
    },
    fechaObtencion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'fecha_obtencion'
    },
    fechaCanjeado: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_canjeado'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "disponible"
    },
    codigoCanje: {
      type: DataTypes.STRING(100),
      allowNull: true,
      field: 'codigo_canje'
    },
    notas: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'recompensas_obtenidas',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "recompensas_obtenidas_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
