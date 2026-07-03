"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageFeaturesEntity = void 0;
exports.initPackageFeaturesEntity = initPackageFeaturesEntity;
const sequelize_1 = require("sequelize");
class PackageFeaturesEntity extends sequelize_1.Model {
}
exports.PackageFeaturesEntity = PackageFeaturesEntity;
function initPackageFeaturesEntity(sequelize) {
    PackageFeaturesEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        packageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
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
            allowNull: true,
            defaultValue: "None",
        },
        shortDescription: {
            type: sequelize_1.DataTypes.STRING(300),
            field: 'short_description',
            allowNull: true,
        },
        tags: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'tags',
            allowNull: true,
        },
        additionalPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 2),
            field: 'additional_price',
            allowNull: true,
        },
        additionalCostPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 2),
            field: 'additional_cost_price',
            allowNull: true,
        },
        primaryPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 2),
            field: 'primary_price',
            allowNull: true,
        },
        primaryCostPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 2),
            field: 'primary_cost_price',
            allowNull: true,
        },
        trialPeriodDays: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'trial_period_days',
            allowNull: true,
        },
        videoDescription: {
            type: sequelize_1.DataTypes.STRING(1),
            field: 'video_description',
            allowNull: true,
        },
        fullDescription: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'full_description',
            allowNull: true,
        },
        images: {
            type: sequelize_1.DataTypes.STRING(2),
            field: 'images',
            allowNull: true,
        },
        videos: {
            type: sequelize_1.DataTypes.STRING(2),
            field: 'videos',
            allowNull: true,
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
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
        }
    }, {
        sequelize,
        tableName: 'package_features',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['package_id', 'feature_id'] }
        ]
    });
    return PackageFeaturesEntity;
}
