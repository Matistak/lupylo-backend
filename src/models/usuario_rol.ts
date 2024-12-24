import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface UsuarioRolAttributes {
  id: bigint;
  usuario_id?: bigint | null;
  rol_id?: bigint | null;
}

// Definir los atributos opcionales para la creación
interface UsuarioRolCreationAttributes extends Optional<UsuarioRolAttributes, 'id'> {}

// Clase del modelo
export class UsuarioRol extends Model<UsuarioRolAttributes, UsuarioRolCreationAttributes> implements UsuarioRolAttributes {
  public id!: bigint;
  public usuario_id!: bigint | null;
  public rol_id!: bigint | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initUsuarioRol(sequelize: Sequelize): typeof UsuarioRol {
  UsuarioRol.init(
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
      rol_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'rol', // Nombre de la tabla referenciada
          key: 'id',
        },
      },
    },
    {
      sequelize,
      tableName: 'usuario_rol',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'usuarios_roles_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return UsuarioRol;
}
