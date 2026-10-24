import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnCanteenStaffAssignmentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  canteenStaffAssignmentId?: string
  canteenOutletId: string
  staffId: string
  dutyRole: string
  shiftStartTime?: Date | null
  shiftEndTime?: Date | null
  canOverrideAllergen?: string
  validFrom: string
  validTo?: Date | null
  validity?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CntnCanteenStaffAssignmentCreationAttributes = Optional<CntnCanteenStaffAssignmentAttributes, "id" | "publicId" | "recordCode" | "canteenStaffAssignmentId" | "shiftStartTime" | "shiftEndTime" | "canOverrideAllergen" | "validTo" | "validity" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CntnCanteenStaffAssignmentEntity
  extends Model<CntnCanteenStaffAssignmentAttributes, CntnCanteenStaffAssignmentCreationAttributes>
  implements CntnCanteenStaffAssignmentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare canteenStaffAssignmentId: string
  declare canteenOutletId: string
  declare staffId: string
  declare dutyRole: string
  declare shiftStartTime: Date | null
  declare shiftEndTime: Date | null
  declare canOverrideAllergen: string
  declare validFrom: string
  declare validTo: Date | null
  declare validity: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCntnCanteenStaffAssignmentEntity(sequelize: Sequelize): typeof CntnCanteenStaffAssignmentEntity {
  CntnCanteenStaffAssignmentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'cntn_canteen_staff_assignment'\r\n    )"),
      },
      canteenStaffAssignmentId: {
        type: DataTypes.TEXT,
        field: 'canteen_staff_assignment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      canteenOutletId: {
        type: DataTypes.TEXT,
        field: 'canteen_outlet_id',
        allowNull: false,
        references: { model: 'cntn_canteen_outlet', key: 'canteen_outlet_id' },
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      dutyRole: {
        type: DataTypes.STRING(20),
        field: 'duty_role',
        allowNull: false,
      },
      shiftStartTime: {
        type: DataTypes.TIME,
        field: 'shift_start_time',
        allowNull: true,
      },
      shiftEndTime: {
        type: DataTypes.TIME,
        field: 'shift_end_time',
        allowNull: true,
      },
      canOverrideAllergen: {
        type: DataTypes.TEXT,
        field: 'can_override_allergen',
        allowNull: false,
        defaultValue: false,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
      },
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
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
      tableName: 'cntn_canteen_staff_assignment',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CntnCanteenStaffAssignmentEntity
}
