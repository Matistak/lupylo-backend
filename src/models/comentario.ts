import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir atributos del modelo
interface ComentarioAttributes {
  id: bigint;
  usuario_id?: bigint | null;
  publicacion_id?: bigint | null;
  contenido: string;
  fecha_comentario?: Date | null;
}

// Definir atributos opcionales para creación
interface ComentarioCreationAttributes extends Optional<ComentarioAttributes, 'id' | 'fecha_comentario'> {}

// Clase del modelo
export class Comentario extends Model<ComentarioAttributes, ComentarioCreationAttributes> implements ComentarioAttributes {
  public id!: bigint;
  public usuario_id!: bigint | null;
  public publicacion_id!: bigint | null;
  public contenido!: string;
  public fecha_comentario!: Date | null;

  // Agrega timestamps si los usas
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initComentario(sequelize: Sequelize): typeof Comentario {
  Comentario.init(
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
          model: 'usuario', // Nombre de la tabla relacionada
          key: 'id',
        },
      },
      publicacion_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'publicacion', // Nombre de la tabla relacionada
          key: 'id',
        },
      },
      contenido: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_comentario: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'),
      },
    },
    {
      sequelize,
      tableName: 'comentario',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'comentario_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Comentario;
}
