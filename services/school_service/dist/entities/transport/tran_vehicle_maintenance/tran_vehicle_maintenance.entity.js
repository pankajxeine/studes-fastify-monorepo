"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranVehicleMaintenanceEntity = void 0;
exports.initTranVehicleMaintenanceEntity = initTranVehicleMaintenanceEntity;
const sequelize_1 = require("sequelize");
class TranVehicleMaintenanceEntity extends sequelize_1.Model {
}
exports.TranVehicleMaintenanceEntity = TranVehicleMaintenanceEntity;
function initTranVehicleMaintenanceEntity(sequelize) {
    TranVehicleMaintenanceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('tran_vehicle_maintenance')"),
        },
        vehicleMaintenanceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vehicle_maintenance_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        vehicleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vehicle_id',
            allowNull: false,
            references: { model: 'tran_vehicle', key: 'vehicle_id' },
        },
        vendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vendor_id',
            allowNull: true,
            references: { model: 'org_vendor', key: 'vendor_id' },
        },
        maintenanceType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'maintenance_type',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'status',
            allowNull: false,
            defaultValue: "scheduled",
        },
        scheduledOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'scheduled_on',
            allowNull: false,
        },
        startedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'started_on',
            allowNull: true,
        },
        completedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'completed_on',
            allowNull: true,
        },
        odometerKm: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'odometer_km',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: false,
        },
        costAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cost_amount',
            allowNull: false,
            defaultValue: 0,
        },
        invoiceNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'invoice_no',
            allowNull: true,
        },
        nextServiceDueOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'next_service_due_on',
            allowNull: true,
        },
        nextServiceDueKm: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'next_service_due_km',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'tran_vehicle_maintenance',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return TranVehicleMaintenanceEntity;
}
