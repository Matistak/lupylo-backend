import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface RecompensaAttributes {
  id: bigint;
  descripcion: string;
  valor?: number | null;
}

interface RecompensaCreationAttributes extends Optional<RecompensaAttributes, 'id'> {}

export class Recompensa extends Model<RecompensaAttributes, RecompensaCreationAttributes> implements RecompensaAttributes {
  declare id: bigint;
  declare descripcion: string;
  declare valor: number | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

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
