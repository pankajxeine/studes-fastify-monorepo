"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrSalaryStructureComponentEntity = void 0;
exports.initHrSalaryStructureComponentEntity = initHrSalaryStructureComponentEntity;
const sequelize_1 = require("sequelize");
class HrSalaryStructureComponentEntity extends sequelize_1.Model {
}
exports.HrSalaryStructureComponentEntity = HrSalaryStructureComponentEntity;
function initHrSalaryStructureComponentEntity(sequelize) {
    HrSalaryStructureComponentEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'hr_salary_structure_component'\r\n    )"),
        },
        salaryStructureComponentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'salary_structure_component_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        salaryStructureId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'salary_structure_id',
            allowNull: false,
            references: { model: 'hr_salary_structure', key: 'salary_structure_id' },
            onDelete: 'CASCADE',
        },
        salaryComponentCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'salary_component_code',
            allowNull: false,
            references: { model: 'hr_salary_component', key: 'salary_component_code' },
            onUpdate: 'CASCADE',
        },
        calculationType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'calculation_type',
            allowNull: false,
        },
        fixedAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'fixed_amount',
            allowNull: true,
        },
        percentage: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'percentage',
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
        tableName: 'hr_salary_structure_component',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['salary_structure_id', 'salary_component_code'] }
        ]
    });
    return HrSalaryStructureComponentEntity;
}
