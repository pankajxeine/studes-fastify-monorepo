"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const fin_fee_head_entity_1 = require("./fin_fee_head/fin_fee_head.entity");
const fin_concession_type_entity_1 = require("./fin_concession_type/fin_concession_type.entity");
const fin_expense_category_entity_1 = require("./fin_expense_category/fin_expense_category.entity");
const fin_fee_structure_entity_1 = require("./fin_fee_structure/fin_fee_structure.entity");
const fin_fee_structure_item_entity_1 = require("./fin_fee_structure_item/fin_fee_structure_item.entity");
const fin_fee_installment_entity_1 = require("./fin_fee_installment/fin_fee_installment.entity");
const fin_scholarship_entity_1 = require("./fin_scholarship/fin_scholarship.entity");
const fin_student_concession_entity_1 = require("./fin_student_concession/fin_student_concession.entity");
const fin_invoice_entity_1 = require("./fin_invoice/fin_invoice.entity");
const fin_invoice_line_entity_1 = require("./fin_invoice_line/fin_invoice_line.entity");
const fin_payment_entity_1 = require("./fin_payment/fin_payment.entity");
const fin_payment_allocation_entity_1 = require("./fin_payment_allocation/fin_payment_allocation.entity");
const fin_refund_entity_1 = require("./fin_refund/fin_refund.entity");
const fin_late_fee_rule_entity_1 = require("./fin_late_fee_rule/fin_late_fee_rule.entity");
const fin_expense_entity_1 = require("./fin_expense/fin_expense.entity");
function createGeneratedModels(sequelize) {
    const models = {
        fin_fee_head: (0, fin_fee_head_entity_1.initFinFeeHeadEntity)(sequelize),
        fin_concession_type: (0, fin_concession_type_entity_1.initFinConcessionTypeEntity)(sequelize),
        fin_expense_category: (0, fin_expense_category_entity_1.initFinExpenseCategoryEntity)(sequelize),
        fin_fee_structure: (0, fin_fee_structure_entity_1.initFinFeeStructureEntity)(sequelize),
        fin_fee_structure_item: (0, fin_fee_structure_item_entity_1.initFinFeeStructureItemEntity)(sequelize),
        fin_fee_installment: (0, fin_fee_installment_entity_1.initFinFeeInstallmentEntity)(sequelize),
        fin_scholarship: (0, fin_scholarship_entity_1.initFinScholarshipEntity)(sequelize),
        fin_student_concession: (0, fin_student_concession_entity_1.initFinStudentConcessionEntity)(sequelize),
        fin_invoice: (0, fin_invoice_entity_1.initFinInvoiceEntity)(sequelize),
        fin_invoice_line: (0, fin_invoice_line_entity_1.initFinInvoiceLineEntity)(sequelize),
        fin_payment: (0, fin_payment_entity_1.initFinPaymentEntity)(sequelize),
        fin_payment_allocation: (0, fin_payment_allocation_entity_1.initFinPaymentAllocationEntity)(sequelize),
        fin_refund: (0, fin_refund_entity_1.initFinRefundEntity)(sequelize),
        fin_late_fee_rule: (0, fin_late_fee_rule_entity_1.initFinLateFeeRuleEntity)(sequelize),
        fin_expense: (0, fin_expense_entity_1.initFinExpenseEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.fin_fee_structure_item.belongsTo(models.fin_fee_structure, { as: 'feeStructure', foreignKey: 'feeStructureId', targetKey: 'feeStructureId', onDelete: 'CASCADE' });
    models.fin_fee_structure.hasMany(models.fin_fee_structure_item, { as: 'finFeeStructureItem', foreignKey: 'feeStructureId', sourceKey: 'feeStructureId', onDelete: 'CASCADE' });
    models.fin_fee_structure_item.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_fee_head.hasMany(models.fin_fee_structure_item, { as: 'finFeeStructureItem', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_fee_installment.belongsTo(models.fin_fee_structure, { as: 'feeStructure', foreignKey: 'feeStructureId', targetKey: 'feeStructureId', onDelete: 'CASCADE' });
    models.fin_fee_structure.hasMany(models.fin_fee_installment, { as: 'finFeeInstallment', foreignKey: 'feeStructureId', sourceKey: 'feeStructureId', onDelete: 'CASCADE' });
    models.fin_student_concession.belongsTo(models.fin_concession_type, { as: 'concessionTypeCode', foreignKey: 'concessionTypeCode', targetKey: 'concessionTypeCode', onUpdate: 'CASCADE' });
    models.fin_concession_type.hasMany(models.fin_student_concession, { as: 'finStudentConcession', foreignKey: 'concessionTypeCode', sourceKey: 'concessionTypeCode', onUpdate: 'CASCADE' });
    models.fin_student_concession.belongsTo(models.fin_scholarship, { as: 'scholarship', foreignKey: 'scholarshipId', targetKey: 'scholarshipId' });
    models.fin_scholarship.hasMany(models.fin_student_concession, { as: 'finStudentConcession', foreignKey: 'scholarshipId', sourceKey: 'scholarshipId' });
    models.fin_student_concession.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_fee_head.hasMany(models.fin_student_concession, { as: 'finStudentConcession', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_invoice.belongsTo(models.fin_fee_installment, { as: 'feeInstallment', foreignKey: 'feeInstallmentId', targetKey: 'feeInstallmentId' });
    models.fin_fee_installment.hasMany(models.fin_invoice, { as: 'finInvoice', foreignKey: 'feeInstallmentId', sourceKey: 'feeInstallmentId' });
    models.fin_invoice_line.belongsTo(models.fin_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId', onDelete: 'CASCADE' });
    models.fin_invoice.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'invoiceId', sourceKey: 'invoiceId', onDelete: 'CASCADE' });
    models.fin_invoice_line.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_fee_head.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_invoice_line.belongsTo(models.fin_student_concession, { as: 'studentConcession', foreignKey: 'studentConcessionId', targetKey: 'studentConcessionId' });
    models.fin_student_concession.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'studentConcessionId', sourceKey: 'studentConcessionId' });
    models.fin_invoice_line.belongsTo(models.fin_fee_structure_item, { as: 'feeStructureItem', foreignKey: 'feeStructureItemId', targetKey: 'feeStructureItemId' });
    models.fin_fee_structure_item.hasMany(models.fin_invoice_line, { as: 'finInvoiceLine', foreignKey: 'feeStructureItemId', sourceKey: 'feeStructureItemId' });
    models.fin_payment_allocation.belongsTo(models.fin_payment, { as: 'payment', foreignKey: 'paymentId', targetKey: 'paymentId' });
    models.fin_payment.hasMany(models.fin_payment_allocation, { as: 'finPaymentAllocation', foreignKey: 'paymentId', sourceKey: 'paymentId' });
    models.fin_payment_allocation.belongsTo(models.fin_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId' });
    models.fin_invoice.hasMany(models.fin_payment_allocation, { as: 'finPaymentAllocation', foreignKey: 'invoiceId', sourceKey: 'invoiceId' });
    models.fin_refund.belongsTo(models.fin_payment, { as: 'payment', foreignKey: 'paymentId', targetKey: 'paymentId' });
    models.fin_payment.hasMany(models.fin_refund, { as: 'finRefund', foreignKey: 'paymentId', sourceKey: 'paymentId' });
    models.fin_refund.belongsTo(models.fin_invoice, { as: 'invoice', foreignKey: 'invoiceId', targetKey: 'invoiceId' });
    models.fin_invoice.hasMany(models.fin_refund, { as: 'finRefund', foreignKey: 'invoiceId', sourceKey: 'invoiceId' });
    models.fin_late_fee_rule.belongsTo(models.fin_fee_head, { as: 'feeHeadCode', foreignKey: 'feeHeadCode', targetKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_fee_head.hasMany(models.fin_late_fee_rule, { as: 'finLateFeeRule', foreignKey: 'feeHeadCode', sourceKey: 'feeHeadCode', onUpdate: 'CASCADE' });
    models.fin_expense.belongsTo(models.fin_expense_category, { as: 'expenseCategoryCode', foreignKey: 'expenseCategoryCode', targetKey: 'expenseCategoryCode', onUpdate: 'CASCADE' });
    models.fin_expense_category.hasMany(models.fin_expense, { as: 'finExpense', foreignKey: 'expenseCategoryCode', sourceKey: 'expenseCategoryCode', onUpdate: 'CASCADE' });
}
