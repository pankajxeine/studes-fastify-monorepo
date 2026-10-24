import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmOpportunityAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  opportunityId?: string
  opportunityNumber?: string
  accountId: string
  leadId?: string | null
  name: string
  applicationId: string
  dealType?: string
  stage?: string
  amount?: string | null
  currencyCode: string
  probability?: string
  expectedCloseDate?: Date | null
  ownerUserId?: string | null
  salesAgentId?: string | null
  branchId?: string | null
  lostReason?: string | null
  closedAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CrmOpportunityCreationAttributes = Optional<CrmOpportunityAttributes, "id" | "publicId" | "recordCode" | "opportunityId" | "opportunityNumber" | "leadId" | "dealType" | "stage" | "amount" | "probability" | "expectedCloseDate" | "ownerUserId" | "salesAgentId" | "branchId" | "lostReason" | "closedAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CrmOpportunityEntity
  extends Model<CrmOpportunityAttributes, CrmOpportunityCreationAttributes>
  implements CrmOpportunityAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare opportunityId: string
  declare opportunityNumber: string
  declare accountId: string
  declare leadId: string | null
  declare name: string
  declare applicationId: string
  declare dealType: string
  declare stage: string
  declare amount: string | null
  declare currencyCode: string
  declare probability: string
  declare expectedCloseDate: Date | null
  declare ownerUserId: string | null
  declare salesAgentId: string | null
  declare branchId: string | null
  declare lostReason: string | null
  declare closedAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCrmOpportunityEntity(sequelize: Sequelize): typeof CrmOpportunityEntity {
  CrmOpportunityEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_opportunity')"),
      },
      opportunityId: {
        type: DataTypes.TEXT,
        field: 'opportunity_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      opportunityNumber: {
        type: DataTypes.STRING(20),
        field: 'opportunity_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'OPP-' || lpad(\r\n        nextval('crm_opportunity_number_seq')::text,\r\n        7,\r\n        '0'\r\n    )"),
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      leadId: {
        type: DataTypes.TEXT,
        field: 'lead_id',
        allowNull: true,
        references: { model: 'crm_lead', key: 'lead_id' },
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: false,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      dealType: {
        type: DataTypes.STRING(12),
        field: 'deal_type',
        allowNull: false,
        defaultValue: "new",
      },
      stage: {
        type: DataTypes.STRING(15),
        field: 'stage',
        allowNull: false,
        defaultValue: "prospecting",
      },
      amount: {
        type: DataTypes.TEXT,
        field: 'amount',
        allowNull: true,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      probability: {
        type: DataTypes.TEXT,
        field: 'probability',
        allowNull: false,
        defaultValue: 10,
      },
      expectedCloseDate: {
        type: DataTypes.DATEONLY,
        field: 'expected_close_date',
        allowNull: true,
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
      lostReason: {
        type: DataTypes.TEXT,
        field: 'lost_reason',
        allowNull: true,
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
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
      tableName: 'crm_opportunity',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['opportunity_number'] }
      ]
    }
  )
  return CrmOpportunityEntity
}
