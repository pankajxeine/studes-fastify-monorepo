import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentReconciliationItemAttributes = {
  recordCode?: string
  reconciliationItemId: string | null
  reconciliationBatchId: string
  gatewayPaymentRef: string
  paymentId?: string | null
  amount: string
  feeAmount?: string
  status: string
  note?: string | null
}

export type PaymentReconciliationItemCreationAttributes = Optional<PaymentReconciliationItemAttributes, "recordCode" | "paymentId" | "feeAmount" | "note">

export class PaymentReconciliationItemEntity
  extends Model<PaymentReconciliationItemAttributes, PaymentReconciliationItemCreationAttributes>
  implements PaymentReconciliationItemAttributes
{
  declare recordCode: string
  declare reconciliationItemId: string | null
  declare reconciliationBatchId: string
  declare gatewayPaymentRef: string
  declare paymentId: string | null
  declare amount: string
  declare feeAmount: string
  declare status: string
  declare note: string | null
}

export function initPaymentReconciliationItemEntity(sequelize: Sequelize): typeof PaymentReconciliationItemEntity {
  PaymentReconciliationItemEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_reconciliation_item')"),
      },
      reconciliationItemId: {
        type: DataTypes.TEXT,
        field: 'reconciliation_item_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      reconciliationBatchId: {
        type: DataTypes.TEXT,
        field: 'reconciliation_batch_id',
        allowNull: false,
        references: { model: 'payment_reconciliation_batch', key: 'reconciliation_batch_id' },
        onDelete: 'CASCADE',
      },
      gatewayPaymentRef: {
        type: DataTypes.STRING(100),
        field: 'gateway_payment_ref',
        allowNull: false,
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: true,
        references: { model: 'payment_payment', key: 'payment_id' },
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
      status: {
        type: DataTypes.STRING(22),
        field: 'status',
        allowNull: false,
      },
      note: {
        type: DataTypes.TEXT,
        field: 'note',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'payment_reconciliation_item',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['reconciliation_batch_id', 'gateway_payment_ref'] }
      ]
    }
  )
  return PaymentReconciliationItemEntity
}
