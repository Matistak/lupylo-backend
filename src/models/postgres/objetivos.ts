import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Locales, LocalesId } from './locales.js';
import type { Marcas, MarcasId } from './marcas.js';
import type { Productos, ProductosId } from './productos.js';
import type { RecompensasObtenidas, RecompensasObtenidasId } from './recompensasObtenidas.js';
import type { Temporadas, TemporadasId } from './temporadas.js';
import type { TokensQr, TokensQrId } from './tokensQr.js';
import type { UsuarioObjetivos, UsuarioObjetivosId } from './usuarioObjetivos.js';

export interface ObjetivosAttributes {
  id: number;
  temporadaId: number;
  localId: number;
  marcaId: number;
  productoId: number;
  nombre: string;
  descripcion?: string;
  cantidadRequerida: number;
  recompensa: string;
  puntosOtorgados?: number;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;
}

export type ObjetivosPk = "id";
export type ObjetivosId = Objetivos[ObjetivosPk];
export type ObjetivosOptionalAttributes = "id" | "descripcion" | "puntosOtorgados" | "estado" | "creadoEn" | "actualizadoEn";
export type ObjetivosCreationAttributes = Optional<ObjetivosAttributes, ObjetivosOptionalAttributes>;

export class Objetivos extends Model<ObjetivosAttributes, ObjetivosCreationAttributes> implements ObjetivosAttributes {
  id!: number;
  temporadaId!: number;
  localId!: number;
  marcaId!: number;
  productoId!: number;
  nombre!: string;
  descripcion?: string;
  cantidadRequerida!: number;
  recompensa!: string;
  puntosOtorgados?: number;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;

  // Objetivos belongsTo Locales via localId
  local!: Locales;
  getLocal!: Sequelize.BelongsToGetAssociationMixin<Locales>;
  setLocal!: Sequelize.BelongsToSetAssociationMixin<Locales, LocalesId>;
  createLocal!: Sequelize.BelongsToCreateAssociationMixin<Locales>;
  // Objetivos belongsTo Marcas via marcaId
  marca!: Marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<Marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<Marcas, MarcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<Marcas>;
  // Objetivos hasMany RecompensasObtenidas via objetivoId
  recompensasObtenidas!: RecompensasObtenidas[];
  getRecompensasObtenidas!: Sequelize.HasManyGetAssociationsMixin<RecompensasObtenidas>;
  setRecompensasObtenidas!: Sequelize.HasManySetAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  addRecompensasObtenida!: Sequelize.HasManyAddAssociationMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  addRecompensasObtenidas!: Sequelize.HasManyAddAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  createRecompensasObtenida!: Sequelize.HasManyCreateAssociationMixin<RecompensasObtenidas>;
  removeRecompensasObtenida!: Sequelize.HasManyRemoveAssociationMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  removeRecompensasObtenidas!: Sequelize.HasManyRemoveAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  hasRecompensasObtenida!: Sequelize.HasManyHasAssociationMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  hasRecompensasObtenidas!: Sequelize.HasManyHasAssociationsMixin<RecompensasObtenidas, RecompensasObtenidasId>;
  countRecompensasObtenidas!: Sequelize.HasManyCountAssociationsMixin;
  // Objetivos hasMany TokensQr via objetivoId
  tokensQrs!: TokensQr[];
  getTokensQrs!: Sequelize.HasManyGetAssociationsMixin<TokensQr>;
  setTokensQrs!: Sequelize.HasManySetAssociationsMixin<TokensQr, TokensQrId>;
  addTokensQr!: Sequelize.HasManyAddAssociationMixin<TokensQr, TokensQrId>;
  addTokensQrs!: Sequelize.HasManyAddAssociationsMixin<TokensQr, TokensQrId>;
  createTokensQr!: Sequelize.HasManyCreateAssociationMixin<TokensQr>;
  removeTokensQr!: Sequelize.HasManyRemoveAssociationMixin<TokensQr, TokensQrId>;
  removeTokensQrs!: Sequelize.HasManyRemoveAssociationsMixin<TokensQr, TokensQrId>;
  hasTokensQr!: Sequelize.HasManyHasAssociationMixin<TokensQr, TokensQrId>;
  hasTokensQrs!: Sequelize.HasManyHasAssociationsMixin<TokensQr, TokensQrId>;
  countTokensQrs!: Sequelize.HasManyCountAssociationsMixin;
  // Objetivos hasMany UsuarioObjetivos via objetivoId
  usuarioObjetivos!: UsuarioObjetivos[];
  getUsuarioObjetivos!: Sequelize.HasManyGetAssociationsMixin<UsuarioObjetivos>;
  setUsuarioObjetivos!: Sequelize.HasManySetAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  addUsuarioObjetivo!: Sequelize.HasManyAddAssociationMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  addUsuarioObjetivos!: Sequelize.HasManyAddAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  createUsuarioObjetivo!: Sequelize.HasManyCreateAssociationMixin<UsuarioObjetivos>;
  removeUsuarioObjetivo!: Sequelize.HasManyRemoveAssociationMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  removeUsuarioObjetivos!: Sequelize.HasManyRemoveAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  hasUsuarioObjetivo!: Sequelize.HasManyHasAssociationMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  hasUsuarioObjetivos!: Sequelize.HasManyHasAssociationsMixin<UsuarioObjetivos, UsuarioObjetivosId>;
  countUsuarioObjetivos!: Sequelize.HasManyCountAssociationsMixin;
  // Objetivos belongsTo Productos via productoId
  producto!: Productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<Productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<Productos, ProductosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<Productos>;
  // Objetivos belongsTo Temporadas via temporadaId
  temporada!: Temporadas;
  getTemporada!: Sequelize.BelongsToGetAssociationMixin<Temporadas>;
  setTemporada!: Sequelize.BelongsToSetAssociationMixin<Temporadas, TemporadasId>;
  createTemporada!: Sequelize.BelongsToCreateAssociationMixin<Temporadas>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Objetivos {
    return Objetivos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    temporadaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'temporadas',
        key: 'id'
      },
      unique: "objetivos_temporada_id_producto_id_key",
      field: 'temporada_id'
    },
    localId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'locales',
        key: 'id'
      },
      field: 'local_id'
    },
    marcaId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'marcas',
        key: 'id'
      },
      field: 'marca_id'
    },
    productoId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'productos',
        key: 'id'
      },
      unique: "objetivos_temporada_id_producto_id_key",
      field: 'producto_id'
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cantidadRequerida: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'cantidad_requerida'
    },
    recompensa: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    puntosOtorgados: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'puntos_otorgados'
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    },
    actualizadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'actualizado_en'
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
        name: "idx_objetivos_producto",
        fields: [
          { name: "producto_id" },
        ]
      },
      {
        name: "idx_objetivos_temporada",
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
      {
        name: "objetivos_temporada_id_producto_id_key",
        unique: true,
        fields: [
          { name: "temporada_id" },
          { name: "producto_id" },
        ]
      },
    ]
  });
  }
}
