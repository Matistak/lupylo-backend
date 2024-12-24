import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface ObjetivoAttributes {
  id: bigint;
  marca_id?: bigint | null;
  temporada_id?: bigint | null;
  descripcion: string;
  completado?: boolean | null;
  producto_id?: bigint | null;
}

// Definir los atributos opcionales para la creación
interface ObjetivoCreationAttributes extends Optional<ObjetivoAttributes, 'id' | 'completado'> {}

// Clase del modelo
export class Objetivo extends Model<ObjetivoAttributes, ObjetivoCreationAttributes> implements ObjetivoAttributes {
  public id!: bigint;
  public marca_id!: bigint | null;
  public temporada_id!: bigint | null;
  public descripcion!: string;
  public completado!: boolean | null;
  public producto_id!: bigint | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initObjetivo(sequelize: Sequelize): typeof Objetivo {
  Objetivo.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      marca_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'marca', // Tabla referenciada
          key: 'id',
        },
      },
      temporada_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'temporada', // Tabla referenciada
          key: 'id',
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      completado: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false,
      },
      producto_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'producto', // Tabla referenciada
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'objetivo',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'objetivos_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Objetivo;
}
