"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterPasswordsEntity = void 0;
exports.initMasterPasswordsEntity = initMasterPasswordsEntity;
const sequelize_1 = require("sequelize");
class MasterPasswordsEntity extends sequelize_1.Model {
}
exports.MasterPasswordsEntity = MasterPasswordsEntity;
function initMasterPasswordsEntity(sequelize) {
    MasterPasswordsEntity.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        defaultUsername: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'default_username',
            allowNull: false,
        },
        application: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'application',
            allowNull: false,
        },
        createdBy: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'created_by',
            allowNull: false,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'updated_by',
            allowNull: false,
        },
        lastPasswordUpdated: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_password_updated',
            allowNull: true,
        },
        fromCpanel: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'from_cpanel',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
        }
    }, {
        sequelize,
        tableName: 'master_passwords',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['default_username'] }
        ]
    });
    return MasterPasswordsEntity;
}
