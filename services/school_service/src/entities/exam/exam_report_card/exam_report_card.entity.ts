import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ExamReportCardAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  reportCardId?: string
  studentId: string
  studentEnrollmentId: string
  termId: string
  examId?: string | null
  kind?: string
  status?: string
  overallPercentage?: string | null
  overallGrade?: string | null
  gpa?: number | null
  classRank?: number | null
  classSize?: number | null
  attendancePct?: string | null
  daysPresent?: number | null
  workingDays?: number | null
  fileId?: string | null
  generatedAt?: Date | null
  publishedAt?: Date | null
  publishedByUserId?: string | null
  withdrawnReason?: string | null
  acknowledgedAt?: Date | null
  acknowledgedByPersonId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type ExamReportCardCreationAttributes = Optional<ExamReportCardAttributes, "id" | "publicId" | "recordCode" | "reportCardId" | "examId" | "kind" | "status" | "overallPercentage" | "overallGrade" | "gpa" | "classRank" | "classSize" | "attendancePct" | "daysPresent" | "workingDays" | "fileId" | "generatedAt" | "publishedAt" | "publishedByUserId" | "withdrawnReason" | "acknowledgedAt" | "acknowledgedByPersonId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class ExamReportCardEntity
  extends Model<ExamReportCardAttributes, ExamReportCardCreationAttributes>
  implements ExamReportCardAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare reportCardId: string
  declare studentId: string
  declare studentEnrollmentId: string
  declare termId: string
  declare examId: string | null
  declare kind: string
  declare status: string
  declare overallPercentage: string | null
  declare overallGrade: string | null
  declare gpa: number | null
  declare classRank: number | null
  declare classSize: number | null
  declare attendancePct: string | null
  declare daysPresent: number | null
  declare workingDays: number | null
  declare fileId: string | null
  declare generatedAt: Date | null
  declare publishedAt: Date | null
  declare publishedByUserId: string | null
  declare withdrawnReason: string | null
  declare acknowledgedAt: Date | null
  declare acknowledgedByPersonId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initExamReportCardEntity(sequelize: Sequelize): typeof ExamReportCardEntity {
  ExamReportCardEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('exam_report_card')"),
      },
      reportCardId: {
        type: DataTypes.TEXT,
        field: 'report_card_id',
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
      studentEnrollmentId: {
        type: DataTypes.TEXT,
        field: 'student_enrollment_id',
        allowNull: false,
        references: { model: 'sis_student_enrollment', key: 'student_enrollment_id' },
      },
      termId: {
        type: DataTypes.TEXT,
        field: 'term_id',
        allowNull: false,
        references: { model: 'acad_term', key: 'term_id' },
      },
      examId: {
        type: DataTypes.TEXT,
        field: 'exam_id',
        allowNull: true,
        references: { model: 'exam_exam', key: 'exam_id' },
      },
      kind: {
        type: DataTypes.TEXT,
        field: 'kind',
        allowNull: false,
        defaultValue: "term_end",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      overallPercentage: {
        type: DataTypes.TEXT,
        field: 'overall_percentage',
        allowNull: true,
      },
      overallGrade: {
        type: DataTypes.STRING(5),
        field: 'overall_grade',
        allowNull: true,
      },
      gpa: {
        type: DataTypes.DECIMAL(4, 2),
        field: 'gpa',
        allowNull: true,
      },
      classRank: {
        type: DataTypes.SMALLINT,
        field: 'class_rank',
        allowNull: true,
      },
      classSize: {
        type: DataTypes.SMALLINT,
        field: 'class_size',
        allowNull: true,
      },
      attendancePct: {
        type: DataTypes.TEXT,
        field: 'attendance_pct',
        allowNull: true,
      },
      daysPresent: {
        type: DataTypes.DECIMAL(5, 1),
        field: 'days_present',
        allowNull: true,
      },
      workingDays: {
        type: DataTypes.SMALLINT,
        field: 'working_days',
        allowNull: true,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      generatedAt: {
        type: DataTypes.DATE,
        field: 'generated_at',
        allowNull: true,
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      publishedByUserId: {
        type: DataTypes.TEXT,
        field: 'published_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      withdrawnReason: {
        type: DataTypes.TEXT,
        field: 'withdrawn_reason',
        allowNull: true,
      },
      acknowledgedAt: {
        type: DataTypes.DATE,
        field: 'acknowledged_at',
        allowNull: true,
      },
      acknowledgedByPersonId: {
        type: DataTypes.TEXT,
        field: 'acknowledged_by_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
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
      tableName: 'exam_report_card',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return ExamReportCardEntity
}
