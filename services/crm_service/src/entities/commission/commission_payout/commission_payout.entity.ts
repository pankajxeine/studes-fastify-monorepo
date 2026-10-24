import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommissionPayoutAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  payoutId?: string
  salesAgentId: string
  periodStart: string
  periodEnd: string
  currencyCode: string
  grossAmount?: string
  taxWithheld?: string
  netAmount?: string | null
  status?: string
  approvedByUserId?: string | null
  approvedAt?: Date | null
  paidAt?: Date | null
  paymentRef?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommissionPayoutCreationAttributes = Optional<CommissionPayoutAttributes, "id" | "publicId" | "recordCode" | "payoutId" | "grossAmount" | "taxWithheld" | "netAmount" | "status" | "approvedByUserId" | "approvedAt" | "paidAt" | "paymentRef" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommissionPayoutEntity
  extends Model<CommissionPayoutAttributes, CommissionPayoutCreationAttributes>
  implements CommissionPayoutAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare payoutId: string
  declare salesAgentId: string
  declare periodStart: string
  declare periodEnd: string
  declare currencyCode: string
  declare grossAmount: string
  declare taxWithheld: string
  declare netAmount: string | null
  declare status: string
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare paidAt: Date | null
  declare paymentRef: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommissionPayoutEntity(sequelize: Sequelize): typeof CommissionPayoutEntity {
  CommissionPayoutEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commission_payout')"),
      },
      payoutId: {
        type: DataTypes.TEXT,
        field: 'payout_id',
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
      periodStart: {
        type: DataTypes.TEXT,
        field: 'period_start',
        allowNull: false,
      },
      periodEnd: {
        type: DataTypes.TEXT,
        field: 'period_end',
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
        defaultValue: 0,
      },
      taxWithheld: {
        type: DataTypes.TEXT,
        field: 'tax_withheld',
        allowNull: false,
        defaultValue: 0,
      },
      netAmount: {
        type: DataTypes.TEXT,
        field: 'net_amount',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
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
      paidAt: {
        type: DataTypes.DATE,
        field: 'paid_at',
        allowNull: true,
      },
      paymentRef: {
        type: DataTypes.STRING(100),
        field: 'payment_ref',
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
      tableName: 'commission_payout',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['sales_agent_id', 'period_start', 'currency_code'] }
      ]
    }
  )
  return CommissionPayoutEntity
}
