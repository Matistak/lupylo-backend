import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UbicacionesAttributes {
  id: number;
  entidadTipo: string;
  entidadId: number;
  nombre?: string;
  direccionCompleta: string;
  latitud?: number;
  longitud?: number;
  ciudad?: string;
  departamento?: string;
  pais?: string;
  codigoPostal?: string;
  esPrincipal?: boolean;
  creadoEn?: Date;
}

export type UbicacionesPk = "id";
export type UbicacionesId = Ubicaciones[UbicacionesPk];
export type UbicacionesOptionalAttributes = "id" | "nombre" | "latitud" | "longitud" | "ciudad" | "departamento" | "pais" | "codigoPostal" | "esPrincipal" | "creadoEn";
export type UbicacionesCreationAttributes = Optional<UbicacionesAttributes, UbicacionesOptionalAttributes>;

export class Ubicaciones extends Model<UbicacionesAttributes, UbicacionesCreationAttributes> implements UbicacionesAttributes {
  id!: number;
  entidadTipo!: string;
  entidadId!: number;
  nombre?: string;
  direccionCompleta!: string;
  latitud?: number;
  longitud?: number;
  ciudad?: string;
  departamento?: string;
  pais?: string;
  codigoPostal?: string;
  esPrincipal?: boolean;
  creadoEn?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Ubicaciones {
    return Ubicaciones.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    entidadTipo: {
      type: DataTypes.STRING(20),
      allowNull: false,
      field: 'entidad_tipo'
    },
    entidadId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'entidad_id'
    },
    nombre: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    direccionCompleta: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'direccion_completa'
    },
    latitud: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    longitud: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    ciudad: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    departamento: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    pais: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: "Paraguay"
    },
    codigoPostal: {
      type: DataTypes.STRING(10),
      allowNull: true,
      field: 'codigo_postal'
    },
    esPrincipal: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'es_principal'
    },
    creadoEn: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP'),
      field: 'creado_en'
    }
  }, {
    sequelize,
    tableName: 'ubicaciones',
    schema: 'proyecto_tesis',
    timestamps: false,
    indexes: [
      {
        name: "idx_ubicaciones_coords",
        fields: [
          { name: "latitud" },
          { name: "longitud" },
        ]
      },
      {
        name: "idx_ubicaciones_entidad",
        fields: [
          { name: "entidad_tipo" },
          { name: "entidad_id" },
        ]
      },
      {
        name: "ubicaciones_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
