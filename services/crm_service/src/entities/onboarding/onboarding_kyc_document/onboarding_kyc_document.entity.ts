import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OnboardingKycDocumentAttributes = {
  recordCode?: string
  kycDocumentId: string | null
  accountId: string
  requestId?: string | null
  docType: string
  storageRef: string
  status?: string
  verifiedByUserId?: string | null
  verifiedAt?: Date | null
  rejectionReason?: string | null
  expiresOn?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OnboardingKycDocumentCreationAttributes = Optional<OnboardingKycDocumentAttributes, "recordCode" | "requestId" | "status" | "verifiedByUserId" | "verifiedAt" | "rejectionReason" | "expiresOn" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OnboardingKycDocumentEntity
  extends Model<OnboardingKycDocumentAttributes, OnboardingKycDocumentCreationAttributes>
  implements OnboardingKycDocumentAttributes
{
  declare recordCode: string
  declare kycDocumentId: string | null
  declare accountId: string
  declare requestId: string | null
  declare docType: string
  declare storageRef: string
  declare status: string
  declare verifiedByUserId: string | null
  declare verifiedAt: Date | null
  declare rejectionReason: string | null
  declare expiresOn: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOnboardingKycDocumentEntity(sequelize: Sequelize): typeof OnboardingKycDocumentEntity {
  OnboardingKycDocumentEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('onboarding_kyc_document')"),
      },
      kycDocumentId: {
        type: DataTypes.TEXT,
        field: 'kyc_document_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: true,
        references: { model: 'onboarding_onboarding_request', key: 'request_id' },
      },
      docType: {
        type: DataTypes.TEXT,
        field: 'doc_type',
        allowNull: false,
      },
      storageRef: {
        type: DataTypes.TEXT,
        field: 'storage_ref',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "pending",
      },
      verifiedByUserId: {
        type: DataTypes.TEXT,
        field: 'verified_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      rejectionReason: {
        type: DataTypes.TEXT,
        field: 'rejection_reason',
        allowNull: true,
      },
      expiresOn: {
        type: DataTypes.DATEONLY,
        field: 'expires_on',
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
      tableName: 'onboarding_kyc_document',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return OnboardingKycDocumentEntity
}
