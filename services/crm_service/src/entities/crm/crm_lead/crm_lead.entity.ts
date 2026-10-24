import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmLeadAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  leadId?: string
  leadNumber?: string
  source: string
  campaignId?: string | null
  companyName: string
  contactName: string
  email: string
  phone?: string | null
  countryCode?: string | null
  industryCode?: string | null
  interestedApplicationId?: string | null
  status?: string
  score?: number
  ownerUserId?: string | null
  salesAgentId?: string | null
  branchId?: string | null
  convertedAccountId?: string | null
  convertedAt?: Date | null
  disqualifyReason?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CrmLeadCreationAttributes = Optional<CrmLeadAttributes, "id" | "publicId" | "recordCode" | "leadId" | "leadNumber" | "campaignId" | "phone" | "countryCode" | "industryCode" | "interestedApplicationId" | "status" | "score" | "ownerUserId" | "salesAgentId" | "branchId" | "convertedAccountId" | "convertedAt" | "disqualifyReason" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CrmLeadEntity
  extends Model<CrmLeadAttributes, CrmLeadCreationAttributes>
  implements CrmLeadAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare leadId: string
  declare leadNumber: string
  declare source: string
  declare campaignId: string | null
  declare companyName: string
  declare contactName: string
  declare email: string
  declare phone: string | null
  declare countryCode: string | null
  declare industryCode: string | null
  declare interestedApplicationId: string | null
  declare status: string
  declare score: number
  declare ownerUserId: string | null
  declare salesAgentId: string | null
  declare branchId: string | null
  declare convertedAccountId: string | null
  declare convertedAt: Date | null
  declare disqualifyReason: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCrmLeadEntity(sequelize: Sequelize): typeof CrmLeadEntity {
  CrmLeadEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_lead')"),
      },
      leadId: {
        type: DataTypes.TEXT,
        field: 'lead_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      leadNumber: {
        type: DataTypes.STRING(20),
        field: 'lead_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'LD-' || lpad(\r\n        nextval('crm_lead_number_seq')::text,\r\n        7,\r\n        '0'\r\n    )"),
      },
      source: {
        type: DataTypes.TEXT,
        field: 'source',
        allowNull: false,
      },
      campaignId: {
        type: DataTypes.TEXT,
        field: 'campaign_id',
        allowNull: true,
        references: { model: 'crm_campaign', key: 'campaign_id' },
      },
      companyName: {
        type: DataTypes.TEXT,
        field: 'company_name',
        allowNull: false,
      },
      contactName: {
        type: DataTypes.TEXT,
        field: 'contact_name',
        allowNull: false,
      },
      email: {
        type: DataTypes.TEXT,
        field: 'email',
        allowNull: false,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      countryCode: {
        type: DataTypes.TEXT,
        field: 'country_code',
        allowNull: true,
        references: { model: 'platform_country', key: 'country_code' },
      },
      industryCode: {
        type: DataTypes.TEXT,
        field: 'industry_code',
        allowNull: true,
        references: { model: 'platform_industry', key: 'industry_code' },
      },
      interestedApplicationId: {
        type: DataTypes.TEXT,
        field: 'interested_application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      status: {
        type: DataTypes.STRING(12),
        field: 'status',
        allowNull: false,
        defaultValue: "new",
      },
      score: {
        type: DataTypes.SMALLINT,
        field: 'score',
        allowNull: false,
        defaultValue: 0,
      },
      ownerUserId: {
        type: DataTypes.TEXT,
        field: 'owner_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      salesAgentId: {
        type: DataTypes.UUID,
        field: 'sales_agent_id',
        allowNull: true,
      },
      branchId: {
        type: DataTypes.TEXT,
        field: 'branch_id',
        allowNull: true,
        references: { model: 'org_branch', key: 'branch_id' },
      },
      convertedAccountId: {
        type: DataTypes.TEXT,
        field: 'converted_account_id',
        allowNull: true,
        references: { model: 'crm_account', key: 'account_id' },
      },
      convertedAt: {
        type: DataTypes.DATE,
        field: 'converted_at',
        allowNull: true,
      },
      disqualifyReason: {
        type: DataTypes.TEXT,
        field: 'disqualify_reason',
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
      tableName: 'crm_lead',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['lead_number'] }
      ]
    }
  )
  return CrmLeadEntity
}
