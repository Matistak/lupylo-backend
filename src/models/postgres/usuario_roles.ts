import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { roles, rolesId } from './roles.js';
import type { usuarios, usuariosId } from './usuarios.js';

export interface usuario_rolesAttributes {
  id: number;
  usuario_id: number;
  rol_id: number;
  estado?: string;
}

export type usuario_rolesPk = "id";
export type usuario_rolesId = usuario_roles[usuario_rolesPk];
export type usuario_rolesOptionalAttributes = "id" | "estado";
export type usuario_rolesCreationAttributes = Optional<usuario_rolesAttributes, usuario_rolesOptionalAttributes>;

export class usuario_roles extends Model<usuario_rolesAttributes, usuario_rolesCreationAttributes> implements usuario_rolesAttributes {
  id!: number;
  usuario_id!: number;
  rol_id!: number;
  estado?: string;

  // usuario_roles belongsTo roles via rol_id
  rol!: roles;
  getRol!: Sequelize.BelongsToGetAssociationMixin<roles>;
  setRol!: Sequelize.BelongsToSetAssociationMixin<roles, rolesId>;
  createRol!: Sequelize.BelongsToCreateAssociationMixin<roles>;
  // usuario_roles belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof usuario_roles {
    return usuario_roles.init({
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
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'roles',
        key: 'id'
      }
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "pendiente"
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
        name: "usuario_roles_usuario_roles_usuario_id_rol_id_key",
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
