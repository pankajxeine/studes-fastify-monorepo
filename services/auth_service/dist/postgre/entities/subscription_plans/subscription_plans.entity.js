"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionPlansEntity = void 0;
exports.initSubscriptionPlansEntity = initSubscriptionPlansEntity;
const sequelize_1 = require("sequelize");
class SubscriptionPlansEntity extends sequelize_1.Model {
}
exports.SubscriptionPlansEntity = SubscriptionPlansEntity;
function initSubscriptionPlansEntity(sequelize) {
    SubscriptionPlansEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        plan_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'plan_name',
            allowNull: true,
            defaultValue: null,
        },
        institute_type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'institute_type',
            allowNull: true,
            defaultValue: null,
        },
        monthly_price: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            field: 'monthly_price',
            allowNull: true,
            defaultValue: null,
        },
        yearly_price: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'yearly_price',
            allowNull: true,
            defaultValue: null,
        },
        max_users: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_users',
            allowNull: true,
        },
        max_students: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_students',
            allowNull: true,
        },
        features: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'features',
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'description',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
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
        tableName: 'subscription_plans',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubscriptionPlansEntity;
}
