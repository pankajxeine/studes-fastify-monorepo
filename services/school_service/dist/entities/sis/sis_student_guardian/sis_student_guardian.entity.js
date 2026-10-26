"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisStudentGuardianEntity = void 0;
exports.initSisStudentGuardianEntity = initSisStudentGuardianEntity;
const sequelize_1 = require("sequelize");
class SisStudentGuardianEntity extends sequelize_1.Model {
}
exports.SisStudentGuardianEntity = SisStudentGuardianEntity;
function initSisStudentGuardianEntity(sequelize) {
    SisStudentGuardianEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_guardian')"),
        },
        studentGuardianId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_guardian_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
            onDelete: 'CASCADE',
        },
        guardianId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guardian_id',
            allowNull: false,
            references: { model: 'ppl_guardian', key: 'guardian_id' },
        },
        relationshipTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'relationship_type_code',
            allowNull: false,
            references: { model: 'ppl_relationship_type', key: 'relationship_type_code' },
            onUpdate: 'CASCADE',
        },
        isPrimary: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_primary',
            allowNull: false,
            defaultValue: false,
        },
        canPickup: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'can_pickup',
            allowNull: false,
            defaultValue: true,
        },
        receivesCommunications: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'receives_communications',
            allowNull: false,
            defaultValue: true,
        },
        livesWithStudent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lives_with_student',
            allowNull: false,
            defaultValue: true,
        },
        hasLegalCustody: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_legal_custody',
            allowNull: false,
            defaultValue: true,
        },
        isFeePayer: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_fee_payer',
            allowNull: false,
            defaultValue: false,
        },
        isEmergencyContact: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_emergency_contact',
            allowNull: false,
            defaultValue: true,
        },
        contactPriority: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'contact_priority',
            allowNull: false,
            defaultValue: 1,
        },
        validFrom: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'valid_from',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        validTo: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'valid_to',
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
        tableName: 'sis_student_guardian',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['student_id', 'guardian_id'] }
        ]
    });
    return SisStudentGuardianEntity;
}
