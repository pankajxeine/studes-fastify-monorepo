import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TranVehicleMaintenanceAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  vehicleMaintenanceId?: string
  vehicleId: string
  vendorId?: string | null
  maintenanceType: string
  status?: string
  scheduledOn: string
  startedOn?: Date | null
  completedOn?: Date | null
  odometerKm?: number | null
  description: string
  costAmount?: string
  invoiceNo?: string | null
  nextServiceDueOn?: Date | null
  nextServiceDueKm?: number | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TranVehicleMaintenanceCreationAttributes = Optional<TranVehicleMaintenanceAttributes, "id" | "publicId" | "recordCode" | "vehicleMaintenanceId" | "vendorId" | "status" | "startedOn" | "completedOn" | "odometerKm" | "costAmount" | "invoiceNo" | "nextServiceDueOn" | "nextServiceDueKm" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TranVehicleMaintenanceEntity
  extends Model<TranVehicleMaintenanceAttributes, TranVehicleMaintenanceCreationAttributes>
  implements TranVehicleMaintenanceAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare vehicleMaintenanceId: string
  declare vehicleId: string
  declare vendorId: string | null
  declare maintenanceType: string
  declare status: string
  declare scheduledOn: string
  declare startedOn: Date | null
  declare completedOn: Date | null
  declare odometerKm: number | null
  declare description: string
  declare costAmount: string
  declare invoiceNo: string | null
  declare nextServiceDueOn: Date | null
  declare nextServiceDueKm: number | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTranVehicleMaintenanceEntity(sequelize: Sequelize): typeof TranVehicleMaintenanceEntity {
  TranVehicleMaintenanceEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tran_vehicle_maintenance')"),
      },
      vehicleMaintenanceId: {
        type: DataTypes.TEXT,
        field: 'vehicle_maintenance_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      vehicleId: {
        type: DataTypes.TEXT,
        field: 'vehicle_id',
        allowNull: false,
        references: { model: 'tran_vehicle', key: 'vehicle_id' },
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
      scheduledOn: {
        type: DataTypes.TEXT,
        field: 'scheduled_on',
        allowNull: false,
      },
      startedOn: {
        type: DataTypes.DATEONLY,
        field: 'started_on',
        allowNull: true,
      },
      completedOn: {
        type: DataTypes.DATEONLY,
        field: 'completed_on',
        allowNull: true,
      },
      odometerKm: {
        type: DataTypes.INTEGER,
        field: 'odometer_km',
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      costAmount: {
        type: DataTypes.TEXT,
        field: 'cost_amount',
        allowNull: false,
        defaultValue: 0,
      },
      invoiceNo: {
        type: DataTypes.STRING(40),
        field: 'invoice_no',
        allowNull: true,
      },
      nextServiceDueOn: {
        type: DataTypes.DATEONLY,
        field: 'next_service_due_on',
        allowNull: true,
      },
      nextServiceDueKm: {
        type: DataTypes.INTEGER,
        field: 'next_service_due_km',
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
      }
    },
    {
      sequelize,
      tableName: 'tran_vehicle_maintenance',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return TranVehicleMaintenanceEntity
}
