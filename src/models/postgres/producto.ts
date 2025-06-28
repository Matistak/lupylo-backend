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
  declare id: bigint;
  declare marca_id: bigint | null;
  declare nombre: string;
  declare descripcion: string | null;
  declare precio: number | null;

  // Timestamps si aplican
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
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
