import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TenancyLifecycleEventAttributes = {
  recordCode?: string
  lifecycleEventId: string | null
  tenantId: string
  tenantApplicationId?: string | null
  fromStatus?: string | null
  toStatus: string
  reason?: string | null
  actorUserId?: string | null
  occurredAt?: Date
}

export type TenancyLifecycleEventCreationAttributes = Optional<TenancyLifecycleEventAttributes, "recordCode" | "tenantApplicationId" | "fromStatus" | "reason" | "actorUserId" | "occurredAt">

export class TenancyLifecycleEventEntity
  extends Model<TenancyLifecycleEventAttributes, TenancyLifecycleEventCreationAttributes>
  implements TenancyLifecycleEventAttributes
{
  declare recordCode: string
  declare lifecycleEventId: string | null
  declare tenantId: string
  declare tenantApplicationId: string | null
  declare fromStatus: string | null
  declare toStatus: string
  declare reason: string | null
  declare actorUserId: string | null
  declare occurredAt: Date
}

export function initTenancyLifecycleEventEntity(sequelize: Sequelize): typeof TenancyLifecycleEventEntity {
  TenancyLifecycleEventEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tenancy_lifecycle_event')"),
      },
      lifecycleEventId: {
        type: DataTypes.TEXT,
        field: 'lifecycle_event_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: false,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: true,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      fromStatus: {
        type: DataTypes.STRING(20),
        field: 'from_status',
        allowNull: true,
      },
      toStatus: {
        type: DataTypes.STRING(20),
        field: 'to_status',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: true,
      },
      actorUserId: {
        type: DataTypes.UUID,
        field: 'actor_user_id',
        allowNull: true,
      },
      occurredAt: {
        type: DataTypes.DATE,
        field: 'occurred_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'tenancy_lifecycle_event',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return TenancyLifecycleEventEntity
}
