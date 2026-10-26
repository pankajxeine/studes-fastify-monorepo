"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlumniMentorshipEntity = void 0;
exports.initAlumniMentorshipEntity = initAlumniMentorshipEntity;
const sequelize_1 = require("sequelize");
class AlumniMentorshipEntity extends sequelize_1.Model {
}
exports.AlumniMentorshipEntity = AlumniMentorshipEntity;
function initAlumniMentorshipEntity(sequelize) {
    AlumniMentorshipEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('alumni_mentorship')"),
        },
        mentorshipId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'mentorship_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        mentorAlumnusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'mentor_alumnus_id',
            allowNull: false,
            references: { model: 'alumni_alumnus', key: 'alumnus_id' },
        },
        menteeStudentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'mentee_student_id',
            allowNull: false,
            references: { model: 'sis_student', key: 'student_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "requested",
        },
        focusArea: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'focus_area',
            allowNull: false,
        },
        goals: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'goals',
            allowNull: true,
        },
        meetingFrequency: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'meeting_frequency',
            allowNull: false,
            defaultValue: "monthly",
        },
        requestedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requested_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        requestedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'requested_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        respondedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'responded_at',
            allowNull: true,
        },
        startedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'started_on',
            allowNull: true,
        },
        endedOn: {
            type: sequelize_1.DataTypes.DATEONLY,
            field: 'ended_on',
            allowNull: true,
        },
        declineReason: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decline_reason',
            allowNull: true,
        },
        menteeRating: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'mentee_rating',
            allowNull: true,
        },
        menteeFeedback: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'mentee_feedback',
            allowNull: true,
        },
        mentorNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'mentor_notes',
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
        tableName: 'alumni_mentorship',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return AlumniMentorshipEntity;
}
