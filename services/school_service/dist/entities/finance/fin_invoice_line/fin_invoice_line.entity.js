"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinInvoiceLineEntity = void 0;
exports.initFinInvoiceLineEntity = initFinInvoiceLineEntity;
const sequelize_1 = require("sequelize");
class FinInvoiceLineEntity extends sequelize_1.Model {
}
exports.FinInvoiceLineEntity = FinInvoiceLineEntity;
function initFinInvoiceLineEntity(sequelize) {
    FinInvoiceLineEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_invoice_line')"),
        },
        invoiceLineId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'invoice_line_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        invoiceId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'invoice_id',
            allowNull: false,
            references: { model: 'fin_invoice', key: 'invoice_id' },
            onDelete: 'CASCADE',
        },
        lineNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'line_no',
            allowNull: false,
        },
        feeHeadCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_head_code',
            allowNull: false,
            references: { model: 'fin_fee_head', key: 'fee_head_code' },
            onUpdate: 'CASCADE',
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: false,
        },
        quantity: {
            type: sequelize_1.DataTypes.DECIMAL(8, 2),
            field: 'quantity',
            allowNull: false,
            defaultValue: 1,
        },
        unitAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'unit_amount',
            allowNull: false,
        },
        grossAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'gross_amount',
            allowNull: true,
            autoIncrement: true,
        },
        discountAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'discount_amount',
            allowNull: false,
            defaultValue: 0,
        },
        netAmount: {
            type: sequelize_1.DataTypes.DECIMAL(12, 2),
            field: 'net_amount',
            allowNull: true,
            autoIncrement: true,
        },
        studentConcessionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_concession_id',
            allowNull: true,
            references: { model: 'fin_student_concession', key: 'student_concession_id' },
        },
        feeStructureItemId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_structure_item_id',
            allowNull: true,
            references: { model: 'fin_fee_structure_item', key: 'fee_structure_item_id' },
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
        tableName: 'fin_invoice_line',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['invoice_id', 'line_no'] }
        ]
    });
    return FinInvoiceLineEntity;
}
