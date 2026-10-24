import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisStudentEnrollmentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentEnrollmentId?: string
  studentId: string
  academicYearId: string
  termId?: string | null
  campusId: string
  programId: string
  gradeLevelId: string
  sectionId?: string | null
  rollNo?: number | null
  status?: string
  enrolledOn: string
  exitedOn?: Date | null
  enrollmentPeriod?: string | null
  promotedFromEnrollmentId?: string | null
  isRepeating?: string
  exitReason?: string | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SisStudentEnrollmentCreationAttributes = Optional<SisStudentEnrollmentAttributes, "id" | "publicId" | "recordCode" | "studentEnrollmentId" | "termId" | "sectionId" | "rollNo" | "status" | "exitedOn" | "enrollmentPeriod" | "promotedFromEnrollmentId" | "isRepeating" | "exitReason" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SisStudentEnrollmentEntity
  extends Model<SisStudentEnrollmentAttributes, SisStudentEnrollmentCreationAttributes>
  implements SisStudentEnrollmentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentEnrollmentId: string
  declare studentId: string
  declare academicYearId: string
  declare termId: string | null
  declare campusId: string
  declare programId: string
  declare gradeLevelId: string
  declare sectionId: string | null
  declare rollNo: number | null
  declare status: string
  declare enrolledOn: string
  declare exitedOn: Date | null
  declare enrollmentPeriod: string | null
  declare promotedFromEnrollmentId: string | null
  declare isRepeating: string
  declare exitReason: string | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSisStudentEnrollmentEntity(sequelize: Sequelize): typeof SisStudentEnrollmentEntity {
  SisStudentEnrollmentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_enrollment')"),
      },
      studentEnrollmentId: {
        type: DataTypes.TEXT,
        field: 'student_enrollment_id',
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
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      termId: {
        type: DataTypes.UUID,
        field: 'term_id',
        allowNull: true,
        references: { model: 'acad_term', key: 'term_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: false,
        references: { model: 'acad_program', key: 'program_id' },
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: false,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      sectionId: {
        type: DataTypes.UUID,
        field: 'section_id',
        allowNull: true,
        references: { model: 'acad_section', key: 'section_id' },
      },
      rollNo: {
        type: DataTypes.SMALLINT,
        field: 'roll_no',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "enrolled",
      },
      enrolledOn: {
        type: DataTypes.TEXT,
        field: 'enrolled_on',
        allowNull: false,
      },
      exitedOn: {
        type: DataTypes.DATEONLY,
        field: 'exited_on',
        allowNull: true,
      },
      enrollmentPeriod: {
        type: DataTypes.TEXT,
        field: 'enrollment_period',
        allowNull: true,
        autoIncrement: true,
      },
      promotedFromEnrollmentId: {
        type: DataTypes.UUID,
        field: 'promoted_from_enrollment_id',
        allowNull: true,
        references: { model: 'sis_student_enrollment', key: 'student_enrollment_id' },
      },
      isRepeating: {
        type: DataTypes.TEXT,
        field: 'is_repeating',
        allowNull: false,
        defaultValue: false,
      },
      exitReason: {
        type: DataTypes.TEXT,
        field: 'exit_reason',
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
      tableName: 'sis_student_enrollment',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['student_enrollment_id', 'student_id'] },
      { unique: true, fields: ['promoted_from_enrollment_id'] }
      ]
    }
  )
  return SisStudentEnrollmentEntity
}
