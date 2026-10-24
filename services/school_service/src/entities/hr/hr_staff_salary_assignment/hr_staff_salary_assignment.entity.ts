import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrStaffSalaryAssignmentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  staffSalaryAssignmentId?: string
  staffId: string
  salaryStructureId: string
  basicAmount: string
  effectiveFrom: string
  effectiveTo?: Date | null
  revisionReason?: string | null
  approvedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  validity?: string | null
}

export type HrStaffSalaryAssignmentCreationAttributes = Optional<HrStaffSalaryAssignmentAttributes, "id" | "publicId" | "recordCode" | "staffSalaryAssignmentId" | "effectiveTo" | "revisionReason" | "approvedByUserId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "validity">

export class HrStaffSalaryAssignmentEntity
  extends Model<HrStaffSalaryAssignmentAttributes, HrStaffSalaryAssignmentCreationAttributes>
  implements HrStaffSalaryAssignmentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare staffSalaryAssignmentId: string
  declare staffId: string
  declare salaryStructureId: string
  declare basicAmount: string
  declare effectiveFrom: string
  declare effectiveTo: Date | null
  declare revisionReason: string | null
  declare approvedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare validity: string | null
}

export function initHrStaffSalaryAssignmentEntity(sequelize: Sequelize): typeof HrStaffSalaryAssignmentEntity {
  HrStaffSalaryAssignmentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_staff_salary_assignment')"),
      },
      staffSalaryAssignmentId: {
        type: DataTypes.TEXT,
        field: 'staff_salary_assignment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      salaryStructureId: {
        type: DataTypes.TEXT,
        field: 'salary_structure_id',
        allowNull: false,
        references: { model: 'hr_salary_structure', key: 'salary_structure_id' },
      },
      basicAmount: {
        type: DataTypes.TEXT,
        field: 'basic_amount',
        allowNull: false,
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
      revisionReason: {
        type: DataTypes.TEXT,
        field: 'revision_reason',
        allowNull: true,
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      validity: {
        type: DataTypes.TEXT,
        field: 'validity',
        allowNull: true,
        autoIncrement: true,
      }
    },
    {
      sequelize,
      tableName: 'hr_staff_salary_assignment',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return HrStaffSalaryAssignmentEntity
}
