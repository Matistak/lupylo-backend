import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Roles, RolesId } from './roles.js';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface UsuarioRolesAttributes {
  id: number;
  usuarioId: number;
  rolId: number;
  estado?: string;
  aprobadoPor?: number;
  fechaSolicitud?: Date;
  fechaAprobacion?: Date;
}

export type UsuarioRolesPk = "id";
export type UsuarioRolesId = UsuarioRoles[UsuarioRolesPk];
export type UsuarioRolesOptionalAttributes = "id" | "estado" | "aprobadoPor" | "fechaSolicitud" | "fechaAprobacion";
export type UsuarioRolesCreationAttributes = Optional<UsuarioRolesAttributes, UsuarioRolesOptionalAttributes>;

export class UsuarioRoles extends Model<UsuarioRolesAttributes, UsuarioRolesCreationAttributes> implements UsuarioRolesAttributes {
  id!: number;
  usuarioId!: number;
  rolId!: number;
  estado?: string;
  aprobadoPor?: number;
  fechaSolicitud?: Date;
  fechaAprobacion?: Date;

  // UsuarioRoles belongsTo Roles via rolId
  rol!: Roles;
  getRol!: Sequelize.BelongsToGetAssociationMixin<Roles>;
  setRol!: Sequelize.BelongsToSetAssociationMixin<Roles, RolesId>;
  createRol!: Sequelize.BelongsToCreateAssociationMixin<Roles>;
  // UsuarioRoles belongsTo Usuarios via aprobadoPor
  aprobadoPorUsuario!: Usuarios;
  getAprobadoPorUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setAprobadoPorUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createAprobadoPorUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;
  // UsuarioRoles belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof UsuarioRoles {
    return UsuarioRoles.init({
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
      unique: "usuario_roles_usuario_id_rol_id_key",
      field: 'usuario_id'
    },
    rolId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      },
      unique: "usuario_roles_usuario_id_rol_id_key",
      field: 'rol_id'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "pendiente"
    },
    aprobadoPor: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'usuarios',
        key: 'id'
      },
      field: 'aprobado_por'
    },
    fechaSolicitud: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'fecha_solicitud'
    },
    fechaAprobacion: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_aprobacion'
    }
  }, {
    sequelize,
    tableName: 'usuario_roles',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "usuario_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuario_roles_usuario_id_rol_id_key",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "rol_id" },
        ]
      },
    ]
  });
  }
}
