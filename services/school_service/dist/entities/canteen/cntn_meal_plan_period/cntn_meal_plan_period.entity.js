"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnMealPlanPeriodEntity = void 0;
exports.initCntnMealPlanPeriodEntity = initCntnMealPlanPeriodEntity;
const sequelize_1 = require("sequelize");
class CntnMealPlanPeriodEntity extends sequelize_1.Model {
}
exports.CntnMealPlanPeriodEntity = CntnMealPlanPeriodEntity;
function initCntnMealPlanPeriodEntity(sequelize) {
    CntnMealPlanPeriodEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_plan_period')"),
        },
        mealPlanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_plan_id',
            allowNull: false,
            references: { model: 'cntn_meal_plan', key: 'meal_plan_id' },
            onDelete: 'CASCADE',
        },
        mealPeriodCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_period_code',
            allowNull: false,
            references: { model: 'cntn_meal_period', key: 'meal_period_code' },
            onUpdate: 'CASCADE',
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
        UNIQUE: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'UNIQUE',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'cntn_meal_plan_period',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return CntnMealPlanPeriodEntity;
}
