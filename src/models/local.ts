import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir atributos del modelo
interface LocalAttributes {
  id: bigint;
  marca_id?: bigint | null;
  direccion: string;
  ciudad?: string | null;
  pais?: string | null;
}

// Definir atributos opcionales para creación
interface LocalCreationAttributes extends Optional<LocalAttributes, 'id'> {}

// Clase del modelo
export class Local extends Model<LocalAttributes, LocalCreationAttributes> implements LocalAttributes {
  public id!: bigint;
  public marca_id!: bigint | null;
  public direccion!: string;
  public ciudad!: string | null;
  public pais!: string | null;

  // Agrega timestamps si los usas
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
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
          model: 'marca', // Nombre de la tabla referenciada
          key: 'id',
        },
      },
      direccion: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      ciudad: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      pais: {
        type: DataTypes.TEXT,
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
