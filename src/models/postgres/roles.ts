import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuario_roles, usuario_rolesId } from './usuario_roles.js';

export interface rolesAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  creado_en?: Date;
}

export type rolesPk = "id";
export type rolesId = roles[rolesPk];
export type rolesOptionalAttributes = "id" | "descripcion" | "creado_en";
export type rolesCreationAttributes = Optional<rolesAttributes, rolesOptionalAttributes>;

export class roles extends Model<rolesAttributes, rolesCreationAttributes> implements rolesAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  creado_en?: Date;

  // roles hasMany usuario_roles via rol_id
  usuario_roles!: usuario_roles[];
  getUsuario_roles!: Sequelize.HasManyGetAssociationsMixin<usuario_roles>;
  setUsuario_roles!: Sequelize.HasManySetAssociationsMixin<usuario_roles, usuario_rolesId>;
  addUsuario_role!: Sequelize.HasManyAddAssociationMixin<usuario_roles, usuario_rolesId>;
  addUsuario_roles!: Sequelize.HasManyAddAssociationsMixin<usuario_roles, usuario_rolesId>;
  createUsuario_role!: Sequelize.HasManyCreateAssociationMixin<usuario_roles>;
  removeUsuario_role!: Sequelize.HasManyRemoveAssociationMixin<usuario_roles, usuario_rolesId>;
  removeUsuario_roles!: Sequelize.HasManyRemoveAssociationsMixin<usuario_roles, usuario_rolesId>;
  hasUsuario_role!: Sequelize.HasManyHasAssociationMixin<usuario_roles, usuario_rolesId>;
  hasUsuario_roles!: Sequelize.HasManyHasAssociationsMixin<usuario_roles, usuario_rolesId>;
  countUsuario_roles!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof roles {
    return roles.init({
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
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
      {
        name: "roles_roles_nombre_key",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
    ]
  });
  }
}
