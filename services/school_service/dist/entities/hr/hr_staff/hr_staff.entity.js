"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HrStaffEntity = void 0;
exports.initHrStaffEntity = initHrStaffEntity;
const sequelize_1 = require("sequelize");
class HrStaffEntity extends sequelize_1.Model {
}
exports.HrStaffEntity = HrStaffEntity;
function initHrStaffEntity(sequelize) {
    HrStaffEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('hr_staff')"),
        },
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        departmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'department_id',
            allowNull: true,
            references: { model: 'org_department', key: 'department_id' },
        },
        designationCode: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'designation_code',
            allowNull: false,
            references: { model: 'hr_designation', key: 'designation_code' },
            onUpdate: 'CASCADE',
        },
        employeeNo: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'employee_no',
            allowNull: false,
        },
        staffCategory: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_category',
            allowNull: false,
        },
        employmentType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'employment_type',
            allowNull: false,
            defaultValue: "permanent",
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "active",
        },
        joinedOn: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'joined_on',
            allowNull: false,
        },
        probationEndOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'probation_end_on',
            allowNull: true,
        },
        confirmedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'confirmed_on',
            allowNull: true,
        },
        exitOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'exit_on',
            allowNull: true,
        },
        exitReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exit_reason',
            allowNull: true,
        },
        reportingToStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reporting_to_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        workEmail: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'work_email',
            allowNull: true,
        },
        workPhone: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'work_phone',
            allowNull: true,
        },
        maxWeeklyPeriods: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'max_weekly_periods',
            allowNull: true,
        },
        noticePeriodDays: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'notice_period_days',
            allowNull: false,
            defaultValue: 30,
        },
        taxId: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'tax_id',
            allowNull: true,
        },
        bankAccountName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'bank_account_name',
            allowNull: true,
        },
        bankAccountNo: {
            type: sequelize_1.DataTypes.STRING(34),
            field: 'bank_account_no',
            allowNull: true,
        },
        bankRoutingCode: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'bank_routing_code',
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'hr_staff',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['employee_no'] },
            { unique: true, fields: ['person_id'] },
            { unique: true, fields: ['work_email'] }
        ]
    });
    return HrStaffEntity;
}
