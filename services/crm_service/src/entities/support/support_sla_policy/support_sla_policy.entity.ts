import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SupportSlaPolicyAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  slaPolicyId?: string
  policyCode: string
  name: string
  calendarId: string
  isDefault?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type SupportSlaPolicyCreationAttributes = Optional<SupportSlaPolicyAttributes, "id" | "publicId" | "recordCode" | "slaPolicyId" | "isDefault" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class SupportSlaPolicyEntity
  extends Model<SupportSlaPolicyAttributes, SupportSlaPolicyCreationAttributes>
  implements SupportSlaPolicyAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare slaPolicyId: string
  declare policyCode: string
  declare name: string
  declare calendarId: string
  declare isDefault: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initSupportSlaPolicyEntity(sequelize: Sequelize): typeof SupportSlaPolicyEntity {
  SupportSlaPolicyEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('support_sla_policy')"),
      },
      slaPolicyId: {
        type: DataTypes.TEXT,
        field: 'sla_policy_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      policyCode: {
        type: DataTypes.TEXT,
        field: 'policy_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      calendarId: {
        type: DataTypes.TEXT,
        field: 'calendar_id',
        allowNull: false,
        references: { model: 'platform_calendar', key: 'calendar_id' },
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: false,
        defaultValue: false,
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
      tableName: 'support_sla_policy',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['policy_code'] }
      ]
    }
  )
  return SupportSlaPolicyEntity
}
