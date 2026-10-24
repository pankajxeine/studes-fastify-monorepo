import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SisStudentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studentId?: string
  personId: string
  campusId: string
  applicationId?: string | null
  houseId?: string | null
  admissionNo: string
  admittedOn: string
  cohortYear: number
  status?: string
  leftOn?: Date | null
  leavingReason?: string | null
  graduatedOn?: Date | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type SisStudentCreationAttributes = Optional<SisStudentAttributes, "id" | "publicId" | "recordCode" | "studentId" | "applicationId" | "houseId" | "status" | "leftOn" | "leavingReason" | "graduatedOn" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class SisStudentEntity
  extends Model<SisStudentAttributes, SisStudentCreationAttributes>
  implements SisStudentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studentId: string
  declare personId: string
  declare campusId: string
  declare applicationId: string | null
  declare houseId: string | null
  declare admissionNo: string
  declare admittedOn: string
  declare cohortYear: number
  declare status: string
  declare leftOn: Date | null
  declare leavingReason: string | null
  declare graduatedOn: Date | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initSisStudentEntity(sequelize: Sequelize): typeof SisStudentEntity {
  SisStudentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('sis_student')"),
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'admis_application', key: 'application_id' },
      },
      houseId: {
        type: DataTypes.UUID,
        field: 'house_id',
        allowNull: true,
        references: { model: 'sis_house', key: 'house_id' },
      },
      admissionNo: {
        type: DataTypes.STRING(30),
        field: 'admission_no',
        allowNull: false,
      },
      admittedOn: {
        type: DataTypes.TEXT,
        field: 'admitted_on',
        allowNull: false,
      },
      cohortYear: {
        type: DataTypes.SMALLINT,
        field: 'cohort_year',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      leftOn: {
        type: DataTypes.DATEONLY,
        field: 'left_on',
        allowNull: true,
      },
      leavingReason: {
        type: DataTypes.TEXT,
        field: 'leaving_reason',
        allowNull: true,
      },
      graduatedOn: {
        type: DataTypes.DATEONLY,
        field: 'graduated_on',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'sis_student',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['person_id'] },
      { unique: true, fields: ['admission_no'] },
      { unique: true, fields: ['application_id'] },
      { unique: true, fields: ['student_id', 'campus_id'] }
      ]
    }
  )
  return SisStudentEntity
}
