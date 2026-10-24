import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type LmsStudyMaterialAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  studyMaterialId?: string
  courseOfferingId: string
  lessonPlanId?: string | null
  title: string
  description?: string | null
  materialType: string
  fileId?: string | null
  externalUrl?: string | null
  unitTitle?: string | null
  uploadedByUserId: string
  isPublished?: string
  publishedAt?: Date | null
  availableFrom?: Date | null
  availableUntil?: Date | null
  availability?: string | null
  viewCount?: number
  sortOrder?: number
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type LmsStudyMaterialCreationAttributes = Optional<LmsStudyMaterialAttributes, "id" | "publicId" | "recordCode" | "studyMaterialId" | "lessonPlanId" | "description" | "fileId" | "externalUrl" | "unitTitle" | "isPublished" | "publishedAt" | "availableFrom" | "availableUntil" | "availability" | "viewCount" | "sortOrder" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class LmsStudyMaterialEntity
  extends Model<LmsStudyMaterialAttributes, LmsStudyMaterialCreationAttributes>
  implements LmsStudyMaterialAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare studyMaterialId: string
  declare courseOfferingId: string
  declare lessonPlanId: string | null
  declare title: string
  declare description: string | null
  declare materialType: string
  declare fileId: string | null
  declare externalUrl: string | null
  declare unitTitle: string | null
  declare uploadedByUserId: string
  declare isPublished: string
  declare publishedAt: Date | null
  declare availableFrom: Date | null
  declare availableUntil: Date | null
  declare availability: string | null
  declare viewCount: number
  declare sortOrder: number
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initLmsStudyMaterialEntity(sequelize: Sequelize): typeof LmsStudyMaterialEntity {
  LmsStudyMaterialEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('lms_study_material')"),
      },
      studyMaterialId: {
        type: DataTypes.TEXT,
        field: 'study_material_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: false,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      lessonPlanId: {
        type: DataTypes.TEXT,
        field: 'lesson_plan_id',
        allowNull: true,
        references: { model: 'lms_lesson_plan', key: 'lesson_plan_id' },
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      materialType: {
        type: DataTypes.TEXT,
        field: 'material_type',
        allowNull: false,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      externalUrl: {
        type: DataTypes.TEXT,
        field: 'external_url',
        allowNull: true,
      },
      unitTitle: {
        type: DataTypes.TEXT,
        field: 'unit_title',
        allowNull: true,
      },
      uploadedByUserId: {
        type: DataTypes.TEXT,
        field: 'uploaded_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      isPublished: {
        type: DataTypes.TEXT,
        field: 'is_published',
        allowNull: false,
        defaultValue: false,
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      availableFrom: {
        type: DataTypes.DATEONLY,
        field: 'available_from',
        allowNull: true,
      },
      availableUntil: {
        type: DataTypes.DATEONLY,
        field: 'available_until',
        allowNull: true,
      },
      availability: {
        type: DataTypes.TEXT,
        field: 'availability',
        allowNull: true,
        autoIncrement: true,
      },
      viewCount: {
        type: DataTypes.INTEGER,
        field: 'view_count',
        allowNull: false,
        defaultValue: 0,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'lms_study_material',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return LmsStudyMaterialEntity
}
