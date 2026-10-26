"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CntnCanteenOrderStatusHistoryEntity = void 0;
exports.initCntnCanteenOrderStatusHistoryEntity = initCntnCanteenOrderStatusHistoryEntity;
const sequelize_1 = require("sequelize");
class CntnCanteenOrderStatusHistoryEntity extends sequelize_1.Model {
}
exports.CntnCanteenOrderStatusHistoryEntity = CntnCanteenOrderStatusHistoryEntity;
function initCntnCanteenOrderStatusHistoryEntity(sequelize) {
    CntnCanteenOrderStatusHistoryEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'cntn_canteen_order_status_history'\r\n    )"),
        },
        canteenOrderStatusHistoryId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_order_status_history_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        canteenOrderId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'canteen_order_id',
            allowNull: false,
            references: { model: 'cntn_canteen_order', key: 'canteen_order_id' },
            onDelete: 'CASCADE',
        },
        fromStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'from_status',
            allowNull: true,
        },
        toStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'to_status',
            allowNull: false,
        },
        changedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'changed_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        changedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'changed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        note: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'note',
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
        }
    }, {
        sequelize,
        tableName: 'cntn_canteen_order_status_history',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return CntnCanteenOrderStatusHistoryEntity;
}
