import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios';

export interface solicitudesAttributes {
  id: number;
  estado?: string;
  fecha_solicitud?: Date;
  fecha_aprobacion?: Date;
  rol_id?: number;
  usuario_admin_id?: number;
  datos?: object;
  motivo?: number;
}

export type solicitudesPk = "id";
export type solicitudesId = solicitudes[solicitudesPk];
export type solicitudesOptionalAttributes = "estado" | "fecha_solicitud" | "fecha_aprobacion" | "rol_id" | "usuario_admin_id" | "datos" | "motivo";
export type solicitudesCreationAttributes = Optional<solicitudesAttributes, solicitudesOptionalAttributes>;

export class solicitudes extends Model<solicitudesAttributes, solicitudesCreationAttributes> implements solicitudesAttributes {
  id!: number;
  estado?: string;
  fecha_solicitud?: Date;
  fecha_aprobacion?: Date;
  rol_id?: number;
  usuario_admin_id?: number;
  datos?: object;
  motivo?: number;

  // solicitudes hasMany usuarios via solicitud_id
  usuarios!: usuarios[];
  getUsuarios!: Sequelize.HasManyGetAssociationsMixin<usuarios>;
  setUsuarios!: Sequelize.HasManySetAssociationsMixin<usuarios, usuariosId>;
  addUsuario!: Sequelize.HasManyAddAssociationMixin<usuarios, usuariosId>;
  addUsuarios!: Sequelize.HasManyAddAssociationsMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.HasManyCreateAssociationMixin<usuarios>;
  removeUsuario!: Sequelize.HasManyRemoveAssociationMixin<usuarios, usuariosId>;
  removeUsuarios!: Sequelize.HasManyRemoveAssociationsMixin<usuarios, usuariosId>;
  hasUsuario!: Sequelize.HasManyHasAssociationMixin<usuarios, usuariosId>;
  hasUsuarios!: Sequelize.HasManyHasAssociationsMixin<usuarios, usuariosId>;
  countUsuarios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof solicitudes {
    return solicitudes.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    estado: {
      type: DataTypes.STRING,
      allowNull: true
    },
    fecha_solicitud: {
      type: DataTypes.DATE,
      allowNull: true
    },
    fecha_aprobacion: {
      type: DataTypes.DATE,
      allowNull: true
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    usuario_admin_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    datos: {
      type: DataTypes.JSONB,
      allowNull: true
    },
    motivo: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'solicitudes',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "solicitudes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
