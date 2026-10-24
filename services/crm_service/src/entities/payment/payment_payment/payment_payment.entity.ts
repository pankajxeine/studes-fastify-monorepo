import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentPaymentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  paymentId?: string
  paymentNumber?: string
  billingAccountId: string
  paymentMethodId?: string | null
  gateway: string
  gatewayPaymentRef?: string | null
  idempotencyKey: string
  methodType: string
  currencyCode: string
  amount: string
  feeAmount?: string
  amountRefunded?: string
  status?: string
  receivedAt?: Date
  capturedAt?: Date | null
  failureCode?: string | null
  failureMessage?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PaymentPaymentCreationAttributes = Optional<PaymentPaymentAttributes, "id" | "publicId" | "recordCode" | "paymentId" | "paymentNumber" | "paymentMethodId" | "gatewayPaymentRef" | "feeAmount" | "amountRefunded" | "status" | "receivedAt" | "capturedAt" | "failureCode" | "failureMessage" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PaymentPaymentEntity
  extends Model<PaymentPaymentAttributes, PaymentPaymentCreationAttributes>
  implements PaymentPaymentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare paymentId: string
  declare paymentNumber: string
  declare billingAccountId: string
  declare paymentMethodId: string | null
  declare gateway: string
  declare gatewayPaymentRef: string | null
  declare idempotencyKey: string
  declare methodType: string
  declare currencyCode: string
  declare amount: string
  declare feeAmount: string
  declare amountRefunded: string
  declare status: string
  declare receivedAt: Date
  declare capturedAt: Date | null
  declare failureCode: string | null
  declare failureMessage: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPaymentPaymentEntity(sequelize: Sequelize): typeof PaymentPaymentEntity {
  PaymentPaymentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_payment')"),
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      paymentNumber: {
        type: DataTypes.STRING(20),
        field: 'payment_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'PAY-' || lpad(\r\n        nextval('payment_payment_number_seq')::text,\r\n        8,\r\n        '0'\r\n    )"),
      },
      billingAccountId: {
        type: DataTypes.TEXT,
        field: 'billing_account_id',
        allowNull: false,
        references: { model: 'billing_billing_account', key: 'billing_account_id' },
      },
      paymentMethodId: {
        type: DataTypes.TEXT,
        field: 'payment_method_id',
        allowNull: true,
        references: { model: 'payment_payment_method', key: 'payment_method_id' },
      },
      gateway: {
        type: DataTypes.STRING(20),
        field: 'gateway',
        allowNull: false,
      },
      gatewayPaymentRef: {
        type: DataTypes.STRING(100),
        field: 'gateway_payment_ref',
        allowNull: true,
      },
      idempotencyKey: {
        type: DataTypes.STRING(100),
        field: 'idempotency_key',
        allowNull: false,
      },
      methodType: {
        type: DataTypes.STRING(14),
        field: 'method_type',
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      feeAmount: {
        type: DataTypes.TEXT,
        field: 'fee_amount',
        allowNull: false,
        defaultValue: 0,
      },
      amountRefunded: {
        type: DataTypes.TEXT,
        field: 'amount_refunded',
        allowNull: false,
        defaultValue: 0,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      receivedAt: {
        type: DataTypes.DATE,
        field: 'received_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      capturedAt: {
        type: DataTypes.DATE,
        field: 'captured_at',
        allowNull: true,
      },
      failureCode: {
        type: DataTypes.STRING(40),
        field: 'failure_code',
        allowNull: true,
      },
      failureMessage: {
        type: DataTypes.TEXT,
        field: 'failure_message',
        allowNull: true,
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
      tableName: 'payment_payment',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['payment_number'] },
      { unique: true, fields: ['idempotency_key'] },
      { unique: true, fields: ['gateway', 'gateway_payment_ref'] }
      ]
    }
  )
  return PaymentPaymentEntity
}
