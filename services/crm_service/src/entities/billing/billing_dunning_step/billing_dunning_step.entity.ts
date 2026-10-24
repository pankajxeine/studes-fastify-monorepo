import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingDunningStepAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  dunningPolicyId: string
  stepNo: number
  daysAfterDue: number
  action: string
  templateCode?: string | null
  graceDays?: number | null
  UNIQUE?: string | null
}

export type BillingDunningStepCreationAttributes = Optional<BillingDunningStepAttributes, "id" | "publicId" | "recordCode" | "templateCode" | "graceDays" | "UNIQUE">

export class BillingDunningStepEntity
  extends Model<BillingDunningStepAttributes, BillingDunningStepCreationAttributes>
  implements BillingDunningStepAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare dunningPolicyId: string
  declare stepNo: number
  declare daysAfterDue: number
  declare action: string
  declare templateCode: string | null
  declare graceDays: number | null
  declare UNIQUE: string | null
}

export function initBillingDunningStepEntity(sequelize: Sequelize): typeof BillingDunningStepEntity {
  BillingDunningStepEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_dunning_step')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'billing_dunning_step',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return BillingDunningStepEntity
}
