import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisCourseRegistrationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  courseRegistrationId?: string
  studentEnrollmentId: string
  studentId: string
  courseOfferingId: string
  status?: string
  registeredAt?: Date
  creditsAttempted?: number | null
  isAudit?: string
  droppedAt?: Date | null
  dropReason?: string | null
  completedOn?: Date | null
  approvedByUserId?: string | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SisCourseRegistrationCreationAttributes = Optional<SisCourseRegistrationAttributes, "id" | "publicId" | "recordCode" | "courseRegistrationId" | "status" | "registeredAt" | "creditsAttempted" | "isAudit" | "droppedAt" | "dropReason" | "completedOn" | "approvedByUserId" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SisCourseRegistrationEntity
  extends Model<SisCourseRegistrationAttributes, SisCourseRegistrationCreationAttributes>
  implements SisCourseRegistrationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare courseRegistrationId: string
  declare studentEnrollmentId: string
  declare studentId: string
  declare courseOfferingId: string
  declare status: string
  declare registeredAt: Date
  declare creditsAttempted: number | null
  declare isAudit: string
  declare droppedAt: Date | null
  declare dropReason: string | null
  declare completedOn: Date | null
  declare approvedByUserId: string | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSisCourseRegistrationEntity(sequelize: Sequelize): typeof SisCourseRegistrationEntity {
  SisCourseRegistrationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_course_registration')"),
      },
      courseRegistrationId: {
        type: DataTypes.TEXT,
        field: 'course_registration_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      studentEnrollmentId: {
        type: DataTypes.TEXT,
        field: 'student_enrollment_id',
        allowNull: false,
        references: { model: 'sis_student_enrollment', key: 'student_enrollment_id' },
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
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "registered",
      },
      registeredAt: {
        type: DataTypes.DATE,
        field: 'registered_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      creditsAttempted: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'credits_attempted',
        allowNull: true,
      },
      isAudit: {
        type: DataTypes.TEXT,
        field: 'is_audit',
        allowNull: false,
        defaultValue: false,
      },
      droppedAt: {
        type: DataTypes.DATE,
        field: 'dropped_at',
        allowNull: true,
      },
      dropReason: {
        type: DataTypes.TEXT,
        field: 'drop_reason',
        allowNull: true,
      },
      completedOn: {
        type: DataTypes.DATEONLY,
        field: 'completed_on',
        allowNull: true,
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
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
      tableName: 'sis_course_registration',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['student_id', 'course_offering_id'] }
      ]
    }
  )
  return SisCourseRegistrationEntity
}
