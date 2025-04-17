import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface RecompensaObjetivoAttributes {
  id: bigint;
  recompensa_id?: bigint | null;
  objetivo_id?: bigint | null;
}

interface RecompensaObjetivoCreationAttributes extends Optional<RecompensaObjetivoAttributes, 'id'> {}

export class RecompensaObjetivo extends Model<RecompensaObjetivoAttributes, RecompensaObjetivoCreationAttributes> implements RecompensaObjetivoAttributes {
  declare id: bigint;
  declare recompensa_id: bigint | null;
  declare objetivo_id: bigint | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default function initRecompensaObjetivo(sequelize: Sequelize): typeof RecompensaObjetivo {
  RecompensaObjetivo.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      recompensa_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'recompensa',
          key: 'id',
        },
      },
      objetivo_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'objetivo',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'recompensa_objetivo',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'recompensa_objetivo_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return RecompensaObjetivo;
}