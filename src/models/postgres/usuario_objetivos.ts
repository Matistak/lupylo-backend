import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { objetivos, objetivosId } from './objetivos.js';
import type { usuarios, usuariosId } from './usuarios.js';
import type { validaciones_qr, validaciones_qrId } from './validaciones_qr.js';

export interface usuario_objetivosAttributes {
  id: number;
  usuario_id: number;
  objetivo_id: number;
  fecha_creacion?: Date;
}

export type usuario_objetivosPk = "id";
export type usuario_objetivosId = usuario_objetivos[usuario_objetivosPk];
export type usuario_objetivosOptionalAttributes = "id" | "fecha_creacion";
export type usuario_objetivosCreationAttributes = Optional<usuario_objetivosAttributes, usuario_objetivosOptionalAttributes>;

export class usuario_objetivos extends Model<usuario_objetivosAttributes, usuario_objetivosCreationAttributes> implements usuario_objetivosAttributes {
  id!: number;
  usuario_id!: number;
  objetivo_id!: number;
  fecha_creacion?: Date;

  // usuario_objetivos belongsTo objetivos via objetivo_id
  objetivo!: objetivos;
  getObjetivo!: Sequelize.BelongsToGetAssociationMixin<objetivos>;
  setObjetivo!: Sequelize.BelongsToSetAssociationMixin<objetivos, objetivosId>;
  createObjetivo!: Sequelize.BelongsToCreateAssociationMixin<objetivos>;
  // usuario_objetivos hasMany validaciones_qr via usuario_objetivo_id
  validaciones_qrs!: validaciones_qr[];
  getValidaciones_qrs!: Sequelize.HasManyGetAssociationsMixin<validaciones_qr>;
  setValidaciones_qrs!: Sequelize.HasManySetAssociationsMixin<validaciones_qr, validaciones_qrId>;
  addValidaciones_qr!: Sequelize.HasManyAddAssociationMixin<validaciones_qr, validaciones_qrId>;
  addValidaciones_qrs!: Sequelize.HasManyAddAssociationsMixin<validaciones_qr, validaciones_qrId>;
  createValidaciones_qr!: Sequelize.HasManyCreateAssociationMixin<validaciones_qr>;
  removeValidaciones_qr!: Sequelize.HasManyRemoveAssociationMixin<validaciones_qr, validaciones_qrId>;
  removeValidaciones_qrs!: Sequelize.HasManyRemoveAssociationsMixin<validaciones_qr, validaciones_qrId>;
  hasValidaciones_qr!: Sequelize.HasManyHasAssociationMixin<validaciones_qr, validaciones_qrId>;
  hasValidaciones_qrs!: Sequelize.HasManyHasAssociationsMixin<validaciones_qr, validaciones_qrId>;
  countValidaciones_qrs!: Sequelize.HasManyCountAssociationsMixin;
  // usuario_objetivos belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof usuario_objetivos {
    return usuario_objetivos.init({
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
    fecha_creacion: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'usuario_objetivos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "usuario_objetivos_idx_usuario_objetivos_objetivo",
        fields: [
          { name: "objetivo_id" },
        ]
      },
      {
        name: "usuario_objetivos_idx_usuario_objetivos_usuario",
        fields: [
          { name: "usuario_id" },
        ]
      },
      {
        name: "usuario_objetivos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "usuario_objetivos_usuario_id_objetivo_id_key",
        unique: true,
        fields: [
          { name: "usuario_id" },
          { name: "objetivo_id" },
        ]
      },
    ]
  });
  }
}
