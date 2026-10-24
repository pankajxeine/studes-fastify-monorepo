import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TranRouteStopAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  routeStopId?: string
  routeId: string
  stopId: string
  stopSequence: number
  pickupTime?: Date | null
  dropTime?: Date | null
  distanceFromCampusKm?: number | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TranRouteStopCreationAttributes = Optional<TranRouteStopAttributes, "id" | "publicId" | "recordCode" | "routeStopId" | "pickupTime" | "dropTime" | "distanceFromCampusKm" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TranRouteStopEntity
  extends Model<TranRouteStopAttributes, TranRouteStopCreationAttributes>
  implements TranRouteStopAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare routeStopId: string
  declare routeId: string
  declare stopId: string
  declare stopSequence: number
  declare pickupTime: Date | null
  declare dropTime: Date | null
  declare distanceFromCampusKm: number | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTranRouteStopEntity(sequelize: Sequelize): typeof TranRouteStopEntity {
  TranRouteStopEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('tran_route_stop')"),
      },
      routeStopId: {
        type: DataTypes.TEXT,
        field: 'route_stop_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      routeId: {
        type: DataTypes.TEXT,
        field: 'route_id',
        allowNull: false,
        references: { model: 'tran_route', key: 'route_id' },
        onDelete: 'CASCADE',
      },
      stopId: {
        type: DataTypes.TEXT,
        field: 'stop_id',
        allowNull: false,
        references: { model: 'tran_stop', key: 'stop_id' },
      },
      stopSequence: {
        type: DataTypes.SMALLINT,
        field: 'stop_sequence',
        allowNull: false,
      },
      pickupTime: {
        type: DataTypes.TIME,
        field: 'pickup_time',
        allowNull: true,
      },
      dropTime: {
        type: DataTypes.TIME,
        field: 'drop_time',
        allowNull: true,
      },
      distanceFromCampusKm: {
        type: DataTypes.DECIMAL(6, 2),
        field: 'distance_from_campus_km',
        allowNull: true,
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
      tableName: 'tran_route_stop',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['route_id', 'stop_id'] },
      { unique: true, fields: ['route_id', 'stop_sequence'] }
      ]
    }
  )
  return TranRouteStopEntity
}
