import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisStudentTransferAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentTransferId?: string
  studentId: string
  direction: string
  status?: string
  transferDate: string
  otherSchoolName: string
  otherSchoolCity?: string | null
  otherSchoolBoard?: string | null
  lastGradeCompleted?: string | null
  reason?: string | null
  incomingTcNo?: string | null
  issuedCertificateId?: string | null
  requestedByPersonId?: string | null
  decidedByUserId?: string | null
  decidedAt?: Date | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SisStudentTransferCreationAttributes = Optional<SisStudentTransferAttributes, "id" | "publicId" | "recordCode" | "studentTransferId" | "status" | "otherSchoolCity" | "otherSchoolBoard" | "lastGradeCompleted" | "reason" | "incomingTcNo" | "issuedCertificateId" | "requestedByPersonId" | "decidedByUserId" | "decidedAt" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SisStudentTransferEntity
  extends Model<SisStudentTransferAttributes, SisStudentTransferCreationAttributes>
  implements SisStudentTransferAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentTransferId: string
  declare studentId: string
  declare direction: string
  declare status: string
  declare transferDate: string
  declare otherSchoolName: string
  declare otherSchoolCity: string | null
  declare otherSchoolBoard: string | null
  declare lastGradeCompleted: string | null
  declare reason: string | null
  declare incomingTcNo: string | null
  declare issuedCertificateId: string | null
  declare requestedByPersonId: string | null
  declare decidedByUserId: string | null
  declare decidedAt: Date | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSisStudentTransferEntity(sequelize: Sequelize): typeof SisStudentTransferEntity {
  SisStudentTransferEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_transfer')"),
      },
      studentTransferId: {
        type: DataTypes.TEXT,
        field: 'student_transfer_id',
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
      direction: {
        type: DataTypes.TEXT,
        field: 'direction',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      transferDate: {
        type: DataTypes.TEXT,
        field: 'transfer_date',
        allowNull: false,
      },
      otherSchoolName: {
        type: DataTypes.TEXT,
        field: 'other_school_name',
        allowNull: false,
      },
      otherSchoolCity: {
        type: DataTypes.TEXT,
        field: 'other_school_city',
        allowNull: true,
      },
      otherSchoolBoard: {
        type: DataTypes.TEXT,
        field: 'other_school_board',
        allowNull: true,
      },
      lastGradeCompleted: {
        type: DataTypes.TEXT,
        field: 'last_grade_completed',
        allowNull: true,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: true,
      },
      incomingTcNo: {
        type: DataTypes.STRING(40),
        field: 'incoming_tc_no',
        allowNull: true,
      },
      issuedCertificateId: {
        type: DataTypes.TEXT,
        field: 'issued_certificate_id',
        allowNull: true,
        references: { model: 'docs_issued_certificate', key: 'issued_certificate_id' },
      },
      requestedByPersonId: {
        type: DataTypes.TEXT,
        field: 'requested_by_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      decidedByUserId: {
        type: DataTypes.TEXT,
        field: 'decided_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
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
      tableName: 'sis_student_transfer',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['issued_certificate_id'] }
      ]
    }
  )
  return SisStudentTransferEntity
}
