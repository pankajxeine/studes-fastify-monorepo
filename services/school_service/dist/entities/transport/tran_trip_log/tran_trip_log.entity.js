"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranTripLogEntity = void 0;
exports.initTranTripLogEntity = initTranTripLogEntity;
const sequelize_1 = require("sequelize");
class TranTripLogEntity extends sequelize_1.Model {
}
exports.TranTripLogEntity = TranTripLogEntity;
function initTranTripLogEntity(sequelize) {
    TranTripLogEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('tran_trip_log')"),
        },
        tripLogId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'trip_log_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        routeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'route_id',
            allowNull: false,
            references: { model: 'tran_route', key: 'route_id' },
        },
        vehicleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vehicle_id',
            allowNull: false,
            references: { model: 'tran_vehicle', key: 'vehicle_id' },
        },
        driverStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'driver_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        tripDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'trip_date',
            allowNull: false,
        },
        direction: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'direction',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "scheduled",
        },
        startedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'started_at',
            allowNull: true,
        },
        endedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ended_at',
            allowNull: true,
        },
        odometerStartKm: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'odometer_start_km',
            allowNull: true,
        },
        odometerEndKm: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'odometer_end_km',
            allowNull: true,
        },
        distanceKm: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'distance_km',
            allowNull: true,
            autoIncrement: true,
        },
        lastRouteStopId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'last_route_stop_id',
            allowNull: true,
            references: { model: 'tran_route_stop', key: 'route_stop_id' },
        },
        stopCheckins: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'stop_checkins',
            allowNull: false,
            defaultValue: "[]",
        },
        studentsBoarded: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'students_boarded',
            allowNull: false,
            defaultValue: 0,
        },
        delayMinutes: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'delay_minutes',
            allowNull: false,
            defaultValue: 0,
        },
        incidentNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'incident_notes',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'tran_trip_log',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['route_id', 'trip_date', 'direction'] }
        ]
    });
    return TranTripLogEntity;
}
