import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Objetivos, ObjetivosId } from './objetivos.js';
import type { Usuarios, UsuariosId } from './usuarios.js';
import type { ValidacionesQr, ValidacionesQrId } from './validacionesQr.js';

export interface UsuarioObjetivosAttributes {
  id: number;
  usuarioId: number;
  objetivoId: number;
  progresoActual?: number;
  fechaInicio?: Date;
  fechaCompletado?: Date;
  estado?: string;
  premioReclamado?: boolean;
}

export type UsuarioObjetivosPk = "id";
export type UsuarioObjetivosId = UsuarioObjetivos[UsuarioObjetivosPk];
export type UsuarioObjetivosOptionalAttributes = "id" | "progresoActual" | "fechaInicio" | "fechaCompletado" | "estado" | "premioReclamado";
export type UsuarioObjetivosCreationAttributes = Optional<UsuarioObjetivosAttributes, UsuarioObjetivosOptionalAttributes>;

export class UsuarioObjetivos extends Model<UsuarioObjetivosAttributes, UsuarioObjetivosCreationAttributes> implements UsuarioObjetivosAttributes {
  id!: number;
  usuarioId!: number;
  objetivoId!: number;
  progresoActual?: number;
  fechaInicio?: Date;
  fechaCompletado?: Date;
  estado?: string;
  premioReclamado?: boolean;

  // UsuarioObjetivos belongsTo Objetivos via objetivoId
  objetivo!: Objetivos;
  getObjetivo!: Sequelize.BelongsToGetAssociationMixin<Objetivos>;
  setObjetivo!: Sequelize.BelongsToSetAssociationMixin<Objetivos, ObjetivosId>;
  createObjetivo!: Sequelize.BelongsToCreateAssociationMixin<Objetivos>;
  // UsuarioObjetivos hasMany ValidacionesQr via usuarioObjetivoId
  validacionesQrs!: ValidacionesQr[];
  getValidacionesQrs!: Sequelize.HasManyGetAssociationsMixin<ValidacionesQr>;
  setValidacionesQrs!: Sequelize.HasManySetAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  addValidacionesQr!: Sequelize.HasManyAddAssociationMixin<ValidacionesQr, ValidacionesQrId>;
  addValidacionesQrs!: Sequelize.HasManyAddAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  createValidacionesQr!: Sequelize.HasManyCreateAssociationMixin<ValidacionesQr>;
  removeValidacionesQr!: Sequelize.HasManyRemoveAssociationMixin<ValidacionesQr, ValidacionesQrId>;
  removeValidacionesQrs!: Sequelize.HasManyRemoveAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  hasValidacionesQr!: Sequelize.HasManyHasAssociationMixin<ValidacionesQr, ValidacionesQrId>;
  hasValidacionesQrs!: Sequelize.HasManyHasAssociationsMixin<ValidacionesQr, ValidacionesQrId>;
  countValidacionesQrs!: Sequelize.HasManyCountAssociationsMixin;
  // UsuarioObjetivos belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof UsuarioObjetivos {
    return UsuarioObjetivos.init({
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
      unique: "usuario_objetivos_usuario_id_objetivo_id_key",
      field: 'usuario_id'
    },
    objetivoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'objetivos',
        key: 'id'
      },
      unique: "usuario_objetivos_usuario_id_objetivo_id_key",
      field: 'objetivo_id'
    },
    progresoActual: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'progreso_actual'
    },
    fechaInicio: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'fecha_inicio'
    },
    fechaCompletado: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'fecha_completado'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "en_progreso"
    },
    premioReclamado: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'premio_reclamado'
    }
  }, {
    sequelize,
    tableName: 'usuario_objetivos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_usuario_objetivos_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "idx_usuario_objetivos_objetivo",
        fields: [
          { name: "objetivo_id" },
        ]
      },
      {
        name: "idx_usuario_objetivos_usuario",
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
