import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentRefundAttributes = {
  recordCode?: string
  refundId: string | null
  paymentId: string
  amount: string
  reason: string
  status?: string
  requestedByUserId: string
  approvedByUserId?: string | null
  approvedAt?: Date | null
  gatewayRefundRef?: string | null
  processedAt?: Date | null
  failureMessage?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export type PaymentRefundCreationAttributes = Optional<PaymentRefundAttributes, "recordCode" | "status" | "approvedByUserId" | "approvedAt" | "gatewayRefundRef" | "processedAt" | "failureMessage" | "createdAt" | "updatedAt">

export class PaymentRefundEntity
  extends Model<PaymentRefundAttributes, PaymentRefundCreationAttributes>
  implements PaymentRefundAttributes
{
  declare recordCode: string
  declare refundId: string | null
  declare paymentId: string
  declare amount: string
  declare reason: string
  declare status: string
  declare requestedByUserId: string
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare gatewayRefundRef: string | null
  declare processedAt: Date | null
  declare failureMessage: string | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPaymentRefundEntity(sequelize: Sequelize): typeof PaymentRefundEntity {
  PaymentRefundEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_refund')"),
      },
      refundId: {
        type: DataTypes.TEXT,
        field: 'refund_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: false,
        references: { model: 'payment_payment', key: 'payment_id' },
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "requested",
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      gatewayRefundRef: {
        type: DataTypes.STRING(100),
        field: 'gateway_refund_ref',
        allowNull: true,
      },
      processedAt: {
        type: DataTypes.DATE,
        field: 'processed_at',
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'payment_refund',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PaymentRefundEntity
}
