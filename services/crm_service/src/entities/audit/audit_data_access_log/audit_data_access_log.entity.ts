import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditDataAccessLogAttributes = {
  recordCode?: string
  dataAccessLogId: string | null
  appUserId?: string | null
  tenantId?: string | null
  resource: string
  recordId?: string | null
  purpose: string
  fields?: string | null
  accessedAt?: Date
}

export type AuditDataAccessLogCreationAttributes = Optional<AuditDataAccessLogAttributes, "recordCode" | "appUserId" | "tenantId" | "recordId" | "fields" | "accessedAt">

export class AuditDataAccessLogEntity
  extends Model<AuditDataAccessLogAttributes, AuditDataAccessLogCreationAttributes>
  implements AuditDataAccessLogAttributes
{
  declare recordCode: string
  declare dataAccessLogId: string | null
  declare appUserId: string | null
  declare tenantId: string | null
  declare resource: string
  declare recordId: string | null
  declare purpose: string
  declare fields: string | null
  declare accessedAt: Date
}

export function initAuditDataAccessLogEntity(sequelize: Sequelize): typeof AuditDataAccessLogEntity {
  AuditDataAccessLogEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_data_access_log')"),
      },
      dataAccessLogId: {
        type: DataTypes.TEXT,
        field: 'data_access_log_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      tenantId: {
        type: DataTypes.UUID,
        field: 'tenant_id',
        allowNull: true,
      },
      resource: {
        type: DataTypes.STRING(60),
        field: 'resource',
        allowNull: false,
      },
      recordId: {
        type: DataTypes.TEXT,
        field: 'record_id',
        allowNull: true,
      },
      purpose: {
        type: DataTypes.STRING(30),
        field: 'purpose',
        allowNull: false,
      },
      fields: {
        type: DataTypes.TEXT,
        field: 'fields',
        allowNull: true,
      },
      accessedAt: {
        type: DataTypes.DATE,
        field: 'accessed_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'audit_data_access_log',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AuditDataAccessLogEntity
}
