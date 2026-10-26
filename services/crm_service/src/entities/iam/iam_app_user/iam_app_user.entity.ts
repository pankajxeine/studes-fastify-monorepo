import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamAppUserAttributes = {
  recordCode?: string
  appUserId: string | null
  userType?: string
  username: string
  email: string
  fullName: string
  phone?: string | null
  employeeCode?: string | null
  passwordHash?: string | null
  ssoProvider?: string | null
  ssoSubject?: string | null
  status?: string
  defaultScopeType?: string
  defaultScopeId?: string | null
  managerUserId?: string | null
  lastLoginAt?: Date | null
  failedLoginCount?: number
  lockedUntil?: Date | null
  passwordChangedAt?: Date | null
  mustChangePassword?: string
  isMfaEnabled?: string
  locale?: string
  timezone?: string
  invitedAt?: Date | null
  activatedAt?: Date | null
  deactivatedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type IamAppUserCreationAttributes = Optional<IamAppUserAttributes, "recordCode" | "userType" | "phone" | "employeeCode" | "passwordHash" | "ssoProvider" | "ssoSubject" | "status" | "defaultScopeType" | "defaultScopeId" | "managerUserId" | "lastLoginAt" | "failedLoginCount" | "lockedUntil" | "passwordChangedAt" | "mustChangePassword" | "isMfaEnabled" | "locale" | "timezone" | "invitedAt" | "activatedAt" | "deactivatedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class IamAppUserEntity
  extends Model<IamAppUserAttributes, IamAppUserCreationAttributes>
  implements IamAppUserAttributes
{
  declare recordCode: string
  declare appUserId: string | null
  declare userType: string
  declare username: string
  declare email: string
  declare fullName: string
  declare phone: string | null
  declare employeeCode: string | null
  declare passwordHash: string | null
  declare ssoProvider: string | null
  declare ssoSubject: string | null
  declare status: string
  declare defaultScopeType: string
  declare defaultScopeId: string | null
  declare managerUserId: string | null
  declare lastLoginAt: Date | null
  declare failedLoginCount: number
  declare lockedUntil: Date | null
  declare passwordChangedAt: Date | null
  declare mustChangePassword: string
  declare isMfaEnabled: string
  declare locale: string
  declare timezone: string
  declare invitedAt: Date | null
  declare activatedAt: Date | null
  declare deactivatedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initIamAppUserEntity(sequelize: Sequelize): typeof IamAppUserEntity {
  IamAppUserEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_app_user')"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      userType: {
        type: DataTypes.TEXT,
        field: 'user_type',
        allowNull: false,
        defaultValue: "staff",
      },
      username: {
        type: DataTypes.STRING(60),
        field: 'username',
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: false,
      },
      fullName: {
        type: DataTypes.TEXT,
        field: 'full_name',
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      employeeCode: {
        type: DataTypes.STRING(30),
        field: 'employee_code',
        allowNull: true,
      },
      passwordHash: {
        type: DataTypes.TEXT,
        field: 'password_hash',
        allowNull: true,
      },
      ssoProvider: {
        type: DataTypes.STRING(30),
        field: 'sso_provider',
        allowNull: true,
      },
      ssoSubject: {
        type: DataTypes.TEXT,
        field: 'sso_subject',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "invited",
      },
      defaultScopeType: {
        type: DataTypes.TEXT,
        field: 'default_scope_type',
        allowNull: false,
        defaultValue: "global",
      },
      defaultScopeId: {
        type: DataTypes.UUID,
        field: 'default_scope_id',
        allowNull: true,
      },
      managerUserId: {
        type: DataTypes.TEXT,
        field: 'manager_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      lastLoginAt: {
        type: DataTypes.DATE,
        field: 'last_login_at',
        allowNull: true,
      },
      failedLoginCount: {
        type: DataTypes.SMALLINT,
        field: 'failed_login_count',
        allowNull: false,
        defaultValue: 0,
      },
      lockedUntil: {
        type: DataTypes.DATE,
        field: 'locked_until',
        allowNull: true,
      },
      passwordChangedAt: {
        type: DataTypes.DATE,
        field: 'password_changed_at',
        allowNull: true,
      },
      mustChangePassword: {
        type: DataTypes.TEXT,
        field: 'must_change_password',
        allowNull: false,
        defaultValue: false,
      },
      isMfaEnabled: {
        type: DataTypes.TEXT,
        field: 'is_mfa_enabled',
        allowNull: false,
        defaultValue: false,
      },
      locale: {
        type: DataTypes.TEXT,
        field: 'locale',
        allowNull: false,
        defaultValue: "en-US",
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: false,
        defaultValue: "UTC",
      },
      invitedAt: {
        type: DataTypes.DATE,
        field: 'invited_at',
        allowNull: true,
      },
      activatedAt: {
        type: DataTypes.DATE,
        field: 'activated_at',
        allowNull: true,
      },
      deactivatedAt: {
        type: DataTypes.DATE,
        field: 'deactivated_at',
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
      },
      deletedAt: {
        type: DataTypes.DATE,
        field: 'deleted_at',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'iam_app_user',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true,
      deletedAt: 'deletedAt'
    }
  )
  return IamAppUserEntity
}
