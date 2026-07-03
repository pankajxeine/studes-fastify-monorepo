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
        is_admin: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_admin',
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
        tableName: 'roles',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return RolesEntity;
}
