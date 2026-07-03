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
        },
        package_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
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
        short_description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'short_description',
            allowNull: true,
            defaultValue: null,
        },
        tags: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'tags',
            allowNull: true,
            defaultValue: null,
        },
        additional_store_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'additional_store_price',
            allowNull: true,
            defaultValue: null,
        },
        additional_store_cost_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'additional_store_cost_price',
            allowNull: true,
            defaultValue: null,
        },
        primary_store_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'primary_store_price',
            allowNull: true,
            defaultValue: null,
        },
        primary_store_cost_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'primary_store_cost_price',
            allowNull: true,
            defaultValue: null,
        },
        trial_period_days: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'trial_period_days',
            allowNull: true,
        },
        video_description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'video_description',
            allowNull: true,
            defaultValue: null,
        },
        full_description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'full_description',
            allowNull: true,
            defaultValue: null,
        },
        images: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'images',
            allowNull: true,
            defaultValue: null,
        },
        videos: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'videos',
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
        },
        created_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updated_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'package_features',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return PackageFeaturesEntity;
}
