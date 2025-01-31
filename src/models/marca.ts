import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir atributos del modelo
interface MarcaAttributes {
  id: bigint;
  usuario_id?: bigint | null;
  nombre_comercial?: string | null;
  industria?: string | null;
}

// Definir atributos opcionales para creación
interface MarcaCreationAttributes extends Optional<MarcaAttributes, 'id'> {}

// Clase del modelo
export class Marca extends Model<MarcaAttributes, MarcaCreationAttributes> implements MarcaAttributes {
  public id!: bigint;
  public usuario_id!: bigint | null;
  public nombre_comercial!: string | null;
  public industria!: string | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initMarca(sequelize: Sequelize): typeof Marca {
  Marca.init(
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
      nombre_comercial: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      industria: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'marca',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'marcas_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Marca;
}
