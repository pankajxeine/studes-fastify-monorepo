import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TtblTimetableEntryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  timetableEntryId?: string
  courseOfferingId: string
  sectionId?: string | null
  staffId: string
  roomId?: string | null
  periodId: string
  dayOfWeek: string
  entryType?: string
  effectiveFrom: string
  effectiveTo?: Date | null
  effective?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TtblTimetableEntryCreationAttributes = Optional<TtblTimetableEntryAttributes, "id" | "publicId" | "recordCode" | "timetableEntryId" | "sectionId" | "roomId" | "entryType" | "effectiveTo" | "effective" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TtblTimetableEntryEntity
  extends Model<TtblTimetableEntryAttributes, TtblTimetableEntryCreationAttributes>
  implements TtblTimetableEntryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare timetableEntryId: string
  declare courseOfferingId: string
  declare sectionId: string | null
  declare staffId: string
  declare roomId: string | null
  declare periodId: string
  declare dayOfWeek: string
  declare entryType: string
  declare effectiveFrom: string
  declare effectiveTo: Date | null
  declare effective: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTtblTimetableEntryEntity(sequelize: Sequelize): typeof TtblTimetableEntryEntity {
  TtblTimetableEntryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ttbl_timetable_entry')"),
      },
      timetableEntryId: {
        type: DataTypes.TEXT,
        field: 'timetable_entry_id',
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
      sectionId: {
        type: DataTypes.TEXT,
        field: 'section_id',
        allowNull: true,
        references: { model: 'acad_section', key: 'section_id' },
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      periodId: {
        type: DataTypes.TEXT,
        field: 'period_id',
        allowNull: false,
        references: { model: 'ttbl_period', key: 'period_id' },
      },
      dayOfWeek: {
        type: DataTypes.TEXT,
        field: 'day_of_week',
        allowNull: false,
      },
      entryType: {
        type: DataTypes.STRING(20),
        field: 'entry_type',
        allowNull: false,
        defaultValue: "lecture",
      },
      effectiveFrom: {
        type: DataTypes.TEXT,
        field: 'effective_from',
        allowNull: false,
      },
      effectiveTo: {
        type: DataTypes.DATEONLY,
        field: 'effective_to',
        allowNull: true,
      },
      effective: {
        type: DataTypes.TEXT,
        field: 'effective',
        allowNull: true,
        autoIncrement: true,
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
      }
    },
    {
      sequelize,
      tableName: 'ttbl_timetable_entry',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return TtblTimetableEntryEntity
}
