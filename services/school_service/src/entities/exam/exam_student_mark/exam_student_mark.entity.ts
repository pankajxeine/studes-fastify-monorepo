import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ExamStudentMarkAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentMarkId?: string
  examScheduleId: string
  studentId: string
  marksObtained?: number | null
  isAbsent?: string
  isExempt?: string
  percentage?: string | null
  gradeLabel?: string | null
  enteredByStaffId: string
  enteredAt?: Date
  originalMarks?: number | null
  moderationReason?: string | null
  moderatedAt?: Date | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type ExamStudentMarkCreationAttributes = Optional<ExamStudentMarkAttributes, "id" | "publicId" | "recordCode" | "studentMarkId" | "marksObtained" | "isAbsent" | "isExempt" | "percentage" | "gradeLabel" | "enteredAt" | "originalMarks" | "moderationReason" | "moderatedAt" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class ExamStudentMarkEntity
  extends Model<ExamStudentMarkAttributes, ExamStudentMarkCreationAttributes>
  implements ExamStudentMarkAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentMarkId: string
  declare examScheduleId: string
  declare studentId: string
  declare marksObtained: number | null
  declare isAbsent: string
  declare isExempt: string
  declare percentage: string | null
  declare gradeLabel: string | null
  declare enteredByStaffId: string
  declare enteredAt: Date
  declare originalMarks: number | null
  declare moderationReason: string | null
  declare moderatedAt: Date | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initExamStudentMarkEntity(sequelize: Sequelize): typeof ExamStudentMarkEntity {
  ExamStudentMarkEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('exam_student_mark')"),
      },
      studentMarkId: {
        type: DataTypes.TEXT,
        field: 'student_mark_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      examScheduleId: {
        type: DataTypes.TEXT,
        field: 'exam_schedule_id',
        allowNull: false,
        references: { model: 'exam_exam_schedule', key: 'exam_schedule_id' },
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      marksObtained: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'marks_obtained',
        allowNull: true,
      },
      isAbsent: {
        type: DataTypes.TEXT,
        field: 'is_absent',
        allowNull: false,
        defaultValue: false,
      },
      isExempt: {
        type: DataTypes.TEXT,
        field: 'is_exempt',
        allowNull: false,
        defaultValue: false,
      },
      percentage: {
        type: DataTypes.TEXT,
        field: 'percentage',
        allowNull: true,
      },
      gradeLabel: {
        type: DataTypes.STRING(5),
        field: 'grade_label',
        allowNull: true,
      },
      enteredByStaffId: {
        type: DataTypes.TEXT,
        field: 'entered_by_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      enteredAt: {
        type: DataTypes.DATE,
        field: 'entered_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      originalMarks: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'original_marks',
        allowNull: true,
      },
      moderationReason: {
        type: DataTypes.TEXT,
        field: 'moderation_reason',
        allowNull: true,
      },
      moderatedAt: {
        type: DataTypes.DATE,
        field: 'moderated_at',
        allowNull: true,
      },
      remarks: {
        type: DataTypes.TEXT,
        field: 'remarks',
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
      tableName: 'exam_student_mark',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['exam_schedule_id', 'student_id'] }
      ]
    }
  )
  return ExamStudentMarkEntity
}
