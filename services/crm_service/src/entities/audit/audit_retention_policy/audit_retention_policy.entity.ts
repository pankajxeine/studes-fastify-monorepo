import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditRetentionPolicyAttributes = {
  recordCode?: string
  retentionPolicyId: string | null
  entityCode: string
  description: string
  retentionDays: number
  action: string
  legalBasis: string
  updatedAt?: Date
  updatedBy?: string | null
}

export type AuditRetentionPolicyCreationAttributes = Optional<AuditRetentionPolicyAttributes, "recordCode" | "updatedAt" | "updatedBy">

export class AuditRetentionPolicyEntity
  extends Model<AuditRetentionPolicyAttributes, AuditRetentionPolicyCreationAttributes>
  implements AuditRetentionPolicyAttributes
{
  declare recordCode: string
  declare retentionPolicyId: string | null
  declare entityCode: string
  declare description: string
  declare retentionDays: number
  declare action: string
  declare legalBasis: string
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAuditRetentionPolicyEntity(sequelize: Sequelize): typeof AuditRetentionPolicyEntity {
  AuditRetentionPolicyEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_retention_policy')"),
      },
      retentionPolicyId: {
        type: DataTypes.TEXT,
        field: 'retention_policy_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      entityCode: {
        type: DataTypes.TEXT,
        field: 'entity_code',
        allowNull: false,
        unique: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      retentionDays: {
        type: DataTypes.INTEGER,
        field: 'retention_days',
        allowNull: false,
      },
      action: {
        type: DataTypes.STRING(12),
        field: 'action',
        allowNull: false,
      },
      legalBasis: {
        type: DataTypes.TEXT,
        field: 'legal_basis',
        allowNull: false,
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
      tableName: 'audit_retention_policy',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AuditRetentionPolicyEntity
}
