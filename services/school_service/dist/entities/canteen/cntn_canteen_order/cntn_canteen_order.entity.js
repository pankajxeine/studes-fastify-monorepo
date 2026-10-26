"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnCanteenOrderEntity = void 0;
exports.initCntnCanteenOrderEntity = initCntnCanteenOrderEntity;
const sequelize_1 = require("sequelize");
class CntnCanteenOrderEntity extends sequelize_1.Model {
}
exports.CntnCanteenOrderEntity = CntnCanteenOrderEntity;
function initCntnCanteenOrderEntity(sequelize) {
    CntnCanteenOrderEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('cntn_canteen_order')"),
        },
        canteenOrderId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_order_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        orderNo: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'order_no',
            allowNull: false,
        },
        canteenOutletId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_outlet_id',
            allowNull: false,
            references: { model: 'cntn_canteen_outlet', key: 'canteen_outlet_id' },
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        dailyMenuId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'daily_menu_id',
            allowNull: true,
            references: { model: 'cntn_daily_menu', key: 'daily_menu_id' },
        },
        channel: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'channel',
            allowNull: false,
            defaultValue: "pos",
        },
        paymentMode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payment_mode',
            allowNull: false,
        },
        walletId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'wallet_id',
            allowNull: true,
            references: { model: 'cntn_wallet', key: 'wallet_id' },
        },
        mealSubscriptionId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'meal_subscription_id',
            allowNull: true,
            references: { model: 'cntn_meal_subscription', key: 'meal_subscription_id' },
        },
        paymentReference: {
            type: sequelize_1.DataTypes.STRING(60),
            field: 'payment_reference',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "placed",
        },
        pickupDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'pickup_date',
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("current_date"),
        },
        totalAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'total_amount',
            allowNull: false,
            defaultValue: 0,
        },
        orderedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ordered_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        preparingAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'preparing_at',
            allowNull: true,
        },
        readyAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ready_at',
            allowNull: true,
        },
        servedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'served_at',
            allowNull: true,
        },
        servedByStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'served_by_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        cancelledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'cancelled_at',
            allowNull: true,
        },
        cancelReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancel_reason',
            allowNull: true,
        },
        placedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        tableName: 'cntn_canteen_order',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['order_no'] },
            { unique: true, fields: ['canteen_order_id', 'wallet_id'] }
        ]
    });
    return CntnCanteenOrderEntity;
}
