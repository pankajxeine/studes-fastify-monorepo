"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExamExamScheduleEntity = void 0;
exports.initExamExamScheduleEntity = initExamExamScheduleEntity;
const sequelize_1 = require("sequelize");
class ExamExamScheduleEntity extends sequelize_1.Model {
}
exports.ExamExamScheduleEntity = ExamExamScheduleEntity;
function initExamExamScheduleEntity(sequelize) {
    ExamExamScheduleEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('exam_exam_schedule')"),
        },
        examScheduleId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exam_schedule_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        examId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exam_id',
            allowNull: false,
            references: { model: 'exam_exam', key: 'exam_id' },
            onDelete: 'CASCADE',
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: false,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        examDate: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'exam_date',
            allowNull: false,
        },
        startTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'start_time',
            allowNull: false,
        },
        endTime: {
            type: sequelize_1.DataTypes.TIME,
            field: 'end_time',
            allowNull: false,
        },
        sitting: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'sitting',
            allowNull: true,
            autoIncrement: true,
        },
        maxMarks: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'max_marks',
            allowNull: false,
        },
        passMarks: {
            type: sequelize_1.DataTypes.DECIMAL(6, 2),
            field: 'pass_marks',
            allowNull: true,
        },
        invigilatorStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'invigilator_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "scheduled",
        },
        marksStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'marks_status',
            allowNull: false,
            defaultValue: "not_started",
        },
        marksSubmittedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'marks_submitted_at',
            allowNull: true,
        },
        marksVerifiedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'marks_verified_at',
            allowNull: true,
        },
        marksVerifiedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'marks_verified_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        instructions: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'instructions',
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
        tableName: 'exam_exam_schedule',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['exam_id', 'course_offering_id'] }
        ]
    });
    return ExamExamScheduleEntity;
}
