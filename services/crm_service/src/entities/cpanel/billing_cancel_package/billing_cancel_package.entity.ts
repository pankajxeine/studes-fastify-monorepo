import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingCancelPackageAttributes = {
  id?: string | number | null
  subId?: number | null
  subStoreId?: number | null
  customerId?: number | null
  featureId?: number | null
  item?: string | null
  price?: number | null
  pricePerMonth?: number | null
  costPrice?: number | null
  type?: string | null
  cancelDate?: Date | null
  billingDate?: Date | null
  expiryDate?: Date | null
  trialPeriodDays?: number
  description?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type BillingCancelPackageCreationAttributes = Optional<BillingCancelPackageAttributes, "id" | "subId" | "subStoreId" | "customerId" | "featureId" | "item" | "price" | "pricePerMonth" | "costPrice" | "type" | "cancelDate" | "billingDate" | "expiryDate" | "trialPeriodDays" | "description" | "createdAt" | "updatedAt">

export class BillingCancelPackageEntity
  extends Model<BillingCancelPackageAttributes, BillingCancelPackageCreationAttributes>
  implements BillingCancelPackageAttributes
{
  declare id: string | number | null
  declare subId: number | null
  declare subStoreId: number | null
  declare customerId: number | null
  declare featureId: number | null
  declare item: string | null
  declare price: number | null
  declare pricePerMonth: number | null
  declare costPrice: number | null
  declare type: string | null
  declare cancelDate: Date | null
  declare billingDate: Date | null
  declare expiryDate: Date | null
  declare trialPeriodDays: number
  declare description: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initBillingCancelPackageEntity(sequelize: Sequelize): typeof BillingCancelPackageEntity {
  BillingCancelPackageEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subId: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: true,
        references: { model: 'subs', key: 'id' },
      },
      subStoreId: {
        type: DataTypes.INTEGER,
        field: 'sub_store_id',
        allowNull: true,
        defaultValue: "0",
      },
      customerId: {
        type: DataTypes.INTEGER,
        field: 'customer_id',
        allowNull: true,
        references: { model: 'customers', key: 'id' },
      },
      featureId: {
        type: DataTypes.INTEGER,
        field: 'feature_id',
        allowNull: true,
      },
      item: {
        type: DataTypes.STRING(100),
        field: 'item',
        allowNull: true,
      },
      price: {
        type: DataTypes.DECIMAL(15, 3),
        field: 'price',
        allowNull: true,
      },
      pricePerMonth: {
        type: DataTypes.DECIMAL(15, 3),
        field: 'price_per_month',
        allowNull: true,
      },
      costPrice: {
        type: DataTypes.DECIMAL(15, 3),
        field: 'cost_price',
        allowNull: true,
      },
      type: {
        type: DataTypes.TEXT,
        field: 'type',
        allowNull: true,
      },
      cancelDate: {
        type: DataTypes.DATE,
        field: 'cancel_date',
        allowNull: true,
      },
      billingDate: {
        type: DataTypes.DATE,
        field: 'billing_date',
        allowNull: true,
      },
      expiryDate: {
        type: DataTypes.DATE,
        field: 'expiry_date',
        allowNull: true,
      },
      trialPeriodDays: {
        type: DataTypes.INTEGER,
        field: 'trial_period_days',
        allowNull: false,
        defaultValue: "0",
      },
      description: {
        type: DataTypes.STRING(256),
        field: 'description',
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
      tableName: 'billing_cancel_package',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return BillingCancelPackageEntity
}
