"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrPayslipLineEntity = void 0;
exports.initHrPayslipLineEntity = initHrPayslipLineEntity;
const sequelize_1 = require("sequelize");
class HrPayslipLineEntity extends sequelize_1.Model {
}
exports.HrPayslipLineEntity = HrPayslipLineEntity;
function initHrPayslipLineEntity(sequelize) {
    HrPayslipLineEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_payslip_line')"),
        },
        payslipLineId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payslip_line_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        payslipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'payslip_id',
            allowNull: false,
            references: { model: 'hr_payslip', key: 'payslip_id' },
            onDelete: 'CASCADE',
        },
        salaryComponentCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'salary_component_code',
            allowNull: false,
            references: { model: 'hr_salary_component', key: 'salary_component_code' },
            onUpdate: 'CASCADE',
        },
        kind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'kind',
            allowNull: false,
        },
        amount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'amount',
            allowNull: false,
        },
        calculationNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'calculation_note',
            allowNull: true,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
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
        tableName: 'hr_payslip_line',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['payslip_id', 'salary_component_code'] }
        ]
    });
    return HrPayslipLineEntity;
}
