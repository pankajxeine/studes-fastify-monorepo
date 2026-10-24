import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type InvntAssetMaintenanceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  assetMaintenanceId?: string
  assetId: string
  vendorId?: string | null
  maintenanceType: string
  status?: string
  reportedOn: string
  scheduledOn?: Date | null
  completedOn?: Date | null
  issueDescription: string
  workDone?: string | null
  costAmount?: string
  isUnderWarranty?: string
  reportedByUserId?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type InvntAssetMaintenanceCreationAttributes = Optional<InvntAssetMaintenanceAttributes, "id" | "publicId" | "recordCode" | "assetMaintenanceId" | "vendorId" | "status" | "scheduledOn" | "completedOn" | "workDone" | "costAmount" | "isUnderWarranty" | "reportedByUserId" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class InvntAssetMaintenanceEntity
  extends Model<InvntAssetMaintenanceAttributes, InvntAssetMaintenanceCreationAttributes>
  implements InvntAssetMaintenanceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare assetMaintenanceId: string
  declare assetId: string
  declare vendorId: string | null
  declare maintenanceType: string
  declare status: string
  declare reportedOn: string
  declare scheduledOn: Date | null
  declare completedOn: Date | null
  declare issueDescription: string
  declare workDone: string | null
  declare costAmount: string
  declare isUnderWarranty: string
  declare reportedByUserId: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initInvntAssetMaintenanceEntity(sequelize: Sequelize): typeof InvntAssetMaintenanceEntity {
  InvntAssetMaintenanceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('invnt_asset_maintenance')"),
      },
      assetMaintenanceId: {
        type: DataTypes.TEXT,
        field: 'asset_maintenance_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      assetId: {
        type: DataTypes.TEXT,
        field: 'asset_id',
        allowNull: false,
        references: { model: 'invnt_asset', key: 'asset_id' },
      },
      vendorId: {
        type: DataTypes.TEXT,
        field: 'vendor_id',
        allowNull: true,
        references: { model: 'org_vendor', key: 'vendor_id' },
      },
      maintenanceType: {
        type: DataTypes.STRING(20),
        field: 'maintenance_type',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(20),
        field: 'status',
        allowNull: false,
        defaultValue: "scheduled",
      },
      reportedOn: {
        type: DataTypes.TEXT,
        field: 'reported_on',
        allowNull: false,
      },
      scheduledOn: {
        type: DataTypes.DATEONLY,
        field: 'scheduled_on',
        allowNull: true,
      },
      completedOn: {
        type: DataTypes.DATEONLY,
        field: 'completed_on',
        allowNull: true,
      },
      issueDescription: {
        type: DataTypes.TEXT,
        field: 'issue_description',
        allowNull: false,
      },
      workDone: {
        type: DataTypes.TEXT,
        field: 'work_done',
        allowNull: true,
      },
      costAmount: {
        type: DataTypes.TEXT,
        field: 'cost_amount',
        allowNull: false,
        defaultValue: 0,
      },
      isUnderWarranty: {
        type: DataTypes.TEXT,
        field: 'is_under_warranty',
        allowNull: false,
        defaultValue: false,
      },
      reportedByUserId: {
        type: DataTypes.TEXT,
        field: 'reported_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      }
    },
    {
      sequelize,
      tableName: 'invnt_asset_maintenance',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return InvntAssetMaintenanceEntity
}
