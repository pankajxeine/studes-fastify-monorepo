"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRoleFeaturePermissionsEntity = void 0;
exports.initPackageRoleFeaturePermissionsEntity = initPackageRoleFeaturePermissionsEntity;
const sequelize_1 = require("sequelize");
class PackageRoleFeaturePermissionsEntity extends sequelize_1.Model {
}
exports.PackageRoleFeaturePermissionsEntity = PackageRoleFeaturePermissionsEntity;
function initPackageRoleFeaturePermissionsEntity(sequelize) {
    PackageRoleFeaturePermissionsEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
        },
        package_role_mapping_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_role_mapping_id',
            allowNull: true,
        },
        feature_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'feature_id',
            allowNull: true,
        },
        permission: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'permission',
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
        tableName: 'package_role_feature_permissions',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return PackageRoleFeaturePermissionsEntity;
}
