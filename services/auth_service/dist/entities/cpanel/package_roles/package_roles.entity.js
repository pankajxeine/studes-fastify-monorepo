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
            primaryKey: true,
        },
        packageRoleName: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'package_role_name',
            allowNull: true,
        },
        packageRoleKey: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'package_role_key',
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
        }
    }, {
        sequelize,
        tableName: 'package_roles',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['package_role_key'] }
        ]
    });
    return PackageRolesEntity;
}
