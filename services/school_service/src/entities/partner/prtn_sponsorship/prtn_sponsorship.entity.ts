import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnSponsorshipAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  sponsorshipId?: string
  partnerOrganizationId: string
  academicYearId: string
  scholarshipId?: string | null
  partnerAgreementId?: string | null
  title: string
  sponsorshipKind: string
  committedAmount: string
  receivedAmount?: string
  beneficiaryCount?: number | null
  status?: string
  pledgedOn: string
  lastReceivedOn?: Date | null
  recognitionNote?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnSponsorshipCreationAttributes = Optional<PrtnSponsorshipAttributes, "id" | "publicId" | "recordCode" | "sponsorshipId" | "scholarshipId" | "partnerAgreementId" | "receivedAmount" | "beneficiaryCount" | "status" | "lastReceivedOn" | "recognitionNote" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnSponsorshipEntity
  extends Model<PrtnSponsorshipAttributes, PrtnSponsorshipCreationAttributes>
  implements PrtnSponsorshipAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare sponsorshipId: string
  declare partnerOrganizationId: string
  declare academicYearId: string
  declare scholarshipId: string | null
  declare partnerAgreementId: string | null
  declare title: string
  declare sponsorshipKind: string
  declare committedAmount: string
  declare receivedAmount: string
  declare beneficiaryCount: number | null
  declare status: string
  declare pledgedOn: string
  declare lastReceivedOn: Date | null
  declare recognitionNote: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnSponsorshipEntity(sequelize: Sequelize): typeof PrtnSponsorshipEntity {
  PrtnSponsorshipEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_sponsorship')"),
      },
      sponsorshipId: {
        type: DataTypes.TEXT,
        field: 'sponsorship_id',
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
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      scholarshipId: {
        type: DataTypes.TEXT,
        field: 'scholarship_id',
        allowNull: true,
        references: { model: 'fin_scholarship', key: 'scholarship_id' },
      },
      partnerAgreementId: {
        type: DataTypes.UUID,
        field: 'partner_agreement_id',
        allowNull: true,
        references: { model: 'prtn_partner_agreement', key: 'partner_agreement_id' },
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      sponsorshipKind: {
        type: DataTypes.STRING(20),
        field: 'sponsorship_kind',
        allowNull: false,
      },
      committedAmount: {
        type: DataTypes.TEXT,
        field: 'committed_amount',
        allowNull: false,
      },
      receivedAmount: {
        type: DataTypes.TEXT,
        field: 'received_amount',
        allowNull: false,
        defaultValue: 0,
      },
      beneficiaryCount: {
        type: DataTypes.SMALLINT,
        field: 'beneficiary_count',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "pledged",
      },
      pledgedOn: {
        type: DataTypes.TEXT,
        field: 'pledged_on',
        allowNull: false,
      },
      lastReceivedOn: {
        type: DataTypes.DATEONLY,
        field: 'last_received_on',
        allowNull: true,
      },
      recognitionNote: {
        type: DataTypes.TEXT,
        field: 'recognition_note',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      tableName: 'prtn_sponsorship',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PrtnSponsorshipEntity
}
