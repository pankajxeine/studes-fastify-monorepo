"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvntStockTransactionEntity = void 0;
exports.initInvntStockTransactionEntity = initInvntStockTransactionEntity;
const sequelize_1 = require("sequelize");
class InvntStockTransactionEntity extends sequelize_1.Model {
}
exports.InvntStockTransactionEntity = InvntStockTransactionEntity;
function initInvntStockTransactionEntity(sequelize) {
    InvntStockTransactionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('invnt_stock_transaction')"),
        },
        stockTransactionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'stock_transaction_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        txnNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'txn_no',
            allowNull: false,
        },
        itemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'item_id',
            allowNull: false,
            references: { model: 'invnt_item', key: 'item_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: false,
            references: { model: 'org_room', key: 'room_id' },
        },
        toRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'to_room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        txnType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'txn_type',
            allowNull: false,
        },
        quantity: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'quantity',
            allowNull: false,
        },
        quantityDelta: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'quantity_delta',
            allowNull: true,
            autoIncrement: true,
        },
        unitCostAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'unit_cost_amount',
            allowNull: false,
            defaultValue: 0,
        },
        totalCostAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'total_cost_amount',
            allowNull: true,
            autoIncrement: true,
        },
        balanceAfter: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'balance_after',
            allowNull: false,
            defaultValue: 0,
        },
        purchaseOrderLineId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purchase_order_line_id',
            allowNull: true,
            references: { model: 'invnt_purchase_order_line', key: 'purchase_order_line_id' },
        },
        issuedToPersonId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issued_to_person_id',
            allowNull: true,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        referenceNo: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'reference_no',
            allowNull: true,
        },
        reason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reason',
            allowNull: true,
        },
        txnAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'txn_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
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
        tableName: 'invnt_stock_transaction',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['txn_no'] }
        ]
    });
    return InvntStockTransactionEntity;
}
