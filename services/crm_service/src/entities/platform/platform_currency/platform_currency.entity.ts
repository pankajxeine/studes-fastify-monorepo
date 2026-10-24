import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformCurrencyAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  currencyCode: string
  name: string
  symbol?: string | null
  minorUnits?: number
  isActive?: string
  createdAt?: Date
  updatedAt?: Date
}

export type PlatformCurrencyCreationAttributes = Optional<PlatformCurrencyAttributes, "id" | "publicId" | "recordCode" | "symbol" | "minorUnits" | "isActive" | "createdAt" | "updatedAt">

export class PlatformCurrencyEntity
  extends Model<PlatformCurrencyAttributes, PlatformCurrencyCreationAttributes>
  implements PlatformCurrencyAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare currencyCode: string
  declare name: string
  declare symbol: string | null
  declare minorUnits: number
  declare isActive: string
  declare createdAt: Date
  declare updatedAt: Date
}

export function initPlatformCurrencyEntity(sequelize: Sequelize): typeof PlatformCurrencyEntity {
  PlatformCurrencyEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_currency')"),
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      symbol: {
        type: DataTypes.STRING(5),
        field: 'symbol',
        allowNull: true,
      },
      minorUnits: {
        type: DataTypes.SMALLINT,
        field: 'minor_units',
        allowNull: false,
        defaultValue: 2,
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
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      }
    },
    {
      sequelize,
      tableName: 'platform_currency',
      timestamps: true,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformCurrencyEntity
}
