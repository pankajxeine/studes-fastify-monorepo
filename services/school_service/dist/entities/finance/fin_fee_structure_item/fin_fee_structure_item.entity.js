"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinFeeStructureItemEntity = void 0;
exports.initFinFeeStructureItemEntity = initFinFeeStructureItemEntity;
const sequelize_1 = require("sequelize");
class FinFeeStructureItemEntity extends sequelize_1.Model {
}
exports.FinFeeStructureItemEntity = FinFeeStructureItemEntity;
function initFinFeeStructureItemEntity(sequelize) {
    FinFeeStructureItemEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_fee_structure_item')"),
        },
        feeStructureItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_structure_item_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        feeStructureId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_structure_id',
            allowNull: false,
            references: { model: 'fin_fee_structure', key: 'fee_structure_id' },
            onDelete: 'CASCADE',
        },
        feeHeadCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_head_code',
            allowNull: false,
            references: { model: 'fin_fee_head', key: 'fee_head_code' },
            onUpdate: 'CASCADE',
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: false,
        },
        frequency: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'frequency',
            allowNull: false,
            defaultValue: "term",
        },
        isOptional: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_optional',
            allowNull: false,
            defaultValue: false,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'fin_fee_structure_item',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['fee_structure_id', 'fee_head_code'] }
        ]
    });
    return FinFeeStructureItemEntity;
}
