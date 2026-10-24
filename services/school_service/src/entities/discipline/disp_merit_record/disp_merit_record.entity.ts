import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type DispMeritRecordAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  meritRecordId?: string
  studentId: string
  academicYearId: string
  awardedByStaffId: string
  awardedOn?: string
  points: number
  category: string
  reason: string
  incidentId?: string | null
  isVisibleToGuardian?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type DispMeritRecordCreationAttributes = Optional<DispMeritRecordAttributes, "id" | "publicId" | "recordCode" | "meritRecordId" | "awardedOn" | "incidentId" | "isVisibleToGuardian" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class DispMeritRecordEntity
  extends Model<DispMeritRecordAttributes, DispMeritRecordCreationAttributes>
  implements DispMeritRecordAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare meritRecordId: string
  declare studentId: string
  declare academicYearId: string
  declare awardedByStaffId: string
  declare awardedOn: string
  declare points: number
  declare category: string
  declare reason: string
  declare incidentId: string | null
  declare isVisibleToGuardian: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initDispMeritRecordEntity(sequelize: Sequelize): typeof DispMeritRecordEntity {
  DispMeritRecordEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('disp_merit_record')"),
      },
      meritRecordId: {
        type: DataTypes.TEXT,
        field: 'merit_record_id',
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
      awardedByStaffId: {
        type: DataTypes.TEXT,
        field: 'awarded_by_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      awardedOn: {
        type: DataTypes.TEXT,
        field: 'awarded_on',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      points: {
        type: DataTypes.SMALLINT,
        field: 'points',
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(30),
        field: 'category',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      incidentId: {
        type: DataTypes.TEXT,
        field: 'incident_id',
        allowNull: true,
        references: { model: 'disp_incident', key: 'incident_id' },
      },
      isVisibleToGuardian: {
        type: DataTypes.TEXT,
        field: 'is_visible_to_guardian',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'disp_merit_record',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return DispMeritRecordEntity
}
