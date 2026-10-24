import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsNoticeAudienceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  noticeAudienceId?: string
  noticeId: string
  audienceType: string
  campusId?: string | null
  roleCode?: string | null
  programId?: string | null
  gradeLevelId?: string | null
  sectionId?: string | null
  courseOfferingId?: string | null
  personId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsNoticeAudienceCreationAttributes = Optional<CommsNoticeAudienceAttributes, "id" | "publicId" | "recordCode" | "noticeAudienceId" | "campusId" | "roleCode" | "programId" | "gradeLevelId" | "sectionId" | "courseOfferingId" | "personId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsNoticeAudienceEntity
  extends Model<CommsNoticeAudienceAttributes, CommsNoticeAudienceCreationAttributes>
  implements CommsNoticeAudienceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare noticeAudienceId: string
  declare noticeId: string
  declare audienceType: string
  declare campusId: string | null
  declare roleCode: string | null
  declare programId: string | null
  declare gradeLevelId: string | null
  declare sectionId: string | null
  declare courseOfferingId: string | null
  declare personId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsNoticeAudienceEntity(sequelize: Sequelize): typeof CommsNoticeAudienceEntity {
  CommsNoticeAudienceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_notice_audience')"),
      },
      noticeAudienceId: {
        type: DataTypes.TEXT,
        field: 'notice_audience_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      noticeId: {
        type: DataTypes.TEXT,
        field: 'notice_id',
        allowNull: false,
        references: { model: 'comms_notice', key: 'notice_id' },
        onDelete: 'CASCADE',
      },
      audienceType: {
        type: DataTypes.TEXT,
        field: 'audience_type',
        allowNull: false,
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      roleCode: {
        type: DataTypes.TEXT,
        field: 'role_code',
        allowNull: true,
        references: { model: 'iam_role', key: 'role_code' },
        onUpdate: 'CASCADE',
      },
      programId: {
        type: DataTypes.TEXT,
        field: 'program_id',
        allowNull: true,
        references: { model: 'acad_program', key: 'program_id' },
      },
      gradeLevelId: {
        type: DataTypes.TEXT,
        field: 'grade_level_id',
        allowNull: true,
        references: { model: 'acad_grade_level', key: 'grade_level_id' },
      },
      sectionId: {
        type: DataTypes.TEXT,
        field: 'section_id',
        allowNull: true,
        references: { model: 'acad_section', key: 'section_id' },
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: true,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
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
      tableName: 'comms_notice_audience',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['notice_id', 'audience_type', 'campus_id', 'role_code', 'program_id', 'grade_level_id', 'section_id', 'course_offering_id', 'person_id'] }
      ]
    }
  )
  return CommsNoticeAudienceEntity
}
