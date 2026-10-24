import type { Sequelize } from 'sequelize'
import { initAcadAcademicYearEntity } from './acad_academic_year/acad_academic_year.entity'
import { initAcadGradingSchemeEntity } from './acad_grading_scheme/acad_grading_scheme.entity'
import { initAcadGradingSchemeBandEntity } from './acad_grading_scheme_band/acad_grading_scheme_band.entity'
import { initAcadTermEntity } from './acad_term/acad_term.entity'
import { initAcadHolidayEntity } from './acad_holiday/acad_holiday.entity'
import { initAcadProgramEntity } from './acad_program/acad_program.entity'
import { initAcadGradeLevelEntity } from './acad_grade_level/acad_grade_level.entity'
import { initAcadCourseEntity } from './acad_course/acad_course.entity'
import { initAcadCoursePrerequisiteEntity } from './acad_course_prerequisite/acad_course_prerequisite.entity'
import { initAcadProgramCourseEntity } from './acad_program_course/acad_program_course.entity'
import { initAcadSectionEntity } from './acad_section/acad_section.entity'
import { initAcadCourseOfferingEntity } from './acad_course_offering/acad_course_offering.entity'
import { initAcadOfferingInstructorEntity } from './acad_offering_instructor/acad_offering_instructor.entity'

export type GeneratedModels = {
  acad_academic_year: ReturnType<typeof initAcadAcademicYearEntity>;
  acad_grading_scheme: ReturnType<typeof initAcadGradingSchemeEntity>;
  acad_grading_scheme_band: ReturnType<typeof initAcadGradingSchemeBandEntity>;
  acad_term: ReturnType<typeof initAcadTermEntity>;
  acad_holiday: ReturnType<typeof initAcadHolidayEntity>;
  acad_program: ReturnType<typeof initAcadProgramEntity>;
  acad_grade_level: ReturnType<typeof initAcadGradeLevelEntity>;
  acad_course: ReturnType<typeof initAcadCourseEntity>;
  acad_course_prerequisite: ReturnType<typeof initAcadCoursePrerequisiteEntity>;
  acad_program_course: ReturnType<typeof initAcadProgramCourseEntity>;
  acad_section: ReturnType<typeof initAcadSectionEntity>;
  acad_course_offering: ReturnType<typeof initAcadCourseOfferingEntity>;
  acad_offering_instructor: ReturnType<typeof initAcadOfferingInstructorEntity>;
}

export function createGeneratedModels(sequelize: Sequelize): GeneratedModels {
  const models: GeneratedModels = {
      acad_academic_year: initAcadAcademicYearEntity(sequelize),
      acad_grading_scheme: initAcadGradingSchemeEntity(sequelize),
      acad_grading_scheme_band: initAcadGradingSchemeBandEntity(sequelize),
      acad_term: initAcadTermEntity(sequelize),
      acad_holiday: initAcadHolidayEntity(sequelize),
      acad_program: initAcadProgramEntity(sequelize),
      acad_grade_level: initAcadGradeLevelEntity(sequelize),
      acad_course: initAcadCourseEntity(sequelize),
      acad_course_prerequisite: initAcadCoursePrerequisiteEntity(sequelize),
      acad_program_course: initAcadProgramCourseEntity(sequelize),
      acad_section: initAcadSectionEntity(sequelize),
      acad_course_offering: initAcadCourseOfferingEntity(sequelize),
      acad_offering_instructor: initAcadOfferingInstructorEntity(sequelize)
  }
  return models
}

