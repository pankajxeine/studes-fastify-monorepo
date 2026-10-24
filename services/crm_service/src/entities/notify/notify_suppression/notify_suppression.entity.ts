import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifySuppressionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  channel: string
  address: string
  reason: string
  createdAt?: Date
  UNIQUE?: string | null
}

export type NotifySuppressionCreationAttributes = Optional<NotifySuppressionAttributes, "id" | "publicId" | "recordCode" | "createdAt" | "UNIQUE">

export class NotifySuppressionEntity
  extends Model<NotifySuppressionAttributes, NotifySuppressionCreationAttributes>
  implements NotifySuppressionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare channel: string
  declare address: string
  declare reason: string
  declare createdAt: Date
  declare UNIQUE: string | null
}

export function initNotifySuppressionEntity(sequelize: Sequelize): typeof NotifySuppressionEntity {
  NotifySuppressionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_suppression')"),
      },
      channel: {
        type: DataTypes.STRING(8),
        field: 'channel',
        allowNull: false,
      },
      address: {
        type: DataTypes.TEXT,
        field: 'address',
        allowNull: false,
      },
      reason: {
        type: DataTypes.STRING(12),
        field: 'reason',
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
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
      tableName: 'notify_suppression',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return NotifySuppressionEntity
}
