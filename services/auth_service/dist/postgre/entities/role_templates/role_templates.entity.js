"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleTemplatesEntity = void 0;
exports.initRoleTemplatesEntity = initRoleTemplatesEntity;
const sequelize_1 = require("sequelize");
class RoleTemplatesEntity extends sequelize_1.Model {
}
exports.RoleTemplatesEntity = RoleTemplatesEntity;
function initRoleTemplatesEntity(sequelize) {
    RoleTemplatesEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'name',
            allowNull: true,
            defaultValue: null,
        },
        description: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'description',
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
        tableName: 'role_templates',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return RoleTemplatesEntity;
}
