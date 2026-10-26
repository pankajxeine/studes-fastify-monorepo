"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispIncidentPartyEntity = void 0;
exports.initDispIncidentPartyEntity = initDispIncidentPartyEntity;
const sequelize_1 = require("sequelize");
class DispIncidentPartyEntity extends sequelize_1.Model {
}
exports.DispIncidentPartyEntity = DispIncidentPartyEntity;
function initDispIncidentPartyEntity(sequelize) {
    DispIncidentPartyEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('disp_incident_party')"),
        },
        incidentPartyId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'incident_party_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        incidentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'incident_id',
            allowNull: false,
            references: { model: 'disp_incident', key: 'incident_id' },
            onDelete: 'CASCADE',
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        partyRole: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'party_role',
            allowNull: false,
        },
        statement: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'statement',
            allowNull: true,
        },
        statementRecordedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'statement_recorded_at',
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
        tableName: 'disp_incident_party',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['incident_id', 'student_id', 'party_role'] }
        ]
    });
    return DispIncidentPartyEntity;
}
