import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPlacementRoundResultAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  placementRoundResultId?: string
  placementInterviewRoundId: string
  placementApplicationId: string
  placementDriveId: string
  result?: string
  score?: number | null
  interviewerName?: string | null
  feedback?: string | null
  evaluatedAt?: Date | null
  recordedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnPlacementRoundResultCreationAttributes = Optional<PrtnPlacementRoundResultAttributes, "id" | "publicId" | "recordCode" | "placementRoundResultId" | "result" | "score" | "interviewerName" | "feedback" | "evaluatedAt" | "recordedByUserId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnPlacementRoundResultEntity
  extends Model<PrtnPlacementRoundResultAttributes, PrtnPlacementRoundResultCreationAttributes>
  implements PrtnPlacementRoundResultAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare placementRoundResultId: string
  declare placementInterviewRoundId: string
  declare placementApplicationId: string
  declare placementDriveId: string
  declare result: string
  declare score: number | null
  declare interviewerName: string | null
  declare feedback: string | null
  declare evaluatedAt: Date | null
  declare recordedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnPlacementRoundResultEntity(sequelize: Sequelize): typeof PrtnPlacementRoundResultEntity {
  PrtnPlacementRoundResultEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
      },
      publicId: {
        type: DataTypes.TEXT,
        field: 'public_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('prtn_placement_round_result')"),
      },
      placementRoundResultId: {
        type: DataTypes.TEXT,
        field: 'placement_round_result_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      placementInterviewRoundId: {
        type: DataTypes.TEXT,
        field: 'placement_interview_round_id',
        allowNull: false,
        references: { model: 'prtn_placement_interview_round', key: 'placement_interview_round_id' },
        onDelete: 'CASCADE',
      },
      placementApplicationId: {
        type: DataTypes.TEXT,
        field: 'placement_application_id',
        allowNull: false,
        references: { model: 'prtn_placement_application', key: 'placement_application_id' },
      },
      placementDriveId: {
        type: DataTypes.TEXT,
        field: 'placement_drive_id',
        allowNull: false,
      },
      result: {
        type: DataTypes.TEXT,
        field: 'result',
        allowNull: false,
        defaultValue: "pending",
      },
      score: {
        type: DataTypes.DECIMAL(5, 2),
        field: 'score',
        allowNull: true,
      },
      interviewerName: {
        type: DataTypes.TEXT,
        field: 'interviewer_name',
        allowNull: true,
      },
      feedback: {
        type: DataTypes.TEXT,
        field: 'feedback',
        allowNull: true,
      },
      evaluatedAt: {
        type: DataTypes.DATE,
        field: 'evaluated_at',
        allowNull: true,
      },
      recordedByUserId: {
        type: DataTypes.TEXT,
        field: 'recorded_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      createdBy: {
        type: DataTypes.UUID,
        field: 'created_by',
        allowNull: true,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedBy: {
        type: DataTypes.UUID,
        field: 'updated_by',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'prtn_placement_round_result',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['placement_interview_round_id', 'placement_application_id'] }
      ]
    }
  )
  return PrtnPlacementRoundResultEntity
}
