"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnDailyMenuItemEntity = void 0;
exports.initCntnDailyMenuItemEntity = initCntnDailyMenuItemEntity;
const sequelize_1 = require("sequelize");
class CntnDailyMenuItemEntity extends sequelize_1.Model {
}
exports.CntnDailyMenuItemEntity = CntnDailyMenuItemEntity;
function initCntnDailyMenuItemEntity(sequelize) {
    CntnDailyMenuItemEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_daily_menu_item')"),
        },
        dailyMenuItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'daily_menu_item_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        dailyMenuId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'daily_menu_id',
            allowNull: false,
            references: { model: 'cntn_daily_menu', key: 'daily_menu_id' },
            onDelete: 'CASCADE',
        },
        canteenOutletId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_outlet_id',
            allowNull: false,
        },
        menuItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'menu_item_id',
            allowNull: false,
            references: { model: 'cntn_menu_item', key: 'menu_item_id' },
        },
        priceAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'price_amount',
            allowNull: false,
        },
        plannedQty: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'planned_qty',
            allowNull: true,
        },
        soldQty: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'sold_qty',
            allowNull: false,
            defaultValue: 0,
        },
        isSoldOut: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_sold_out',
            allowNull: false,
            defaultValue: false,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'cntn_daily_menu_item',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['daily_menu_id', 'menu_item_id'] }
        ]
    });
    return CntnDailyMenuItemEntity;
}
