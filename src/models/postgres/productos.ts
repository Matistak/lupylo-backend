import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { marcas, marcasId } from './marcas.js';
import type { producto_envases, producto_envasesId } from './producto_envases.js';
import type { producto_locales, producto_localesId } from './producto_locales.js';
import type { publicaciones, publicacionesId } from './publicaciones.js';
import type { sub_objetivos, sub_objetivosId } from './sub_objetivos.js';

export interface productosAttributes {
  id: number;
  marca_id: number;
  nombre: string;
  descripcion?: string;
  estilo?: string;
  ibu?: number;
  grado_alcoholico?: number;
  color_descripcion?: string;
  maridaje?: string;
  imagen_etiqueta?: string;
  imagen_producto?: string;
  estado?: string;
  fecha_creacion?: Date;
  actualizado_en?: Date;
}

export type productosPk = "id";
export type productosId = productos[productosPk];
export type productosOptionalAttributes = "id" | "descripcion" | "estilo" | "ibu" | "grado_alcoholico" | "color_descripcion" | "maridaje" | "imagen_etiqueta" | "imagen_producto" | "estado" | "fecha_creacion" | "actualizado_en";
export type productosCreationAttributes = Optional<productosAttributes, productosOptionalAttributes>;

export class productos extends Model<productosAttributes, productosCreationAttributes> implements productosAttributes {
  id!: number;
  marca_id!: number;
  nombre!: string;
  descripcion?: string;
  estilo?: string;
  ibu?: number;
  grado_alcoholico?: number;
  color_descripcion?: string;
  maridaje?: string;
  imagen_etiqueta?: string;
  imagen_producto?: string;
  estado?: string;
  fecha_creacion?: Date;
  actualizado_en?: Date;

  // productos belongsTo marcas via marca_id
  marca!: marcas;
  getMarca!: Sequelize.BelongsToGetAssociationMixin<marcas>;
  setMarca!: Sequelize.BelongsToSetAssociationMixin<marcas, marcasId>;
  createMarca!: Sequelize.BelongsToCreateAssociationMixin<marcas>;
  // productos hasMany producto_envases via producto_id
  producto_envases!: producto_envases[];
  getProducto_envases!: Sequelize.HasManyGetAssociationsMixin<producto_envases>;
  setProducto_envases!: Sequelize.HasManySetAssociationsMixin<producto_envases, producto_envasesId>;
  addProducto_envase!: Sequelize.HasManyAddAssociationMixin<producto_envases, producto_envasesId>;
  addProducto_envases!: Sequelize.HasManyAddAssociationsMixin<producto_envases, producto_envasesId>;
  createProducto_envase!: Sequelize.HasManyCreateAssociationMixin<producto_envases>;
  removeProducto_envase!: Sequelize.HasManyRemoveAssociationMixin<producto_envases, producto_envasesId>;
  removeProducto_envases!: Sequelize.HasManyRemoveAssociationsMixin<producto_envases, producto_envasesId>;
  hasProducto_envase!: Sequelize.HasManyHasAssociationMixin<producto_envases, producto_envasesId>;
  hasProducto_envases!: Sequelize.HasManyHasAssociationsMixin<producto_envases, producto_envasesId>;
  countProducto_envases!: Sequelize.HasManyCountAssociationsMixin;
  // productos hasMany producto_locales via producto_id
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
  // productos hasMany publicaciones via producto_id
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
  // productos hasMany sub_objetivos via producto_id
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

  static initModel(sequelize: Sequelize.Sequelize): typeof productos {
    return productos.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
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
    estilo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ibu: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    grado_alcoholico: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    color_descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    maridaje: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagen_etiqueta: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    imagen_producto: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estado: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "activo"
    },
    fecha_creacion: {
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
    tableName: 'productos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_productos_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "idx_productos_marca",
        fields: [
          { name: "marca_id" },
        ]
      },
      {
        name: "productos_idx_productos_estado",
        fields: [
          { name: "estado" },
        ]
      },
      {
        name: "productos_idx_productos_marca",
        fields: [
          { name: "marca_id" },
        ]
      },
      {
        name: "productos_marca_id_nombre_key",
        unique: true,
        fields: [
          { name: "marca_id" },
          { name: "nombre" },
        ]
      },
      {
        name: "productos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "productos_productos_marca_id_nombre_key",
        unique: true,
        fields: [
          { name: "marca_id" },
          { name: "nombre" },
        ]
      },
    ]
  });
  }
}
