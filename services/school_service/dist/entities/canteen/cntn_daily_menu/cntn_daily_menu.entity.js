"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnDailyMenuEntity = void 0;
exports.initCntnDailyMenuEntity = initCntnDailyMenuEntity;
const sequelize_1 = require("sequelize");
class CntnDailyMenuEntity extends sequelize_1.Model {
}
exports.CntnDailyMenuEntity = CntnDailyMenuEntity;
function initCntnDailyMenuEntity(sequelize) {
    CntnDailyMenuEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_daily_menu')"),
        },
        dailyMenuId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'daily_menu_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        canteenOutletId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_outlet_id',
            allowNull: false,
            references: { model: 'cntn_canteen_outlet', key: 'canteen_outlet_id' },
        },
        mealPeriodCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_period_code',
            allowNull: false,
            references: { model: 'cntn_meal_period', key: 'meal_period_code' },
            onUpdate: 'CASCADE',
        },
        menuDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'menu_date',
            allowNull: false,
        },
        weeklyMenuId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'weekly_menu_id',
            allowNull: true,
            references: { model: 'cntn_weekly_menu', key: 'weekly_menu_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        preOrderCutoffAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'pre_order_cutoff_at',
            allowNull: true,
        },
        publishedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'published_at',
            allowNull: true,
        },
        closedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'closed_at',
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
        tableName: 'cntn_daily_menu',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['canteen_outlet_id', 'menu_date', 'meal_period_code'] },
            { unique: true, fields: ['daily_menu_id', 'canteen_outlet_id'] }
        ]
    });
    return CntnDailyMenuEntity;
}
