import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HardwareShippingAddressAttributes = {
  id?: string | number | null
  hardwareId?: number | null
  countryId?: number | null
  address1?: string | null
  stateId?: number | null
  city?: string | null
  postalCode?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type HardwareShippingAddressCreationAttributes = Optional<HardwareShippingAddressAttributes, "id" | "hardwareId" | "countryId" | "address1" | "stateId" | "city" | "postalCode" | "createdAt" | "updatedAt">

export class HardwareShippingAddressEntity
  extends Model<HardwareShippingAddressAttributes, HardwareShippingAddressCreationAttributes>
  implements HardwareShippingAddressAttributes
{
  declare id: string | number | null
  declare hardwareId: number | null
  declare countryId: number | null
  declare address1: string | null
  declare stateId: number | null
  declare city: string | null
  declare postalCode: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initHardwareShippingAddressEntity(sequelize: Sequelize): typeof HardwareShippingAddressEntity {
  HardwareShippingAddressEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      hardwareId: {
        type: DataTypes.INTEGER,
        field: 'hardware_id',
        allowNull: true,
        references: { model: 'hardwares', key: 'id' },
      },
      countryId: {
        type: DataTypes.INTEGER,
        field: 'country_id',
        allowNull: true,
      },
      address1: {
        type: DataTypes.STRING(100),
        field: 'address1',
        allowNull: true,
      },
      stateId: {
        type: DataTypes.INTEGER,
        field: 'state_id',
        allowNull: true,
        references: { model: 'states', key: 'id' },
      },
      city: {
        type: DataTypes.STRING(50),
        field: 'city',
        allowNull: true,
      },
      postalCode: {
        type: DataTypes.STRING(50),
        field: 'postal_code',
        allowNull: true,
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
      tableName: 'hardware_shipping_address',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return HardwareShippingAddressEntity
}
