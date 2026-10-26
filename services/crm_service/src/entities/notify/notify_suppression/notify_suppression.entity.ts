import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifySuppressionAttributes = {
  recordCode?: string
  suppressionId: string | null
  channel: string
  address: string
  reason: string
  createdAt?: Date
}

export type NotifySuppressionCreationAttributes = Optional<NotifySuppressionAttributes, "recordCode" | "createdAt">

export class NotifySuppressionEntity
  extends Model<NotifySuppressionAttributes, NotifySuppressionCreationAttributes>
  implements NotifySuppressionAttributes
{
  declare recordCode: string
  declare suppressionId: string | null
  declare channel: string
  declare address: string
  declare reason: string
  declare createdAt: Date
}

export function initNotifySuppressionEntity(sequelize: Sequelize): typeof NotifySuppressionEntity {
  NotifySuppressionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_suppression')"),
      },
      suppressionId: {
        type: DataTypes.TEXT,
        field: 'suppression_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      }
    },
    {
      sequelize,
      tableName: 'notify_suppression',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['channel', 'address'] }
      ]
    }
  )
  return NotifySuppressionEntity
}
