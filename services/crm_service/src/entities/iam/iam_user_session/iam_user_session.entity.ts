import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamUserSessionAttributes = {
  recordCode?: string
  userSessionId: string | null
  appUserId: string
  tokenHash: string
  scopeType?: string
  scopeId?: string | null
  authMethod?: string
  mfaVerifiedAt?: Date | null
  impersonatingTenantId?: string | null
  impersonationReason?: string | null
  clientType?: string
  ipAddress?: string | null
  userAgent?: string | null
  startedAt?: Date
  lastSeenAt?: Date
  idleExpiresAt: Date
  expiresAt: Date
  endedAt?: Date | null
  endReason?: string | null
}

export type IamUserSessionCreationAttributes = Optional<IamUserSessionAttributes, "recordCode" | "scopeType" | "scopeId" | "authMethod" | "mfaVerifiedAt" | "impersonatingTenantId" | "impersonationReason" | "clientType" | "ipAddress" | "userAgent" | "startedAt" | "lastSeenAt" | "endedAt" | "endReason">

export class IamUserSessionEntity
  extends Model<IamUserSessionAttributes, IamUserSessionCreationAttributes>
  implements IamUserSessionAttributes
{
  declare recordCode: string
  declare userSessionId: string | null
  declare appUserId: string
  declare tokenHash: string
  declare scopeType: string
  declare scopeId: string | null
  declare authMethod: string
  declare mfaVerifiedAt: Date | null
  declare impersonatingTenantId: string | null
  declare impersonationReason: string | null
  declare clientType: string
  declare ipAddress: string | null
  declare userAgent: string | null
  declare startedAt: Date
  declare lastSeenAt: Date
  declare idleExpiresAt: Date
  declare expiresAt: Date
  declare endedAt: Date | null
  declare endReason: string | null
}

export function initIamUserSessionEntity(sequelize: Sequelize): typeof IamUserSessionEntity {
  IamUserSessionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_user_session')"),
      },
      userSessionId: {
        type: DataTypes.TEXT,
        field: 'user_session_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        references: { model: 'iam_app_user', key: 'app_user_id' },
        onDelete: 'CASCADE',
      },
      tokenHash: {
        type: DataTypes.TEXT,
        field: 'token_hash',
        allowNull: false,
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
      authMethod: {
        type: DataTypes.STRING(10),
        field: 'auth_method',
        allowNull: false,
        defaultValue: "password",
      },
      mfaVerifiedAt: {
        type: DataTypes.DATE,
        field: 'mfa_verified_at',
        allowNull: true,
      },
      impersonatingTenantId: {
        type: DataTypes.UUID,
        field: 'impersonating_tenant_id',
        allowNull: true,
      },
      impersonationReason: {
        type: DataTypes.TEXT,
        field: 'impersonation_reason',
        allowNull: true,
      },
      clientType: {
        type: DataTypes.STRING(10),
        field: 'client_type',
        allowNull: false,
        defaultValue: "web",
      },
      ipAddress: {
        type: DataTypes.TEXT,
        field: 'ip_address',
        allowNull: true,
      },
      userAgent: {
        type: DataTypes.TEXT,
        field: 'user_agent',
        allowNull: true,
      },
      startedAt: {
        type: DataTypes.DATE,
        field: 'started_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      lastSeenAt: {
        type: DataTypes.DATE,
        field: 'last_seen_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      idleExpiresAt: {
        type: DataTypes.DATE,
        field: 'idle_expires_at',
        allowNull: false,
      },
      expiresAt: {
        type: DataTypes.DATE,
        field: 'expires_at',
        allowNull: false,
      },
      endedAt: {
        type: DataTypes.DATE,
        field: 'ended_at',
        allowNull: true,
      },
      endReason: {
        type: DataTypes.STRING(20),
        field: 'end_reason',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'iam_user_session',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['token_hash'] }
      ]
    }
  )
  return IamUserSessionEntity
}
