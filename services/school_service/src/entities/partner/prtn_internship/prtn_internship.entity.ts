import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnInternshipAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  internshipId?: string
  studentId: string
  partnerOrganizationId: string
  supervisorPartnerContactId?: string | null
  facultyMentorStaffId: string
  jobOfferId?: string | null
  title: string
  startOn: string
  endOn: string
  period?: string | null
  workMode?: string
  hoursPerWeek?: number | null
  stipendAmount?: string | null
  isForCredit?: string
  credits?: number | null
  status?: string
  evaluationScore?: number | null
  supervisorFeedback?: string | null
  mentorFeedback?: string | null
  terminatedOn?: Date | null
  terminationReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnInternshipCreationAttributes = Optional<PrtnInternshipAttributes, "id" | "publicId" | "recordCode" | "internshipId" | "supervisorPartnerContactId" | "jobOfferId" | "period" | "workMode" | "hoursPerWeek" | "stipendAmount" | "isForCredit" | "credits" | "status" | "evaluationScore" | "supervisorFeedback" | "mentorFeedback" | "terminatedOn" | "terminationReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnInternshipEntity
  extends Model<PrtnInternshipAttributes, PrtnInternshipCreationAttributes>
  implements PrtnInternshipAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare internshipId: string
  declare studentId: string
  declare partnerOrganizationId: string
  declare supervisorPartnerContactId: string | null
  declare facultyMentorStaffId: string
  declare jobOfferId: string | null
  declare title: string
  declare startOn: string
  declare endOn: string
  declare period: string | null
  declare workMode: string
  declare hoursPerWeek: number | null
  declare stipendAmount: string | null
  declare isForCredit: string
  declare credits: number | null
  declare status: string
  declare evaluationScore: number | null
  declare supervisorFeedback: string | null
  declare mentorFeedback: string | null
  declare terminatedOn: Date | null
  declare terminationReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnInternshipEntity(sequelize: Sequelize): typeof PrtnInternshipEntity {
  PrtnInternshipEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_internship')"),
      },
      internshipId: {
        type: DataTypes.TEXT,
        field: 'internship_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      partnerOrganizationId: {
        type: DataTypes.TEXT,
        field: 'partner_organization_id',
        allowNull: false,
        references: { model: 'prtn_partner_organization', key: 'partner_organization_id' },
      },
      supervisorPartnerContactId: {
        type: DataTypes.UUID,
        field: 'supervisor_partner_contact_id',
        allowNull: true,
        references: { model: 'prtn_partner_contact', key: 'partner_contact_id' },
      },
      facultyMentorStaffId: {
        type: DataTypes.TEXT,
        field: 'faculty_mentor_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      jobOfferId: {
        type: DataTypes.UUID,
        field: 'job_offer_id',
        allowNull: true,
        references: { model: 'prtn_job_offer', key: 'job_offer_id' },
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      startOn: {
        type: DataTypes.TEXT,
        field: 'start_on',
        allowNull: false,
      },
      endOn: {
        type: DataTypes.TEXT,
        field: 'end_on',
        allowNull: false,
      },
      period: {
        type: DataTypes.TEXT,
        field: 'period',
        allowNull: true,
        autoIncrement: true,
      },
      workMode: {
        type: DataTypes.STRING(10),
        field: 'work_mode',
        allowNull: false,
        defaultValue: "onsite",
      },
      hoursPerWeek: {
        type: DataTypes.SMALLINT,
        field: 'hours_per_week',
        allowNull: true,
      },
      stipendAmount: {
        type: DataTypes.TEXT,
        field: 'stipend_amount',
        allowNull: true,
      },
      isForCredit: {
        type: DataTypes.TEXT,
        field: 'is_for_credit',
        allowNull: false,
        defaultValue: false,
      },
      credits: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'credits',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "planned",
      },
      evaluationScore: {
        type: DataTypes.DECIMAL(5, 2),
        field: 'evaluation_score',
        allowNull: true,
      },
      supervisorFeedback: {
        type: DataTypes.TEXT,
        field: 'supervisor_feedback',
        allowNull: true,
      },
      mentorFeedback: {
        type: DataTypes.TEXT,
        field: 'mentor_feedback',
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
      tableName: 'prtn_internship',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['job_offer_id'] }
      ]
    }
  )
  return PrtnInternshipEntity
}
