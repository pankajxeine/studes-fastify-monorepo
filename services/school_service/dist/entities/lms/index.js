"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const lms_lesson_plan_entity_1 = require("./lms_lesson_plan/lms_lesson_plan.entity");
const lms_study_material_entity_1 = require("./lms_study_material/lms_study_material.entity");
const lms_assignment_entity_1 = require("./lms_assignment/lms_assignment.entity");
const lms_assignment_submission_entity_1 = require("./lms_assignment_submission/lms_assignment_submission.entity");
function createGeneratedModels(sequelize) {
    const models = {
        lms_lesson_plan: (0, lms_lesson_plan_entity_1.initLmsLessonPlanEntity)(sequelize),
        lms_study_material: (0, lms_study_material_entity_1.initLmsStudyMaterialEntity)(sequelize),
        lms_assignment: (0, lms_assignment_entity_1.initLmsAssignmentEntity)(sequelize),
        lms_assignment_submission: (0, lms_assignment_submission_entity_1.initLmsAssignmentSubmissionEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.lms_study_material.belongsTo(models.lms_lesson_plan, { as: 'lessonPlan', foreignKey: 'lessonPlanId', targetKey: 'lessonPlanId' });
    models.lms_lesson_plan.hasMany(models.lms_study_material, { as: 'lmsStudyMaterial', foreignKey: 'lessonPlanId', sourceKey: 'lessonPlanId' });
    models.lms_assignment_submission.belongsTo(models.lms_assignment, { as: 'assignment', foreignKey: 'assignmentId', targetKey: 'assignmentId' });
    models.lms_assignment.hasMany(models.lms_assignment_submission, { as: 'lmsAssignmentSubmission', foreignKey: 'assignmentId', sourceKey: 'assignmentId' });
}
