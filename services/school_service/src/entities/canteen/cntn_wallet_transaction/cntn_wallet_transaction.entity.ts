import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnWalletTransactionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  walletTransactionId?: string
  walletId: string
  txnType: string
  txnAmount: number
  balanceAfterAmount?: string
  paymentId?: string | null
  canteenOrderId?: string | null
  reversesWalletTransactionId?: string | null
  txnAt?: Date
  description?: string | null
  performedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
}

export type CntnWalletTransactionCreationAttributes = Optional<CntnWalletTransactionAttributes, "id" | "publicId" | "recordCode" | "walletTransactionId" | "balanceAfterAmount" | "paymentId" | "canteenOrderId" | "reversesWalletTransactionId" | "txnAt" | "description" | "performedByUserId" | "createdAt" | "createdBy">

export class CntnWalletTransactionEntity
  extends Model<CntnWalletTransactionAttributes, CntnWalletTransactionCreationAttributes>
  implements CntnWalletTransactionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare walletTransactionId: string
  declare walletId: string
  declare txnType: string
  declare txnAmount: number
  declare balanceAfterAmount: string
  declare paymentId: string | null
  declare canteenOrderId: string | null
  declare reversesWalletTransactionId: string | null
  declare txnAt: Date
  declare description: string | null
  declare performedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initCntnWalletTransactionEntity(sequelize: Sequelize): typeof CntnWalletTransactionEntity {
  CntnWalletTransactionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_wallet_transaction')"),
      },
      walletTransactionId: {
        type: DataTypes.TEXT,
        field: 'wallet_transaction_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      walletId: {
        type: DataTypes.TEXT,
        field: 'wallet_id',
        allowNull: false,
        references: { model: 'cntn_wallet', key: 'wallet_id' },
      },
      txnType: {
        type: DataTypes.TEXT,
        field: 'txn_type',
        allowNull: false,
      },
      txnAmount: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'txn_amount',
        allowNull: false,
      },
      balanceAfterAmount: {
        type: DataTypes.TEXT,
        field: 'balance_after_amount',
        allowNull: false,
        defaultValue: 0,
      },
      paymentId: {
        type: DataTypes.TEXT,
        field: 'payment_id',
        allowNull: true,
        references: { model: 'fin_payment', key: 'payment_id' },
      },
      canteenOrderId: {
        type: DataTypes.UUID,
        field: 'canteen_order_id',
        allowNull: true,
        references: { model: 'cntn_canteen_order', key: 'canteen_order_id' },
      },
      reversesWalletTransactionId: {
        type: DataTypes.TEXT,
        field: 'reverses_wallet_transaction_id',
        allowNull: true,
        references: { model: 'cntn_wallet_transaction', key: 'wallet_transaction_id' },
      },
      txnAt: {
        type: DataTypes.DATE,
        field: 'txn_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      performedByUserId: {
        type: DataTypes.TEXT,
        field: 'performed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      }
    },
    {
      sequelize,
      tableName: 'cntn_wallet_transaction',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CntnWalletTransactionEntity
}
