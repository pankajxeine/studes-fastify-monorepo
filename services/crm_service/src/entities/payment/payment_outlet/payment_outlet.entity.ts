import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentOutletAttributes = {
  recordCode?: string
  outletId: string | null
  tenantApplicationId: string
  outletCode: string
  name: string
  timezone?: string
  isActive?: string
  createdAt?: Date
  updatedAt?: Date
}

export type PaymentOutletCreationAttributes = Optional<PaymentOutletAttributes, "recordCode" | "timezone" | "isActive" | "createdAt" | "updatedAt">

export class PaymentOutletEntity
  extends Model<PaymentOutletAttributes, PaymentOutletCreationAttributes>
  implements PaymentOutletAttributes
{
  declare recordCode: string
  declare outletId: string | null
  declare tenantApplicationId: string
  declare outletCode: string
  declare name: string
  declare timezone: string
  declare isActive: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPaymentOutletEntity(sequelize: Sequelize): typeof PaymentOutletEntity {
  PaymentOutletEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_outlet')"),
      },
      outletId: {
        type: DataTypes.TEXT,
        field: 'outlet_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      outletCode: {
        type: DataTypes.TEXT,
        field: 'outlet_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: false,
        defaultValue: "UTC",
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'payment_outlet',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'outlet_code'] },
      { unique: true, fields: ['tenant_application_id', 'outlet_id'] }
      ]
    }
  )
  return PaymentOutletEntity
}
