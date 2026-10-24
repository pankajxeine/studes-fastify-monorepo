import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportTicketAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  ticketId?: string
  ticketNumber?: string
  tenantId?: string | null
  accountId: string
  contactId?: string | null
  applicationId?: string | null
  moduleId?: string | null
  queueId: string
  category: string
  subject: string
  description: string
  channel: string
  priority?: string
  status?: string
  assigneeUserId?: string | null
  slaPolicyId: string
  firstResponseDueAt: Date
  resolutionDueAt: Date
  firstRespondedAt?: Date | null
  resolvedAt?: Date | null
  closedAt?: Date | null
  slaPausedAt?: Date | null
  firstResponseBreached?: string
  resolutionBreached?: string
  reopenedCount?: number
  parentTicketId?: string | null
  externalRef?: string | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SupportTicketCreationAttributes = Optional<SupportTicketAttributes, "id" | "publicId" | "recordCode" | "ticketId" | "ticketNumber" | "tenantId" | "contactId" | "applicationId" | "moduleId" | "priority" | "status" | "assigneeUserId" | "firstRespondedAt" | "resolvedAt" | "closedAt" | "slaPausedAt" | "firstResponseBreached" | "resolutionBreached" | "reopenedCount" | "parentTicketId" | "externalRef" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SupportTicketEntity
  extends Model<SupportTicketAttributes, SupportTicketCreationAttributes>
  implements SupportTicketAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare ticketId: string
  declare ticketNumber: string
  declare tenantId: string | null
  declare accountId: string
  declare contactId: string | null
  declare applicationId: string | null
  declare moduleId: string | null
  declare queueId: string
  declare category: string
  declare subject: string
  declare description: string
  declare channel: string
  declare priority: string
  declare status: string
  declare assigneeUserId: string | null
  declare slaPolicyId: string
  declare firstResponseDueAt: Date
  declare resolutionDueAt: Date
  declare firstRespondedAt: Date | null
  declare resolvedAt: Date | null
  declare closedAt: Date | null
  declare slaPausedAt: Date | null
  declare firstResponseBreached: string
  declare resolutionBreached: string
  declare reopenedCount: number
  declare parentTicketId: string | null
  declare externalRef: string | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSupportTicketEntity(sequelize: Sequelize): typeof SupportTicketEntity {
  SupportTicketEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_ticket')"),
      },
      ticketId: {
        type: DataTypes.TEXT,
        field: 'ticket_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      ticketNumber: {
        type: DataTypes.STRING(20),
        field: 'ticket_number',
        allowNull: false,
        defaultValue: Sequelize.literal("'TCK-' || lpad(\r\n        nextval('support_ticket_number_seq')::text,\r\n        8,\r\n        '0'\r\n    )"),
      },
      tenantId: {
        type: DataTypes.TEXT,
        field: 'tenant_id',
        allowNull: true,
        references: { model: 'tenancy_tenant', key: 'tenant_id' },
      },
      accountId: {
        type: DataTypes.TEXT,
        field: 'account_id',
        allowNull: false,
        references: { model: 'crm_account', key: 'account_id' },
      },
      contactId: {
        type: DataTypes.TEXT,
        field: 'contact_id',
        allowNull: true,
        references: { model: 'crm_contact', key: 'contact_id' },
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      moduleId: {
        type: DataTypes.TEXT,
        field: 'module_id',
        allowNull: true,
        references: { model: 'catalog_module', key: 'module_id' },
      },
      queueId: {
        type: DataTypes.TEXT,
        field: 'queue_id',
        allowNull: false,
        references: { model: 'support_queue', key: 'queue_id' },
      },
      category: {
        type: DataTypes.TEXT,
        field: 'category',
        allowNull: false,
      },
      subject: {
        type: DataTypes.TEXT,
        field: 'subject',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      channel: {
        type: DataTypes.STRING(8),
        field: 'channel',
        allowNull: false,
      },
      priority: {
        type: DataTypes.TEXT,
        field: 'priority',
        allowNull: false,
        defaultValue: "p3",
      },
      status: {
        type: DataTypes.TEXT,
        field: 'status',
        allowNull: false,
        defaultValue: "new",
      },
      assigneeUserId: {
        type: DataTypes.TEXT,
        field: 'assignee_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      slaPolicyId: {
        type: DataTypes.TEXT,
        field: 'sla_policy_id',
        allowNull: false,
        references: { model: 'support_sla_policy', key: 'sla_policy_id' },
      },
      firstResponseDueAt: {
        type: DataTypes.DATE,
        field: 'first_response_due_at',
        allowNull: false,
      },
      resolutionDueAt: {
        type: DataTypes.DATE,
        field: 'resolution_due_at',
        allowNull: false,
      },
      firstRespondedAt: {
        type: DataTypes.DATE,
        field: 'first_responded_at',
        allowNull: true,
      },
      resolvedAt: {
        type: DataTypes.DATE,
        field: 'resolved_at',
        allowNull: true,
      },
      closedAt: {
        type: DataTypes.DATE,
        field: 'closed_at',
        allowNull: true,
      },
      slaPausedAt: {
        type: DataTypes.DATE,
        field: 'sla_paused_at',
        allowNull: true,
      },
      firstResponseBreached: {
        type: DataTypes.TEXT,
        field: 'first_response_breached',
        allowNull: false,
        defaultValue: false,
      },
      resolutionBreached: {
        type: DataTypes.TEXT,
        field: 'resolution_breached',
        allowNull: false,
        defaultValue: false,
      },
      reopenedCount: {
        type: DataTypes.SMALLINT,
        field: 'reopened_count',
        allowNull: false,
        defaultValue: 0,
      },
      parentTicketId: {
        type: DataTypes.TEXT,
        field: 'parent_ticket_id',
        allowNull: true,
        references: { model: 'support_ticket', key: 'ticket_id' },
      },
      externalRef: {
        type: DataTypes.STRING(60),
        field: 'external_ref',
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
      tableName: 'support_ticket',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['ticket_number'] }
      ]
    }
  )
  return SupportTicketEntity
}
