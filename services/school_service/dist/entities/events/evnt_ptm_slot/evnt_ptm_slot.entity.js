"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EvntPtmSlotEntity = void 0;
exports.initEvntPtmSlotEntity = initEvntPtmSlotEntity;
const sequelize_1 = require("sequelize");
class EvntPtmSlotEntity extends sequelize_1.Model {
}
exports.EvntPtmSlotEntity = EvntPtmSlotEntity;
function initEvntPtmSlotEntity(sequelize) {
    EvntPtmSlotEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('evnt_ptm_slot')"),
        },
        ptmSlotId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'ptm_slot_id',
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
        staffId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'staff_id',
            allowNull: false,
            references: { model: 'hr_staff', key: 'staff_id' },
        },
        roomId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'room_id',
            allowNull: true,
            references: { model: 'org_room', key: 'room_id' },
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
        slot: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'slot',
            allowNull: true,
            autoIncrement: true,
        },
        meetingMode: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'meeting_mode',
            allowNull: false,
            defaultValue: "in_person",
        },
        studentId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'student_id',
            allowNull: true,
            references: { model: 'sis_student', key: 'student_id' },
        },
        bookedByGuardianId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'booked_by_guardian_id',
            allowNull: true,
            references: { model: 'ppl_guardian', key: 'guardian_id' },
        },
        bookedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'booked_at',
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'status',
            allowNull: false,
            defaultValue: "available",
        },
        meetingNotes: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meeting_notes',
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
        tableName: 'evnt_ptm_slot',
        timestamps: true,
        underscored: true,
        freezeTableName: true
    });
    return EvntPtmSlotEntity;
}
