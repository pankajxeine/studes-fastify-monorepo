"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadProgramCourseEntity = void 0;
exports.initAcadProgramCourseEntity = initAcadProgramCourseEntity;
const sequelize_1 = require("sequelize");
class AcadProgramCourseEntity extends sequelize_1.Model {
}
exports.AcadProgramCourseEntity = AcadProgramCourseEntity;
function initAcadProgramCourseEntity(sequelize) {
    AcadProgramCourseEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_program_course')"),
        },
        programCourseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_course_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        programId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'program_id',
            allowNull: false,
            references: { model: 'acad_program', key: 'program_id' },
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'grade_level_id',
            allowNull: true,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
        },
        courseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_id',
            allowNull: false,
            references: { model: 'acad_course', key: 'course_id' },
        },
        isMandatory: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_mandatory',
            allowNull: false,
            defaultValue: true,
        },
        recommendedTermNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'recommended_term_no',
            allowNull: true,
        },
        effectiveFromAcademicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'effective_from_academic_year_id',
            allowNull: true,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
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
        }
    }, {
        sequelize,
        tableName: 'acad_program_course',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['program_id', 'grade_level_id', 'course_id'] }
        ]
    });
    return AcadProgramCourseEntity;
}
