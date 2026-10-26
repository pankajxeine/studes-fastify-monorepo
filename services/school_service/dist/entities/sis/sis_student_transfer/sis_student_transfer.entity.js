"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SisStudentTransferEntity = void 0;
exports.initSisStudentTransferEntity = initSisStudentTransferEntity;
const sequelize_1 = require("sequelize");
class SisStudentTransferEntity extends sequelize_1.Model {
}
exports.SisStudentTransferEntity = SisStudentTransferEntity;
function initSisStudentTransferEntity(sequelize) {
    SisStudentTransferEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('sis_student_transfer')"),
        },
        studentTransferId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_transfer_id',
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
        direction: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'direction',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        transferDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'transfer_date',
            allowNull: false,
        },
        otherSchoolName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'other_school_name',
            allowNull: false,
        },
        otherSchoolCity: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'other_school_city',
            allowNull: true,
        },
        otherSchoolBoard: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'other_school_board',
            allowNull: true,
        },
        lastGradeCompleted: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'last_grade_completed',
            allowNull: true,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: true,
        },
        incomingTcNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'incoming_tc_no',
            allowNull: true,
        },
        issuedCertificateId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_certificate_id',
            allowNull: true,
            references: { model: 'docs_issued_certificate', key: 'issued_certificate_id' },
        },
        requestedByPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        decidedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decided_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        decidedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'decided_at',
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
        tableName: 'sis_student_transfer',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['issued_certificate_id'] }
        ]
    });
    return SisStudentTransferEntity;
}
