"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnCanteenOutletEntity = void 0;
exports.initCntnCanteenOutletEntity = initCntnCanteenOutletEntity;
const sequelize_1 = require("sequelize");
class CntnCanteenOutletEntity extends sequelize_1.Model {
}
exports.CntnCanteenOutletEntity = CntnCanteenOutletEntity;
function initCntnCanteenOutletEntity(sequelize) {
    CntnCanteenOutletEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_canteen_outlet')"),
        },
        canteenOutletId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_outlet_id',
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
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: false,
            references: { model: 'org_room', key: 'room_id' },
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
        outletType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'outlet_type',
            allowNull: false,
            defaultValue: "cafeteria",
        },
        managerStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'manager_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        operatorVendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'operator_vendor_id',
            allowNull: true,
            references: { model: 'org_vendor', key: 'vendor_id' },
        },
        openingTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'opening_time',
            allowNull: false,
        },
        closingTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'closing_time',
            allowNull: false,
        },
        preOrderCutoffTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'pre_order_cutoff_time',
            allowNull: true,
        },
        seatingCapacity: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'seating_capacity',
            allowNull: true,
        },
        contactPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'contact_phone',
            allowNull: true,
        },
        isCashAccepted: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_cash_accepted',
            allowNull: false,
            defaultValue: true,
        },
        isCardAccepted: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_card_accepted',
            allowNull: false,
            defaultValue: true,
        },
        isWalletAccepted: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_wallet_accepted',
            allowNull: false,
            defaultValue: true,
        },
        isPreOrderEnabled: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_pre_order_enabled',
            allowNull: false,
            defaultValue: false,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'cntn_canteen_outlet',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return CntnCanteenOutletEntity;
}
