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
            primaryKey: true,
        },
        subPackageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_package_id',
            allowNull: true,
        },
        featureId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'feature_id',
            allowNull: true,
        },
        featureType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'feature_type',
            allowNull: false,
            defaultValue: "None",
        },
        primaryPrice: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'primary_price',
            allowNull: true,
        },
        additionalPrice: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'additional_price',
            allowNull: true,
        },
        trialPeriodDays: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'trial_period_days',
            allowNull: true,
            defaultValue: 0,
        },
        billingDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'billing_date',
            allowNull: true,
        },
        expiryDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'expiry_date',
            allowNull: true,
        },
        purchasedDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'purchased_date',
            allowNull: true,
        },
        purchasedTerms: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'purchased_terms',
            allowNull: true,
        },
        cancelDate: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancel_date',
            allowNull: true,
        },
        cancelTerms: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'cancel_terms',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "Active",
        },
        sourceOfPurchase: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'source_of_purchase',
            allowNull: true,
        },
        sourceOfCancellation: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'source_of_cancellation',
            allowNull: true,
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
        tableName: 'sub_package_features',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['sub_package_id', 'feature_id'] }
        ]
    });
    return SubPackageFeaturesEntity;
}
