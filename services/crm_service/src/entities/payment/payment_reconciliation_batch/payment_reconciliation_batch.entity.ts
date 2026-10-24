import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentReconciliationBatchAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  reconciliationBatchId?: string
  gateway: string
  settlementRef: string
  settlementDate: string
  currencyCode: string
  grossAmount: string
  feeAmount?: string
  netAmount: string
  status?: string
  closedByUserId?: string | null
  closedAt?: Date | null
  createdAt?: Date
}

export type PaymentReconciliationBatchCreationAttributes = Optional<PaymentReconciliationBatchAttributes, "id" | "publicId" | "recordCode" | "reconciliationBatchId" | "feeAmount" | "status" | "closedByUserId" | "closedAt" | "createdAt">

export class PaymentReconciliationBatchEntity
  extends Model<PaymentReconciliationBatchAttributes, PaymentReconciliationBatchCreationAttributes>
  implements PaymentReconciliationBatchAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare reconciliationBatchId: string
  declare gateway: string
  declare settlementRef: string
  declare settlementDate: string
  declare currencyCode: string
  declare grossAmount: string
  declare feeAmount: string
  declare netAmount: string
  declare status: string
  declare closedByUserId: string | null
  declare closedAt: Date | null
  declare createdAt: Date
}

export function initPaymentReconciliationBatchEntity(sequelize: Sequelize): typeof PaymentReconciliationBatchEntity {
  PaymentReconciliationBatchEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_reconciliation_batch')"),
      },
      reconciliationBatchId: {
        type: DataTypes.TEXT,
        field: 'reconciliation_batch_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      gateway: {
        type: DataTypes.STRING(20),
        field: 'gateway',
        allowNull: false,
      },
      settlementRef: {
        type: DataTypes.STRING(100),
        field: 'settlement_ref',
        allowNull: false,
      },
      settlementDate: {
        type: DataTypes.TEXT,
        field: 'settlement_date',
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      grossAmount: {
        type: DataTypes.TEXT,
        field: 'gross_amount',
        allowNull: false,
      },
      feeAmount: {
        type: DataTypes.TEXT,
        field: 'fee_amount',
        allowNull: false,
        defaultValue: 0,
      },
      netAmount: {
        type: DataTypes.TEXT,
        field: 'net_amount',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "open",
      },
      closedByUserId: {
        type: DataTypes.TEXT,
        field: 'closed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'payment_reconciliation_batch',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['gateway', 'settlement_ref'] }
      ]
    }
  )
  return PaymentReconciliationBatchEntity
}
