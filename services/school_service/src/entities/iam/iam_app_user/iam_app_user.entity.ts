import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamAppUserAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  appUserId?: string
  personId: string
  username: string
  email: string
  passwordHash?: string | null
  status?: string
  defaultCampusId?: string | null
  lastLoginAt?: Date | null
  failedLoginCount?: number
  lockedUntil?: Date | null
  passwordChangedAt?: Date | null
  mustChangePassword?: string
  isMfaEnabled?: string
  locale?: string
  invitedAt?: Date | null
  activatedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
  deletedAt?: Date | null
}

export type IamAppUserCreationAttributes = Optional<IamAppUserAttributes, "id" | "publicId" | "recordCode" | "appUserId" | "passwordHash" | "status" | "defaultCampusId" | "lastLoginAt" | "failedLoginCount" | "lockedUntil" | "passwordChangedAt" | "mustChangePassword" | "isMfaEnabled" | "locale" | "invitedAt" | "activatedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy" | "deletedAt">

export class IamAppUserEntity
  extends Model<IamAppUserAttributes, IamAppUserCreationAttributes>
  implements IamAppUserAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare appUserId: string
  declare personId: string
  declare username: string
  declare email: string
  declare passwordHash: string | null
  declare status: string
  declare defaultCampusId: string | null
  declare lastLoginAt: Date | null
  declare failedLoginCount: number
  declare lockedUntil: Date | null
  declare passwordChangedAt: Date | null
  declare mustChangePassword: string
  declare isMfaEnabled: string
  declare locale: string
  declare invitedAt: Date | null
  declare activatedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
  declare deletedAt: Date | null
}

export function initIamAppUserEntity(sequelize: Sequelize): typeof IamAppUserEntity {
  IamAppUserEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_app_user')"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      personId: {
        type: DataTypes.TEXT,
        field: 'person_id',
        allowNull: false,
        references: { model: 'ppl_person', key: 'person_id' },
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
      passwordHash: {
        type: DataTypes.TEXT,
        field: 'password_hash',
        allowNull: true,
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "invited",
      },
      defaultCampusId: {
        type: DataTypes.TEXT,
        field: 'default_campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
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
        type: DataTypes.STRING(10),
        field: 'locale',
        allowNull: false,
        defaultValue: "en-US",
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
      deletedAt: 'deletedAt',
      indexes: [
      { unique: true, fields: ['person_id'] }
      ]
    }
  )
  return IamAppUserEntity
}
