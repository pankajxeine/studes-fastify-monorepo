"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadCoursePrerequisiteEntity = void 0;
exports.initAcadCoursePrerequisiteEntity = initAcadCoursePrerequisiteEntity;
const sequelize_1 = require("sequelize");
class AcadCoursePrerequisiteEntity extends sequelize_1.Model {
}
exports.AcadCoursePrerequisiteEntity = AcadCoursePrerequisiteEntity;
function initAcadCoursePrerequisiteEntity(sequelize) {
    AcadCoursePrerequisiteEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_course_prerequisite')"),
        },
        courseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_id',
            allowNull: false,
            references: { model: 'acad_course', key: 'course_id' },
            onDelete: 'CASCADE',
        },
        prerequisiteCourseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'prerequisite_course_id',
            allowNull: false,
            references: { model: 'acad_course', key: 'course_id' },
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
        UNIQUE: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'UNIQUE',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'acad_course_prerequisite',
        timestamps: false,
        underscored: true,
        freezeTableName: true
    });
    return AcadCoursePrerequisiteEntity;
}
