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
            primaryKey: true,
        },
        instituteId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institute_id',
            allowNull: true,
        },
        subscriptionPlanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subscription_plan_id',
            allowNull: true,
            references: { model: 'subscription_plans', key: 'id' },
            onDelete: 'CASCADE',
        },
        subscriptionStartDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'subscription_start_date',
            allowNull: true,
        },
        subscriptionEndDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'subscription_end_date',
            allowNull: true,
        },
        billingCycle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'billing_cycle',
            allowNull: true,
            defaultValue: "Monthly",
        },
        amountPaid: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'amount_paid',
            allowNull: true,
        },
        paymentStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_status',
            allowNull: true,
            defaultValue: "Pending",
        },
        subscriptionStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subscription_status',
            allowNull: true,
            defaultValue: "Active",
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: true,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'institute_subscriptions',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return InstituteSubscriptionsEntity;
}
