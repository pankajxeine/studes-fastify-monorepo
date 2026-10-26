import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportSlaTargetAttributes = {
  recordCode?: string
  slaTargetId: string | null
  slaPolicyId: string
  priority: string
  firstResponseMinutes: number
  resolutionMinutes: number
}

export type SupportSlaTargetCreationAttributes = Optional<SupportSlaTargetAttributes, "recordCode">

export class SupportSlaTargetEntity
  extends Model<SupportSlaTargetAttributes, SupportSlaTargetCreationAttributes>
  implements SupportSlaTargetAttributes
{
  declare recordCode: string
  declare slaTargetId: string | null
  declare slaPolicyId: string
  declare priority: string
  declare firstResponseMinutes: number
  declare resolutionMinutes: number
}

export function initSupportSlaTargetEntity(sequelize: Sequelize): typeof SupportSlaTargetEntity {
  SupportSlaTargetEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_sla_target')"),
      },
      slaTargetId: {
        type: DataTypes.TEXT,
        field: 'sla_target_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      slaPolicyId: {
        type: DataTypes.TEXT,
        field: 'sla_policy_id',
        allowNull: false,
        references: { model: 'support_sla_policy', key: 'sla_policy_id' },
        onDelete: 'CASCADE',
      },
      priority: {
        type: DataTypes.TEXT,
        field: 'priority',
        allowNull: false,
      },
      firstResponseMinutes: {
        type: DataTypes.INTEGER,
        field: 'first_response_minutes',
        allowNull: false,
      },
      resolutionMinutes: {
        type: DataTypes.INTEGER,
        field: 'resolution_minutes',
        allowNull: false,
      }
    },
    {
      sequelize,
      tableName: 'support_sla_target',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['sla_policy_id', 'priority'] }
      ]
    }
  )
  return SupportSlaTargetEntity
}
