import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingDunningStepAttributes = {
  recordCode?: string
  dunningStepId: string | null
  dunningPolicyId: string
  stepNo: number
  daysAfterDue: number
  action: string
  templateCode?: string | null
  graceDays?: number | null
}

export type BillingDunningStepCreationAttributes = Optional<BillingDunningStepAttributes, "recordCode" | "templateCode" | "graceDays">

export class BillingDunningStepEntity
  extends Model<BillingDunningStepAttributes, BillingDunningStepCreationAttributes>
  implements BillingDunningStepAttributes
{
  declare recordCode: string
  declare dunningStepId: string | null
  declare dunningPolicyId: string
  declare stepNo: number
  declare daysAfterDue: number
  declare action: string
  declare templateCode: string | null
  declare graceDays: number | null
}

export function initBillingDunningStepEntity(sequelize: Sequelize): typeof BillingDunningStepEntity {
  BillingDunningStepEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_dunning_step')"),
      },
      dunningStepId: {
        type: DataTypes.TEXT,
        field: 'dunning_step_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      dunningPolicyId: {
        type: DataTypes.TEXT,
        field: 'dunning_policy_id',
        allowNull: false,
        references: { model: 'billing_dunning_policy', key: 'dunning_policy_id' },
        onDelete: 'CASCADE',
      },
      stepNo: {
        type: DataTypes.SMALLINT,
        field: 'step_no',
        allowNull: false,
      },
      daysAfterDue: {
        type: DataTypes.SMALLINT,
        field: 'days_after_due',
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING(14),
        field: 'action',
        allowNull: false,
      },
      templateCode: {
        type: DataTypes.TEXT,
        field: 'template_code',
        allowNull: true,
      },
      graceDays: {
        type: DataTypes.SMALLINT,
        field: 'grace_days',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'billing_dunning_step',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['dunning_policy_id', 'step_no'] }
      ]
    }
  )
  return BillingDunningStepEntity
}
