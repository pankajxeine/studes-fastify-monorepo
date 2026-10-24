import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LmsAssignmentSubmissionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  assignmentSubmissionId?: string
  assignmentId: string
  studentId: string
  attemptNo?: number
  submittedAt?: Date
  submissionText?: string | null
  fileId?: string | null
  isLate?: string
  status?: string
  marksAwarded?: number | null
  penaltyMarks?: number
  finalMarks?: number | null
  feedback?: string | null
  gradedByStaffId?: string | null
  gradedAt?: Date | null
  returnedAt?: Date | null
  resubmitReason?: string | null
  similarityPct?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LmsAssignmentSubmissionCreationAttributes = Optional<LmsAssignmentSubmissionAttributes, "id" | "publicId" | "recordCode" | "assignmentSubmissionId" | "attemptNo" | "submittedAt" | "submissionText" | "fileId" | "isLate" | "status" | "marksAwarded" | "penaltyMarks" | "finalMarks" | "feedback" | "gradedByStaffId" | "gradedAt" | "returnedAt" | "resubmitReason" | "similarityPct" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LmsAssignmentSubmissionEntity
  extends Model<LmsAssignmentSubmissionAttributes, LmsAssignmentSubmissionCreationAttributes>
  implements LmsAssignmentSubmissionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare assignmentSubmissionId: string
  declare assignmentId: string
  declare studentId: string
  declare attemptNo: number
  declare submittedAt: Date
  declare submissionText: string | null
  declare fileId: string | null
  declare isLate: string
  declare status: string
  declare marksAwarded: number | null
  declare penaltyMarks: number
  declare finalMarks: number | null
  declare feedback: string | null
  declare gradedByStaffId: string | null
  declare gradedAt: Date | null
  declare returnedAt: Date | null
  declare resubmitReason: string | null
  declare similarityPct: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLmsAssignmentSubmissionEntity(sequelize: Sequelize): typeof LmsAssignmentSubmissionEntity {
  LmsAssignmentSubmissionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lms_assignment_submission')"),
      },
      assignmentSubmissionId: {
        type: DataTypes.TEXT,
        field: 'assignment_submission_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      assignmentId: {
        type: DataTypes.TEXT,
        field: 'assignment_id',
        allowNull: false,
        references: { model: 'lms_assignment', key: 'assignment_id' },
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      attemptNo: {
        type: DataTypes.SMALLINT,
        field: 'attempt_no',
        allowNull: false,
        defaultValue: 1,
      },
      submittedAt: {
        type: DataTypes.DATE,
        field: 'submitted_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      submissionText: {
        type: DataTypes.TEXT,
        field: 'submission_text',
        allowNull: true,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      isLate: {
        type: DataTypes.TEXT,
        field: 'is_late',
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "submitted",
      },
      marksAwarded: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'marks_awarded',
        allowNull: true,
      },
      penaltyMarks: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'penalty_marks',
        allowNull: false,
        defaultValue: 0,
      },
      finalMarks: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'final_marks',
        allowNull: true,
        autoIncrement: true,
      },
      feedback: {
        type: DataTypes.TEXT,
        field: 'feedback',
        allowNull: true,
      },
      gradedByStaffId: {
        type: DataTypes.TEXT,
        field: 'graded_by_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      gradedAt: {
        type: DataTypes.DATE,
        field: 'graded_at',
        allowNull: true,
      },
      returnedAt: {
        type: DataTypes.DATE,
        field: 'returned_at',
        allowNull: true,
      },
      resubmitReason: {
        type: DataTypes.TEXT,
        field: 'resubmit_reason',
        allowNull: true,
      },
      similarityPct: {
        type: DataTypes.TEXT,
        field: 'similarity_pct',
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
      tableName: 'lms_assignment_submission',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['assignment_id', 'student_id', 'attempt_no'] }
      ]
    }
  )
  return LmsAssignmentSubmissionEntity
}
