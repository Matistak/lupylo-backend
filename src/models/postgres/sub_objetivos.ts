import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { objetivos, objetivosId } from './objetivos';
import type { productos, productosId } from './productos';

export interface sub_objetivosAttributes {
  id: number;
  objetivo_id?: number;
  producto_id?: number;
  cantidad?: number;
  tipo_envase?: number;
  progreso?: number;
  creado_en?: Date;
}

export type sub_objetivosPk = "id";
export type sub_objetivosId = sub_objetivos[sub_objetivosPk];
export type sub_objetivosOptionalAttributes = "objetivo_id" | "producto_id" | "cantidad" | "tipo_envase" | "progreso" | "creado_en";
export type sub_objetivosCreationAttributes = Optional<sub_objetivosAttributes, sub_objetivosOptionalAttributes>;

export class sub_objetivos extends Model<sub_objetivosAttributes, sub_objetivosCreationAttributes> implements sub_objetivosAttributes {
  id!: number;
  objetivo_id?: number;
  producto_id?: number;
  cantidad?: number;
  tipo_envase?: number;
  progreso?: number;
  creado_en?: Date;

  // sub_objetivos belongsTo objetivos via objetivo_id
  objetivo!: objetivos;
  getObjetivo!: Sequelize.BelongsToGetAssociationMixin<objetivos>;
  setObjetivo!: Sequelize.BelongsToSetAssociationMixin<objetivos, objetivosId>;
  createObjetivo!: Sequelize.BelongsToCreateAssociationMixin<objetivos>;
  // sub_objetivos belongsTo productos via producto_id
  producto!: productos;
  getProducto!: Sequelize.BelongsToGetAssociationMixin<productos>;
  setProducto!: Sequelize.BelongsToSetAssociationMixin<productos, productosId>;
  createProducto!: Sequelize.BelongsToCreateAssociationMixin<productos>;

  static initModel(sequelize: Sequelize.Sequelize): typeof sub_objetivos {
    return sub_objetivos.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    objetivo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'objetivos',
        key: 'id'
      }
    },
    producto_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'productos',
        key: 'id'
      }
    },
    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    tipo_envase: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    progreso: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sub_objetivos',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "sub_objetivos_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
