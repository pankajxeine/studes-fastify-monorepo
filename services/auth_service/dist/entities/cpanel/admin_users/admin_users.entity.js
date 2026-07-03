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
            primaryKey: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING(22),
            field: 'username',
            allowNull: true,
        },
        email: {
            type: sequelize_1.DataTypes.STRING(26),
            field: 'email',
            allowNull: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING(250),
            field: 'password',
            allowNull: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'first_name',
            allowNull: true,
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'last_name',
            allowNull: true,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING(15),
            field: 'phone',
            allowNull: true,
        },
        role: {
            type: sequelize_1.DataTypes.STRING(13),
            field: 'role',
            allowNull: true,
        },
        profileImage: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'profile_image',
            allowNull: true,
        },
        isVerified: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_verified',
            allowNull: true,
        },
        lastLogin: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_login',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: true,
            defaultValue: "Active",
        },
        passwordResetToken: {
            type: sequelize_1.DataTypes.STRING(255),
            field: 'password_reset_token',
            allowNull: true,
        },
        passwordResetExpires: {
            type: sequelize_1.DataTypes.DATE,
            field: 'password_reset_expires',
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
        tableName: 'admin_users',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['username'] },
            { unique: true, fields: ['email'] }
        ]
    });
    return AdminUsersEntity;
}
