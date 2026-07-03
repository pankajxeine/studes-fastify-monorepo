"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubPackageFeaturesEntity = void 0;
exports.initSubPackageFeaturesEntity = initSubPackageFeaturesEntity;
const sequelize_1 = require("sequelize");
class SubPackageFeaturesEntity extends sequelize_1.Model {
}
exports.SubPackageFeaturesEntity = SubPackageFeaturesEntity;
function initSubPackageFeaturesEntity(sequelize) {
    SubPackageFeaturesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        sub_package_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_id',
            allowNull: true,
        },
        feature_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'feature_id',
            allowNull: true,
        },
        feature_type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'feature_type',
            allowNull: true,
            defaultValue: null,
        },
        primary_store_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'primary_store_price',
            allowNull: true,
            defaultValue: null,
        },
        additional_store_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'additional_store_price',
            allowNull: true,
            defaultValue: null,
        },
        trial_period_days: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'trial_period_days',
            allowNull: true,
        },
        billing_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'billing_date',
            allowNull: true,
            defaultValue: null,
        },
        expiry_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'expiry_date',
            allowNull: true,
            defaultValue: null,
        },
        purchased_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'purchased_date',
            allowNull: true,
            defaultValue: null,
        },
        purchased_terms: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'purchased_terms',
            allowNull: true,
            defaultValue: null,
        },
        cancel_date: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'cancel_date',
            allowNull: true,
            defaultValue: null,
        },
        cancel_terms: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'cancel_terms',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        source_of_purchase: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'source_of_purchase',
            allowNull: true,
            defaultValue: null,
        },
        source_of_cancellation: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'source_of_cancellation',
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
        tableName: 'sub_package_features',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubPackageFeaturesEntity;
}
