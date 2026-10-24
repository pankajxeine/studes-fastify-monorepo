import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadCourseAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  courseId?: string
  departmentId: string
  code: string
  name: string
  description?: string | null
  courseType?: string
  credits?: number | null
  lectureHoursPerWeek?: number | null
  labHoursPerWeek?: number | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type AcadCourseCreationAttributes = Optional<AcadCourseAttributes, "id" | "publicId" | "recordCode" | "courseId" | "description" | "courseType" | "credits" | "lectureHoursPerWeek" | "labHoursPerWeek" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class AcadCourseEntity
  extends Model<AcadCourseAttributes, AcadCourseCreationAttributes>
  implements AcadCourseAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare courseId: string
  declare departmentId: string
  declare code: string
  declare name: string
  declare description: string | null
  declare courseType: string
  declare credits: number | null
  declare lectureHoursPerWeek: number | null
  declare labHoursPerWeek: number | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initAcadCourseEntity(sequelize: Sequelize): typeof AcadCourseEntity {
  AcadCourseEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_course')"),
      },
      courseId: {
        type: DataTypes.TEXT,
        field: 'course_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      departmentId: {
        type: DataTypes.TEXT,
        field: 'department_id',
        allowNull: false,
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
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      courseType: {
        type: DataTypes.TEXT,
        field: 'course_type',
        allowNull: false,
        defaultValue: "core",
      },
      credits: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'credits',
        allowNull: true,
      },
      lectureHoursPerWeek: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'lecture_hours_per_week',
        allowNull: true,
      },
      labHoursPerWeek: {
        type: DataTypes.DECIMAL(4, 1),
        field: 'lab_hours_per_week',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'acad_course',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['code'] }
      ]
    }
  )
  return AcadCourseEntity
}
