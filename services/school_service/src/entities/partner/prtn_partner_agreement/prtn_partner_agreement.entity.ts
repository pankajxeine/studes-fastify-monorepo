import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPartnerAgreementAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  partnerAgreementId?: string
  partnerOrganizationId: string
  campusId?: string | null
  agreementType: string
  referenceNo: string
  title: string
  status?: string
  validFrom: string
  validTo?: Date | null
  validity?: string | null
  isAutoRenew?: string
  renewalNoticeDays?: number | null
  signedOn?: Date | null
  signedByUserId?: string | null
  partnerSignatoryName?: string | null
  agreementFileId?: string | null
  termsSummary?: string | null
  terminatedOn?: Date | null
  terminationReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnPartnerAgreementCreationAttributes = Optional<PrtnPartnerAgreementAttributes, "id" | "publicId" | "recordCode" | "partnerAgreementId" | "campusId" | "status" | "validTo" | "validity" | "isAutoRenew" | "renewalNoticeDays" | "signedOn" | "signedByUserId" | "partnerSignatoryName" | "agreementFileId" | "termsSummary" | "terminatedOn" | "terminationReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnPartnerAgreementEntity
  extends Model<PrtnPartnerAgreementAttributes, PrtnPartnerAgreementCreationAttributes>
  implements PrtnPartnerAgreementAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare partnerAgreementId: string
  declare partnerOrganizationId: string
  declare campusId: string | null
  declare agreementType: string
  declare referenceNo: string
  declare title: string
  declare status: string
  declare validFrom: string
  declare validTo: Date | null
  declare validity: string | null
  declare isAutoRenew: string
  declare renewalNoticeDays: number | null
  declare signedOn: Date | null
  declare signedByUserId: string | null
  declare partnerSignatoryName: string | null
  declare agreementFileId: string | null
  declare termsSummary: string | null
  declare terminatedOn: Date | null
  declare terminationReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnPartnerAgreementEntity(sequelize: Sequelize): typeof PrtnPartnerAgreementEntity {
  PrtnPartnerAgreementEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_partner_agreement')"),
      },
      partnerAgreementId: {
        type: DataTypes.TEXT,
        field: 'partner_agreement_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      partnerOrganizationId: {
        type: DataTypes.TEXT,
        field: 'partner_organization_id',
        allowNull: false,
        references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      agreementType: {
        type: DataTypes.STRING(20),
        field: 'agreement_type',
        allowNull: false,
      },
      referenceNo: {
        type: DataTypes.STRING(40),
        field: 'reference_no',
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      },
      isAutoRenew: {
        type: DataTypes.TEXT,
        field: 'is_auto_renew',
        allowNull: false,
        defaultValue: false,
      },
      renewalNoticeDays: {
        type: DataTypes.SMALLINT,
        field: 'renewal_notice_days',
        allowNull: true,
      },
      signedOn: {
        type: DataTypes.DATEONLY,
        field: 'signed_on',
        allowNull: true,
      },
      signedByUserId: {
        type: DataTypes.TEXT,
        field: 'signed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      partnerSignatoryName: {
        type: DataTypes.TEXT,
        field: 'partner_signatory_name',
        allowNull: true,
      },
      agreementFileId: {
        type: DataTypes.TEXT,
        field: 'agreement_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      termsSummary: {
        type: DataTypes.TEXT,
        field: 'terms_summary',
        allowNull: true,
      },
      terminatedOn: {
        type: DataTypes.DATEONLY,
        field: 'terminated_on',
        allowNull: true,
      },
      terminationReason: {
        type: DataTypes.TEXT,
        field: 'termination_reason',
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
      tableName: 'prtn_partner_agreement',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['reference_no'] },
      { unique: true, fields: ['partner_agreement_id', 'partner_organization_id'] }
      ]
    }
  )
  return PrtnPartnerAgreementEntity
}
