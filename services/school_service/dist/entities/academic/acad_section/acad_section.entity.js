"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcadSectionEntity = void 0;
exports.initAcadSectionEntity = initAcadSectionEntity;
const sequelize_1 = require("sequelize");
class AcadSectionEntity extends sequelize_1.Model {
}
exports.AcadSectionEntity = AcadSectionEntity;
function initAcadSectionEntity(sequelize) {
    AcadSectionEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('acad_section')"),
        },
        sectionId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'section_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        academicYearId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'academic_year_id',
            allowNull: false,
            references: { model: 'acad_academic_year', key: 'academic_year_id' },
        },
        gradeLevelId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'grade_level_id',
            allowNull: false,
            references: { model: 'acad_grade_level', key: 'grade_level_id' },
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
        classTeacherStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'class_teacher_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        capacity: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'capacity',
            allowNull: false,
            defaultValue: 30,
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
        }
    }, {
        sequelize,
        tableName: 'acad_section',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['academic_year_id', 'campus_id', 'code'] },
            { unique: true, fields: ['section_id', 'academic_year_id'] }
        ]
    });
    return AcadSectionEntity;
}
