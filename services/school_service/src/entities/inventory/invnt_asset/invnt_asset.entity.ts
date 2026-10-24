import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InvntAssetAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  assetId?: string
  assetTag: string
  itemId: string
  campusId: string
  roomId?: string | null
  purchaseOrderLineId?: string | null
  assignedToPersonId?: string | null
  assignedOn?: Date | null
  serialNo?: string | null
  model?: string | null
  status?: string
  condition?: string
  acquiredOn: string
  acquisitionCostAmount: string
  usefulLifeYears?: number
  salvageValueAmount?: string
  warrantyExpiryOn?: Date | null
  disposedOn?: Date | null
  disposalReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type InvntAssetCreationAttributes = Optional<InvntAssetAttributes, "id" | "publicId" | "recordCode" | "assetId" | "roomId" | "purchaseOrderLineId" | "assignedToPersonId" | "assignedOn" | "serialNo" | "model" | "status" | "condition" | "usefulLifeYears" | "salvageValueAmount" | "warrantyExpiryOn" | "disposedOn" | "disposalReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class InvntAssetEntity
  extends Model<InvntAssetAttributes, InvntAssetCreationAttributes>
  implements InvntAssetAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare assetId: string
  declare assetTag: string
  declare itemId: string
  declare campusId: string
  declare roomId: string | null
  declare purchaseOrderLineId: string | null
  declare assignedToPersonId: string | null
  declare assignedOn: Date | null
  declare serialNo: string | null
  declare model: string | null
  declare status: string
  declare condition: string
  declare acquiredOn: string
  declare acquisitionCostAmount: string
  declare usefulLifeYears: number
  declare salvageValueAmount: string
  declare warrantyExpiryOn: Date | null
  declare disposedOn: Date | null
  declare disposalReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initInvntAssetEntity(sequelize: Sequelize): typeof InvntAssetEntity {
  InvntAssetEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('invnt_asset')"),
      },
      assetId: {
        type: DataTypes.TEXT,
        field: 'asset_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      assetTag: {
        type: DataTypes.STRING(30),
        field: 'asset_tag',
        allowNull: false,
      },
      itemId: {
        type: DataTypes.TEXT,
        field: 'item_id',
        allowNull: false,
        references: { model: 'invnt_item', key: 'item_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      purchaseOrderLineId: {
        type: DataTypes.TEXT,
        field: 'purchase_order_line_id',
        allowNull: true,
        references: { model: 'invnt_purchase_order_line', key: 'purchase_order_line_id' },
      },
      assignedToPersonId: {
        type: DataTypes.TEXT,
        field: 'assigned_to_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      assignedOn: {
        type: DataTypes.DATEONLY,
        field: 'assigned_on',
        allowNull: true,
      },
      serialNo: {
        type: DataTypes.STRING(60),
        field: 'serial_no',
        allowNull: true,
      },
      model: {
        type: DataTypes.TEXT,
        field: 'model',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "in_store",
      },
      condition: {
        type: DataTypes.STRING(20),
        field: 'condition',
        allowNull: false,
        defaultValue: "good",
      },
      acquiredOn: {
        type: DataTypes.TEXT,
        field: 'acquired_on',
        allowNull: false,
      },
      acquisitionCostAmount: {
        type: DataTypes.TEXT,
        field: 'acquisition_cost_amount',
        allowNull: false,
      },
      usefulLifeYears: {
        type: DataTypes.SMALLINT,
        field: 'useful_life_years',
        allowNull: false,
        defaultValue: 5,
      },
      salvageValueAmount: {
        type: DataTypes.TEXT,
        field: 'salvage_value_amount',
        allowNull: false,
        defaultValue: 0,
      },
      warrantyExpiryOn: {
        type: DataTypes.DATEONLY,
        field: 'warranty_expiry_on',
        allowNull: true,
      },
      disposedOn: {
        type: DataTypes.DATEONLY,
        field: 'disposed_on',
        allowNull: true,
      },
      disposalReason: {
        type: DataTypes.TEXT,
        field: 'disposal_reason',
        allowNull: true,
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'invnt_asset',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['asset_tag'] },
      { unique: true, fields: ['item_id', 'serial_no'] }
      ]
    }
  )
  return InvntAssetEntity
}
