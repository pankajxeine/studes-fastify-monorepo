import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LmsLessonPlanAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  lessonPlanId?: string
  courseOfferingId: string
  staffId: string
  plannedDate: string
  periodCount?: number
  sequenceNo?: number | null
  unitTitle: string
  topic: string
  learningObjectives: string
  teachingMethods?: string | null
  resources?: string | null
  homework?: string | null
  assessmentNotes?: string | null
  status?: string
  submittedAt?: Date | null
  reviewedByUserId?: string | null
  reviewedAt?: Date | null
  reviewComment?: string | null
  deliveredOn?: Date | null
  deliveryNotes?: string | null
  cancelledReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LmsLessonPlanCreationAttributes = Optional<LmsLessonPlanAttributes, "id" | "publicId" | "recordCode" | "lessonPlanId" | "periodCount" | "sequenceNo" | "teachingMethods" | "resources" | "homework" | "assessmentNotes" | "status" | "submittedAt" | "reviewedByUserId" | "reviewedAt" | "reviewComment" | "deliveredOn" | "deliveryNotes" | "cancelledReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LmsLessonPlanEntity
  extends Model<LmsLessonPlanAttributes, LmsLessonPlanCreationAttributes>
  implements LmsLessonPlanAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare lessonPlanId: string
  declare courseOfferingId: string
  declare staffId: string
  declare plannedDate: string
  declare periodCount: number
  declare sequenceNo: number | null
  declare unitTitle: string
  declare topic: string
  declare learningObjectives: string
  declare teachingMethods: string | null
  declare resources: string | null
  declare homework: string | null
  declare assessmentNotes: string | null
  declare status: string
  declare submittedAt: Date | null
  declare reviewedByUserId: string | null
  declare reviewedAt: Date | null
  declare reviewComment: string | null
  declare deliveredOn: Date | null
  declare deliveryNotes: string | null
  declare cancelledReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLmsLessonPlanEntity(sequelize: Sequelize): typeof LmsLessonPlanEntity {
  LmsLessonPlanEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lms_lesson_plan')"),
      },
      lessonPlanId: {
        type: DataTypes.TEXT,
        field: 'lesson_plan_id',
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
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      plannedDate: {
        type: DataTypes.TEXT,
        field: 'planned_date',
        allowNull: false,
      },
      periodCount: {
        type: DataTypes.SMALLINT,
        field: 'period_count',
        allowNull: false,
        defaultValue: 1,
      },
      sequenceNo: {
        type: DataTypes.SMALLINT,
        field: 'sequence_no',
        allowNull: true,
      },
      unitTitle: {
        type: DataTypes.TEXT,
        field: 'unit_title',
        allowNull: false,
      },
      topic: {
        type: DataTypes.TEXT,
        field: 'topic',
        allowNull: false,
      },
      learningObjectives: {
        type: DataTypes.TEXT,
        field: 'learning_objectives',
        allowNull: false,
      },
      teachingMethods: {
        type: DataTypes.TEXT,
        field: 'teaching_methods',
        allowNull: true,
      },
      resources: {
        type: DataTypes.TEXT,
        field: 'resources',
        allowNull: true,
      },
      homework: {
        type: DataTypes.TEXT,
        field: 'homework',
        allowNull: true,
      },
      assessmentNotes: {
        type: DataTypes.TEXT,
        field: 'assessment_notes',
        allowNull: true,
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
      reviewedByUserId: {
        type: DataTypes.TEXT,
        field: 'reviewed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      reviewedAt: {
        type: DataTypes.DATE,
        field: 'reviewed_at',
        allowNull: true,
      },
      reviewComment: {
        type: DataTypes.TEXT,
        field: 'review_comment',
        allowNull: true,
      },
      deliveredOn: {
        type: DataTypes.DATEONLY,
        field: 'delivered_on',
        allowNull: true,
      },
      deliveryNotes: {
        type: DataTypes.TEXT,
        field: 'delivery_notes',
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
      tableName: 'lms_lesson_plan',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['course_offering_id', 'sequence_no'] }
      ]
    }
  )
  return LmsLessonPlanEntity
}
