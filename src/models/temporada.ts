import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface TemporadaAttributes {
  id: bigint;
  nombre: string;
  fecha_inicio: Date;
  fecha_fin: Date;
}

// Definir los atributos opcionales para la creación
interface TemporadaCreationAttributes extends Optional<TemporadaAttributes, 'id'> {}

// Clase del modelo
export class Temporada extends Model<TemporadaAttributes, TemporadaCreationAttributes> implements TemporadaAttributes {
  declare id: bigint;
  declare nombre: string;
  declare fecha_inicio: Date;
  declare fecha_fin: Date;

  // Timestamps si aplican
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

// Inicializar el modelo
export default function initTemporada(sequelize: Sequelize): typeof Temporada {
  Temporada.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_inicio: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      fecha_fin: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'temporada',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'temporadas_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Temporada;
}
