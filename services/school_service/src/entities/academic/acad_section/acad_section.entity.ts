import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadSectionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  sectionId?: string
  campusId: string
  academicYearId: string
  gradeLevelId: string
  code: string
  name: string
  classTeacherStaffId?: string | null
  roomId?: string | null
  capacity?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadSectionCreationAttributes = Optional<AcadSectionAttributes, "id" | "publicId" | "recordCode" | "sectionId" | "classTeacherStaffId" | "roomId" | "capacity" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadSectionEntity
  extends Model<AcadSectionAttributes, AcadSectionCreationAttributes>
  implements AcadSectionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare sectionId: string
  declare campusId: string
  declare academicYearId: string
  declare gradeLevelId: string
  declare code: string
  declare name: string
  declare classTeacherStaffId: string | null
  declare roomId: string | null
  declare capacity: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadSectionEntity(sequelize: Sequelize): typeof AcadSectionEntity {
  AcadSectionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_section')"),
      },
      sectionId: {
        type: DataTypes.TEXT,
        field: 'section_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: false,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
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
      classTeacherStaffId: {
        type: DataTypes.TEXT,
        field: 'class_teacher_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      capacity: {
        type: DataTypes.SMALLINT,
        field: 'capacity',
        allowNull: false,
        defaultValue: 30,
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
      tableName: 'acad_section',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['academic_year_id', 'campus_id', 'code'] },
      { unique: true, fields: ['section_id', 'academic_year_id'] }
      ]
    }
  )
  return AcadSectionEntity
}
