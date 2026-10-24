import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgSettingAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  settingId?: string
  campusId?: string | null
  module: string
  settingKey: string
  value: unknown
  valueType: string
  description?: string | null
  isEditable?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgSettingCreationAttributes = Optional<OrgSettingAttributes, "id" | "publicId" | "recordCode" | "settingId" | "campusId" | "description" | "isEditable" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgSettingEntity
  extends Model<OrgSettingAttributes, OrgSettingCreationAttributes>
  implements OrgSettingAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare settingId: string
  declare campusId: string | null
  declare module: string
  declare settingKey: string
  declare value: unknown
  declare valueType: string
  declare description: string | null
  declare isEditable: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgSettingEntity(sequelize: Sequelize): typeof OrgSettingEntity {
  OrgSettingEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_setting')"),
      },
      settingId: {
        type: DataTypes.TEXT,
        field: 'setting_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      campusId: {
        type: DataTypes.TEXT,
        field: 'campus_id',
        allowNull: true,
        references: { model: 'org_campus', key: 'campus_id' },
      },
      module: {
        type: DataTypes.STRING(20),
        field: 'module',
        allowNull: false,
      },
      settingKey: {
        type: DataTypes.STRING(80),
        field: 'setting_key',
        allowNull: false,
      },
      value: {
        type: DataTypes.JSONB,
        field: 'value',
        allowNull: false,
      },
      valueType: {
        type: DataTypes.STRING(10),
        field: 'value_type',
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: true,
      },
      isEditable: {
        type: DataTypes.TEXT,
        field: 'is_editable',
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
      tableName: 'org_setting',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['campus_id', 'module', 'setting_key'] }
      ]
    }
  )
  return OrgSettingEntity
}
