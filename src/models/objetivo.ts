import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface ObjetivoAttributes {
  id: bigint;
  marca_id?: bigint | null;
  temporada_id?: bigint | null;
  descripcion: string;
  producto_id?: bigint | null;
}

interface ObjetivoCreationAttributes extends Optional<ObjetivoAttributes, 'id'> {}

export class Objetivo extends Model<ObjetivoAttributes, ObjetivoCreationAttributes> implements ObjetivoAttributes {
  declare id: bigint;
  declare marca_id: bigint | null;
  declare temporada_id: bigint | null;
  declare descripcion: string;
  declare producto_id: bigint | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

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
          model: 'marca',
          key: 'id',
        },
      },
      temporada_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'temporada',
          key: 'id',
        },
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      producto_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'producto',
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
