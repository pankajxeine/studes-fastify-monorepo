import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportKbArticleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  kbArticleId?: string
  slug: string
  applicationId?: string | null
  moduleId?: string | null
  locale?: string
  title: string
  bodyMd: string
  status?: string
  visibility?: string
  versionNo?: number
  authorUserId: string
  publishedAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type SupportKbArticleCreationAttributes = Optional<SupportKbArticleAttributes, "id" | "publicId" | "recordCode" | "kbArticleId" | "applicationId" | "moduleId" | "locale" | "status" | "visibility" | "versionNo" | "publishedAt" | "createdAt" | "updatedAt">

export class SupportKbArticleEntity
  extends Model<SupportKbArticleAttributes, SupportKbArticleCreationAttributes>
  implements SupportKbArticleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare kbArticleId: string
  declare slug: string
  declare applicationId: string | null
  declare moduleId: string | null
  declare locale: string
  declare title: string
  declare bodyMd: string
  declare status: string
  declare visibility: string
  declare versionNo: number
  declare authorUserId: string
  declare publishedAt: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSupportKbArticleEntity(sequelize: Sequelize): typeof SupportKbArticleEntity {
  SupportKbArticleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_kb_article')"),
      },
      kbArticleId: {
        type: DataTypes.TEXT,
        field: 'kb_article_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      slug: {
        type: DataTypes.STRING(120),
        field: 'slug',
        allowNull: false,
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
        references: { model: 'catalog_module', key: 'module_id' },
      },
      locale: {
        type: DataTypes.TEXT,
        field: 'locale',
        allowNull: false,
        defaultValue: "en-US",
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      bodyMd: {
        type: DataTypes.TEXT,
        field: 'body_md',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      visibility: {
        type: DataTypes.STRING(8),
        field: 'visibility',
        allowNull: false,
        defaultValue: "public",
      },
      versionNo: {
        type: DataTypes.INTEGER,
        field: 'version_no',
        allowNull: false,
        defaultValue: 1,
      },
      authorUserId: {
        type: DataTypes.TEXT,
        field: 'author_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'support_kb_article',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['slug', 'locale'] }
      ]
    }
  )
  return SupportKbArticleEntity
}
