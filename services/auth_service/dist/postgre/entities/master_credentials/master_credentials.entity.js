"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MasterCredentialsEntity = void 0;
exports.initMasterCredentialsEntity = initMasterCredentialsEntity;
const sequelize_1 = require("sequelize");
class MasterCredentialsEntity extends sequelize_1.Model {
}
exports.MasterCredentialsEntity = MasterCredentialsEntity;
function initMasterCredentialsEntity(sequelize) {
    MasterCredentialsEntity.init({
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
        application: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'application',
            allowNull: true,
            defaultValue: null,
        },
        password: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'password',
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
        last_password_updated: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'last_password_updated',
            allowNull: true,
            defaultValue: null,
        },
        from_domain: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'from_domain',
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
        tableName: 'master_credentials',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return MasterCredentialsEntity;
}
