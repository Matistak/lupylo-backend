import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locales, localesId } from './locales.js';
import type { objetivos, objetivosId } from './objetivos.js';
import type { usuarios, usuariosId } from './usuarios.js';

export interface recompensas_obtenidasAttributes {
  id: number;
  usuario_id: number;
  objetivo_id: number;
  local_id: number;
  descripcion_premio: string;
  fecha_obtencion?: Date;
  fecha_canjeado?: Date;
  estado?: string;
  codigo_canje?: string;
}

export type recompensas_obtenidasPk = "id";
export type recompensas_obtenidasId = recompensas_obtenidas[recompensas_obtenidasPk];
export type recompensas_obtenidasOptionalAttributes = "id" | "fecha_obtencion" | "fecha_canjeado" | "estado" | "codigo_canje";
export type recompensas_obtenidasCreationAttributes = Optional<recompensas_obtenidasAttributes, recompensas_obtenidasOptionalAttributes>;

export class recompensas_obtenidas extends Model<recompensas_obtenidasAttributes, recompensas_obtenidasCreationAttributes> implements recompensas_obtenidasAttributes {
  id!: number;
  usuario_id!: number;
  objetivo_id!: number;
  local_id!: number;
  descripcion_premio!: string;
  fecha_obtencion?: Date;
  fecha_canjeado?: Date;
  estado?: string;
  codigo_canje?: string;

  // recompensas_obtenidas belongsTo locales via local_id
  local!: locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<locales, localesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<locales>;
  // recompensas_obtenidas belongsTo objetivos via objetivo_id
  objetivo!: objetivos;
  getObjetivo!: Sequelize.BelongsToGetAssociationMixin<objetivos>;
  setObjetivo!: Sequelize.BelongsToSetAssociationMixin<objetivos, objetivosId>;
  createObjetivo!: Sequelize.BelongsToCreateAssociationMixin<objetivos>;
  // recompensas_obtenidas belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof recompensas_obtenidas {
    return recompensas_obtenidas.init({
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
    local_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      }
    },
    descripcion_premio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    fecha_obtencion: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    fecha_canjeado: {
      type: DataTypes.DATE,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "disponible"
    },
    codigo_canje: {
      type: DataTypes.STRING(100),
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
