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
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(200),
            field: 'name',
            allowNull: true,
        },
        price: {
            type: sequelize_1.DataTypes.DECIMAL(15, 2),
            field: 'price',
            allowNull: true,
        },
        costPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 2),
            field: 'cost_price',
            allowNull: true,
        },
        industryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'industry_id',
            allowNull: true,
        },
        maxUsers: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'max_users',
            allowNull: true,
            defaultValue: 0,
        },
        packageType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_type',
            allowNull: false,
            defaultValue: "Lite",
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "Active",
        },
        allowedMultipleStores: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allowed_multiple_stores',
            allowNull: false,
            defaultValue: "No",
        },
        additionalPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 1),
            field: 'additional_price',
            allowNull: true,
        },
        additionalCostPrice: {
            type: sequelize_1.DataTypes.DECIMAL(15, 1),
            field: 'additional_cost_price',
            allowNull: true,
        },
        permissionBasedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'permission_based_on',
            allowNull: false,
            defaultValue: "Role",
        },
        testPackage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'test_package',
            allowNull: false,
            defaultValue: "No",
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
        tableName: 'packages',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return PackagesEntity;
}
