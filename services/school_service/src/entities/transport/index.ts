import type { Sequelize } from 'sequelize'
import { initTranVehicleEntity } from './tran_vehicle/tran_vehicle.entity'
import { initTranVehicleMaintenanceEntity } from './tran_vehicle_maintenance/tran_vehicle_maintenance.entity'
import { initTranRouteEntity } from './tran_route/tran_route.entity'
import { initTranStopEntity } from './tran_stop/tran_stop.entity'
import { initTranRouteStopEntity } from './tran_route_stop/tran_route_stop.entity'
import { initTranStudentTransportEntity } from './tran_student_transport/tran_student_transport.entity'
import { initTranTripLogEntity } from './tran_trip_log/tran_trip_log.entity'

export type GeneratedModels = {
  tran_vehicle: ReturnType<typeof initTranVehicleEntity>;
  tran_vehicle_maintenance: ReturnType<typeof initTranVehicleMaintenanceEntity>;
  tran_route: ReturnType<typeof initTranRouteEntity>;
  tran_stop: ReturnType<typeof initTranStopEntity>;
  tran_route_stop: ReturnType<typeof initTranRouteStopEntity>;
  tran_student_transport: ReturnType<typeof initTranStudentTransportEntity>;
  tran_trip_log: ReturnType<typeof initTranTripLogEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      tran_vehicle: initTranVehicleEntity(sequelize),
      tran_vehicle_maintenance: initTranVehicleMaintenanceEntity(sequelize),
      tran_route: initTranRouteEntity(sequelize),
      tran_stop: initTranStopEntity(sequelize),
      tran_route_stop: initTranRouteStopEntity(sequelize),
      tran_student_transport: initTranStudentTransportEntity(sequelize),
      tran_trip_log: initTranTripLogEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.tran_vehicle_maintenance.belongsTo(models.tran_vehicle, { as: 'vehicle', foreignKey: 'vehicleId', targetKey: 'vehicleId' })
  models.tran_vehicle.hasMany(models.tran_vehicle_maintenance, { as: 'tranVehicleMaintenance', foreignKey: 'vehicleId', sourceKey: 'vehicleId' })
  models.tran_route.belongsTo(models.tran_vehicle, { as: 'vehicle', foreignKey: 'vehicleId', targetKey: 'vehicleId' })
  models.tran_vehicle.hasMany(models.tran_route, { as: 'tranRoute', foreignKey: 'vehicleId', sourceKey: 'vehicleId' })
  models.tran_route_stop.belongsTo(models.tran_route, { as: 'route', foreignKey: 'routeId', targetKey: 'routeId', onDelete: 'CASCADE' })
  models.tran_route.hasMany(models.tran_route_stop, { as: 'tranRouteStop', foreignKey: 'routeId', sourceKey: 'routeId', onDelete: 'CASCADE' })
  models.tran_route_stop.belongsTo(models.tran_stop, { as: 'stop', foreignKey: 'stopId', targetKey: 'stopId' })
  models.tran_stop.hasMany(models.tran_route_stop, { as: 'tranRouteStop', foreignKey: 'stopId', sourceKey: 'stopId' })
  models.tran_student_transport.belongsTo(models.tran_route_stop, { as: 'routeStop', foreignKey: 'routeStopId', targetKey: 'routeStopId' })
  models.tran_route_stop.hasMany(models.tran_student_transport, { as: 'tranStudentTransport', foreignKey: 'routeStopId', sourceKey: 'routeStopId' })
  models.tran_trip_log.belongsTo(models.tran_route, { as: 'route', foreignKey: 'routeId', targetKey: 'routeId' })
  models.tran_route.hasMany(models.tran_trip_log, { as: 'tranTripLog', foreignKey: 'routeId', sourceKey: 'routeId' })
  models.tran_trip_log.belongsTo(models.tran_vehicle, { as: 'vehicle', foreignKey: 'vehicleId', targetKey: 'vehicleId' })
  models.tran_vehicle.hasMany(models.tran_trip_log, { as: 'tranTripLog', foreignKey: 'vehicleId', sourceKey: 'vehicleId' })
  models.tran_trip_log.belongsTo(models.tran_route_stop, { as: 'lastRouteStop', foreignKey: 'lastRouteStopId', targetKey: 'routeStopId' })
  models.tran_route_stop.hasMany(models.tran_trip_log, { as: 'tranTripLog', foreignKey: 'lastRouteStopId', sourceKey: 'routeStopId' })
}
