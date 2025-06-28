import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

interface ObjetivoCodigoQRAttributes {
  id: bigint;
  objetivo_id?: bigint | null;
  usuario_id?: bigint | null;
  codigo: string;
  fecha_generacion?: Date | null;
  expiracion?: Date | null;
}

interface ObjetivoCodigoQRCreationAttributes extends Optional<ObjetivoCodigoQRAttributes, 'id' | 'fecha_generacion'> {}

export class ObjetivoCodigoQR extends Model<ObjetivoCodigoQRAttributes, ObjetivoCodigoQRCreationAttributes> implements ObjetivoCodigoQRAttributes {
  public id!: bigint;
  public objetivo_id!: bigint | null;
  public usuario_id!: bigint | null;
  public codigo!: string;
  public fecha_generacion!: Date | null;
  public expiracion!: Date | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function initObjetivoCodigoQR(sequelize: Sequelize): typeof ObjetivoCodigoQR {
  ObjetivoCodigoQR.init(
    {
      id: {
        autoIncrement: true,
        autoIncrementIdentity: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
      objetivo_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'objetivo',
          key: 'id',
        },
      },
      usuario_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
        references: {
          model: 'usuario',
          key: 'id',
        },
      },
      codigo: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      fecha_generacion: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.fn('now'),
      },
      expiracion: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: 'objetivo_codigo_qr',
      schema: 'proyecto_tesis',
      timestamps: false,
      indexes: [
        {
          name: 'objetivo_codigo_qr_pkey',
          unique: true,
          fields: [{ name: 'id' }],
        },
      ],
    }
  );

  return ObjetivoCodigoQR;
}