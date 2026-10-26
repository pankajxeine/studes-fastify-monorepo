import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformTaxJurisdictionAttributes = {
  recordCode?: string
  taxJurisdictionId: string | null
  jurisdictionCode: string
  countryCode: string
  subdivisionCode?: string | null
  name: string
  taxSystem: string
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformTaxJurisdictionCreationAttributes = Optional<PlatformTaxJurisdictionAttributes, "recordCode" | "subdivisionCode" | "createdAt" | "updatedAt">

export class PlatformTaxJurisdictionEntity
  extends Model<PlatformTaxJurisdictionAttributes, PlatformTaxJurisdictionCreationAttributes>
  implements PlatformTaxJurisdictionAttributes
{
  declare recordCode: string
  declare taxJurisdictionId: string | null
  declare jurisdictionCode: string
  declare countryCode: string
  declare subdivisionCode: string | null
  declare name: string
  declare taxSystem: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPlatformTaxJurisdictionEntity(sequelize: Sequelize): typeof PlatformTaxJurisdictionEntity {
  PlatformTaxJurisdictionEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_tax_jurisdiction')"),
      },
      taxJurisdictionId: {
        type: DataTypes.TEXT,
        field: 'tax_jurisdiction_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      jurisdictionCode: {
        type: DataTypes.TEXT,
        field: 'jurisdiction_code',
        allowNull: false,
        unique: true,
      },
      countryCode: {
        type: DataTypes.TEXT,
        field: 'country_code',
        allowNull: false,
        references: { model: 'platform_country', key: 'country_code' },
      },
      subdivisionCode: {
        type: DataTypes.STRING(6),
        field: 'subdivision_code',
        allowNull: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      taxSystem: {
        type: DataTypes.STRING(12),
        field: 'tax_system',
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'platform_tax_jurisdiction',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformTaxJurisdictionEntity
}
