"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvntAssetEntity = void 0;
exports.initInvntAssetEntity = initInvntAssetEntity;
const sequelize_1 = require("sequelize");
class InvntAssetEntity extends sequelize_1.Model {
}
exports.InvntAssetEntity = InvntAssetEntity;
function initInvntAssetEntity(sequelize) {
    InvntAssetEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('invnt_asset')"),
        },
        assetId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'asset_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        assetTag: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'asset_tag',
            allowNull: false,
        },
        itemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'item_id',
            allowNull: false,
            references: { model: 'invnt_item', key: 'item_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        purchaseOrderLineId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purchase_order_line_id',
            allowNull: true,
            references: { model: 'invnt_purchase_order_line', key: 'purchase_order_line_id' },
        },
        assignedToPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assigned_to_person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        assignedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'assigned_on',
            allowNull: true,
        },
        serialNo: {
            type: sequelize_1.DataTypes.STRING(60),
            field: 'serial_no',
            allowNull: true,
        },
        model: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'model',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "in_store",
        },
        condition: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'condition',
            allowNull: false,
            defaultValue: "good",
        },
        acquiredOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'acquired_on',
            allowNull: false,
        },
        acquisitionCostAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'acquisition_cost_amount',
            allowNull: false,
        },
        usefulLifeYears: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'useful_life_years',
            allowNull: false,
            defaultValue: 5,
        },
        salvageValueAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'salvage_value_amount',
            allowNull: false,
            defaultValue: 0,
        },
        warrantyExpiryOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'warranty_expiry_on',
            allowNull: true,
        },
        disposedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'disposed_on',
            allowNull: true,
        },
        disposalReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'disposal_reason',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'invnt_asset',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['asset_tag'] },
            { unique: true, fields: ['item_id', 'serial_no'] }
        ]
    });
    return InvntAssetEntity;
}
