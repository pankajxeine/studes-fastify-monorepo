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
            primaryKey: true,
        },
        planName: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'plan_name',
            allowNull: true,
        },
        instituteType: {
            type: sequelize_1.DataTypes.STRING(7),
            field: 'institute_type',
            allowNull: true,
        },
        monthlyPrice: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            field: 'monthly_price',
            allowNull: true,
        },
        yearlyPrice: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'yearly_price',
            allowNull: true,
        },
        maxUsers: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_users',
            allowNull: true,
        },
        maxStudents: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_students',
            allowNull: true,
        },
        features: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'features',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'subscription_plans',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return SubscriptionPlansEntity;
}
