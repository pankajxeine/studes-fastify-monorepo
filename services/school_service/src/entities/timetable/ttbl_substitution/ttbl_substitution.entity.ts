import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type TtblSubstitutionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  substitutionId?: string
  timetableEntryId: string
  substitutionDate: string
  substituteStaffId?: string | null
  substituteRoomId?: string | null
  isClassCancelled?: string
  reason: string
  leaveRequestId?: string | null
  status?: string
  requestedByUserId?: string | null
  approvedByUserId?: string | null
  approvedAt?: Date | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type TtblSubstitutionCreationAttributes = Optional<TtblSubstitutionAttributes, "id" | "publicId" | "recordCode" | "substitutionId" | "substituteStaffId" | "substituteRoomId" | "isClassCancelled" | "leaveRequestId" | "status" | "requestedByUserId" | "approvedByUserId" | "approvedAt" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class TtblSubstitutionEntity
  extends Model<TtblSubstitutionAttributes, TtblSubstitutionCreationAttributes>
  implements TtblSubstitutionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare substitutionId: string
  declare timetableEntryId: string
  declare substitutionDate: string
  declare substituteStaffId: string | null
  declare substituteRoomId: string | null
  declare isClassCancelled: string
  declare reason: string
  declare leaveRequestId: string | null
  declare status: string
  declare requestedByUserId: string | null
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initTtblSubstitutionEntity(sequelize: Sequelize): typeof TtblSubstitutionEntity {
  TtblSubstitutionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('ttbl_substitution')"),
      },
      substitutionId: {
        type: DataTypes.TEXT,
        field: 'substitution_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      timetableEntryId: {
        type: DataTypes.TEXT,
        field: 'timetable_entry_id',
        allowNull: false,
        references: { model: 'ttbl_timetable_entry', key: 'timetable_entry_id' },
      },
      substitutionDate: {
        type: DataTypes.TEXT,
        field: 'substitution_date',
        allowNull: false,
      },
      substituteStaffId: {
        type: DataTypes.TEXT,
        field: 'substitute_staff_id',
        allowNull: true,
        references: { model: 'hr_staff', key: 'staff_id' },
      },
      substituteRoomId: {
        type: DataTypes.TEXT,
        field: 'substitute_room_id',
        allowNull: true,
        references: { model: 'org_room', key: 'room_id' },
      },
      isClassCancelled: {
        type: DataTypes.TEXT,
        field: 'is_class_cancelled',
        allowNull: false,
        defaultValue: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      leaveRequestId: {
        type: DataTypes.TEXT,
        field: 'leave_request_id',
        allowNull: true,
        references: { model: 'hr_leave_request', key: 'leave_request_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedByUserId: {
        type: DataTypes.TEXT,
        field: 'approved_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
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
      tableName: 'ttbl_substitution',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return TtblSubstitutionEntity
}
