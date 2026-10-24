import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadHolidayAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  holidayId?: string
  academicYearId: string
  campusId?: string | null
  name: string
  holidayKind?: string
  startDate: string
  endDate: string
  isStaffWorkingDay?: string
  description?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadHolidayCreationAttributes = Optional<AcadHolidayAttributes, "id" | "publicId" | "recordCode" | "holidayId" | "campusId" | "holidayKind" | "isStaffWorkingDay" | "description" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadHolidayEntity
  extends Model<AcadHolidayAttributes, AcadHolidayCreationAttributes>
  implements AcadHolidayAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare holidayId: string
  declare academicYearId: string
  declare campusId: string | null
  declare name: string
  declare holidayKind: string
  declare startDate: string
  declare endDate: string
  declare isStaffWorkingDay: string
  declare description: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadHolidayEntity(sequelize: Sequelize): typeof AcadHolidayEntity {
  AcadHolidayEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_holiday')"),
      },
      holidayId: {
        type: DataTypes.TEXT,
        field: 'holiday_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      holidayKind: {
        type: DataTypes.STRING(20),
        field: 'holiday_kind',
        allowNull: false,
        defaultValue: "public_holiday",
      },
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.TEXT,
        field: 'end_date',
        allowNull: false,
      },
      isStaffWorkingDay: {
        type: DataTypes.TEXT,
        field: 'is_staff_working_day',
        allowNull: false,
        defaultValue: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
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
      tableName: 'acad_holiday',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['academic_year_id', 'campus_id', 'name', 'start_date'] }
      ]
    }
  )
  return AcadHolidayEntity
}
