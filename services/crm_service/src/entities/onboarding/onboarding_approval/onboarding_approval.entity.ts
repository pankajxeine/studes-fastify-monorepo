import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OnboardingApprovalAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  requestId: string
  stepNo: number
  approverRoleCode: string
  decision?: string
  decidedByUserId?: string | null
  decidedAt?: Date | null
  comment?: string | null
  UNIQUE?: string | null
}

export type OnboardingApprovalCreationAttributes = Optional<OnboardingApprovalAttributes, "id" | "publicId" | "recordCode" | "decision" | "decidedByUserId" | "decidedAt" | "comment" | "UNIQUE">

export class OnboardingApprovalEntity
  extends Model<OnboardingApprovalAttributes, OnboardingApprovalCreationAttributes>
  implements OnboardingApprovalAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare requestId: string
  declare stepNo: number
  declare approverRoleCode: string
  declare decision: string
  declare decidedByUserId: string | null
  declare decidedAt: Date | null
  declare comment: string | null
  declare UNIQUE: string | null
}

export function initOnboardingApprovalEntity(sequelize: Sequelize): typeof OnboardingApprovalEntity {
  OnboardingApprovalEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('onboarding_approval')"),
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: false,
        references: { model: 'onboarding_onboarding_request', key: 'request_id' },
        onDelete: 'CASCADE',
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
      decision: {
        type: DataTypes.STRING(10),
        field: 'decision',
        allowNull: false,
        defaultValue: "pending",
      },
      decidedByUserId: {
        type: DataTypes.TEXT,
        field: 'decided_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
        allowNull: true,
      },
      comment: {
        type: DataTypes.TEXT,
        field: 'comment',
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
      tableName: 'onboarding_approval',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return OnboardingApprovalEntity
}
