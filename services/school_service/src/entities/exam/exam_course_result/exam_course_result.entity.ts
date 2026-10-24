import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ExamCourseResultAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  courseResultId?: string
  studentId: string
  courseOfferingId: string
  termId: string
  percentage?: string | null
  letterGrade?: string | null
  gradePoint?: number | null
  creditsAttempted?: number | null
  creditsEarned?: number | null
  qualityPoints?: number | null
  result?: string | null
  status?: string
  isPublished?: string | null
  classRank?: number | null
  computedAt?: Date
  publishedAt?: Date | null
  publishedByUserId?: string | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type ExamCourseResultCreationAttributes = Optional<ExamCourseResultAttributes, "id" | "publicId" | "recordCode" | "courseResultId" | "percentage" | "letterGrade" | "gradePoint" | "creditsAttempted" | "creditsEarned" | "qualityPoints" | "result" | "status" | "isPublished" | "classRank" | "computedAt" | "publishedAt" | "publishedByUserId" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class ExamCourseResultEntity
  extends Model<ExamCourseResultAttributes, ExamCourseResultCreationAttributes>
  implements ExamCourseResultAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare courseResultId: string
  declare studentId: string
  declare courseOfferingId: string
  declare termId: string
  declare percentage: string | null
  declare letterGrade: string | null
  declare gradePoint: number | null
  declare creditsAttempted: number | null
  declare creditsEarned: number | null
  declare qualityPoints: number | null
  declare result: string | null
  declare status: string
  declare isPublished: string | null
  declare classRank: number | null
  declare computedAt: Date
  declare publishedAt: Date | null
  declare publishedByUserId: string | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initExamCourseResultEntity(sequelize: Sequelize): typeof ExamCourseResultEntity {
  ExamCourseResultEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('exam_course_result')"),
      },
      courseResultId: {
        type: DataTypes.TEXT,
        field: 'course_result_id',
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
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: false,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      termId: {
        type: DataTypes.TEXT,
        field: 'term_id',
        allowNull: false,
        references: { model: 'acad_term', key: 'term_id' },
      },
      percentage: {
        type: DataTypes.TEXT,
        field: 'percentage',
        allowNull: true,
      },
      letterGrade: {
        type: DataTypes.STRING(5),
        field: 'letter_grade',
        allowNull: true,
      },
      gradePoint: {
        type: DataTypes.DECIMAL(3, 2),
        field: 'grade_point',
        allowNull: true,
      },
      creditsAttempted: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'credits_attempted',
        allowNull: true,
      },
      creditsEarned: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'credits_earned',
        allowNull: true,
      },
      qualityPoints: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'quality_points',
        allowNull: true,
        autoIncrement: true,
      },
      result: {
        type: DataTypes.TEXT,
        field: 'result',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "provisional",
      },
      isPublished: {
        type: DataTypes.TEXT,
        field: 'is_published',
        allowNull: true,
        autoIncrement: true,
      },
      classRank: {
        type: DataTypes.SMALLINT,
        field: 'class_rank',
        allowNull: true,
      },
      computedAt: {
        type: DataTypes.DATE,
        field: 'computed_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      tableName: 'exam_course_result',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['student_id', 'course_offering_id'] }
      ]
    }
  )
  return ExamCourseResultEntity
}
