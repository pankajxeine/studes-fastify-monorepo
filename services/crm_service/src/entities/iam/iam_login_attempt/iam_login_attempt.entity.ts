import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamLoginAttemptAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  loginAttemptId?: string
  appUserId?: string | null
  usernameEntered: string
  authMethod?: string
  attemptedAt?: Date
  isSuccess: string
  failureReason?: string | null
  ipAddress?: string | null
  geoCountry?: string | null
  userAgent?: string | null
  riskScore?: number | null
}

export type IamLoginAttemptCreationAttributes = Optional<IamLoginAttemptAttributes, "id" | "publicId" | "recordCode" | "loginAttemptId" | "appUserId" | "authMethod" | "attemptedAt" | "failureReason" | "ipAddress" | "geoCountry" | "userAgent" | "riskScore">

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
  declare authMethod: string
  declare attemptedAt: Date
  declare isSuccess: string
  declare failureReason: string | null
  declare ipAddress: string | null
  declare geoCountry: string | null
  declare userAgent: string | null
  declare riskScore: number | null
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
      authMethod: {
        type: DataTypes.STRING(10),
        field: 'auth_method',
        allowNull: false,
        defaultValue: "password",
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
      geoCountry: {
        type: DataTypes.CHAR(2),
        field: 'geo_country',
        allowNull: true,
      },
      userAgent: {
        type: DataTypes.TEXT,
        field: 'user_agent',
        allowNull: true,
      },
      riskScore: {
        type: DataTypes.SMALLINT,
        field: 'risk_score',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'iam_login_attempt',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamLoginAttemptEntity
}
