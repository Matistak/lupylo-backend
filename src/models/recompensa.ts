import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface RecompensaAttributes {
  id: bigint;
  descripcion: string;
  valor?: number | null;
}

// Definir los atributos opcionales para la creación
interface RecompensaCreationAttributes extends Optional<RecompensaAttributes, 'id' | 'valor'> {}

// Clase del modelo
export class Recompensa extends Model<RecompensaAttributes, RecompensaCreationAttributes> implements RecompensaAttributes {
  public id!: bigint;
  public descripcion!: string;
  public valor!: number | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initRecompensa(sequelize: Sequelize): typeof Recompensa {
  Recompensa.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      valor: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'recompensa',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'recompensas_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Recompensa;
}
