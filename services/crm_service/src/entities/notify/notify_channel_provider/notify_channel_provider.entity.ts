import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifyChannelProviderAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  providerCode: string
  channel: string
  config?: unknown
  secretRef?: string | null
  priority?: number
  isActive?: string
  createdAt?: Date
  updatedAt?: Date
}

export type NotifyChannelProviderCreationAttributes = Optional<NotifyChannelProviderAttributes, "id" | "publicId" | "recordCode" | "config" | "secretRef" | "priority" | "isActive" | "createdAt" | "updatedAt">

export class NotifyChannelProviderEntity
  extends Model<NotifyChannelProviderAttributes, NotifyChannelProviderCreationAttributes>
  implements NotifyChannelProviderAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare providerCode: string
  declare channel: string
  declare config: unknown
  declare secretRef: string | null
  declare priority: number
  declare isActive: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initNotifyChannelProviderEntity(sequelize: Sequelize): typeof NotifyChannelProviderEntity {
  NotifyChannelProviderEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_channel_provider')"),
      },
      providerCode: {
        type: DataTypes.TEXT,
        field: 'provider_code',
        allowNull: false,
        unique: true,
      },
      channel: {
        type: DataTypes.STRING(8),
        field: 'channel',
        allowNull: false,
      },
      config: {
        type: DataTypes.JSONB,
        field: 'config',
        allowNull: false,
        defaultValue: "{}",
      },
      secretRef: {
        type: DataTypes.TEXT,
        field: 'secret_ref',
        allowNull: true,
      },
      priority: {
        type: DataTypes.SMALLINT,
        field: 'priority',
        allowNull: false,
        defaultValue: 1,
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'notify_channel_provider',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return NotifyChannelProviderEntity
}
