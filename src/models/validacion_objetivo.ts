import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface ValidacionObjetivoAttributes {
  id: bigint;
  objetivo_completado_id?: bigint | null;
  bartender_id?: bigint | null;
  fecha_validacion?: Date | null;
}

interface ValidacionObjetivoCreationAttributes extends Optional<ValidacionObjetivoAttributes, 'id' | 'fecha_validacion'> {}

export class ValidacionObjetivo extends Model<ValidacionObjetivoAttributes, ValidacionObjetivoCreationAttributes> implements ValidacionObjetivoAttributes {
  declare id: bigint;
  declare objetivo_completado_id: bigint | null;
  declare bartender_id: bigint | null;
  declare fecha_validacion: Date | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default function initValidacionObjetivo(sequelize: Sequelize): typeof ValidacionObjetivo {
  ValidacionObjetivo.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      objetivo_completado_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'objetivo_completado',
          key: 'id',
        },
      },
      bartender_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      fecha_validacion: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'),
      },
    },
    {
      sequelize,
      tableName: 'validacion_objetivo',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'validacion_objetivo_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return ValidacionObjetivo;
}