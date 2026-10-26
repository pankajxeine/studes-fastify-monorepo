"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthMedicalProfileEntity = void 0;
exports.initHealthMedicalProfileEntity = initHealthMedicalProfileEntity;
const sequelize_1 = require("sequelize");
class HealthMedicalProfileEntity extends sequelize_1.Model {
}
exports.HealthMedicalProfileEntity = HealthMedicalProfileEntity;
function initHealthMedicalProfileEntity(sequelize) {
    HealthMedicalProfileEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('health_medical_profile')"),
        },
        medicalProfileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'medical_profile_id',
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
        bloodGroup: {
            type: sequelize_1.DataTypes.STRING(7),
            field: 'blood_group',
            allowNull: true,
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
        allergies: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allergies',
            allowNull: true,
        },
        hasSevereAllergy: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_severe_allergy',
            allowNull: false,
            defaultValue: false,
        },
        chronicConditions: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'chronic_conditions',
            allowNull: true,
        },
        medications: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'medications',
            allowNull: true,
        },
        dietaryRestrictions: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'dietary_restrictions',
            allowNull: true,
        },
        disabilityNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'disability_notes',
            allowNull: true,
        },
        emergencyCarePlan: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'emergency_care_plan',
            allowNull: true,
        },
        primaryPhysician: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'primary_physician',
            allowNull: true,
        },
        physicianPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'physician_phone',
            allowNull: true,
        },
        insuranceProvider: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'insurance_provider',
            allowNull: true,
        },
        insurancePolicyNo: {
            type: sequelize_1.DataTypes.STRING(60),
            field: 'insurance_policy_no',
            allowNull: true,
        },
        lastReviewedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'last_reviewed_on',
            allowNull: true,
        },
        reviewedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reviewed_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
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
        tableName: 'health_medical_profile',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id'] }
        ]
    });
    return HealthMedicalProfileEntity;
}
