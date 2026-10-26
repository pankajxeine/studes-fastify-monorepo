"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnMealPeriodEntity = void 0;
exports.initCntnMealPeriodEntity = initCntnMealPeriodEntity;
const sequelize_1 = require("sequelize");
class CntnMealPeriodEntity extends sequelize_1.Model {
}
exports.CntnMealPeriodEntity = CntnMealPeriodEntity;
function initCntnMealPeriodEntity(sequelize) {
    CntnMealPeriodEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_period')"),
        },
        mealPeriodCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_period_code',
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        defaultStartTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'default_start_time',
            allowNull: true,
        },
        defaultEndTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'default_end_time',
            allowNull: true,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
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
        }
    }, {
        sequelize,
        tableName: 'cntn_meal_period',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return CntnMealPeriodEntity;
}
