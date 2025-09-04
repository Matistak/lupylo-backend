import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios';

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

  // roles hasMany usuarios via rol_id
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
