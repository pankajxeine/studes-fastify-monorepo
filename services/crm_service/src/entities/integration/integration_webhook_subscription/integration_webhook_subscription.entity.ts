import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type IntegrationWebhookSubscriptionAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  webhookSubscriptionId?: string
  ownerType: string
  tenantId?: string | null
  applicationId?: string | null
  url: string
  eventTypes: string
  secretRef: string
  isActive?: string
  consecutiveFailures?: number
  disabledAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type IntegrationWebhookSubscriptionCreationAttributes = Optional<IntegrationWebhookSubscriptionAttributes, "id" | "publicId" | "recordCode" | "webhookSubscriptionId" | "tenantId" | "applicationId" | "isActive" | "consecutiveFailures" | "disabledAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class IntegrationWebhookSubscriptionEntity
  extends Model<IntegrationWebhookSubscriptionAttributes, IntegrationWebhookSubscriptionCreationAttributes>
  implements IntegrationWebhookSubscriptionAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare webhookSubscriptionId: string
  declare ownerType: string
  declare tenantId: string | null
  declare applicationId: string | null
  declare url: string
  declare eventTypes: string
  declare secretRef: string
  declare isActive: string
  declare consecutiveFailures: number
  declare disabledAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initIntegrationWebhookSubscriptionEntity(sequelize: Sequelize): typeof IntegrationWebhookSubscriptionEntity {
  IntegrationWebhookSubscriptionEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('integration_webhook_subscription')"),
      },
      webhookSubscriptionId: {
        type: DataTypes.TEXT,
        field: 'webhook_subscription_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      ownerType: {
        type: DataTypes.STRING(10),
        field: 'owner_type',
        allowNull: false,
      },
      tenantId: {
        type: DataTypes.UUID,
        field: 'tenant_id',
        allowNull: true,
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      url: {
        type: DataTypes.TEXT,
        field: 'url',
        allowNull: false,
      },
      eventTypes: {
        type: DataTypes.TEXT,
        field: 'event_types',
        allowNull: false,
      },
      secretRef: {
        type: DataTypes.TEXT,
        field: 'secret_ref',
        allowNull: false,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
      },
      consecutiveFailures: {
        type: DataTypes.SMALLINT,
        field: 'consecutive_failures',
        allowNull: false,
        defaultValue: 0,
      },
      disabledAt: {
        type: DataTypes.DATE,
        field: 'disabled_at',
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
      tableName: 'integration_webhook_subscription',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return IntegrationWebhookSubscriptionEntity
}
