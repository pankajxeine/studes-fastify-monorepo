"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinRefundEntity = void 0;
exports.initFinRefundEntity = initFinRefundEntity;
const sequelize_1 = require("sequelize");
class FinRefundEntity extends sequelize_1.Model {
}
exports.FinRefundEntity = FinRefundEntity;
function initFinRefundEntity(sequelize) {
    FinRefundEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_refund')"),
        },
        refundId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'refund_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        refundNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'refund_no',
            allowNull: false,
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
            allowNull: true,
            references: { model: 'fin_invoice', key: 'invoice_id' },
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
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
        refundMethod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'refund_method',
            allowNull: false,
        },
        referenceNo: {
            type: sequelize_1.DataTypes.STRING(80),
            field: 'reference_no',
            allowNull: true,
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
        processedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'processed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        processedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'processed_at',
            allowNull: true,
        },
        rejectionReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rejection_reason',
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
        tableName: 'fin_refund',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['refund_no'] }
        ]
    });
    return FinRefundEntity;
}
