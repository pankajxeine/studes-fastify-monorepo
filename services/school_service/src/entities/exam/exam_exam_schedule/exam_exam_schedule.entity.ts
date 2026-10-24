import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type ExamExamScheduleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  examScheduleId?: string
  examId: string
  courseOfferingId: string
  roomId?: string | null
  examDate: string
  startTime: Date
  endTime: Date
  sitting?: string | null
  maxMarks: number
  passMarks?: number | null
  invigilatorStaffId?: string | null
  status?: string
  marksStatus?: string
  marksSubmittedAt?: Date | null
  marksVerifiedAt?: Date | null
  marksVerifiedByUserId?: string | null
  instructions?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type ExamExamScheduleCreationAttributes = Optional<ExamExamScheduleAttributes, "id" | "publicId" | "recordCode" | "examScheduleId" | "roomId" | "sitting" | "passMarks" | "invigilatorStaffId" | "status" | "marksStatus" | "marksSubmittedAt" | "marksVerifiedAt" | "marksVerifiedByUserId" | "instructions" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class ExamExamScheduleEntity
  extends Model<ExamExamScheduleAttributes, ExamExamScheduleCreationAttributes>
  implements ExamExamScheduleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare examScheduleId: string
  declare examId: string
  declare courseOfferingId: string
  declare roomId: string | null
  declare examDate: string
  declare startTime: Date
  declare endTime: Date
  declare sitting: string | null
  declare maxMarks: number
  declare passMarks: number | null
  declare invigilatorStaffId: string | null
  declare status: string
  declare marksStatus: string
  declare marksSubmittedAt: Date | null
  declare marksVerifiedAt: Date | null
  declare marksVerifiedByUserId: string | null
  declare instructions: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initExamExamScheduleEntity(sequelize: Sequelize): typeof ExamExamScheduleEntity {
  ExamExamScheduleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('exam_exam_schedule')"),
      },
      examScheduleId: {
        type: DataTypes.TEXT,
        field: 'exam_schedule_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      examId: {
        type: DataTypes.TEXT,
        field: 'exam_id',
        allowNull: false,
        references: { model: 'exam_exam', key: 'exam_id' },
        onDelete: 'CASCADE',
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: false,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      examDate: {
        type: DataTypes.TEXT,
        field: 'exam_date',
        allowNull: false,
      },
      startTime: {
        type: DataTypes.TIME,
        field: 'start_time',
        allowNull: false,
      },
      endTime: {
        type: DataTypes.TIME,
        field: 'end_time',
        allowNull: false,
      },
      sitting: {
        type: DataTypes.TEXT,
        field: 'sitting',
        allowNull: true,
        autoIncrement: true,
      },
      maxMarks: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'max_marks',
        allowNull: false,
      },
      passMarks: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'pass_marks',
        allowNull: true,
      },
      invigilatorStaffId: {
        type: DataTypes.TEXT,
        field: 'invigilator_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "scheduled",
      },
      marksStatus: {
        type: DataTypes.TEXT,
        field: 'marks_status',
        allowNull: false,
        defaultValue: "not_started",
      },
      marksSubmittedAt: {
        type: DataTypes.DATE,
        field: 'marks_submitted_at',
        allowNull: true,
      },
      marksVerifiedAt: {
        type: DataTypes.DATE,
        field: 'marks_verified_at',
        allowNull: true,
      },
      marksVerifiedByUserId: {
        type: DataTypes.TEXT,
        field: 'marks_verified_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      instructions: {
        type: DataTypes.TEXT,
        field: 'instructions',
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
      tableName: 'exam_exam_schedule',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['exam_id', 'course_offering_id'] }
      ]
    }
  )
  return ExamExamScheduleEntity
}
