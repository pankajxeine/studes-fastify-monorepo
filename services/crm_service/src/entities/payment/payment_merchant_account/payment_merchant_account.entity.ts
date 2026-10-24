import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PaymentMerchantAccountAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  merchantAccountId?: string
  tenantApplicationId: string
  name: string
  providerCode: string
  providerMerchantRef: string
  environment?: string
  currencyCode: string
  credentialSecretRef: string
  webhookSecretRef: string
  settlementAccountRef?: string | null
  status?: string
  verifiedAt?: Date | null
  createdAt?: Date
  updatedAt?: Date
}

export type PaymentMerchantAccountCreationAttributes = Optional<PaymentMerchantAccountAttributes, "id" | "publicId" | "recordCode" | "merchantAccountId" | "environment" | "settlementAccountRef" | "status" | "verifiedAt" | "createdAt" | "updatedAt">

export class PaymentMerchantAccountEntity
  extends Model<PaymentMerchantAccountAttributes, PaymentMerchantAccountCreationAttributes>
  implements PaymentMerchantAccountAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare merchantAccountId: string
  declare tenantApplicationId: string
  declare name: string
  declare providerCode: string
  declare providerMerchantRef: string
  declare environment: string
  declare currencyCode: string
  declare credentialSecretRef: string
  declare webhookSecretRef: string
  declare settlementAccountRef: string | null
  declare status: string
  declare verifiedAt: Date | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPaymentMerchantAccountEntity(sequelize: Sequelize): typeof PaymentMerchantAccountEntity {
  PaymentMerchantAccountEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('payment_merchant_account')"),
      },
      merchantAccountId: {
        type: DataTypes.TEXT,
        field: 'merchant_account_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      providerCode: {
        type: DataTypes.TEXT,
        field: 'provider_code',
        allowNull: false,
      },
      providerMerchantRef: {
        type: DataTypes.TEXT,
        field: 'provider_merchant_ref',
        allowNull: false,
      },
      environment: {
        type: DataTypes.STRING(4),
        field: 'environment',
        allowNull: false,
        defaultValue: "test",
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      credentialSecretRef: {
        type: DataTypes.TEXT,
        field: 'credential_secret_ref',
        allowNull: false,
      },
      webhookSecretRef: {
        type: DataTypes.TEXT,
        field: 'webhook_secret_ref',
        allowNull: false,
      },
      settlementAccountRef: {
        type: DataTypes.TEXT,
        field: 'settlement_account_ref',
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      verifiedAt: {
        type: DataTypes.DATE,
        field: 'verified_at',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'payment_merchant_account',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['tenant_application_id', 'merchant_account_id'] },
      { unique: true, fields: ['provider_code', 'environment', 'provider_merchant_ref'] }
      ]
    }
  )
  return PaymentMerchantAccountEntity
}
