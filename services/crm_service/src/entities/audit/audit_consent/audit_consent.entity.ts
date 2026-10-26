import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AuditConsentAttributes = {
  recordCode?: string
  consentId: string | null
  subjectType: string
  subjectId: string
  purpose: string
  granted: string
  source: string
  policyVersion: string
  evidenceRef?: string | null
  capturedAt?: Date
  withdrawnAt?: Date | null
}

export type AuditConsentCreationAttributes = Optional<AuditConsentAttributes, "recordCode" | "evidenceRef" | "capturedAt" | "withdrawnAt">

export class AuditConsentEntity
  extends Model<AuditConsentAttributes, AuditConsentCreationAttributes>
  implements AuditConsentAttributes
{
  declare recordCode: string
  declare consentId: string | null
  declare subjectType: string
  declare subjectId: string
  declare purpose: string
  declare granted: string
  declare source: string
  declare policyVersion: string
  declare evidenceRef: string | null
  declare capturedAt: Date
  declare withdrawnAt: Date | null
}

export function initAuditConsentEntity(sequelize: Sequelize): typeof AuditConsentEntity {
  AuditConsentEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('audit_consent')"),
      },
      consentId: {
        type: DataTypes.TEXT,
        field: 'consent_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      subjectType: {
        type: DataTypes.STRING(10),
        field: 'subject_type',
        allowNull: false,
      },
      subjectId: {
        type: DataTypes.TEXT,
        field: 'subject_id',
        allowNull: false,
      },
      purpose: {
        type: DataTypes.STRING(30),
        field: 'purpose',
        allowNull: false,
      },
      granted: {
        type: DataTypes.TEXT,
        field: 'granted',
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING(20),
        field: 'source',
        allowNull: false,
      },
      policyVersion: {
        type: DataTypes.STRING(20),
        field: 'policy_version',
        allowNull: false,
      },
      evidenceRef: {
        type: DataTypes.TEXT,
        field: 'evidence_ref',
        allowNull: true,
      },
      capturedAt: {
        type: DataTypes.DATE,
        field: 'captured_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      withdrawnAt: {
        type: DataTypes.DATE,
        field: 'withdrawn_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'audit_consent',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AuditConsentEntity
}
