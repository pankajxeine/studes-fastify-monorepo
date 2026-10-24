import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportTicketEscalationAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  ticketId: string
  escalationRuleId: string
  escalatedAt?: Date
  UNIQUE?: string | null
}

export type SupportTicketEscalationCreationAttributes = Optional<SupportTicketEscalationAttributes, "id" | "publicId" | "recordCode" | "escalatedAt" | "UNIQUE">

export class SupportTicketEscalationEntity
  extends Model<SupportTicketEscalationAttributes, SupportTicketEscalationCreationAttributes>
  implements SupportTicketEscalationAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare ticketId: string
  declare escalationRuleId: string
  declare escalatedAt: Date
  declare UNIQUE: string | null
}

export function initSupportTicketEscalationEntity(sequelize: Sequelize): typeof SupportTicketEscalationEntity {
  SupportTicketEscalationEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_ticket_escalation')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'support_ticket_escalation',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return SupportTicketEscalationEntity
}
