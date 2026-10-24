import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AtndAttendanceTypeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  attendanceTypeCode?: string | null
  name: string
  description?: string | null
  presentWeight?: number
  countsTowardTotal?: string
  isExcused?: string
  appliesToStudents?: string
  appliesToStaff?: string
  colorHex?: string | null
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AtndAttendanceTypeCreationAttributes = Optional<AtndAttendanceTypeAttributes, "id" | "publicId" | "recordCode" | "attendanceTypeCode" | "description" | "presentWeight" | "countsTowardTotal" | "isExcused" | "appliesToStudents" | "appliesToStaff" | "colorHex" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AtndAttendanceTypeEntity
  extends Model<AtndAttendanceTypeAttributes, AtndAttendanceTypeCreationAttributes>
  implements AtndAttendanceTypeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare attendanceTypeCode: string | null
  declare name: string
  declare description: string | null
  declare presentWeight: number
  declare countsTowardTotal: string
  declare isExcused: string
  declare appliesToStudents: string
  declare appliesToStaff: string
  declare colorHex: string | null
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAtndAttendanceTypeEntity(sequelize: Sequelize): typeof AtndAttendanceTypeEntity {
  AtndAttendanceTypeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('atnd_attendance_type')"),
      },
      attendanceTypeCode: {
        type: DataTypes.TEXT,
        field: 'attendance_type_code',
        allowNull: true,
        unique: true,
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
      presentWeight: {
        type: DataTypes.DECIMAL(3, 2),
        field: 'present_weight',
        allowNull: false,
        defaultValue: 1,
      },
      countsTowardTotal: {
        type: DataTypes.TEXT,
        field: 'counts_toward_total',
        allowNull: false,
        defaultValue: true,
      },
      isExcused: {
        type: DataTypes.TEXT,
        field: 'is_excused',
        allowNull: false,
        defaultValue: false,
      },
      appliesToStudents: {
        type: DataTypes.TEXT,
        field: 'applies_to_students',
        allowNull: false,
        defaultValue: true,
      },
      appliesToStaff: {
        type: DataTypes.TEXT,
        field: 'applies_to_staff',
        allowNull: false,
        defaultValue: true,
      },
      colorHex: {
        type: DataTypes.CHAR(7),
        field: 'color_hex',
        allowNull: true,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
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
      tableName: 'atnd_attendance_type',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AtndAttendanceTypeEntity
}
