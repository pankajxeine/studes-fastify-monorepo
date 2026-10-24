import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HrStaffAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  staffId?: string
  personId: string
  campusId: string
  departmentId?: string | null
  designationCode: string
  employeeNo: string
  staffCategory: string
  employmentType?: string
  status?: string
  joinedOn: string
  probationEndOn?: Date | null
  confirmedOn?: Date | null
  exitOn?: Date | null
  exitReason?: string | null
  reportingToStaffId?: string | null
  workEmail?: string | null
  workPhone?: string | null
  maxWeeklyPeriods?: number | null
  noticePeriodDays?: number
  taxId?: string | null
  bankAccountName?: string | null
  bankAccountNo?: string | null
  bankRoutingCode?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type HrStaffCreationAttributes = Optional<HrStaffAttributes, "id" | "publicId" | "recordCode" | "staffId" | "departmentId" | "employmentType" | "status" | "probationEndOn" | "confirmedOn" | "exitOn" | "exitReason" | "reportingToStaffId" | "workEmail" | "workPhone" | "maxWeeklyPeriods" | "noticePeriodDays" | "taxId" | "bankAccountName" | "bankAccountNo" | "bankRoutingCode" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class HrStaffEntity
  extends Model<HrStaffAttributes, HrStaffCreationAttributes>
  implements HrStaffAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare staffId: string
  declare personId: string
  declare campusId: string
  declare departmentId: string | null
  declare designationCode: string
  declare employeeNo: string
  declare staffCategory: string
  declare employmentType: string
  declare status: string
  declare joinedOn: string
  declare probationEndOn: Date | null
  declare confirmedOn: Date | null
  declare exitOn: Date | null
  declare exitReason: string | null
  declare reportingToStaffId: string | null
  declare workEmail: string | null
  declare workPhone: string | null
  declare maxWeeklyPeriods: number | null
  declare noticePeriodDays: number
  declare taxId: string | null
  declare bankAccountName: string | null
  declare bankAccountNo: string | null
  declare bankRoutingCode: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initHrStaffEntity(sequelize: Sequelize): typeof HrStaffEntity {
  HrStaffEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hr_staff')"),
      },
      staffId: {
        type: DataTypes.TEXT,
        field: 'staff_id',
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
      departmentId: {
        type: DataTypes.TEXT,
        field: 'department_id',
        allowNull: true,
        references: { model: 'org_department', key: 'department_id' },
      },
      designationCode: {
        type: DataTypes.TEXT,
        field: 'designation_code',
        allowNull: false,
        references: { model: 'hr_designation', key: 'designation_code' },
        onUpdate: 'CASCADE',
      },
      employeeNo: {
        type: DataTypes.STRING(20),
        field: 'employee_no',
        allowNull: false,
      },
      staffCategory: {
        type: DataTypes.TEXT,
        field: 'staff_category',
        allowNull: false,
      },
      employmentType: {
        type: DataTypes.TEXT,
        field: 'employment_type',
        allowNull: false,
        defaultValue: "permanent",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "active",
      },
      joinedOn: {
        type: DataTypes.TEXT,
        field: 'joined_on',
        allowNull: false,
      },
      probationEndOn: {
        type: DataTypes.DATEONLY,
        field: 'probation_end_on',
        allowNull: true,
      },
      confirmedOn: {
        type: DataTypes.DATEONLY,
        field: 'confirmed_on',
        allowNull: true,
      },
      exitOn: {
        type: DataTypes.DATEONLY,
        field: 'exit_on',
        allowNull: true,
      },
      exitReason: {
        type: DataTypes.TEXT,
        field: 'exit_reason',
        allowNull: true,
      },
      reportingToStaffId: {
        type: DataTypes.TEXT,
        field: 'reporting_to_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      workEmail: {
        type: DataTypes.TEXT,
        field: 'work_email',
        allowNull: true,
      },
      workPhone: {
        type: DataTypes.TEXT,
        field: 'work_phone',
        allowNull: true,
      },
      maxWeeklyPeriods: {
        type: DataTypes.SMALLINT,
        field: 'max_weekly_periods',
        allowNull: true,
      },
      noticePeriodDays: {
        type: DataTypes.SMALLINT,
        field: 'notice_period_days',
        allowNull: false,
        defaultValue: 30,
      },
      taxId: {
        type: DataTypes.STRING(30),
        field: 'tax_id',
        allowNull: true,
      },
      bankAccountName: {
        type: DataTypes.TEXT,
        field: 'bank_account_name',
        allowNull: true,
      },
      bankAccountNo: {
        type: DataTypes.STRING(34),
        field: 'bank_account_no',
        allowNull: true,
      },
      bankRoutingCode: {
        type: DataTypes.STRING(20),
        field: 'bank_routing_code',
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
      tableName: 'hr_staff',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['employee_no'] },
      { unique: true, fields: ['person_id'] },
      { unique: true, fields: ['work_email'] }
      ]
    }
  )
  return HrStaffEntity
}
