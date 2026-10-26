"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranVehicleEntity = void 0;
exports.initTranVehicleEntity = initTranVehicleEntity;
const sequelize_1 = require("sequelize");
class TranVehicleEntity extends sequelize_1.Model {
}
exports.TranVehicleEntity = TranVehicleEntity;
function initTranVehicleEntity(sequelize) {
    TranVehicleEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('tran_vehicle')"),
        },
        vehicleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vehicle_id',
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
        registrationNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'registration_no',
            allowNull: false,
        },
        fleetNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'fleet_no',
            allowNull: false,
        },
        vehicleType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'vehicle_type',
            allowNull: false,
            defaultValue: "bus",
        },
        make: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'make',
            allowNull: false,
        },
        model: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'model',
            allowNull: false,
        },
        manufactureYear: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'manufacture_year',
            allowNull: false,
        },
        seatingCapacity: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'seating_capacity',
            allowNull: false,
        },
        fuelType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'fuel_type',
            allowNull: false,
            defaultValue: "diesel",
        },
        odometerKm: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'odometer_km',
            allowNull: false,
            defaultValue: 0,
        },
        gpsDeviceId: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'gps_device_id',
            allowNull: true,
        },
        hasCctv: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_cctv',
            allowNull: false,
            defaultValue: false,
        },
        hasSpeedGovernor: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_speed_governor',
            allowNull: false,
            defaultValue: false,
        },
        insuranceProvider: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'insurance_provider',
            allowNull: true,
        },
        insurancePolicyNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'insurance_policy_no',
            allowNull: true,
        },
        insuranceExpiryOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'insurance_expiry_on',
            allowNull: false,
        },
        fitnessCertificateNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'fitness_certificate_no',
            allowNull: true,
        },
        fitnessExpiryOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fitness_expiry_on',
            allowNull: false,
        },
        permitNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'permit_no',
            allowNull: true,
        },
        permitExpiryOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'permit_expiry_on',
            allowNull: true,
        },
        emissionCertificateNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'emission_certificate_no',
            allowNull: true,
        },
        emissionExpiryOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'emission_expiry_on',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'status',
            allowNull: false,
            defaultValue: "active",
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
        tableName: 'tran_vehicle',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['registration_no'] },
            { unique: true, fields: ['campus_id', 'fleet_no'] }
        ]
    });
    return TranVehicleEntity;
}
