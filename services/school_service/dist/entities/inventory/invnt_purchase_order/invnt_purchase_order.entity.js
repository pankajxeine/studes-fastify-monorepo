"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvntPurchaseOrderEntity = void 0;
exports.initInvntPurchaseOrderEntity = initInvntPurchaseOrderEntity;
const sequelize_1 = require("sequelize");
class InvntPurchaseOrderEntity extends sequelize_1.Model {
}
exports.InvntPurchaseOrderEntity = InvntPurchaseOrderEntity;
function initInvntPurchaseOrderEntity(sequelize) {
    InvntPurchaseOrderEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('invnt_purchase_order')"),
        },
        purchaseOrderId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purchase_order_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        poNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'po_no',
            allowNull: false,
        },
        vendorId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'vendor_id',
            allowNull: false,
            references: { model: 'org_vendor', key: 'vendor_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        deliveryRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'delivery_room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        orderDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'order_date',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        expectedDeliveryOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'expected_delivery_on',
            allowNull: true,
        },
        requestedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        orderedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ordered_at',
            allowNull: true,
        },
        subtotalAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'subtotal_amount',
            allowNull: false,
            defaultValue: 0,
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
        paymentTerms: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_terms',
            allowNull: true,
        },
        cancelledReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancelled_reason',
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
        tableName: 'invnt_purchase_order',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['po_no'] }
        ]
    });
    return InvntPurchaseOrderEntity;
}
