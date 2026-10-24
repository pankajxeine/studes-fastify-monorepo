import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommsNoticeReadAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  noticeReadId?: string
  noticeId: string
  appUserId: string
  readAt?: Date
  acknowledgedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommsNoticeReadCreationAttributes = Optional<CommsNoticeReadAttributes, "id" | "publicId" | "recordCode" | "noticeReadId" | "readAt" | "acknowledgedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommsNoticeReadEntity
  extends Model<CommsNoticeReadAttributes, CommsNoticeReadCreationAttributes>
  implements CommsNoticeReadAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare noticeReadId: string
  declare noticeId: string
  declare appUserId: string
  declare readAt: Date
  declare acknowledgedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommsNoticeReadEntity(sequelize: Sequelize): typeof CommsNoticeReadEntity {
  CommsNoticeReadEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('comms_notice_read')"),
      },
      noticeReadId: {
        type: DataTypes.TEXT,
        field: 'notice_read_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      noticeId: {
        type: DataTypes.TEXT,
        field: 'notice_id',
        allowNull: false,
        references: { model: 'comms_notice', key: 'notice_id' },
        onDelete: 'CASCADE',
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      readAt: {
        type: DataTypes.DATE,
        field: 'read_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      acknowledgedAt: {
        type: DataTypes.DATE,
        field: 'acknowledged_at',
        allowNull: true,
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
      tableName: 'comms_notice_read',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['notice_id', 'app_user_id'] }
      ]
    }
  )
  return CommsNoticeReadEntity
}
