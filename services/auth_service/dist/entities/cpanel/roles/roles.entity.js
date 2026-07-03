"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesEntity = void 0;
exports.initRolesEntity = initRolesEntity;
const sequelize_1 = require("sequelize");
class RolesEntity extends sequelize_1.Model {
}
exports.RolesEntity = RolesEntity;
function initRolesEntity(sequelize) {
    RolesEntity.init({
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
            type: sequelize_1.DataTypes.STRING(300),
            field: 'description',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "Active",
        },
        isAdmin: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_admin',
            allowNull: false,
            defaultValue: "No",
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
        tableName: 'roles',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return RolesEntity;
}
