import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDevicesAttributes = {
  id: number
  customerId: number
  deviceId: number
  createdAt: Date
  updatedAt: Date
}

export type CustomerDevicesCreationAttributes = Optional<CustomerDevicesAttributes, never>

export class CustomerDevicesEntity
  extends Model<CustomerDevicesAttributes, CustomerDevicesCreationAttributes>
  implements CustomerDevicesAttributes
{
  declare id: number
  declare customerId: number
  declare deviceId: number
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerDevicesEntity(sequelize: Sequelize): typeof CustomerDevicesEntity {
  CustomerDevicesEntity.init(
    {
      id: {
        type: DataTypes.INTEGER,
        field: 'id',
        allowNull: false,
        primaryKey: true,
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: false,
      },
      deviceId: {
        type: DataTypes.INTEGER,
        field: 'device_id',
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'customer_devices',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: false,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['uq_customer_devices_customer_id_device_id', 'customer_id', 'device_id'] }
      ]
    }
  )
  return CustomerDevicesEntity
}
