"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommsThreadParticipantEntity = void 0;
exports.initCommsThreadParticipantEntity = initCommsThreadParticipantEntity;
const sequelize_1 = require("sequelize");
class CommsThreadParticipantEntity extends sequelize_1.Model {
}
exports.CommsThreadParticipantEntity = CommsThreadParticipantEntity;
function initCommsThreadParticipantEntity(sequelize) {
    CommsThreadParticipantEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('comms_thread_participant')"),
        },
        threadParticipantId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'thread_participant_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        messageThreadId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'message_thread_id',
            allowNull: false,
            references: { model: 'comms_message_thread', key: 'message_thread_id' },
            onDelete: 'CASCADE',
        },
        appUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'app_user_id',
            allowNull: false,
            references: { model: 'iam_app_user', key: 'app_user_id' },
        },
        joinedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'joined_at',
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        leftAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'left_at',
            allowNull: true,
        },
        lastReadAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'last_read_at',
            allowNull: true,
        },
        isMuted: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_muted',
            allowNull: false,
            defaultValue: false,
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
        tableName: 'comms_thread_participant',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['message_thread_id', 'app_user_id'] }
        ]
    });
    return CommsThreadParticipantEntity;
}
