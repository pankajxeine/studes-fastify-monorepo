import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadProgramCourseAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  programCourseId?: string
  programId: string
  gradeLevelId?: string | null
  courseId: string
  isMandatory?: string
  recommendedTermNo?: number | null
  effectiveFromAcademicYearId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadProgramCourseCreationAttributes = Optional<AcadProgramCourseAttributes, "id" | "publicId" | "recordCode" | "programCourseId" | "gradeLevelId" | "isMandatory" | "recommendedTermNo" | "effectiveFromAcademicYearId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadProgramCourseEntity
  extends Model<AcadProgramCourseAttributes, AcadProgramCourseCreationAttributes>
  implements AcadProgramCourseAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare programCourseId: string
  declare programId: string
  declare gradeLevelId: string | null
  declare courseId: string
  declare isMandatory: string
  declare recommendedTermNo: number | null
  declare effectiveFromAcademicYearId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadProgramCourseEntity(sequelize: Sequelize): typeof AcadProgramCourseEntity {
  AcadProgramCourseEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_program_course')"),
      },
      programCourseId: {
        type: DataTypes.TEXT,
        field: 'program_course_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: false,
        references: { model: 'acad_program', key: 'program_id' },
      },
      gradeLevelId: {
        type: DataTypes.UUID,
        field: 'grade_level_id',
        allowNull: true,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      courseId: {
        type: DataTypes.TEXT,
        field: 'course_id',
        allowNull: false,
        references: { model: 'acad_course', key: 'course_id' },
      },
      isMandatory: {
        type: DataTypes.TEXT,
        field: 'is_mandatory',
        allowNull: false,
        defaultValue: true,
      },
      recommendedTermNo: {
        type: DataTypes.SMALLINT,
        field: 'recommended_term_no',
        allowNull: true,
      },
      effectiveFromAcademicYearId: {
        type: DataTypes.TEXT,
        field: 'effective_from_academic_year_id',
        allowNull: true,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
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
      tableName: 'acad_program_course',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['program_id', 'grade_level_id', 'course_id'] }
      ]
    }
  )
  return AcadProgramCourseEntity
}
