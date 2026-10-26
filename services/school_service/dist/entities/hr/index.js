"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const hr_designation_entity_1 = require("./hr_designation/hr_designation.entity");
const hr_staff_entity_1 = require("./hr_staff/hr_staff.entity");
const hr_staff_qualification_entity_1 = require("./hr_staff_qualification/hr_staff_qualification.entity");
const hr_staff_experience_entity_1 = require("./hr_staff_experience/hr_staff_experience.entity");
const hr_leave_type_entity_1 = require("./hr_leave_type/hr_leave_type.entity");
const hr_leave_balance_entity_1 = require("./hr_leave_balance/hr_leave_balance.entity");
const hr_leave_request_entity_1 = require("./hr_leave_request/hr_leave_request.entity");
const hr_salary_component_entity_1 = require("./hr_salary_component/hr_salary_component.entity");
const hr_salary_structure_entity_1 = require("./hr_salary_structure/hr_salary_structure.entity");
const hr_salary_structure_component_entity_1 = require("./hr_salary_structure_component/hr_salary_structure_component.entity");
const hr_staff_salary_assignment_entity_1 = require("./hr_staff_salary_assignment/hr_staff_salary_assignment.entity");
const hr_payroll_run_entity_1 = require("./hr_payroll_run/hr_payroll_run.entity");
const hr_payslip_entity_1 = require("./hr_payslip/hr_payslip.entity");
const hr_payslip_line_entity_1 = require("./hr_payslip_line/hr_payslip_line.entity");
function createGeneratedModels(sequelize) {
    const models = {
        hr_designation: (0, hr_designation_entity_1.initHrDesignationEntity)(sequelize),
        hr_staff: (0, hr_staff_entity_1.initHrStaffEntity)(sequelize),
        hr_staff_qualification: (0, hr_staff_qualification_entity_1.initHrStaffQualificationEntity)(sequelize),
        hr_staff_experience: (0, hr_staff_experience_entity_1.initHrStaffExperienceEntity)(sequelize),
        hr_leave_type: (0, hr_leave_type_entity_1.initHrLeaveTypeEntity)(sequelize),
        hr_leave_balance: (0, hr_leave_balance_entity_1.initHrLeaveBalanceEntity)(sequelize),
        hr_leave_request: (0, hr_leave_request_entity_1.initHrLeaveRequestEntity)(sequelize),
        hr_salary_component: (0, hr_salary_component_entity_1.initHrSalaryComponentEntity)(sequelize),
        hr_salary_structure: (0, hr_salary_structure_entity_1.initHrSalaryStructureEntity)(sequelize),
        hr_salary_structure_component: (0, hr_salary_structure_component_entity_1.initHrSalaryStructureComponentEntity)(sequelize),
        hr_staff_salary_assignment: (0, hr_staff_salary_assignment_entity_1.initHrStaffSalaryAssignmentEntity)(sequelize),
        hr_payroll_run: (0, hr_payroll_run_entity_1.initHrPayrollRunEntity)(sequelize),
        hr_payslip: (0, hr_payslip_entity_1.initHrPayslipEntity)(sequelize),
        hr_payslip_line: (0, hr_payslip_line_entity_1.initHrPayslipLineEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.hr_staff.belongsTo(models.hr_designation, { as: 'designationCode', foreignKey: 'designationCode', targetKey: 'designationCode', onUpdate: 'CASCADE' });
    models.hr_designation.hasMany(models.hr_staff, { as: 'hrStaff', foreignKey: 'designationCode', sourceKey: 'designationCode', onUpdate: 'CASCADE' });
    models.hr_staff.belongsTo(models.hr_staff, { as: 'reportingToStaff', foreignKey: 'reportingToStaffId', targetKey: 'staffId' });
    models.hr_staff.hasMany(models.hr_staff, { as: 'hrStaff', foreignKey: 'reportingToStaffId', sourceKey: 'staffId' });
    models.hr_staff_qualification.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId', onDelete: 'CASCADE' });
    models.hr_staff.hasMany(models.hr_staff_qualification, { as: 'hrStaffQualification', foreignKey: 'staffId', sourceKey: 'staffId', onDelete: 'CASCADE' });
    models.hr_staff_experience.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId', onDelete: 'CASCADE' });
    models.hr_staff.hasMany(models.hr_staff_experience, { as: 'hrStaffExperience', foreignKey: 'staffId', sourceKey: 'staffId', onDelete: 'CASCADE' });
    models.hr_leave_balance.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' });
    models.hr_staff.hasMany(models.hr_leave_balance, { as: 'hrLeaveBalance', foreignKey: 'staffId', sourceKey: 'staffId' });
    models.hr_leave_balance.belongsTo(models.hr_leave_type, { as: 'leaveTypeCode', foreignKey: 'leaveTypeCode', targetKey: 'leaveTypeCode', onUpdate: 'CASCADE' });
    models.hr_leave_type.hasMany(models.hr_leave_balance, { as: 'hrLeaveBalance', foreignKey: 'leaveTypeCode', sourceKey: 'leaveTypeCode', onUpdate: 'CASCADE' });
    models.hr_leave_request.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' });
    models.hr_staff.hasMany(models.hr_leave_request, { as: 'hrLeaveRequest', foreignKey: 'staffId', sourceKey: 'staffId' });
    models.hr_leave_request.belongsTo(models.hr_leave_type, { as: 'leaveTypeCode', foreignKey: 'leaveTypeCode', targetKey: 'leaveTypeCode', onUpdate: 'CASCADE' });
    models.hr_leave_type.hasMany(models.hr_leave_request, { as: 'hrLeaveRequest', foreignKey: 'leaveTypeCode', sourceKey: 'leaveTypeCode', onUpdate: 'CASCADE' });
    models.hr_leave_request.belongsTo(models.hr_staff, { as: 'substituteStaff', foreignKey: 'substituteStaffId', targetKey: 'staffId' });
    models.hr_staff.hasMany(models.hr_leave_request, { as: 'hrLeaveRequestBySubstituteStaffId', foreignKey: 'substituteStaffId', sourceKey: 'staffId' });
    models.hr_salary_structure_component.belongsTo(models.hr_salary_structure, { as: 'salaryStructure', foreignKey: 'salaryStructureId', targetKey: 'salaryStructureId', onDelete: 'CASCADE' });
    models.hr_salary_structure.hasMany(models.hr_salary_structure_component, { as: 'hrSalaryStructureComponent', foreignKey: 'salaryStructureId', sourceKey: 'salaryStructureId', onDelete: 'CASCADE' });
    models.hr_salary_structure_component.belongsTo(models.hr_salary_component, { as: 'salaryComponentCode', foreignKey: 'salaryComponentCode', targetKey: 'salaryComponentCode', onUpdate: 'CASCADE' });
    models.hr_salary_component.hasMany(models.hr_salary_structure_component, { as: 'hrSalaryStructureComponent', foreignKey: 'salaryComponentCode', sourceKey: 'salaryComponentCode', onUpdate: 'CASCADE' });
    models.hr_staff_salary_assignment.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' });
    models.hr_staff.hasMany(models.hr_staff_salary_assignment, { as: 'hrStaffSalaryAssignment', foreignKey: 'staffId', sourceKey: 'staffId' });
    models.hr_staff_salary_assignment.belongsTo(models.hr_salary_structure, { as: 'salaryStructure', foreignKey: 'salaryStructureId', targetKey: 'salaryStructureId' });
    models.hr_salary_structure.hasMany(models.hr_staff_salary_assignment, { as: 'hrStaffSalaryAssignment', foreignKey: 'salaryStructureId', sourceKey: 'salaryStructureId' });
    models.hr_payslip.belongsTo(models.hr_payroll_run, { as: 'payrollRun', foreignKey: 'payrollRunId', targetKey: 'payrollRunId' });
    models.hr_payroll_run.hasMany(models.hr_payslip, { as: 'hrPayslip', foreignKey: 'payrollRunId', sourceKey: 'payrollRunId' });
    models.hr_payslip.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' });
    models.hr_staff.hasMany(models.hr_payslip, { as: 'hrPayslip', foreignKey: 'staffId', sourceKey: 'staffId' });
    models.hr_payslip.belongsTo(models.hr_staff_salary_assignment, { as: 'staffSalaryAssignment', foreignKey: 'staffSalaryAssignmentId', targetKey: 'staffSalaryAssignmentId' });
    models.hr_staff_salary_assignment.hasMany(models.hr_payslip, { as: 'hrPayslip', foreignKey: 'staffSalaryAssignmentId', sourceKey: 'staffSalaryAssignmentId' });
    models.hr_payslip_line.belongsTo(models.hr_payslip, { as: 'payslip', foreignKey: 'payslipId', targetKey: 'payslipId', onDelete: 'CASCADE' });
    models.hr_payslip.hasMany(models.hr_payslip_line, { as: 'hrPayslipLine', foreignKey: 'payslipId', sourceKey: 'payslipId', onDelete: 'CASCADE' });
    models.hr_payslip_line.belongsTo(models.hr_salary_component, { as: 'salaryComponentCode', foreignKey: 'salaryComponentCode', targetKey: 'salaryComponentCode', onUpdate: 'CASCADE' });
    models.hr_salary_component.hasMany(models.hr_payslip_line, { as: 'hrPayslipLine', foreignKey: 'salaryComponentCode', sourceKey: 'salaryComponentCode', onUpdate: 'CASCADE' });
}
