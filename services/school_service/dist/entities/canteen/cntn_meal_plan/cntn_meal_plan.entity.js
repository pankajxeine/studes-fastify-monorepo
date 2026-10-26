"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnMealPlanEntity = void 0;
exports.initCntnMealPlanEntity = initCntnMealPlanEntity;
const sequelize_1 = require("sequelize");
class CntnMealPlanEntity extends sequelize_1.Model {
}
exports.CntnMealPlanEntity = CntnMealPlanEntity;
function initCntnMealPlanEntity(sequelize) {
    CntnMealPlanEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_plan')"),
        },
        mealPlanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_plan_id',
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
        termId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_id',
            allowNull: false,
            references: { model: 'acad_term', key: 'term_id' },
        },
        feeHeadCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_head_code',
            allowNull: false,
            defaultValue: "meal_plan",
            references: { model: 'fin_fee_head', key: 'fee_head_code' },
            onUpdate: 'CASCADE',
        },
        code: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'code',
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
        priceAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'price_amount',
            allowNull: false,
        },
        mealsPerDay: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'meals_per_day',
            allowNull: false,
            defaultValue: 1,
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
        },
        validTo: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_to',
            allowNull: false,
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
        tableName: 'cntn_meal_plan',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['term_id', 'code'] }
        ]
    });
    return CntnMealPlanEntity;
}
