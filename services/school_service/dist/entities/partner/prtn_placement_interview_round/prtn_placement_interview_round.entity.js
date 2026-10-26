"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPlacementInterviewRoundEntity = void 0;
exports.initPrtnPlacementInterviewRoundEntity = initPrtnPlacementInterviewRoundEntity;
const sequelize_1 = require("sequelize");
class PrtnPlacementInterviewRoundEntity extends sequelize_1.Model {
}
exports.PrtnPlacementInterviewRoundEntity = PrtnPlacementInterviewRoundEntity;
function initPrtnPlacementInterviewRoundEntity(sequelize) {
    PrtnPlacementInterviewRoundEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'prtn_placement_interview_round'\r\n    )"),
        },
        placementInterviewRoundId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_interview_round_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        placementDriveId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_drive_id',
            allowNull: false,
            references: { model: 'prtn_placement_drive', key: 'placement_drive_id' },
            onDelete: 'CASCADE',
        },
        roundNo: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'round_no',
            allowNull: false,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'name',
            allowNull: false,
        },
        roundType: {
            type: sequelize_1.DataTypes.STRING(20),
            field: 'round_type',
            allowNull: false,
        },
        mode: {
            type: sequelize_1.DataTypes.STRING(10),
            field: 'mode',
            allowNull: false,
            defaultValue: "onsite",
        },
        scheduledAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'scheduled_at',
            allowNull: true,
        },
        durationMinutes: {
            type: sequelize_1.DataTypes.SMALLINT,
            field: 'duration_minutes',
            allowNull: true,
        },
        venue: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'venue',
            allowNull: true,
        },
        meetingUrl: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'meeting_url',
            allowNull: true,
        },
        isElimination: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'is_elimination',
            allowNull: false,
            defaultValue: true,
        },
        status: {
            type: sequelize_1.DataTypes.STRING(12),
            field: 'status',
            allowNull: false,
            defaultValue: "scheduled",
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
        tableName: 'prtn_placement_interview_round',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['placement_drive_id', 'round_no'] },
            { unique: true, fields: ['placement_interview_round_id', 'placement_drive_id'] }
        ]
    });
    return PrtnPlacementInterviewRoundEntity;
}
