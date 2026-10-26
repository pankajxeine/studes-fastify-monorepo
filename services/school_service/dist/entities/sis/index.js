"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const sis_house_entity_1 = require("./sis_house/sis_house.entity");
const sis_student_entity_1 = require("./sis_student/sis_student.entity");
const sis_student_guardian_entity_1 = require("./sis_student_guardian/sis_student_guardian.entity");
const sis_student_enrollment_entity_1 = require("./sis_student_enrollment/sis_student_enrollment.entity");
const sis_course_registration_entity_1 = require("./sis_course_registration/sis_course_registration.entity");
const sis_student_status_history_entity_1 = require("./sis_student_status_history/sis_student_status_history.entity");
const sis_student_transfer_entity_1 = require("./sis_student_transfer/sis_student_transfer.entity");
const sis_previous_education_entity_1 = require("./sis_previous_education/sis_previous_education.entity");
function createGeneratedModels(sequelize) {
    const models = {
        sis_house: (0, sis_house_entity_1.initSisHouseEntity)(sequelize),
        sis_student: (0, sis_student_entity_1.initSisStudentEntity)(sequelize),
        sis_student_guardian: (0, sis_student_guardian_entity_1.initSisStudentGuardianEntity)(sequelize),
        sis_student_enrollment: (0, sis_student_enrollment_entity_1.initSisStudentEnrollmentEntity)(sequelize),
        sis_course_registration: (0, sis_course_registration_entity_1.initSisCourseRegistrationEntity)(sequelize),
        sis_student_status_history: (0, sis_student_status_history_entity_1.initSisStudentStatusHistoryEntity)(sequelize),
        sis_student_transfer: (0, sis_student_transfer_entity_1.initSisStudentTransferEntity)(sequelize),
        sis_previous_education: (0, sis_previous_education_entity_1.initSisPreviousEducationEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.sis_student.belongsTo(models.sis_house, { as: 'house', foreignKey: 'houseId', targetKey: 'houseId' });
    models.sis_house.hasMany(models.sis_student, { as: 'sisStudent', foreignKey: 'houseId', sourceKey: 'houseId' });
    models.sis_student_guardian.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId', onDelete: 'CASCADE' });
    models.sis_student.hasMany(models.sis_student_guardian, { as: 'sisStudentGuardian', foreignKey: 'studentId', sourceKey: 'studentId', onDelete: 'CASCADE' });
    models.sis_student_enrollment.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId' });
    models.sis_student.hasMany(models.sis_student_enrollment, { as: 'sisStudentEnrollment', foreignKey: 'studentId', sourceKey: 'studentId' });
    models.sis_student_enrollment.belongsTo(models.sis_student_enrollment, { as: 'promotedFromEnrollment', foreignKey: 'promotedFromEnrollmentId', targetKey: 'studentEnrollmentId' });
    models.sis_student_enrollment.hasMany(models.sis_student_enrollment, { as: 'sisStudentEnrollment', foreignKey: 'promotedFromEnrollmentId', sourceKey: 'studentEnrollmentId' });
    models.sis_student_enrollment.belongsTo(models.sis_student, { as: 'studentSisStudent', foreignKey: 'studentId', targetKey: 'studentId' });
    models.sis_student.hasMany(models.sis_student_enrollment, { as: 'sisStudentEnrollmentByStudentId', foreignKey: 'studentId', sourceKey: 'studentId' });
    models.sis_course_registration.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId' });
    models.sis_student.hasMany(models.sis_course_registration, { as: 'sisCourseRegistration', foreignKey: 'studentId', sourceKey: 'studentId' });
    models.sis_course_registration.belongsTo(models.sis_student_enrollment, { as: 'studentEnrollment', foreignKey: 'studentEnrollmentId', targetKey: 'studentEnrollmentId' });
    models.sis_student_enrollment.hasMany(models.sis_course_registration, { as: 'sisCourseRegistration', foreignKey: 'studentEnrollmentId', sourceKey: 'studentEnrollmentId' });
    models.sis_student_status_history.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId', onDelete: 'CASCADE' });
    models.sis_student.hasMany(models.sis_student_status_history, { as: 'sisStudentStatusHistory', foreignKey: 'studentId', sourceKey: 'studentId', onDelete: 'CASCADE' });
    models.sis_student_transfer.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId' });
    models.sis_student.hasMany(models.sis_student_transfer, { as: 'sisStudentTransfer', foreignKey: 'studentId', sourceKey: 'studentId' });
    models.sis_previous_education.belongsTo(models.sis_student, { as: 'student', foreignKey: 'studentId', targetKey: 'studentId', onDelete: 'CASCADE' });
    models.sis_student.hasMany(models.sis_previous_education, { as: 'sisPreviousEducation', foreignKey: 'studentId', sourceKey: 'studentId', onDelete: 'CASCADE' });
}
