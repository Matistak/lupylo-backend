import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface PublicacionAttributes {
  id: bigint;
  usuario_id?: bigint | null;
  producto_id?: bigint | null;
  titulo: string;
  contenido?: string | null;
  puntuacion?: number | null;
  fecha_publicacion?: Date | null;
}

// Definir los atributos opcionales para la creación
interface PublicacionCreationAttributes extends Optional<PublicacionAttributes, 'id' | 'contenido' | 'puntuacion' | 'fecha_publicacion'> {}

// Clase del modelo
export class Publicacion extends Model<PublicacionAttributes, PublicacionCreationAttributes> implements PublicacionAttributes {
  public id!: bigint;
  public usuario_id!: bigint | null;
  public producto_id!: bigint | null;
  public titulo!: string;
  public contenido!: string | null;
  public puntuacion!: number | null;
  public fecha_publicacion!: Date | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initPublicacion(sequelize: Sequelize): typeof Publicacion {
  Publicacion.init(
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
      producto_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'producto', // Nombre de la tabla referenciada
          key: 'id',
        },
      },
      titulo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      contenido: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      puntuacion: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fecha_publicacion: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'),
      },
    },
    {
      sequelize,
      tableName: 'publicacion',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'publicaciones_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Publicacion;
}
