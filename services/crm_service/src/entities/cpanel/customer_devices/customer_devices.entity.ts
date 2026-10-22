import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDevicesAttributes = {
  id?: string | number | null
  customerId: number
  deviceId: number
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerDevicesCreationAttributes = Optional<CustomerDevicesAttributes, "id" | "createdAt" | "updatedAt">

export class CustomerDevicesEntity
  extends Model<CustomerDevicesAttributes, CustomerDevicesCreationAttributes>
  implements CustomerDevicesAttributes
{
  declare id: string | number | null
  declare customerId: number
  declare deviceId: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerDevicesEntity(sequelize: Sequelize): typeof CustomerDevicesEntity {
  CustomerDevicesEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false,
        references: { model: 'customers', key: 'id' },
      },
      deviceId: {
        type: DataTypes.INTEGER,
        field: 'device_id',
        allowNull: false,
        references: { model: 'devices', key: 'id' },
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'customer_devices',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['customer_id', 'device_id'] }
      ]
    }
  )
  return CustomerDevicesEntity
}
