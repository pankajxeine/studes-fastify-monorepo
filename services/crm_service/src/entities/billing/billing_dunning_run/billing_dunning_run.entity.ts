import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingDunningRunAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  dunningRunId?: string
  invoiceId: string
  stepNo: number
  action: string
  executedAt?: Date
  result?: string | null
}

export type BillingDunningRunCreationAttributes = Optional<BillingDunningRunAttributes, "id" | "publicId" | "recordCode" | "dunningRunId" | "executedAt" | "result">

export class BillingDunningRunEntity
  extends Model<BillingDunningRunAttributes, BillingDunningRunCreationAttributes>
  implements BillingDunningRunAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare dunningRunId: string
  declare invoiceId: string
  declare stepNo: number
  declare action: string
  declare executedAt: Date
  declare result: string | null
}

export function initBillingDunningRunEntity(sequelize: Sequelize): typeof BillingDunningRunEntity {
  BillingDunningRunEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_dunning_run')"),
      },
      dunningRunId: {
        type: DataTypes.TEXT,
        field: 'dunning_run_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      invoiceId: {
        type: DataTypes.TEXT,
        field: 'invoice_id',
        allowNull: false,
        references: { model: 'billing_invoice', key: 'invoice_id' },
      },
      stepNo: {
        type: DataTypes.SMALLINT,
        field: 'step_no',
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING(14),
        field: 'action',
        allowNull: false,
      },
      executedAt: {
        type: DataTypes.DATE,
        field: 'executed_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      result: {
        type: DataTypes.TEXT,
        field: 'result',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'billing_dunning_run',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['invoice_id', 'step_no'] }
      ]
    }
  )
  return BillingDunningRunEntity
}
