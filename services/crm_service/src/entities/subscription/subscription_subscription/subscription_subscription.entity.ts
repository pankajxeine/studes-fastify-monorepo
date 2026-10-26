import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubscriptionSubscriptionAttributes = {
  recordCode?: string
  subscriptionId: string | null
  subscriptionNumber?: string
  tenantApplicationId: string
  billingAccountId: string
  planVersionId: string
  planPriceId: string
  quoteId?: string | null
  status: string
  quantity?: number
  discountPercent?: string
  trialEndsAt?: Date | null
  startedAt?: Date
  currentPeriodStart: Date
  currentPeriodEnd: Date
  graceUntil?: Date | null
  cancelAt?: Date | null
  cancelledAt?: Date | null
  cancelReason?: string | null
  autoRenew?: string
  contractRef?: string | null
  salesAgentId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SubscriptionSubscriptionCreationAttributes = Optional<SubscriptionSubscriptionAttributes, "recordCode" | "subscriptionNumber" | "quoteId" | "quantity" | "discountPercent" | "trialEndsAt" | "startedAt" | "graceUntil" | "cancelAt" | "cancelledAt" | "cancelReason" | "autoRenew" | "contractRef" | "salesAgentId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SubscriptionSubscriptionEntity
  extends Model<SubscriptionSubscriptionAttributes, SubscriptionSubscriptionCreationAttributes>
  implements SubscriptionSubscriptionAttributes
{
  declare recordCode: string
  declare subscriptionId: string | null
  declare subscriptionNumber: string
  declare tenantApplicationId: string
  declare billingAccountId: string
  declare planVersionId: string
  declare planPriceId: string
  declare quoteId: string | null
  declare status: string
  declare quantity: number
  declare discountPercent: string
  declare trialEndsAt: Date | null
  declare startedAt: Date
  declare currentPeriodStart: Date
  declare currentPeriodEnd: Date
  declare graceUntil: Date | null
  declare cancelAt: Date | null
  declare cancelledAt: Date | null
  declare cancelReason: string | null
  declare autoRenew: string
  declare contractRef: string | null
  declare salesAgentId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSubscriptionSubscriptionEntity(sequelize: Sequelize): typeof SubscriptionSubscriptionEntity {
  SubscriptionSubscriptionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('subscription_subscription')"),
      },
      subscriptionId: {
        type: DataTypes.TEXT,
        field: 'subscription_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      subscriptionNumber: {
        type: DataTypes.STRING(20),
        field: 'subscription_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'SUB-' || lpad(\r\n        nextval(\r\n            'subscription_subscription_number_seq'\r\n        )::text,\r\n        7,\r\n        '0'\r\n    )"),
      },
      tenantApplicationId: {
        type: DataTypes.TEXT,
        field: 'tenant_application_id',
        allowNull: false,
        references: { model: 'tenancy_tenant_application', key: 'tenant_application_id' },
      },
      billingAccountId: {
        type: DataTypes.TEXT,
        field: 'billing_account_id',
        allowNull: false,
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
      quoteId: {
        type: DataTypes.TEXT,
        field: 'quote_id',
        allowNull: true,
        references: { model: 'crm_quote', key: 'quote_id' },
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        field: 'quantity',
        allowNull: false,
        defaultValue: 1,
      },
      discountPercent: {
        type: DataTypes.TEXT,
        field: 'discount_percent',
        allowNull: false,
        defaultValue: 0,
      },
      trialEndsAt: {
        type: DataTypes.DATE,
        field: 'trial_ends_at',
        allowNull: true,
      },
      startedAt: {
        type: DataTypes.DATE,
        field: 'started_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      currentPeriodStart: {
        type: DataTypes.DATE,
        field: 'current_period_start',
        allowNull: false,
      },
      currentPeriodEnd: {
        type: DataTypes.DATE,
        field: 'current_period_end',
        allowNull: false,
      },
      graceUntil: {
        type: DataTypes.DATE,
        field: 'grace_until',
        allowNull: true,
      },
      cancelAt: {
        type: DataTypes.DATE,
        field: 'cancel_at',
        allowNull: true,
      },
      cancelledAt: {
        type: DataTypes.DATE,
        field: 'cancelled_at',
        allowNull: true,
      },
      cancelReason: {
        type: DataTypes.TEXT,
        field: 'cancel_reason',
        allowNull: true,
      },
      autoRenew: {
        type: DataTypes.TEXT,
        field: 'auto_renew',
        allowNull: false,
        defaultValue: true,
      },
      contractRef: {
        type: DataTypes.STRING(40),
        field: 'contract_ref',
        allowNull: true,
      },
      salesAgentId: {
        type: DataTypes.TEXT,
        field: 'sales_agent_id',
        allowNull: true,
        references: { model: 'partner_sales_agent', key: 'sales_agent_id' },
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
      tableName: 'subscription_subscription',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['subscription_number'] }
      ]
    }
  )
  return SubscriptionSubscriptionEntity
}
