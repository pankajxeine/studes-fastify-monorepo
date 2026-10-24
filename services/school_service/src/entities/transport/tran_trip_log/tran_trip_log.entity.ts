import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TranTripLogAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  tripLogId?: string
  routeId: string
  vehicleId: string
  driverStaffId: string
  tripDate: string
  direction: string
  status?: string
  startedAt?: Date | null
  endedAt?: Date | null
  odometerStartKm?: number | null
  odometerEndKm?: number | null
  distanceKm?: number | null
  lastRouteStopId?: string | null
  stopCheckins?: unknown
  studentsBoarded?: number
  delayMinutes?: number
  incidentNotes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TranTripLogCreationAttributes = Optional<TranTripLogAttributes, "id" | "publicId" | "recordCode" | "tripLogId" | "status" | "startedAt" | "endedAt" | "odometerStartKm" | "odometerEndKm" | "distanceKm" | "lastRouteStopId" | "stopCheckins" | "studentsBoarded" | "delayMinutes" | "incidentNotes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TranTripLogEntity
  extends Model<TranTripLogAttributes, TranTripLogCreationAttributes>
  implements TranTripLogAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare tripLogId: string
  declare routeId: string
  declare vehicleId: string
  declare driverStaffId: string
  declare tripDate: string
  declare direction: string
  declare status: string
  declare startedAt: Date | null
  declare endedAt: Date | null
  declare odometerStartKm: number | null
  declare odometerEndKm: number | null
  declare distanceKm: number | null
  declare lastRouteStopId: string | null
  declare stopCheckins: unknown
  declare studentsBoarded: number
  declare delayMinutes: number
  declare incidentNotes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTranTripLogEntity(sequelize: Sequelize): typeof TranTripLogEntity {
  TranTripLogEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tran_trip_log')"),
      },
      tripLogId: {
        type: DataTypes.TEXT,
        field: 'trip_log_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      routeId: {
        type: DataTypes.TEXT,
        field: 'route_id',
        allowNull: false,
        references: { model: 'tran_route', key: 'route_id' },
      },
      vehicleId: {
        type: DataTypes.TEXT,
        field: 'vehicle_id',
        allowNull: false,
        references: { model: 'tran_vehicle', key: 'vehicle_id' },
      },
      driverStaffId: {
        type: DataTypes.TEXT,
        field: 'driver_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      tripDate: {
        type: DataTypes.TEXT,
        field: 'trip_date',
        allowNull: false,
      },
      direction: {
        type: DataTypes.TEXT,
        field: 'direction',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "scheduled",
      },
      startedAt: {
        type: DataTypes.DATE,
        field: 'started_at',
        allowNull: true,
      },
      endedAt: {
        type: DataTypes.DATE,
        field: 'ended_at',
        allowNull: true,
      },
      odometerStartKm: {
        type: DataTypes.INTEGER,
        field: 'odometer_start_km',
        allowNull: true,
      },
      odometerEndKm: {
        type: DataTypes.INTEGER,
        field: 'odometer_end_km',
        allowNull: true,
      },
      distanceKm: {
        type: DataTypes.INTEGER,
        field: 'distance_km',
        allowNull: true,
        autoIncrement: true,
      },
      lastRouteStopId: {
        type: DataTypes.TEXT,
        field: 'last_route_stop_id',
        allowNull: true,
        references: { model: 'tran_route_stop', key: 'route_stop_id' },
      },
      stopCheckins: {
        type: DataTypes.JSONB,
        field: 'stop_checkins',
        allowNull: false,
        defaultValue: "[]",
      },
      studentsBoarded: {
        type: DataTypes.SMALLINT,
        field: 'students_boarded',
        allowNull: false,
        defaultValue: 0,
      },
      delayMinutes: {
        type: DataTypes.SMALLINT,
        field: 'delay_minutes',
        allowNull: false,
        defaultValue: 0,
      },
      incidentNotes: {
        type: DataTypes.TEXT,
        field: 'incident_notes',
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
      tableName: 'tran_trip_log',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['route_id', 'trip_date', 'direction'] }
      ]
    }
  )
  return TranTripLogEntity
}
