import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportEscalationRuleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  escalationRuleId?: string
  queueId?: string | null
  priority?: string | null
  metric: string
  minutesBeforeBreach?: number
  action: string
  targetUserId?: string | null
  targetQueueId?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
}

export type SupportEscalationRuleCreationAttributes = Optional<SupportEscalationRuleAttributes, "id" | "publicId" | "recordCode" | "escalationRuleId" | "queueId" | "priority" | "minutesBeforeBreach" | "targetUserId" | "targetQueueId" | "isActive" | "createdAt" | "createdBy">

export class SupportEscalationRuleEntity
  extends Model<SupportEscalationRuleAttributes, SupportEscalationRuleCreationAttributes>
  implements SupportEscalationRuleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare escalationRuleId: string
  declare queueId: string | null
  declare priority: string | null
  declare metric: string
  declare minutesBeforeBreach: number
  declare action: string
  declare targetUserId: string | null
  declare targetQueueId: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
}

export function initSupportEscalationRuleEntity(sequelize: Sequelize): typeof SupportEscalationRuleEntity {
  SupportEscalationRuleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_escalation_rule')"),
      },
      escalationRuleId: {
        type: DataTypes.TEXT,
        field: 'escalation_rule_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      queueId: {
        type: DataTypes.TEXT,
        field: 'queue_id',
        allowNull: true,
        references: { model: 'support_queue', key: 'queue_id' },
      },
      priority: {
        type: DataTypes.TEXT,
        field: 'priority',
        allowNull: true,
      },
      metric: {
        type: DataTypes.STRING(14),
        field: 'metric',
        allowNull: false,
      },
      minutesBeforeBreach: {
        type: DataTypes.INTEGER,
        field: 'minutes_before_breach',
        allowNull: false,
        defaultValue: 0,
      },
      action: {
        type: DataTypes.STRING(14),
        field: 'action',
        allowNull: false,
      },
      targetUserId: {
        type: DataTypes.TEXT,
        field: 'target_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      targetQueueId: {
        type: DataTypes.TEXT,
        field: 'target_queue_id',
        allowNull: true,
        references: { model: 'support_queue', key: 'queue_id' },
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
      tableName: 'support_escalation_rule',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return SupportEscalationRuleEntity
}
