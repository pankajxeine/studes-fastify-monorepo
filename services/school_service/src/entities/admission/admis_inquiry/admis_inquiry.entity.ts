import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisInquiryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  inquiryId?: string
  campusId: string
  academicYearId?: string | null
  programId?: string | null
  gradeLevelId?: string | null
  personId?: string | null
  assignedToStaffId?: string | null
  inquirySourceCode?: string
  inquiryNo: string
  contactName: string
  contactEmail?: string | null
  contactPhone?: string | null
  prospectName?: string | null
  prospectDateOfBirth?: Date | null
  status?: string
  receivedAt?: Date
  nextFollowUpOn?: Date | null
  visitScheduledAt?: Date | null
  lostReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisInquiryCreationAttributes = Optional<AdmisInquiryAttributes, "id" | "publicId" | "recordCode" | "inquiryId" | "academicYearId" | "programId" | "gradeLevelId" | "personId" | "assignedToStaffId" | "inquirySourceCode" | "contactEmail" | "contactPhone" | "prospectName" | "prospectDateOfBirth" | "status" | "receivedAt" | "nextFollowUpOn" | "visitScheduledAt" | "lostReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisInquiryEntity
  extends Model<AdmisInquiryAttributes, AdmisInquiryCreationAttributes>
  implements AdmisInquiryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare inquiryId: string
  declare campusId: string
  declare academicYearId: string | null
  declare programId: string | null
  declare gradeLevelId: string | null
  declare personId: string | null
  declare assignedToStaffId: string | null
  declare inquirySourceCode: string
  declare inquiryNo: string
  declare contactName: string
  declare contactEmail: string | null
  declare contactPhone: string | null
  declare prospectName: string | null
  declare prospectDateOfBirth: Date | null
  declare status: string
  declare receivedAt: Date
  declare nextFollowUpOn: Date | null
  declare visitScheduledAt: Date | null
  declare lostReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisInquiryEntity(sequelize: Sequelize): typeof AdmisInquiryEntity {
  AdmisInquiryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('admis_inquiry')"),
      },
      inquiryId: {
        type: DataTypes.TEXT,
        field: 'inquiry_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: true,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: true,
        references: { model: 'acad_program', key: 'program_id' },
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: true,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      assignedToStaffId: {
        type: DataTypes.TEXT,
        field: 'assigned_to_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      inquirySourceCode: {
        type: DataTypes.TEXT,
        field: 'inquiry_source_code',
        allowNull: false,
        defaultValue: "walk_in",
        references: { model: 'admis_inquiry_source', key: 'inquiry_source_code' },
        onUpdate: 'CASCADE',
      },
      inquiryNo: {
        type: DataTypes.STRING(30),
        field: 'inquiry_no',
        allowNull: false,
      },
      contactName: {
        type: DataTypes.TEXT,
        field: 'contact_name',
        allowNull: false,
      },
      contactEmail: {
        type: DataTypes.TEXT,
        field: 'contact_email',
        allowNull: true,
      },
      contactPhone: {
        type: DataTypes.TEXT,
        field: 'contact_phone',
        allowNull: true,
      },
      prospectName: {
        type: DataTypes.TEXT,
        field: 'prospect_name',
        allowNull: true,
      },
      prospectDateOfBirth: {
        type: DataTypes.DATEONLY,
        field: 'prospect_date_of_birth',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "new",
      },
      receivedAt: {
        type: DataTypes.DATE,
        field: 'received_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      nextFollowUpOn: {
        type: DataTypes.DATEONLY,
        field: 'next_follow_up_on',
        allowNull: true,
      },
      visitScheduledAt: {
        type: DataTypes.DATE,
        field: 'visit_scheduled_at',
        allowNull: true,
      },
      lostReason: {
        type: DataTypes.TEXT,
        field: 'lost_reason',
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
      tableName: 'admis_inquiry',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['inquiry_no'] }
      ]
    }
  )
  return AdmisInquiryEntity
}
