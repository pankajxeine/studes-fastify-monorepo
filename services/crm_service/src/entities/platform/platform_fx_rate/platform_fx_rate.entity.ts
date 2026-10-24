import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformFxRateAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  baseCurrencyCode: string
  quoteCurrencyCode: string
  rateDate: string
  rate: number
  source?: string
  createdAt?: Date
  UNIQUE?: string | null
}

export type PlatformFxRateCreationAttributes = Optional<PlatformFxRateAttributes, "id" | "publicId" | "recordCode" | "source" | "createdAt" | "UNIQUE">

export class PlatformFxRateEntity
  extends Model<PlatformFxRateAttributes, PlatformFxRateCreationAttributes>
  implements PlatformFxRateAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare baseCurrencyCode: string
  declare quoteCurrencyCode: string
  declare rateDate: string
  declare rate: number
  declare source: string
  declare createdAt: Date
  declare UNIQUE: string | null
}

export function initPlatformFxRateEntity(sequelize: Sequelize): typeof PlatformFxRateEntity {
  PlatformFxRateEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_fx_rate')"),
      },
      baseCurrencyCode: {
        type: DataTypes.TEXT,
        field: 'base_currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      quoteCurrencyCode: {
        type: DataTypes.TEXT,
        field: 'quote_currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      rateDate: {
        type: DataTypes.TEXT,
        field: 'rate_date',
        allowNull: false,
      },
      rate: {
        type: DataTypes.DECIMAL(20, 10),
        field: 'rate',
        allowNull: false,
      },
      source: {
        type: DataTypes.STRING(30),
        field: 'source',
        allowNull: false,
        defaultValue: "manual",
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'platform_fx_rate',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return PlatformFxRateEntity
}
