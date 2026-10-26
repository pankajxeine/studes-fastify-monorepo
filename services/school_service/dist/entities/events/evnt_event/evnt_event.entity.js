"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvntEventEntity = void 0;
exports.initEvntEventEntity = initEvntEventEntity;
const sequelize_1 = require("sequelize");
class EvntEventEntity extends sequelize_1.Model {
}
exports.EvntEventEntity = EvntEventEntity;
function initEvntEventEntity(sequelize) {
    EvntEventEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('evnt_event')"),
        },
        eventId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'event_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        campusId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'campus_id',
            allowNull: true,
            references: { model: 'org_campus', key: 'campus_id' },
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
        eventType: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'event_type',
            allowNull: false,
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
        isAllDay: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_all_day',
            allowNull: false,
            defaultValue: false,
        },
        venueRoomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'venue_room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
        },
        venueText: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'venue_text',
            allowNull: true,
        },
        organizerStaffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'organizer_staff_id',
            allowNull: true,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        bannerFileId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'banner_file_id',
            allowNull: true,
            references: { model: 'docs_file', key: 'file_id' },
        },
        isPublic: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_public',
            allowNull: false,
            defaultValue: false,
        },
        requiresRsvp: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'requires_rsvp',
            allowNull: false,
            defaultValue: false,
        },
        rsvpDeadlineAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'rsvp_deadline_at',
            allowNull: true,
        },
        capacity: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'capacity',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "scheduled",
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
        tableName: 'evnt_event',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return EvntEventEntity;
}
