"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnWalletTransactionEntity = void 0;
exports.initCntnWalletTransactionEntity = initCntnWalletTransactionEntity;
const sequelize_1 = require("sequelize");
class CntnWalletTransactionEntity extends sequelize_1.Model {
}
exports.CntnWalletTransactionEntity = CntnWalletTransactionEntity;
function initCntnWalletTransactionEntity(sequelize) {
    CntnWalletTransactionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_wallet_transaction')"),
        },
        walletTransactionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'wallet_transaction_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        walletId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'wallet_id',
            allowNull: false,
            references: { model: 'cntn_wallet', key: 'wallet_id' },
        },
        txnType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'txn_type',
            allowNull: false,
        },
        txnAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'txn_amount',
            allowNull: false,
        },
        balanceAfterAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'balance_after_amount',
            allowNull: false,
            defaultValue: 0,
        },
        paymentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_id',
            allowNull: true,
            references: { model: 'fin_payment', key: 'payment_id' },
        },
        canteenOrderId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'canteen_order_id',
            allowNull: true,
            references: { model: 'cntn_canteen_order', key: 'canteen_order_id' },
        },
        reversesWalletTransactionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reverses_wallet_transaction_id',
            allowNull: true,
            references: { model: 'cntn_wallet_transaction', key: 'wallet_transaction_id' },
        },
        txnAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'txn_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        performedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'performed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        }
    }, {
        sequelize,
        tableName: 'cntn_wallet_transaction',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return CntnWalletTransactionEntity;
}
