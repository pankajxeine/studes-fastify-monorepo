"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteSubscriptionsEntity = void 0;
exports.initInstituteSubscriptionsEntity = initInstituteSubscriptionsEntity;
const sequelize_1 = require("sequelize");
class InstituteSubscriptionsEntity extends sequelize_1.Model {
}
exports.InstituteSubscriptionsEntity = InstituteSubscriptionsEntity;
function initInstituteSubscriptionsEntity(sequelize) {
    InstituteSubscriptionsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        institute_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institute_id',
            allowNull: true,
        },
        subscription_plan_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subscription_plan_id',
            allowNull: true,
        },
        subscription_start_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'subscription_start_date',
            allowNull: true,
            defaultValue: null,
        },
        subscription_end_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'subscription_end_date',
            allowNull: true,
            defaultValue: null,
        },
        billing_cycle: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'billing_cycle',
            allowNull: true,
            defaultValue: null,
        },
        amount_paid: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'amount_paid',
            allowNull: true,
            defaultValue: null,
        },
        payment_status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'payment_status',
            allowNull: true,
            defaultValue: null,
        },
        subscription_status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'subscription_status',
            allowNull: true,
            defaultValue: null,
        },
        created_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_at',
            allowNull: true,
            defaultValue: null,
        },
        updated_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'updated_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'institute_subscriptions',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return InstituteSubscriptionsEntity;
}
