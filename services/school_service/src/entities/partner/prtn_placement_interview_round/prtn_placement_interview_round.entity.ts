import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PrtnPlacementInterviewRoundAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  placementInterviewRoundId?: string
  placementDriveId: string
  roundNo: number
  name: string
  roundType: string
  mode?: string
  scheduledAt?: Date | null
  durationMinutes?: number | null
  venue?: string | null
  meetingUrl?: string | null
  isElimination?: string
  status?: string
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type PrtnPlacementInterviewRoundCreationAttributes = Optional<PrtnPlacementInterviewRoundAttributes, "id" | "publicId" | "recordCode" | "placementInterviewRoundId" | "mode" | "scheduledAt" | "durationMinutes" | "venue" | "meetingUrl" | "isElimination" | "status" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class PrtnPlacementInterviewRoundEntity
  extends Model<PrtnPlacementInterviewRoundAttributes, PrtnPlacementInterviewRoundCreationAttributes>
  implements PrtnPlacementInterviewRoundAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare placementInterviewRoundId: string
  declare placementDriveId: string
  declare roundNo: number
  declare name: string
  declare roundType: string
  declare mode: string
  declare scheduledAt: Date | null
  declare durationMinutes: number | null
  declare venue: string | null
  declare meetingUrl: string | null
  declare isElimination: string
  declare status: string
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initPrtnPlacementInterviewRoundEntity(sequelize: Sequelize): typeof PrtnPlacementInterviewRoundEntity {
  PrtnPlacementInterviewRoundEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'prtn_placement_interview_round'\r\n    )"),
      },
      placementInterviewRoundId: {
        type: DataTypes.TEXT,
        field: 'placement_interview_round_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      placementDriveId: {
        type: DataTypes.TEXT,
        field: 'placement_drive_id',
        allowNull: false,
        references: { model: 'prtn_placement_drive', key: 'placement_drive_id' },
        onDelete: 'CASCADE',
      },
      roundNo: {
        type: DataTypes.SMALLINT,
        field: 'round_no',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      roundType: {
        type: DataTypes.STRING(20),
        field: 'round_type',
        allowNull: false,
      },
      mode: {
        type: DataTypes.STRING(10),
        field: 'mode',
        allowNull: false,
        defaultValue: "onsite",
      },
      scheduledAt: {
        type: DataTypes.DATE,
        field: 'scheduled_at',
        allowNull: true,
      },
      durationMinutes: {
        type: DataTypes.SMALLINT,
        field: 'duration_minutes',
        allowNull: true,
      },
      venue: {
        type: DataTypes.TEXT,
        field: 'venue',
        allowNull: true,
      },
      meetingUrl: {
        type: DataTypes.TEXT,
        field: 'meeting_url',
        allowNull: true,
      },
      isElimination: {
        type: DataTypes.TEXT,
        field: 'is_elimination',
        allowNull: false,
        defaultValue: true,
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "scheduled",
      },
      notes: {
        type: DataTypes.TEXT,
        field: 'notes',
        allowNull: true,
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
      tableName: 'prtn_placement_interview_round',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['placement_drive_id', 'round_no'] },
      { unique: true, fields: ['placement_interview_round_id', 'placement_drive_id'] }
      ]
    }
  )
  return PrtnPlacementInterviewRoundEntity
}
