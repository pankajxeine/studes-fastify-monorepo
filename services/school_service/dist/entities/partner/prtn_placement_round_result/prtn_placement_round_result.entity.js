"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrtnPlacementRoundResultEntity = void 0;
exports.initPrtnPlacementRoundResultEntity = initPrtnPlacementRoundResultEntity;
const sequelize_1 = require("sequelize");
class PrtnPlacementRoundResultEntity extends sequelize_1.Model {
}
exports.PrtnPlacementRoundResultEntity = PrtnPlacementRoundResultEntity;
function initPrtnPlacementRoundResultEntity(sequelize) {
    PrtnPlacementRoundResultEntity.init({
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
            defaultValue: sequelize_1.Sequelize.literal("core.fn_next_record_code_for_table ('prtn_placement_round_result')"),
        },
        placementRoundResultId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_round_result_id',
            allowNull: false,
            unique: true,
            defaultValue: sequelize_1.Sequelize.literal("gen_random_uuid ()"),
        },
        placementInterviewRoundId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_interview_round_id',
            allowNull: false,
            references: { model: 'prtn_placement_interview_round', key: 'placement_interview_round_id' },
            onDelete: 'CASCADE',
        },
        placementApplicationId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_application_id',
            allowNull: false,
            references: { model: 'prtn_placement_application', key: 'placement_application_id' },
        },
        placementDriveId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'placement_drive_id',
            allowNull: false,
        },
        result: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'result',
            allowNull: false,
            defaultValue: "pending",
        },
        score: {
            type: sequelize_1.DataTypes.DECIMAL(5, 2),
            field: 'score',
            allowNull: true,
        },
        interviewerName: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'interviewer_name',
            allowNull: true,
        },
        feedback: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'feedback',
            allowNull: true,
        },
        evaluatedAt: {
            type: sequelize_1.DataTypes.DATE,
            field: 'evaluated_at',
            allowNull: true,
        },
        recordedByUserId: {
            type: sequelize_1.DataTypes.TEXT,
            field: 'recorded_by_user_id',
            allowNull: true,
            references: { model: 'iam_app_user', key: 'app_user_id' },
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
        tableName: 'prtn_placement_round_result',
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        indexes: [
            { unique: true, fields: ['placement_interview_round_id', 'placement_application_id'] }
        ]
    });
    return PrtnPlacementRoundResultEntity;
}
