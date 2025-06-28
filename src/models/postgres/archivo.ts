import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface ArchivoAttributes {
  id: bigint;
  usuario_id?: bigint | null;
  tipo: string;
  url: string;
  fecha_subida?: Date | null;
}

interface ArchivoCreationAttributes extends Optional<ArchivoAttributes, 'id' | 'fecha_subida'> {}

export class Archivo extends Model<ArchivoAttributes, ArchivoCreationAttributes> implements ArchivoAttributes {
  declare id: bigint;
  declare usuario_id: bigint | null;
  declare tipo: string;
  declare url: string;
  declare fecha_subida: Date | null;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
}

export default function initArchivo(sequelize: Sequelize): typeof Archivo {
  Archivo.init(
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
          model: 'usuario',
          key: 'id',
        },
      },
      tipo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_subida: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'),
      },
    },
    {
      sequelize,
      tableName: 'archivo',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'archivos_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Archivo;
}