export function associateGeneratedModels(models: GeneratedModels): void {
  models.acad_grading_scheme_band.belongsTo(models.acad_grading_scheme, { as: 'gradingScheme', foreignKey: 'gradingSchemeId', targetKey: 'gradingSchemeId', onDelete: 'CASCADE' })
  models.acad_grading_scheme.hasMany(models.acad_grading_scheme_band, { as: 'acadGradingSchemeBand', foreignKey: 'gradingSchemeId', sourceKey: 'gradingSchemeId', onDelete: 'CASCADE' })
  models.acad_term.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' })
  models.acad_academic_year.hasMany(models.acad_term, { as: 'acadTerm', foreignKey: 'academicYearId', sourceKey: 'academicYearId' })
  models.acad_holiday.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' })
  models.acad_academic_year.hasMany(models.acad_holiday, { as: 'acadHoliday', foreignKey: 'academicYearId', sourceKey: 'academicYearId' })
  models.acad_program.belongsTo(models.acad_grading_scheme, { as: 'gradingScheme', foreignKey: 'gradingSchemeId', targetKey: 'gradingSchemeId' })
  models.acad_grading_scheme.hasMany(models.acad_program, { as: 'acadProgram', foreignKey: 'gradingSchemeId', sourceKey: 'gradingSchemeId' })
  models.acad_grade_level.belongsTo(models.acad_program, { as: 'program', foreignKey: 'programId', targetKey: 'programId' })
  models.acad_program.hasMany(models.acad_grade_level, { as: 'acadGradeLevel', foreignKey: 'programId', sourceKey: 'programId' })
  models.acad_course_prerequisite.belongsTo(models.acad_course, { as: 'course', foreignKey: 'courseId', targetKey: 'courseId', onDelete: 'CASCADE' })
  models.acad_course.hasMany(models.acad_course_prerequisite, { as: 'acadCoursePrerequisite', foreignKey: 'courseId', sourceKey: 'courseId', onDelete: 'CASCADE' })
  models.acad_course_prerequisite.belongsTo(models.acad_course, { as: 'prerequisiteCourse', foreignKey: 'prerequisiteCourseId', targetKey: 'courseId' })
  models.acad_course.hasMany(models.acad_course_prerequisite, { as: 'acadCoursePrerequisiteByPrerequisiteCourseId', foreignKey: 'prerequisiteCourseId', sourceKey: 'courseId' })
  models.acad_program_course.belongsTo(models.acad_program, { as: 'program', foreignKey: 'programId', targetKey: 'programId' })
  models.acad_program.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'programId', sourceKey: 'programId' })
  models.acad_program_course.belongsTo(models.acad_course, { as: 'course', foreignKey: 'courseId', targetKey: 'courseId' })
  models.acad_course.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'courseId', sourceKey: 'courseId' })
  models.acad_program_course.belongsTo(models.acad_academic_year, { as: 'effectiveFromAcademicYear', foreignKey: 'effectiveFromAcademicYearId', targetKey: 'academicYearId' })
  models.acad_academic_year.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'effectiveFromAcademicYearId', sourceKey: 'academicYearId' })
  models.acad_program_course.belongsTo(models.acad_grade_level, { as: 'gradeLevel', foreignKey: 'gradeLevelId', targetKey: 'gradeLevelId' })
  models.acad_grade_level.hasMany(models.acad_program_course, { as: 'acadProgramCourse', foreignKey: 'gradeLevelId', sourceKey: 'gradeLevelId' })
  models.acad_section.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' })
  models.acad_academic_year.hasMany(models.acad_section, { as: 'acadSection', foreignKey: 'academicYearId', sourceKey: 'academicYearId' })
  models.acad_section.belongsTo(models.acad_grade_level, { as: 'gradeLevel', foreignKey: 'gradeLevelId', targetKey: 'gradeLevelId' })
  models.acad_grade_level.hasMany(models.acad_section, { as: 'acadSection', foreignKey: 'gradeLevelId', sourceKey: 'gradeLevelId' })
  models.acad_course_offering.belongsTo(models.acad_course, { as: 'course', foreignKey: 'courseId', targetKey: 'courseId' })
  models.acad_course.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'courseId', sourceKey: 'courseId' })
  models.acad_course_offering.belongsTo(models.acad_academic_year, { as: 'academicYear', foreignKey: 'academicYearId', targetKey: 'academicYearId' })
  models.acad_academic_year.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'academicYearId', sourceKey: 'academicYearId' })
  models.acad_course_offering.belongsTo(models.acad_grading_scheme, { as: 'gradingScheme', foreignKey: 'gradingSchemeId', targetKey: 'gradingSchemeId' })
  models.acad_grading_scheme.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'gradingSchemeId', sourceKey: 'gradingSchemeId' })
  models.acad_course_offering.belongsTo(models.acad_term, { as: 'term', foreignKey: 'termId', targetKey: 'termId' })
  models.acad_term.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'termId', sourceKey: 'termId' })
  models.acad_course_offering.belongsTo(models.acad_section, { as: 'section', foreignKey: 'sectionId', targetKey: 'sectionId' })
  models.acad_section.hasMany(models.acad_course_offering, { as: 'acadCourseOffering', foreignKey: 'sectionId', sourceKey: 'sectionId' })
  models.acad_offering_instructor.belongsTo(models.acad_course_offering, { as: 'courseOffering', foreignKey: 'courseOfferingId', targetKey: 'courseOfferingId', onDelete: 'CASCADE' })
  models.acad_course_offering.hasMany(models.acad_offering_instructor, { as: 'acadOfferingInstructor', foreignKey: 'courseOfferingId', sourceKey: 'courseOfferingId', onDelete: 'CASCADE' })
}
