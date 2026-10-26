"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinExpenseEntity = void 0;
exports.initFinExpenseEntity = initFinExpenseEntity;
const sequelize_1 = require("sequelize");
class FinExpenseEntity extends sequelize_1.Model {
}
exports.FinExpenseEntity = FinExpenseEntity;
function initFinExpenseEntity(sequelize) {
    FinExpenseEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_expense')"),
        },
        expenseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'expense_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        expenseNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'expense_no',
            allowNull: false,
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        expenseCategoryCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'expense_category_code',
            allowNull: false,
            references: { model: 'fin_expense_category', key: 'expense_category_code' },
            onUpdate: 'CASCADE',
        },
        vendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vendor_id',
            allowNull: true,
            references: { model: 'org_vendor', key: 'vendor_id' },
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: false,
        },
        vendorInvoiceNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'vendor_invoice_no',
            allowNull: true,
        },
        expenseDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'expense_date',
            allowNull: false,
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: false,
        },
        taxAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'tax_amount',
            allowNull: false,
            defaultValue: 0,
        },
        totalAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'total_amount',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        submittedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'submitted_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        submittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'submitted_at',
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
        paymentMethod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_method',
            allowNull: true,
        },
        paidOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'paid_on',
            allowNull: true,
        },
        paymentReferenceNo: {
            type: sequelize_1.DataTypes.STRING(80),
            field: 'payment_reference_no',
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
        tableName: 'fin_expense',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['expense_no'] },
            { unique: true, fields: ['vendor_id', 'vendor_invoice_no'] }
        ]
    });
    return FinExpenseEntity;
}
