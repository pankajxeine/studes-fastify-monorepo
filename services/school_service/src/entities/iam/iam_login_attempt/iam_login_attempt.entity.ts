import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamLoginAttemptAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  loginAttemptId?: string
  appUserId?: string | null
  usernameEntered: string
  attemptedAt?: Date
  isSuccess: string
  failureReason?: string | null
  ipAddress?: string | null
  userAgent?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IamLoginAttemptCreationAttributes = Optional<IamLoginAttemptAttributes, "id" | "publicId" | "recordCode" | "loginAttemptId" | "appUserId" | "attemptedAt" | "failureReason" | "ipAddress" | "userAgent" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IamLoginAttemptEntity
  extends Model<IamLoginAttemptAttributes, IamLoginAttemptCreationAttributes>
  implements IamLoginAttemptAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare loginAttemptId: string
  declare appUserId: string | null
  declare usernameEntered: string
  declare attemptedAt: Date
  declare isSuccess: string
  declare failureReason: string | null
  declare ipAddress: string | null
  declare userAgent: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initIamLoginAttemptEntity(sequelize: Sequelize): typeof IamLoginAttemptEntity {
  IamLoginAttemptEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_login_attempt')"),
      },
      loginAttemptId: {
        type: DataTypes.TEXT,
        field: 'login_attempt_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      appUserId: {
        type: DataTypes.TEXT,
        field: 'app_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      usernameEntered: {
        type: DataTypes.STRING(254),
        field: 'username_entered',
        allowNull: false,
      },
      attemptedAt: {
        type: DataTypes.DATE,
        field: 'attempted_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      isSuccess: {
        type: DataTypes.TEXT,
        field: 'is_success',
        allowNull: false,
      },
      failureReason: {
        type: DataTypes.STRING(20),
        field: 'failure_reason',
        allowNull: true,
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
      tableName: 'iam_login_attempt',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamLoginAttemptEntity
}
