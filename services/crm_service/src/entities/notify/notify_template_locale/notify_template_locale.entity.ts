import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifyTemplateLocaleAttributes = {
  recordCode?: string
  templateLocaleId: string | null
  templateVersionId: string
  locale: string
  subject?: string | null
  bodyHtml?: string | null
  bodyText: string
}

export type NotifyTemplateLocaleCreationAttributes = Optional<NotifyTemplateLocaleAttributes, "recordCode" | "subject" | "bodyHtml">

export class NotifyTemplateLocaleEntity
  extends Model<NotifyTemplateLocaleAttributes, NotifyTemplateLocaleCreationAttributes>
  implements NotifyTemplateLocaleAttributes
{
  declare recordCode: string
  declare templateLocaleId: string | null
  declare templateVersionId: string
  declare locale: string
  declare subject: string | null
  declare bodyHtml: string | null
  declare bodyText: string
}

export function initNotifyTemplateLocaleEntity(sequelize: Sequelize): typeof NotifyTemplateLocaleEntity {
  NotifyTemplateLocaleEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_template_locale')"),
      },
      templateLocaleId: {
        type: DataTypes.TEXT,
        field: 'template_locale_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      }
    },
    {
      sequelize,
      tableName: 'notify_template_locale',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['template_version_id', 'locale'] }
      ]
    }
  )
  return NotifyTemplateLocaleEntity
}
