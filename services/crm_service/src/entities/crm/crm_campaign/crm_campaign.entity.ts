import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmCampaignAttributes = {
  recordCode?: string
  campaignId: string | null
  campaignCode: string
  name: string
  channel: string
  applicationId?: string | null
  startDate: string
  endDate?: Date | null
  budgetAmount?: string | null
  currencyCode?: string | null
  ownerUserId?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CrmCampaignCreationAttributes = Optional<CrmCampaignAttributes, "recordCode" | "applicationId" | "endDate" | "budgetAmount" | "currencyCode" | "ownerUserId" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CrmCampaignEntity
  extends Model<CrmCampaignAttributes, CrmCampaignCreationAttributes>
  implements CrmCampaignAttributes
{
  declare recordCode: string
  declare campaignId: string | null
  declare campaignCode: string
  declare name: string
  declare channel: string
  declare applicationId: string | null
  declare startDate: string
  declare endDate: Date | null
  declare budgetAmount: string | null
  declare currencyCode: string | null
  declare ownerUserId: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCrmCampaignEntity(sequelize: Sequelize): typeof CrmCampaignEntity {
  CrmCampaignEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_campaign')"),
      },
      campaignId: {
        type: DataTypes.TEXT,
        field: 'campaign_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campaignCode: {
        type: DataTypes.TEXT,
        field: 'campaign_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      channel: {
        type: DataTypes.STRING(20),
        field: 'channel',
        allowNull: false,
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      startDate: {
        type: DataTypes.TEXT,
        field: 'start_date',
        allowNull: false,
      },
      endDate: {
        type: DataTypes.DATEONLY,
        field: 'end_date',
        allowNull: true,
      },
      budgetAmount: {
        type: DataTypes.TEXT,
        field: 'budget_amount',
        allowNull: true,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: true,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      ownerUserId: {
        type: DataTypes.TEXT,
        field: 'owner_user_id',
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
      tableName: 'crm_campaign',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campaign_code'] }
      ]
    }
  )
  return CrmCampaignEntity
}
