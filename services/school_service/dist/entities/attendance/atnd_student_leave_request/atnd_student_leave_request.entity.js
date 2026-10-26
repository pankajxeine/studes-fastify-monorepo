"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtndStudentLeaveRequestEntity = void 0;
exports.initAtndStudentLeaveRequestEntity = initAtndStudentLeaveRequestEntity;
const sequelize_1 = require("sequelize");
class AtndStudentLeaveRequestEntity extends sequelize_1.Model {
}
exports.AtndStudentLeaveRequestEntity = AtndStudentLeaveRequestEntity;
function initAtndStudentLeaveRequestEntity(sequelize) {
    AtndStudentLeaveRequestEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('atnd_student_leave_request')"),
        },
        studentLeaveRequestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_leave_request_id',
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
        requestedByPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        fromDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'from_date',
            allowNull: false,
        },
        toDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'to_date',
            allowNull: false,
        },
        leavePeriod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_period',
            allowNull: true,
            autoIncrement: true,
        },
        isHalfDay: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_half_day',
            allowNull: false,
            defaultValue: false,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        isMedical: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_medical',
            allowNull: false,
            defaultValue: false,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        submittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'submitted_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        reviewedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reviewed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        reviewedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'reviewed_at',
            allowNull: true,
        },
        reviewNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'review_note',
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
        tableName: 'atnd_student_leave_request',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return AtndStudentLeaveRequestEntity;
}
