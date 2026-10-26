"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnWeeklyMenuItemEntity = void 0;
exports.initCntnWeeklyMenuItemEntity = initCntnWeeklyMenuItemEntity;
const sequelize_1 = require("sequelize");
class CntnWeeklyMenuItemEntity extends sequelize_1.Model {
}
exports.CntnWeeklyMenuItemEntity = CntnWeeklyMenuItemEntity;
function initCntnWeeklyMenuItemEntity(sequelize) {
    CntnWeeklyMenuItemEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_weekly_menu_item')"),
        },
        weeklyMenuItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'weekly_menu_item_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        weeklyMenuId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'weekly_menu_id',
            allowNull: false,
            references: { model: 'cntn_weekly_menu', key: 'weekly_menu_id' },
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
        mealPeriodCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_period_code',
            allowNull: false,
            references: { model: 'cntn_meal_period', key: 'meal_period_code' },
            onUpdate: 'CASCADE',
        },
        dayOfWeek: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'day_of_week',
            allowNull: false,
        },
        plannedQty: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'planned_qty',
            allowNull: true,
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
        tableName: 'cntn_weekly_menu_item',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['weekly_menu_id', 'day_of_week', 'meal_period_code', 'menu_item_id'] }
        ]
    });
    return CntnWeeklyMenuItemEntity;
}
