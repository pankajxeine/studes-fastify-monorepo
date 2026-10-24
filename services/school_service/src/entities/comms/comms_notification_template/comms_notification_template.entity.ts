import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsNotificationTemplateAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  notificationTemplateCode?: string | null
  name: string
  description?: string | null
  channel: string
  subjectTemplate?: string | null
  bodyTemplate: string
  isMandatory?: string
  sortOrder?: number
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsNotificationTemplateCreationAttributes = Optional<CommsNotificationTemplateAttributes, "id" | "publicId" | "recordCode" | "notificationTemplateCode" | "description" | "subjectTemplate" | "isMandatory" | "sortOrder" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsNotificationTemplateEntity
  extends Model<CommsNotificationTemplateAttributes, CommsNotificationTemplateCreationAttributes>
  implements CommsNotificationTemplateAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare notificationTemplateCode: string | null
  declare name: string
  declare description: string | null
  declare channel: string
  declare subjectTemplate: string | null
  declare bodyTemplate: string
  declare isMandatory: string
  declare sortOrder: number
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsNotificationTemplateEntity(sequelize: Sequelize): typeof CommsNotificationTemplateEntity {
  CommsNotificationTemplateEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_notification_template')"),
      },
      notificationTemplateCode: {
        type: DataTypes.TEXT,
        field: 'notification_template_code',
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      channel: {
        type: DataTypes.TEXT,
        field: 'channel',
        allowNull: false,
      },
      subjectTemplate: {
        type: DataTypes.TEXT,
        field: 'subject_template',
        allowNull: true,
      },
      bodyTemplate: {
        type: DataTypes.TEXT,
        field: 'body_template',
        allowNull: false,
      },
      isMandatory: {
        type: DataTypes.TEXT,
        field: 'is_mandatory',
        allowNull: false,
        defaultValue: false,
      },
      sortOrder: {
        type: DataTypes.SMALLINT,
        field: 'sort_order',
        allowNull: false,
        defaultValue: 0,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'comms_notification_template',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return CommsNotificationTemplateEntity
}
