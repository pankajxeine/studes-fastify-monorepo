import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportSlaTargetAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  slaPolicyId: string
  priority: string
  firstResponseMinutes: number
  resolutionMinutes: number
  UNIQUE?: string | null
}

export type SupportSlaTargetCreationAttributes = Optional<SupportSlaTargetAttributes, "id" | "publicId" | "recordCode" | "UNIQUE">

export class SupportSlaTargetEntity
  extends Model<SupportSlaTargetAttributes, SupportSlaTargetCreationAttributes>
  implements SupportSlaTargetAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare slaPolicyId: string
  declare priority: string
  declare firstResponseMinutes: number
  declare resolutionMinutes: number
  declare UNIQUE: string | null
}

export function initSupportSlaTargetEntity(sequelize: Sequelize): typeof SupportSlaTargetEntity {
  SupportSlaTargetEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_sla_target')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'support_sla_target',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return SupportSlaTargetEntity
}
