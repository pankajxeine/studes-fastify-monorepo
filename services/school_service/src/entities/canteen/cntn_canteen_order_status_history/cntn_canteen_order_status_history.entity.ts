import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CntnCanteenOrderStatusHistoryAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  canteenOrderStatusHistoryId?: string
  canteenOrderId: string
  fromStatus?: string | null
  toStatus: string
  changedAt?: Date
  changedByUserId?: string | null
  note?: string | null
  createdAt?: Date
  createdBy?: string | null
}

export type CntnCanteenOrderStatusHistoryCreationAttributes = Optional<CntnCanteenOrderStatusHistoryAttributes, "id" | "publicId" | "recordCode" | "canteenOrderStatusHistoryId" | "fromStatus" | "changedAt" | "changedByUserId" | "note" | "createdAt" | "createdBy">

export class CntnCanteenOrderStatusHistoryEntity
  extends Model<CntnCanteenOrderStatusHistoryAttributes, CntnCanteenOrderStatusHistoryCreationAttributes>
  implements CntnCanteenOrderStatusHistoryAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare canteenOrderStatusHistoryId: string
  declare canteenOrderId: string
  declare fromStatus: string | null
  declare toStatus: string
  declare changedAt: Date
  declare changedByUserId: string | null
  declare note: string | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initCntnCanteenOrderStatusHistoryEntity(sequelize: Sequelize): typeof CntnCanteenOrderStatusHistoryEntity {
  CntnCanteenOrderStatusHistoryEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'cntn_canteen_order_status_history'\r\n    )"),
      },
      canteenOrderStatusHistoryId: {
        type: DataTypes.TEXT,
        field: 'canteen_order_status_history_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      canteenOrderId: {
        type: DataTypes.TEXT,
        field: 'canteen_order_id',
        allowNull: false,
        references: { model: 'cntn_canteen_order', key: 'canteen_order_id' },
        onDelete: 'CASCADE',
      },
      fromStatus: {
        type: DataTypes.TEXT,
        field: 'from_status',
        allowNull: true,
      },
      toStatus: {
        type: DataTypes.TEXT,
        field: 'to_status',
        allowNull: false,
      },
      changedAt: {
        type: DataTypes.DATE,
        field: 'changed_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      changedByUserId: {
        type: DataTypes.TEXT,
        field: 'changed_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      note: {
        type: DataTypes.TEXT,
        field: 'note',
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
      }
    },
    {
      sequelize,
      tableName: 'cntn_canteen_order_status_history',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return CntnCanteenOrderStatusHistoryEntity
}
