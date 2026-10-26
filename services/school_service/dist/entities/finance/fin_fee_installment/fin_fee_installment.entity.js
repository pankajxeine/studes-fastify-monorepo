"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinFeeInstallmentEntity = void 0;
exports.initFinFeeInstallmentEntity = initFinFeeInstallmentEntity;
const sequelize_1 = require("sequelize");
class FinFeeInstallmentEntity extends sequelize_1.Model {
}
exports.FinFeeInstallmentEntity = FinFeeInstallmentEntity;
function initFinFeeInstallmentEntity(sequelize) {
    FinFeeInstallmentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('fin_fee_installment')"),
        },
        feeInstallmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fee_installment_id',
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
        installmentNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'installment_no',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        termId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'term_id',
            allowNull: true,
            references: { model: 'acad_term', key: 'term_id' },
        },
        issueOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'issue_on',
            allowNull: false,
        },
        dueOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'due_on',
            allowNull: false,
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: false,
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
        tableName: 'fin_fee_installment',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['fee_structure_id', 'installment_no'] }
        ]
    });
    return FinFeeInstallmentEntity;
}
