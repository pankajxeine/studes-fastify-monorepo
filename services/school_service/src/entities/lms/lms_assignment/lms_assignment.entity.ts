import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LmsAssignmentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  assignmentId?: string
  courseOfferingId: string
  createdByStaffId: string
  assessmentTypeCode?: string
  title: string
  instructions: string
  attachmentFileId?: string | null
  submissionMode?: string
  maxMarks: number
  publishedAt?: Date | null
  dueAt: Date
  allowLate?: string
  lateUntil?: Date | null
  latePenaltyPct?: string
  maxAttempts?: number
  isGroupWork?: string
  status?: string
  closedAt?: Date | null
  cancelledReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LmsAssignmentCreationAttributes = Optional<LmsAssignmentAttributes, "id" | "publicId" | "recordCode" | "assignmentId" | "assessmentTypeCode" | "attachmentFileId" | "submissionMode" | "publishedAt" | "allowLate" | "lateUntil" | "latePenaltyPct" | "maxAttempts" | "isGroupWork" | "status" | "closedAt" | "cancelledReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LmsAssignmentEntity
  extends Model<LmsAssignmentAttributes, LmsAssignmentCreationAttributes>
  implements LmsAssignmentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare assignmentId: string
  declare courseOfferingId: string
  declare createdByStaffId: string
  declare assessmentTypeCode: string
  declare title: string
  declare instructions: string
  declare attachmentFileId: string | null
  declare submissionMode: string
  declare maxMarks: number
  declare publishedAt: Date | null
  declare dueAt: Date
  declare allowLate: string
  declare lateUntil: Date | null
  declare latePenaltyPct: string
  declare maxAttempts: number
  declare isGroupWork: string
  declare status: string
  declare closedAt: Date | null
  declare cancelledReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLmsAssignmentEntity(sequelize: Sequelize): typeof LmsAssignmentEntity {
  LmsAssignmentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lms_assignment')"),
      },
      assignmentId: {
        type: DataTypes.TEXT,
        field: 'assignment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: false,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      createdByStaffId: {
        type: DataTypes.TEXT,
        field: 'created_by_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      assessmentTypeCode: {
        type: DataTypes.TEXT,
        field: 'assessment_type_code',
        allowNull: false,
        defaultValue: "assignment",
        references: { model: 'exam_assessment_type', key: 'assessment_type_code' },
        onUpdate: 'CASCADE',
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      instructions: {
        type: DataTypes.TEXT,
        field: 'instructions',
        allowNull: false,
      },
      attachmentFileId: {
        type: DataTypes.TEXT,
        field: 'attachment_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      submissionMode: {
        type: DataTypes.TEXT,
        field: 'submission_mode',
        allowNull: false,
        defaultValue: "file",
      },
      maxMarks: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'max_marks',
        allowNull: false,
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      dueAt: {
        type: DataTypes.DATE,
        field: 'due_at',
        allowNull: false,
      },
      allowLate: {
        type: DataTypes.TEXT,
        field: 'allow_late',
        allowNull: false,
        defaultValue: false,
      },
      lateUntil: {
        type: DataTypes.DATE,
        field: 'late_until',
        allowNull: true,
      },
      latePenaltyPct: {
        type: DataTypes.TEXT,
        field: 'late_penalty_pct',
        allowNull: false,
        defaultValue: 0,
      },
      maxAttempts: {
        type: DataTypes.SMALLINT,
        field: 'max_attempts',
        allowNull: false,
        defaultValue: 1,
      },
      isGroupWork: {
        type: DataTypes.TEXT,
        field: 'is_group_work',
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
        allowNull: true,
      },
      cancelledReason: {
        type: DataTypes.TEXT,
        field: 'cancelled_reason',
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
      tableName: 'lms_assignment',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return LmsAssignmentEntity
}
