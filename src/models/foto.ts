import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definimos las propiedades del modelo
interface FotoAttributes {
  id: bigint;
  publicacion_id?: bigint | null;
  url: string;
}

// Definimos las propiedades opcionales para `create`
interface FotoCreationAttributes extends Optional<FotoAttributes, 'id'> {}

// Clase del modelo extendiendo Sequelize.Model
export class Foto extends Model<FotoAttributes, FotoCreationAttributes> implements FotoAttributes {
  public id!: bigint;
  public publicacion_id!: bigint | null;
  public url!: string;

  // Timestamps (si aplican)
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicialización del modelo
export default function initFoto(sequelize: Sequelize): typeof Foto {
  Foto.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      publicacion_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'publicacion', // Nombre de la tabla referenciada
          key: 'id',
        },
      },
      url: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'foto',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'fotos_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Foto;
}
