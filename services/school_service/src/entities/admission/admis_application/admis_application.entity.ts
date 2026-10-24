import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisApplicationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  applicationId?: string
  admissionCycleId: string
  applicantPersonId: string
  gradeLevelId: string
  inquiryId?: string | null
  applicationNo: string
  status?: string
  submittedAt?: Date | null
  decidedAt?: Date | null
  decidedByUserId?: string | null
  decisionRemarks?: string | null
  offerExpiresOn?: Date | null
  offerRespondedAt?: Date | null
  waitlistRank?: number | null
  previousSchoolName?: string | null
  previousGradeCompleted?: string | null
  hasSiblingInSchool?: string
  applicationFeeAmount?: string
  isFeeWaived?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisApplicationCreationAttributes = Optional<AdmisApplicationAttributes, "id" | "publicId" | "recordCode" | "applicationId" | "inquiryId" | "status" | "submittedAt" | "decidedAt" | "decidedByUserId" | "decisionRemarks" | "offerExpiresOn" | "offerRespondedAt" | "waitlistRank" | "previousSchoolName" | "previousGradeCompleted" | "hasSiblingInSchool" | "applicationFeeAmount" | "isFeeWaived" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisApplicationEntity
  extends Model<AdmisApplicationAttributes, AdmisApplicationCreationAttributes>
  implements AdmisApplicationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare applicationId: string
  declare admissionCycleId: string
  declare applicantPersonId: string
  declare gradeLevelId: string
  declare inquiryId: string | null
  declare applicationNo: string
  declare status: string
  declare submittedAt: Date | null
  declare decidedAt: Date | null
  declare decidedByUserId: string | null
  declare decisionRemarks: string | null
  declare offerExpiresOn: Date | null
  declare offerRespondedAt: Date | null
  declare waitlistRank: number | null
  declare previousSchoolName: string | null
  declare previousGradeCompleted: string | null
  declare hasSiblingInSchool: string
  declare applicationFeeAmount: string
  declare isFeeWaived: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisApplicationEntity(sequelize: Sequelize): typeof AdmisApplicationEntity {
  AdmisApplicationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_application')"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      admissionCycleId: {
        type: DataTypes.TEXT,
        field: 'admission_cycle_id',
        allowNull: false,
        references: { model: 'admis_admission_cycle', key: 'admission_cycle_id' },
      },
      applicantPersonId: {
        type: DataTypes.TEXT,
        field: 'applicant_person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: false,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      inquiryId: {
        type: DataTypes.TEXT,
        field: 'inquiry_id',
        allowNull: true,
        references: { model: 'admis_inquiry', key: 'inquiry_id' },
      },
      applicationNo: {
        type: DataTypes.STRING(30),
        field: 'application_no',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      submittedAt: {
        type: DataTypes.DATE,
        field: 'submitted_at',
        allowNull: true,
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
        allowNull: true,
      },
      decidedByUserId: {
        type: DataTypes.TEXT,
        field: 'decided_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      decisionRemarks: {
        type: DataTypes.TEXT,
        field: 'decision_remarks',
        allowNull: true,
      },
      offerExpiresOn: {
        type: DataTypes.DATEONLY,
        field: 'offer_expires_on',
        allowNull: true,
      },
      offerRespondedAt: {
        type: DataTypes.DATE,
        field: 'offer_responded_at',
        allowNull: true,
      },
      waitlistRank: {
        type: DataTypes.SMALLINT,
        field: 'waitlist_rank',
        allowNull: true,
      },
      previousSchoolName: {
        type: DataTypes.TEXT,
        field: 'previous_school_name',
        allowNull: true,
      },
      previousGradeCompleted: {
        type: DataTypes.STRING(30),
        field: 'previous_grade_completed',
        allowNull: true,
      },
      hasSiblingInSchool: {
        type: DataTypes.TEXT,
        field: 'has_sibling_in_school',
        allowNull: false,
        defaultValue: false,
      },
      applicationFeeAmount: {
        type: DataTypes.TEXT,
        field: 'application_fee_amount',
        allowNull: false,
        defaultValue: 0,
      },
      isFeeWaived: {
        type: DataTypes.TEXT,
        field: 'is_fee_waived',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'admis_application',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['application_no'] }
      ]
    }
  )
  return AdmisApplicationEntity
}
