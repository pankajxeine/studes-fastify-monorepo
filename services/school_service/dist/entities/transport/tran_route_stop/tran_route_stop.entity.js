"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranRouteStopEntity = void 0;
exports.initTranRouteStopEntity = initTranRouteStopEntity;
const sequelize_1 = require("sequelize");
class TranRouteStopEntity extends sequelize_1.Model {
}
exports.TranRouteStopEntity = TranRouteStopEntity;
function initTranRouteStopEntity(sequelize) {
    TranRouteStopEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('tran_route_stop')"),
        },
        routeStopId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'route_stop_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        routeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'route_id',
            allowNull: false,
            references: { model: 'tran_route', key: 'route_id' },
            onDelete: 'CASCADE',
        },
        stopId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'stop_id',
            allowNull: false,
            references: { model: 'tran_stop', key: 'stop_id' },
        },
        stopSequence: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'stop_sequence',
            allowNull: false,
        },
        pickupTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'pickup_time',
            allowNull: true,
        },
        dropTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'drop_time',
            allowNull: true,
        },
        distanceFromCampusKm: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'distance_from_campus_km',
            allowNull: true,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'tran_route_stop',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['route_id', 'stop_id'] },
            { unique: true, fields: ['route_id', 'stop_sequence'] }
        ]
    });
    return TranRouteStopEntity;
}
