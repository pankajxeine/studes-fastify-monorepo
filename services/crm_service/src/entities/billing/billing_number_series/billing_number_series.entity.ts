import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingNumberSeriesAttributes = {
  recordCode?: string
  numberSeriesId: string | null
  legalEntityId: string
  documentType: string
  fiscalYear: number
  prefix: string
  nextNumber?: string | number
  padding?: number
}

export type BillingNumberSeriesCreationAttributes = Optional<BillingNumberSeriesAttributes, "recordCode" | "nextNumber" | "padding">

export class BillingNumberSeriesEntity
  extends Model<BillingNumberSeriesAttributes, BillingNumberSeriesCreationAttributes>
  implements BillingNumberSeriesAttributes
{
  declare recordCode: string
  declare numberSeriesId: string | null
  declare legalEntityId: string
  declare documentType: string
  declare fiscalYear: number
  declare prefix: string
  declare nextNumber: string | number
  declare padding: number
}

export function initBillingNumberSeriesEntity(sequelize: Sequelize): typeof BillingNumberSeriesEntity {
  BillingNumberSeriesEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_number_series')"),
      },
      numberSeriesId: {
        type: DataTypes.TEXT,
        field: 'number_series_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      legalEntityId: {
        type: DataTypes.TEXT,
        field: 'legal_entity_id',
        allowNull: false,
        references: { model: 'org_legal_entity', key: 'legal_entity_id' },
      },
      documentType: {
        type: DataTypes.STRING(12),
        field: 'document_type',
        allowNull: false,
      },
      fiscalYear: {
        type: DataTypes.SMALLINT,
        field: 'fiscal_year',
        allowNull: false,
      },
      prefix: {
        type: DataTypes.STRING(20),
        field: 'prefix',
        allowNull: false,
      },
      nextNumber: {
        type: DataTypes.BIGINT,
        field: 'next_number',
        allowNull: false,
        defaultValue: 1,
      },
      padding: {
        type: DataTypes.SMALLINT,
        field: 'padding',
        allowNull: false,
        defaultValue: 6,
      }
    },
    {
      sequelize,
      tableName: 'billing_number_series',
      timestamps: false,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['legal_entity_id', 'document_type', 'fiscal_year'] }
      ]
    }
  )
  return BillingNumberSeriesEntity
}
