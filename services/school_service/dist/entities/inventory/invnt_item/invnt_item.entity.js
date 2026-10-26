"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvntItemEntity = void 0;
exports.initInvntItemEntity = initInvntItemEntity;
const sequelize_1 = require("sequelize");
class InvntItemEntity extends sequelize_1.Model {
}
exports.InvntItemEntity = InvntItemEntity;
function initInvntItemEntity(sequelize) {
    InvntItemEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('invnt_item')"),
        },
        itemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'item_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        itemCategoryCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'item_category_code',
            allowNull: false,
            references: { model: 'invnt_item_category', key: 'item_category_code' },
            onUpdate: 'CASCADE',
        },
        sku: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'sku',
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
        unitOfMeasure: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'unit_of_measure',
            allowNull: false,
            defaultValue: "each",
        },
        isConsumable: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_consumable',
            allowNull: false,
            defaultValue: true,
        },
        isAsset: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_asset',
            allowNull: false,
            defaultValue: false,
        },
        reorderLevel: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'reorder_level',
            allowNull: false,
            defaultValue: 0,
        },
        reorderQuantity: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'reorder_quantity',
            allowNull: false,
            defaultValue: 0,
        },
        standardCostAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'standard_cost_amount',
            allowNull: false,
            defaultValue: 0,
        },
        preferredVendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'preferred_vendor_id',
            allowNull: true,
            references: { model: 'org_vendor', key: 'vendor_id' },
        },
        quantityOnHand: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'quantity_on_hand',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'invnt_item',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['sku'] }
        ]
    });
    return InvntItemEntity;
}
