import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type VisitorGuestLectureAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  guestLectureId?: string
  guestId: string
  campusId: string
  courseOfferingId?: string | null
  eventId?: string | null
  coordinatorStaffId: string
  roomId?: string | null
  visitId?: string | null
  title: string
  abstract?: string | null
  startsAt: Date
  endsAt: Date
  lecturePeriod?: string | null
  status?: string
  expectedAudience?: number | null
  actualAttendance?: number | null
  honorariumAmount?: string
  honorariumStatus?: string
  posterFileId?: string | null
  feedbackRating?: number | null
  cancelledReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type VisitorGuestLectureCreationAttributes = Optional<VisitorGuestLectureAttributes, "id" | "publicId" | "recordCode" | "guestLectureId" | "courseOfferingId" | "eventId" | "roomId" | "visitId" | "abstract" | "lecturePeriod" | "status" | "expectedAudience" | "actualAttendance" | "honorariumAmount" | "honorariumStatus" | "posterFileId" | "feedbackRating" | "cancelledReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class VisitorGuestLectureEntity
  extends Model<VisitorGuestLectureAttributes, VisitorGuestLectureCreationAttributes>
  implements VisitorGuestLectureAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare guestLectureId: string
  declare guestId: string
  declare campusId: string
  declare courseOfferingId: string | null
  declare eventId: string | null
  declare coordinatorStaffId: string
  declare roomId: string | null
  declare visitId: string | null
  declare title: string
  declare abstract: string | null
  declare startsAt: Date
  declare endsAt: Date
  declare lecturePeriod: string | null
  declare status: string
  declare expectedAudience: number | null
  declare actualAttendance: number | null
  declare honorariumAmount: string
  declare honorariumStatus: string
  declare posterFileId: string | null
  declare feedbackRating: number | null
  declare cancelledReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initVisitorGuestLectureEntity(sequelize: Sequelize): typeof VisitorGuestLectureEntity {
  VisitorGuestLectureEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('visitor_guest_lecture')"),
      },
      guestLectureId: {
        type: DataTypes.TEXT,
        field: 'guest_lecture_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      guestId: {
        type: DataTypes.TEXT,
        field: 'guest_id',
        allowNull: false,
        references: { model: 'visitor_guest', key: 'guest_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      courseOfferingId: {
        type: DataTypes.TEXT,
        field: 'course_offering_id',
        allowNull: true,
        references: { model: 'acad_course_offering', key: 'course_offering_id' },
      },
      eventId: {
        type: DataTypes.TEXT,
        field: 'event_id',
        allowNull: true,
        references: { model: 'evnt_event', key: 'event_id' },
      },
      coordinatorStaffId: {
        type: DataTypes.TEXT,
        field: 'coordinator_staff_id',
        allowNull: false,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      roomId: {
        type: DataTypes.TEXT,
        field: 'room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      visitId: {
        type: DataTypes.TEXT,
        field: 'visit_id',
        allowNull: true,
        references: { model: 'visitor_visit', key: 'visit_id' },
      },
      title: {
        type: DataTypes.TEXT,
        field: 'title',
        allowNull: false,
      },
      abstract: {
        type: DataTypes.TEXT,
        field: 'abstract',
        allowNull: true,
      },
      startsAt: {
        type: DataTypes.DATE,
        field: 'starts_at',
        allowNull: false,
      },
      endsAt: {
        type: DataTypes.DATE,
        field: 'ends_at',
        allowNull: false,
      },
      lecturePeriod: {
        type: DataTypes.TEXT,
        field: 'lecture_period',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "proposed",
      },
      expectedAudience: {
        type: DataTypes.SMALLINT,
        field: 'expected_audience',
        allowNull: true,
      },
      actualAttendance: {
        type: DataTypes.SMALLINT,
        field: 'actual_attendance',
        allowNull: true,
      },
      honorariumAmount: {
        type: DataTypes.TEXT,
        field: 'honorarium_amount',
        allowNull: false,
        defaultValue: 0,
      },
      honorariumStatus: {
        type: DataTypes.STRING(20),
        field: 'honorarium_status',
        allowNull: false,
        defaultValue: "not_applicable",
      },
      posterFileId: {
        type: DataTypes.TEXT,
        field: 'poster_file_id',
        allowNull: true,
        references: { model: 'docs_file', key: 'file_id' },
      },
      feedbackRating: {
        type: DataTypes.DECIMAL(3, 2),
        field: 'feedback_rating',
        allowNull: true,
      },
      cancelledReason: {
        type: DataTypes.TEXT,
        field: 'cancelled_reason',
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
      tableName: 'visitor_guest_lecture',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['visit_id'] }
      ]
    }
  )
  return VisitorGuestLectureEntity
}
