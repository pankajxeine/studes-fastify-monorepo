import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportTicketMessageAttributes = {
  recordCode?: string
  ticketMessageId: string | null
  ticketId: string
  authorType: string
  authorUserId?: string | null
  authorContactId?: string | null
  body: string
  isInternal?: string
  channel?: string
  attachments?: unknown | null
  createdAt?: Date
}

export type SupportTicketMessageCreationAttributes = Optional<SupportTicketMessageAttributes, "recordCode" | "authorUserId" | "authorContactId" | "isInternal" | "channel" | "attachments" | "createdAt">

export class SupportTicketMessageEntity
  extends Model<SupportTicketMessageAttributes, SupportTicketMessageCreationAttributes>
  implements SupportTicketMessageAttributes
{
  declare recordCode: string
  declare ticketMessageId: string | null
  declare ticketId: string
  declare authorType: string
  declare authorUserId: string | null
  declare authorContactId: string | null
  declare body: string
  declare isInternal: string
  declare channel: string
  declare attachments: unknown | null
  declare createdAt: Date
}

export function initSupportTicketMessageEntity(sequelize: Sequelize): typeof SupportTicketMessageEntity {
  SupportTicketMessageEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_ticket_message')"),
      },
      ticketMessageId: {
        type: DataTypes.TEXT,
        field: 'ticket_message_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      ticketId: {
        type: DataTypes.TEXT,
        field: 'ticket_id',
        allowNull: false,
        references: { model: 'support_ticket', key: 'ticket_id' },
        onDelete: 'CASCADE',
      },
      authorType: {
        type: DataTypes.STRING(8),
        field: 'author_type',
        allowNull: false,
      },
      authorUserId: {
        type: DataTypes.TEXT,
        field: 'author_user_id',
        allowNull: true,
        references: { model: 'iam_app_user', key: 'app_user_id' },
      },
      authorContactId: {
        type: DataTypes.TEXT,
        field: 'author_contact_id',
        allowNull: true,
        references: { model: 'crm_contact', key: 'contact_id' },
      },
      body: {
        type: DataTypes.TEXT,
        field: 'body',
        allowNull: false,
      },
      isInternal: {
        type: DataTypes.TEXT,
        field: 'is_internal',
        allowNull: false,
        defaultValue: false,
      },
      channel: {
        type: DataTypes.STRING(8),
        field: 'channel',
        allowNull: false,
        defaultValue: "portal",
      },
      attachments: {
        type: DataTypes.JSONB,
        field: 'attachments',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'support_ticket_message',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return SupportTicketMessageEntity
}
