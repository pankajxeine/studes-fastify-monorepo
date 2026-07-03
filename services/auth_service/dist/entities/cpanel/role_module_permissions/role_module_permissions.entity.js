"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleModulePermissionsEntity = void 0;
exports.initRoleModulePermissionsEntity = initRoleModulePermissionsEntity;
const sequelize_1 = require("sequelize");
class RoleModulePermissionsEntity extends sequelize_1.Model {
}
exports.RoleModulePermissionsEntity = RoleModulePermissionsEntity;
function initRoleModulePermissionsEntity(sequelize) {
    RoleModulePermissionsEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
        },
        roleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_id',
            allowNull: true,
        },
        moduleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_id',
            allowNull: true,
        },
        permission: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'permission',
            allowNull: false,
            defaultValue: "None",
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
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
        tableName: 'role_module_permissions',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['role_id', 'module_id', 'permission'] }
        ]
    });
    return RoleModulePermissionsEntity;
}
