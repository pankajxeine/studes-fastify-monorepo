import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type VisitorGatePassAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  gatePassId?: string
  passNo: string
  studentId: string
  campusId: string
  passType: string
  reason: string
  status?: string
  outFrom: Date
  validUntil: Date
  passWindow?: string | null
  isReturnExpected?: string
  pickupPersonId?: string | null
  requestedByUserId?: string | null
  requestedAt?: Date
  approvedByUserId?: string | null
  approvedAt?: Date | null
  rejectionReason?: string | null
  verificationCode: string
  guardianNotifiedAt?: Date | null
  exitedAt?: Date | null
  exitRecordedByUserId?: string | null
  pickupIdVerified?: string
  returnedAt?: Date | null
  returnRecordedByUserId?: string | null
  cancelledReason?: string | null
  notes?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type VisitorGatePassCreationAttributes = Optional<VisitorGatePassAttributes, "id" | "publicId" | "recordCode" | "gatePassId" | "status" | "passWindow" | "isReturnExpected" | "pickupPersonId" | "requestedByUserId" | "requestedAt" | "approvedByUserId" | "approvedAt" | "rejectionReason" | "guardianNotifiedAt" | "exitedAt" | "exitRecordedByUserId" | "pickupIdVerified" | "returnedAt" | "returnRecordedByUserId" | "cancelledReason" | "notes" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class VisitorGatePassEntity
  extends Model<VisitorGatePassAttributes, VisitorGatePassCreationAttributes>
  implements VisitorGatePassAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare gatePassId: string
  declare passNo: string
  declare studentId: string
  declare campusId: string
  declare passType: string
  declare reason: string
  declare status: string
  declare outFrom: Date
  declare validUntil: Date
  declare passWindow: string | null
  declare isReturnExpected: string
  declare pickupPersonId: string | null
  declare requestedByUserId: string | null
  declare requestedAt: Date
  declare approvedByUserId: string | null
  declare approvedAt: Date | null
  declare rejectionReason: string | null
  declare verificationCode: string
  declare guardianNotifiedAt: Date | null
  declare exitedAt: Date | null
  declare exitRecordedByUserId: string | null
  declare pickupIdVerified: string
  declare returnedAt: Date | null
  declare returnRecordedByUserId: string | null
  declare cancelledReason: string | null
  declare notes: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initVisitorGatePassEntity(sequelize: Sequelize): typeof VisitorGatePassEntity {
  VisitorGatePassEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('visitor_gate_pass')"),
      },
      gatePassId: {
        type: DataTypes.TEXT,
        field: 'gate_pass_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      passNo: {
        type: DataTypes.STRING(30),
        field: 'pass_no',
        allowNull: false,
      },
      studentId: {
        type: DataTypes.TEXT,
        field: 'student_id',
        allowNull: false,
        references: { model: 'sis_student', key: 'student_id' },
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: false,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      passType: {
        type: DataTypes.STRING(20),
        field: 'pass_type',
        allowNull: false,
      },
      reason: {
        type: DataTypes.TEXT,
        field: 'reason',
        allowNull: false,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "requested",
      },
      outFrom: {
        type: DataTypes.DATE,
        field: 'out_from',
        allowNull: false,
      },
      validUntil: {
        type: DataTypes.DATE,
        field: 'valid_until',
        allowNull: false,
      },
      passWindow: {
        type: DataTypes.TEXT,
        field: 'pass_window',
        allowNull: true,
        autoIncrement: true,
      },
      isReturnExpected: {
        type: DataTypes.TEXT,
        field: 'is_return_expected',
        allowNull: false,
        defaultValue: false,
      },
      pickupPersonId: {
        type: DataTypes.TEXT,
        field: 'pickup_person_id',
        allowNull: true,
        references: { model: 'ppl_person', key: 'person_id' },
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
      verificationCode: {
        type: DataTypes.STRING(12),
        field: 'verification_code',
        allowNull: false,
      },
      guardianNotifiedAt: {
        type: DataTypes.DATE,
        field: 'guardian_notified_at',
        allowNull: true,
      },
      exitedAt: {
        type: DataTypes.DATE,
        field: 'exited_at',
        allowNull: true,
      },
      exitRecordedByUserId: {
        type: DataTypes.TEXT,
        field: 'exit_recorded_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      pickupIdVerified: {
        type: DataTypes.TEXT,
        field: 'pickup_id_verified',
        allowNull: false,
        defaultValue: false,
      },
      returnedAt: {
        type: DataTypes.DATE,
        field: 'returned_at',
        allowNull: true,
      },
      returnRecordedByUserId: {
        type: DataTypes.TEXT,
        field: 'return_recorded_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      tableName: 'visitor_gate_pass',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['pass_no'] },
      { unique: true, fields: ['verification_code'] }
      ]
    }
  )
  return VisitorGatePassEntity
}
