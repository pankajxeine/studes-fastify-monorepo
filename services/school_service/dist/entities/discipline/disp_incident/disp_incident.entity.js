"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispIncidentEntity = void 0;
exports.initDispIncidentEntity = initDispIncidentEntity;
const sequelize_1 = require("sequelize");
class DispIncidentEntity extends sequelize_1.Model {
}
exports.DispIncidentEntity = DispIncidentEntity;
function initDispIncidentEntity(sequelize) {
    DispIncidentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('disp_incident')"),
        },
        incidentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'incident_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        incidentNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'incident_no',
            allowNull: false,
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        incidentCategoryCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'incident_category_code',
            allowNull: false,
            references: { model: 'disp_incident_category', key: 'incident_category_code' },
            onUpdate: 'CASCADE',
        },
        severity: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'severity',
            allowNull: false,
            defaultValue: 1,
        },
        occurredAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'occurred_at',
            allowNull: false,
        },
        location: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'location',
            allowNull: true,
        },
        sectionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'section_id',
            allowNull: true,
            references: { model: 'acad_section', key: 'section_id' },
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: false,
        },
        isConfidential: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_confidential',
            allowNull: false,
            defaultValue: false,
        },
        reportedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reported_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        reportedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'reported_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "open",
        },
        resolvedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'resolved_at',
            allowNull: true,
        },
        resolutionSummary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'resolution_summary',
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
        tableName: 'disp_incident',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['incident_no'] }
        ]
    });
    return DispIncidentEntity;
}
