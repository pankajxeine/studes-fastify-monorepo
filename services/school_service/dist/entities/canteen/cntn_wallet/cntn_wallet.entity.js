"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnWalletEntity = void 0;
exports.initCntnWalletEntity = initCntnWalletEntity;
const sequelize_1 = require("sequelize");
class CntnWalletEntity extends sequelize_1.Model {
}
exports.CntnWalletEntity = CntnWalletEntity;
function initCntnWalletEntity(sequelize) {
    CntnWalletEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_wallet')"),
        },
        walletId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'wallet_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        balanceAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'balance_amount',
            allowNull: false,
            defaultValue: 0,
        },
        dailyLimitAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'daily_limit_amount',
            allowNull: true,
        },
        lowBalanceAlertAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'low_balance_alert_amount',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "active",
        },
        frozenAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'frozen_at',
            allowNull: true,
        },
        frozenReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'frozen_reason',
            allowNull: true,
        },
        frozenByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'frozen_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        openedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'opened_on',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        lastTxnAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_txn_at',
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
        tableName: 'cntn_wallet',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['person_id'] },
            { unique: true, fields: ['wallet_id', 'person_id'] }
        ]
    });
    return CntnWalletEntity;
}
