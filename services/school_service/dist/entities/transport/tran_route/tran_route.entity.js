"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranRouteEntity = void 0;
exports.initTranRouteEntity = initTranRouteEntity;
const sequelize_1 = require("sequelize");
class TranRouteEntity extends sequelize_1.Model {
}
exports.TranRouteEntity = TranRouteEntity;
function initTranRouteEntity(sequelize) {
    TranRouteEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('tran_route')"),
        },
        routeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'route_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        vehicleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vehicle_id',
            allowNull: true,
            references: { model: 'tran_vehicle', key: 'vehicle_id' },
        },
        driverStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'driver_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        attendantStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attendant_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        startPoint: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_point',
            allowNull: false,
        },
        endPoint: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'end_point',
            allowNull: false,
        },
        distanceKm: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'distance_km',
            allowNull: true,
        },
        pickupStartTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'pickup_start_time',
            allowNull: true,
        },
        dropStartTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'drop_start_time',
            allowNull: true,
        },
        termFeeAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_fee_amount',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'tran_route',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['campus_id', 'code'] }
        ]
    });
    return TranRouteEntity;
}
