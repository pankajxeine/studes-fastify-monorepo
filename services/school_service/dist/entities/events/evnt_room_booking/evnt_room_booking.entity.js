"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvntRoomBookingEntity = void 0;
exports.initEvntRoomBookingEntity = initEvntRoomBookingEntity;
const sequelize_1 = require("sequelize");
class EvntRoomBookingEntity extends sequelize_1.Model {
}
exports.EvntRoomBookingEntity = EvntRoomBookingEntity;
function initEvntRoomBookingEntity(sequelize) {
    EvntRoomBookingEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('evnt_room_booking')"),
        },
        roomBookingId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_booking_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: false,
            references: { model: 'org_room', key: 'room_id' },
        },
        eventId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'event_id',
            allowNull: true,
            references: { model: 'evnt_event', key: 'event_id' },
        },
        purpose: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'purpose',
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
        booking: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'booking',
            allowNull: true,
            autoIncrement: true,
        },
        expectedAttendees: {
            type: sequelize_1.DataTypes.INTEGER,
            field: 'expected_attendees',
            allowNull: true,
        },
        bookedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'booked_by_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "pending",
        },
        decidedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decided_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        decidedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'decided_at',
            allowNull: true,
        },
        decisionNote: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'decision_note',
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
        tableName: 'evnt_room_booking',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return EvntRoomBookingEntity;
}
