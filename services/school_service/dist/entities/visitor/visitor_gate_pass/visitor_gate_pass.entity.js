"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorGatePassEntity = void 0;
exports.initVisitorGatePassEntity = initVisitorGatePassEntity;
const sequelize_1 = require("sequelize");
class VisitorGatePassEntity extends sequelize_1.Model {
}
exports.VisitorGatePassEntity = VisitorGatePassEntity;
function initVisitorGatePassEntity(sequelize) {
    VisitorGatePassEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('visitor_gate_pass')"),
        },
        gatePassId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'gate_pass_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        passNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'pass_no',
            allowNull: false,
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        passType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'pass_type',
            allowNull: false,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "requested",
        },
        outFrom: {
            type: sequelize_1.DataTypes.DATE,
            field: 'out_from',
            allowNull: false,
        },
        validUntil: {
            type: sequelize_1.DataTypes.DATE,
            field: 'valid_until',
            allowNull: false,
        },
        passWindow: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pass_window',
            allowNull: true,
            autoIncrement: true,
        },
        isReturnExpected: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_return_expected',
            allowNull: false,
            defaultValue: false,
        },
        pickupPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pickup_person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        requestedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        requestedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'requested_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        approvedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'approved_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        approvedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'approved_at',
            allowNull: true,
        },
        rejectionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rejection_reason',
            allowNull: true,
        },
        verificationCode: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'verification_code',
            allowNull: false,
        },
        guardianNotifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'guardian_notified_at',
            allowNull: true,
        },
        exitedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'exited_at',
            allowNull: true,
        },
        exitRecordedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exit_recorded_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        pickupIdVerified: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pickup_id_verified',
            allowNull: false,
            defaultValue: false,
        },
        returnedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'returned_at',
            allowNull: true,
        },
        returnRecordedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'return_recorded_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        cancelledReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancelled_reason',
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
        tableName: 'visitor_gate_pass',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['pass_no'] },
            { unique: true, fields: ['verification_code'] }
        ]
    });
    return VisitorGatePassEntity;
}
