import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentPaymentMethodAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  paymentMethodId?: string
  billingAccountId: string
  gateway: string
  gatewayCustomerRef: string
  gatewayMethodRef: string
  methodType: string
  brand?: string | null
  last4?: string | null
  expMonth?: number | null
  expYear?: number | null
  fingerprint?: string | null
  isDefault?: string
  status?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PaymentPaymentMethodCreationAttributes = Optional<PaymentPaymentMethodAttributes, "id" | "publicId" | "recordCode" | "paymentMethodId" | "brand" | "last4" | "expMonth" | "expYear" | "fingerprint" | "isDefault" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PaymentPaymentMethodEntity
  extends Model<PaymentPaymentMethodAttributes, PaymentPaymentMethodCreationAttributes>
  implements PaymentPaymentMethodAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare paymentMethodId: string
  declare billingAccountId: string
  declare gateway: string
  declare gatewayCustomerRef: string
  declare gatewayMethodRef: string
  declare methodType: string
  declare brand: string | null
  declare last4: string | null
  declare expMonth: number | null
  declare expYear: number | null
  declare fingerprint: string | null
  declare isDefault: string
  declare status: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPaymentPaymentMethodEntity(sequelize: Sequelize): typeof PaymentPaymentMethodEntity {
  PaymentPaymentMethodEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_payment_method')"),
      },
      paymentMethodId: {
        type: DataTypes.TEXT,
        field: 'payment_method_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      billingAccountId: {
        type: DataTypes.TEXT,
        field: 'billing_account_id',
        allowNull: false,
        references: { model: 'billing_billing_account', key: 'billing_account_id' },
      },
      gateway: {
        type: DataTypes.STRING(20),
        field: 'gateway',
        allowNull: false,
      },
      gatewayCustomerRef: {
        type: DataTypes.STRING(100),
        field: 'gateway_customer_ref',
        allowNull: false,
      },
      gatewayMethodRef: {
        type: DataTypes.STRING(100),
        field: 'gateway_method_ref',
        allowNull: false,
      },
      methodType: {
        type: DataTypes.STRING(14),
        field: 'method_type',
        allowNull: false,
      },
      brand: {
        type: DataTypes.STRING(20),
        field: 'brand',
        allowNull: true,
      },
      last4: {
        type: DataTypes.CHAR(4),
        field: 'last4',
        allowNull: true,
      },
      expMonth: {
        type: DataTypes.SMALLINT,
        field: 'exp_month',
        allowNull: true,
      },
      expYear: {
        type: DataTypes.SMALLINT,
        field: 'exp_year',
        allowNull: true,
      },
      fingerprint: {
        type: DataTypes.STRING(64),
        field: 'fingerprint',
        allowNull: true,
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: DataTypes.STRING(8),
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'payment_payment_method',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['gateway', 'gateway_method_ref'] }
      ]
    }
  )
  return PaymentPaymentMethodEntity
}
