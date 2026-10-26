import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CrmQuoteLineAttributes = {
  recordCode?: string
  quoteLineId: string | null
  quoteId: string
  lineNo: number
  planPriceId?: string | null
  addonPriceId?: string | null
  description: string
  quantity?: number
  listAmount: string
  discountPercent?: string
  netAmount?: string | null
}

export type CrmQuoteLineCreationAttributes = Optional<CrmQuoteLineAttributes, "recordCode" | "planPriceId" | "addonPriceId" | "quantity" | "discountPercent" | "netAmount">

export class CrmQuoteLineEntity
  extends Model<CrmQuoteLineAttributes, CrmQuoteLineCreationAttributes>
  implements CrmQuoteLineAttributes
{
  declare recordCode: string
  declare quoteLineId: string | null
  declare quoteId: string
  declare lineNo: number
  declare planPriceId: string | null
  declare addonPriceId: string | null
  declare description: string
  declare quantity: number
  declare listAmount: string
  declare discountPercent: string
  declare netAmount: string | null
}

export function initCrmQuoteLineEntity(sequelize: Sequelize): typeof CrmQuoteLineEntity {
  CrmQuoteLineEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('crm_quote_line')"),
      },
      quoteLineId: {
        type: DataTypes.TEXT,
        field: 'quote_line_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      quoteId: {
        type: DataTypes.TEXT,
        field: 'quote_id',
        allowNull: false,
        references: { model: 'crm_quote', key: 'quote_id' },
        onDelete: 'CASCADE',
      },
      lineNo: {
        type: DataTypes.SMALLINT,
        field: 'line_no',
        allowNull: false,
      },
      planPriceId: {
        type: DataTypes.TEXT,
        field: 'plan_price_id',
        allowNull: true,
        references: { model: 'commerce_plan_price', key: 'plan_price_id' },
      },
      addonPriceId: {
        type: DataTypes.TEXT,
        field: 'addon_price_id',
        allowNull: true,
        references: { model: 'commerce_addon_price', key: 'addon_price_id' },
      },
      description: {
        type: DataTypes.TEXT,
        field: 'description',
        allowNull: false,
      },
      quantity: {
        type: DataTypes.DECIMAL(12, 2),
        field: 'quantity',
        allowNull: false,
        defaultValue: 1,
      },
      listAmount: {
        type: DataTypes.TEXT,
        field: 'list_amount',
        allowNull: false,
      },
      discountPercent: {
        type: DataTypes.TEXT,
        field: 'discount_percent',
        allowNull: false,
        defaultValue: 0,
      },
      netAmount: {
        type: DataTypes.TEXT,
        field: 'net_amount',
        allowNull: true,
        autoIncrement: true,
      }
    },
    {
      sequelize,
      tableName: 'crm_quote_line',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['quote_id', 'line_no'] }
      ]
    }
  )
  return CrmQuoteLineEntity
}
