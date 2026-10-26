"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibLoanEntity = void 0;
exports.initLibLoanEntity = initLibLoanEntity;
const sequelize_1 = require("sequelize");
class LibLoanEntity extends sequelize_1.Model {
}
exports.LibLoanEntity = LibLoanEntity;
function initLibLoanEntity(sequelize) {
    LibLoanEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lib_loan')"),
        },
        loanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'loan_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        bookCopyId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'book_copy_id',
            allowNull: false,
            references: { model: 'lib_book_copy', key: 'book_copy_id' },
        },
        libraryMembershipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'library_membership_id',
            allowNull: false,
            references: { model: 'lib_library_membership', key: 'library_membership_id' },
        },
        issuedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'issued_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        dueOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'due_on',
            allowNull: false,
        },
        returnedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'returned_at',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'status',
            allowNull: false,
            defaultValue: "open",
        },
        renewalCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'renewal_count',
            allowNull: false,
            defaultValue: 0,
        },
        finePerDayAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fine_per_day_amount',
            allowNull: false,
            defaultValue: 0.25,
        },
        fineAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fine_amount',
            allowNull: false,
            defaultValue: 0,
        },
        fineWaivedAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fine_waived_amount',
            allowNull: false,
            defaultValue: 0,
        },
        fineInvoiceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fine_invoice_id',
            allowNull: true,
            references: { model: 'fin_invoice', key: 'invoice_id' },
        },
        issuedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        receivedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'received_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        returnCondition: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'return_condition',
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
        tableName: 'lib_loan',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return LibLoanEntity;
}
