import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type HstlOutpassAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  outpassId?: string
  outpassNo: string
  studentId: string
  hostelId: string
  outpassType: string
  reason: string
  destination: string
  escortName?: string | null
  escortPhone?: string | null
  plannedOutAt: Date
  expectedReturnAt: Date
  period?: string | null
  status?: string
  requestedAt?: Date
  requestedByUserId?: string | null
  hasGuardianConsent?: string
  approvedByUserId?: string | null
  approvedAt?: Date | null
  rejectionReason?: string | null
  checkedOutAt?: Date | null
  checkedOutByUserId?: string | null
  returnedAt?: Date | null
  isLateReturn?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type HstlOutpassCreationAttributes = Optional<HstlOutpassAttributes, "id" | "publicId" | "recordCode" | "outpassId" | "escortName" | "escortPhone" | "period" | "status" | "requestedAt" | "requestedByUserId" | "hasGuardianConsent" | "approvedByUserId" | "approvedAt" | "rejectionReason" | "checkedOutAt" | "checkedOutByUserId" | "returnedAt" | "isLateReturn" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class HstlOutpassEntity
  extends Model<HstlOutpassAttributes, HstlOutpassCreationAttributes>
  implements HstlOutpassAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare outpassId: string
  declare outpassNo: string
  declare studentId: string
  declare hostelId: string
  declare outpassType: string
  declare reason: string
  declare destination: string
  declare escortName: string | null
  declare escortPhone: string | null
  declare plannedOutAt: Date
  declare expectedReturnAt: Date
  declare period: string | null
  declare status: string
  declare requestedAt: Date
  declare requestedByUserId: string | null
  declare hasGuardianConsent: string
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare rejectionReason: string | null
  declare checkedOutAt: Date | null
  declare checkedOutByUserId: string | null
  declare returnedAt: Date | null
  declare isLateReturn: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initHstlOutpassEntity(sequelize: Sequelize): typeof HstlOutpassEntity {
  HstlOutpassEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('hstl_outpass')"),
      },
      outpassId: {
        type: DataTypes.TEXT,
        field: 'outpass_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      outpassNo: {
        type: DataTypes.STRING(20),
        field: 'outpass_no',
        allowNull: false,
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      hostelId: {
        type: DataTypes.TEXT,
        field: 'hostel_id',
        allowNull: false,
        references: { model: 'hstl_hostel', key: 'hostel_id' },
      },
      outpassType: {
        type: DataTypes.STRING(20),
        field: 'outpass_type',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      destination: {
        type: DataTypes.TEXT,
        field: 'destination',
        allowNull: false,
      },
      escortName: {
        type: DataTypes.TEXT,
        field: 'escort_name',
        allowNull: true,
      },
      escortPhone: {
        type: DataTypes.TEXT,
        field: 'escort_phone',
        allowNull: true,
      },
      plannedOutAt: {
        type: DataTypes.DATE,
        field: 'planned_out_at',
        allowNull: false,
      },
      expectedReturnAt: {
        type: DataTypes.DATE,
        field: 'expected_return_at',
        allowNull: false,
      },
      period: {
        type: DataTypes.TEXT,
        field: 'period',
        allowNull: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "requested",
      },
      requestedAt: {
        type: DataTypes.DATE,
        field: 'requested_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      requestedByUserId: {
        type: DataTypes.TEXT,
        field: 'requested_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      hasGuardianConsent: {
        type: DataTypes.TEXT,
        field: 'has_guardian_consent',
        allowNull: false,
        defaultValue: false,
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
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
        allowNull: true,
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
      returnedAt: {
        type: DataTypes.DATE,
        field: 'returned_at',
        allowNull: true,
      },
      isLateReturn: {
        type: DataTypes.TEXT,
        field: 'is_late_return',
        allowNull: true,
        autoIncrement: true,
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
      tableName: 'hstl_outpass',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['outpass_no'] }
      ]
    }
  )
  return HstlOutpassEntity
}
