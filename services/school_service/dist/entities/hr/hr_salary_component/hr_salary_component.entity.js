"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrSalaryComponentEntity = void 0;
exports.initHrSalaryComponentEntity = initHrSalaryComponentEntity;
const sequelize_1 = require("sequelize");
class HrSalaryComponentEntity extends sequelize_1.Model {
}
exports.HrSalaryComponentEntity = HrSalaryComponentEntity;
function initHrSalaryComponentEntity(sequelize) {
    HrSalaryComponentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_salary_component')"),
        },
        salaryComponentCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'salary_component_code',
            allowNull: true,
            unique: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        kind: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'kind',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        isTaxable: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_taxable',
            allowNull: false,
            defaultValue: true,
        },
        isStatutory: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_statutory',
            allowNull: false,
            defaultValue: false,
        },
        payslipLabel: {
            type: sequelize_1.DataTypes.STRING(40),
            field: 'payslip_label',
            allowNull: true,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        tableName: 'hr_salary_component',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return HrSalaryComponentEntity;
}
