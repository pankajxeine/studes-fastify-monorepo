"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnCanteenOrderLineEntity = void 0;
exports.initCntnCanteenOrderLineEntity = initCntnCanteenOrderLineEntity;
const sequelize_1 = require("sequelize");
class CntnCanteenOrderLineEntity extends sequelize_1.Model {
}
exports.CntnCanteenOrderLineEntity = CntnCanteenOrderLineEntity;
function initCntnCanteenOrderLineEntity(sequelize) {
    CntnCanteenOrderLineEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_canteen_order_line')"),
        },
        canteenOrderLineId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_order_line_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        canteenOrderId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_order_id',
            allowNull: false,
            references: { model: 'cntn_canteen_order', key: 'canteen_order_id' },
            onDelete: 'CASCADE',
        },
        lineNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'line_no',
            allowNull: false,
        },
        menuItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'menu_item_id',
            allowNull: false,
            references: { model: 'cntn_menu_item', key: 'menu_item_id' },
        },
        quantity: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'quantity',
            allowNull: false,
            defaultValue: 1,
        },
        unitPriceAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'unit_price_amount',
            allowNull: false,
        },
        lineAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'line_amount',
            allowNull: true,
            autoIncrement: true,
        },
        specialInstructions: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'special_instructions',
            allowNull: true,
        },
        allergenWarning: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allergen_warning',
            allowNull: true,
        },
        allergenOverrideByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allergen_override_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        allergenOverrideReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allergen_override_reason',
            allowNull: true,
        },
        allergenOverrideAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'allergen_override_at',
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
        tableName: 'cntn_canteen_order_line',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['canteen_order_id', 'line_no'] }
        ]
    });
    return CntnCanteenOrderLineEntity;
}
