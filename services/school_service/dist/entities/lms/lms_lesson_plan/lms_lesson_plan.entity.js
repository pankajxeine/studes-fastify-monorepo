"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LmsLessonPlanEntity = void 0;
exports.initLmsLessonPlanEntity = initLmsLessonPlanEntity;
const sequelize_1 = require("sequelize");
class LmsLessonPlanEntity extends sequelize_1.Model {
}
exports.LmsLessonPlanEntity = LmsLessonPlanEntity;
function initLmsLessonPlanEntity(sequelize) {
    LmsLessonPlanEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('lms_lesson_plan')"),
        },
        lessonPlanId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lesson_plan_id',
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
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        plannedDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'planned_date',
            allowNull: false,
        },
        periodCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'period_count',
            allowNull: false,
            defaultValue: 1,
        },
        sequenceNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'sequence_no',
            allowNull: true,
        },
        unitTitle: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'unit_title',
            allowNull: false,
        },
        topic: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'topic',
            allowNull: false,
        },
        learningObjectives: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'learning_objectives',
            allowNull: false,
        },
        teachingMethods: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'teaching_methods',
            allowNull: true,
        },
        resources: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'resources',
            allowNull: true,
        },
        homework: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'homework',
            allowNull: true,
        },
        assessmentNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'assessment_notes',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "draft",
        },
        submittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'submitted_at',
            allowNull: true,
        },
        reviewedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'reviewed_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        reviewedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'reviewed_at',
            allowNull: true,
        },
        reviewComment: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'review_comment',
            allowNull: true,
        },
        deliveredOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'delivered_on',
            allowNull: true,
        },
        deliveryNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'delivery_notes',
            allowNull: true,
        },
        cancelledReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'cancelled_reason',
            allowNull: true,
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
        tableName: 'lms_lesson_plan',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['course_offering_id', 'sequence_no'] }
        ]
    });
    return LmsLessonPlanEntity;
}
