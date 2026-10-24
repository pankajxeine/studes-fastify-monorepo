import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OnboardingOnboardingRequestAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  requestId?: string
  requestNumber?: string
  accountId: string
  opportunityId?: string | null
  quoteId?: string | null
  applicationId: string
  planVersionId: string
  planPriceId: string
  quantity?: number
  couponId?: string | null
  requestedTenantCode: string
  displayName: string
  regionCode: string
  dataResidency: string
  timezone?: string
  defaultLocale?: string
  isSandbox?: string
  parentTenantId?: string | null
  ownerContactId: string
  billingContactId?: string | null
  owningBranchId?: string | null
  salesAgentId?: string | null
  requiresKyc?: string
  status?: string
  submittedAt?: Date | null
  submittedByUserId?: string | null
  approvedAt?: Date | null
  rejectedReason?: string | null
  tenantId?: string | null
  tenantApplicationId?: string | null
  subscriptionId?: string | null
  completedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OnboardingOnboardingRequestCreationAttributes = Optional<OnboardingOnboardingRequestAttributes, "id" | "publicId" | "recordCode" | "requestId" | "requestNumber" | "opportunityId" | "quoteId" | "quantity" | "couponId" | "timezone" | "defaultLocale" | "isSandbox" | "parentTenantId" | "billingContactId" | "owningBranchId" | "salesAgentId" | "requiresKyc" | "status" | "submittedAt" | "submittedByUserId" | "approvedAt" | "rejectedReason" | "tenantId" | "tenantApplicationId" | "subscriptionId" | "completedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OnboardingOnboardingRequestEntity
  extends Model<OnboardingOnboardingRequestAttributes, OnboardingOnboardingRequestCreationAttributes>
  implements OnboardingOnboardingRequestAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare requestId: string
  declare requestNumber: string
  declare accountId: string
  declare opportunityId: string | null
  declare quoteId: string | null
  declare applicationId: string
  declare planVersionId: string
  declare planPriceId: string
  declare quantity: number
  declare couponId: string | null
  declare requestedTenantCode: string
  declare displayName: string
  declare regionCode: string
  declare dataResidency: string
  declare timezone: string
  declare defaultLocale: string
  declare isSandbox: string
  declare parentTenantId: string | null
  declare ownerContactId: string
  declare billingContactId: string | null
  declare owningBranchId: string | null
  declare salesAgentId: string | null
  declare requiresKyc: string
  declare status: string
  declare submittedAt: Date | null
  declare submittedByUserId: string | null
  declare approvedAt: Date | null
  declare rejectedReason: string | null
  declare tenantId: string | null
  declare tenantApplicationId: string | null
  declare subscriptionId: string | null
  declare completedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOnboardingOnboardingRequestEntity(sequelize: Sequelize): typeof OnboardingOnboardingRequestEntity {
  OnboardingOnboardingRequestEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('onboarding_onboarding_request')"),
      },
      requestId: {
        type: DataTypes.TEXT,
        field: 'request_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      requestNumber: {
        type: DataTypes.STRING(20),
        field: 'request_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'ONB-' || lpad(\r\n        nextval(\r\n            'onboarding_request_number_seq'\r\n        )::text,\r\n        7,\r\n        '0'\r\n    )"),
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      opportunityId: {
        type: DataTypes.TEXT,
        field: 'opportunity_id',
        allowNull: true,
        references: { model: 'crm_opportunity', key: 'opportunity_id' },
      },
      quoteId: {
        type: DataTypes.TEXT,
        field: 'quote_id',
        allowNull: true,
        references: { model: 'crm_quote', key: 'quote_id' },
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      planVersionId: {
        type: DataTypes.TEXT,
        field: 'plan_version_id',
        allowNull: false,
        references: { model: 'commerce_plan_version', key: 'plan_version_id' },
      },
      planPriceId: {
        type: DataTypes.TEXT,
        field: 'plan_price_id',
        allowNull: false,
        references: { model: 'commerce_plan_price', key: 'plan_price_id' },
      },
      quantity: {
        type: DataTypes.INTEGER,
        field: 'quantity',
        allowNull: false,
        defaultValue: 1,
      },
      couponId: {
        type: DataTypes.TEXT,
        field: 'coupon_id',
        allowNull: true,
        references: { model: 'commerce_coupon', key: 'coupon_id' },
      },
      requestedTenantCode: {
        type: DataTypes.STRING(40),
        field: 'requested_tenant_code',
        allowNull: false,
      },
      displayName: {
        type: DataTypes.TEXT,
        field: 'display_name',
        allowNull: false,
      },
      regionCode: {
        type: DataTypes.TEXT,
        field: 'region_code',
        allowNull: false,
        references: { model: 'platform_region', key: 'region_code' },
      },
      dataResidency: {
        type: DataTypes.TEXT,
        field: 'data_residency',
        allowNull: false,
        references: { model: 'platform_country', key: 'country_code' },
      },
      timezone: {
        type: DataTypes.TEXT,
        field: 'timezone',
        allowNull: false,
        defaultValue: "UTC",
      },
      defaultLocale: {
        type: DataTypes.TEXT,
        field: 'default_locale',
        allowNull: false,
        defaultValue: "en-US",
      },
      isSandbox: {
        type: DataTypes.TEXT,
        field: 'is_sandbox',
        allowNull: false,
        defaultValue: false,
      },
      parentTenantId: {
        type: DataTypes.TEXT,
        field: 'parent_tenant_id',
        allowNull: true,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      ownerContactId: {
        type: DataTypes.TEXT,
        field: 'owner_contact_id',
        allowNull: false,
        references: { model: 'crm_contact', key: 'contact_id' },
      },
      billingContactId: {
        type: DataTypes.TEXT,
        field: 'billing_contact_id',
        allowNull: true,
        references: { model: 'crm_contact', key: 'contact_id' },
      },
      owningBranchId: {
        type: DataTypes.TEXT,
        field: 'owning_branch_id',
        allowNull: true,
        references: { model: 'org_branch', key: 'branch_id' },
      },
      salesAgentId: {
        type: DataTypes.TEXT,
        field: 'sales_agent_id',
        allowNull: true,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
      },
      requiresKyc: {
        type: DataTypes.TEXT,
        field: 'requires_kyc',
        allowNull: false,
        defaultValue: false,
      },
      status: {
        type: DataTypes.STRING(16),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      submittedAt: {
        type: DataTypes.DATE,
        field: 'submitted_at',
        allowNull: true,
      },
      submittedByUserId: {
        type: DataTypes.TEXT,
        field: 'submitted_by_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      approvedAt: {
        type: DataTypes.DATE,
        field: 'approved_at',
        allowNull: true,
      },
      rejectedReason: {
        type: DataTypes.TEXT,
        field: 'rejected_reason',
        allowNull: true,
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: true,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: true,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      subscriptionId: {
        type: DataTypes.TEXT,
        field: 'subscription_id',
        allowNull: true,
        references: { model: 'subscription_subscription', key: 'subscription_id' },
      },
      completedAt: {
        type: DataTypes.DATE,
        field: 'completed_at',
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
      tableName: 'onboarding_onboarding_request',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['request_number'] }
      ]
    }
  )
  return OnboardingOnboardingRequestEntity
}
