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
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'name',
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING(200),
            field: 'description',
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
        tableName: 'role_templates',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] },
            { unique: true, fields: ['name'] }
        ]
    });
    return RoleTemplatesEntity;
}
