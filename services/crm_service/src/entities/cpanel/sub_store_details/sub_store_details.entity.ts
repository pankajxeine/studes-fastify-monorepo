import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type SubStoreDetailsAttributes = {
  id?: string | number | null
  subCompanyId?: number | null
  posStoreId?: number
  subId?: number | null
  storeName?: string | null
  phone?: string | null
  billingContactPerson?: string | null
  billingAddress1?: string | null
  billingAddress2?: string | null
  billingCountry?: number | null
  billingState?: string | number | null
  billingCity?: string | null
  billingPostalcode?: string | null
  shippingContactPerson?: string | null
  shippingAddress1?: string | null
  shippingAddress2?: string | null
  shippingCountry?: number | null
  shippingState?: number | null
  shippingCity?: string | null
  shippingPostalcode?: string | null
  mid?: string | null
  virtualTerminal?: string | null
  routingNumber?: string | null
  accountNumber?: string | null
  timezoneId?: number | null
  isPrimaryStore?: string
  isBillingShippingSame?: string
  storeSequance?: number | null
  achCompany?: string | null
  bankAccountType?: string | null
  receivingAccount?: string | null
  purchasedTerms?: unknown | null
  createdAt?: Date
  updatedAt?: Date
}

export type SubStoreDetailsCreationAttributes = Optional<SubStoreDetailsAttributes, "id" | "subCompanyId" | "posStoreId" | "subId" | "storeName" | "phone" | "billingContactPerson" | "billingAddress1" | "billingAddress2" | "billingCountry" | "billingState" | "billingCity" | "billingPostalcode" | "shippingContactPerson" | "shippingAddress1" | "shippingAddress2" | "shippingCountry" | "shippingState" | "shippingCity" | "shippingPostalcode" | "mid" | "virtualTerminal" | "routingNumber" | "accountNumber" | "timezoneId" | "isPrimaryStore" | "isBillingShippingSame" | "storeSequance" | "achCompany" | "bankAccountType" | "receivingAccount" | "purchasedTerms" | "createdAt" | "updatedAt">

export class SubStoreDetailsEntity
  extends Model<SubStoreDetailsAttributes, SubStoreDetailsCreationAttributes>
  implements SubStoreDetailsAttributes
{
  declare id: string | number | null
  declare subCompanyId: number | null
  declare posStoreId: number
  declare subId: number | null
  declare storeName: string | null
  declare phone: string | null
  declare billingContactPerson: string | null
  declare billingAddress1: string | null
  declare billingAddress2: string | null
  declare billingCountry: number | null
  declare billingState: string | number | null
  declare billingCity: string | null
  declare billingPostalcode: string | null
  declare shippingContactPerson: string | null
  declare shippingAddress1: string | null
  declare shippingAddress2: string | null
  declare shippingCountry: number | null
  declare shippingState: number | null
  declare shippingCity: string | null
  declare shippingPostalcode: string | null
  declare mid: string | null
  declare virtualTerminal: string | null
  declare routingNumber: string | null
  declare accountNumber: string | null
  declare timezoneId: number | null
  declare isPrimaryStore: string
  declare isBillingShippingSame: string
  declare storeSequance: number | null
  declare achCompany: string | null
  declare bankAccountType: string | null
  declare receivingAccount: string | null
  declare purchasedTerms: unknown | null
  declare createdAt: Date
  declare updatedAt: Date
}

