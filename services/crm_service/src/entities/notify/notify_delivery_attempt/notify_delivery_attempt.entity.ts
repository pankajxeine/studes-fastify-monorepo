import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifyDeliveryAttemptAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  notificationId: string
  attemptNo: number
  providerCode: string
  providerMessageId?: string | null
  status: string
  error?: string | null
  attemptedAt?: Date
  UNIQUE?: string | null
}

export type NotifyDeliveryAttemptCreationAttributes = Optional<NotifyDeliveryAttemptAttributes, "id" | "publicId" | "recordCode" | "providerMessageId" | "error" | "attemptedAt" | "UNIQUE">

export class NotifyDeliveryAttemptEntity
  extends Model<NotifyDeliveryAttemptAttributes, NotifyDeliveryAttemptCreationAttributes>
  implements NotifyDeliveryAttemptAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare notificationId: string
  declare attemptNo: number
  declare providerCode: string
  declare providerMessageId: string | null
  declare status: string
  declare error: string | null
  declare attemptedAt: Date
  declare UNIQUE: string | null
}

export function initNotifyDeliveryAttemptEntity(sequelize: Sequelize): typeof NotifyDeliveryAttemptEntity {
  NotifyDeliveryAttemptEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_delivery_attempt')"),
      },
      notificationId: {
        type: DataTypes.TEXT,
        field: 'notification_id',
        allowNull: false,
        references: { model: 'notify_notification', key: 'notification_id' },
        onDelete: 'CASCADE',
      },
      attemptNo: {
        type: DataTypes.SMALLINT,
        field: 'attempt_no',
        allowNull: false,
      },
      providerCode: {
        type: DataTypes.TEXT,
        field: 'provider_code',
        allowNull: false,
        references: { model: 'notify_channel_provider', key: 'provider_code' },
      },
      providerMessageId: {
        type: DataTypes.STRING(120),
        field: 'provider_message_id',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
      },
      error: {
        type: DataTypes.TEXT,
        field: 'error',
        allowNull: true,
      },
      attemptedAt: {
        type: DataTypes.DATE,
        field: 'attempted_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'notify_delivery_attempt',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return NotifyDeliveryAttemptEntity
}
