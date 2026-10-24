import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AtndStudentLeaveRequestAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentLeaveRequestId?: string
  studentId: string
  requestedByPersonId: string
  fromDate: string
  toDate: string
  leavePeriod?: string | null
  isHalfDay?: string
  reason: string
  isMedical?: string
  fileId?: string | null
  status?: string
  submittedAt?: Date
  reviewedByUserId?: string | null
  reviewedAt?: Date | null
  reviewNote?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AtndStudentLeaveRequestCreationAttributes = Optional<AtndStudentLeaveRequestAttributes, "id" | "publicId" | "recordCode" | "studentLeaveRequestId" | "leavePeriod" | "isHalfDay" | "isMedical" | "fileId" | "status" | "submittedAt" | "reviewedByUserId" | "reviewedAt" | "reviewNote" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AtndStudentLeaveRequestEntity
  extends Model<AtndStudentLeaveRequestAttributes, AtndStudentLeaveRequestCreationAttributes>
  implements AtndStudentLeaveRequestAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentLeaveRequestId: string
  declare studentId: string
  declare requestedByPersonId: string
  declare fromDate: string
  declare toDate: string
  declare leavePeriod: string | null
  declare isHalfDay: string
  declare reason: string
  declare isMedical: string
  declare fileId: string | null
  declare status: string
  declare submittedAt: Date
  declare reviewedByUserId: string | null
  declare reviewedAt: Date | null
  declare reviewNote: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAtndStudentLeaveRequestEntity(sequelize: Sequelize): typeof AtndStudentLeaveRequestEntity {
  AtndStudentLeaveRequestEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('atnd_student_leave_request')"),
      },
      studentLeaveRequestId: {
        type: DataTypes.TEXT,
        field: 'student_leave_request_id',
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
      requestedByPersonId: {
        type: DataTypes.TEXT,
        field: 'requested_by_person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      fromDate: {
        type: DataTypes.TEXT,
        field: 'from_date',
        allowNull: false,
      },
      toDate: {
        type: DataTypes.TEXT,
        field: 'to_date',
        allowNull: false,
      },
      leavePeriod: {
        type: DataTypes.TEXT,
        field: 'leave_period',
        allowNull: true,
        autoIncrement: true,
      },
      isHalfDay: {
        type: DataTypes.TEXT,
        field: 'is_half_day',
        allowNull: false,
        defaultValue: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      isMedical: {
        type: DataTypes.TEXT,
        field: 'is_medical',
        allowNull: false,
        defaultValue: false,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      submittedAt: {
        type: DataTypes.DATE,
        field: 'submitted_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      reviewNote: {
        type: DataTypes.TEXT,
        field: 'review_note',
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
      tableName: 'atnd_student_leave_request',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AtndStudentLeaveRequestEntity
}
