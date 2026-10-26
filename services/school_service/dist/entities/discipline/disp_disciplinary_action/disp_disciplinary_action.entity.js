"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispDisciplinaryActionEntity = void 0;
exports.initDispDisciplinaryActionEntity = initDispDisciplinaryActionEntity;
const sequelize_1 = require("sequelize");
class DispDisciplinaryActionEntity extends sequelize_1.Model {
}
exports.DispDisciplinaryActionEntity = DispDisciplinaryActionEntity;
function initDispDisciplinaryActionEntity(sequelize) {
    DispDisciplinaryActionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('disp_disciplinary_action')"),
        },
        disciplinaryActionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'disciplinary_action_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        incidentPartyId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'incident_party_id',
            allowNull: false,
            references: { model: 'disp_incident_party', key: 'incident_party_id' },
        },
        actionType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'action_type',
            allowNull: false,
        },
        startDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'start_date',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        endDate: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'end_date',
            allowNull: true,
        },
        details: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'details',
            allowNull: true,
        },
        issuedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        issuedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'issued_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        guardianInformedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'guardian_informed_at',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "active",
        },
        revokedReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'revoked_reason',
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
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'updated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedBy: {
            type: sequelize_1.DataTypes.UUID,
            field: 'updated_by',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'disp_disciplinary_action',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return DispDisciplinaryActionEntity;
}
