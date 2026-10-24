import type { Sequelize } from 'sequelize'
import { initHrDesignationEntity } from './hr_designation/hr_designation.entity'
import { initHrStaffEntity } from './hr_staff/hr_staff.entity'
import { initHrStaffQualificationEntity } from './hr_staff_qualification/hr_staff_qualification.entity'
import { initHrStaffExperienceEntity } from './hr_staff_experience/hr_staff_experience.entity'
import { initHrLeaveTypeEntity } from './hr_leave_type/hr_leave_type.entity'
import { initHrLeaveBalanceEntity } from './hr_leave_balance/hr_leave_balance.entity'
import { initHrLeaveRequestEntity } from './hr_leave_request/hr_leave_request.entity'
import { initHrSalaryComponentEntity } from './hr_salary_component/hr_salary_component.entity'
import { initHrSalaryStructureEntity } from './hr_salary_structure/hr_salary_structure.entity'
import { initHrSalaryStructureComponentEntity } from './hr_salary_structure_component/hr_salary_structure_component.entity'
import { initHrStaffSalaryAssignmentEntity } from './hr_staff_salary_assignment/hr_staff_salary_assignment.entity'
import { initHrPayrollRunEntity } from './hr_payroll_run/hr_payroll_run.entity'
import { initHrPayslipEntity } from './hr_payslip/hr_payslip.entity'
import { initHrPayslipLineEntity } from './hr_payslip_line/hr_payslip_line.entity'

