import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HstlBedAllocationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  bedAllocationId?: string
  bedId: string
  studentId: string
  academicYearId: string
  startDate: string
  endDate?: Date | null
  stay?: string | null
  status?: string
  checkedInAt?: Date | null
  checkedOutAt?: Date | null
  allocatedByUserId?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HstlBedAllocationCreationAttributes = Optional<HstlBedAllocationAttributes, "id" | "publicId" | "recordCode" | "bedAllocationId" | "endDate" | "stay" | "status" | "checkedInAt" | "checkedOutAt" | "allocatedByUserId" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HstlBedAllocationEntity
  extends Model<HstlBedAllocationAttributes, HstlBedAllocationCreationAttributes>
  implements HstlBedAllocationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare bedAllocationId: string
  declare bedId: string
  declare studentId: string
  declare academicYearId: string
  declare startDate: string
  declare endDate: Date | null
  declare stay: string | null
  declare status: string
  declare checkedInAt: Date | null
  declare checkedOutAt: Date | null
  declare allocatedByUserId: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHstlBedAllocationEntity(sequelize: Sequelize): typeof HstlBedAllocationEntity {
  HstlBedAllocationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hstl_bed_allocation')"),
      },
      bedAllocationId: {
        type: DataTypes.TEXT,
        field: 'bed_allocation_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      bedId: {
        type: DataTypes.TEXT,
        field: 'bed_id',
        allowNull: false,
        references: { model: 'hstl_bed', key: 'bed_id' },
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
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: true,
      },
      stay: {
        type: DataTypes.TEXT,
        field: 'stay',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "reserved",
      },
      checkedInAt: {
        type: DataTypes.DATE,
        field: 'checked_in_at',
        allowNull: true,
      },
      checkedOutAt: {
        type: DataTypes.DATE,
        field: 'checked_out_at',
        allowNull: true,
      },
      allocatedByUserId: {
        type: DataTypes.TEXT,
        field: 'allocated_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'hstl_bed_allocation',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return HstlBedAllocationEntity
}
