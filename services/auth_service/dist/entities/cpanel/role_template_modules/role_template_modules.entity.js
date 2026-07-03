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
            primaryKey: true,
        },
        roleTemplateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'role_template_id',
            allowNull: true,
        },
        moduleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'module_id',
            allowNull: true,
        },
        moduleKey: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'module_key',
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
        tableName: 'role_template_modules',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return RoleTemplateModulesEntity;
}
