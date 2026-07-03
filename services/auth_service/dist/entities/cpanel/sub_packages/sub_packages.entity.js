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
            primaryKey: true,
        },
        subId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sub_id',
            allowNull: true,
        },
        packageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
            allowNull: true,
        },
        packageName: {
            type: sequelize_1.DataTypes.STRING(200),
            field: 'package_name',
            allowNull: true,
        },
        packagePrice: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_price',
            allowNull: true,
        },
        packageMaxUser: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_max_user',
            allowNull: true,
            defaultValue: 0,
        },
        packageMaxProduct: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_max_product',
            allowNull: true,
            defaultValue: 0,
        },
        permissionBasedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'permission_based_on',
            allowNull: true,
            defaultValue: "Role",
        },
        additionalUsers: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'additional_users',
            allowNull: true,
            defaultValue: 0,
        },
        additionalStorePrice: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'additional_store_price',
            allowNull: true,
        },
        additionalUserPrice: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'additional_user_price',
            allowNull: true,
        },
        discount: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'discount',
            allowNull: true,
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
        tableName: 'sub_packages',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return SubPackagesEntity;
}
