import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommissionAgentPlanAssignmentAttributes = {
  recordCode?: string
  agentPlanAssignmentId: string | null
  salesAgentId: string
  commissionPlanId: string
  validFrom: string
  validTo?: Date | null
  createdAt?: Date
  createdBy?: string | null
}

export type CommissionAgentPlanAssignmentCreationAttributes = Optional<CommissionAgentPlanAssignmentAttributes, "recordCode" | "validTo" | "createdAt" | "createdBy">

export class CommissionAgentPlanAssignmentEntity
  extends Model<CommissionAgentPlanAssignmentAttributes, CommissionAgentPlanAssignmentCreationAttributes>
  implements CommissionAgentPlanAssignmentAttributes
{
  declare recordCode: string
  declare agentPlanAssignmentId: string | null
  declare salesAgentId: string
  declare commissionPlanId: string
  declare validFrom: string
  declare validTo: Date | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initCommissionAgentPlanAssignmentEntity(sequelize: Sequelize): typeof CommissionAgentPlanAssignmentEntity {
  CommissionAgentPlanAssignmentEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'commission_agent_plan_assignment'\r\n    )"),
      },
      agentPlanAssignmentId: {
        type: DataTypes.TEXT,
        field: 'agent_plan_assignment_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      salesAgentId: {
        type: DataTypes.TEXT,
        field: 'sales_agent_id',
        allowNull: false,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
      },
      commissionPlanId: {
        type: DataTypes.TEXT,
        field: 'commission_plan_id',
        allowNull: false,
        references: { model: 'commission_commission_plan', key: 'commission_plan_id' },
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
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
      }
    },
    {
      sequelize,
      tableName: 'commission_agent_plan_assignment',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['sales_agent_id', 'valid_from'] }
      ]
    }
  )
  return CommissionAgentPlanAssignmentEntity
}
