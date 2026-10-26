"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisStudentEnrollmentEntity = void 0;
exports.initSisStudentEnrollmentEntity = initSisStudentEnrollmentEntity;
const sequelize_1 = require("sequelize");
class SisStudentEnrollmentEntity extends sequelize_1.Model {
}
exports.SisStudentEnrollmentEntity = SisStudentEnrollmentEntity;
function initSisStudentEnrollmentEntity(sequelize) {
    SisStudentEnrollmentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_enrollment')"),
        },
        studentEnrollmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_enrollment_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        termId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'term_id',
            allowNull: true,
            references: { model: 'acad_term', key: 'term_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: false,
            references: { model: 'acad_program', key: 'program_id' },
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_level_id',
            allowNull: false,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
        },
        sectionId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'section_id',
            allowNull: true,
            references: { model: 'acad_section', key: 'section_id' },
        },
        rollNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'roll_no',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "enrolled",
        },
        enrolledOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'enrolled_on',
            allowNull: false,
        },
        exitedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'exited_on',
            allowNull: true,
        },
        enrollmentPeriod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'enrollment_period',
            allowNull: true,
            autoIncrement: true,
        },
        promotedFromEnrollmentId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'promoted_from_enrollment_id',
            allowNull: true,
            references: { model: 'sis_student_enrollment', key: 'student_enrollment_id' },
        },
        isRepeating: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_repeating',
            allowNull: false,
            defaultValue: false,
        },
        exitReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exit_reason',
            allowNull: true,
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
        tableName: 'sis_student_enrollment',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['student_enrollment_id', 'student_id'] },
            { unique: true, fields: ['promoted_from_enrollment_id'] }
        ]
    });
    return SisStudentEnrollmentEntity;
}
