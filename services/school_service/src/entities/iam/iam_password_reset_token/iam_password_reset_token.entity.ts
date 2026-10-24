import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamPasswordResetTokenAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  passwordResetTokenId?: string
  appUserId: string
  tokenHash: string
  channel?: string
  requestedAt?: Date
  requestedIp?: string | null
  issuedByUserId?: string | null
  expiresAt: Date
  usedAt?: Date | null
  invalidatedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IamPasswordResetTokenCreationAttributes = Optional<IamPasswordResetTokenAttributes, "id" | "publicId" | "recordCode" | "passwordResetTokenId" | "channel" | "requestedAt" | "requestedIp" | "issuedByUserId" | "usedAt" | "invalidatedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IamPasswordResetTokenEntity
  extends Model<IamPasswordResetTokenAttributes, IamPasswordResetTokenCreationAttributes>
  implements IamPasswordResetTokenAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare passwordResetTokenId: string
  declare appUserId: string
  declare tokenHash: string
  declare channel: string
  declare requestedAt: Date
  declare requestedIp: string | null
  declare issuedByUserId: string | null
  declare expiresAt: Date
  declare usedAt: Date | null
  declare invalidatedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initIamPasswordResetTokenEntity(sequelize: Sequelize): typeof IamPasswordResetTokenEntity {
  IamPasswordResetTokenEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_password_reset_token')"),
      },
      passwordResetTokenId: {
        type: DataTypes.TEXT,
        field: 'password_reset_token_id',
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
      channel: {
        type: DataTypes.STRING(10),
        field: 'channel',
        allowNull: false,
        defaultValue: "email",
      },
      requestedAt: {
        type: DataTypes.DATE,
        field: 'requested_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      requestedIp: {
        type: DataTypes.TEXT,
        field: 'requested_ip',
        allowNull: true,
      },
      issuedByUserId: {
        type: DataTypes.TEXT,
        field: 'issued_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      expiresAt: {
        type: DataTypes.DATE,
        field: 'expires_at',
        allowNull: false,
      },
      usedAt: {
        type: DataTypes.DATE,
        field: 'used_at',
        allowNull: true,
      },
      invalidatedAt: {
        type: DataTypes.DATE,
        field: 'invalidated_at',
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
      tableName: 'iam_password_reset_token',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['token_hash'] }
      ]
    }
  )
  return IamPasswordResetTokenEntity
}
