import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditSensitiveColumnAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  schemaName: string
  tableName: string
  columnName: string
  category: string
  UNIQUE?: string | null
}

export type AuditSensitiveColumnCreationAttributes = Optional<AuditSensitiveColumnAttributes, "id" | "publicId" | "recordCode" | "UNIQUE">

export class AuditSensitiveColumnEntity
  extends Model<AuditSensitiveColumnAttributes, AuditSensitiveColumnCreationAttributes>
  implements AuditSensitiveColumnAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare schemaName: string
  declare tableName: string
  declare columnName: string
  declare category: string
  declare UNIQUE: string | null
}

export function initAuditSensitiveColumnEntity(sequelize: Sequelize): typeof AuditSensitiveColumnEntity {
  AuditSensitiveColumnEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_sensitive_column')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'audit_sensitive_column',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AuditSensitiveColumnEntity
}
