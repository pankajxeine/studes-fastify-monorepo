import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrSalaryStructureAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  salaryStructureId?: string
  campusId?: string | null
  code: string
  name: string
  description?: string | null
  payFrequency?: string
  effectiveFrom: string
  effectiveTo?: Date | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HrSalaryStructureCreationAttributes = Optional<HrSalaryStructureAttributes, "id" | "publicId" | "recordCode" | "salaryStructureId" | "campusId" | "description" | "payFrequency" | "effectiveTo" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HrSalaryStructureEntity
  extends Model<HrSalaryStructureAttributes, HrSalaryStructureCreationAttributes>
  implements HrSalaryStructureAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare salaryStructureId: string
  declare campusId: string | null
  declare code: string
  declare name: string
  declare description: string | null
  declare payFrequency: string
  declare effectiveFrom: string
  declare effectiveTo: Date | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHrSalaryStructureEntity(sequelize: Sequelize): typeof HrSalaryStructureEntity {
  HrSalaryStructureEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_salary_structure')"),
      },
      salaryStructureId: {
        type: DataTypes.TEXT,
        field: 'salary_structure_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
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
      payFrequency: {
        type: DataTypes.STRING(10),
        field: 'pay_frequency',
        allowNull: false,
        defaultValue: "monthly",
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
      tableName: 'hr_salary_structure',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] }
      ]
    }
  )
  return HrSalaryStructureEntity
}
