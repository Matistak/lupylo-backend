import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface LocalAttributes {
  id: bigint;
  marca_id?: bigint | null;
  direccion: string;
  ciudad: string;
  pais: string;
  latitud?: number | null;
  longitud?: number | null;
}

interface LocalCreationAttributes extends Optional<LocalAttributes, 'id'> {}

export class Local extends Model<LocalAttributes, LocalCreationAttributes> implements LocalAttributes {
  declare id: bigint;
  declare marca_id: bigint | null;
  declare direccion: string;
  declare ciudad: string;
  declare pais: string;
  declare latitud: number | null;
  declare longitud: number | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default function initLocal(sequelize: Sequelize): typeof Local {
  Local.init(
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
      direccion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      pais: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      latitud: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
      longitud: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'local',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'locales_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Local;
}
