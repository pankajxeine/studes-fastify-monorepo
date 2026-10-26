"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinPaymentEntity = void 0;
exports.initFinPaymentEntity = initFinPaymentEntity;
const sequelize_1 = require("sequelize");
class FinPaymentEntity extends sequelize_1.Model {
}
exports.FinPaymentEntity = FinPaymentEntity;
function initFinPaymentEntity(sequelize) {
    FinPaymentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_payment')"),
        },
        paymentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        receiptNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'receipt_no',
            allowNull: false,
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        payerPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payer_person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: true,
            references: { model: 'sis_student', key: 'student_id' },
        },
        purpose: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purpose',
            allowNull: false,
            defaultValue: "fees",
        },
        paymentMethod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_method',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: false,
        },
        allocatedAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allocated_amount',
            allowNull: false,
            defaultValue: 0,
        },
        refundedAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'refunded_amount',
            allowNull: false,
            defaultValue: 0,
        },
        unallocatedAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'unallocated_amount',
            allowNull: true,
            autoIncrement: true,
        },
        paidAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'paid_at',
            allowNull: true,
        },
        referenceNo: {
            type: sequelize_1.DataTypes.STRING(80),
            field: 'reference_no',
            allowNull: true,
        },
        bankName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bank_name',
            allowNull: true,
        },
        gatewayName: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'gateway_name',
            allowNull: true,
        },
        receivedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'received_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        receiptFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'receipt_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
            allowNull: true,
        },
        reversedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'reversed_at',
            allowNull: true,
        },
        reversalReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reversal_reason',
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
        tableName: 'fin_payment',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['receipt_no'] }
        ]
    });
    return FinPaymentEntity;
}
