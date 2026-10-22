import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomerDiscountsAttributes = {
  id?: string | number | null
  customerId?: number | null
  packageId?: number | null
  subId?: number | null
  discountPercentage?: number
  discountDuration?: number | null
  discountUsed?: number | null
  createdAt?: Date
  updatedAt?: Date
}

export type CustomerDiscountsCreationAttributes = Optional<CustomerDiscountsAttributes, "id" | "customerId" | "packageId" | "subId" | "discountPercentage" | "discountDuration" | "discountUsed" | "createdAt" | "updatedAt">

export class CustomerDiscountsEntity
  extends Model<CustomerDiscountsAttributes, CustomerDiscountsCreationAttributes>
  implements CustomerDiscountsAttributes
{
  declare id: string | number | null
  declare customerId: number | null
  declare packageId: number | null
  declare subId: number | null
  declare discountPercentage: number
  declare discountDuration: number | null
  declare discountUsed: number | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initCustomerDiscountsEntity(sequelize: Sequelize): typeof CustomerDiscountsEntity {
  CustomerDiscountsEntity.init(
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
        type: DataTypes.TEXT,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
      },
      packageId: {
        type: DataTypes.TEXT,
        field: 'package_id',
        allowNull: true,
        references: { model: 'packages', key: 'id' },
      },
      subId: {
        type: DataTypes.TEXT,
        field: 'sub_id',
        allowNull: true,
        references: { model: 'subs', key: 'id' },
      },
      discountPercentage: {
        type: DataTypes.DECIMAL(10, 2),
        field: 'discount_percentage',
        allowNull: false,
        defaultValue: 0.00,
      },
      discountDuration: {
        type: DataTypes.TEXT,
        field: 'discount_duration',
        allowNull: true,
      },
      discountUsed: {
        type: DataTypes.TEXT,
        field: 'discount_used',
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
      tableName: 'customer_discounts',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] },
      { unique: true, fields: ['customer_id', 'sub_id'] }
      ]
    }
  )
  return CustomerDiscountsEntity
}
