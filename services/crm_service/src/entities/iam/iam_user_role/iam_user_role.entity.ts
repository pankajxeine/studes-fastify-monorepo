import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamUserRoleAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  userRoleId?: string
  appUserId: string
  roleCode: string
  scopeType?: string
  scopeId?: string | null
  validFrom?: Date
  validTo?: Date | null
  grantSource?: string
  sourceRefId?: string | null
  grantedByUserId?: string | null
  grantedAt?: Date
  revokedAt?: Date | null
  revokedByUserId?: string | null
  revokeReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IamUserRoleCreationAttributes = Optional<IamUserRoleAttributes, "id" | "publicId" | "recordCode" | "userRoleId" | "scopeType" | "scopeId" | "validFrom" | "validTo" | "grantSource" | "sourceRefId" | "grantedByUserId" | "grantedAt" | "revokedAt" | "revokedByUserId" | "revokeReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IamUserRoleEntity
  extends Model<IamUserRoleAttributes, IamUserRoleCreationAttributes>
  implements IamUserRoleAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare userRoleId: string
  declare appUserId: string
  declare roleCode: string
  declare scopeType: string
  declare scopeId: string | null
  declare validFrom: Date
  declare validTo: Date | null
  declare grantSource: string
  declare sourceRefId: string | null
  declare grantedByUserId: string | null
  declare grantedAt: Date
  declare revokedAt: Date | null
  declare revokedByUserId: string | null
  declare revokeReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initIamUserRoleEntity(sequelize: Sequelize): typeof IamUserRoleEntity {
  IamUserRoleEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_user_role')"),
      },
      userRoleId: {
        type: DataTypes.TEXT,
        field: 'user_role_id',
        allowNull: false,
        unique: true,
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
      validFrom: {
        type: DataTypes.DATE,
        field: 'valid_from',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      validTo: {
        type: DataTypes.DATE,
        field: 'valid_to',
        allowNull: true,
      },
      grantSource: {
        type: DataTypes.STRING(12),
        field: 'grant_source',
        allowNull: false,
        defaultValue: "manual",
      },
      sourceRefId: {
        type: DataTypes.UUID,
        field: 'source_ref_id',
        allowNull: true,
      },
      grantedByUserId: {
        type: DataTypes.TEXT,
        field: 'granted_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      grantedAt: {
        type: DataTypes.DATE,
        field: 'granted_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
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
      revokeReason: {
        type: DataTypes.TEXT,
        field: 'revoke_reason',
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
      tableName: 'iam_user_role',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamUserRoleEntity
}
