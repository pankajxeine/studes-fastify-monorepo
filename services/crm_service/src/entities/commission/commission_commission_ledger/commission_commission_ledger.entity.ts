import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommissionCommissionLedgerAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  entryId?: string
  salesAgentId: string
  entryType: string
  amount: string
  currencyCode: string
  basisAmount?: string | null
  ratePercent?: string | null
  hierarchyDepth?: number | null
  commissionRuleId?: string | null
  invoiceLineId?: string | null
  paymentAllocationId?: string | null
  reversesEntryId?: string | null
  status?: string
  earnedAt?: Date
  approvedByUserId?: string | null
  approvedAt?: Date | null
  payoutId?: string | null
  note?: string | null
  createdAt?: Date
}

export type CommissionCommissionLedgerCreationAttributes = Optional<CommissionCommissionLedgerAttributes, "id" | "publicId" | "recordCode" | "entryId" | "basisAmount" | "ratePercent" | "hierarchyDepth" | "commissionRuleId" | "invoiceLineId" | "paymentAllocationId" | "reversesEntryId" | "status" | "earnedAt" | "approvedByUserId" | "approvedAt" | "payoutId" | "note" | "createdAt">

export class CommissionCommissionLedgerEntity
  extends Model<CommissionCommissionLedgerAttributes, CommissionCommissionLedgerCreationAttributes>
  implements CommissionCommissionLedgerAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare entryId: string
  declare salesAgentId: string
  declare entryType: string
  declare amount: string
  declare currencyCode: string
  declare basisAmount: string | null
  declare ratePercent: string | null
  declare hierarchyDepth: number | null
  declare commissionRuleId: string | null
  declare invoiceLineId: string | null
  declare paymentAllocationId: string | null
  declare reversesEntryId: string | null
  declare status: string
  declare earnedAt: Date
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare payoutId: string | null
  declare note: string | null
  declare createdAt: Date
}

export function initCommissionCommissionLedgerEntity(sequelize: Sequelize): typeof CommissionCommissionLedgerEntity {
  CommissionCommissionLedgerEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commission_commission_ledger')"),
      },
      entryId: {
        type: DataTypes.TEXT,
        field: 'entry_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      salesAgentId: {
        type: DataTypes.TEXT,
        field: 'sales_agent_id',
        allowNull: false,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
      },
      entryType: {
        type: DataTypes.STRING(10),
        field: 'entry_type',
        allowNull: false,
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      basisAmount: {
        type: DataTypes.TEXT,
        field: 'basis_amount',
        allowNull: true,
      },
      ratePercent: {
        type: DataTypes.TEXT,
        field: 'rate_percent',
        allowNull: true,
      },
      hierarchyDepth: {
        type: DataTypes.SMALLINT,
        field: 'hierarchy_depth',
        allowNull: true,
      },
      commissionRuleId: {
        type: DataTypes.TEXT,
        field: 'commission_rule_id',
        allowNull: true,
        references: { model: 'commission_commission_rule', key: 'commission_rule_id' },
      },
      invoiceLineId: {
        type: DataTypes.TEXT,
        field: 'invoice_line_id',
        allowNull: true,
        references: { model: 'billing_invoice_line', key: 'invoice_line_id' },
      },
      paymentAllocationId: {
        type: DataTypes.TEXT,
        field: 'payment_allocation_id',
        allowNull: true,
        references: { model: 'payment_payment_allocation', key: 'payment_allocation_id' },
      },
      reversesEntryId: {
        type: DataTypes.TEXT,
        field: 'reverses_entry_id',
        allowNull: true,
        references: { model: 'commission_commission_ledger', key: 'entry_id' },
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      earnedAt: {
        type: DataTypes.DATE,
        field: 'earned_at',
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
      payoutId: {
        type: DataTypes.TEXT,
        field: 'payout_id',
        allowNull: true,
        references: { model: 'commission_payout', key: 'payout_id' },
      },
      note: {
        type: DataTypes.TEXT,
        field: 'note',
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
      tableName: 'commission_commission_ledger',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommissionCommissionLedgerEntity
}
