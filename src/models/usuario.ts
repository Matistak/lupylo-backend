import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface UsuarioAttributes {
  id: bigint;
  nombre: string;
  email: string;
  tipo_usuario: string;
  fecha_creacion?: Date | null;
}

// Definir los atributos opcionales para la creación
interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id' | 'fecha_creacion'> {}

// Clase del modelo
export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  public id!: bigint;
  public nombre!: string;
  public email!: string;
  public tipo_usuario!: string;
  public fecha_creacion!: Date | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initUsuario(sequelize: Sequelize): typeof Usuario {
  Usuario.init(
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
      },
      email: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: 'usuarios_email_key',
      },
      tipo_usuario: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_creacion: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'),
      },
    },
    {
      sequelize,
      tableName: 'usuario',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'usuarios_email_key',
          unique: true,
          fields: [{ name: 'email' }],
        },
        {
          name: 'usuarios_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Usuario;
}
