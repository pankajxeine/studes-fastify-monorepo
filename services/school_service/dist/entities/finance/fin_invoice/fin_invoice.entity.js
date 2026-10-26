"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinInvoiceEntity = void 0;
exports.initFinInvoiceEntity = initFinInvoiceEntity;
const sequelize_1 = require("sequelize");
class FinInvoiceEntity extends sequelize_1.Model {
}
exports.FinInvoiceEntity = FinInvoiceEntity;
function initFinInvoiceEntity(sequelize) {
    FinInvoiceEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_invoice')"),
        },
        invoiceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'invoice_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        invoiceNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'invoice_no',
            allowNull: false,
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
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        feeInstallmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_installment_id',
            allowNull: true,
            references: { model: 'fin_fee_installment', key: 'fee_installment_id' },
        },
        termId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'term_id',
            allowNull: true,
            references: { model: 'acad_term', key: 'term_id' },
        },
        invoiceDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'invoice_date',
            allowNull: false,
        },
        dueOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'due_on',
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        subtotalAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subtotal_amount',
            allowNull: false,
            defaultValue: 0,
        },
        discountAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'discount_amount',
            allowNull: false,
            defaultValue: 0,
        },
        totalAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'total_amount',
            allowNull: false,
            defaultValue: 0,
        },
        paidAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'paid_amount',
            allowNull: false,
            defaultValue: 0,
        },
        balanceAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'balance_amount',
            allowNull: true,
            autoIncrement: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
            allowNull: true,
        },
        issuedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'issued_at',
            allowNull: true,
        },
        issuedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        cancelledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancelled_at',
            allowNull: true,
        },
        cancelledByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancelled_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        cancellationReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancellation_reason',
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
        tableName: 'fin_invoice',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['invoice_no'] }
        ]
    });
    return FinInvoiceEntity;
}
