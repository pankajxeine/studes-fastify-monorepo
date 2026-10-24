import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TranRouteAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  routeId?: string
  campusId: string
  code: string
  name: string
  description?: string | null
  vehicleId?: string | null
  driverStaffId?: string | null
  attendantStaffId?: string | null
  startPoint: string
  endPoint: string
  distanceKm?: number | null
  pickupStartTime?: Date | null
  dropStartTime?: Date | null
  termFeeAmount?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TranRouteCreationAttributes = Optional<TranRouteAttributes, "id" | "publicId" | "recordCode" | "routeId" | "description" | "vehicleId" | "driverStaffId" | "attendantStaffId" | "distanceKm" | "pickupStartTime" | "dropStartTime" | "termFeeAmount" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TranRouteEntity
  extends Model<TranRouteAttributes, TranRouteCreationAttributes>
  implements TranRouteAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare routeId: string
  declare campusId: string
  declare code: string
  declare name: string
  declare description: string | null
  declare vehicleId: string | null
  declare driverStaffId: string | null
  declare attendantStaffId: string | null
  declare startPoint: string
  declare endPoint: string
  declare distanceKm: number | null
  declare pickupStartTime: Date | null
  declare dropStartTime: Date | null
  declare termFeeAmount: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTranRouteEntity(sequelize: Sequelize): typeof TranRouteEntity {
  TranRouteEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tran_route')"),
      },
      routeId: {
        type: DataTypes.TEXT,
        field: 'route_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      code: {
        type: DataTypes.STRING(20),
        field: 'code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      vehicleId: {
        type: DataTypes.TEXT,
        field: 'vehicle_id',
        allowNull: true,
        references: { model: 'tran_vehicle', key: 'vehicle_id' },
      },
      driverStaffId: {
        type: DataTypes.TEXT,
        field: 'driver_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      attendantStaffId: {
        type: DataTypes.TEXT,
        field: 'attendant_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      startPoint: {
        type: DataTypes.TEXT,
        field: 'start_point',
        allowNull: false,
      },
      endPoint: {
        type: DataTypes.TEXT,
        field: 'end_point',
        allowNull: false,
      },
      distanceKm: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'distance_km',
        allowNull: true,
      },
      pickupStartTime: {
        type: DataTypes.TIME,
        field: 'pickup_start_time',
        allowNull: true,
      },
      dropStartTime: {
        type: DataTypes.TIME,
        field: 'drop_start_time',
        allowNull: true,
      },
      termFeeAmount: {
        type: DataTypes.TEXT,
        field: 'term_fee_amount',
        allowNull: false,
        defaultValue: 0,
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
      tableName: 'tran_route',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'code'] }
      ]
    }
  )
  return TranRouteEntity
}
