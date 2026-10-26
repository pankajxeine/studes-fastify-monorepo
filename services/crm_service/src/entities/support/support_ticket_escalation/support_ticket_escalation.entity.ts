import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportTicketEscalationAttributes = {
  recordCode?: string
  ticketEscalationId: string | null
  ticketId: string
  escalationRuleId: string
  escalatedAt?: Date
}

export type SupportTicketEscalationCreationAttributes = Optional<SupportTicketEscalationAttributes, "recordCode" | "escalatedAt">

export class SupportTicketEscalationEntity
  extends Model<SupportTicketEscalationAttributes, SupportTicketEscalationCreationAttributes>
  implements SupportTicketEscalationAttributes
{
  declare recordCode: string
  declare ticketEscalationId: string | null
  declare ticketId: string
  declare escalationRuleId: string
  declare escalatedAt: Date
}

export function initSupportTicketEscalationEntity(sequelize: Sequelize): typeof SupportTicketEscalationEntity {
  SupportTicketEscalationEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_ticket_escalation')"),
      },
      ticketEscalationId: {
        type: DataTypes.TEXT,
        field: 'ticket_escalation_id',
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
      escalationRuleId: {
        type: DataTypes.TEXT,
        field: 'escalation_rule_id',
        allowNull: false,
        references: { model: 'support_escalation_rule', key: 'escalation_rule_id' },
      },
      escalatedAt: {
        type: DataTypes.DATE,
        field: 'escalated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'support_ticket_escalation',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['ticket_id', 'escalation_rule_id'] }
      ]
    }
  )
  return SupportTicketEscalationEntity
}
