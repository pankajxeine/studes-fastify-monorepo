"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const exam_assessment_type_entity_1 = require("./exam_assessment_type/exam_assessment_type.entity");
const exam_assessment_weight_entity_1 = require("./exam_assessment_weight/exam_assessment_weight.entity");
const exam_exam_entity_1 = require("./exam_exam/exam_exam.entity");
const exam_exam_schedule_entity_1 = require("./exam_exam_schedule/exam_exam_schedule.entity");
const exam_student_mark_entity_1 = require("./exam_student_mark/exam_student_mark.entity");
const exam_course_result_entity_1 = require("./exam_course_result/exam_course_result.entity");
const exam_report_card_entity_1 = require("./exam_report_card/exam_report_card.entity");
const exam_report_card_remark_entity_1 = require("./exam_report_card_remark/exam_report_card_remark.entity");
function createGeneratedModels(sequelize) {
    const models = {
        exam_assessment_type: (0, exam_assessment_type_entity_1.initExamAssessmentTypeEntity)(sequelize),
        exam_assessment_weight: (0, exam_assessment_weight_entity_1.initExamAssessmentWeightEntity)(sequelize),
        exam_exam: (0, exam_exam_entity_1.initExamExamEntity)(sequelize),
        exam_exam_schedule: (0, exam_exam_schedule_entity_1.initExamExamScheduleEntity)(sequelize),
        exam_student_mark: (0, exam_student_mark_entity_1.initExamStudentMarkEntity)(sequelize),
        exam_course_result: (0, exam_course_result_entity_1.initExamCourseResultEntity)(sequelize),
        exam_report_card: (0, exam_report_card_entity_1.initExamReportCardEntity)(sequelize),
        exam_report_card_remark: (0, exam_report_card_remark_entity_1.initExamReportCardRemarkEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.exam_assessment_weight.belongsTo(models.exam_assessment_type, { as: 'assessmentTypeCode', foreignKey: 'assessmentTypeCode', targetKey: 'assessmentTypeCode', onUpdate: 'CASCADE' });
    models.exam_assessment_type.hasMany(models.exam_assessment_weight, { as: 'examAssessmentWeight', foreignKey: 'assessmentTypeCode', sourceKey: 'assessmentTypeCode', onUpdate: 'CASCADE' });
    models.exam_exam.belongsTo(models.exam_assessment_type, { as: 'assessmentTypeCode', foreignKey: 'assessmentTypeCode', targetKey: 'assessmentTypeCode', onUpdate: 'CASCADE' });
    models.exam_assessment_type.hasMany(models.exam_exam, { as: 'examExam', foreignKey: 'assessmentTypeCode', sourceKey: 'assessmentTypeCode', onUpdate: 'CASCADE' });
    models.exam_exam_schedule.belongsTo(models.exam_exam, { as: 'exam', foreignKey: 'examId', targetKey: 'examId', onDelete: 'CASCADE' });
    models.exam_exam.hasMany(models.exam_exam_schedule, { as: 'examExamSchedule', foreignKey: 'examId', sourceKey: 'examId', onDelete: 'CASCADE' });
    models.exam_student_mark.belongsTo(models.exam_exam_schedule, { as: 'examSchedule', foreignKey: 'examScheduleId', targetKey: 'examScheduleId' });
    models.exam_exam_schedule.hasMany(models.exam_student_mark, { as: 'examStudentMark', foreignKey: 'examScheduleId', sourceKey: 'examScheduleId' });
    models.exam_report_card.belongsTo(models.exam_exam, { as: 'exam', foreignKey: 'examId', targetKey: 'examId' });
    models.exam_exam.hasMany(models.exam_report_card, { as: 'examReportCard', foreignKey: 'examId', sourceKey: 'examId' });
    models.exam_report_card_remark.belongsTo(models.exam_report_card, { as: 'reportCard', foreignKey: 'reportCardId', targetKey: 'reportCardId', onDelete: 'CASCADE' });
    models.exam_report_card.hasMany(models.exam_report_card_remark, { as: 'examReportCardRemark', foreignKey: 'reportCardId', sourceKey: 'reportCardId', onDelete: 'CASCADE' });
}
