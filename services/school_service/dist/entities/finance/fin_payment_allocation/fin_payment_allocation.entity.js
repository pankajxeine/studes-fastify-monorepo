"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinPaymentAllocationEntity = void 0;
exports.initFinPaymentAllocationEntity = initFinPaymentAllocationEntity;
const sequelize_1 = require("sequelize");
class FinPaymentAllocationEntity extends sequelize_1.Model {
}
exports.FinPaymentAllocationEntity = FinPaymentAllocationEntity;
function initFinPaymentAllocationEntity(sequelize) {
    FinPaymentAllocationEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_payment_allocation')"),
        },
        paymentAllocationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_allocation_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        paymentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_id',
            allowNull: false,
            references: { model: 'fin_payment', key: 'payment_id' },
        },
        invoiceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'invoice_id',
            allowNull: false,
            references: { model: 'fin_invoice', key: 'invoice_id' },
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: false,
        },
        allocatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'allocated_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        allocatedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'allocated_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        reversedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'reversed_at',
            allowNull: true,
        },
        reversedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reversed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        tableName: 'fin_payment_allocation',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return FinPaymentAllocationEntity;
}
