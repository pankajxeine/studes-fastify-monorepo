import { DataTypes, Model, Sequelize, Optional } from 'sequelize'

export type CustomersAttributes = {
  id?: number | null
  name?: string | null
  contact_title?: string | null
  customer_type?: string | null
  contact_name?: string | null
  customer_status_id?: number | null
  created_by?: number | null
  updated_by?: number | null
  customer_number?: string | null
  type?: string | null
  customer_email?: string | null
  client_email?: string | null
  dba?: string | null
  contract_start_date?: string | null
  contract_expire_date?: string | null
  cost_center?: number | null
  city?: string | null
  state_id?: number | null
  country_id?: number | null
  postal_code?: number | null
  phone_number?: string | number | null
  street_address?: string | null
  chain_number?: string | null
  sic_code?: number | null
  branch_id?: number | null
  status?: string | null
  hours_elapsed?: number | null
  minutes_elapsed?: number | null
  is_new_client?: string | null
  allow_package_upgrade?: string | null
  created_at?: string | null
  updated_at?: string | null
  deleted_at?: string | null
}

export type CustomersCreationAttributes = Optional<CustomersAttributes, "id" | "name" | "contact_title" | "customer_type" | "contact_name" | "customer_status_id" | "created_by" | "updated_by" | "customer_number" | "type" | "customer_email" | "client_email" | "dba" | "contract_start_date" | "contract_expire_date" | "cost_center" | "city" | "state_id" | "country_id" | "postal_code" | "phone_number" | "street_address" | "chain_number" | "sic_code" | "branch_id" | "status" | "hours_elapsed" | "minutes_elapsed" | "is_new_client" | "allow_package_upgrade" | "created_at" | "updated_at" | "deleted_at">

export class CustomersEntity
  extends Model<CustomersAttributes, CustomersCreationAttributes>
  implements CustomersAttributes
{
  declare id: number | null
  declare name: string | null
  declare contact_title: string | null
  declare customer_type: string | null
  declare contact_name: string | null
  declare customer_status_id: number | null
  declare created_by: number | null
  declare updated_by: number | null
  declare customer_number: string | null
  declare type: string | null
  declare customer_email: string | null
  declare client_email: string | null
  declare dba: string | null
  declare contract_start_date: string | null
  declare contract_expire_date: string | null
  declare cost_center: number | null
  declare city: string | null
  declare state_id: number | null
  declare country_id: number | null
  declare postal_code: number | null
  declare phone_number: string | number | null
  declare street_address: string | null
  declare chain_number: string | null
  declare sic_code: number | null
  declare branch_id: number | null
  declare status: string | null
  declare hours_elapsed: number | null
  declare minutes_elapsed: number | null
  declare is_new_client: string | null
  declare allow_package_upgrade: string | null
  declare created_at: string | null
  declare updated_at: string | null
  declare deleted_at: string | null
}

export function initCustomersEntity(sequelize: Sequelize): typeof CustomersEntity {
  CustomersEntity.init(
    {
      id: {
        type: DataTypes.TEXT,
        field: 'id',
        allowNull: true,
      },
      name: {
        type: DataTypes.CHAR,
        field: 'name',
        allowNull: true,
        defaultValue: null,
      },
      contact_title: {
        type: DataTypes.CHAR,
        field: 'contact_title',
        allowNull: true,
        defaultValue: null,
      },
      customer_type: {
        type: DataTypes.CHAR,
        field: 'customer_type',
        allowNull: true,
        defaultValue: null,
      },
      contact_name: {
        type: DataTypes.CHAR,
        field: 'contact_name',
        allowNull: true,
        defaultValue: null,
      },
      customer_status_id: {
        type: DataTypes.TEXT,
        field: 'customer_status_id',
        allowNull: true,
      },
      created_by: {
        type: DataTypes.TEXT,
        field: 'created_by',
        allowNull: true,
      },
      updated_by: {
        type: DataTypes.TEXT,
        field: 'updated_by',
        allowNull: true,
      },
      customer_number: {
        type: DataTypes.CHAR,
        field: 'customer_number',
        allowNull: true,
        defaultValue: null,
      },
      type: {
        type: DataTypes.CHAR,
        field: 'type',
        allowNull: true,
        defaultValue: null,
      },
      customer_email: {
        type: DataTypes.CHAR,
        field: 'customer_email',
        allowNull: true,
        defaultValue: null,
      },
      client_email: {
        type: DataTypes.CHAR,
        field: 'client_email',
        allowNull: true,
        defaultValue: null,
      },
      dba: {
        type: DataTypes.CHAR,
        field: 'dba',
        allowNull: true,
        defaultValue: null,
      },
      contract_start_date: {
        type: DataTypes.CHAR,
        field: 'contract_start_date',
        allowNull: true,
        defaultValue: null,
      },
      contract_expire_date: {
        type: DataTypes.CHAR,
        field: 'contract_expire_date',
        allowNull: true,
        defaultValue: null,
      },
      cost_center: {
        type: DataTypes.TEXT,
        field: 'cost_center',
        allowNull: true,
      },
      city: {
        type: DataTypes.CHAR,
        field: 'city',
        allowNull: true,
        defaultValue: null,
      },
      state_id: {
        type: DataTypes.TEXT,
        field: 'state_id',
        allowNull: true,
      },
      country_id: {
        type: DataTypes.TEXT,
        field: 'country_id',
        allowNull: true,
      },
      postal_code: {
        type: DataTypes.INTEGER,
        field: 'postal_code',
        allowNull: true,
      },
      phone_number: {
        type: DataTypes.BIGINT,
        field: 'phone_number',
        allowNull: true,
      },
      street_address: {
        type: DataTypes.CHAR,
        field: 'street_address',
        allowNull: true,
        defaultValue: null,
      },
      chain_number: {
        type: DataTypes.CHAR,
        field: 'chain_number',
        allowNull: true,
        defaultValue: null,
      },
      sic_code: {
        type: DataTypes.TEXT,
        field: 'sic_code',
        allowNull: true,
      },
      branch_id: {
        type: DataTypes.TEXT,
        field: 'branch_id',
        allowNull: true,
      },
      status: {
        type: DataTypes.CHAR,
        field: 'status',
        allowNull: true,
        defaultValue: null,
      },
      hours_elapsed: {
        type: DataTypes.TEXT,
        field: 'hours_elapsed',
        allowNull: true,
      },
      minutes_elapsed: {
        type: DataTypes.TEXT,
        field: 'minutes_elapsed',
        allowNull: true,
      },
      is_new_client: {
        type: DataTypes.CHAR,
        field: 'is_new_client',
        allowNull: true,
        defaultValue: null,
      },
      allow_package_upgrade: {
        type: DataTypes.CHAR,
        field: 'allow_package_upgrade',
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: DataTypes.CHAR,
        field: 'created_at',
        allowNull: true,
        defaultValue: null,
      },
      updated_at: {
        type: DataTypes.CHAR,
        field: 'updated_at',
        allowNull: true,
        defaultValue: null,
      },
      deleted_at: {
        type: DataTypes.CHAR,
        field: 'deleted_at',
        allowNull: true,
        defaultValue: null,
      }
    },
    {
      sequelize,
      tableName: 'customers',
      timestamps: true,
      underscored: true,
      freezeTableName: true,
      paranoid: true
    }
  )
  return CustomersEntity
}
