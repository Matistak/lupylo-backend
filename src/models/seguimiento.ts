import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

// Definir los atributos del modelo
interface SeguimientoAttributes {
  id: bigint;
  seguidor_id?: bigint | null;
  seguido_id?: bigint | null;
  fecha_seguimiento?: Date | null;
}

// Definir los atributos opcionales para la creación
interface SeguimientoCreationAttributes extends Optional<SeguimientoAttributes, 'id' | 'fecha_seguimiento'> {}

// Clase del modelo
export class Seguimiento extends Model<SeguimientoAttributes, SeguimientoCreationAttributes> implements SeguimientoAttributes {
  public id!: bigint;
  public seguidor_id!: bigint | null;
  public seguido_id!: bigint | null;
  public fecha_seguimiento!: Date | null;

  // Timestamps si aplican
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

// Inicializar el modelo
export default function initSeguimiento(sequelize: Sequelize): typeof Seguimiento {
  Seguimiento.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      seguidor_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'usuario', // Tabla referenciada
          key: 'id',
        },
        unique: 'seguimientos_seguidor_id_seguido_id_key',
      },
      seguido_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'usuario', // Tabla referenciada
          key: 'id',
        },
        unique: 'seguimientos_seguidor_id_seguido_id_key',
      },
      fecha_seguimiento: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'),
      },
    },
    {
      sequelize,
      tableName: 'seguimiento',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'seguimientos_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
        {
          name: 'seguimientos_seguidor_id_seguido_id_key',
          unique: true,
          fields: [{ name: 'seguidor_id' }, { name: 'seguido_id' }],
        },
      ],
    }
  );

  return Seguimiento;
}