export type GeneratedModels = {
  hr_designation: ReturnType<typeof initHrDesignationEntity>;
  hr_staff: ReturnType<typeof initHrStaffEntity>;
  hr_staff_qualification: ReturnType<typeof initHrStaffQualificationEntity>;
  hr_staff_experience: ReturnType<typeof initHrStaffExperienceEntity>;
  hr_leave_type: ReturnType<typeof initHrLeaveTypeEntity>;
  hr_leave_balance: ReturnType<typeof initHrLeaveBalanceEntity>;
  hr_leave_request: ReturnType<typeof initHrLeaveRequestEntity>;
  hr_salary_component: ReturnType<typeof initHrSalaryComponentEntity>;
  hr_salary_structure: ReturnType<typeof initHrSalaryStructureEntity>;
  hr_salary_structure_component: ReturnType<typeof initHrSalaryStructureComponentEntity>;
  hr_staff_salary_assignment: ReturnType<typeof initHrStaffSalaryAssignmentEntity>;
  hr_payroll_run: ReturnType<typeof initHrPayrollRunEntity>;
  hr_payslip: ReturnType<typeof initHrPayslipEntity>;
  hr_payslip_line: ReturnType<typeof initHrPayslipLineEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      hr_designation: initHrDesignationEntity(sequelize),
      hr_staff: initHrStaffEntity(sequelize),
      hr_staff_qualification: initHrStaffQualificationEntity(sequelize),
      hr_staff_experience: initHrStaffExperienceEntity(sequelize),
      hr_leave_type: initHrLeaveTypeEntity(sequelize),
      hr_leave_balance: initHrLeaveBalanceEntity(sequelize),
      hr_leave_request: initHrLeaveRequestEntity(sequelize),
      hr_salary_component: initHrSalaryComponentEntity(sequelize),
      hr_salary_structure: initHrSalaryStructureEntity(sequelize),
      hr_salary_structure_component: initHrSalaryStructureComponentEntity(sequelize),
      hr_staff_salary_assignment: initHrStaffSalaryAssignmentEntity(sequelize),
      hr_payroll_run: initHrPayrollRunEntity(sequelize),
      hr_payslip: initHrPayslipEntity(sequelize),
      hr_payslip_line: initHrPayslipLineEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.hr_staff.belongsTo(models.hr_designation, { as: 'designationCode', foreignKey: 'designationCode', targetKey: 'designationCode', onUpdate: 'CASCADE' })
  models.hr_designation.hasMany(models.hr_staff, { as: 'hrStaff', foreignKey: 'designationCode', sourceKey: 'designationCode', onUpdate: 'CASCADE' })
  models.hr_staff.belongsTo(models.hr_staff, { as: 'reportingToStaff', foreignKey: 'reportingToStaffId', targetKey: 'staffId' })
  models.hr_staff.hasMany(models.hr_staff, { as: 'hrStaff', foreignKey: 'reportingToStaffId', sourceKey: 'staffId' })
  models.hr_staff_qualification.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId', onDelete: 'CASCADE' })
  models.hr_staff.hasMany(models.hr_staff_qualification, { as: 'hrStaffQualification', foreignKey: 'staffId', sourceKey: 'staffId', onDelete: 'CASCADE' })
  models.hr_staff_experience.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId', onDelete: 'CASCADE' })
  models.hr_staff.hasMany(models.hr_staff_experience, { as: 'hrStaffExperience', foreignKey: 'staffId', sourceKey: 'staffId', onDelete: 'CASCADE' })
  models.hr_leave_balance.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' })
  models.hr_staff.hasMany(models.hr_leave_balance, { as: 'hrLeaveBalance', foreignKey: 'staffId', sourceKey: 'staffId' })
  models.hr_leave_balance.belongsTo(models.hr_leave_type, { as: 'leaveTypeCode', foreignKey: 'leaveTypeCode', targetKey: 'leaveTypeCode', onUpdate: 'CASCADE' })
  models.hr_leave_type.hasMany(models.hr_leave_balance, { as: 'hrLeaveBalance', foreignKey: 'leaveTypeCode', sourceKey: 'leaveTypeCode', onUpdate: 'CASCADE' })
  models.hr_leave_request.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' })
  models.hr_staff.hasMany(models.hr_leave_request, { as: 'hrLeaveRequest', foreignKey: 'staffId', sourceKey: 'staffId' })
  models.hr_leave_request.belongsTo(models.hr_leave_type, { as: 'leaveTypeCode', foreignKey: 'leaveTypeCode', targetKey: 'leaveTypeCode', onUpdate: 'CASCADE' })
  models.hr_leave_type.hasMany(models.hr_leave_request, { as: 'hrLeaveRequest', foreignKey: 'leaveTypeCode', sourceKey: 'leaveTypeCode', onUpdate: 'CASCADE' })
  models.hr_leave_request.belongsTo(models.hr_staff, { as: 'substituteStaff', foreignKey: 'substituteStaffId', targetKey: 'staffId' })
  models.hr_staff.hasMany(models.hr_leave_request, { as: 'hrLeaveRequestBySubstituteStaffId', foreignKey: 'substituteStaffId', sourceKey: 'staffId' })
  models.hr_salary_structure_component.belongsTo(models.hr_salary_structure, { as: 'salaryStructure', foreignKey: 'salaryStructureId', targetKey: 'salaryStructureId', onDelete: 'CASCADE' })
  models.hr_salary_structure.hasMany(models.hr_salary_structure_component, { as: 'hrSalaryStructureComponent', foreignKey: 'salaryStructureId', sourceKey: 'salaryStructureId', onDelete: 'CASCADE' })
  models.hr_salary_structure_component.belongsTo(models.hr_salary_component, { as: 'salaryComponentCode', foreignKey: 'salaryComponentCode', targetKey: 'salaryComponentCode', onUpdate: 'CASCADE' })
  models.hr_salary_component.hasMany(models.hr_salary_structure_component, { as: 'hrSalaryStructureComponent', foreignKey: 'salaryComponentCode', sourceKey: 'salaryComponentCode', onUpdate: 'CASCADE' })
  models.hr_staff_salary_assignment.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' })
  models.hr_staff.hasMany(models.hr_staff_salary_assignment, { as: 'hrStaffSalaryAssignment', foreignKey: 'staffId', sourceKey: 'staffId' })
  models.hr_staff_salary_assignment.belongsTo(models.hr_salary_structure, { as: 'salaryStructure', foreignKey: 'salaryStructureId', targetKey: 'salaryStructureId' })
  models.hr_salary_structure.hasMany(models.hr_staff_salary_assignment, { as: 'hrStaffSalaryAssignment', foreignKey: 'salaryStructureId', sourceKey: 'salaryStructureId' })
  models.hr_payslip.belongsTo(models.hr_payroll_run, { as: 'payrollRun', foreignKey: 'payrollRunId', targetKey: 'payrollRunId' })
  models.hr_payroll_run.hasMany(models.hr_payslip, { as: 'hrPayslip', foreignKey: 'payrollRunId', sourceKey: 'payrollRunId' })
  models.hr_payslip.belongsTo(models.hr_staff, { as: 'staff', foreignKey: 'staffId', targetKey: 'staffId' })
  models.hr_staff.hasMany(models.hr_payslip, { as: 'hrPayslip', foreignKey: 'staffId', sourceKey: 'staffId' })
  models.hr_payslip.belongsTo(models.hr_staff_salary_assignment, { as: 'staffSalaryAssignment', foreignKey: 'staffSalaryAssignmentId', targetKey: 'staffSalaryAssignmentId' })
  models.hr_staff_salary_assignment.hasMany(models.hr_payslip, { as: 'hrPayslip', foreignKey: 'staffSalaryAssignmentId', sourceKey: 'staffSalaryAssignmentId' })
  models.hr_payslip_line.belongsTo(models.hr_payslip, { as: 'payslip', foreignKey: 'payslipId', targetKey: 'payslipId', onDelete: 'CASCADE' })
  models.hr_payslip.hasMany(models.hr_payslip_line, { as: 'hrPayslipLine', foreignKey: 'payslipId', sourceKey: 'payslipId', onDelete: 'CASCADE' })
  models.hr_payslip_line.belongsTo(models.hr_salary_component, { as: 'salaryComponentCode', foreignKey: 'salaryComponentCode', targetKey: 'salaryComponentCode', onUpdate: 'CASCADE' })
  models.hr_salary_component.hasMany(models.hr_payslip_line, { as: 'hrPayslipLine', foreignKey: 'salaryComponentCode', sourceKey: 'salaryComponentCode', onUpdate: 'CASCADE' })
}
