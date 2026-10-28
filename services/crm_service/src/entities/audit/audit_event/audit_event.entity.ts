import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditEventAttributes = {
  recordCode?: string
  eventId: string
  eventSeq?: string | number
  occurredAt: Date
  actorType: string
  actorId?: string | null
  actorIp?: string | null
  requestId?: string | null
  impersonatingTenantId?: string | null
  tenantId?: string | null
  action: string
  entitySchema: string
  entityTable: string
  entityId?: string | null
  changedColumns?: string | null
  oldValues?: unknown | null
  newValues?: unknown | null
  reason?: string | null
  prevHash?: Buffer | null
  rowHash: string
}

export type AuditEventCreationAttributes = Optional<AuditEventAttributes, "recordCode" | "eventSeq" | "actorId" | "actorIp" | "requestId" | "impersonatingTenantId" | "tenantId" | "entityId" | "changedColumns" | "oldValues" | "newValues" | "reason" | "prevHash">

export class AuditEventEntity
  extends Model<AuditEventAttributes, AuditEventCreationAttributes>
  implements AuditEventAttributes
{
  declare recordCode: string
  declare eventId: string
  declare eventSeq: string | number
  declare occurredAt: Date
  declare actorType: string
  declare actorId: string | null
  declare actorIp: string | null
  declare requestId: string | null
  declare impersonatingTenantId: string | null
  declare tenantId: string | null
  declare action: string
  declare entitySchema: string
  declare entityTable: string
  declare entityId: string | null
  declare changedColumns: string | null
  declare oldValues: unknown | null
  declare newValues: unknown | null
  declare reason: string | null
  declare prevHash: Buffer | null
  declare rowHash: string
}

export function initAuditEventEntity(sequelize: Sequelize): typeof AuditEventEntity {
  AuditEventEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_event')"),
      },
      eventId: {
        type: DataTypes.TEXT,
        field: 'event_id',
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      eventSeq: {
        type: DataTypes.BIGINT,
        field: 'event_seq',
        allowNull: false,
        defaultValue: Sequelize.literal("nextval('audit_event_seq')"),
      },
      occurredAt: {
        type: DataTypes.DATE,
        field: 'occurred_at',
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.literal("clock_timestamp()"),
      },
      actorType: {
        type: DataTypes.STRING(10),
        field: 'actor_type',
        allowNull: false,
      },
      actorId: {
        type: DataTypes.UUID,
        field: 'actor_id',
        allowNull: true,
      },
      actorIp: {
        type: DataTypes.TEXT,
        field: 'actor_ip',
        allowNull: true,
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: true,
      },
      impersonatingTenantId: {
        type: DataTypes.UUID,
        field: 'impersonating_tenant_id',
        allowNull: true,
      },
      tenantId: {
        type: DataTypes.UUID,
        field: 'tenant_id',
        allowNull: true,
      },
      action: {
        type: DataTypes.STRING(10),
        field: 'action',
        allowNull: false,
      },
      entitySchema: {
        type: DataTypes.TEXT,
        field: 'entity_schema',
        allowNull: false,
      },
      entityTable: {
        type: DataTypes.TEXT,
        field: 'entity_table',
        allowNull: false,
      },
      entityId: {
        type: DataTypes.TEXT,
        field: 'entity_id',
        allowNull: true,
      },
      changedColumns: {
        type: DataTypes.TEXT,
        field: 'changed_columns',
        allowNull: true,
      },
      oldValues: {
        type: DataTypes.JSONB,
        field: 'old_values',
        allowNull: true,
      },
      newValues: {
        type: DataTypes.JSONB,
        field: 'new_values',
        allowNull: true,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: true,
      },
      prevHash: {
        type: DataTypes.BLOB,
        field: 'prev_hash',
        allowNull: true,
      },
      rowHash: {
        type: DataTypes.TEXT,
        field: 'row_hash',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'audit_event',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['event_seq', 'occurred_at'] },
      { unique: true, fields: ['event_id', 'occurred_at'] },
      { unique: true, fields: ['record_code', 'occurred_at'] }
      ]
    }
  )
  return AuditEventEntity
}
