import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Usuarios, UsuariosId } from './usuarios.js';

export interface NivelesUsuarioAttributes {
  id: number;
  nombre: string;
  puntosMinimos: number;
  puntosMaximos?: number;
  descripcion?: string;
  icono?: string;
  beneficios?: string[];
  orden: number;
}

export type NivelesUsuarioPk = "id";
export type NivelesUsuarioId = NivelesUsuario[NivelesUsuarioPk];
export type NivelesUsuarioOptionalAttributes = "id" | "puntosMaximos" | "descripcion" | "icono" | "beneficios";
export type NivelesUsuarioCreationAttributes = Optional<NivelesUsuarioAttributes, NivelesUsuarioOptionalAttributes>;

export class NivelesUsuario extends Model<NivelesUsuarioAttributes, NivelesUsuarioCreationAttributes> implements NivelesUsuarioAttributes {
  id!: number;
  nombre!: string;
  puntosMinimos!: number;
  puntosMaximos?: number;
  descripcion?: string;
  icono?: string;
  beneficios?: string[];
  orden!: number;

  // NivelesUsuario hasMany Usuarios via nivelId
  usuarios!: Usuarios[];
  getUsuarios!: Sequelize.HasManyGetAssociationsMixin<Usuarios>;
  setUsuarios!: Sequelize.HasManySetAssociationsMixin<Usuarios, UsuariosId>;
  addUsuario!: Sequelize.HasManyAddAssociationMixin<Usuarios, UsuariosId>;
  addUsuarios!: Sequelize.HasManyAddAssociationsMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.HasManyCreateAssociationMixin<Usuarios>;
  removeUsuario!: Sequelize.HasManyRemoveAssociationMixin<Usuarios, UsuariosId>;
  removeUsuarios!: Sequelize.HasManyRemoveAssociationsMixin<Usuarios, UsuariosId>;
  hasUsuario!: Sequelize.HasManyHasAssociationMixin<Usuarios, UsuariosId>;
  hasUsuarios!: Sequelize.HasManyHasAssociationsMixin<Usuarios, UsuariosId>;
  countUsuarios!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof NivelesUsuario {
    return NivelesUsuario.init({
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
    puntosMinimos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'puntos_minimos'
    },
    puntosMaximos: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'puntos_maximos'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    icono: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    beneficios: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
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
