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
        adminUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'admin_user_id',
            allowNull: true,
            references: { model: 'admin_users', key: 'id' },
            onDelete: 'SET NULL',
        },
        action: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'action',
            allowNull: true,
        },
        module: {
            type: sequelize_1.DataTypes.STRING(50),
            field: 'module',
            allowNull: true,
        },
        payload: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'payload',
            allowNull: true,
        },
        ipAddress: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'ip_address',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'institute_audit_logs',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: false,
        indexes: [
            { unique: true, fields: ['id'] }
        ]
    });
    return InstituteAuditLogsEntity;
}
