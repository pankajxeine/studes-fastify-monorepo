import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CommercePriceBookAttributes = {
  recordCode?: string
  priceBookId: string | null
  priceBookCode: string
  name: string
  currencyCode: string
  legalEntityId?: string | null
  isDefault?: string
  validFrom?: string
  validTo?: Date | null
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type CommercePriceBookCreationAttributes = Optional<CommercePriceBookAttributes, "recordCode" | "legalEntityId" | "isDefault" | "validFrom" | "validTo" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class CommercePriceBookEntity
  extends Model<CommercePriceBookAttributes, CommercePriceBookCreationAttributes>
  implements CommercePriceBookAttributes
{
  declare recordCode: string
  declare priceBookId: string | null
  declare priceBookCode: string
  declare name: string
  declare currencyCode: string
  declare legalEntityId: string | null
  declare isDefault: string
  declare validFrom: string
  declare validTo: Date | null
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initCommercePriceBookEntity(sequelize: Sequelize): typeof CommercePriceBookEntity {
  CommercePriceBookEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('commerce_price_book')"),
      },
      priceBookId: {
        type: DataTypes.TEXT,
        field: 'price_book_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      priceBookCode: {
        type: DataTypes.TEXT,
        field: 'price_book_code',
        allowNull: false,
      },
      name: {
        type: DataTypes.TEXT,
        field: 'name',
        allowNull: false,
      },
      currencyCode: {
        type: DataTypes.TEXT,
        field: 'currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      legalEntityId: {
        type: DataTypes.TEXT,
        field: 'legal_entity_id',
        allowNull: true,
        references: { model: 'org_legal_entity', key: 'legal_entity_id' },
      },
      isDefault: {
        type: DataTypes.TEXT,
        field: 'is_default',
        allowNull: false,
        defaultValue: false,
      },
      validFrom: {
        type: DataTypes.TEXT,
        field: 'valid_from',
        allowNull: false,
        defaultValue: Sequelize.literal("current_date"),
      },
      validTo: {
        type: DataTypes.DATEONLY,
        field: 'valid_to',
        allowNull: true,
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
      tableName: 'commerce_price_book',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['price_book_code'] }
      ]
    }
  )
  return CommercePriceBookEntity
}
