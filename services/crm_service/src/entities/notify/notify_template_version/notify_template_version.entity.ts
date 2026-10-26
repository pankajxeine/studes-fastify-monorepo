import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifyTemplateVersionAttributes = {
  recordCode?: string
  templateVersionId: string | null
  templateId: string
  versionNo: number
  status?: string
  publishedAt?: Date | null
  publishedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
}

export type NotifyTemplateVersionCreationAttributes = Optional<NotifyTemplateVersionAttributes, "recordCode" | "status" | "publishedAt" | "publishedByUserId" | "createdAt" | "createdBy" | "updatedAt">

export class NotifyTemplateVersionEntity
  extends Model<NotifyTemplateVersionAttributes, NotifyTemplateVersionCreationAttributes>
  implements NotifyTemplateVersionAttributes
{
  declare recordCode: string
  declare templateVersionId: string | null
  declare templateId: string
  declare versionNo: number
  declare status: string
  declare publishedAt: Date | null
  declare publishedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
}

export function initNotifyTemplateVersionEntity(sequelize: Sequelize): typeof NotifyTemplateVersionEntity {
  NotifyTemplateVersionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_template_version')"),
      },
      templateVersionId: {
        type: DataTypes.TEXT,
        field: 'template_version_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      templateId: {
        type: DataTypes.TEXT,
        field: 'template_id',
        allowNull: false,
        references: { model: 'notify_template', key: 'template_id' },
        onDelete: 'CASCADE',
      },
      versionNo: {
        type: DataTypes.INTEGER,
        field: 'version_no',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      publishedByUserId: {
        type: DataTypes.TEXT,
        field: 'published_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      }
    },
    {
      sequelize,
      tableName: 'notify_template_version',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['template_id', 'version_no'] }
      ]
    }
  )
  return NotifyTemplateVersionEntity
}