export function initSubStoreDetailsEntity(sequelize: Sequelize): typeof SubStoreDetailsEntity {
  SubStoreDetailsEntity.init(
    {
      id: {
        type: DataTypes.BIGINT,
        field: 'id',
        allowNull: true,
        primaryKey: true,
        autoIncrement: true,
        defaultValue: "AS IDENTITY",
      },
      subCompanyId: {
        type: DataTypes.INTEGER,
        field: 'sub_company_id',
        allowNull: true,
      },
      posStoreId: {
        type: DataTypes.INTEGER,
        field: 'pos_store_id',
        allowNull: false,
        defaultValue: "0",
      },
      subId: {
        type: DataTypes.INTEGER,
        field: 'sub_id',
        allowNull: true,
        references: { model: 'subs', key: 'id' },
      },
      storeName: {
        type: DataTypes.STRING(100),
        field: 'store_name',
        allowNull: true,
      },
      phone: {
        type: DataTypes.TEXT,
        field: 'phone',
        allowNull: true,
      },
      billingContactPerson: {
        type: DataTypes.STRING(100),
        field: 'billing_contact_person',
        allowNull: true,
      },
      billingAddress1: {
        type: DataTypes.STRING(100),
        field: 'billing_address1',
        allowNull: true,
      },
      billingAddress2: {
        type: DataTypes.STRING(100),
        field: 'billing_address2',
        allowNull: true,
      },
      billingCountry: {
        type: DataTypes.INTEGER,
        field: 'billing_country',
        allowNull: true,
      },
      billingState: {
        type: DataTypes.BIGINT,
        field: 'billing_state',
        allowNull: true,
      },
      billingCity: {
        type: DataTypes.STRING(30),
        field: 'billing_city',
        allowNull: true,
      },
      billingPostalcode: {
        type: DataTypes.STRING(10),
        field: 'billing_postalcode',
        allowNull: true,
      },
      shippingContactPerson: {
        type: DataTypes.STRING(100),
        field: 'shipping_contact_person',
        allowNull: true,
      },
      shippingAddress1: {
        type: DataTypes.STRING(100),
        field: 'shipping_address1',
        allowNull: true,
      },
      shippingAddress2: {
        type: DataTypes.STRING(100),
        field: 'shipping_address2',
        allowNull: true,
      },
      shippingCountry: {
        type: DataTypes.INTEGER,
        field: 'shipping_country',
        allowNull: true,
      },
      shippingState: {
        type: DataTypes.INTEGER,
        field: 'shipping_state',
        allowNull: true,
      },
      shippingCity: {
        type: DataTypes.STRING(30),
        field: 'shipping_city',
        allowNull: true,
      },
      shippingPostalcode: {
        type: DataTypes.STRING(10),
        field: 'shipping_postalcode',
        allowNull: true,
      },
      mid: {
        type: DataTypes.STRING(50),
        field: 'mid',
        allowNull: true,
      },
      virtualTerminal: {
        type: DataTypes.STRING(200),
        field: 'virtual_terminal',
        allowNull: true,
      },
      routingNumber: {
        type: DataTypes.STRING(50),
        field: 'routing_number',
        allowNull: true,
      },
      accountNumber: {
        type: DataTypes.STRING(50),
        field: 'account_number',
        allowNull: true,
      },
      timezoneId: {
        type: DataTypes.INTEGER,
        field: 'timezone_id',
        allowNull: true,
        references: { model: 'timezones', key: 'id' },
      },
      isPrimaryStore: {
        type: DataTypes.TEXT,
        field: 'is_primary_store',
        allowNull: false,
        defaultValue: "FALSE",
      },
      isBillingShippingSame: {
        type: DataTypes.TEXT,
        field: 'is_billing_shipping_same',
        allowNull: false,
        defaultValue: "FALSE",
      },
      storeSequance: {
        type: DataTypes.INTEGER,
        field: 'store_sequance',
        allowNull: true,
      },
      achCompany: {
        type: DataTypes.STRING(100),
        field: 'ach_company',
        allowNull: true,
        defaultValue: "",
      },
      bankAccountType: {
        type: DataTypes.TEXT,
        field: 'bank_account_type',
        allowNull: true,
      },
      receivingAccount: {
        type: DataTypes.TEXT,
        field: 'receiving_account',
        allowNull: true,
      },
      purchasedTerms: {
        type: DataTypes.JSONB,
        field: 'purchased_terms',
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        field: 'created_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: 'updated_at',
        allowNull: false,
        defaultValue: "DataTypes.NOW",
      }
    },
    {
      sequelize,
      tableName: 'sub_store_details',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      indexes: [
      { unique: true, fields: ['id'] }
      ]
    }
  )
  return SubStoreDetailsEntity
}
