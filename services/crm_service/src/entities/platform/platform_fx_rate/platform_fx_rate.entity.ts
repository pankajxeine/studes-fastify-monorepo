import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type PlatformFxRateAttributes = {
  recordCode?: string
  fxRateId: string | null
  baseCurrencyCode: string
  quoteCurrencyCode: string
  rateDate: string
  rate: number
  source?: string
  createdAt?: Date
}

export type PlatformFxRateCreationAttributes = Optional<PlatformFxRateAttributes, "recordCode" | "source" | "createdAt">

export class PlatformFxRateEntity
  extends Model<PlatformFxRateAttributes, PlatformFxRateCreationAttributes>
  implements PlatformFxRateAttributes
{
  declare recordCode: string
  declare fxRateId: string | null
  declare baseCurrencyCode: string
  declare quoteCurrencyCode: string
  declare rateDate: string
  declare rate: number
  declare source: string
  declare createdAt: Date
}

export function initPlatformFxRateEntity(sequelize: Sequelize): typeof PlatformFxRateEntity {
  PlatformFxRateEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('platform_fx_rate')"),
      },
      fxRateId: {
        type: DataTypes.TEXT,
        field: 'fx_rate_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
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
      }
    },
    {
      sequelize,
      tableName: 'platform_fx_rate',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['base_currency_code', 'quote_currency_code', 'rate_date'] }
      ]
    }
  )
  return PlatformFxRateEntity
}
