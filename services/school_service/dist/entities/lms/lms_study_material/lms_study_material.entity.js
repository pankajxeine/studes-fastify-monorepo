"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmsStudyMaterialEntity = void 0;
exports.initLmsStudyMaterialEntity = initLmsStudyMaterialEntity;
const sequelize_1 = require("sequelize");
class LmsStudyMaterialEntity extends sequelize_1.Model {
}
exports.LmsStudyMaterialEntity = LmsStudyMaterialEntity;
function initLmsStudyMaterialEntity(sequelize) {
    LmsStudyMaterialEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lms_study_material')"),
        },
        studyMaterialId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'study_material_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        lessonPlanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lesson_plan_id',
            allowNull: true,
            references: { model: 'lms_lesson_plan', key: 'lesson_plan_id' },
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'description',
            allowNull: true,
        },
        materialType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'material_type',
            allowNull: false,
        },
        fileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        externalUrl: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'external_url',
            allowNull: true,
        },
        unitTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'unit_title',
            allowNull: true,
        },
        uploadedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'uploaded_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        isPublished: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_published',
            allowNull: false,
            defaultValue: false,
        },
        publishedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'published_at',
            allowNull: true,
        },
        availableFrom: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'available_from',
            allowNull: true,
        },
        availableUntil: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'available_until',
            allowNull: true,
        },
        availability: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'availability',
            allowNull: true,
            autoIncrement: true,
        },
        viewCount: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'view_count',
            allowNull: false,
            defaultValue: 0,
        },
        sortOrder: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sort_order',
            allowNull: false,
            defaultValue: 0,
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
        tableName: 'lms_study_material',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return LmsStudyMaterialEntity;
}
