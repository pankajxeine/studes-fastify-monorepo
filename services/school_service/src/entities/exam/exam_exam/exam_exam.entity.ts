import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ExamExamAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  examId?: string
  academicYearId: string
  termId: string
  campusId: string
  assessmentTypeCode: string
  code: string
  name: string
  description?: string | null
  startDate: string
  endDate: string
  examWindow?: string | null
  status?: string
  marksEntryDueOn?: Date | null
  resultsPlannedOn?: Date | null
  publishedAt?: Date | null
  publishedByUserId?: string | null
  cancelledReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type ExamExamCreationAttributes = Optional<ExamExamAttributes, "id" | "publicId" | "recordCode" | "examId" | "description" | "examWindow" | "status" | "marksEntryDueOn" | "resultsPlannedOn" | "publishedAt" | "publishedByUserId" | "cancelledReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class ExamExamEntity
  extends Model<ExamExamAttributes, ExamExamCreationAttributes>
  implements ExamExamAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare examId: string
  declare academicYearId: string
  declare termId: string
  declare campusId: string
  declare assessmentTypeCode: string
  declare code: string
  declare name: string
  declare description: string | null
  declare startDate: string
  declare endDate: string
  declare examWindow: string | null
  declare status: string
  declare marksEntryDueOn: Date | null
  declare resultsPlannedOn: Date | null
  declare publishedAt: Date | null
  declare publishedByUserId: string | null
  declare cancelledReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initExamExamEntity(sequelize: Sequelize): typeof ExamExamEntity {
  ExamExamEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('exam_exam')"),
      },
      examId: {
        type: DataTypes.TEXT,
        field: 'exam_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      termId: {
        type: DataTypes.TEXT,
        field: 'term_id',
        allowNull: false,
        references: { model: 'acad_term', key: 'term_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      assessmentTypeCode: {
        type: DataTypes.TEXT,
        field: 'assessment_type_code',
        allowNull: false,
        references: { model: 'exam_assessment_type', key: 'assessment_type_code' },
        onUpdate: 'CASCADE',
      },
      code: {
        type: DataTypes.STRING(30),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.TEXT,
        field: 'end_date',
        allowNull: false,
      },
      examWindow: {
        type: DataTypes.TEXT,
        field: 'exam_window',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      marksEntryDueOn: {
        type: DataTypes.DATEONLY,
        field: 'marks_entry_due_on',
        allowNull: true,
      },
      resultsPlannedOn: {
        type: DataTypes.DATEONLY,
        field: 'results_planned_on',
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
      tableName: 'exam_exam',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return ExamExamEntity
}
