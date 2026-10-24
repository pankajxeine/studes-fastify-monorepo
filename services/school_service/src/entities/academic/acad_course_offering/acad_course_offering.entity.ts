import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AcadCourseOfferingAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  courseOfferingId?: string
  courseId: string
  academicYearId: string
  termId?: string | null
  campusId: string
  sectionId?: string | null
  gradingSchemeId?: string | null
  roomId?: string | null
  offeringCode: string
  capacity?: number | null
  deliveryMode?: string
  status?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AcadCourseOfferingCreationAttributes = Optional<AcadCourseOfferingAttributes, "id" | "publicId" | "recordCode" | "courseOfferingId" | "termId" | "sectionId" | "gradingSchemeId" | "roomId" | "capacity" | "deliveryMode" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AcadCourseOfferingEntity
  extends Model<AcadCourseOfferingAttributes, AcadCourseOfferingCreationAttributes>
  implements AcadCourseOfferingAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare courseOfferingId: string
  declare courseId: string
  declare academicYearId: string
  declare termId: string | null
  declare campusId: string
  declare sectionId: string | null
  declare gradingSchemeId: string | null
  declare roomId: string | null
  declare offeringCode: string
  declare capacity: number | null
  declare deliveryMode: string
  declare status: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAcadCourseOfferingEntity(sequelize: Sequelize): typeof AcadCourseOfferingEntity {
  AcadCourseOfferingEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('acad_course_offering')"),
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      courseId: {
        type: DataTypes.TEXT,
        field: 'course_id',
        allowNull: false,
        references: { model: 'acad_course', key: 'course_id' },
      },
      academicYearId: {
        type: DataTypes.TEXT,
        field: 'academic_year_id',
        allowNull: false,
        references: { model: 'acad_academic_year', key: 'academic_year_id' },
      },
      termId: {
        type: DataTypes.UUID,
        field: 'term_id',
        allowNull: true,
        references: { model: 'acad_term', key: 'term_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      sectionId: {
        type: DataTypes.UUID,
        field: 'section_id',
        allowNull: true,
        references: { model: 'acad_section', key: 'section_id' },
      },
      gradingSchemeId: {
        type: DataTypes.TEXT,
        field: 'grading_scheme_id',
        allowNull: true,
        references: { model: 'acad_grading_scheme', key: 'grading_scheme_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      offeringCode: {
        type: DataTypes.STRING(30),
        field: 'offering_code',
        allowNull: false,
      },
      capacity: {
        type: DataTypes.SMALLINT,
        field: 'capacity',
        allowNull: true,
      },
      deliveryMode: {
        type: DataTypes.STRING(12),
        field: 'delivery_mode',
        allowNull: false,
        defaultValue: "in_person",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "planned",
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
      tableName: 'acad_course_offering',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['offering_code'] }
      ]
    }
  )
  return AcadCourseOfferingEntity
}
