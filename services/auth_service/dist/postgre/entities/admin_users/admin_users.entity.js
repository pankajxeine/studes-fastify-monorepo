"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUsersEntity = void 0;
exports.initAdminUsersEntity = initAdminUsersEntity;
const sequelize_1 = require("sequelize");
class AdminUsersEntity extends sequelize_1.Model {
}
exports.AdminUsersEntity = AdminUsersEntity;
function initAdminUsersEntity(sequelize) {
    AdminUsersEntity.init({
        id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'id',
            allowNull: true,
        },
        institute_id: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institute_id',
            allowNull: true,
        },
        username: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'username',
            allowNull: true,
            defaultValue: null,
        },
        email: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'email',
            allowNull: true,
            defaultValue: null,
        },
        password: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'password',
            allowNull: true,
            defaultValue: null,
        },
        first_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'first_name',
            allowNull: true,
            defaultValue: null,
        },
        last_name: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'last_name',
            allowNull: true,
            defaultValue: null,
        },
        phone: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'phone',
            allowNull: true,
            defaultValue: null,
        },
        role: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'role',
            allowNull: true,
            defaultValue: null,
        },
        profile_image: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'profile_image',
            allowNull: true,
            defaultValue: null,
        },
        is_verified: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_verified',
            allowNull: true,
        },
        last_login: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'last_login',
            allowNull: true,
            defaultValue: null,
        },
        status: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'status',
            allowNull: true,
            defaultValue: null,
        },
        password_reset_token: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'password_reset_token',
            allowNull: true,
            defaultValue: null,
        },
        password_reset_expires: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'password_reset_expires',
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
        tableName: 'admin_users',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return AdminUsersEntity;
}
