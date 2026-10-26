"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadCourseOfferingEntity = void 0;
exports.initAcadCourseOfferingEntity = initAcadCourseOfferingEntity;
const sequelize_1 = require("sequelize");
class AcadCourseOfferingEntity extends sequelize_1.Model {
}
exports.AcadCourseOfferingEntity = AcadCourseOfferingEntity;
function initAcadCourseOfferingEntity(sequelize) {
    AcadCourseOfferingEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_course_offering')"),
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        courseId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_id',
            allowNull: false,
            references: { model: 'acad_course', key: 'course_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        termId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'term_id',
            allowNull: true,
            references: { model: 'acad_term', key: 'term_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        sectionId: {
            type: sequelize_1.DataTypes.UUID,
            field: 'section_id',
            allowNull: true,
            references: { model: 'acad_section', key: 'section_id' },
        },
        gradingSchemeId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grading_scheme_id',
            allowNull: true,
            references: { model: 'acad_grading_scheme', key: 'grading_scheme_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        offeringCode: {
            type: sequelize_1.DataTypes.STRING(30),
            field: 'offering_code',
            allowNull: false,
        },
        capacity: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'capacity',
            allowNull: true,
        },
        deliveryMode: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'delivery_mode',
            allowNull: false,
            defaultValue: "in_person",
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "planned",
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
        tableName: 'acad_course_offering',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['offering_code'] }
        ]
    });
    return AcadCourseOfferingEntity;
}
