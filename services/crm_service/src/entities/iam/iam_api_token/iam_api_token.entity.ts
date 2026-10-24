import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamApiTokenAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  apiTokenId?: string
  appUserId: string
  name: string
  tokenPrefix: string
  secretHash: string
  permissionCodes: string
  ipAllowlist?: string | null
  expiresAt: Date
  lastUsedAt?: Date | null
  lastUsedIp?: string | null
  revokedAt?: Date | null
  revokedByUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
}

export type IamApiTokenCreationAttributes = Optional<IamApiTokenAttributes, "id" | "publicId" | "recordCode" | "apiTokenId" | "ipAllowlist" | "lastUsedAt" | "lastUsedIp" | "revokedAt" | "revokedByUserId" | "createdAt" | "createdBy">

export class IamApiTokenEntity
  extends Model<IamApiTokenAttributes, IamApiTokenCreationAttributes>
  implements IamApiTokenAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare apiTokenId: string
  declare appUserId: string
  declare name: string
  declare tokenPrefix: string
  declare secretHash: string
  declare permissionCodes: string
  declare ipAllowlist: string | null
  declare expiresAt: Date
  declare lastUsedAt: Date | null
  declare lastUsedIp: string | null
  declare revokedAt: Date | null
  declare revokedByUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initIamApiTokenEntity(sequelize: Sequelize): typeof IamApiTokenEntity {
  IamApiTokenEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_api_token')"),
      },
      apiTokenId: {
        type: DataTypes.TEXT,
        field: 'api_token_id',
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
      name: {
        type: DataTypes.STRING(60),
        field: 'name',
        allowNull: false,
      },
      tokenPrefix: {
        type: DataTypes.STRING(12),
        field: 'token_prefix',
        allowNull: false,
      },
      secretHash: {
        type: DataTypes.TEXT,
        field: 'secret_hash',
        allowNull: false,
      },
      permissionCodes: {
        type: DataTypes.TEXT,
        field: 'permission_codes',
        allowNull: false,
      },
      ipAllowlist: {
        type: DataTypes.TEXT,
        field: 'ip_allowlist',
        allowNull: true,
      },
      expiresAt: {
        type: DataTypes.DATE,
        field: 'expires_at',
        allowNull: false,
      },
      lastUsedAt: {
        type: DataTypes.DATE,
        field: 'last_used_at',
        allowNull: true,
      },
      lastUsedIp: {
        type: DataTypes.TEXT,
        field: 'last_used_ip',
        allowNull: true,
      },
      revokedAt: {
        type: DataTypes.DATE,
        field: 'revoked_at',
        allowNull: true,
      },
      revokedByUserId: {
        type: DataTypes.TEXT,
        field: 'revoked_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
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
      }
    },
    {
      sequelize,
      tableName: 'iam_api_token',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['token_prefix'] }
      ]
    }
  )
  return IamApiTokenEntity
}
