"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VisitorGuestLectureEntity = void 0;
exports.initVisitorGuestLectureEntity = initVisitorGuestLectureEntity;
const sequelize_1 = require("sequelize");
class VisitorGuestLectureEntity extends sequelize_1.Model {
}
exports.VisitorGuestLectureEntity = VisitorGuestLectureEntity;
function initVisitorGuestLectureEntity(sequelize) {
    VisitorGuestLectureEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('visitor_guest_lecture')"),
        },
        guestLectureId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guest_lecture_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        guestId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'guest_id',
            allowNull: false,
            references: { model: 'visitor_guest', key: 'guest_id' },
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: false,
            references: { model: 'org_campus', key: 'campus_id' },
        },
        courseOfferingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'course_offering_id',
            allowNull: true,
            references: { model: 'acad_course_offering', key: 'course_offering_id' },
        },
        eventId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'event_id',
            allowNull: true,
            references: { model: 'evnt_event', key: 'event_id' },
        },
        coordinatorStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'coordinator_staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        visitId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'visit_id',
            allowNull: true,
            references: { model: 'visitor_visit', key: 'visit_id' },
        },
        title: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'title',
            allowNull: false,
        },
        abstract: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'abstract',
            allowNull: true,
        },
        startsAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'starts_at',
            allowNull: false,
        },
        endsAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'ends_at',
            allowNull: false,
        },
        lecturePeriod: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'lecture_period',
            allowNull: true,
            autoIncrement: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "proposed",
        },
        expectedAudience: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'expected_audience',
            allowNull: true,
        },
        actualAttendance: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'actual_attendance',
            allowNull: true,
        },
        honorariumAmount: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'honorarium_amount',
            allowNull: false,
            defaultValue: 0,
        },
        honorariumStatus: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'honorarium_status',
            allowNull: false,
            defaultValue: "not_applicable",
        },
        posterFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'poster_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        feedbackRating: {
            type: sequelize_1.DataTypes.DECIMAL(3, 2),
            field: 'feedback_rating',
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
        tableName: 'visitor_guest_lecture',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['visit_id'] }
        ]
    });
    return VisitorGuestLectureEntity;
}
