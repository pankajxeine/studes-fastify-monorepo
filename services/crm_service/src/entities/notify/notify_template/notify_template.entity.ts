import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type NotifyTemplateAttributes = {
  recordCode?: string
  templateId: string | null
  templateCode: string
  applicationId?: string | null
  category: string
  channel: string
  description?: string | null
  variablesSchema?: unknown
  isSystem?: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type NotifyTemplateCreationAttributes = Optional<NotifyTemplateAttributes, "recordCode" | "applicationId" | "description" | "variablesSchema" | "isSystem" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class NotifyTemplateEntity
  extends Model<NotifyTemplateAttributes, NotifyTemplateCreationAttributes>
  implements NotifyTemplateAttributes
{
  declare recordCode: string
  declare templateId: string | null
  declare templateCode: string
  declare applicationId: string | null
  declare category: string
  declare channel: string
  declare description: string | null
  declare variablesSchema: unknown
  declare isSystem: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initNotifyTemplateEntity(sequelize: Sequelize): typeof NotifyTemplateEntity {
  NotifyTemplateEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('notify_template')"),
      },
      templateId: {
        type: DataTypes.TEXT,
        field: 'template_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      templateCode: {
        type: DataTypes.TEXT,
        field: 'template_code',
        allowNull: false,
      },
      applicationId: {
        type: DataTypes.TEXT,
        field: 'application_id',
        allowNull: true,
        references: { model: 'catalog_application', key: 'application_id' },
      },
      category: {
        type: DataTypes.STRING(14),
        field: 'category',
        allowNull: false,
      },
      channel: {
        type: DataTypes.STRING(8),
        field: 'channel',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      variablesSchema: {
        type: DataTypes.JSONB,
        field: 'variables_schema',
        allowNull: false,
        defaultValue: "{\"required\": []}",
      },
      isSystem: {
        type: DataTypes.TEXT,
        field: 'is_system',
        allowNull: false,
        defaultValue: true,
      },
      isActive: {
        type: DataTypes.TEXT,
        field: 'is_active',
        allowNull: false,
        defaultValue: true,
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
      tableName: 'notify_template',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return NotifyTemplateEntity
}
