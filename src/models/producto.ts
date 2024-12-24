import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface ProductoAttributes {
  id: bigint;
  marca_id?: bigint | null;
  nombre: string;
  descripcion?: string | null;
  precio?: number | null;
}

// Definir los atributos opcionales para la creación
interface ProductoCreationAttributes extends Optional<ProductoAttributes, 'id' | 'descripcion' | 'precio'> {}

// Clase del modelo
export class Producto extends Model<ProductoAttributes, ProductoCreationAttributes> implements ProductoAttributes {
  public id!: bigint;
  public marca_id!: bigint | null;
  public nombre!: string;
  public descripcion!: string | null;
  public precio!: number | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initProducto(sequelize: Sequelize): typeof Producto {
  Producto.init(
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
      nombre: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'producto',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'productos_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return Producto;
}
