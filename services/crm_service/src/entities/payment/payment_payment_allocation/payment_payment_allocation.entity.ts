import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentPaymentAllocationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  paymentAllocationId?: string
  paymentId: string
  invoiceId: string
  amount: string
  reversalOfId?: string | null
  allocatedAt?: Date
  allocatedBy?: string | null
}

export type PaymentPaymentAllocationCreationAttributes = Optional<PaymentPaymentAllocationAttributes, "id" | "publicId" | "recordCode" | "paymentAllocationId" | "reversalOfId" | "allocatedAt" | "allocatedBy">

export class PaymentPaymentAllocationEntity
  extends Model<PaymentPaymentAllocationAttributes, PaymentPaymentAllocationCreationAttributes>
  implements PaymentPaymentAllocationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare paymentAllocationId: string
  declare paymentId: string
  declare invoiceId: string
  declare amount: string
  declare reversalOfId: string | null
  declare allocatedAt: Date
  declare allocatedBy: string | null
}

export function initPaymentPaymentAllocationEntity(sequelize: Sequelize): typeof PaymentPaymentAllocationEntity {
  PaymentPaymentAllocationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_payment_allocation')"),
      },
      paymentAllocationId: {
        type: DataTypes.TEXT,
        field: 'payment_allocation_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: false,
        references: { model: 'payment_payment', key: 'payment_id' },
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        references: { model: 'billing_invoice', key: 'invoice_id' },
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      reversalOfId: {
        type: DataTypes.TEXT,
        field: 'reversal_of_id',
        allowNull: true,
        references: { model: 'payment_payment_allocation', key: 'payment_allocation_id' },
      },
      allocatedAt: {
        type: DataTypes.DATE,
        field: 'allocated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      allocatedBy: {
        type: DataTypes.UUID,
        field: 'allocated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'payment_payment_allocation',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return PaymentPaymentAllocationEntity
}
