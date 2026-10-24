import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifyTemplateLocaleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  templateVersionId: string
  locale: string
  subject?: string | null
  bodyHtml?: string | null
  bodyText: string
  UNIQUE?: string | null
}

export type NotifyTemplateLocaleCreationAttributes = Optional<NotifyTemplateLocaleAttributes, "id" | "publicId" | "recordCode" | "subject" | "bodyHtml" | "UNIQUE">

export class NotifyTemplateLocaleEntity
  extends Model<NotifyTemplateLocaleAttributes, NotifyTemplateLocaleCreationAttributes>
  implements NotifyTemplateLocaleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare templateVersionId: string
  declare locale: string
  declare subject: string | null
  declare bodyHtml: string | null
  declare bodyText: string
  declare UNIQUE: string | null
}

export function initNotifyTemplateLocaleEntity(sequelize: Sequelize): typeof NotifyTemplateLocaleEntity {
  NotifyTemplateLocaleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_template_locale')"),
      },
      templateVersionId: {
        type: DataTypes.TEXT,
        field: 'template_version_id',
        allowNull: false,
        references: { model: 'notify_template_version', key: 'template_version_id' },
        onDelete: 'CASCADE',
      },
      locale: {
        type: DataTypes.TEXT,
        field: 'locale',
        allowNull: false,
      },
      subject: {
        type: DataTypes.TEXT,
        field: 'subject',
        allowNull: true,
      },
      bodyHtml: {
        type: DataTypes.TEXT,
        field: 'body_html',
        allowNull: true,
      },
      bodyText: {
        type: DataTypes.TEXT,
        field: 'body_text',
        allowNull: false,
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'notify_template_locale',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return NotifyTemplateLocaleEntity
}
