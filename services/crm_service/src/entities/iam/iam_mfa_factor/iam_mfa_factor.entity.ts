import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IamMfaFactorAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  mfaFactorId?: string
  appUserId: string
  kind: string
  label?: string | null
  secretRef: string
  webauthnCredentialId?: Buffer | null
  isPrimary?: string
  verifiedAt?: Date | null
  lastUsedAt?: Date | null
  revokedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
}

export type IamMfaFactorCreationAttributes = Optional<IamMfaFactorAttributes, "id" | "publicId" | "recordCode" | "mfaFactorId" | "label" | "webauthnCredentialId" | "isPrimary" | "verifiedAt" | "lastUsedAt" | "revokedAt" | "createdAt" | "createdBy">

export class IamMfaFactorEntity
  extends Model<IamMfaFactorAttributes, IamMfaFactorCreationAttributes>
  implements IamMfaFactorAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare mfaFactorId: string
  declare appUserId: string
  declare kind: string
  declare label: string | null
  declare secretRef: string
  declare webauthnCredentialId: Buffer | null
  declare isPrimary: string
  declare verifiedAt: Date | null
  declare lastUsedAt: Date | null
  declare revokedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initIamMfaFactorEntity(sequelize: Sequelize): typeof IamMfaFactorEntity {
  IamMfaFactorEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('iam_mfa_factor')"),
      },
      mfaFactorId: {
        type: DataTypes.TEXT,
        field: 'mfa_factor_id',
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
      kind: {
        type: DataTypes.TEXT,
        field: 'kind',
        allowNull: false,
      },
      label: {
        type: DataTypes.STRING(60),
        field: 'label',
        allowNull: true,
      },
      secretRef: {
        type: DataTypes.TEXT,
        field: 'secret_ref',
        allowNull: false,
      },
      webauthnCredentialId: {
        type: DataTypes.BLOB,
        field: 'webauthn_credential_id',
        allowNull: true,
      },
      isPrimary: {
        type: DataTypes.TEXT,
        field: 'is_primary',
        allowNull: false,
        defaultValue: false,
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      lastUsedAt: {
        type: DataTypes.DATE,
        field: 'last_used_at',
        allowNull: true,
      },
      revokedAt: {
        type: DataTypes.DATE,
        field: 'revoked_at',
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
      }
    },
    {
      sequelize,
      tableName: 'iam_mfa_factor',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return IamMfaFactorEntity
}
