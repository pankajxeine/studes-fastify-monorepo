"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRolesEntity = void 0;
exports.initPackageRolesEntity = initPackageRolesEntity;
const sequelize_1 = require("sequelize");
class PackageRolesEntity extends sequelize_1.Model {
}
exports.PackageRolesEntity = PackageRolesEntity;
function initPackageRolesEntity(sequelize) {
    PackageRolesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        package_role_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'package_role_name',
            allowNull: true,
            defaultValue: null,
        },
        package_role_key: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'package_role_key',
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
        tableName: 'package_roles',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return PackageRolesEntity;
}
