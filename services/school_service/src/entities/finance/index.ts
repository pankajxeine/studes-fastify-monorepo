import type { Sequelize } from 'sequelize'
import { initFinFeeHeadEntity } from './fin_fee_head/fin_fee_head.entity'
import { initFinConcessionTypeEntity } from './fin_concession_type/fin_concession_type.entity'
import { initFinExpenseCategoryEntity } from './fin_expense_category/fin_expense_category.entity'
import { initFinFeeStructureEntity } from './fin_fee_structure/fin_fee_structure.entity'
import { initFinFeeStructureItemEntity } from './fin_fee_structure_item/fin_fee_structure_item.entity'
import { initFinFeeInstallmentEntity } from './fin_fee_installment/fin_fee_installment.entity'
import { initFinScholarshipEntity } from './fin_scholarship/fin_scholarship.entity'
import { initFinStudentConcessionEntity } from './fin_student_concession/fin_student_concession.entity'
import { initFinInvoiceEntity } from './fin_invoice/fin_invoice.entity'
import { initFinInvoiceLineEntity } from './fin_invoice_line/fin_invoice_line.entity'
import { initFinPaymentEntity } from './fin_payment/fin_payment.entity'
import { initFinPaymentAllocationEntity } from './fin_payment_allocation/fin_payment_allocation.entity'
import { initFinRefundEntity } from './fin_refund/fin_refund.entity'
import { initFinLateFeeRuleEntity } from './fin_late_fee_rule/fin_late_fee_rule.entity'
import { initFinExpenseEntity } from './fin_expense/fin_expense.entity'

