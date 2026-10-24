import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type AlumniMentorshipAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  mentorshipId?: string
  mentorAlumnusId: string
  menteeStudentId: string
  status?: string
  focusArea: string
  goals?: string | null
  meetingFrequency?: string
  requestedByUserId?: string | null
  requestedAt?: Date
  respondedAt?: Date | null
  startedOn?: Date | null
  endedOn?: Date | null
  declineReason?: string | null
  menteeRating?: number | null
  menteeFeedback?: string | null
  mentorNotes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type AlumniMentorshipCreationAttributes = Optional<AlumniMentorshipAttributes, "id" | "publicId" | "recordCode" | "mentorshipId" | "status" | "goals" | "meetingFrequency" | "requestedByUserId" | "requestedAt" | "respondedAt" | "startedOn" | "endedOn" | "declineReason" | "menteeRating" | "menteeFeedback" | "mentorNotes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class AlumniMentorshipEntity
  extends Model<AlumniMentorshipAttributes, AlumniMentorshipCreationAttributes>
  implements AlumniMentorshipAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare mentorshipId: string
  declare mentorAlumnusId: string
  declare menteeStudentId: string
  declare status: string
  declare focusArea: string
  declare goals: string | null
  declare meetingFrequency: string
  declare requestedByUserId: string | null
  declare requestedAt: Date
  declare respondedAt: Date | null
  declare startedOn: Date | null
  declare endedOn: Date | null
  declare declineReason: string | null
  declare menteeRating: number | null
  declare menteeFeedback: string | null
  declare mentorNotes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initAlumniMentorshipEntity(sequelize: Sequelize): typeof AlumniMentorshipEntity {
  AlumniMentorshipEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('alumni_mentorship')"),
      },
      mentorshipId: {
        type: DataTypes.TEXT,
        field: 'mentorship_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      mentorAlumnusId: {
        type: DataTypes.TEXT,
        field: 'mentor_alumnus_id',
        allowNull: false,
        references: { model: 'alumni_alumnus', key: 'alumnus_id' },
      },
      menteeStudentId: {
        type: DataTypes.TEXT,
        field: 'mentee_student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "requested",
      },
      focusArea: {
        type: DataTypes.TEXT,
        field: 'focus_area',
        allowNull: false,
      },
      goals: {
        type: DataTypes.TEXT,
        field: 'goals',
        allowNull: true,
      },
      meetingFrequency: {
        type: DataTypes.STRING(20),
        field: 'meeting_frequency',
        allowNull: false,
        defaultValue: "monthly",
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      requestedAt: {
        type: DataTypes.DATE,
        field: 'requested_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      respondedAt: {
        type: DataTypes.DATE,
        field: 'responded_at',
        allowNull: true,
      },
      startedOn: {
        type: DataTypes.DATEONLY,
        field: 'started_on',
        allowNull: true,
      },
      endedOn: {
        type: DataTypes.DATEONLY,
        field: 'ended_on',
        allowNull: true,
      },
      declineReason: {
        type: DataTypes.TEXT,
        field: 'decline_reason',
        allowNull: true,
      },
      menteeRating: {
        type: DataTypes.SMALLINT,
        field: 'mentee_rating',
        allowNull: true,
      },
      menteeFeedback: {
        type: DataTypes.TEXT,
        field: 'mentee_feedback',
        allowNull: true,
      },
      mentorNotes: {
        type: DataTypes.TEXT,
        field: 'mentor_notes',
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
      tableName: 'alumni_mentorship',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return AlumniMentorshipEntity
}
