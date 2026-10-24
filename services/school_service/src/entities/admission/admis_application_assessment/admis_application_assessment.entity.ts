import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AdmisApplicationAssessmentAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  applicationAssessmentId?: string
  applicationId: string
  assessorStaffId?: string | null
  roomId?: string | null
  assessmentType: string
  scheduledAt: Date
  endsAt: Date
  slot?: string | null
  status?: string
  score?: number | null
  maxScore?: number | null
  result?: string | null
  remarks?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AdmisApplicationAssessmentCreationAttributes = Optional<AdmisApplicationAssessmentAttributes, "id" | "publicId" | "recordCode" | "applicationAssessmentId" | "assessorStaffId" | "roomId" | "slot" | "status" | "score" | "maxScore" | "result" | "remarks" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AdmisApplicationAssessmentEntity
  extends Model<AdmisApplicationAssessmentAttributes, AdmisApplicationAssessmentCreationAttributes>
  implements AdmisApplicationAssessmentAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare applicationAssessmentId: string
  declare applicationId: string
  declare assessorStaffId: string | null
  declare roomId: string | null
  declare assessmentType: string
  declare scheduledAt: Date
  declare endsAt: Date
  declare slot: string | null
  declare status: string
  declare score: number | null
  declare maxScore: number | null
  declare result: string | null
  declare remarks: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAdmisApplicationAssessmentEntity(sequelize: Sequelize): typeof AdmisApplicationAssessmentEntity {
  AdmisApplicationAssessmentEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'admis_application_assessment'\r\n    )"),
      },
      applicationAssessmentId: {
        type: DataTypes.TEXT,
        field: 'application_assessment_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'admis_application', key: 'application_id' },
        onDelete: 'CASCADE',
      },
      assessorStaffId: {
        type: DataTypes.TEXT,
        field: 'assessor_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      assessmentType: {
        type: DataTypes.STRING(20),
        field: 'assessment_type',
        allowNull: false,
      },
      scheduledAt: {
        type: DataTypes.DATE,
        field: 'scheduled_at',
        allowNull: false,
      },
      endsAt: {
        type: DataTypes.DATE,
        field: 'ends_at',
        allowNull: false,
      },
      slot: {
        type: DataTypes.TEXT,
        field: 'slot',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "scheduled",
      },
      score: {
        type: DataTypes.DECIMAL(5, 2),
        field: 'score',
        allowNull: true,
      },
      maxScore: {
        type: DataTypes.DECIMAL(5, 2),
        field: 'max_score',
        allowNull: true,
      },
      result: {
        type: DataTypes.STRING(20),
        field: 'result',
        allowNull: true,
      },
      remarks: {
        type: DataTypes.TEXT,
        field: 'remarks',
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
      tableName: 'admis_application_assessment',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AdmisApplicationAssessmentEntity
}
