import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamPrivilegedAccessRequestAttributes = {
  recordCode?: string
  requestId: string | null
  appUserId: string
  roleCode: string
  scopeType?: string
  scopeId?: string | null
  justification: string
  ticketRef?: string | null
  requestedMinutes: number
  status?: string
  decidedByUserId?: string | null
  decidedAt?: Date | null
  decisionNote?: string | null
  requestedAt?: Date
}

export type IamPrivilegedAccessRequestCreationAttributes = Optional<IamPrivilegedAccessRequestAttributes, "recordCode" | "scopeType" | "scopeId" | "ticketRef" | "status" | "decidedByUserId" | "decidedAt" | "decisionNote" | "requestedAt">

export class IamPrivilegedAccessRequestEntity
  extends Model<IamPrivilegedAccessRequestAttributes, IamPrivilegedAccessRequestCreationAttributes>
  implements IamPrivilegedAccessRequestAttributes
{
  declare recordCode: string
  declare requestId: string | null
  declare appUserId: string
  declare roleCode: string
  declare scopeType: string
  declare scopeId: string | null
  declare justification: string
  declare ticketRef: string | null
  declare requestedMinutes: number
  declare status: string
  declare decidedByUserId: string | null
  declare decidedAt: Date | null
  declare decisionNote: string | null
  declare requestedAt: Date
}

export function initIamPrivilegedAccessRequestEntity(sequelize: Sequelize): typeof IamPrivilegedAccessRequestEntity {
  IamPrivilegedAccessRequestEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table (\r\n        'iam_privileged_access_request'\r\n    )"),
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      roleCode: {
        type: DataTypes.TEXT,
        field: 'role_code',
        allowNull: false,
        references: { model: 'iam_role', key: 'role_code' },
        onUpdate: 'CASCADE',
      },
      scopeType: {
        type: DataTypes.TEXT,
        field: 'scope_type',
        allowNull: false,
        defaultValue: "global",
      },
      scopeId: {
        type: DataTypes.UUID,
        field: 'scope_id',
        allowNull: true,
      },
      justification: {
        type: DataTypes.TEXT,
        field: 'justification',
        allowNull: false,
      },
      ticketRef: {
        type: DataTypes.STRING(40),
        field: 'ticket_ref',
        allowNull: true,
      },
      requestedMinutes: {
        type: DataTypes.INTEGER,
        field: 'requested_minutes',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      decidedByUserId: {
        type: DataTypes.TEXT,
        field: 'decided_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      decidedAt: {
        type: DataTypes.DATE,
        field: 'decided_at',
        allowNull: true,
      },
      decisionNote: {
        type: DataTypes.TEXT,
        field: 'decision_note',
        allowNull: true,
      },
      requestedAt: {
        type: DataTypes.DATE,
        field: 'requested_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'iam_privileged_access_request',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamPrivilegedAccessRequestEntity
}
