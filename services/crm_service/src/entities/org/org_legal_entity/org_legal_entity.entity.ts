import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type OrgLegalEntityAttributes = {
  recordCode?: string
  legalEntityId: string | null
  legalEntityCode: string
  legalName: string
  countryCode: string
  taxRegistrationNo?: string | null
  functionalCurrencyCode: string
  registeredAddress: unknown
  invoicePrefix: string
  isActive?: string
  createdAt?: Date
  createdBy?: string | null
  updatedAt?: Date
  updatedBy?: string | null
}

export type OrgLegalEntityCreationAttributes = Optional<OrgLegalEntityAttributes, "recordCode" | "taxRegistrationNo" | "isActive" | "createdAt" | "createdBy" | "updatedAt" | "updatedBy">

export class OrgLegalEntityEntity
  extends Model<OrgLegalEntityAttributes, OrgLegalEntityCreationAttributes>
  implements OrgLegalEntityAttributes
{
  declare recordCode: string
  declare legalEntityId: string | null
  declare legalEntityCode: string
  declare legalName: string
  declare countryCode: string
  declare taxRegistrationNo: string | null
  declare functionalCurrencyCode: string
  declare registeredAddress: unknown
  declare invoicePrefix: string
  declare isActive: string
  declare createdAt: Date
  declare createdBy: string | null
  declare updatedAt: Date
  declare updatedBy: string | null
}

export function initOrgLegalEntityEntity(sequelize: Sequelize): typeof OrgLegalEntityEntity {
  OrgLegalEntityEntity.init(
    {
      recordCode: {
        type: DataTypes.TEXT,
        field: 'record_code',
        allowNull: false,
        unique: true,
        defaultValue: Sequelize.literal("core.fn_next_record_code_for_table ('org_legal_entity')"),
      },
      legalEntityId: {
        type: DataTypes.TEXT,
        field: 'legal_entity_id',
        allowNull: true,
        primaryKey: true,
        defaultValue: Sequelize.literal("gen_random_uuid ()"),
      },
      legalEntityCode: {
        type: DataTypes.TEXT,
        field: 'legal_entity_code',
        allowNull: false,
      },
      legalName: {
        type: DataTypes.TEXT,
        field: 'legal_name',
        allowNull: false,
      },
      countryCode: {
        type: DataTypes.TEXT,
        field: 'country_code',
        allowNull: false,
        references: { model: 'platform_country', key: 'country_code' },
      },
      taxRegistrationNo: {
        type: DataTypes.STRING(40),
        field: 'tax_registration_no',
        allowNull: true,
      },
      functionalCurrencyCode: {
        type: DataTypes.TEXT,
        field: 'functional_currency_code',
        allowNull: false,
        references: { model: 'platform_currency', key: 'currency_code' },
      },
      registeredAddress: {
        type: DataTypes.JSONB,
        field: 'registered_address',
        allowNull: false,
      },
      invoicePrefix: {
        type: DataTypes.STRING(10),
        field: 'invoice_prefix',
        allowNull: false,
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
      tableName: 'org_legal_entity',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['legal_entity_code'] }
      ]
    }
  )
  return OrgLegalEntityEntity
}
