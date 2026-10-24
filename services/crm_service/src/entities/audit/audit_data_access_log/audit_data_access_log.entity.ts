import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditDataAccessLogAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  dataAccessLogId?: string
  appUserId?: string | null
  tenantId?: string | null
  resource: string
  recordId?: string | null
  purpose: string
  fields?: string | null
  accessedAt?: Date
}

export type AuditDataAccessLogCreationAttributes = Optional<AuditDataAccessLogAttributes, "id" | "publicId" | "recordCode" | "dataAccessLogId" | "appUserId" | "tenantId" | "recordId" | "fields" | "accessedAt">

export class AuditDataAccessLogEntity
  extends Model<AuditDataAccessLogAttributes, AuditDataAccessLogCreationAttributes>
  implements AuditDataAccessLogAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare dataAccessLogId: string
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_data_access_log')"),
      },
      dataAccessLogId: {
        type: DataTypes.TEXT,
        field: 'data_access_log_id',
        allowNull: false,
        unique: true,
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
