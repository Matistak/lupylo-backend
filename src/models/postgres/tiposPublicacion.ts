import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { Publicaciones, PublicacionesId } from './publicaciones.js';

export interface TiposPublicacionAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  rolesPermitidos?: string[];
  creadoEn?: Date;
}

export type TiposPublicacionPk = "id";
export type TiposPublicacionId = TiposPublicacion[TiposPublicacionPk];
export type TiposPublicacionOptionalAttributes = "id" | "descripcion" | "rolesPermitidos" | "creadoEn";
export type TiposPublicacionCreationAttributes = Optional<TiposPublicacionAttributes, TiposPublicacionOptionalAttributes>;

export class TiposPublicacion extends Model<TiposPublicacionAttributes, TiposPublicacionCreationAttributes> implements TiposPublicacionAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  rolesPermitidos?: string[];
  creadoEn?: Date;

  // TiposPublicacion hasMany Publicaciones via tipoPublicacionId
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

  static initModel(sequelize: Sequelize.Sequelize): typeof TiposPublicacion {
    return TiposPublicacion.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "tipos_publicacion_nombre_key"
    },
    descripcion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    rolesPermitidos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true,
      field: 'roles_permitidos'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    }
  }, {
    sequelize,
    tableName: 'tipos_publicacion',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "tipos_publicacion_nombre_key",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "tipos_publicacion_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
