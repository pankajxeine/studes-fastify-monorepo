import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DocsIssuedCertificateAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  issuedCertificateId?: string
  certificateTemplateId: string
  personId: string
  status?: string
  purpose: string
  requestedByUserId?: string | null
  requestedAt?: Date
  approvedByUserId?: string | null
  approvedAt?: Date | null
  certificateNo?: string | null
  verificationCode?: string | null
  issuedByUserId?: string | null
  issuedOn?: Date | null
  validUntil?: Date | null
  fileId?: string | null
  mergeData?: unknown
  rejectionReason?: string | null
  revokedAt?: Date | null
  revocationReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DocsIssuedCertificateCreationAttributes = Optional<DocsIssuedCertificateAttributes, "id" | "publicId" | "recordCode" | "issuedCertificateId" | "status" | "requestedByUserId" | "requestedAt" | "approvedByUserId" | "approvedAt" | "certificateNo" | "verificationCode" | "issuedByUserId" | "issuedOn" | "validUntil" | "fileId" | "mergeData" | "rejectionReason" | "revokedAt" | "revocationReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DocsIssuedCertificateEntity
  extends Model<DocsIssuedCertificateAttributes, DocsIssuedCertificateCreationAttributes>
  implements DocsIssuedCertificateAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare issuedCertificateId: string
  declare certificateTemplateId: string
  declare personId: string
  declare status: string
  declare purpose: string
  declare requestedByUserId: string | null
  declare requestedAt: Date
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare certificateNo: string | null
  declare verificationCode: string | null
  declare issuedByUserId: string | null
  declare issuedOn: Date | null
  declare validUntil: Date | null
  declare fileId: string | null
  declare mergeData: unknown
  declare rejectionReason: string | null
  declare revokedAt: Date | null
  declare revocationReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDocsIssuedCertificateEntity(sequelize: Sequelize): typeof DocsIssuedCertificateEntity {
  DocsIssuedCertificateEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('docs_issued_certificate')"),
      },
      issuedCertificateId: {
        type: DataTypes.TEXT,
        field: 'issued_certificate_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      certificateTemplateId: {
        type: DataTypes.TEXT,
        field: 'certificate_template_id',
        allowNull: false,
        references: { model: 'docs_certificate_template', key: 'certificate_template_id' },
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "requested",
      },
      purpose: {
        type: DataTypes.TEXT,
        field: 'purpose',
        allowNull: false,
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      requestedAt: {
        type: DataTypes.DATE,
        field: 'requested_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      certificateNo: {
        type: DataTypes.STRING(30),
        field: 'certificate_no',
        allowNull: true,
      },
      verificationCode: {
        type: DataTypes.STRING(16),
        field: 'verification_code',
        allowNull: true,
      },
      issuedByUserId: {
        type: DataTypes.TEXT,
        field: 'issued_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      issuedOn: {
        type: DataTypes.DATEONLY,
        field: 'issued_on',
        allowNull: true,
      },
      validUntil: {
        type: DataTypes.DATEONLY,
        field: 'valid_until',
        allowNull: true,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      mergeData: {
        type: DataTypes.JSONB,
        field: 'merge_data',
        allowNull: false,
        defaultValue: "{}",
      },
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
        allowNull: true,
      },
      revokedAt: {
        type: DataTypes.DATE,
        field: 'revoked_at',
        allowNull: true,
      },
      revocationReason: {
        type: DataTypes.TEXT,
        field: 'revocation_reason',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
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
      tableName: 'docs_issued_certificate',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['certificate_no'] },
      { unique: true, fields: ['verification_code'] }
      ]
    }
  )
  return DocsIssuedCertificateEntity
}
