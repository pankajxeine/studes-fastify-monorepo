"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisApplicationStatusHistoryEntity = void 0;
exports.initAdmisApplicationStatusHistoryEntity = initAdmisApplicationStatusHistoryEntity;
const sequelize_1 = require("sequelize");
class AdmisApplicationStatusHistoryEntity extends sequelize_1.Model {
}
exports.AdmisApplicationStatusHistoryEntity = AdmisApplicationStatusHistoryEntity;
function initAdmisApplicationStatusHistoryEntity(sequelize) {
    AdmisApplicationStatusHistoryEntity.init({
        id: {
            type: sequelize_1.DataTypes.BIGINT,
            field: 'id',
            allowNull: true,
            primaryKey: true,
            autoIncrement: true,
        },
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'admis_application_status_history'\r\n    )"),
        },
        applicationStatusHistoryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_status_history_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        applicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'application_id',
            allowNull: false,
            references: { model: 'admis_application', key: 'application_id' },
            onDelete: 'CASCADE',
        },
        fromStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'from_status',
            allowNull: true,
        },
        toStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'to_status',
            allowNull: false,
        },
        changedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'changed_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        changedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'changed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        remarks: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'remarks',
            allowNull: true,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'created_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        createdBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'created_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'admis_application_status_history',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return AdmisApplicationStatusHistoryEntity;
}
