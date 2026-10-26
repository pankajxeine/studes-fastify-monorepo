import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditSensitiveColumnAttributes = {
  recordCode?: string
  sensitiveColumnId: string | null
  schemaName: string
  tableName: string
  columnName: string
  category: string
}

export type AuditSensitiveColumnCreationAttributes = Optional<AuditSensitiveColumnAttributes, "recordCode">

export class AuditSensitiveColumnEntity
  extends Model<AuditSensitiveColumnAttributes, AuditSensitiveColumnCreationAttributes>
  implements AuditSensitiveColumnAttributes
{
  declare recordCode: string
  declare sensitiveColumnId: string | null
  declare schemaName: string
  declare tableName: string
  declare columnName: string
  declare category: string
}

export function initAuditSensitiveColumnEntity(sequelize: Sequelize): typeof AuditSensitiveColumnEntity {
  AuditSensitiveColumnEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_sensitive_column')"),
      },
      sensitiveColumnId: {
        type: DataTypes.TEXT,
        field: 'sensitive_column_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      columnName: {
        type: DataTypes.TEXT,
        field: 'column_name',
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(12),
        field: 'category',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'audit_sensitive_column',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['schema_name', 'table_name', 'column_name'] }
      ]
    }
  )
  return AuditSensitiveColumnEntity
}
