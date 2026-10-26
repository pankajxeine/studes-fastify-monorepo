"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrLeaveTypeEntity = void 0;
exports.initHrLeaveTypeEntity = initHrLeaveTypeEntity;
const sequelize_1 = require("sequelize");
class HrLeaveTypeEntity extends sequelize_1.Model {
}
exports.HrLeaveTypeEntity = HrLeaveTypeEntity;
function initHrLeaveTypeEntity(sequelize) {
    HrLeaveTypeEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_leave_type')"),
        },
        leaveTypeCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'leave_type_code',
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        isPaid: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_paid',
            allowNull: false,
            defaultValue: true,
        },
        isBalanceTracked: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_balance_tracked',
            allowNull: false,
            defaultValue: true,
        },
        annualQuotaDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'annual_quota_days',
            allowNull: true,
        },
        carryForwardMaxDays: {
            type: sequelize_1.DataTypes.DECIMAL(5, 1),
            field: 'carry_forward_max_days',
            allowNull: false,
            defaultValue: 0,
        },
        maxConsecutiveDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'max_consecutive_days',
            allowNull: true,
        },
        allowsHalfDay: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allows_half_day',
            allowNull: false,
            defaultValue: true,
        },
        requiresDocumentAfterDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'requires_document_after_days',
            allowNull: true,
        },
        applicableCategory: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'applicable_category',
            allowNull: true,
        },
        applicableGenderCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'applicable_gender_code',
            allowNull: true,
            references: { model: 'ppl_gender', key: 'gender_code' },
            onUpdate: 'CASCADE',
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'hr_leave_type',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return HrLeaveTypeEntity;
}
