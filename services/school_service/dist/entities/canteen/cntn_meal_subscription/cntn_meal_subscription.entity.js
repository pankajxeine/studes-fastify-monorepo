"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnMealSubscriptionEntity = void 0;
exports.initCntnMealSubscriptionEntity = initCntnMealSubscriptionEntity;
const sequelize_1 = require("sequelize");
class CntnMealSubscriptionEntity extends sequelize_1.Model {
}
exports.CntnMealSubscriptionEntity = CntnMealSubscriptionEntity;
function initCntnMealSubscriptionEntity(sequelize) {
    CntnMealSubscriptionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_meal_subscription')"),
        },
        mealSubscriptionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_subscription_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        mealPlanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meal_plan_id',
            allowNull: false,
            references: { model: 'cntn_meal_plan', key: 'meal_plan_id' },
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        invoiceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'invoice_id',
            allowNull: true,
            references: { model: 'fin_invoice', key: 'invoice_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "active",
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
        },
        endDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'end_date',
            allowNull: false,
        },
        validity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'validity',
            allowNull: true,
            autoIncrement: true,
        },
        cancelledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancelled_at',
            allowNull: true,
        },
        cancelReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancel_reason',
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
        tableName: 'cntn_meal_subscription',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['meal_subscription_id', 'person_id'] }
        ]
    });
    return CntnMealSubscriptionEntity;
}