export type GeneratedModels = {
  fin_fee_head: ReturnType<typeof initFinFeeHeadEntity>;
  fin_concession_type: ReturnType<typeof initFinConcessionTypeEntity>;
  fin_expense_category: ReturnType<typeof initFinExpenseCategoryEntity>;
  fin_fee_structure: ReturnType<typeof initFinFeeStructureEntity>;
  fin_fee_structure_item: ReturnType<typeof initFinFeeStructureItemEntity>;
  fin_fee_installment: ReturnType<typeof initFinFeeInstallmentEntity>;
  fin_scholarship: ReturnType<typeof initFinScholarshipEntity>;
  fin_student_concession: ReturnType<typeof initFinStudentConcessionEntity>;
  fin_invoice: ReturnType<typeof initFinInvoiceEntity>;
  fin_invoice_line: ReturnType<typeof initFinInvoiceLineEntity>;
  fin_payment: ReturnType<typeof initFinPaymentEntity>;
  fin_payment_allocation: ReturnType<typeof initFinPaymentAllocationEntity>;
  fin_refund: ReturnType<typeof initFinRefundEntity>;
  fin_late_fee_rule: ReturnType<typeof initFinLateFeeRuleEntity>;
  fin_expense: ReturnType<typeof initFinExpenseEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      fin_fee_head: initFinFeeHeadEntity(sequelize),
      fin_concession_type: initFinConcessionTypeEntity(sequelize),
      fin_expense_category: initFinExpenseCategoryEntity(sequelize),
      fin_fee_structure: initFinFeeStructureEntity(sequelize),
      fin_fee_structure_item: initFinFeeStructureItemEntity(sequelize),
      fin_fee_installment: initFinFeeInstallmentEntity(sequelize),
      fin_scholarship: initFinScholarshipEntity(sequelize),
      fin_student_concession: initFinStudentConcessionEntity(sequelize),
      fin_invoice: initFinInvoiceEntity(sequelize),
      fin_invoice_line: initFinInvoiceLineEntity(sequelize),
      fin_payment: initFinPaymentEntity(sequelize),
      fin_payment_allocation: initFinPaymentAllocationEntity(sequelize),
      fin_refund: initFinRefundEntity(sequelize),
      fin_late_fee_rule: initFinLateFeeRuleEntity(sequelize),
      fin_expense: initFinExpenseEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.fin_fee_structure_item.belongsTo(models.fin_fee_structure, { as: 'feeStructure', foreignKey: 'feeStructureId', targetKey: 'feeStructureId', onDelete: 'CASCADE' })
  models.fin_fee_structure.hasMany(models.fin_fee_structure_item, { as: 'finFeeStructureItem', foreignKey: 'feeStructureId', sourceKey: 'feeStructureId', onDelete: 'CASCADE' })
  models.fin_fee_structure_item.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_fee_head.hasMany(models.fin_fee_structure_item, { as: 'finFeeStructureItem', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_fee_installment.belongsTo(models.fin_fee_structure, { as: 'feeStructure', foreignKey: 'feeStructureId', targetKey: 'feeStructureId', onDelete: 'CASCADE' })
  models.fin_fee_structure.hasMany(models.fin_fee_installment, { as: 'finFeeInstallment', foreignKey: 'feeStructureId', sourceKey: 'feeStructureId', onDelete: 'CASCADE' })
  models.fin_student_concession.belongsTo(models.fin_concession_type, { as: 'concessionTypeCode', foreignKey: 'concessionTypeCode', targetKey: 'concessionTypeCode', onUpdate: 'CASCADE' })
  models.fin_concession_type.hasMany(models.fin_student_concession, { as: 'finStudentConcession', foreignKey: 'concessionTypeCode', sourceKey: 'concessionTypeCode', onUpdate: 'CASCADE' })
  models.fin_student_concession.belongsTo(models.fin_scholarship, { as: 'scholarship', foreignKey: 'scholarshipId', targetKey: 'scholarshipId' })
  models.fin_scholarship.hasMany(models.fin_student_concession, { as: 'finStudentConcession', foreignKey: 'scholarshipId', sourceKey: 'scholarshipId' })
  models.fin_student_concession.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_fee_head.hasMany(models.fin_student_concession, { as: 'finStudentConcession', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_invoice.belongsTo(models.fin_fee_installment, { as: 'feeInstallment', foreignKey: 'feeInstallmentId', targetKey: 'feeInstallmentId' })
  models.fin_fee_installment.hasMany(models.fin_invoice, { as: 'finInvoice', foreignKey: 'feeInstallmentId', sourceKey: 'feeInstallmentId' })
  models.fin_invoice_line.belongsTo(models.fin_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId', onDelete: 'CASCADE' })
  models.fin_invoice.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'invoiceId', sourceKey: 'invoiceId', onDelete: 'CASCADE' })
  models.fin_invoice_line.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_fee_head.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_invoice_line.belongsTo(models.fin_student_concession, { as: 'studentConcession', foreignKey: 'studentConcessionId', targetKey: 'studentConcessionId' })
  models.fin_student_concession.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'studentConcessionId', sourceKey: 'studentConcessionId' })
  models.fin_invoice_line.belongsTo(models.fin_fee_structure_item, { as: 'feeStructureItem', foreignKey: 'feeStructureItemId', targetKey: 'feeStructureItemId' })
  models.fin_fee_structure_item.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'feeStructureItemId', sourceKey: 'feeStructureItemId' })
  models.fin_payment_allocation.belongsTo(models.fin_payment, { as: 'payment', foreignKey: 'paymentId', targetKey: 'paymentId' })
  models.fin_payment.hasMany(models.fin_payment_allocation, { as: 'finPaymentAllocation', foreignKey: 'paymentId', sourceKey: 'paymentId' })
  models.fin_payment_allocation.belongsTo(models.fin_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId' })
  models.fin_invoice.hasMany(models.fin_payment_allocation, { as: 'finPaymentAllocation', foreignKey: 'invoiceId', sourceKey: 'invoiceId' })
  models.fin_refund.belongsTo(models.fin_payment, { as: 'payment', foreignKey: 'paymentId', targetKey: 'paymentId' })
  models.fin_payment.hasMany(models.fin_refund, { as: 'finRefund', foreignKey: 'paymentId', sourceKey: 'paymentId' })
  models.fin_refund.belongsTo(models.fin_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId' })
  models.fin_invoice.hasMany(models.fin_refund, { as: 'finRefund', foreignKey: 'invoiceId', sourceKey: 'invoiceId' })
  models.fin_late_fee_rule.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_fee_head.hasMany(models.fin_late_fee_rule, { as: 'finLateFeeRule', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' })
  models.fin_expense.belongsTo(models.fin_expense_category, { as: 'expenseCategoryCode', foreignKey: 'expenseCategoryCode', targetKey: 'expenseCategoryCode', onUpdate: 'CASCADE' })
  models.fin_expense_category.hasMany(models.fin_expense, { as: 'finExpense', foreignKey: 'expenseCategoryCode', sourceKey: 'expenseCategoryCode', onUpdate: 'CASCADE' })
}
