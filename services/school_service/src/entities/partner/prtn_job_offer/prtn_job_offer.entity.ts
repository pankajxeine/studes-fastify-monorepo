import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnJobOfferAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  jobOfferId?: string
  placementApplicationId: string
  studentId: string
  academicYearId: string
  offerType: string
  roleTitle: string
  ctcAmount?: string | null
  stipendAmount?: string | null
  joiningOn?: Date | null
  endOn?: Date | null
  workLocation?: string | null
  offerLetterFileId?: string | null
  status?: string
  offeredAt?: Date | null
  respondByOn?: Date | null
  respondedAt?: Date | null
  declineReason?: string | null
  revokedReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnJobOfferCreationAttributes = Optional<PrtnJobOfferAttributes, "id" | "publicId" | "recordCode" | "jobOfferId" | "ctcAmount" | "stipendAmount" | "joiningOn" | "endOn" | "workLocation" | "offerLetterFileId" | "status" | "offeredAt" | "respondByOn" | "respondedAt" | "declineReason" | "revokedReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnJobOfferEntity
  extends Model<PrtnJobOfferAttributes, PrtnJobOfferCreationAttributes>
  implements PrtnJobOfferAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare jobOfferId: string
  declare placementApplicationId: string
  declare studentId: string
  declare academicYearId: string
  declare offerType: string
  declare roleTitle: string
  declare ctcAmount: string | null
  declare stipendAmount: string | null
  declare joiningOn: Date | null
  declare endOn: Date | null
  declare workLocation: string | null
  declare offerLetterFileId: string | null
  declare status: string
  declare offeredAt: Date | null
  declare respondByOn: Date | null
  declare respondedAt: Date | null
  declare declineReason: string | null
  declare revokedReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnJobOfferEntity(sequelize: Sequelize): typeof PrtnJobOfferEntity {
  PrtnJobOfferEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_job_offer')"),
      },
      jobOfferId: {
        type: DataTypes.TEXT,
        field: 'job_offer_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      placementApplicationId: {
        type: DataTypes.TEXT,
        field: 'placement_application_id',
        allowNull: false,
        references: { model: 'prtn_placement_application', key: 'placement_application_id' },
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
      },
      offerType: {
        type: DataTypes.STRING(12),
        field: 'offer_type',
        allowNull: false,
      },
      roleTitle: {
        type: DataTypes.TEXT,
        field: 'role_title',
        allowNull: false,
      },
      ctcAmount: {
        type: DataTypes.TEXT,
        field: 'ctc_amount',
        allowNull: true,
      },
      stipendAmount: {
        type: DataTypes.TEXT,
        field: 'stipend_amount',
        allowNull: true,
      },
      joiningOn: {
        type: DataTypes.DATEONLY,
        field: 'joining_on',
        allowNull: true,
      },
      endOn: {
        type: DataTypes.DATEONLY,
        field: 'end_on',
        allowNull: true,
      },
      workLocation: {
        type: DataTypes.TEXT,
        field: 'work_location',
        allowNull: true,
      },
      offerLetterFileId: {
        type: DataTypes.TEXT,
        field: 'offer_letter_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      offeredAt: {
        type: DataTypes.DATE,
        field: 'offered_at',
        allowNull: true,
      },
      respondByOn: {
        type: DataTypes.DATEONLY,
        field: 'respond_by_on',
        allowNull: true,
      },
      respondedAt: {
        type: DataTypes.DATE,
        field: 'responded_at',
        allowNull: true,
      },
      declineReason: {
        type: DataTypes.TEXT,
        field: 'decline_reason',
        allowNull: true,
      },
      revokedReason: {
        type: DataTypes.TEXT,
        field: 'revoked_reason',
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
      tableName: 'prtn_job_offer',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['placement_application_id'] },
      { unique: true, fields: ['job_offer_id', 'student_id'] }
      ]
    }
  )
  return PrtnJobOfferEntity
}
