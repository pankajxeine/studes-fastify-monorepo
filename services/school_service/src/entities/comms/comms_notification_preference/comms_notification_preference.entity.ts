import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsNotificationPreferenceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  notificationPreferenceId?: string
  appUserId: string
  notificationTemplateCode: string
  channel: string
  isEnabled?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsNotificationPreferenceCreationAttributes = Optional<CommsNotificationPreferenceAttributes, "id" | "publicId" | "recordCode" | "notificationPreferenceId" | "isEnabled" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsNotificationPreferenceEntity
  extends Model<CommsNotificationPreferenceAttributes, CommsNotificationPreferenceCreationAttributes>
  implements CommsNotificationPreferenceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare notificationPreferenceId: string
  declare appUserId: string
  declare notificationTemplateCode: string
  declare channel: string
  declare isEnabled: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsNotificationPreferenceEntity(sequelize: Sequelize): typeof CommsNotificationPreferenceEntity {
  CommsNotificationPreferenceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'comms_notification_preference'\r\n    )"),
      },
      notificationPreferenceId: {
        type: DataTypes.TEXT,
        field: 'notification_preference_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      notificationTemplateCode: {
        type: DataTypes.TEXT,
        field: 'notification_template_code',
        allowNull: false,
        references: { model: 'comms_notification_template', key: 'notification_template_code' },
        onUpdate: 'CASCADE',
      },
      channel: {
        type: DataTypes.TEXT,
        field: 'channel',
        allowNull: false,
      },
      isEnabled: {
        type: DataTypes.TEXT,
        field: 'is_enabled',
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
      tableName: 'comms_notification_preference',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['app_user_id', 'notification_template_code', 'channel'] }
      ]
    }
  )
  return CommsNotificationPreferenceEntity
}
