import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OnboardingApprovalRuleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  approvalRuleId?: string
  stepNo: number
  approverRoleCode: string
  appliesIf: string
  threshold?: number | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
}

export type OnboardingApprovalRuleCreationAttributes = Optional<OnboardingApprovalRuleAttributes, "id" | "publicId" | "recordCode" | "approvalRuleId" | "threshold" | "isActive" | "createdAt" | "createdBy">

export class OnboardingApprovalRuleEntity
  extends Model<OnboardingApprovalRuleAttributes, OnboardingApprovalRuleCreationAttributes>
  implements OnboardingApprovalRuleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare approvalRuleId: string
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('onboarding_approval_rule')"),
      },
      approvalRuleId: {
        type: DataTypes.TEXT,
        field: 'approval_rule_id',
        allowNull: false,
        unique: true,
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
