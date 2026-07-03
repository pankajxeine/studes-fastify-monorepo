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
        },
        package_role_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_role_id',
            allowNull: true,
        },
        package_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'package_id',
            allowNull: true,
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
        tableName: 'package_role_mappings',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return PackageRoleMappingsEntity;
}
