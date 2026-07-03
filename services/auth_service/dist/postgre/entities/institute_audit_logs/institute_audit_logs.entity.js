"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstituteAuditLogsEntity = void 0;
exports.initInstituteAuditLogsEntity = initInstituteAuditLogsEntity;
const sequelize_1 = require("sequelize");
class InstituteAuditLogsEntity extends sequelize_1.Model {
}
exports.InstituteAuditLogsEntity = InstituteAuditLogsEntity;
function initInstituteAuditLogsEntity(sequelize) {
    InstituteAuditLogsEntity.init({
        id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'id',
            allowNull: true,
            defaultValue: null,
        },
        institute_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'institute_id',
            allowNull: true,
            defaultValue: null,
        },
        admin_user_id: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'admin_user_id',
            allowNull: true,
            defaultValue: null,
        },
        action: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'action',
            allowNull: true,
            defaultValue: null,
        },
        module: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'module',
            allowNull: true,
            defaultValue: null,
        },
        payload: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'payload',
            allowNull: true,
            defaultValue: null,
        },
        ip_address: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'ip_address',
            allowNull: true,
            defaultValue: null,
        },
        created_at: {
            type: sequelize_1.DataTypes.CHAR,
            field: 'created_at',
            allowNull: true,
            defaultValue: null,
        }
    }, {
        sequelize,
        tableName: 'institute_audit_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true
    });
    return InstituteAuditLogsEntity;
}
