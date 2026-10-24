import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type FinRefundAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  refundId?: string
  refundNo: string
  paymentId: string
  invoiceId?: string | null
  amount: string
  reason: string
  status?: string
  refundMethod: string
  referenceNo?: string | null
  requestedByUserId?: string | null
  requestedAt?: Date
  approvedByUserId?: string | null
  approvedAt?: Date | null
  processedByUserId?: string | null
  processedAt?: Date | null
  rejectionReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type FinRefundCreationAttributes = Optional<FinRefundAttributes, "id" | "publicId" | "recordCode" | "refundId" | "invoiceId" | "status" | "referenceNo" | "requestedByUserId" | "requestedAt" | "approvedByUserId" | "approvedAt" | "processedByUserId" | "processedAt" | "rejectionReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class FinRefundEntity
  extends Model<FinRefundAttributes, FinRefundCreationAttributes>
  implements FinRefundAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare refundId: string
  declare refundNo: string
  declare paymentId: string
  declare invoiceId: string | null
  declare amount: string
  declare reason: string
  declare status: string
  declare refundMethod: string
  declare referenceNo: string | null
  declare requestedByUserId: string | null
  declare requestedAt: Date
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare processedByUserId: string | null
  declare processedAt: Date | null
  declare rejectionReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initFinRefundEntity(sequelize: Sequelize): typeof FinRefundEntity {
  FinRefundEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('fin_refund')"),
      },
      refundId: {
        type: DataTypes.TEXT,
        field: 'refund_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      refundNo: {
        type: DataTypes.STRING(30),
        field: 'refund_no',
        allowNull: false,
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: false,
        references: { model: 'fin_payment', key: 'payment_id' },
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: true,
        references: { model: 'fin_invoice', key: 'invoice_id' },
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
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "requested",
      },
      refundMethod: {
        type: DataTypes.TEXT,
        field: 'refund_method',
        allowNull: false,
      },
      referenceNo: {
        type: DataTypes.STRING(80),
        field: 'reference_no',
        allowNull: true,
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      requestedAt: {
        type: DataTypes.DATE,
        field: 'requested_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      processedByUserId: {
        type: DataTypes.TEXT,
        field: 'processed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      processedAt: {
        type: DataTypes.DATE,
        field: 'processed_at',
        allowNull: true,
      },
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
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
      tableName: 'fin_refund',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['refund_no'] }
      ]
    }
  )
  return FinRefundEntity
}
