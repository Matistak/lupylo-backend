import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Objetivos, ObjetivosId } from './objetivos.js';
import type { ProductoLocales, ProductoLocalesId } from './productoLocales.js';
import type { Publicaciones, PublicacionesId } from './publicaciones.js';
import type { RecompensasObtenidas, RecompensasObtenidasId } from './recompensasObtenidas.js';
import type { Temporadas, TemporadasId } from './temporadas.js';
import type { Usuarios, UsuariosId } from './usuarios.js';
import type { ValidacionesQr, ValidacionesQrId } from './validacionesQr.js';

export interface LocalesAttributes {
  id: number;
  usuarioId: number;
  nombreEstablecimiento: string;
  tipoLocal: string;
  descripcion?: string;
  direccion: string;
  telefono?: string;
  horarioAtencion?: object;
  imagen?: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;
}

export type LocalesPk = "id";
export type LocalesId = Locales[LocalesPk];
export type LocalesOptionalAttributes = "id" | "descripcion" | "telefono" | "horarioAtencion" | "imagen" | "estado" | "creadoEn" | "actualizadoEn";
export type LocalesCreationAttributes = Optional<LocalesAttributes, LocalesOptionalAttributes>;

export class Locales extends Model<LocalesAttributes, LocalesCreationAttributes> implements LocalesAttributes {
  id!: number;
  usuarioId!: number;
  nombreEstablecimiento!: string;
  tipoLocal!: string;
  descripcion?: string;
  direccion!: string;
  telefono?: string;
  horarioAtencion?: object;
  imagen?: string;
  estado?: string;
  creadoEn?: Date;
  actualizadoEn?: Date;

  // Locales hasMany Objetivos via localId
  objetivos!: Objetivos[];
  getObjetivos!: Sequelize.HasManyGetAssociationsMixin<Objetivos>;
  setObjetivos!: Sequelize.HasManySetAssociationsMixin<Objetivos, ObjetivosId>;
  addObjetivo!: Sequelize.HasManyAddAssociationMixin<Objetivos, ObjetivosId>;
  addObjetivos!: Sequelize.HasManyAddAssociationsMixin<Objetivos, ObjetivosId>;
  createObjetivo!: Sequelize.HasManyCreateAssociationMixin<Objetivos>;
  removeObjetivo!: Sequelize.HasManyRemoveAssociationMixin<Objetivos, ObjetivosId>;
  removeObjetivos!: Sequelize.HasManyRemoveAssociationsMixin<Objetivos, ObjetivosId>;
  hasObjetivo!: Sequelize.HasManyHasAssociationMixin<Objetivos, ObjetivosId>;
  hasObjetivos!: Sequelize.HasManyHasAssociationsMixin<Objetivos, ObjetivosId>;
  countObjetivos!: Sequelize.HasManyCountAssociationsMixin;
  // Locales hasMany ProductoLocales via localId
  productoLocales!: ProductoLocales[];
  getProductoLocales!: Sequelize.HasManyGetAssociationsMixin<ProductoLocales>;
  setProductoLocales!: Sequelize.HasManySetAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  addProductoLocale!: Sequelize.HasManyAddAssociationMixin<ProductoLocales, ProductoLocalesId>;
  addProductoLocales!: Sequelize.HasManyAddAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  createProductoLocale!: Sequelize.HasManyCreateAssociationMixin<ProductoLocales>;
  removeProductoLocale!: Sequelize.HasManyRemoveAssociationMixin<ProductoLocales, ProductoLocalesId>;
  removeProductoLocales!: Sequelize.HasManyRemoveAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  hasProductoLocale!: Sequelize.HasManyHasAssociationMixin<ProductoLocales, ProductoLocalesId>;
  hasProductoLocales!: Sequelize.HasManyHasAssociationsMixin<ProductoLocales, ProductoLocalesId>;
  countProductoLocales!: Sequelize.HasManyCountAssociationsMixin;
  // Locales hasMany Publicaciones via localId
  publicaciones!: Publicaciones[];
  getPublicaciones!: Sequelize.HasManyGetAssociationsMixin<Publicaciones>;
  setPublicaciones!: Sequelize.HasManySetAssociationsMixin<Publicaciones, PublicacionesId>;
  addPublicacione!: Sequelize.HasManyAddAssociationMixin<Publicaciones, PublicacionesId>;
  addPublicaciones!: Sequelize.HasManyAddAssociationsMixin<Publicaciones, PublicacionesId>;
  createPublicacione!: Sequelize.HasManyCreateAssociationMixin<Publicaciones>;
  removePublicacione!: Sequelize.HasManyRemoveAssociationMixin<Publicaciones, PublicacionesId>;
  removePublicaciones!: Sequelize.HasManyRemoveAssociationsMixin<Publicaciones, PublicacionesId>;
  hasPublicacione!: Sequelize.HasManyHasAssociationMixin<Publicaciones, PublicacionesId>;
  hasPublicaciones!: Sequelize.HasManyHasAssociationsMixin<Publicaciones, PublicacionesId>;
  countPublicaciones!: Sequelize.HasManyCountAssociationsMixin;
  // Locales hasMany RecompensasObtenidas via localId
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
  // Locales hasMany Temporadas via localId
  temporadas!: Temporadas[];
  getTemporadas!: Sequelize.HasManyGetAssociationsMixin<Temporadas>;
  setTemporadas!: Sequelize.HasManySetAssociationsMixin<Temporadas, TemporadasId>;
  addTemporada!: Sequelize.HasManyAddAssociationMixin<Temporadas, TemporadasId>;
  addTemporadas!: Sequelize.HasManyAddAssociationsMixin<Temporadas, TemporadasId>;
  createTemporada!: Sequelize.HasManyCreateAssociationMixin<Temporadas>;
  removeTemporada!: Sequelize.HasManyRemoveAssociationMixin<Temporadas, TemporadasId>;
  removeTemporadas!: Sequelize.HasManyRemoveAssociationsMixin<Temporadas, TemporadasId>;
  hasTemporada!: Sequelize.HasManyHasAssociationMixin<Temporadas, TemporadasId>;
  hasTemporadas!: Sequelize.HasManyHasAssociationsMixin<Temporadas, TemporadasId>;
  countTemporadas!: Sequelize.HasManyCountAssociationsMixin;
  // Locales hasMany ValidacionesQr via localId
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
  // Locales belongsTo Usuarios via usuarioId
  usuario!: Usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<Usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<Usuarios, UsuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<Usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof Locales {
    return Locales.init({
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
      field: 'usuario_id'
    },
    nombreEstablecimiento: {
      type: DataTypes.STRING(150),
      allowNull: false,
      field: 'nombre_establecimiento'
    },
    tipoLocal: {
      type: DataTypes.STRING(50),
      allowNull: false,
      field: 'tipo_local'
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    direccion: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    horarioAtencion: {
      type: DataTypes.JSONB,
      allowNull: true,
      field: 'horario_atencion'
    },
    imagen: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'locales',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "locales_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
