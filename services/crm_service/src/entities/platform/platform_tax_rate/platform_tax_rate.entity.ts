import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformTaxRateAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  taxRateId?: string
  jurisdictionCode: string
  taxCode?: string
  name: string
  rate: string
  validFrom: string
  validTo?: Date | null
  createdAt?: Date
  createdBy?: string | null
}

export type PlatformTaxRateCreationAttributes = Optional<PlatformTaxRateAttributes, "id" | "publicId" | "recordCode" | "taxRateId" | "taxCode" | "validTo" | "createdAt" | "createdBy">

export class PlatformTaxRateEntity
  extends Model<PlatformTaxRateAttributes, PlatformTaxRateCreationAttributes>
  implements PlatformTaxRateAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare taxRateId: string
  declare jurisdictionCode: string
  declare taxCode: string
  declare name: string
  declare rate: string
  declare validFrom: string
  declare validTo: Date | null
  declare createdAt: Date
  declare createdBy: string | null
}

export function initPlatformTaxRateEntity(sequelize: Sequelize): typeof PlatformTaxRateEntity {
  PlatformTaxRateEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_tax_rate')"),
      },
      taxRateId: {
        type: DataTypes.TEXT,
        field: 'tax_rate_id',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      jurisdictionCode: {
        type: DataTypes.TEXT,
        field: 'jurisdiction_code',
        allowNull: false,
        references: { model: 'platform_tax_jurisdiction', key: 'jurisdiction_code' },
      },
      taxCode: {
        type: DataTypes.TEXT,
        field: 'tax_code',
        allowNull: false,
        defaultValue: "standard",
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      rate: {
        type: DataTypes.TEXT,
        field: 'rate',
        allowNull: false,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
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
      }
    },
    {
      sequelize,
      tableName: 'platform_tax_rate',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformTaxRateEntity
}
