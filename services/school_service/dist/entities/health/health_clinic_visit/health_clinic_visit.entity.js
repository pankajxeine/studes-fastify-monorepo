"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthClinicVisitEntity = void 0;
exports.initHealthClinicVisitEntity = initHealthClinicVisitEntity;
const sequelize_1 = require("sequelize");
class HealthClinicVisitEntity extends sequelize_1.Model {
}
exports.HealthClinicVisitEntity = HealthClinicVisitEntity;
function initHealthClinicVisitEntity(sequelize) {
    HealthClinicVisitEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('health_clinic_visit')"),
        },
        clinicVisitId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'clinic_visit_id',
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
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        clinicRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'clinic_room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        visitAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'visit_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        complaint: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'complaint',
            allowNull: false,
        },
        temperatureC: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'temperature_c',
            allowNull: true,
        },
        pulseBpm: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'pulse_bpm',
            allowNull: true,
        },
        diagnosis: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'diagnosis',
            allowNull: true,
        },
        treatment: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'treatment',
            allowNull: true,
        },
        medicationGiven: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'medication_given',
            allowNull: true,
        },
        attendedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'attended_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        outcome: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'outcome',
            allowNull: true,
        },
        releasedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'released_at',
            allowNull: true,
        },
        guardianNotifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'guardian_notified_at',
            allowNull: true,
        },
        followUpOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'follow_up_on',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'health_clinic_visit',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return HealthClinicVisitEntity;
}
