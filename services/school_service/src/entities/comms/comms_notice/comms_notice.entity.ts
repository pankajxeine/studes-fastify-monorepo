import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsNoticeAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  noticeId?: string
  campusId?: string | null
  title: string
  body: string
  category?: string
  priority?: string
  publishAt?: Date | null
  expiresAt?: Date | null
  isPinned?: string
  requiresAcknowledgement?: string
  fileId?: string | null
  createdByUserId: string
  status?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsNoticeCreationAttributes = Optional<CommsNoticeAttributes, "id" | "publicId" | "recordCode" | "noticeId" | "campusId" | "category" | "priority" | "publishAt" | "expiresAt" | "isPinned" | "requiresAcknowledgement" | "fileId" | "status" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsNoticeEntity
  extends Model<CommsNoticeAttributes, CommsNoticeCreationAttributes>
  implements CommsNoticeAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare noticeId: string
  declare campusId: string | null
  declare title: string
  declare body: string
  declare category: string
  declare priority: string
  declare publishAt: Date | null
  declare expiresAt: Date | null
  declare isPinned: string
  declare requiresAcknowledgement: string
  declare fileId: string | null
  declare createdByUserId: string
  declare status: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsNoticeEntity(sequelize: Sequelize): typeof CommsNoticeEntity {
  CommsNoticeEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_notice')"),
      },
      noticeId: {
        type: DataTypes.TEXT,
        field: 'notice_id',
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
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      body: {
        type: DataTypes.TEXT,
        field: 'body',
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING(20),
        field: 'category',
        allowNull: false,
        defaultValue: "general",
      },
      priority: {
        type: DataTypes.STRING(10),
        field: 'priority',
        allowNull: false,
        defaultValue: "normal",
      },
      publishAt: {
        type: DataTypes.DATE,
        field: 'publish_at',
        allowNull: true,
      },
      expiresAt: {
        type: DataTypes.DATE,
        field: 'expires_at',
        allowNull: true,
      },
      isPinned: {
        type: DataTypes.TEXT,
        field: 'is_pinned',
        allowNull: false,
        defaultValue: false,
      },
      requiresAcknowledgement: {
        type: DataTypes.TEXT,
        field: 'requires_acknowledgement',
        allowNull: false,
        defaultValue: false,
      },
      fileId: {
        type: DataTypes.TEXT,
        field: 'file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      createdByUserId: {
        type: DataTypes.TEXT,
        field: 'created_by_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
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
      tableName: 'comms_notice',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommsNoticeEntity
}
