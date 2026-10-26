"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadCourseEntity = void 0;
exports.initAcadCourseEntity = initAcadCourseEntity;
const sequelize_1 = require("sequelize");
class AcadCourseEntity extends sequelize_1.Model {
}
exports.AcadCourseEntity = AcadCourseEntity;
function initAcadCourseEntity(sequelize) {
    AcadCourseEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_course')"),
        },
        courseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        departmentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'department_id',
            allowNull: false,
            references: { model: 'org_department', key: 'department_id' },
        },
        code: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'code',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        courseType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_type',
            allowNull: false,
            defaultValue: "core",
        },
        credits: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'credits',
            allowNull: true,
        },
        lectureHoursPerWeek: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'lecture_hours_per_week',
            allowNull: true,
        },
        labHoursPerWeek: {
            type: sequelize_1.DataTypes.DECIMAL(4, 1),
            field: 'lab_hours_per_week',
            allowNull: true,
        },
        isActive: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_active',
            allowNull: false,
            defaultValue: true,
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
        },
        deletedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'deleted_at',
            allowNull: true,
        }
    }, {
        sequelize,
        tableName: 'acad_course',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        paranoid: true,
        deletedAt: 'deletedAt',
        indexes: [
            { unique: true, fields: ['code'] }
        ]
    });
    return AcadCourseEntity;
}
