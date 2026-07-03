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
            primaryKey: true,
        },
        instituteId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'institute_id',
            allowNull: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'username',
            allowNull: true,
        },
        application: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'application',
            allowNull: true,
        },
        password: {
            type: sequelize_1.DataTypes.STRING(250),
            field: 'password',
            allowNull: true,
        },
        createdBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'created_by',
            allowNull: true,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'updated_by',
            allowNull: true,
        },
        lastPasswordUpdated: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_password_updated',
            allowNull: true,
        },
        fromDomain: {
            type: sequelize_1.DataTypes.STRING(100),
            field: 'from_domain',
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
        tableName: 'master_credentials',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return MasterCredentialsEntity;
}
