import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { UsuarioRoles, UsuarioRolesId } from './usuarioRoles.js';

export interface RolesAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  creadoEn?: Date;
}

export type RolesPk = "id";
export type RolesId = Roles[RolesPk];
export type RolesOptionalAttributes = "id" | "descripcion" | "creadoEn";
export type RolesCreationAttributes = Optional<RolesAttributes, RolesOptionalAttributes>;

export class Roles extends Model<RolesAttributes, RolesCreationAttributes> implements RolesAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  creadoEn?: Date;

  // Roles hasMany UsuarioRoles via rolId
  usuarioRoles!: UsuarioRoles[];
  getUsuarioRoles!: Sequelize.HasManyGetAssociationsMixin<UsuarioRoles>;
  setUsuarioRoles!: Sequelize.HasManySetAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  addUsuarioRole!: Sequelize.HasManyAddAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  addUsuarioRoles!: Sequelize.HasManyAddAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  createUsuarioRole!: Sequelize.HasManyCreateAssociationMixin<UsuarioRoles>;
  removeUsuarioRole!: Sequelize.HasManyRemoveAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  removeUsuarioRoles!: Sequelize.HasManyRemoveAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  hasUsuarioRole!: Sequelize.HasManyHasAssociationMixin<UsuarioRoles, UsuarioRolesId>;
  hasUsuarioRoles!: Sequelize.HasManyHasAssociationsMixin<UsuarioRoles, UsuarioRolesId>;
  countUsuarioRoles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof Roles {
    return Roles.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "roles_nombre_key"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    }
  }, {
    sequelize,
    tableName: 'roles',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "roles_nombre_key",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
