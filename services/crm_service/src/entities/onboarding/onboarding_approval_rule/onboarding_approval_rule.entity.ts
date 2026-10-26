import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OnboardingApprovalRuleAttributes = {
  recordCode?: string
  approvalRuleId: string | null
  stepNo: number
  approverRoleCode: string
  appliesIf: string
  threshold?: number | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
}

export type OnboardingApprovalRuleCreationAttributes = Optional<OnboardingApprovalRuleAttributes, "recordCode" | "threshold" | "isActive" | "createdAt" | "createdBy">

export class OnboardingApprovalRuleEntity
  extends Model<OnboardingApprovalRuleAttributes, OnboardingApprovalRuleCreationAttributes>
  implements OnboardingApprovalRuleAttributes
{
  declare recordCode: string
  declare approvalRuleId: string | null
  declare stepNo: number
  declare approverRoleCode: string
  declare appliesIf: string
  declare threshold: number | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
}

export function initOnboardingApprovalRuleEntity(sequelize: Sequelize): typeof OnboardingApprovalRuleEntity {
  OnboardingApprovalRuleEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('onboarding_approval_rule')"),
      },
      approvalRuleId: {
        type: DataTypes.TEXT,
        field: 'approval_rule_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      stepNo: {
        type: DataTypes.SMALLINT,
        field: 'step_no',
        allowNull: false,
      },
      approverRoleCode: {
        type: DataTypes.TEXT,
        field: 'approver_role_code',
        allowNull: false,
        references: { model: 'iam_role', key: 'role_code' },
        onUpdate: 'CASCADE',
      },
      appliesIf: {
        type: DataTypes.STRING(20),
        field: 'applies_if',
        allowNull: false,
      },
      threshold: {
        type: DataTypes.DECIMAL(18, 4),
        field: 'threshold',
        allowNull: true,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'onboarding_approval_rule',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return OnboardingApprovalRuleEntity
}
