import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface PersonaAttributes {
  id: bigint;
  usuario_id?: bigint | null;
  apellido?: string | null;
  fecha_nacimiento?: Date | null;
}

// Definir los atributos opcionales para la creación
interface PersonaCreationAttributes extends Optional<PersonaAttributes, 'id'> {}

// Clase del modelo
export class Persona extends Model<PersonaAttributes, PersonaCreationAttributes> implements PersonaAttributes {
  public id!: bigint;
  public usuario_id!: bigint | null;
  public apellido!: string | null;
  public fecha_nacimiento!: Date | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initPersona(sequelize: Sequelize): typeof Persona {
  Persona.init(
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
      apellido: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'persona',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'personas_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Persona;
}
