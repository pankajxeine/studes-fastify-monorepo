"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisCourseRegistrationEntity = void 0;
exports.initSisCourseRegistrationEntity = initSisCourseRegistrationEntity;
const sequelize_1 = require("sequelize");
class SisCourseRegistrationEntity extends sequelize_1.Model {
}
exports.SisCourseRegistrationEntity = SisCourseRegistrationEntity;
function initSisCourseRegistrationEntity(sequelize) {
    SisCourseRegistrationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_course_registration')"),
        },
        courseRegistrationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_registration_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        studentEnrollmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_enrollment_id',
            allowNull: false,
            references: { model: 'sis_student_enrollment', key: 'student_enrollment_id' },
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "registered",
        },
        registeredAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'registered_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        creditsAttempted: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'credits_attempted',
            allowNull: true,
        },
        isAudit: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_audit',
            allowNull: false,
            defaultValue: false,
        },
        droppedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'dropped_at',
            allowNull: true,
        },
        dropReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'drop_reason',
            allowNull: true,
        },
        completedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'completed_on',
            allowNull: true,
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'approved_by_user_id',
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
        tableName: 'sis_course_registration',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['student_id', 'course_offering_id'] }
        ]
    });
    return SisCourseRegistrationEntity;
}
