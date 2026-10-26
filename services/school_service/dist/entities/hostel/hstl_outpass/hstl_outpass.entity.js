"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HstlOutpassEntity = void 0;
exports.initHstlOutpassEntity = initHstlOutpassEntity;
const sequelize_1 = require("sequelize");
class HstlOutpassEntity extends sequelize_1.Model {
}
exports.HstlOutpassEntity = HstlOutpassEntity;
function initHstlOutpassEntity(sequelize) {
    HstlOutpassEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hstl_outpass')"),
        },
        outpassId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'outpass_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        outpassNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'outpass_no',
            allowNull: false,
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        hostelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'hostel_id',
            allowNull: false,
            references: { model: 'hstl_hostel', key: 'hostel_id' },
        },
        outpassType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'outpass_type',
            allowNull: false,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: false,
        },
        destination: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'destination',
            allowNull: false,
        },
        escortName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'escort_name',
            allowNull: true,
        },
        escortPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'escort_phone',
            allowNull: true,
        },
        plannedOutAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'planned_out_at',
            allowNull: false,
        },
        expectedReturnAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'expected_return_at',
            allowNull: false,
        },
        period: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'period',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "requested",
        },
        requestedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'requested_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        requestedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        hasGuardianConsent: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'has_guardian_consent',
            allowNull: false,
            defaultValue: false,
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
        checkedOutAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'checked_out_at',
            allowNull: true,
        },
        checkedOutByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'checked_out_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        returnedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'returned_at',
            allowNull: true,
        },
        isLateReturn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_late_return',
            allowNull: true,
            autoIncrement: true,
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
        tableName: 'hstl_outpass',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['outpass_no'] }
        ]
    });
    return HstlOutpassEntity;
}
