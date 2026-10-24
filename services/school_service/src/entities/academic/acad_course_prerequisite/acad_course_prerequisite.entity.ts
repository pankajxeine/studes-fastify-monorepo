import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadCoursePrerequisiteAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  courseId: string
  prerequisiteCourseId: string
  createdAt?: Date
  createdBy?: string | null
  UNIQUE?: string | null
}

export type AcadCoursePrerequisiteCreationAttributes = Optional<AcadCoursePrerequisiteAttributes, "id" | "publicId" | "recordCode" | "createdAt" | "createdBy" | "UNIQUE">

export class AcadCoursePrerequisiteEntity
  extends Model<AcadCoursePrerequisiteAttributes, AcadCoursePrerequisiteCreationAttributes>
  implements AcadCoursePrerequisiteAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare courseId: string
  declare prerequisiteCourseId: string
  declare createdAt: Date
  declare createdBy: string | null
  declare UNIQUE: string | null
}

export function initAcadCoursePrerequisiteEntity(sequelize: Sequelize): typeof AcadCoursePrerequisiteEntity {
  AcadCoursePrerequisiteEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_course_prerequisite')"),
      },
      courseId: {
        type: DataTypes.TEXT,
        field: 'course_id',
        allowNull: false,
        references: { model: 'acad_course', key: 'course_id' },
        onDelete: 'CASCADE',
      },
      prerequisiteCourseId: {
        type: DataTypes.TEXT,
        field: 'prerequisite_course_id',
        allowNull: false,
        references: { model: 'acad_course', key: 'course_id' },
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
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'acad_course_prerequisite',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return AcadCoursePrerequisiteEntity
}
