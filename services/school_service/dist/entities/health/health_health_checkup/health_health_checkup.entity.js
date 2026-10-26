"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthHealthCheckupEntity = void 0;
exports.initHealthHealthCheckupEntity = initHealthHealthCheckupEntity;
const sequelize_1 = require("sequelize");
class HealthHealthCheckupEntity extends sequelize_1.Model {
}
exports.HealthHealthCheckupEntity = HealthHealthCheckupEntity;
function initHealthHealthCheckupEntity(sequelize) {
    HealthHealthCheckupEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('health_health_checkup')"),
        },
        healthCheckupId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'health_checkup_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        checkupDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'checkup_date',
            allowNull: false,
        },
        checkupType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'checkup_type',
            allowNull: false,
            defaultValue: "annual",
        },
        heightCm: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'height_cm',
            allowNull: true,
        },
        weightKg: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'weight_kg',
            allowNull: true,
        },
        bmi: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'bmi',
            allowNull: true,
            autoIncrement: true,
        },
        visionLeft: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'vision_left',
            allowNull: true,
        },
        visionRight: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'vision_right',
            allowNull: true,
        },
        hearingNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hearing_notes',
            allowNull: true,
        },
        dentalNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'dental_notes',
            allowNull: true,
        },
        findings: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'findings',
            allowNull: true,
        },
        recommendations: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'recommendations',
            allowNull: true,
        },
        isReferralNeeded: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_referral_needed',
            allowNull: false,
            defaultValue: false,
        },
        checkedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'checked_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        examinerName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'examiner_name',
            allowNull: true,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
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
        tableName: 'health_health_checkup',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id', 'checkup_date', 'checkup_type'] }
        ]
    });
    return HealthHealthCheckupEntity;
}
