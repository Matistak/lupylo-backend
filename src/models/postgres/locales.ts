import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { objetivos, objetivosId } from './objetivos';
import type { producto_locales, producto_localesId } from './producto_locales';
import type { publicaciones, publicacionesId } from './publicaciones';
import type { recompensas_obtenidas, recompensas_obtenidasId } from './recompensas_obtenidas';
import type { temporadas, temporadasId } from './temporadas';
import type { ubicaciones, ubicacionesId } from './ubicaciones';
import type { usuarios, usuariosId } from './usuarios';
import type { validaciones_qr, validaciones_qrId } from './validaciones_qr';

export interface localesAttributes {
  id: number;
  usuario_id: number;
  nombre_establecimiento: string;
  descripcion?: string;
  ubicacion_id: number;
  telefono?: string;
  horario_atencion?: object;
  imagen?: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;
}

export type localesPk = "id";
export type localesId = locales[localesPk];
export type localesOptionalAttributes = "id" | "descripcion" | "telefono" | "horario_atencion" | "imagen" | "estado" | "creado_en" | "actualizado_en";
export type localesCreationAttributes = Optional<localesAttributes, localesOptionalAttributes>;

export class locales extends Model<localesAttributes, localesCreationAttributes> implements localesAttributes {
  id!: number;
  usuario_id!: number;
  nombre_establecimiento!: string;
  descripcion?: string;
  ubicacion_id!: number;
  telefono?: string;
  horario_atencion?: object;
  imagen?: string;
  estado?: string;
  creado_en?: Date;
  actualizado_en?: Date;

  // locales hasMany objetivos via local_id
  objetivos!: objetivos[];
  getObjetivos!: Sequelize.HasManyGetAssociationsMixin<objetivos>;
  setObjetivos!: Sequelize.HasManySetAssociationsMixin<objetivos, objetivosId>;
  addObjetivo!: Sequelize.HasManyAddAssociationMixin<objetivos, objetivosId>;
  addObjetivos!: Sequelize.HasManyAddAssociationsMixin<objetivos, objetivosId>;
  createObjetivo!: Sequelize.HasManyCreateAssociationMixin<objetivos>;
  removeObjetivo!: Sequelize.HasManyRemoveAssociationMixin<objetivos, objetivosId>;
  removeObjetivos!: Sequelize.HasManyRemoveAssociationsMixin<objetivos, objetivosId>;
  hasObjetivo!: Sequelize.HasManyHasAssociationMixin<objetivos, objetivosId>;
  hasObjetivos!: Sequelize.HasManyHasAssociationsMixin<objetivos, objetivosId>;
  countObjetivos!: Sequelize.HasManyCountAssociationsMixin;
  // locales hasMany producto_locales via local_id
  producto_locales!: producto_locales[];
  getProducto_locales!: Sequelize.HasManyGetAssociationsMixin<producto_locales>;
  setProducto_locales!: Sequelize.HasManySetAssociationsMixin<producto_locales, producto_localesId>;
  addProducto_locale!: Sequelize.HasManyAddAssociationMixin<producto_locales, producto_localesId>;
  addProducto_locales!: Sequelize.HasManyAddAssociationsMixin<producto_locales, producto_localesId>;
  createProducto_locale!: Sequelize.HasManyCreateAssociationMixin<producto_locales>;
  removeProducto_locale!: Sequelize.HasManyRemoveAssociationMixin<producto_locales, producto_localesId>;
  removeProducto_locales!: Sequelize.HasManyRemoveAssociationsMixin<producto_locales, producto_localesId>;
  hasProducto_locale!: Sequelize.HasManyHasAssociationMixin<producto_locales, producto_localesId>;
  hasProducto_locales!: Sequelize.HasManyHasAssociationsMixin<producto_locales, producto_localesId>;
  countProducto_locales!: Sequelize.HasManyCountAssociationsMixin;
  // locales hasMany publicaciones via local_id
  publicaciones!: publicaciones[];
  getPublicaciones!: Sequelize.HasManyGetAssociationsMixin<publicaciones>;
  setPublicaciones!: Sequelize.HasManySetAssociationsMixin<publicaciones, publicacionesId>;
  addPublicacione!: Sequelize.HasManyAddAssociationMixin<publicaciones, publicacionesId>;
  addPublicaciones!: Sequelize.HasManyAddAssociationsMixin<publicaciones, publicacionesId>;
  createPublicacione!: Sequelize.HasManyCreateAssociationMixin<publicaciones>;
  removePublicacione!: Sequelize.HasManyRemoveAssociationMixin<publicaciones, publicacionesId>;
  removePublicaciones!: Sequelize.HasManyRemoveAssociationsMixin<publicaciones, publicacionesId>;
  hasPublicacione!: Sequelize.HasManyHasAssociationMixin<publicaciones, publicacionesId>;
  hasPublicaciones!: Sequelize.HasManyHasAssociationsMixin<publicaciones, publicacionesId>;
  countPublicaciones!: Sequelize.HasManyCountAssociationsMixin;
  // locales hasMany recompensas_obtenidas via local_id
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
  // locales hasMany temporadas via local_id
  temporadas!: temporadas[];
  getTemporadas!: Sequelize.HasManyGetAssociationsMixin<temporadas>;
  setTemporadas!: Sequelize.HasManySetAssociationsMixin<temporadas, temporadasId>;
  addTemporada!: Sequelize.HasManyAddAssociationMixin<temporadas, temporadasId>;
  addTemporadas!: Sequelize.HasManyAddAssociationsMixin<temporadas, temporadasId>;
  createTemporada!: Sequelize.HasManyCreateAssociationMixin<temporadas>;
  removeTemporada!: Sequelize.HasManyRemoveAssociationMixin<temporadas, temporadasId>;
  removeTemporadas!: Sequelize.HasManyRemoveAssociationsMixin<temporadas, temporadasId>;
  hasTemporada!: Sequelize.HasManyHasAssociationMixin<temporadas, temporadasId>;
  hasTemporadas!: Sequelize.HasManyHasAssociationsMixin<temporadas, temporadasId>;
  countTemporadas!: Sequelize.HasManyCountAssociationsMixin;
  // locales hasMany validaciones_qr via local_id
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
  // locales belongsTo ubicaciones via ubicacion_id
  ubicacion!: ubicaciones;
  getUbicacion!: Sequelize.BelongsToGetAssociationMixin<ubicaciones>;
  setUbicacion!: Sequelize.BelongsToSetAssociationMixin<ubicaciones, ubicacionesId>;
  createUbicacion!: Sequelize.BelongsToCreateAssociationMixin<ubicaciones>;
  // locales belongsTo usuarios via usuario_id
  usuario!: usuarios;
  getUsuario!: Sequelize.BelongsToGetAssociationMixin<usuarios>;
  setUsuario!: Sequelize.BelongsToSetAssociationMixin<usuarios, usuariosId>;
  createUsuario!: Sequelize.BelongsToCreateAssociationMixin<usuarios>;

  static initModel(sequelize: Sequelize.Sequelize): typeof locales {
    return locales.init({
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
    nombre_establecimiento: {
      type: DataTypes.STRING(150),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ubicacion_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'ubicaciones',
        key: 'id'
      }
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    horario_atencion: {
      type: DataTypes.JSONB,
      allowNull: true
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
