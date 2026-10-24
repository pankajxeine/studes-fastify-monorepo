import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditActivityLogAttributes = {
  publicId?: string
  recordCode?: string
  activityLogId?: string | number | null
  occurredAt?: Date
  appUserId?: string | null
  username?: string | null
  campusId?: string | null
  activityType: string
  outcome?: string
  module?: string | null
  objectType?: string | null
  objectId?: string | null
  targetAppUserId?: string | null
  description: string
  details?: unknown
  ipAddress?: string | null
  userAgent?: string | null
  sessionId?: string | null
  requestId?: string | null
}

export type AuditActivityLogCreationAttributes = Optional<AuditActivityLogAttributes, "publicId" | "recordCode" | "activityLogId" | "occurredAt" | "appUserId" | "username" | "campusId" | "outcome" | "module" | "objectType" | "objectId" | "targetAppUserId" | "details" | "ipAddress" | "userAgent" | "sessionId" | "requestId">

export class AuditActivityLogEntity
  extends Model<AuditActivityLogAttributes, AuditActivityLogCreationAttributes>
  implements AuditActivityLogAttributes
{
  declare publicId: string
  declare recordCode: string
  declare activityLogId: string | number | null
  declare occurredAt: Date
  declare appUserId: string | null
  declare username: string | null
  declare campusId: string | null
  declare activityType: string
  declare outcome: string
  declare module: string | null
  declare objectType: string | null
  declare objectId: string | null
  declare targetAppUserId: string | null
  declare description: string
  declare details: unknown
  declare ipAddress: string | null
  declare userAgent: string | null
  declare sessionId: string | null
  declare requestId: string | null
}

export function initAuditActivityLogEntity(sequelize: Sequelize): typeof AuditActivityLogEntity {
  AuditActivityLogEntity.init(
    {
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_activity_log')"),
      },
      activityLogId: {
        type: DataTypes.BIGINT,
        field: 'activity_log_id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      occurredAt: {
        type: DataTypes.DATE,
        field: 'occurred_at',
        allowNull: false,
        defaultValue: Sequelize.literal("clock_timestamp()"),
      },
      appUserId: {
        type: DataTypes.UUID,
        field: 'app_user_id',
        allowNull: true,
      },
      username: {
        type: DataTypes.TEXT,
        field: 'username',
        allowNull: true,
      },
      campusId: {
        type: DataTypes.UUID,
        field: 'campus_id',
        allowNull: true,
      },
      activityType: {
        type: DataTypes.STRING(40),
        field: 'activity_type',
        allowNull: false,
      },
      outcome: {
        type: DataTypes.STRING(10),
        field: 'outcome',
        allowNull: false,
        defaultValue: "success",
      },
      module: {
        type: DataTypes.STRING(30),
        field: 'module',
        allowNull: true,
      },
      objectType: {
        type: DataTypes.TEXT,
        field: 'object_type',
        allowNull: true,
      },
      objectId: {
        type: DataTypes.TEXT,
        field: 'object_id',
        allowNull: true,
      },
      targetAppUserId: {
        type: DataTypes.UUID,
        field: 'target_app_user_id',
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      details: {
        type: DataTypes.JSONB,
        field: 'details',
        allowNull: false,
        defaultValue: "{}",
      },
      ipAddress: {
        type: DataTypes.TEXT,
        field: 'ip_address',
        allowNull: true,
      },
      userAgent: {
        type: DataTypes.TEXT,
        field: 'user_agent',
        allowNull: true,
      },
      sessionId: {
        type: DataTypes.UUID,
        field: 'session_id',
        allowNull: true,
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'audit_activity_log',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AuditActivityLogEntity
}
