"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvntAssetMaintenanceEntity = void 0;
exports.initInvntAssetMaintenanceEntity = initInvntAssetMaintenanceEntity;
const sequelize_1 = require("sequelize");
class InvntAssetMaintenanceEntity extends sequelize_1.Model {
}
exports.InvntAssetMaintenanceEntity = InvntAssetMaintenanceEntity;
function initInvntAssetMaintenanceEntity(sequelize) {
    InvntAssetMaintenanceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('invnt_asset_maintenance')"),
        },
        assetMaintenanceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'asset_maintenance_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        assetId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'asset_id',
            allowNull: false,
            references: { model: 'invnt_asset', key: 'asset_id' },
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
        reportedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reported_on',
            allowNull: false,
        },
        scheduledOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'scheduled_on',
            allowNull: true,
        },
        completedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'completed_on',
            allowNull: true,
        },
        issueDescription: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issue_description',
            allowNull: false,
        },
        workDone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'work_done',
            allowNull: true,
        },
        costAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cost_amount',
            allowNull: false,
            defaultValue: 0,
        },
        isUnderWarranty: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_under_warranty',
            allowNull: false,
            defaultValue: false,
        },
        reportedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reported_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        tableName: 'invnt_asset_maintenance',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return InvntAssetMaintenanceEntity;
}
