"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTemplateModulesEntity = void 0;
exports.initRoleTemplateModulesEntity = initRoleTemplateModulesEntity;
const sequelize_1 = require("sequelize");
class RoleTemplateModulesEntity extends sequelize_1.Model {
}
exports.RoleTemplateModulesEntity = RoleTemplateModulesEntity;
function initRoleTemplateModulesEntity(sequelize) {
    RoleTemplateModulesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        role_template_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_template_id',
            allowNull: true,
        },
        module_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_id',
            allowNull: true,
        },
        module_key: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'module_key',
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
        tableName: 'role_template_modules',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return RoleTemplateModulesEntity;
}
