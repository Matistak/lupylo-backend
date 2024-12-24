import { Model, DataTypes, Sequelize } from 'sequelize';

// Definir los atributos del modelo
interface SequelizeMetaAttributes {
  name: string;
}

// Clase del modelo
export class SequelizeMeta extends Model<SequelizeMetaAttributes> implements SequelizeMetaAttributes {
  public name!: string;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initSequelizeMeta(sequelize: Sequelize): typeof SequelizeMeta {
  SequelizeMeta.init(
    {
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
        primaryKey: true,
      },
    },
    {
      sequelize,
      tableName: 'SequelizeMeta',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'SequelizeMeta_pkey',
          unique: true,
          fields: [{ name: 'name' }],
        },
      ],
    }
  );

  return SequelizeMeta;
}
