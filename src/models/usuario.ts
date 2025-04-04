import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
export interface UsuarioAttributes {
  id?: bigint;
  nombre: string;
  email: string;
  tipo_usuario?: string;
  fecha_creacion?: Date | null;
  contrasena: string;
  refreshToken?: string;
}

// Definir los atributos opcionales para la creación
interface UsuarioCreationAttributes extends Optional<UsuarioAttributes, 'id' | 'fecha_creacion'> {}

// Clase del modelo
export class Usuario extends Model<UsuarioAttributes, UsuarioCreationAttributes> implements UsuarioAttributes {
  declare id: bigint;
  declare nombre: string;
  declare email: string;
  declare tipo_usuario: string;
  declare fecha_creacion: Date | null;
  declare contrasena: string;
  declare refreshToken: string;

  // Timestamps si aplican
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
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
      contrasena: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      refreshToken: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
      }
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
