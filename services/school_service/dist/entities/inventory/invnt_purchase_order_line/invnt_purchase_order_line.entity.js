"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvntPurchaseOrderLineEntity = void 0;
exports.initInvntPurchaseOrderLineEntity = initInvntPurchaseOrderLineEntity;
const sequelize_1 = require("sequelize");
class InvntPurchaseOrderLineEntity extends sequelize_1.Model {
}
exports.InvntPurchaseOrderLineEntity = InvntPurchaseOrderLineEntity;
function initInvntPurchaseOrderLineEntity(sequelize) {
    InvntPurchaseOrderLineEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('invnt_purchase_order_line')"),
        },
        purchaseOrderLineId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purchase_order_line_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        purchaseOrderId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purchase_order_id',
            allowNull: false,
            references: { model: 'invnt_purchase_order', key: 'purchase_order_id' },
            onDelete: 'CASCADE',
        },
        lineNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'line_no',
            allowNull: false,
        },
        itemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'item_id',
            allowNull: false,
            references: { model: 'invnt_item', key: 'item_id' },
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        quantity: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'quantity',
            allowNull: false,
        },
        unitPriceAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'unit_price_amount',
            allowNull: false,
        },
        taxRate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'tax_rate',
            allowNull: false,
            defaultValue: 0,
        },
        lineAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'line_amount',
            allowNull: true,
            autoIncrement: true,
        },
        receivedQuantity: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'received_quantity',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'invnt_purchase_order_line',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['purchase_order_id', 'line_no'] },
            { unique: true, fields: ['purchase_order_id', 'item_id'] }
        ]
    });
    return InvntPurchaseOrderLineEntity;
}
