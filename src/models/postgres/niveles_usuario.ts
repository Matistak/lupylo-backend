import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { usuarios, usuariosId } from './usuarios';

export interface niveles_usuarioAttributes {
  id: number;
  nombre: string;
  puntos_minimos: number;
  puntos_maximos?: number;
  descripcion?: string;
  icono?: string;
  orden: number;
}

export type niveles_usuarioPk = "id";
export type niveles_usuarioId = niveles_usuario[niveles_usuarioPk];
export type niveles_usuarioOptionalAttributes = "id" | "puntos_maximos" | "descripcion" | "icono";
export type niveles_usuarioCreationAttributes = Optional<niveles_usuarioAttributes, niveles_usuarioOptionalAttributes>;

export class niveles_usuario extends Model<niveles_usuarioAttributes, niveles_usuarioCreationAttributes> implements niveles_usuarioAttributes {
  id!: number;
  nombre!: string;
  puntos_minimos!: number;
  puntos_maximos?: number;
  descripcion?: string;
  icono?: string;
  orden!: number;

  // niveles_usuario hasMany usuarios via nivel_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof niveles_usuario {
    return niveles_usuario.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "niveles_usuario_nombre_key"
    },
    puntos_minimos: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    puntos_maximos: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icono: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    orden: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: "niveles_usuario_orden_key"
    }
  }, {
    sequelize,
    tableName: 'niveles_usuario',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "niveles_usuario_niveles_usuario_nombre_key",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "niveles_usuario_niveles_usuario_orden_key",
        unique: true,
        fields: [
          { name: "orden" },
        ]
      },
      {
        name: "niveles_usuario_nombre_key",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "niveles_usuario_orden_key",
        unique: true,
        fields: [
          { name: "orden" },
        ]
      },
      {
        name: "niveles_usuario_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
