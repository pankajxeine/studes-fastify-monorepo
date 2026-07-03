"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesEntity = void 0;
exports.initPackagesEntity = initPackagesEntity;
const sequelize_1 = require("sequelize");
class PackagesEntity extends sequelize_1.Model {
}
exports.PackagesEntity = PackagesEntity;
function initPackagesEntity(sequelize) {
    PackagesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        price: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'price',
            allowNull: true,
            defaultValue: null,
        },
        cost_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'cost_price',
            allowNull: true,
            defaultValue: null,
        },
        industry_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_id',
            allowNull: true,
        },
        max_users: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_users',
            allowNull: true,
        },
        max_products: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_products',
            allowNull: true,
        },
        package_type: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'package_type',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        allowed_multiple_stores: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'allowed_multiple_stores',
            allowNull: true,
            defaultValue: null,
        },
        additional_store_price: {
            type: sequelize_1.DataTypes.DECIMAL(3, 1),
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
        permission_based_on: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'permission_based_on',
            allowNull: true,
            defaultValue: null,
        },
        test_package: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'test_package',
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
        tableName: 'packages',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return PackagesEntity;
}
