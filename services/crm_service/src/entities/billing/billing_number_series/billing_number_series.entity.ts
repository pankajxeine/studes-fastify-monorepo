import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type BillingNumberSeriesAttributes = {
  id?: string | number | null
  publicId?: string
  recordCode?: string
  legalEntityId: string
  documentType: string
  fiscalYear: number
  prefix: string
  nextNumber?: string | number
  padding?: number
  UNIQUE?: string | null
}

export type BillingNumberSeriesCreationAttributes = Optional<BillingNumberSeriesAttributes, "id" | "publicId" | "recordCode" | "nextNumber" | "padding" | "UNIQUE">

export class BillingNumberSeriesEntity
  extends Model<BillingNumberSeriesAttributes, BillingNumberSeriesCreationAttributes>
  implements BillingNumberSeriesAttributes
{
  declare id: string | number | null
  declare publicId: string
  declare recordCode: string
  declare legalEntityId: string
  declare documentType: string
  declare fiscalYear: number
  declare prefix: string
  declare nextNumber: string | number
  declare padding: number
  declare UNIQUE: string | null
}

export function initBillingNumberSeriesEntity(sequelize: Sequelize): typeof BillingNumberSeriesEntity {
  BillingNumberSeriesEntity.init(
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
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('billing_number_series')"),
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
      },
      UNIQUE: {
        type: DataTypes.TEXT,
        field: 'UNIQUE',
        allowNull: true,
      }
    },
    {
      sequelize,
      tableName: 'billing_number_series',
      timestamps: false,
      underscored: true,
      freezeTableName: true
    }
  )
  return BillingNumberSeriesEntity
}
