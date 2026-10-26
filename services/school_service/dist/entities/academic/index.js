"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGeneratedModels = createGeneratedModels;
exports.associateGeneratedModels = associateGeneratedModels;
const acad_academic_year_entity_1 = require("./acad_academic_year/acad_academic_year.entity");
const acad_grading_scheme_entity_1 = require("./acad_grading_scheme/acad_grading_scheme.entity");
const acad_grading_scheme_band_entity_1 = require("./acad_grading_scheme_band/acad_grading_scheme_band.entity");
const acad_term_entity_1 = require("./acad_term/acad_term.entity");
const acad_holiday_entity_1 = require("./acad_holiday/acad_holiday.entity");
const acad_program_entity_1 = require("./acad_program/acad_program.entity");
const acad_grade_level_entity_1 = require("./acad_grade_level/acad_grade_level.entity");
const acad_course_entity_1 = require("./acad_course/acad_course.entity");
const acad_course_prerequisite_entity_1 = require("./acad_course_prerequisite/acad_course_prerequisite.entity");
const acad_program_course_entity_1 = require("./acad_program_course/acad_program_course.entity");
const acad_section_entity_1 = require("./acad_section/acad_section.entity");
const acad_course_offering_entity_1 = require("./acad_course_offering/acad_course_offering.entity");
const acad_offering_instructor_entity_1 = require("./acad_offering_instructor/acad_offering_instructor.entity");
function createGeneratedModels(sequelize) {
    const models = {
        acad_academic_year: (0, acad_academic_year_entity_1.initAcadAcademicYearEntity)(sequelize),
        acad_grading_scheme: (0, acad_grading_scheme_entity_1.initAcadGradingSchemeEntity)(sequelize),
        acad_grading_scheme_band: (0, acad_grading_scheme_band_entity_1.initAcadGradingSchemeBandEntity)(sequelize),
        acad_term: (0, acad_term_entity_1.initAcadTermEntity)(sequelize),
        acad_holiday: (0, acad_holiday_entity_1.initAcadHolidayEntity)(sequelize),
        acad_program: (0, acad_program_entity_1.initAcadProgramEntity)(sequelize),
        acad_grade_level: (0, acad_grade_level_entity_1.initAcadGradeLevelEntity)(sequelize),
        acad_course: (0, acad_course_entity_1.initAcadCourseEntity)(sequelize),
        acad_course_prerequisite: (0, acad_course_prerequisite_entity_1.initAcadCoursePrerequisiteEntity)(sequelize),
        acad_program_course: (0, acad_program_course_entity_1.initAcadProgramCourseEntity)(sequelize),
        acad_section: (0, acad_section_entity_1.initAcadSectionEntity)(sequelize),
        acad_course_offering: (0, acad_course_offering_entity_1.initAcadCourseOfferingEntity)(sequelize),
        acad_offering_instructor: (0, acad_offering_instructor_entity_1.initAcadOfferingInstructorEntity)(sequelize)
    };
    return models;
}
function associateGeneratedModels(models) {
    models.acad_grading_scheme_band.belongsTo(models.acad_grading_scheme, { as: 'gradingScheme', foreignKey: 'gradingSchemeId', targetKey: 'gradingSchemeId', onDelete: 'CASCADE' });
    models.acad_grading_scheme.hasMany(models.acad_grading_scheme_band, { as: 'acadGradingSchemeBand', foreignKey: 'gradingSchemeId', sourceKey: 'gradingSchemeId', onDelete: 'CASCADE' });
    models.acad_term.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' });
    models.acad_academic_year.hasMany(models.acad_term, { as: 'acadTerm', foreignKey: 'academicYearId', sourceKey: 'academicYearId' });
    models.acad_holiday.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' });
    models.acad_academic_year.hasMany(models.acad_holiday, { as: 'acadHoliday', foreignKey: 'academicYearId', sourceKey: 'academicYearId' });
    models.acad_program.belongsTo(models.acad_grading_scheme, { as: 'gradingScheme', foreignKey: 'gradingSchemeId', targetKey: 'gradingSchemeId' });
    models.acad_grading_scheme.hasMany(models.acad_program, { as: 'acadProgram', foreignKey: 'gradingSchemeId', sourceKey: 'gradingSchemeId' });
    models.acad_grade_level.belongsTo(models.acad_program, { as: 'program', foreignKey: 'programId', targetKey: 'programId' });
    models.acad_program.hasMany(models.acad_grade_level, { as: 'acadGradeLevel', foreignKey: 'programId', sourceKey: 'programId' });
    models.acad_course_prerequisite.belongsTo(models.acad_course, { as: 'course', foreignKey: 'courseId', targetKey: 'courseId', onDelete: 'CASCADE' });
    models.acad_course.hasMany(models.acad_course_prerequisite, { as: 'acadCoursePrerequisite', foreignKey: 'courseId', sourceKey: 'courseId', onDelete: 'CASCADE' });
    models.acad_course_prerequisite.belongsTo(models.acad_course, { as: 'prerequisiteCourse', foreignKey: 'prerequisiteCourseId', targetKey: 'courseId' });
    models.acad_course.hasMany(models.acad_course_prerequisite, { as: 'acadCoursePrerequisiteByPrerequisiteCourseId', foreignKey: 'prerequisiteCourseId', sourceKey: 'courseId' });
    models.acad_program_course.belongsTo(models.acad_program, { as: 'program', foreignKey: 'programId', targetKey: 'programId' });
    models.acad_program.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'programId', sourceKey: 'programId' });
    models.acad_program_course.belongsTo(models.acad_course, { as: 'course', foreignKey: 'courseId', targetKey: 'courseId' });
    models.acad_course.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'courseId', sourceKey: 'courseId' });
    models.acad_program_course.belongsTo(models.acad_academic_year, { as: 'effectiveFromAcademicYear', foreignKey: 'effectiveFromAcademicYearId', targetKey: 'academicYearId' });
    models.acad_academic_year.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'effectiveFromAcademicYearId', sourceKey: 'academicYearId' });
    models.acad_program_course.belongsTo(models.acad_grade_level, { as: 'gradeLevel', foreignKey: 'gradeLevelId', targetKey: 'gradeLevelId' });
    models.acad_grade_level.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'gradeLevelId', sourceKey: 'gradeLevelId' });
    models.acad_section.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' });
    models.acad_academic_year.hasMany(models.acad_section, { as: 'acadSection', foreignKey: 'academicYearId', sourceKey: 'academicYearId' });
    models.acad_section.belongsTo(models.acad_grade_level, { as: 'gradeLevel', foreignKey: 'gradeLevelId', targetKey: 'gradeLevelId' });
    models.acad_grade_level.hasMany(models.acad_section, { as: 'acadSection', foreignKey: 'gradeLevelId', sourceKey: 'gradeLevelId' });
    models.acad_course_offering.belongsTo(models.acad_course, { as: 'course', foreignKey: 'courseId', targetKey: 'courseId' });
    models.acad_course.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'courseId', sourceKey: 'courseId' });
    models.acad_course_offering.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' });
    models.acad_academic_year.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'academicYearId', sourceKey: 'academicYearId' });
    models.acad_course_offering.belongsTo(models.acad_grading_scheme, { as: 'gradingScheme', foreignKey: 'gradingSchemeId', targetKey: 'gradingSchemeId' });
    models.acad_grading_scheme.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'gradingSchemeId', sourceKey: 'gradingSchemeId' });
    models.acad_course_offering.belongsTo(models.acad_term, { as: 'term', foreignKey: 'termId', targetKey: 'termId' });
    models.acad_term.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'termId', sourceKey: 'termId' });
    models.acad_course_offering.belongsTo(models.acad_section, { as: 'section', foreignKey: 'sectionId', targetKey: 'sectionId' });
    models.acad_section.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'sectionId', sourceKey: 'sectionId' });
    models.acad_offering_instructor.belongsTo(models.acad_course_offering, { as: 'courseOffering', foreignKey: 'courseOfferingId', targetKey: 'courseOfferingId', onDelete: 'CASCADE' });
    models.acad_course_offering.hasMany(models.acad_offering_instructor, { as: 'acadOfferingInstructor', foreignKey: 'courseOfferingId', sourceKey: 'courseOfferingId', onDelete: 'CASCADE' });
}
