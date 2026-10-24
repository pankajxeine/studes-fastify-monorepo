import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnWalletAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  walletId?: string
  personId: string
  balanceAmount?: string
  dailyLimitAmount?: string | null
  lowBalanceAlertAmount?: string | null
  status?: string
  frozenAt?: Date | null
  frozenReason?: string | null
  frozenByUserId?: string | null
  openedOn?: string
  lastTxnAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnWalletCreationAttributes = Optional<CntnWalletAttributes, "id" | "publicId" | "recordCode" | "walletId" | "balanceAmount" | "dailyLimitAmount" | "lowBalanceAlertAmount" | "status" | "frozenAt" | "frozenReason" | "frozenByUserId" | "openedOn" | "lastTxnAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnWalletEntity
  extends Model<CntnWalletAttributes, CntnWalletCreationAttributes>
  implements CntnWalletAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare walletId: string
  declare personId: string
  declare balanceAmount: string
  declare dailyLimitAmount: string | null
  declare lowBalanceAlertAmount: string | null
  declare status: string
  declare frozenAt: Date | null
  declare frozenReason: string | null
  declare frozenByUserId: string | null
  declare openedOn: string
  declare lastTxnAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnWalletEntity(sequelize: Sequelize): typeof CntnWalletEntity {
  CntnWalletEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('cntn_wallet')"),
      },
      walletId: {
        type: DataTypes.TEXT,
        field: 'wallet_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      balanceAmount: {
        type: DataTypes.TEXT,
        field: 'balance_amount',
        allowNull: false,
        defaultValue: 0,
      },
      dailyLimitAmount: {
        type: DataTypes.TEXT,
        field: 'daily_limit_amount',
        allowNull: true,
      },
      lowBalanceAlertAmount: {
        type: DataTypes.TEXT,
        field: 'low_balance_alert_amount',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      frozenAt: {
        type: DataTypes.DATE,
        field: 'frozen_at',
        allowNull: true,
      },
      frozenReason: {
        type: DataTypes.TEXT,
        field: 'frozen_reason',
        allowNull: true,
      },
      frozenByUserId: {
        type: DataTypes.TEXT,
        field: 'frozen_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      openedOn: {
        type: DataTypes.TEXT,
        field: 'opened_on',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      lastTxnAt: {
        type: DataTypes.DATE,
        field: 'last_txn_at',
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
      tableName: 'cntn_wallet',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['person_id'] },
      { unique: true, fields: ['wallet_id', 'person_id'] }
      ]
    }
  )
  return CntnWalletEntity
}
