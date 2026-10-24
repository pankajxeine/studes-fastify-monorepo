import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamUserSessionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  userSessionId?: string
  appUserId: string
  tokenHash: string
  campusId?: string | null
  clientType?: string
  ipAddress?: string | null
  userAgent?: string | null
  startedAt?: Date
  lastSeenAt?: Date
  expiresAt: Date
  endedAt?: Date | null
  endReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IamUserSessionCreationAttributes = Optional<IamUserSessionAttributes, "id" | "publicId" | "recordCode" | "userSessionId" | "campusId" | "clientType" | "ipAddress" | "userAgent" | "startedAt" | "lastSeenAt" | "endedAt" | "endReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IamUserSessionEntity
  extends Model<IamUserSessionAttributes, IamUserSessionCreationAttributes>
  implements IamUserSessionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare userSessionId: string
  declare appUserId: string
  declare tokenHash: string
  declare campusId: string | null
  declare clientType: string
  declare ipAddress: string | null
  declare userAgent: string | null
  declare startedAt: Date
  declare lastSeenAt: Date
  declare expiresAt: Date
  declare endedAt: Date | null
  declare endReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initIamUserSessionEntity(sequelize: Sequelize): typeof IamUserSessionEntity {
  IamUserSessionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_user_session')"),
      },
      userSessionId: {
        type: DataTypes.TEXT,
        field: 'user_session_id',
        allowNull: false,
        unique: true,
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
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
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
      tableName: 'iam_user_session',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['token_hash'] }
      ]
    }
  )
  return IamUserSessionEntity
}
