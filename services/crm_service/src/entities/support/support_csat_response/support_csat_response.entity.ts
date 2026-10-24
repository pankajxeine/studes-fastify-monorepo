import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportCsatResponseAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  ticketId: string
  score: number
  comment?: string | null
  respondedAt?: Date
}

export type SupportCsatResponseCreationAttributes = Optional<SupportCsatResponseAttributes, "id" | "publicId" | "recordCode" | "comment" | "respondedAt">

export class SupportCsatResponseEntity
  extends Model<SupportCsatResponseAttributes, SupportCsatResponseCreationAttributes>
  implements SupportCsatResponseAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare ticketId: string
  declare score: number
  declare comment: string | null
  declare respondedAt: Date
}

export function initSupportCsatResponseEntity(sequelize: Sequelize): typeof SupportCsatResponseEntity {
  SupportCsatResponseEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_csat_response')"),
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
