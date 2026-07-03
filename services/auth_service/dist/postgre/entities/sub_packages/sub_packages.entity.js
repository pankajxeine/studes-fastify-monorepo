"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubPackagesEntity = void 0;
exports.initSubPackagesEntity = initSubPackagesEntity;
const sequelize_1 = require("sequelize");
class SubPackagesEntity extends sequelize_1.Model {
}
exports.SubPackagesEntity = SubPackagesEntity;
function initSubPackagesEntity(sequelize) {
    SubPackagesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        sub_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_id',
            allowNull: true,
        },
        package_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
            allowNull: true,
        },
        package_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'package_name',
            allowNull: true,
            defaultValue: null,
        },
        package_price: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_price',
            allowNull: true,
        },
        package_max_user: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_max_user',
            allowNull: true,
        },
        package_max_product: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_max_product',
            allowNull: true,
        },
        permission_based_on: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'permission_based_on',
            allowNull: true,
            defaultValue: null,
        },
        additional_users: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'additional_users',
            allowNull: true,
        },
        additional_store_price: {
            type: sequelize_1.DataTypes.DECIMAL(3, 1),
            field: 'additional_store_price',
            allowNull: true,
            defaultValue: null,
        },
        additional_user_price: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'additional_user_price',
            allowNull: true,
            defaultValue: null,
        },
        discount: {
            type: sequelize_1.DataTypes.DECIMAL(2, 1),
            field: 'discount',
            allowNull: true,
            defaultValue: null,
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
        tableName: 'sub_packages',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return SubPackagesEntity;
}
