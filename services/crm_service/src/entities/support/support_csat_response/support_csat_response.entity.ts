import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportCsatResponseAttributes = {
  recordCode?: string
  csatResponseId: string | null
  ticketId: string
  score: number
  comment?: string | null
  respondedAt?: Date
}

export type SupportCsatResponseCreationAttributes = Optional<SupportCsatResponseAttributes, "recordCode" | "comment" | "respondedAt">

export class SupportCsatResponseEntity
  extends Model<SupportCsatResponseAttributes, SupportCsatResponseCreationAttributes>
  implements SupportCsatResponseAttributes
{
  declare recordCode: string
  declare csatResponseId: string | null
  declare ticketId: string
  declare score: number
  declare comment: string | null
  declare respondedAt: Date
}

export function initSupportCsatResponseEntity(sequelize: Sequelize): typeof SupportCsatResponseEntity {
  SupportCsatResponseEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_csat_response')"),
      },
      csatResponseId: {
        type: DataTypes.TEXT,
        field: 'csat_response_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      ticketId: {
        type: DataTypes.TEXT,
        field: 'ticket_id',
        allowNull: false,
        unique: true,
        references: { model: 'support_ticket', key: 'ticket_id' },
        onDelete: 'CASCADE',
      },
      score: {
        type: DataTypes.SMALLINT,
        field: 'score',
        allowNull: false,
      },
      comment: {
        type: DataTypes.TEXT,
        field: 'comment',
        allowNull: true,
      },
      respondedAt: {
        type: DataTypes.DATE,
        field: 'responded_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'support_csat_response',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return SupportCsatResponseEntity
}
