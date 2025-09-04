import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { locales, localesId } from './locales';
import type { marcas, marcasId } from './marcas';
import type { recompensas_obtenidas, recompensas_obtenidasId } from './recompensas_obtenidas';
import type { sub_objetivos, sub_objetivosId } from './sub_objetivos';
import type { temporadas, temporadasId } from './temporadas';
import type { tokens_qr, tokens_qrId } from './tokens_qr';
import type { usuario_objetivos, usuario_objetivosId } from './usuario_objetivos';

export interface objetivosAttributes {
  id: number;
  temporada_id: number;
  local_id: number;
  marca_id: number;
  nombre: string;
  descripcion?: string;
  recompensa: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;
}

export type objetivosPk = "id";
export type objetivosId = objetivos[objetivosPk];
export type objetivosOptionalAttributes = "id" | "descripcion" | "estado" | "creado_en" | "actualizado_en";
export type objetivosCreationAttributes = Optional<objetivosAttributes, objetivosOptionalAttributes>;

export class objetivos extends Model<objetivosAttributes, objetivosCreationAttributes> implements objetivosAttributes {
  id!: number;
  temporada_id!: number;
  local_id!: number;
  marca_id!: number;
  nombre!: string;
  descripcion?: string;
  recompensa!: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;

  // objetivos belongsTo locales via local_id
  local!: locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<locales, localesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<locales>;
  // objetivos belongsTo marcas via marca_id
  marca!: marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<marcas, marcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<marcas>;
  // objetivos hasMany recompensas_obtenidas via objetivo_id
  recompensas_obtenidas!: recompensas_obtenidas[];
  getRecompensas_obtenidas!: Sequelize.HasManyGetAssociationsMixin<recompensas_obtenidas>;
  setRecompensas_obtenidas!: Sequelize.HasManySetAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  addRecompensas_obtenida!: Sequelize.HasManyAddAssociationMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  addRecompensas_obtenidas!: Sequelize.HasManyAddAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  createRecompensas_obtenida!: Sequelize.HasManyCreateAssociationMixin<recompensas_obtenidas>;
  removeRecompensas_obtenida!: Sequelize.HasManyRemoveAssociationMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  removeRecompensas_obtenidas!: Sequelize.HasManyRemoveAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  hasRecompensas_obtenida!: Sequelize.HasManyHasAssociationMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  hasRecompensas_obtenidas!: Sequelize.HasManyHasAssociationsMixin<recompensas_obtenidas, recompensas_obtenidasId>;
  countRecompensas_obtenidas!: Sequelize.HasManyCountAssociationsMixin;
  // objetivos hasMany sub_objetivos via objetivo_id
  sub_objetivos!: sub_objetivos[];
  getSub_objetivos!: Sequelize.HasManyGetAssociationsMixin<sub_objetivos>;
  setSub_objetivos!: Sequelize.HasManySetAssociationsMixin<sub_objetivos, sub_objetivosId>;
  addSub_objetivo!: Sequelize.HasManyAddAssociationMixin<sub_objetivos, sub_objetivosId>;
  addSub_objetivos!: Sequelize.HasManyAddAssociationsMixin<sub_objetivos, sub_objetivosId>;
  createSub_objetivo!: Sequelize.HasManyCreateAssociationMixin<sub_objetivos>;
  removeSub_objetivo!: Sequelize.HasManyRemoveAssociationMixin<sub_objetivos, sub_objetivosId>;
  removeSub_objetivos!: Sequelize.HasManyRemoveAssociationsMixin<sub_objetivos, sub_objetivosId>;
  hasSub_objetivo!: Sequelize.HasManyHasAssociationMixin<sub_objetivos, sub_objetivosId>;
  hasSub_objetivos!: Sequelize.HasManyHasAssociationsMixin<sub_objetivos, sub_objetivosId>;
  countSub_objetivos!: Sequelize.HasManyCountAssociationsMixin;
  // objetivos hasMany tokens_qr via objetivo_id
  tokens_qrs!: tokens_qr[];
  getTokens_qrs!: Sequelize.HasManyGetAssociationsMixin<tokens_qr>;
  setTokens_qrs!: Sequelize.HasManySetAssociationsMixin<tokens_qr, tokens_qrId>;
  addTokens_qr!: Sequelize.HasManyAddAssociationMixin<tokens_qr, tokens_qrId>;
  addTokens_qrs!: Sequelize.HasManyAddAssociationsMixin<tokens_qr, tokens_qrId>;
  createTokens_qr!: Sequelize.HasManyCreateAssociationMixin<tokens_qr>;
  removeTokens_qr!: Sequelize.HasManyRemoveAssociationMixin<tokens_qr, tokens_qrId>;
  removeTokens_qrs!: Sequelize.HasManyRemoveAssociationsMixin<tokens_qr, tokens_qrId>;
  hasTokens_qr!: Sequelize.HasManyHasAssociationMixin<tokens_qr, tokens_qrId>;
  hasTokens_qrs!: Sequelize.HasManyHasAssociationsMixin<tokens_qr, tokens_qrId>;
  countTokens_qrs!: Sequelize.HasManyCountAssociationsMixin;
  // objetivos hasMany usuario_objetivos via objetivo_id
  usuario_objetivos!: usuario_objetivos[];
  getUsuario_objetivos!: Sequelize.HasManyGetAssociationsMixin<usuario_objetivos>;
  setUsuario_objetivos!: Sequelize.HasManySetAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  addUsuario_objetivo!: Sequelize.HasManyAddAssociationMixin<usuario_objetivos, usuario_objetivosId>;
  addUsuario_objetivos!: Sequelize.HasManyAddAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  createUsuario_objetivo!: Sequelize.HasManyCreateAssociationMixin<usuario_objetivos>;
  removeUsuario_objetivo!: Sequelize.HasManyRemoveAssociationMixin<usuario_objetivos, usuario_objetivosId>;
  removeUsuario_objetivos!: Sequelize.HasManyRemoveAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  hasUsuario_objetivo!: Sequelize.HasManyHasAssociationMixin<usuario_objetivos, usuario_objetivosId>;
  hasUsuario_objetivos!: Sequelize.HasManyHasAssociationsMixin<usuario_objetivos, usuario_objetivosId>;
  countUsuario_objetivos!: Sequelize.HasManyCountAssociationsMixin;
  // objetivos belongsTo temporadas via temporada_id
  temporada!: temporadas;
  getTemporada!: Sequelize.BelongsToGetAssociationMixin<temporadas>;
  setTemporada!: Sequelize.BelongsToSetAssociationMixin<temporadas, temporadasId>;
  createTemporada!: Sequelize.BelongsToCreateAssociationMixin<temporadas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof objetivos {
    return objetivos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    temporada_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'temporadas',
        key: 'id'
      }
    },
    local_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      }
    },
    marca_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marcas',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    recompensa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    actualizado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'objetivos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_objetivos_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "idx_objetivos_temporada",
        fields: [
          { name: "temporada_id" },
        ]
      },
      {
        name: "objetivos_idx_objetivos_local",
        fields: [
          { name: "local_id" },
        ]
      },
      {
        name: "objetivos_idx_objetivos_temporada",
        fields: [
          { name: "temporada_id" },
        ]
      },
      {
        name: "objetivos_objetivos_temporada_id_producto_id_key",
        unique: true,
        fields: [
          { name: "temporada_id" },
        ]
      },
      {
        name: "objetivos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
