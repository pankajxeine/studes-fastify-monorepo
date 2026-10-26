"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const tran_vehicle_entity_1 = require("./tran_vehicle/tran_vehicle.entity");
const tran_vehicle_maintenance_entity_1 = require("./tran_vehicle_maintenance/tran_vehicle_maintenance.entity");
const tran_route_entity_1 = require("./tran_route/tran_route.entity");
const tran_stop_entity_1 = require("./tran_stop/tran_stop.entity");
const tran_route_stop_entity_1 = require("./tran_route_stop/tran_route_stop.entity");
const tran_student_transport_entity_1 = require("./tran_student_transport/tran_student_transport.entity");
const tran_trip_log_entity_1 = require("./tran_trip_log/tran_trip_log.entity");
function createGeneratedModels(sequelize) {
    const models = {
        tran_vehicle: (0, tran_vehicle_entity_1.initTranVehicleEntity)(sequelize),
        tran_vehicle_maintenance: (0, tran_vehicle_maintenance_entity_1.initTranVehicleMaintenanceEntity)(sequelize),
        tran_route: (0, tran_route_entity_1.initTranRouteEntity)(sequelize),
        tran_stop: (0, tran_stop_entity_1.initTranStopEntity)(sequelize),
        tran_route_stop: (0, tran_route_stop_entity_1.initTranRouteStopEntity)(sequelize),
        tran_student_transport: (0, tran_student_transport_entity_1.initTranStudentTransportEntity)(sequelize),
        tran_trip_log: (0, tran_trip_log_entity_1.initTranTripLogEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.tran_vehicle_maintenance.belongsTo(models.tran_vehicle, { as: 'vehicle', foreignKey: 'vehicleId', targetKey: 'vehicleId' });
    models.tran_vehicle.hasMany(models.tran_vehicle_maintenance, { as: 'tranVehicleMaintenance', foreignKey: 'vehicleId', sourceKey: 'vehicleId' });
    models.tran_route.belongsTo(models.tran_vehicle, { as: 'vehicle', foreignKey: 'vehicleId', targetKey: 'vehicleId' });
    models.tran_vehicle.hasMany(models.tran_route, { as: 'tranRoute', foreignKey: 'vehicleId', sourceKey: 'vehicleId' });
    models.tran_route_stop.belongsTo(models.tran_route, { as: 'route', foreignKey: 'routeId', targetKey: 'routeId', onDelete: 'CASCADE' });
    models.tran_route.hasMany(models.tran_route_stop, { as: 'tranRouteStop', foreignKey: 'routeId', sourceKey: 'routeId', onDelete: 'CASCADE' });
    models.tran_route_stop.belongsTo(models.tran_stop, { as: 'stop', foreignKey: 'stopId', targetKey: 'stopId' });
    models.tran_stop.hasMany(models.tran_route_stop, { as: 'tranRouteStop', foreignKey: 'stopId', sourceKey: 'stopId' });
    models.tran_student_transport.belongsTo(models.tran_route_stop, { as: 'routeStop', foreignKey: 'routeStopId', targetKey: 'routeStopId' });
    models.tran_route_stop.hasMany(models.tran_student_transport, { as: 'tranStudentTransport', foreignKey: 'routeStopId', sourceKey: 'routeStopId' });
    models.tran_trip_log.belongsTo(models.tran_route, { as: 'route', foreignKey: 'routeId', targetKey: 'routeId' });
    models.tran_route.hasMany(models.tran_trip_log, { as: 'tranTripLog', foreignKey: 'routeId', sourceKey: 'routeId' });
    models.tran_trip_log.belongsTo(models.tran_vehicle, { as: 'vehicle', foreignKey: 'vehicleId', targetKey: 'vehicleId' });
    models.tran_vehicle.hasMany(models.tran_trip_log, { as: 'tranTripLog', foreignKey: 'vehicleId', sourceKey: 'vehicleId' });
    models.tran_trip_log.belongsTo(models.tran_route_stop, { as: 'lastRouteStop', foreignKey: 'lastRouteStopId', targetKey: 'routeStopId' });
    models.tran_route_stop.hasMany(models.tran_trip_log, { as: 'tranTripLog', foreignKey: 'lastRouteStopId', sourceKey: 'routeStopId' });
}
