import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePlanVersionAttributes = {
  recordCode?: string
  planVersionId: string | null
  planId: string
  versionNo: number
  status?: string
  trialDays?: number
  graceDays?: number | null
  minTermMonths?: number
  slaPolicyId?: string | null
  notes?: string | null
  publishedAt?: Date | null
  publishedByUserId?: string | null
  retiredAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommercePlanVersionCreationAttributes = Optional<CommercePlanVersionAttributes, "recordCode" | "status" | "trialDays" | "graceDays" | "minTermMonths" | "slaPolicyId" | "notes" | "publishedAt" | "publishedByUserId" | "retiredAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommercePlanVersionEntity
  extends Model<CommercePlanVersionAttributes, CommercePlanVersionCreationAttributes>
  implements CommercePlanVersionAttributes
{
  declare recordCode: string
  declare planVersionId: string | null
  declare planId: string
  declare versionNo: number
  declare status: string
  declare trialDays: number
  declare graceDays: number | null
  declare minTermMonths: number
  declare slaPolicyId: string | null
  declare notes: string | null
  declare publishedAt: Date | null
  declare publishedByUserId: string | null
  declare retiredAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommercePlanVersionEntity(sequelize: Sequelize): typeof CommercePlanVersionEntity {
  CommercePlanVersionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_plan_version')"),
      },
      planVersionId: {
        type: DataTypes.TEXT,
        field: 'plan_version_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      planId: {
        type: DataTypes.TEXT,
        field: 'plan_id',
        allowNull: false,
        references: { model: 'commerce_plan', key: 'plan_id' },
      },
      versionNo: {
        type: DataTypes.INTEGER,
        field: 'version_no',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      trialDays: {
        type: DataTypes.SMALLINT,
        field: 'trial_days',
        allowNull: false,
        defaultValue: 0,
      },
      graceDays: {
        type: DataTypes.SMALLINT,
        field: 'grace_days',
        allowNull: true,
      },
      minTermMonths: {
        type: DataTypes.SMALLINT,
        field: 'min_term_months',
        allowNull: false,
        defaultValue: 1,
      },
      slaPolicyId: {
        type: DataTypes.UUID,
        field: 'sla_policy_id',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      publishedByUserId: {
        type: DataTypes.TEXT,
        field: 'published_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      retiredAt: {
        type: DataTypes.DATE,
        field: 'retired_at',
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
      tableName: 'commerce_plan_version',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['plan_id', 'version_no'] }
      ]
    }
  )
  return CommercePlanVersionEntity
}
