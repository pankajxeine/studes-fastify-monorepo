import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommissionCommissionRuleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  commissionRuleId?: string
  commissionPlanId: string
  hierarchyDepth?: number
  applicationId?: string | null
  planId?: string | null
  lineTypes?: string
  fromMonth?: number
  toMonth?: number | null
  ratePercent: string
  priority?: number
  createdAt?: Date
  createdBy?: string | null
}

export type CommissionCommissionRuleCreationAttributes = Optional<CommissionCommissionRuleAttributes, "id" | "publicId" | "recordCode" | "commissionRuleId" | "hierarchyDepth" | "applicationId" | "planId" | "lineTypes" | "fromMonth" | "toMonth" | "priority" | "createdAt" | "createdBy">

export class CommissionCommissionRuleEntity
  extends Model<CommissionCommissionRuleAttributes, CommissionCommissionRuleCreationAttributes>
  implements CommissionCommissionRuleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare commissionRuleId: string
  declare commissionPlanId: string
  declare hierarchyDepth: number
  declare applicationId: string | null
  declare planId: string | null
  declare lineTypes: string
  declare fromMonth: number
  declare toMonth: number | null
  declare ratePercent: string
  declare priority: number
  declare createdAt: Date
  declare createdBy: string | null
}

export function initCommissionCommissionRuleEntity(sequelize: Sequelize): typeof CommissionCommissionRuleEntity {
  CommissionCommissionRuleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commission_commission_rule')"),
      },
      commissionRuleId: {
        type: DataTypes.TEXT,
        field: 'commission_rule_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      commissionPlanId: {
        type: DataTypes.TEXT,
        field: 'commission_plan_id',
        allowNull: false,
        references: { model: 'commission_commission_plan', key: 'commission_plan_id' },
        onDelete: 'CASCADE',
      },
      hierarchyDepth: {
        type: DataTypes.SMALLINT,
        field: 'hierarchy_depth',
        allowNull: false,
        defaultValue: 0,
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      planId: {
        type: DataTypes.TEXT,
        field: 'plan_id',
        allowNull: true,
        references: { model: 'commerce_plan', key: 'plan_id' },
      },
      lineTypes: {
        type: DataTypes.TEXT,
        field: 'line_types',
        allowNull: false,
        defaultValue: "{subscription,addon}",
      },
      fromMonth: {
        type: DataTypes.SMALLINT,
        field: 'from_month',
        allowNull: false,
        defaultValue: 1,
      },
      toMonth: {
        type: DataTypes.SMALLINT,
        field: 'to_month',
        allowNull: true,
      },
      ratePercent: {
        type: DataTypes.TEXT,
        field: 'rate_percent',
        allowNull: false,
      },
      priority: {
        type: DataTypes.SMALLINT,
        field: 'priority',
        allowNull: false,
        defaultValue: 100,
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
      tableName: 'commission_commission_rule',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommissionCommissionRuleEntity
}
