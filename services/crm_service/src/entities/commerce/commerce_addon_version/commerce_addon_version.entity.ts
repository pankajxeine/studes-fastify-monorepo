import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommerceAddonVersionAttributes = {
  recordCode?: string
  addonVersionId: string | null
  addonId: string
  versionNo: number
  status?: string
  publishedAt?: Date | null
  retiredAt?: Date | null
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommerceAddonVersionCreationAttributes = Optional<CommerceAddonVersionAttributes, "recordCode" | "status" | "publishedAt" | "retiredAt" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommerceAddonVersionEntity
  extends Model<CommerceAddonVersionAttributes, CommerceAddonVersionCreationAttributes>
  implements CommerceAddonVersionAttributes
{
  declare recordCode: string
  declare addonVersionId: string | null
  declare addonId: string
  declare versionNo: number
  declare status: string
  declare publishedAt: Date | null
  declare retiredAt: Date | null
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommerceAddonVersionEntity(sequelize: Sequelize): typeof CommerceAddonVersionEntity {
  CommerceAddonVersionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_addon_version')"),
      },
      addonVersionId: {
        type: DataTypes.TEXT,
        field: 'addon_version_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      addonId: {
        type: DataTypes.TEXT,
        field: 'addon_id',
        allowNull: false,
        references: { model: 'commerce_addon', key: 'addon_id' },
      },
      versionNo: {
        type: DataTypes.INTEGER,
        field: 'version_no',
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING(10),
        field: 'status',
        allowNull: false,
        defaultValue: "draft",
      },
      publishedAt: {
        type: DataTypes.DATE,
        field: 'published_at',
        allowNull: true,
      },
      retiredAt: {
        type: DataTypes.DATE,
        field: 'retired_at',
        allowNull: true,
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
      tableName: 'commerce_addon_version',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['addon_id', 'version_no'] }
      ]
    }
  )
  return CommerceAddonVersionEntity
}
