import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgDepartmentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  departmentId?: string
  campusId?: string | null
  parentDepartmentId?: string | null
  code: string
  name: string
  kind: string
  headStaffId?: string | null
  email?: string | null
  phone?: string | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgDepartmentCreationAttributes = Optional<OrgDepartmentAttributes, "id" | "publicId" | "recordCode" | "departmentId" | "campusId" | "parentDepartmentId" | "headStaffId" | "email" | "phone" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgDepartmentEntity
  extends Model<OrgDepartmentAttributes, OrgDepartmentCreationAttributes>
  implements OrgDepartmentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare departmentId: string
  declare campusId: string | null
  declare parentDepartmentId: string | null
  declare code: string
  declare name: string
  declare kind: string
  declare headStaffId: string | null
  declare email: string | null
  declare phone: string | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgDepartmentEntity(sequelize: Sequelize): typeof OrgDepartmentEntity {
  OrgDepartmentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_department')"),
      },
      departmentId: {
        type: DataTypes.TEXT,
        field: 'department_id',
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
      parentDepartmentId: {
        type: DataTypes.TEXT,
        field: 'parent_department_id',
        allowNull: true,
        references: { model: 'org_department', key: 'department_id' },
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
      kind: {
        type: DataTypes.TEXT,
        field: 'kind',
        allowNull: false,
      },
      headStaffId: {
        type: DataTypes.UUID,
        field: 'head_staff_id',
        allowNull: true,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: true,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
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
      tableName: 'org_department',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] }
      ]
    }
  )
  return OrgDepartmentEntity
}
