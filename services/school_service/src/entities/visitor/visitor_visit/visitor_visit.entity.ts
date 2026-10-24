import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type VisitorVisitAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  visitId?: string
  visitNo: string
  guestId: string
  campusId: string
  hostPersonId?: string | null
  purpose: string
  purposeDetail?: string | null
  status?: string
  checkInMethod?: string | null
  expectedAt?: Date | null
  expectedUntil?: Date | null
  preRegisteredByUserId?: string | null
  partySize?: number
  destinationRoomId?: string | null
  escortPersonId?: string | null
  badgeNo?: string | null
  vehicleNo?: string | null
  itemsDeclared?: string | null
  checkedInAt?: Date | null
  checkedInByUserId?: string | null
  checkedOutAt?: Date | null
  checkedOutByUserId?: string | null
  watchlistId?: string | null
  deniedReason?: string | null
  cancelledReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type VisitorVisitCreationAttributes = Optional<VisitorVisitAttributes, "id" | "publicId" | "recordCode" | "visitId" | "hostPersonId" | "purposeDetail" | "status" | "checkInMethod" | "expectedAt" | "expectedUntil" | "preRegisteredByUserId" | "partySize" | "destinationRoomId" | "escortPersonId" | "badgeNo" | "vehicleNo" | "itemsDeclared" | "checkedInAt" | "checkedInByUserId" | "checkedOutAt" | "checkedOutByUserId" | "watchlistId" | "deniedReason" | "cancelledReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class VisitorVisitEntity
  extends Model<VisitorVisitAttributes, VisitorVisitCreationAttributes>
  implements VisitorVisitAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare visitId: string
  declare visitNo: string
  declare guestId: string
  declare campusId: string
  declare hostPersonId: string | null
  declare purpose: string
  declare purposeDetail: string | null
  declare status: string
  declare checkInMethod: string | null
  declare expectedAt: Date | null
  declare expectedUntil: Date | null
  declare preRegisteredByUserId: string | null
  declare partySize: number
  declare destinationRoomId: string | null
  declare escortPersonId: string | null
  declare badgeNo: string | null
  declare vehicleNo: string | null
  declare itemsDeclared: string | null
  declare checkedInAt: Date | null
  declare checkedInByUserId: string | null
  declare checkedOutAt: Date | null
  declare checkedOutByUserId: string | null
  declare watchlistId: string | null
  declare deniedReason: string | null
  declare cancelledReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initVisitorVisitEntity(sequelize: Sequelize): typeof VisitorVisitEntity {
  VisitorVisitEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('visitor_visit')"),
      },
      visitId: {
        type: DataTypes.TEXT,
        field: 'visit_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      visitNo: {
        type: DataTypes.STRING(30),
        field: 'visit_no',
        allowNull: false,
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
      hostPersonId: {
        type: DataTypes.TEXT,
        field: 'host_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      purpose: {
        type: DataTypes.STRING(30),
        field: 'purpose',
        allowNull: false,
      },
      purposeDetail: {
        type: DataTypes.TEXT,
        field: 'purpose_detail',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pre_registered",
      },
      checkInMethod: {
        type: DataTypes.STRING(20),
        field: 'check_in_method',
        allowNull: true,
      },
      expectedAt: {
        type: DataTypes.DATE,
        field: 'expected_at',
        allowNull: true,
      },
      expectedUntil: {
        type: DataTypes.DATE,
        field: 'expected_until',
        allowNull: true,
      },
      preRegisteredByUserId: {
        type: DataTypes.TEXT,
        field: 'pre_registered_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      partySize: {
        type: DataTypes.SMALLINT,
        field: 'party_size',
        allowNull: false,
        defaultValue: 1,
      },
      destinationRoomId: {
        type: DataTypes.TEXT,
        field: 'destination_room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      escortPersonId: {
        type: DataTypes.TEXT,
        field: 'escort_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
      },
      badgeNo: {
        type: DataTypes.STRING(20),
        field: 'badge_no',
        allowNull: true,
      },
      vehicleNo: {
        type: DataTypes.STRING(20),
        field: 'vehicle_no',
        allowNull: true,
      },
      itemsDeclared: {
        type: DataTypes.TEXT,
        field: 'items_declared',
        allowNull: true,
      },
      checkedInAt: {
        type: DataTypes.DATE,
        field: 'checked_in_at',
        allowNull: true,
      },
      checkedInByUserId: {
        type: DataTypes.TEXT,
        field: 'checked_in_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      checkedOutAt: {
        type: DataTypes.DATE,
        field: 'checked_out_at',
        allowNull: true,
      },
      checkedOutByUserId: {
        type: DataTypes.TEXT,
        field: 'checked_out_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      watchlistId: {
        type: DataTypes.TEXT,
        field: 'watchlist_id',
        allowNull: true,
        references: { model: 'visitor_watchlist', key: 'watchlist_id' },
      },
      deniedReason: {
        type: DataTypes.TEXT,
        field: 'denied_reason',
        allowNull: true,
      },
      cancelledReason: {
        type: DataTypes.TEXT,
        field: 'cancelled_reason',
        allowNull: true,
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
      tableName: 'visitor_visit',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['visit_no'] }
      ]
    }
  )
  return VisitorVisitEntity
}
