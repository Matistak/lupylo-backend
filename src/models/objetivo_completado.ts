import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface ObjetivoCompletadoAttributes {
  id: bigint;
  usuario_id?: bigint | null;
  objetivo_id?: bigint | null;
  fecha_completado?: Date | null;
}

// Definir los atributos opcionales para la creación
interface ObjetivoCompletadoCreationAttributes extends Optional<ObjetivoCompletadoAttributes, 'id' | 'fecha_completado'> {}

// Clase del modelo
export class ObjetivoCompletado extends Model<
  ObjetivoCompletadoAttributes,
  ObjetivoCompletadoCreationAttributes
> implements ObjetivoCompletadoAttributes {
  public id!: bigint;
  public usuario_id!: bigint | null;
  public objetivo_id!: bigint | null;
  public fecha_completado!: Date | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initObjetivoCompletado(sequelize: Sequelize): typeof ObjetivoCompletado {
  ObjetivoCompletado.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'usuario', // Nombre de la tabla referenciada
          key: 'id',
        },
      },
      objetivo_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'objetivo', // Nombre de la tabla referenciada
          key: 'id',
        },
      },
      fecha_completado: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'), // Valor por defecto
      },
    },
    {
      sequelize,
      tableName: 'objetivo_completado',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'objetivo_completado_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return ObjetivoCompletado;
}
