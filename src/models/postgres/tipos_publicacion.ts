import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface tipos_publicacionAttributes {
  id: number;
  nombre: string;
  descripcion?: string;
  roles_permitidos?: string[];
  creado_en?: Date;
}

export type tipos_publicacionPk = "id";
export type tipos_publicacionId = tipos_publicacion[tipos_publicacionPk];
export type tipos_publicacionOptionalAttributes = "id" | "descripcion" | "roles_permitidos" | "creado_en";
export type tipos_publicacionCreationAttributes = Optional<tipos_publicacionAttributes, tipos_publicacionOptionalAttributes>;

export class tipos_publicacion extends Model<tipos_publicacionAttributes, tipos_publicacionCreationAttributes> implements tipos_publicacionAttributes {
  id!: number;
  nombre!: string;
  descripcion?: string;
  roles_permitidos?: string[];
  creado_en?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof tipos_publicacion {
    return tipos_publicacion.init({
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
    roles_permitidos: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
      allowNull: true
    },
    creado_en: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
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
