import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditRowChangeLogAttributes = {
  publicId?: string
  recordCode?: string
  rowChangeLogId?: string | number | null
  changedAt?: Date
  transactionId?: string | number
  schemaName: string
  tableName: string
  operation: string
  rowPk: unknown
  rowId?: string | null
  oldData?: unknown | null
  newData?: unknown | null
  changedColumns?: string | null
  appUserId?: string | null
  campusId?: string | null
  requestId?: string | null
  dbUser?: string
  applicationName?: string | null
  clientAddr?: string | null
}

export type AuditRowChangeLogCreationAttributes = Optional<AuditRowChangeLogAttributes, "publicId" | "recordCode" | "rowChangeLogId" | "changedAt" | "transactionId" | "rowId" | "oldData" | "newData" | "changedColumns" | "appUserId" | "campusId" | "requestId" | "dbUser" | "applicationName" | "clientAddr">

export class AuditRowChangeLogEntity
  extends Model<AuditRowChangeLogAttributes, AuditRowChangeLogCreationAttributes>
  implements AuditRowChangeLogAttributes
{
  declare publicId: string
  declare recordCode: string
  declare rowChangeLogId: string | number | null
  declare changedAt: Date
  declare transactionId: string | number
  declare schemaName: string
  declare tableName: string
  declare operation: string
  declare rowPk: unknown
  declare rowId: string | null
  declare oldData: unknown | null
  declare newData: unknown | null
  declare changedColumns: string | null
  declare appUserId: string | null
  declare campusId: string | null
  declare requestId: string | null
  declare dbUser: string
  declare applicationName: string | null
  declare clientAddr: string | null
}

export function initAuditRowChangeLogEntity(sequelize: Sequelize): typeof AuditRowChangeLogEntity {
  AuditRowChangeLogEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_row_change_log')"),
      },
      rowChangeLogId: {
        type: DataTypes.BIGINT,
        field: 'row_change_log_id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      changedAt: {
        type: DataTypes.DATE,
        field: 'changed_at',
        allowNull: false,
        defaultValue: Sequelize.literal("clock_timestamp()"),
      },
      transactionId: {
        type: DataTypes.BIGINT,
        field: 'transaction_id',
        allowNull: false,
        defaultValue: Sequelize.literal("txid_current()"),
      },
      schemaName: {
        type: DataTypes.TEXT,
        field: 'schema_name',
        allowNull: false,
      },
      tableName: {
        type: DataTypes.TEXT,
        field: 'table_name',
        allowNull: false,
      },
      operation: {
        type: DataTypes.STRING(6),
        field: 'operation',
        allowNull: false,
      },
      rowPk: {
        type: DataTypes.JSONB,
        field: 'row_pk',
        allowNull: false,
      },
      rowId: {
        type: DataTypes.TEXT,
        field: 'row_id',
        allowNull: true,
      },
      oldData: {
        type: DataTypes.JSONB,
        field: 'old_data',
        allowNull: true,
      },
      newData: {
        type: DataTypes.JSONB,
        field: 'new_data',
        allowNull: true,
      },
      changedColumns: {
        type: DataTypes.TEXT,
        field: 'changed_columns',
        allowNull: true,
      },
      appUserId: {
        type: DataTypes.UUID,
        field: 'app_user_id',
        allowNull: true,
      },
      campusId: {
        type: DataTypes.UUID,
        field: 'campus_id',
        allowNull: true,
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: true,
      },
      dbUser: {
        type: DataTypes.TEXT,
        field: 'db_user',
        allowNull: false,
        defaultValue: Sequelize.literal("current_user"),
      },
      applicationName: {
        type: DataTypes.TEXT,
        field: 'application_name',
        allowNull: true,
        defaultValue: Sequelize.literal("nullif(\r\n        current_setting('application_name', true),\r\n        ''\r\n    )"),
      },
      clientAddr: {
        type: DataTypes.TEXT,
        field: 'client_addr',
        allowNull: true,
        defaultValue: Sequelize.literal("inet_client_addr()"),
      }
    },
    {
      sequelize,
      tableName: 'audit_row_change_log',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AuditRowChangeLogEntity
}
