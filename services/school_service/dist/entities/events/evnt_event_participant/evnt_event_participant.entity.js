"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvntEventParticipantEntity = void 0;
exports.initEvntEventParticipantEntity = initEvntEventParticipantEntity;
const sequelize_1 = require("sequelize");
class EvntEventParticipantEntity extends sequelize_1.Model {
}
exports.EvntEventParticipantEntity = EvntEventParticipantEntity;
function initEvntEventParticipantEntity(sequelize) {
    EvntEventParticipantEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('evnt_event_participant')"),
        },
        eventParticipantId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'event_participant_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        eventId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'event_id',
            allowNull: false,
            references: { model: 'evnt_event', key: 'event_id' },
            onDelete: 'CASCADE',
        },
        personId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'person_id',
            allowNull: false,
            references: { model: 'ppl_person', key: 'person_id' },
        },
        participantRole: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'participant_role',
            allowNull: false,
            defaultValue: "attendee",
        },
        rsvpStatus: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'rsvp_status',
            allowNull: false,
            defaultValue: "invited",
        },
        respondedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'responded_at',
            allowNull: true,
        },
        guestCount: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'guest_count',
            allowNull: false,
            defaultValue: 0,
        },
        checkedInAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'checked_in_at',
            allowNull: true,
        },
        notes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'notes',
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
        tableName: 'evnt_event_participant',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['event_id', 'person_id'] }
        ]
    });
    return EvntEventParticipantEntity;
}
