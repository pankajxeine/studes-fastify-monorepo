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
            primaryKey: true,
        },
        packageRoleMappingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_role_mapping_id',
            allowNull: true,
        },
        featureId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'feature_id',
            allowNull: true,
        },
        permission: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'permission',
            allowNull: true,
            defaultValue: "full",
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
        tableName: 'package_role_feature_permissions',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['package_role_mapping_id', 'feature_id'] }
        ]
    });
    return PackageRoleFeaturePermissionsEntity;
}
