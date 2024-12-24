import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface RolAttributes {
  id: bigint;
  nombre: string;
}

// Definir los atributos opcionales para la creación
interface RolCreationAttributes extends Optional<RolAttributes, 'id'> {}

// Clase del modelo
export class Rol extends Model<RolAttributes, RolCreationAttributes> implements RolAttributes {
  public id!: bigint;
  public nombre!: string;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initRol(sequelize: Sequelize): typeof Rol {
  Rol.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: 'roles_nombre_key',
      },
    },
    {
      sequelize,
      tableName: 'rol',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'roles_nombre_key',
          unique: true,
          fields: [{ name: 'nombre' }],
        },
        {
          name: 'roles_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Rol;
}
