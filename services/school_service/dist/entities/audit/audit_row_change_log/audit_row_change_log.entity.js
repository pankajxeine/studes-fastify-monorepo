"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditRowChangeLogEntity = void 0;
exports.initAuditRowChangeLogEntity = initAuditRowChangeLogEntity;
const sequelize_1 = require("sequelize");
class AuditRowChangeLogEntity extends sequelize_1.Model {
}
exports.AuditRowChangeLogEntity = AuditRowChangeLogEntity;
function initAuditRowChangeLogEntity(sequelize) {
    AuditRowChangeLogEntity.init({
        publicId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'public_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        recordCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'record_code',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('audit_row_change_log')"),
        },
        rowChangeLogId: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'row_change_log_id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
        changedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'changed_at',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("clock_timestamp()"),
        },
        transactionId: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'transaction_id',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("txid_current()"),
        },
        schemaName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'schema_name',
            allowNull: false,
        },
        tableName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'table_name',
            allowNull: false,
        },
        operation: {
            type: sequelize_1.DataTypes.STRING(6),
            field: 'operation',
            allowNull: false,
        },
        rowPk: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'row_pk',
            allowNull: false,
        },
        rowId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'row_id',
            allowNull: true,
        },
        oldData: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'old_data',
            allowNull: true,
        },
        newData: {
            type: sequelize_1.DataTypes.JSONB,
            field: 'new_data',
            allowNull: true,
        },
        changedColumns: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'changed_columns',
            allowNull: true,
        },
        appUserId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'app_user_id',
            allowNull: true,
        },
        campusId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'campus_id',
            allowNull: true,
        },
        requestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'request_id',
            allowNull: true,
        },
        dbUser: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'db_user',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_user"),
        },
        applicationName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_name',
            allowNull: true,
            defaultValue: sequelize_1.Sequelize.literal("nullif(\r\n        current_setting('application_name', true),\r\n        ''\r\n    )"),
        },
        clientAddr: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'client_addr',
            allowNull: true,
            defaultValue: sequelize_1.Sequelize.literal("inet_client_addr()"),
        }
    }, {
        sequelize,
        tableName: 'audit_row_change_log',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return AuditRowChangeLogEntity;
}
