"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRoleMappingsEntity = void 0;
exports.initPackageRoleMappingsEntity = initPackageRoleMappingsEntity;
const sequelize_1 = require("sequelize");
class PackageRoleMappingsEntity extends sequelize_1.Model {
}
exports.PackageRoleMappingsEntity = PackageRoleMappingsEntity;
function initPackageRoleMappingsEntity(sequelize) {
    PackageRoleMappingsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        packageRoleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_role_id',
            allowNull: true,
        },
        packageId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
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
        tableName: 'package_role_mappings',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['package_role_id', 'package_id'] }
        ]
    });
    return PackageRoleMappingsEntity;
}
