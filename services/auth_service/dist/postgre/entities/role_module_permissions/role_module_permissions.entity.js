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
        },
        role_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_id',
            allowNull: true,
        },
        module_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_id',
            allowNull: true,
        },
        permission: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'permission',
            allowNull: true,
            defaultValue: null,
        },
        created_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updated_by: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
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
        tableName: 'role_module_permissions',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return RoleModulePermissionsEntity;
}
